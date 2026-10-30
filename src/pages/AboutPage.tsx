import React from 'react';
import { 
  ArrowRight, ShieldCheck, Target, HeartHandshake, Zap, 
  MapPin, CheckCircle2, Globe, Building, Sparkles 
} from 'lucide-react';
import { companyConfig, workflowSteps, GLOBAL_WEBSITE_URL } from '../data/company';
import { AboutVectorCanvas } from '../components/illustrations/AboutVectorCanvas';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="relative pt-24 pb-16 space-y-24">
      
      {/* SECTION 1: WHO WE ARE (HERO & PURPOSE OF USECODIFY INDIA) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/10 text-xs font-medium text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span>Who We Are</span>
              <span className="text-neutral-500">·</span>
              <span className="text-indigo-300">Part of the UseCodify Brand</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              A Digital Services &amp; Technology Company Built for Real Business Growth
            </h1>

            <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
              <p>
                UseCodify India (OPC) Private Limited is a specialized digital services and technology company. We help businesses of all sizes establish, elevate, and expand their online presence through practical execution, thoughtful design, reliable development, and transparent collaboration.
              </p>
              <p>
                Founded in October 2023, UseCodify set out with a straightforward mission: to eliminate the friction, unpredictable costs, and bloated timelines that often hold businesses back from achieving digital credibility. Today, operating from our digital studio in Guindy, Chennai, we support businesses across India and around the globe.
              </p>
              <p>
                <strong className="text-white font-semibold">The Purpose of UseCodify India:</strong> As the dedicated Indian operating entity of the broader UseCodify brand, UseCodify India serves businesses in the domestic market with localized support, direct UPI payment gateways, GST compliance, and accessible pricing starting at ₹5,999, while holding every digital deliverable to international product standards.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block tabular-nums">2+ Years</span>
                <span className="text-neutral-400">Serving Businesses</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block tabular-nums">70+</span>
                <span className="text-neutral-400">Projects Delivered</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block tabular-nums">10+</span>
                <span className="text-neutral-400">In-House Specialists</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block tabular-nums">98%</span>
                <span className="text-neutral-400">Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <AboutVectorCanvas />
          </div>

        </div>
      </section>

      {/* SECTION 2: WHAT WE BELIEVE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Our Principles
          </h2>
          <h3 className="text-3xl font-bold text-white">
            What We Believe
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Our values govern how we design interfaces, build software systems, and advise our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="liquid-glass-card rounded-2xl p-6 text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Practical Business Value</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Technology exists to solve real commercial problems. We do not build digital monuments to personal vanity; we build tools that attract customers, generate qualified leads, and streamline operations.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-600/20 flex items-center justify-center text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">High Execution Standards</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Good design is clear, intuitive, and accessible. Reliable code is fast, secure, and maintainable. We respect both aesthetic craftsmanship and structural integrity in every deliverable.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center text-emerald-400">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Transparent Partnerships</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              We operate without hidden charges, unexpected invoices, or technical jargon. From upfront pricing to clear revision limits and straightforward renewal terms, our communication remains honest.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE DO */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl liquid-glass border border-white/10 p-8 sm:p-12 text-left space-y-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Core Competencies
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              What We Do
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              UseCodify offers comprehensive digital execution across strategy, design, development, marketing, and continuous maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-neutral-300">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <h4 className="text-sm font-bold text-white">Website Design &amp; Development</h4>
              <p className="leading-relaxed">
                Fast, responsive, conversion-centered business websites built with modern web standards and rapid 72-hour launch workflows.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <h4 className="text-sm font-bold text-white">E-Commerce Systems</h4>
              <p className="leading-relaxed">
                Complete online stores with integrated domestic UPI and international payment gateways, inventory management, and automated notifications.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <h4 className="text-sm font-bold text-white">Mobile Application Solutions</h4>
              <p className="leading-relaxed">
                User-friendly mobile apps crafted for seamless touch interaction, low battery consumption, and cross-platform compatibility.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <h4 className="text-sm font-bold text-white">UI/UX Interface Systems</h4>
              <p className="leading-relaxed">
                User research, wireframing, clickable prototypes, and unified design token systems compliant with accessibility standards.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <h4 className="text-sm font-bold text-white">SEO &amp; Digital Marketing</h4>
              <p className="leading-relaxed">
                Technical search optimization, commercial keyword targeting, and multi-channel performance ad campaigns with clear attribution.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <h4 className="text-sm font-bold text-white">Teams On Demand &amp; Maintenance</h4>
              <p className="leading-relaxed">
                Flexible specialist staffing to augment your team, alongside proactive website maintenance, security patching, and daily backups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW WE WORK */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Delivery Framework
          </h2>
          <h3 className="text-3xl font-bold text-white">
            How We Work
          </h3>
          <p className="text-neutral-300 text-sm">
            A structured four-stage methodology refined over dozens of client deliveries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((s) => (
            <div key={s.step} className="liquid-glass-card rounded-2xl p-6 text-left space-y-3">
              <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-600/20 px-2.5 py-1 rounded-md">
                STAGE {s.step}
              </span>
              <h4 className="text-base font-bold text-white mt-1">{s.title}</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: OUR APPROACH TO CLIENT RELATIONSHIPS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="liquid-glass-card rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Client Stewardship
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Our Approach to Client Relationships
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              We view client engagements as collaborative partnerships rather than one-off transactions. When you work with UseCodify, you can expect:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-300 pt-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Clear Communication &amp; SLAs</h4>
                <p className="leading-relaxed text-neutral-400">
                  Direct communication via WhatsApp and email, with responses provided within 24 hours and guaranteed 72-hour turnaround for our website packages.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Transparent Billing</h4>
                <p className="leading-relaxed text-neutral-400">
                  Fixed pricing packages starting at ₹5,999, predictable milestone payment options (including our 40/60 plan), and no hidden ongoing server fees.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Unrestricted Asset Ownership</h4>
                <p className="leading-relaxed text-neutral-400">
                  Upon completion of final payment, you retain full ownership of your domain, content, design assets, and client-specific deliverables.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Ongoing Post-Launch Care</h4>
                <p className="leading-relaxed text-neutral-400">
                  Every package includes 1 month of complimentary maintenance, with prompt assistance for content edits, domain security, and performance upkeep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: EXPLORE USECODIFY GLOBAL */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl liquid-glass border border-indigo-500/30 p-8 sm:p-12 text-left relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30">
                <Globe className="w-3.5 h-3.5" />
                <span>International Presence</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Explore UseCodify Global
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
                UseCodify serves businesses through its broader international presence and digital services. To learn more about our global operations, offerings, cross-border client engagements, and international presence, visit our global website.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={GLOBAL_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Visit UseCodify Global</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* VERIFIED OPERATING LOCATION & STATUTORY CREDENTIALS (ONLY Operating Office) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl liquid-glass border border-white/10 p-8 sm:p-10 text-left">
          <div className="max-w-2xl mb-6 space-y-1">
            <h3 className="text-lg font-bold text-white">Verified Company Credentials</h3>
            <p className="text-xs text-neutral-400">
              Official corporate registration and recognized operating status in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-neutral-300">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-neutral-400 block font-medium">Corporate Identification Number (CIN)</span>
              <span className="font-mono font-semibold text-white text-sm">{companyConfig.cin}</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-neutral-400 block font-medium">GST Identification Number (GSTIN)</span>
              <span className="font-mono font-semibold text-white text-sm">{companyConfig.gstin}</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-neutral-400 block font-medium">Government Recognition</span>
              <span className="font-semibold text-emerald-400 text-sm">Startup India (DPIIT) &amp; StartupTN</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1 lg:col-span-2">
              <span className="text-neutral-400 block font-medium">Operating Office Address</span>
              <span className="text-white">
                {companyConfig.operatingAddress.doorNo}, {companyConfig.operatingAddress.building}, {companyConfig.operatingAddress.estate}, {companyConfig.operatingAddress.locality}, {companyConfig.operatingAddress.city}, {companyConfig.operatingAddress.state} {companyConfig.operatingAddress.pincode}, India
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-neutral-400 block font-medium">Direct Inquiries</span>
              <span className="font-mono text-indigo-400 text-sm">{companyConfig.email}</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
