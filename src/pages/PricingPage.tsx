import React, { useState } from 'react';
import { 
  Check, ArrowRight, ShieldCheck, Clock, HelpCircle, 
  Sparkles, CheckCircle2, ChevronDown, MessageSquare 
} from 'lucide-react';
import { pricingPlans, companyConfig, faqItems } from '../data/company';

interface PricingPageProps {
  navigate: (path: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ navigate }) => {
  const [selectedPlanForInquiry, setSelectedPlanForInquiry] = useState<string>('business');

  const comparisonFeatures = [
    { name: 'Number of Custom Pages', kickstart: '3 Pages', business: '6 Pages', growth: '10 Pages' },
    { name: 'Turnaround Delivery Time', kickstart: '72 Hours', business: '72 Hours', growth: '72 Hours' },
    { name: 'Domain Registration (.in / .co.in)', kickstart: '1 Year Included', business: '1 Year Included', growth: '1 Year Included' },
    { name: 'High-Speed SSD Hosting & SSL', kickstart: '1 Year Included', business: '1 Year Included', growth: '1 Year Included' },
    { name: 'Complimentary Maintenance', kickstart: '1 Month Free', business: '1 Month Free', growth: '1 Month Free' },
    { name: 'WhatsApp Direct Chat Integration', kickstart: 'Yes', business: 'Yes', growth: 'Yes (Auto-reply)' },
    { name: 'Interactive Contact Form', kickstart: 'Yes', business: 'Yes', growth: 'Yes' },
    { name: 'Website Content Edits', kickstart: 'WhatsApp (24h SLA)', business: 'WhatsApp (24h SLA)', growth: 'Admin CMS + 24h SLA' },
    { name: 'Professional Business Email', kickstart: 'Not included', business: '1 Custom Email', growth: '2 Custom Emails' },
    { name: 'Basic Search Engine Optimization (SEO)', kickstart: 'Not included', business: 'Included', growth: 'Advanced Included' },
    { name: 'Social Media Profiles Integration', kickstart: 'Basic', business: 'Included', growth: 'Included' },
    { name: 'Admin CMS Self-Editing Access', kickstart: 'Managed only', business: 'Managed only', growth: 'Full Admin Portal' },
    { name: 'Blog Setup for Content Marketing', kickstart: 'Not included', business: 'Not included', growth: 'Included' },
    { name: 'Google Business Profile Setup', kickstart: 'Not included', business: 'Not included', growth: 'Included' },
    { name: 'Annual Renewal Fee (Hosting, SSL, Domain)', kickstart: '₹2,000 / year', business: '₹2,999 / year', growth: '₹3,499 / year' },
  ];

  const handleSelectPlan = (planId: string) => {
    navigate(`/contact?plan=${planId}`);
  };

  return (
    <div className="relative pt-20 sm:pt-24 pb-16 space-y-16 sm:space-y-20">
      
      {/* HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-4 sm:pt-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-white/10 text-xs font-medium text-indigo-400">
          <span>Official India Pricing</span>
          <span className="text-neutral-500">·</span>
          <span>INR Currency Guaranteed</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Transparent Packages for Every Stage of Business
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          No hidden fees or surprise developer invoices. Every package includes full domain setup, cloud hosting, SSL certificates, 1 month of complimentary maintenance, and our 72-hour delivery guarantee.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular 
                    ? 'liquid-glass border-2 border-indigo-500/60 shadow-2xl shadow-indigo-600/20 lg:-translate-y-2' 
                    : 'liquid-glass-card border border-white/10'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-[11px] font-bold tracking-wider uppercase shadow-md">
                    Recommended Small Business Plan
                  </div>
                )}

                <div className="space-y-6 text-left">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{plan.name}</h3>
                    <p className="text-xs text-neutral-400 mt-1 min-h-[36px]">{plan.tagline}</p>
                  </div>

                  <div className="py-2 border-y border-white/[0.08]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white tabular-nums tracking-tight">
                        ₹{plan.priceINR.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400">/ {plan.period}</span>
                    </div>
                    <div className="text-xs text-indigo-400 mt-1 font-mono">
                      Annual renewal: ₹{plan.renewalINR.toLocaleString('en-IN')}/year
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-neutral-200">
                      <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="font-semibold text-white">{plan.turnaround}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{plan.pagesCount}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{plan.maintenance}</span>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2.5">
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      Package Features:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        {feat.included ? (
                          <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        ) : (
                          <span className="w-3.5 h-3.5 rounded-full border border-neutral-700 shrink-0 mt-0.5 flex items-center justify-center text-[9px] text-neutral-600">&times;</span>
                        )}
                        <span className={feat.included ? 'text-neutral-200' : 'text-neutral-500 line-through'}>
                          {feat.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-white/[0.08] space-y-2.5">
                  <button
                    onClick={() => handleSelectPlan(plan.id)}
                    className={`w-full py-3.5 rounded-xl font-semibold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:brightness-110'
                        : 'bg-white/10 hover:bg-white/15 text-white'
                    }`}
                  >
                    <span>Get Started with {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={companyConfig.razorpayPaymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl font-semibold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 border border-indigo-400/30 text-indigo-300 hover:text-white hover:bg-indigo-600/15 cursor-pointer bg-white/[0.02]"
                  >
                    <span>Pay Now &rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DETAILED FEATURE COMPARISON TABLE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Side-By-Side Breakdown
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Comprehensive Feature Matrix
          </h3>
        </div>

        <div className="rounded-3xl liquid-glass border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-neutral-300">
              <thead className="bg-white/[0.04] text-neutral-200 uppercase tracking-wider text-[11px] border-b border-white/10 font-semibold">
                <tr>
                  <th scope="col" className="px-6 py-4 min-w-[240px]">Plan Deliverable</th>
                  <th scope="col" className="px-6 py-4 text-center">KickStart (₹5,999)</th>
                  <th scope="col" className="px-6 py-4 text-center bg-indigo-600/10 text-indigo-300">
                    Business (₹7,999)
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">Growth (₹9,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-3.5 font-medium text-white">{row.name}</td>
                    <td className="px-6 py-3.5 text-center text-neutral-400">{row.kickstart}</td>
                    <td className="px-6 py-3.5 text-center font-medium text-indigo-200 bg-indigo-600/5">
                      {row.business}
                    </td>
                    <td className="px-6 py-3.5 text-center text-neutral-300">{row.growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PAYMENT OPTIONS EXPLANATION (40/60 & Full Upfront) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl liquid-glass-card p-8 sm:p-10 border border-white/10 text-left space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Flexible Payment Structures</h3>
            <p className="text-xs text-neutral-400">
              We provide transparent payment options aligned with project milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                <span>Option A: 40/60 Milestone Plan</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Pay an initial 40% deposit to initiate design, architecture, and development. The remaining 60% is due only upon delivery of your functional preview link (within 10 days of presentation).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <span>Option B: Full Upfront Payment</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Pay 100% upfront for expedited priority processing. All project assets, domain setup, and live server credentials are configuration-locked and released immediately upon final sign-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL ENQUIRY CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="rounded-3xl liquid-glass border border-white/15 p-8 sm:p-12 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Have Custom Requirements?
          </h3>
          <p className="text-sm text-neutral-300 max-w-lg mx-auto">
            Need custom backend APIs, enterprise e-commerce integrations, or on-demand engineering teams? Let's discuss a tailored scope.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-600/30 cursor-pointer"
          >
            Request Custom Quotation
          </button>
        </div>
      </section>

    </div>
  );
};
