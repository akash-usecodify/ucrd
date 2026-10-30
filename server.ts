import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { InquiryRecord } from './src/types';
export type { InquiryRecord };

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // Persistent storage directory for client inquiries
  const dataDir = path.resolve(__dirname, 'data');
  const inquiriesFile = path.resolve(dataDir, 'inquiries.json');

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(inquiriesFile)) {
    fs.writeFileSync(inquiriesFile, JSON.stringify([], null, 2), 'utf-8');
  }

  const readInquiries = (): InquiryRecord[] => {
    try {
      const content = fs.readFileSync(inquiriesFile, 'utf-8');
      return JSON.parse(content);
    } catch (e) {
      console.error('Error reading inquiries:', e);
      return [];
    }
  };

  const writeInquiries = (data: InquiryRecord[]): boolean => {
    try {
      fs.writeFileSync(inquiriesFile, JSON.stringify(data, null, 2), 'utf-8');
      return true;
    } catch (e) {
      console.error('Error writing inquiries:', e);
      return false;
    }
  };

  // 1. Submit a new client inquiry
  app.post('/api/inquiries', (req, res) => {
    try {
      const { fullName, email, phone, service, message } = req.body;

      // Validation
      if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
        return res.status(400).json({ success: false, error: 'Full name is required.' });
      }
      if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email.trim())) {
        return res.status(400).json({ success: false, error: 'Valid email address is required.' });
      }
      if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
        return res.status(400).json({ success: false, error: 'Valid phone/WhatsApp number is required.' });
      }
      if (!message || typeof message !== 'string' || !message.trim()) {
        return res.status(400).json({ success: false, error: 'Project description is required.' });
      }

      const inquiries = readInquiries();
      const newInquiry: InquiryRecord = {
        id: 'inq_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        service: (service || 'General Website Inquiry').trim(),
        message: message.trim(),
        status: 'new',
        createdAt: new Date().toISOString(),
        userAgent: (req.headers['user-agent'] as string) || '',
        ip: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '',
      };

      inquiries.unshift(newInquiry);
      const saved = writeInquiries(inquiries);

      if (!saved) {
        return res.status(500).json({ success: false, error: 'Failed to write inquiry to persistent storage.' });
      }

      console.log(`[NEW INQUIRY] ID: ${newInquiry.id} | From: ${newInquiry.fullName} (${newInquiry.email}) | Service: ${newInquiry.service}`);

      return res.status(201).json({
        success: true,
        message: 'Inquiry received and safely stored on server.',
        inquiry: {
          id: newInquiry.id,
          fullName: newInquiry.fullName,
          service: newInquiry.service,
          createdAt: newInquiry.createdAt,
        },
      });
    } catch (err: any) {
      console.error('Inquiry submission error:', err);
      return res.status(500).json({ success: false, error: 'Server error processing inquiry.' });
    }
  });

  // 2. Fetch all inquiries (with optional filter)
  app.get('/api/inquiries', (req, res) => {
    try {
      const inquiries = readInquiries();
      const statusFilter = req.query.status as string;
      const search = (req.query.search as string || '').toLowerCase();

      let filtered = inquiries;
      if (statusFilter && statusFilter !== 'all') {
        filtered = filtered.filter(item => item.status === statusFilter);
      }
      if (search) {
        filtered = filtered.filter(item => 
          item.fullName.toLowerCase().includes(search) ||
          item.email.toLowerCase().includes(search) ||
          item.phone.toLowerCase().includes(search) ||
          item.service.toLowerCase().includes(search) ||
          item.message.toLowerCase().includes(search)
        );
      }

      return res.json({
        success: true,
        count: filtered.length,
        total: inquiries.length,
        inquiries: filtered,
      });
    } catch (err: any) {
      console.error('Error fetching inquiries:', err);
      return res.status(500).json({ success: false, error: 'Failed to retrieve inquiries.' });
    }
  });

  // 3. Update an inquiry status or notes
  app.patch('/api/inquiries/:id', (req, res) => {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;
      const inquiries = readInquiries();
      const index = inquiries.findIndex(i => i.id === id);

      if (index === -1) {
        return res.status(404).json({ success: false, error: 'Inquiry not found.' });
      }

      if (status && ['new', 'contacted', 'in_progress', 'converted', 'archived'].includes(status)) {
        inquiries[index].status = status;
      }
      if (notes !== undefined) {
        inquiries[index].notes = String(notes);
      }
      inquiries[index].updatedAt = new Date().toISOString();

      writeInquiries(inquiries);
      return res.json({ success: true, inquiry: inquiries[index] });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: 'Failed to update inquiry.' });
    }
  });

  // 4. Delete an inquiry
  app.delete('/api/inquiries/:id', (req, res) => {
    try {
      const { id } = req.params;
      let inquiries = readInquiries();
      const initialCount = inquiries.length;
      inquiries = inquiries.filter(i => i.id !== id);

      if (inquiries.length === initialCount) {
        return res.status(404).json({ success: false, error: 'Inquiry not found.' });
      }

      writeInquiries(inquiries);
      return res.json({ success: true, message: 'Inquiry deleted successfully.' });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: 'Failed to delete inquiry.' });
    }
  });

  // 5. Export inquiries as CSV
  app.get('/api/inquiries/export/csv', (_req, res) => {
    try {
      const inquiries = readInquiries();
      const headers = ['ID', 'Date', 'Full Name', 'Email', 'Phone', 'Service', 'Status', 'Message', 'Notes'];
      
      const escapeCsv = (val: any) => {
        const str = String(val ?? '').replace(/"/g, '""');
        return `"${str}"`;
      };

      const rows = inquiries.map(item => [
        escapeCsv(item.id),
        escapeCsv(item.createdAt),
        escapeCsv(item.fullName),
        escapeCsv(item.email),
        escapeCsv(item.phone),
        escapeCsv(item.service),
        escapeCsv(item.status),
        escapeCsv(item.message),
        escapeCsv(item.notes || ''),
      ].join(','));

      const csvContent = [headers.join(','), ...rows].join('\n');

      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="usecodify-inquiries-${new Date().toISOString().slice(0, 10)}.csv"`);
      return res.send(csvContent);
    } catch (err: any) {
      return res.status(500).json({ success: false, error: 'Failed to generate CSV export.' });
    }
  });

  // Vite middleware in dev, static dist in production
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`UseCodify server running on port ${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Server startup error:', err);
  process.exit(1);
});
