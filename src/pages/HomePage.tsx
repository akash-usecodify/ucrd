import React, { useState } from 'react';
import { 
  ArrowRight, Check, Sparkles, Clock, ShieldCheck, Zap, 
  Layers, Code, Smartphone, ShoppingCart, Palette, Search, 
  Users, Wrench, BarChart3, HelpCircle, ChevronRight, MessageSquare, Globe 
} from 'lucide-react';
import { 
  companyConfig, 
  pricingPlans, 
  servicesData, 
  testimonialsData, 
  workflowSteps, 
  faqItems,
  GLOBAL_WEBSITE_URL
} from '../data/company';
import { HeroAbstractCanvas } from '../components/illustrations/HeroAbstractCanvas';
import { AwardsMarquee } from '../components/AwardsMarquee';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('business');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'web-development': return <Code className="w-5 h-5 text-indigo-400" />;
      case 'ecommerce': return <ShoppingCart className="w-5 h-5 text-cyan-400" />;
      case 'mobile-development': return <Smartphone className="w-5 h-5 text-violet-400" />;
      case 'ui-ux-design': return <Palette className="w-5 h-5 text-pink-400" />;
      case 'seo-services': return <Search className="w-5 h-5 text-emerald-400" />;
      case 'teams-on-demand': return <Users className="w-5 h-5 text-amber-400" />;
      case 'website-maintenance': return <Wrench className="w-5 h-5 text-blue-400" />;
      case 'digital-marketing': return <BarChart3 className="w-5 h-5 text-rose-400" />;
      case 'consulting-strategy': return <Layers className="w-5 h-5 text-indigo-300" />;
      default: return <Zap className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <div className="relative pt-20 sm:pt-24 pb-16 space-y-16 sm:space-y-20">

      {/* SECTION 1: HERO */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-4 sm:pt-6 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/10 text-xs font-medium text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span>UseCodify India</span>
              <span className="text-neutral-500">·</span>
              <span className="text-indigo-300">Part of the UseCodify Global Network</span>
              <span className="text-neutral-500">·</span>
              <span className="text-emerald-400">72-Hour Rapid Delivery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              Digital Products Built with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-white">
                Architectural Precision
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              We design, engineer, and scale high-performance websites, custom web applications, e-commerce platforms, and on-demand tech teams. Reliable technology tailored for ambitious businesses across India and worldwide.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 rounded-xl shadow-xl shadow-indigo-600/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/pricing')}
                className="px-7 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white liquid-glass hover:bg-white/10 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-white/10"
              >
                <span>Explore Packages (from ₹5,999)</span>
              </button>
            </div>

            {/* Credibility highlights */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-400">
              <div>
                <span className="text-white font-semibold block text-sm">72-Hour Turnaround</span>
                <span>Fast deployment pipeline</span>
              </div>
              <div>
                <span className="text-white font-semibold block text-sm">₹5,999 Starting Price</span>
                <span>Transparent India pricing</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-white font-semibold block text-sm">Startup India &amp; TN</span>
                <span>DPIIT recognized entity</span>
              </div>
            </div>
          </div>

          {/* Right Column: Original Vector & CSS Abstract Composition */}
          <div className="lg:col-span-5 relative">
            <HeroAbstractCanvas />
          </div>

        </div>
      </section>

      {/* AWARDS & PARTNERS MARQUEE: Directly below Hero */}
      <AwardsMarquee />

      {/* SECTION 2: COMPANY POSITIONING / FOUR PILLARS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Our Foundation
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Modern Digital Execution Grounded in Business Growth
          </p>
          <p className="text-neutral-300 text-sm leading-relaxed">
            We reject fragile templates, inflated agency markups, and unmaintained code. UseCodify delivers real technical capability designed to advance your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="liquid-glass-card rounded-2xl p-6 text-left space-y-3">
            <div className="text-xs font-mono text-indigo-400">01. ACCESSIBILITY</div>
            <h3 className="text-lg font-semibold text-white">Accessible Excellence</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              World-class digital product design shouldn't be reserved only for venture-backed conglomerates. We make enterprise-grade digital systems accessible to local businesses and startups.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 text-left space-y-3">
            <div className="text-xs font-mono text-cyan-400">02. OUTCOMES</div>
            <h3 className="text-lg font-semibold text-white">Design for Outcomes</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Aesthetics without conversion is vanity. Every layout, typography hierarchy, and interactive funnel is structured to build user credibility and drive commercial inquiries.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 text-left space-y-3">
            <div className="text-xs font-mono text-violet-400">03. RELIABILITY</div>
            <h3 className="text-lg font-semibold text-white">Scalable Engineering</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              We prioritize low latency, robust cloud hosting, automated backups, and strict security rules. Your digital infrastructure operates smoothly around the clock.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 text-left space-y-3">
            <div className="text-xs font-mono text-emerald-400">04. SUPPORT</div>
            <h3 className="text-lg font-semibold text-white">Clear Lifecycle Support</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              From our transparent 72-hour launch to ongoing WhatsApp-enabled edits and maintenance, you always have a direct technical partner at your side.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW (Bento Grid of all 9 Services) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-left">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Services Portfolio
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Complete Capabilities for Modern Growth
            </h3>
            <p className="text-neutral-300 text-sm max-w-xl">
              Nine integrated digital tracks providing complete execution from initial brand positioning to custom software and organic visibility.
            </p>
          </div>

          <button
            onClick={() => navigate('/services/web-development')}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 whitespace-nowrap self-start md:self-end cursor-pointer group"
          >
            <span>Explore all service guides</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc) => (
            <div
              key={svc.slug}
              className="liquid-glass-card rounded-2xl p-6 text-left flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getServiceIcon(svc.slug)}
                  </div>
                  <span className="text-[11px] font-medium text-neutral-400 tracking-wide">
                    {svc.badge}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {svc.title}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed mt-2">
                    {svc.shortDescription}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  {svc.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-400">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 flex items-center justify-between border-t border-white/[0.06]">
                <span className="text-[11px] text-neutral-500 font-mono">
                  From {svc.recommendedPlan} tier
                </span>
                <button
                  onClick={() => navigate(`/services/${svc.slug}`)}
                  className="text-xs font-semibold text-neutral-300 group-hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: COMPANY METRICS / CREDIBILITY */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl liquid-glass border border-white/10 p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            <div className="space-y-2 text-center lg:text-left pt-4 lg:pt-0">
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white tabular-nums">
                {companyConfig.stats.yearsInOperation}
              </div>
              <div className="text-sm font-semibold text-white">Years Operating</div>
              <div className="text-xs text-neutral-400">Serving businesses since Oct 2023</div>
            </div>

            <div className="space-y-2 text-center lg:text-left pt-4 lg:pt-0 lg:pl-8">
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white tabular-nums">
                {companyConfig.stats.projectsDelivered}
              </div>
              <div className="text-sm font-semibold text-white">Delivered Deployments</div>
              <div className="text-xs text-neutral-400">Websites, mobile apps &amp; systems</div>
            </div>

            <div className="space-y-2 text-center lg:text-left pt-4 lg:pt-0 lg:pl-8">
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-white tabular-nums">
                {companyConfig.stats.specialistsCount}
              </div>
              <div className="text-sm font-semibold text-white">In-House Specialists</div>
              <div className="text-xs text-neutral-400">Full-stack developers, UI/UX designers, PMs</div>
            </div>

            <div className="space-y-2 text-center lg:text-left pt-4 lg:pt-0 lg:pl-8">
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-white tabular-nums">
                {companyConfig.stats.clientSatisfaction}
              </div>
              <div className="text-sm font-semibold text-white">Satisfaction Rating</div>
              <div className="text-xs text-neutral-400">Based on verified client reviews</div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: PART OF THE USECODIFY BRAND (Brand Connection) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl liquid-glass border border-indigo-500/30 p-8 sm:p-12 relative overflow-hidden text-left shadow-2xl shadow-indigo-950/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-600/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30">
                <Globe className="w-3.5 h-3.5" />
                <span>Part of the UseCodify Brand</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Global Standards, Dedicated Indian Market Focus
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                UseCodify helps businesses build, improve, and grow their digital presence through thoughtful design, development, and digital solutions. UseCodify India serves businesses in the Indian market, while our global website provides a broader view of our international presence and offerings.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300">
                  <span className="font-semibold text-white">Chennai Studio</span>
                  <span className="text-indigo-400">↔</span>
                  <span className="font-semibold text-white">UseCodify Global</span>
                  <span className="text-neutral-500">·</span>
                  <span className="text-neutral-400">SIDCO Guindy SP–7A</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={GLOBAL_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 transition-all flex items-center gap-2 group cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <span>Explore UseCodify Global</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: INDIA PRICING PLANS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-white/10 text-xs font-medium text-indigo-400">
            <span>India Transparent Pricing</span>
            <span className="text-neutral-500">·</span>
            <span>No Hidden Costs</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Clear Packages Built for Tangible Growth
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed">
            All plans include 1-year domain name, fast cloud hosting, SSL encryption, 1 month of complimentary maintenance, and our signature 72-hour turnaround time.
          </p>
        </div>

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
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-6 text-left">
                  <div>
                    <h4 className="text-2xl font-bold text-white tracking-tight">{plan.name}</h4>
                    <p className="text-xs text-neutral-400 mt-1 min-h-[36px]">{plan.tagline}</p>
                  </div>

                  <div className="py-2 border-y border-white/[0.08]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white tabular-nums tracking-tight">
                        ₹{plan.priceINR.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400">/ {plan.period}</span>
                    </div>
                    <div className="text-xs text-indigo-400 mt-1 flex items-center gap-1 font-mono">
                      <span>Annual renewal: ₹{plan.renewalINR.toLocaleString('en-IN')}/year</span>
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
                    <div className="flex items-center gap-2 text-neutral-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{plan.editsPolicy}</span>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2.5">
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      Included In Package:
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
                    onClick={() => navigate('/contact')}
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

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            onClick={() => navigate('/pricing')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer"
          >
            <span>View complete plan comparison table &amp; add-ons</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <span className="hidden sm:inline text-neutral-600">·</span>
          <a
            href={companyConfig.globalWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white"
          >
            <span>Explore UseCodify Global &rarr;</span>
          </a>
        </div>
      </section>

      {/* SECTION 6: 4-STAGE PROJECT WORKFLOW */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Execution Roadmap
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How We Take Your Vision Live
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed">
            A disciplined four-stage workflow ensuring speed, transparency, and architectural stability from initial briefing to ongoing maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step) => (
            <div key={step.step} className="liquid-glass-card rounded-2xl p-6 text-left space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-indigo-400 text-sm">
                {step.step}
              </div>
              <div className="text-[11px] font-medium text-indigo-300">{step.tagline}</div>
              <h4 className="text-base font-bold text-white">{step.title}</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Verified Testimonials
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What Our Clients Say
          </h3>
          <p className="text-neutral-300 text-sm">
            Real feedback from clinics, businesses, and international engineering ventures powered by UseCodify.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t, idx) => (
            <div key={idx} className="liquid-glass-card rounded-2xl p-7 text-left flex flex-col justify-between space-y-6">
              <p className="text-sm text-neutral-200 leading-relaxed italic">
                "{t.quote}"
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{t.author}</div>
                  <div className="text-xs text-neutral-400">{t.role}</div>
                  {t.organization && (
                    <div className="text-[11px] text-indigo-400 mt-0.5">{t.organization}</div>
                  )}
                </div>
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: FAQ ACCORDION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Frequently Asked Questions
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Everything You Need to Know
          </h3>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className="liquid-glass-card rounded-2xl overflow-hidden border border-white/10 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left font-semibold text-sm text-neutral-200 hover:text-white flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{item.q}</span>
                  <ChevronRight className={`w-4 h-4 text-indigo-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-90' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-xs text-neutral-300 leading-relaxed border-t border-white/5 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 9: CONVERSION CTA BANNER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl liquid-glass border border-white/15 p-8 sm:p-14 relative overflow-hidden text-center space-y-6">
          <div className="liquid-glow w-96 h-96 -top-20 left-1/2 -translate-x-1/2 bg-indigo-500/20" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Ready to Upgrade Your Digital Infrastructure?
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Launch within 72 hours with our dedicated digital specialists in Chennai. Tell us about your goals and let's craft a solution tailored to your business.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`mailto:${companyConfig.email}`}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white liquid-glass rounded-xl transition-all flex items-center justify-center gap-2 border border-white/10"
              >
                <span>Email {companyConfig.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
