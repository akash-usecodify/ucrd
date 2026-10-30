import React from 'react';
import { ShieldAlert, ArrowLeft, Mail, ChevronRight, FileText } from 'lucide-react';
import { companyConfig } from '../data/company';

interface RefundPolicyPageProps {
  navigate: (path: string) => void;
}

export const RefundPolicyPage: React.FC<RefundPolicyPageProps> = ({ navigate }) => {
  const tableOfContents = [
    { title: '1. General Principles', id: 'principles' },
    { title: '2. Payment Structures', id: 'payment-structures' },
    { title: '3. Refunds on Deposits & Final Payments', id: 'refunds' },
    { title: '4. Revisions & Limitations', id: 'revisions' },
    { title: '5. Project Cancellation by Client', id: 'cancellation-client' },
    { title: '6. Project Cancellation by UseCodify', id: 'cancellation-usecodify' },
    { title: '7. Digital Nature of Deliverables', id: 'digital-nature' },
    { title: '8. How to Request a Refund', id: 'how-to-request' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative pt-24 pb-16 space-y-12">
      
      {/* HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-8 text-left space-y-4">
        <button
          onClick={() => navigate('/')}
          className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-white/10 text-xs font-medium text-neutral-400">
            <ShieldAlert className="w-3.5 h-3.5 text-indigo-400" />
            <span>Customer Payment &amp; Return Terms</span>
            <span className="text-neutral-600">·</span>
            <span>Effective Date: May 13, 2025</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            UseCodify Refund Policy &amp; Return Policy
          </h1>

          <div className="text-xs text-neutral-400 flex flex-wrap gap-x-4 gap-y-1">
            <span>Effective Date: May 13, 2025</span>
            <span>·</span>
            <span>Last Updated: August 16, 2025</span>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed pt-2 border-l-2 border-indigo-500 pl-4 bg-white/[0.02] py-2 rounded-r-xl">
            Clear rules on payments, refunds, cancellations and revision limits for website design &amp; development services.
          </p>
        </div>
      </section>

      {/* CLICKABLE TABLE OF CONTENTS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
        <div className="liquid-glass rounded-2xl p-6 border border-white/10 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>On This Page</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="p-2 rounded-lg hover:bg-white/[0.05] text-neutral-300 hover:text-white transition-colors flex items-center justify-between group"
              >
                <span>{item.title}</span>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENT CONTENT */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
        <div className="liquid-glass-card rounded-3xl p-8 sm:p-12 border border-white/10 space-y-12 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          
          {/* 1. General Principles */}
          <div id="principles" className="space-y-3 scroll-mt-28">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-indigo-400 font-mono">1.</span>
              <span>General Principles</span>
            </h2>
            <p>
              All payments made to UseCodify are for professional services &mdash; including time, resources, and expertise allocated to your project. Refunds are limited and strictly governed by the terms on this page. By engaging with our services, the Client agrees to these conditions.
            </p>
          </div>

          {/* 2. Payment Structures */}
          <div id="payment-structures" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-indigo-400 font-mono">2.</span>
              <span>Payment Structures</span>
            </h2>
            <p>
              We offer two primary payment options for website projects:
            </p>

            {/* Preserved Payment Structures Table */}
            <div className="rounded-xl overflow-hidden border border-white/10">
              <table className="w-full text-left text-xs">
                <thead className="bg-white/[0.06] text-neutral-200 uppercase font-semibold border-b border-white/10 text-[11px]">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 w-1/3">Plan</th>
                    <th scope="col" className="px-5 py-3.5">When Paid</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] bg-black/20">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-5 py-3.5 font-bold text-white">Full Upfront Payment</td>
                    <td className="px-5 py-3.5 text-neutral-300">100% paid before project work begins.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-5 py-3.5 font-bold text-indigo-300">40/60 Payment Plan</td>
                    <td className="px-5 py-3.5 text-neutral-300">40% deposit before work begins; remaining 60% due on delivery of project preview.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Refunds on Deposits & Final Payments */}
          <div id="refunds" className="space-y-4 scroll-mt-28">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-indigo-400 font-mono">3.</span>
              <span>Refunds on Deposits &amp; Final Payments</span>
            </h2>

            <div className="space-y-3 pl-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                <h3 className="text-sm font-bold text-white">40% Deposit (40/60 Plan)</h3>
                <p>
                  The initial 40% deposit is non-refundable once work has commenced. This deposit covers developer time, design work, and resources already invested in the project.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                <h3 className="text-sm font-bold text-white">60% Final Payment (40/60 Plan)</h3>
                <p>
                  The final 60% must be paid within 1.5 weeks (10 days) after the preview link is provided. If the Client fails to complete this payment, UseCodify may cancel the project. In such cases, the 40% deposit remains non-refundable and the Client will not receive project deliverables.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                <h3 className="text-sm font-bold text-white">Full Upfront Payment</h3>
                <p>
                  If the Client cancels the project before a preview is provided, a partial refund (up to 60%) may be considered depending on work completed. Once a preview has been delivered, no refund is available on the upfront payment.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-neutral-200 space-y-1.5">
                <h3 className="text-sm font-bold text-amber-300">Project Information Hold Period (45 Days)</h3>
                <p>
                  If we do not receive the required project information after the deposit has been made, and you neither complete the information form nor notify us whether you want us to create the content or provide it yourself, the project will be placed on hold for up to 45 days. During this period we will await your response; however, the deposit is strictly non-refundable. The project may resume within this timeframe if you provide the necessary inputs. Work will not commence until we receive your formal confirmation to proceed, regardless of deposit payment.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Revisions & Limitations */}
          <div id="revisions" className="space-y-3 scroll-mt-28">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-indigo-400 font-mono">4.</span>
              <span>Revisions &amp; Limitations</span>
            </h2>
            <p>
              All Clients, regardless of payment plan, are entitled to two (2) complimentary revision rounds after the preview is shown. If the Client accepts the preview immediately, the two revisions remain available for future use. Additional revisions beyond the included two will be treated as paid services.
            </p>
            <p>
              Revisions are limited to 25% of the website's content. Requests beyond this scope may be classified as a redesign, requiring a new paid engagement. Paid revisions are non-refundable.
            </p>
          </div>

          {/* 5. Project Cancellation by Client */}
          <div id="cancellation-client" className="space-y-3 scroll-mt-28">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-indigo-400 font-mono">5.</span>
              <span>Project Cancellation by Client</span>
            </h2>
            <p>
              If the Client cancels a project after work has started, any completed stages (planning, design, coding, etc.) will be billed proportionally. Refund eligibility will be assessed only on unused, unallocated project portions.
            </p>
          </div>

          {/* 6. Project Cancellation by UseCodify */}
          <div id="cancellation-usecodify" className="space-y-3 scroll-mt-28">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-indigo-400 font-mono">6.</span>
              <span>Project Cancellation by UseCodify</span>
            </h2>
            <p>UseCodify reserves the right to cancel a project if:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-300">
              <li>The Client fails to make payments on time.</li>
              <li>The Client breaches contractual obligations.</li>
              <li>The Client engages in abusive or unethical behaviour.</li>
            </ul>
            <p>
              In such cases, no refund will be provided for completed work or deposits already paid.
            </p>
          </div>

          {/* 7. Digital Nature of Deliverables */}
          <div id="digital-nature" className="space-y-3 scroll-mt-28">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-indigo-400 font-mono">7.</span>
              <span>Digital Nature of Deliverables</span>
            </h2>
            <p>
              Website development is a digital, customised, and labour-intensive service. All refunds are handled on a case-by-case basis and are not guaranteed beyond the conditions set out here.
            </p>
          </div>

          {/* 8. How to Request a Refund */}
          <div id="how-to-request" className="space-y-3 scroll-mt-28">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-indigo-400 font-mono">8.</span>
              <span>How to Request a Refund</span>
            </h2>
            <p>
              All refund requests must be submitted in writing to the company's designated refund contact email:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <div className="text-[11px] text-neutral-400 uppercase font-semibold">Official Refund Inquiries</div>
                <a 
                  href={`mailto:${companyConfig.email}`} 
                  className="font-mono text-white text-sm font-bold hover:text-indigo-400 transition-colors"
                >
                  {companyConfig.email}
                </a>
              </div>
            </div>
            <p>
              Each case will be reviewed by our accounts team within 10 business days. You will receive written confirmation of the outcome and any next steps.
            </p>
            <p className="pt-2 text-xs text-neutral-400 border-t border-white/5">
              This policy applies to website design &amp; development services provided by UseCodify Ltd (UK) and UseCodify India (OPC) Pvt Ltd. For contract-specific refund terms, please refer to the signed agreement.
            </p>
          </div>

        </div>
      </section>

      {/* Return to website */}
      <div className="text-center pt-4">
        <button
          onClick={() => navigate('/')}
          className="text-xs font-semibold text-neutral-400 hover:text-white inline-flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </button>
      </div>

    </div>
  );
};
