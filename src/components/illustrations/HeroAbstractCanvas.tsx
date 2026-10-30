import React from 'react';
import { ShieldCheck, Zap, Globe, Sparkles, Terminal, CheckCircle2, Cpu, Rocket } from 'lucide-react';
import { companyConfig, GLOBAL_WEBSITE_URL } from '../../data/company';

export const HeroAbstractCanvas: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none select-none">
      {/* Ambient background glow - restrained */}
      <div className="absolute -top-6 -right-6 w-48 h-48 bg-indigo-600/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Main Container: Compact, Content-Dense Architecture & Delivery Card */}
      <div className="relative rounded-2xl liquid-glass border border-white/15 shadow-xl shadow-indigo-950/40 overflow-hidden backdrop-blur-xl">
        
        {/* Terminal Header */}
        <div className="h-10 px-4 bg-white/[0.04] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>

          <div className="flex items-center gap-2 px-3 py-0.5 rounded-md bg-black/40 border border-white/10 text-[11px] font-mono text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>usecodify.in/pipeline</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>v2.4</span>
          </div>
        </div>

        {/* Content Body: Tightly aligned specifications with zero blank space */}
        <div className="p-4 sm:p-5 bg-[#0b0e18]/90 space-y-3.5">
          
          {/* Status Bar */}
          <div className="flex items-center justify-between pb-2.5 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-white">Production Delivery Engine</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
              Active SLA
            </span>
          </div>

          {/* 3 Concrete Feature Cards */}
          <div className="space-y-2.5 text-left">
            
            {/* Item 1 */}
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-indigo-500/30 transition-colors flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                <Rocket className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs font-bold text-white">72-Hour Rapid Delivery</h4>
                  <span className="text-[10px] font-mono text-cyan-300 shrink-0">Express SLA</span>
                </div>
                <p className="text-[11px] text-neutral-300 leading-snug mt-0.5">
                  Production-grade launch for websites &amp; MVPs within 3 working days.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 transition-colors flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs font-bold text-white">100% Code &amp; Asset Ownership</h4>
                  <span className="text-[10px] font-mono text-emerald-400 shrink-0">No Lock-In</span>
                </div>
                <p className="text-[11px] text-neutral-300 leading-snug mt-0.5">
                  Full Git repository, design tokens, and server access transferred to you.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-violet-500/30 transition-colors flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-violet-400 shrink-0 mt-0.5">
                <Zap className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs font-bold text-white">Transparent India Pricing</h4>
                  <span className="text-[10px] font-mono text-amber-300 shrink-0">From ₹5,999</span>
                </div>
                <p className="text-[11px] text-neutral-300 leading-snug mt-0.5">
                  1-year domain, hosting, SSL certificate &amp; WhatsApp support included.
                </p>
              </div>
            </div>

          </div>

          {/* Quick Metrics Strip */}
          <div className="pt-2 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded-lg bg-white/[0.02]">
              <span className="text-[10px] text-neutral-400 block">Performance</span>
              <span className="text-xs font-bold text-emerald-400 font-mono">99 / 100</span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.02]">
              <span className="text-[10px] text-neutral-400 block">Deployments</span>
              <span className="text-xs font-bold text-white font-mono">{companyConfig.stats.projectsDelivered}</span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.02]">
              <span className="text-[10px] text-neutral-400 block">Recognition</span>
              <span className="text-xs font-bold text-indigo-300 font-mono">DPIIT Govt.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
