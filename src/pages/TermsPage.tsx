import React from 'react';
import { ShieldCheck, FileText, ArrowLeft, Mail } from 'lucide-react';
import { companyConfig } from '../data/company';

interface TermsPageProps {
  navigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ navigate }) => {
  return (
    <div className="relative pt-24 pb-16 space-y-16">
      
      {/* HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-8 text-left space-y-4">
        <button
          onClick={() => navigate('/')}
          className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-white/10 text-xs font-medium text-neutral-400">
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            <span>Legal Documentation</span>
            <span className="text-neutral-600">·</span>
            <span>Effective: 13 May 2025</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Terms of Service &amp; Data Processing Addendum (DPA)
          </h1>
          <p className="text-xs text-neutral-400">
            Last Updated: 16 August 2025 | Applicable to all digital services, website packages, and custom software engagements.
          </p>
        </div>
      </section>

      {/* DOCUMENT CONTENT */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
        <div className="liquid-glass-card rounded-3xl p-8 sm:p-12 border border-white/10 space-y-10 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Introduction &amp; Acceptance</h2>
            <p>
              These Terms of Service ("Terms") together with the incorporated Data Processing Addendum ("DPA") govern the relationship between <strong className="text-white">{companyConfig.legalName}</strong> (corporate identity number CIN: {companyConfig.cin}, with operating office at Ground Floor, Primus Building, Door No. SP–7A, Guindy Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai 600032, Tamil Nadu, India) operating under the commercial brand name <strong className="text-white">UseCodify</strong> ("we", "us", or "Company"), and the business, entity, or individual contracting for services ("Client", "you", or "User").
            </p>
            <p>
              By commissioning a website package, submitting a project brief, executing a quotation, or accessing our software services, you irrevocably agree to be bound by these Terms in their entirety.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Covered Legal Entities &amp; Structure</h2>
            <p>
              Services provided within the Republic of India and regional subcontinent are contracted with <strong className="text-white">UseCodify India (OPC) Private Limited</strong>. Where specific international client agreements designate cross-border contracts, governance may incorporate affiliated entity provisions of UseCodify Ltd, while preserving local performance standards.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Scope of Services</h2>
            <p>
              UseCodify provides custom digital services, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Website design and full-stack development (including KickStart, Business, and Growth packages).</li>
              <li>E-Commerce systems and online checkout integration.</li>
              <li>Native and hybrid mobile applications.</li>
              <li>UI/UX digital product prototyping and interface architecture.</li>
              <li>Search engine optimization (SEO) and technical website performance tuning.</li>
              <li>Teams On Demand specialist engineering resourcing.</li>
              <li>Website maintenance, scheduled updates, and cloud hosting infrastructure.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Turnaround Times &amp; Delivery SLAs</h2>
            <p>
              Our published turnaround time for standard website packages (KickStart, Business, Growth) is 72 hours from the point of receipt of complete and necessary project inputs (including logo assets, text copy, brand color preferences, and confirmation of domain availability). Turnaround clocks pause when awaiting client feedback, credentials, or review approvals.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Client Responsibilities &amp; Content Clearances</h2>
            <p>
              The Client is solely responsible for ensuring that all copy, trademarks, photographic media, audio assets, and data provided to UseCodify do not infringe upon any third-party intellectual property rights, copyrights, or applicable laws. UseCodify accepts no liability for claims arising from client-provided materials.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Payments, Renewals &amp; Milestone Billing</h2>
            <p>
              Services are billed in Indian Rupees (INR, ₹) for Indian domestic clients. Project pricing follows agreed written quotations or published package tariffs.
            </p>
            <p>
              For projects utilizing the <strong className="text-white">40/60 Milestone Payment Structure</strong>: an initial 40% non-refundable deposit is required prior to commencement of wireframing, architecture, and coding. The remaining 60% balance is payable within 10 days of delivery of the staging/preview link.
            </p>
            <p>
              <strong className="text-white">Annual Renewals:</strong> Hosting, SSL certificate, and domain registration renewals are charged annually (KickStart: ₹2,000/yr; Business: ₹2,999/yr; Growth: ₹3,499/yr). Non-payment of renewal fees upon due date may result in server suspension or loss of domain registry rights.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">7. Intellectual Property &amp; Source Code Ownership</h2>
            <p>
              Upon receipt of final and full payment for deliverables, the Client is granted complete commercial ownership and unrestricted license to use the final customized visual layouts, text assets, and client-specific code. UseCodify retains all rights to its pre-existing proprietary frameworks, developer utility libraries, build configurations, and reusable code modules.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">8. Data Processing Addendum (DPA)</h2>
            <p>
              This section constitutes our Data Processing Addendum under applicable data protection regulations:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li><strong className="text-neutral-200">Scope:</strong> We process personal data solely to execute requested web services, customer communications, and technical hosting maintenance.</li>
              <li><strong className="text-neutral-200">Data Categories:</strong> Contact data (names, phone numbers, email addresses), business credentials, website content, and analytics metadata.</li>
              <li><strong className="text-neutral-200">Subprocessors:</strong> We engage verified third-party cloud infrastructure and domain registry providers (including certified hosting clusters, SSL authorities, and registrar partners).</li>
              <li><strong className="text-neutral-200">Security Safeguards:</strong> We enforce SSL 256-bit encryption, strict credential partitioning, routine security patch cycles, and off-site snapshot backups.</li>
              <li><strong className="text-neutral-200">Data Subject Rights:</strong> Clients retain rights to inspect, export, rectify, or request deletion of their hosted data upon written notice.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall UseCodify India (OPC) Private Limited, its directors, employees, or contractors be liable for any indirect, punitive, incidental, special, or consequential damages, including loss of profits, downtime, or data corruption. Our aggregate liability arising under any claim shall not exceed the total fees paid by the Client for the specific engagement giving rise to the dispute during the previous 12 months.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">10. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of India. The courts located in Chennai, Tamil Nadu, India shall have exclusive jurisdiction to settle any disputes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">11. Legal Inquiries &amp; Notices</h2>
            <p>
              Formal legal notices or queries regarding these Terms may be directed in writing to:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1 font-mono text-xs text-neutral-300">
              <div>Legal Department, UseCodify India (OPC) Private Limited</div>
              <div>Ground Floor, Primus Building, Door No. SP–7A, Guindy Industrial Estate, Chennai 600032, Tamil Nadu, India</div>
              <div>Email: {companyConfig.email}</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
