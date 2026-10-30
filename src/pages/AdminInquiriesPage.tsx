import React, { useState, useEffect } from 'react';
import { 
  Inbox, Search, Filter, RefreshCw, Download, Mail, Phone, 
  MessageSquare, Clock, CheckCircle2, AlertCircle, Trash2, 
  ChevronRight, Lock, KeyRound, ExternalLink, ArrowLeft, Shield 
} from 'lucide-react';
import type { InquiryRecord } from '../types';
import { companyConfig } from '../data/company';

interface AdminInquiriesPageProps {
  navigate: (path: string) => void;
}

export const AdminInquiriesPage: React.FC<AdminInquiriesPageProps> = ({ navigate }) => {
  // Passkey protection (default: usecodify2025)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('usecodify_admin_auth') === 'true';
  });
  const [passkeyInput, setPasskeyInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryRecord | null>(null);
  const [editingNotes, setEditingNotes] = useState<{ [id: string]: string }>({});

  const correctPasskey = 'usecodify2025';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkeyInput.trim() === correctPasskey) {
      setIsAuthenticated(true);
      sessionStorage.setItem('usecodify_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid administrator passkey. Please check your credentials.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('usecodify_admin_auth');
  };

  const fetchInquiries = async () => {
    setIsLoading(true);
    setError('');
    try {
      const params = new URLSearchParams();
      if (statusFilter !== 'all') params.set('status', statusFilter);
      if (searchQuery.trim()) params.set('search', searchQuery.trim());

      const res = await fetch(`/api/inquiries?${params.toString()}`);
      const contentType = res.headers.get('content-type') || '';
      if (!res.ok || !contentType.includes('application/json')) {
        throw new Error(
          'Node.js backend API (/api/inquiries) is not running on this server. In a static web hosting deployment (FTP/cPanel), the server only serves static files and does not execute the Node.js API. Inquiries are safely routed to direct email and WhatsApp.'
        );
      }
      const data = await res.json();
      if (data.success) {
        setInquiries(data.inquiries || []);
      } else {
        throw new Error(data.error || 'Failed to fetch inquiries.');
      }
    } catch (err: any) {
      setError(err.message || 'Unable to connect to the inquiries server.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchInquiries();
    }
  }, [isAuthenticated, statusFilter]);

  const updateStatus = async (id: string, newStatus: InquiryRecord['status']) => {
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiries(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
        if (selectedInquiry?.id === id) {
          setSelectedInquiry(prev => prev ? { ...prev, status: newStatus } : null);
        }
      }
    } catch (err) {
      console.error('Failed to update inquiry status:', err);
    }
  };

  const saveNotes = async (id: string) => {
    const notes = editingNotes[id];
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiries(prev => prev.map(item => item.id === id ? { ...item, notes } : item));
        alert('Notes saved successfully.');
      }
    } catch (err) {
      alert('Failed to save notes.');
    }
  };

  const deleteInquiry = async (id: string) => {
    if (!window.confirm('Are you sure you want to permanently delete this inquiry record?')) return;
    try {
      const res = await fetch(`/api/inquiries/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setInquiries(prev => prev.filter(i => i.id !== id));
        if (selectedInquiry?.id === id) setSelectedInquiry(null);
      }
    } catch (err) {
      alert('Failed to delete inquiry.');
    }
  };

  // Status badge styling
  const getStatusBadge = (status: InquiryRecord['status']) => {
    switch (status) {
      case 'new':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">New Inquiry</span>;
      case 'contacted':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">Contacted</span>;
      case 'in_progress':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">In Discussion</span>;
      case 'converted':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">Converted / Won</span>;
      case 'archived':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-neutral-800 text-neutral-400 border border-neutral-700">Archived</span>;
      default:
        return null;
    }
  };

  // Auth Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-md p-8 rounded-3xl liquid-glass border border-white/15 shadow-2xl text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto text-indigo-400">
            <Lock className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-white">Client Enquiries Portal</h1>
            <p className="text-xs text-neutral-400">
              Administrative access for UseCodify India management
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            {authError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Admin Security Passkey
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={passkeyInput}
                  onChange={(e) => setPasskeyInput(e.target.value)}
                  placeholder="Enter administrator passkey..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  autoFocus
                />
                <KeyRound className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
              </div>
              <p className="text-[10px] text-neutral-500 mt-1.5">
                Default deployment passkey: <code className="text-indigo-300">usecodify2025</code>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30 cursor-pointer"
            >
              Authenticate &amp; View Enquiries
            </button>
          </form>

          <div className="pt-4 border-t border-white/5">
            <button
              onClick={() => navigate('/')}
              className="text-xs text-neutral-400 hover:text-white flex items-center justify-center gap-1.5 mx-auto"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Dashboard
  const newCount = inquiries.filter(i => i.status === 'new').length;
  const inProgressCount = inquiries.filter(i => i.status === 'in_progress' || i.status === 'contacted').length;
  const convertedCount = inquiries.filter(i => i.status === 'converted').length;

  return (
    <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 text-left">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-white/10 text-xs font-medium text-emerald-400 mb-2">
            <Shield className="w-3.5 h-3.5" />
            <span>Secure Operations Panel</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Client Enquiries &amp; Leads</h1>
          <p className="text-xs text-neutral-400 mt-1">
            Stored persistently in server database at <code className="text-indigo-300">/data/inquiries.json</code>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/api/inquiries/export/csv"
            download
            className="px-4 py-2.5 rounded-xl liquid-glass border border-white/15 text-neutral-200 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-indigo-400" />
            <span>Export CSV</span>
          </a>

          <button
            onClick={fetchInquiries}
            disabled={isLoading}
            className="px-4 py-2.5 rounded-xl liquid-glass border border-white/15 text-neutral-200 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 text-cyan-400 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-medium transition-colors"
          >
            Lock / Log Out
          </button>
        </div>
      </div>

      {/* Backend Status Alert if API is unreachable */}
      {error && (
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-3 text-left">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-white block">Node.js Inquiries API Notice</span>
            <p className="text-neutral-300 leading-relaxed">{error}</p>
          </div>
        </div>
      )}

      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
        <div className="liquid-glass-card rounded-2xl p-5 border border-white/10">
          <span className="text-xs text-neutral-400 block">Total Submissions</span>
          <span className="text-2xl sm:text-3xl font-extrabold text-white mt-1 block tabular-nums">{inquiries.length}</span>
          <span className="text-[11px] text-neutral-500 mt-1 block">All-time received</span>
        </div>

        <div className="liquid-glass-card rounded-2xl p-5 border border-emerald-500/20 bg-emerald-950/10">
          <span className="text-xs text-emerald-400 block font-medium">New / Unprocessed</span>
          <span className="text-2xl sm:text-3xl font-extrabold text-white mt-1 block tabular-nums">{newCount}</span>
          <span className="text-[11px] text-emerald-400/80 mt-1 block">Awaiting outreach</span>
        </div>

        <div className="liquid-glass-card rounded-2xl p-5 border border-indigo-500/20 bg-indigo-950/10">
          <span className="text-xs text-indigo-300 block font-medium">In Discussion</span>
          <span className="text-2xl sm:text-3xl font-extrabold text-white mt-1 block tabular-nums">{inProgressCount}</span>
          <span className="text-[11px] text-indigo-400/80 mt-1 block">Active pipeline</span>
        </div>

        <div className="liquid-glass-card rounded-2xl p-5 border border-purple-500/20 bg-purple-950/10">
          <span className="text-xs text-purple-300 block font-medium">Converted / Won</span>
          <span className="text-2xl sm:text-3xl font-extrabold text-white mt-1 block tabular-nums">{convertedCount}</span>
          <span className="text-[11px] text-purple-400/80 mt-1 block">Closed projects</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Inquiries' },
            { id: 'new', label: 'New' },
            { id: 'contacted', label: 'Contacted' },
            { id: 'in_progress', label: 'In Discussion' },
            { id: 'converted', label: 'Converted' },
            { id: 'archived', label: 'Archived' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                statusFilter === tab.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'liquid-glass text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchInquiries()}
            placeholder="Search by name, email, phone..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-indigo-500"
          />
          <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Inquiries List & Detail Split View */}
      {inquiries.length === 0 ? (
        <div className="p-12 rounded-3xl liquid-glass border border-white/10 text-center space-y-3">
          <Inbox className="w-10 h-10 text-neutral-600 mx-auto" />
          <h3 className="text-base font-bold text-white">No inquiries found</h3>
          <p className="text-xs text-neutral-400 max-w-sm mx-auto">
            {searchQuery || statusFilter !== 'all' 
              ? 'No submissions matched your active search filters.' 
              : 'As visitors submit the website contact form, their inquiries will appear here automatically.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Inquiries Cards Column */}
          <div className="lg:col-span-6 space-y-3">
            {inquiries.map((inq) => {
              const isSelected = selectedInquiry?.id === inq.id;
              const formattedDate = new Date(inq.createdAt).toLocaleDateString('en-IN', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <div
                  key={inq.id}
                  onClick={() => setSelectedInquiry(inq)}
                  className={`p-5 rounded-2xl transition-all cursor-pointer text-left border ${
                    isSelected 
                      ? 'liquid-glass border-indigo-500 bg-indigo-950/20 shadow-xl' 
                      : 'liquid-glass-card border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-white">{inq.fullName}</h4>
                      <div className="text-[11px] text-indigo-300 font-medium mt-0.5">{inq.service}</div>
                    </div>
                    {getStatusBadge(inq.status)}
                  </div>

                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed mb-3">
                    {inq.message}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-neutral-400 font-mono">
                    <span>{inq.email}</span>
                    <span>{formattedDate}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Inquiry Detail View */}
          <div className="lg:col-span-6 sticky top-24">
            {selectedInquiry ? (
              <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-white/15 space-y-6 text-left shadow-2xl">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="text-[11px] font-mono text-neutral-500">
                      ID: {selectedInquiry.id}
                    </div>
                    <h2 className="text-xl font-bold text-white mt-1">{selectedInquiry.fullName}</h2>
                    <div className="text-xs text-indigo-300 font-medium mt-0.5">{selectedInquiry.service}</div>
                  </div>

                  <button
                    onClick={() => deleteInquiry(selectedInquiry.id)}
                    className="p-2 rounded-xl text-neutral-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                    title="Delete Inquiry"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Direct Action Buttons: Email and WhatsApp */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`mailto:${selectedInquiry.email}?subject=UseCodify India: Your inquiry regarding ${encodeURIComponent(selectedInquiry.service)}&body=Hello ${encodeURIComponent(selectedInquiry.fullName)},\n\nThank you for reaching out to UseCodify India regarding ${encodeURIComponent(selectedInquiry.service)}.\n\nWe have reviewed your requirements:\n"${encodeURIComponent(selectedInquiry.message)}"\n\n`}
                    className="py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Reply via Email</span>
                  </a>

                  <a
                    href={`https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedInquiry.fullName)},%20this%20is%20UseCodify%20India%20regarding%20your%20inquiry%20for%20${encodeURIComponent(selectedInquiry.service)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                {/* Contact Information */}
                <div className="space-y-3 bg-white/[0.02] p-4 rounded-2xl border border-white/5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Email Address:</span>
                    <a href={`mailto:${selectedInquiry.email}`} className="text-white font-mono hover:underline">
                      {selectedInquiry.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Phone / WhatsApp:</span>
                    <a href={`tel:${selectedInquiry.phone}`} className="text-white font-mono hover:underline">
                      {selectedInquiry.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Date Received:</span>
                    <span className="text-neutral-200 font-mono">
                      {new Date(selectedInquiry.createdAt).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Full Enquiry Message */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-neutral-300">Client Project Requirements:</div>
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-neutral-200 leading-relaxed whitespace-pre-wrap font-sans">
                    {selectedInquiry.message}
                  </div>
                </div>

                {/* Status Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-neutral-300">
                    Lead Status Workflow:
                  </label>
                  <select
                    value={selectedInquiry.status}
                    onChange={(e) => updateStatus(selectedInquiry.id, e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs focus:outline-none focus:border-indigo-500 cursor-pointer"
                  >
                    <option value="new" className="bg-neutral-900 text-white">New Inquiry (Uncontacted)</option>
                    <option value="contacted" className="bg-neutral-900 text-white">Contacted / Initial Email Sent</option>
                    <option value="in_progress" className="bg-neutral-900 text-white">In Discussion / Scope Drafting</option>
                    <option value="converted" className="bg-neutral-900 text-white">Converted (Payment Received / Project Won)</option>
                    <option value="archived" className="bg-neutral-900 text-white">Archived / Closed</option>
                  </select>
                </div>

                {/* Private Internal Notes */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-neutral-300">Internal Agency Notes:</span>
                    <button
                      onClick={() => saveNotes(selectedInquiry.id)}
                      className="text-[11px] text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer"
                    >
                      Save Notes
                    </button>
                  </div>
                  <textarea
                    rows={3}
                    defaultValue={selectedInquiry.notes || ''}
                    onChange={(e) => setEditingNotes(prev => ({ ...prev, [selectedInquiry.id]: e.target.value }))}
                    placeholder="Add private follow-up notes, quoted prices, or client preferences here..."
                    className="w-full p-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-indigo-500 resize-none"
                  />
                </div>

              </div>
            ) : (
              <div className="p-12 rounded-3xl liquid-glass border border-white/10 text-center space-y-2">
                <Inbox className="w-8 h-8 text-neutral-600 mx-auto" />
                <h3 className="text-sm font-semibold text-white">Select an inquiry to view details</h3>
                <p className="text-xs text-neutral-400">
                  Click any inquiry from the list on the left to review the full message, reply via email or WhatsApp, and update lead status.
                </p>
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
};
