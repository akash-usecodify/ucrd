import React from 'react';
import { ShieldCheck, Lock, ArrowLeft, Mail } from 'lucide-react';
import { companyConfig } from '../data/company';

interface PrivacyPolicyPageProps {
  navigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ navigate }) => {
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
            <Lock className="w-3.5 h-3.5 text-indigo-400" />
            <span>Data Privacy Policy</span>
            <span className="text-neutral-600">·</span>
            <span>Effective: 13 May 2025</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-neutral-400">
            Last Updated: 16 August 2025 | Applicable to https://usecodify.in and all digital interactions with UseCodify India (OPC) Private Limited.
          </p>
        </div>
      </section>

      {/* DOCUMENT CONTENT */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
        <div className="liquid-glass-card rounded-3xl p-8 sm:p-12 border border-white/10 space-y-10 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Introduction</h2>
            <p>
              <strong className="text-white">{companyConfig.legalName}</strong> ("Company", "UseCodify", "we", "our", or "us") is dedicated to safeguarding the privacy and confidentiality of personal data provided by visitors, clients, and partners. This Privacy Policy delineates how we collect, process, store, and safeguard your information when you visit our website (<a href="https://usecodify.in" className="text-indigo-400 underline">https://usecodify.in</a>) or engage our digital design and engineering services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p>We may collect and process the following categories of data:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-400">
              <li>
                <strong className="text-neutral-200">Voluntarily Provided Information:</strong> Full name, professional email address, telephone/WhatsApp contact number, business entity name, and detailed project specifications submitted via our contact forms or email inquiries.
              </li>
              <li>
                <strong className="text-neutral-200">Billing &amp; Transactional Data:</strong> Invoicing details, GST identification numbers (GSTIN), business address, and transaction identifiers. We do not store raw credit card numbers or UPI PINs; all digital payments are processed through RBI-authorized payment processors.
              </li>
              <li>
                <strong className="text-neutral-200">Technical Device Data:</strong> IP address, browser type, operating system version, referring URLs, and diagnostic session metrics collected to maintain system security and optimize page rendering speeds.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. How We Use Your Information</h2>
            <p>We use collected data solely for legitimate business operations:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>To provide, deploy, and maintain custom websites, mobile applications, and software systems.</li>
              <li>To respond to commercial project briefs and supply accurate cost quotations.</li>
              <li>To execute domain name registrations and SSL certificate provisioning.</li>
              <li>To fulfill statutory invoicing and GST compliance obligations under Indian corporate law.</li>
              <li>To deliver technical maintenance alerts, renewal reminders, and critical security notices.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Cookies and Analytical Technologies</h2>
            <p>
              Our website uses minimal, essential cookies necessary for site navigation, security token verification, and responsive preferences. We do not employ intrusive tracking cookies or sell your browsing history to third-party ad networks. You may disable cookies via your browser settings, though certain navigation features may be affected.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Data Sharing &amp; Subprocessors</h2>
            <p>
              We do not sell, rent, or trade your personal data. We disclose information only to vetted third-party service providers essential for delivering our services:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Cloud hosting and infrastructure providers maintaining high-availability servers.</li>
              <li>ICANN-accredited domain registrars for securing client .in, .co.in, or .com domain titles.</li>
              <li>Corporate accounting and taxation auditors as mandated by Indian statutory regulations.</li>
              <li>Affiliated international operations (UseCodify Ltd) where required for cross-border international service delivery.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Data Security Safeguards</h2>
            <p>
              We implement industry-standard physical, electronic, and managerial safeguards to protect your personal data from unauthorized access, alteration, or disclosure. These measures include TLS 1.3 cryptographic protocols, encrypted rest databases, role-based access controls, and periodic security audits.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">7. Data Retention Schedules</h2>
            <p>
              We retain personal data for the duration of the active contractual relationship plus the statutory retention period required by Indian tax and corporate laws (typically 8 years for financial and billing records). Active project working files are retained in secure archives for 12 months following project sign-off.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">8. Your Data Protection Rights</h2>
            <p>
              Under applicable data protection statutes (including the Information Technology Act, 2000 and the Digital Personal Data Protection Act), you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Request a copy of the personal information we maintain concerning you.</li>
              <li>Request rectification of inaccurate, outdated, or incomplete data.</li>
              <li>Request erasure of your data where retention is no longer legally justified.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">9. Privacy Grievances &amp; Contact</h2>
            <p>
              To exercise any of your privacy rights or submit questions regarding our data practices, please contact our Privacy Officer:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1 font-mono text-xs text-neutral-300">
              <div>Privacy &amp; Data Protection Officer</div>
              <div>UseCodify India (OPC) Private Limited</div>
              <div>Ground Floor, Primus Building, Door No. SP–7A, Guindy Industrial Estate, Chennai 600032, Tamil Nadu, India</div>
              <div>Email: <a href={`mailto:${companyConfig.email}`} className="text-indigo-400 underline">{companyConfig.email}</a></div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
