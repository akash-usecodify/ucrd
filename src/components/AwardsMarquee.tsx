import React from 'react';
import { ShieldCheck, Award, CheckCircle, Zap, Globe, Sparkles, Building2, CreditCard } from 'lucide-react';
import { marqueeBadges, MarqueeBadge } from '../data/company';

export const AwardsMarquee: React.FC = () => {
  const getBadgeIcon = (type: MarqueeBadge['iconType']) => {
    switch (type) {
      case 'startup_india':
        return <Award className="w-5 h-5 text-indigo-400" />;
      case 'startup_tn':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'mca':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'gst':
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      case 'razorpay':
        return <CreditCard className="w-5 h-5 text-indigo-300" />;
      case 'cloud':
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 'speed':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'quality':
        return <Sparkles className="w-5 h-5 text-violet-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
    }
  };

  // Duplicate items to ensure seamless infinite looping
  const badgesList = [...marqueeBadges, ...marqueeBadges];

  return (
    <div className="relative w-full py-6 overflow-hidden border-y border-white/[0.08] bg-[#090b12]/90 backdrop-blur-md select-none">
      
      {/* Edge gradient masks for subtle fade-in / fade-out */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#090a0f] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#090a0f] to-transparent z-10 pointer-events-none" />

      {/* Label Kicker */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between text-xs text-neutral-400">
        <span className="font-semibold uppercase tracking-wider text-[11px] text-neutral-400">
          Recognitions, Regulatory Credentials &amp; Infrastructure
        </span>
        <span className="text-[10px] text-neutral-500 font-mono hidden sm:inline-block">
          Official Registered Status &middot; Configurable in company.ts
        </span>
      </div>

      {/* Marquee Track */}
      <div className="overflow-hidden flex">
        <div className="animate-marquee-track flex items-center gap-4 sm:gap-6 py-1">
          {badgesList.map((badge, index) => (
            <div
              key={`${badge.id}-${index}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-colors shrink-0 group cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {getBadgeIcon(badge.iconType)}
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-white tracking-tight flex items-center gap-1.5">
                  <span>{badge.title}</span>
                  {badge.code && (
                    <span className="text-[9px] font-mono text-neutral-400 bg-black/40 px-1.5 py-0.5 rounded border border-white/5">
                      {badge.code}
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  {badge.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
