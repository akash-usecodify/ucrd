import React from 'react';
import { 
  ArrowRight, Check, Clock, ChevronRight, Layers, ShieldCheck, 
  Sparkles, CheckCircle2, ArrowLeft, ExternalLink 
} from 'lucide-react';
import { servicesData, pricingPlans, companyConfig } from '../data/company';
import { ServiceVectorIllustration } from '../components/illustrations/ServiceVectorIllustrations';

interface ServiceDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, navigate }) => {
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];
  const recommendedPricing = pricingPlans.find((p) => p.name.toLowerCase() === service.recommendedPlan.toLowerCase());

  return (
    <div className="relative pt-20 sm:pt-24 pb-16 space-y-16 sm:space-y-20">
      
      {/* BREADCRUMB & HERO */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-4 sm:pt-6">
        <div className="space-y-6 text-left">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-neutral-400">
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <button onClick={() => navigate('/#services')} className="hover:text-white transition-colors cursor-pointer">
              Services
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-indigo-400 font-medium">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-white/10 text-xs font-medium text-indigo-400">
                <span>{service.badge}</span>
                <span className="text-neutral-500">·</span>
                <span>Specialized Execution</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {service.title}
              </h1>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                {service.fullDescription}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-7 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/pricing')}
                  className="px-7 py-3 text-sm font-semibold text-neutral-200 hover:text-white liquid-glass rounded-xl border border-white/10 transition-all cursor-pointer"
                >
                  <span>View Pricing Packages</span>
                </button>
              </div>
            </div>

            {/* Original Vector Service Illustration */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <div className="rounded-2xl overflow-hidden liquid-glass-card p-2 border border-white/10 shadow-xl shadow-indigo-950/40">
                <div className="h-[240px] sm:h-[280px] lg:h-[300px] w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#121528] via-[#0d101e] to-[#070912] flex items-center justify-center p-2">
                  <ServiceVectorIllustration slug={service.slug} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DETAILED CAPABILITIES & FEATURES */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                Core Capabilities
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Engineered for High-Reliability Execution
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="liquid-glass-card rounded-xl p-4 flex items-start gap-3">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-200 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {/* Business Benefits */}
            <div className="pt-6 space-y-3">
              <h4 className="text-base font-bold text-white">Key Business Outcomes</h4>
              <div className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Deliverables & Recommended Tier */}
          <div className="lg:col-span-5 space-y-6">
            <div className="liquid-glass rounded-2xl p-6 border border-white/10 text-left space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Standard Deliverables</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Plan Card */}
            {recommendedPricing ? (
              <div className="liquid-glass-card rounded-2xl p-6 text-left space-y-4 border border-indigo-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                    Recommended Package
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    72-Hour Delivery
                  </span>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-white">{recommendedPricing.name} Plan</h5>
                  <div className="text-2xl font-black text-white mt-1 tabular-nums">
                    ₹{recommendedPricing.priceINR.toLocaleString('en-IN')}
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">{recommendedPricing.tagline}</p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => navigate('/pricing')}
                    className="w-full py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all cursor-pointer"
                  >
                    View Package Details
                  </button>
                  <a
                    href={companyConfig.razorpayPaymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 border border-indigo-400/30 text-indigo-300 hover:text-white hover:bg-indigo-600/15 cursor-pointer bg-white/[0.02]"
                  >
                    <span>Pay Now &rarr;</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="liquid-glass-card rounded-2xl p-6 text-left space-y-3">
                <h5 className="text-base font-bold text-white">Custom Enterprise Scope</h5>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Tailored scopes and dedicated sprint configurations tailored specifically to your project requirements.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all"
                >
                  Schedule Technical Discovery
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* SERVICE SPECIFIC 4-STEP PROCESS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Our Methodology
          </h2>
          <h3 className="text-3xl font-bold text-white">
            How We Execute {service.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step) => (
            <div key={step.step} className="liquid-glass-card rounded-2xl p-6 text-left space-y-3">
              <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-600/20 px-2.5 py-1 rounded-md">
                PHASE {step.step}
              </span>
              <h4 className="text-base font-bold text-white mt-1">{step.title}</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ALL SERVICES QUICK-SWITCHER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl liquid-glass border border-white/10 p-8 text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">Explore Other Specialized Services</h4>
              <p className="text-xs text-neutral-400">Discover complementary capabilities for your growth roadmap.</p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
            >
              <span>Consult our specialists</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {servicesData
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <button
                  key={s.slug}
                  onClick={() => {
                    navigate(`/services/${s.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/10 text-left transition-all group cursor-pointer"
                >
                  <div className="text-xs font-semibold text-neutral-200 group-hover:text-indigo-300 transition-colors">
                    {s.title}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5 line-clamp-1">
                    {s.shortDescription}
                  </div>
                </button>
              ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="rounded-3xl liquid-glass border border-white/15 p-8 sm:p-12 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Begin Your {service.title} Project?
          </h3>
          <p className="text-sm text-neutral-300 max-w-lg mx-auto">
            Get in touch with UseCodify India today. We provide clear technical specifications, fixed milestone pricing, and 72-hour turnaround capability.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-7 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-600/30 cursor-pointer"
            >
              Start Your Inquiry
            </button>
            <button
              onClick={() => navigate('/pricing')}
              className="px-7 py-3 text-sm font-semibold text-neutral-200 hover:text-white liquid-glass rounded-xl border border-white/10 transition-all cursor-pointer"
            >
              Compare All Pricing
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
