import React from 'react';
import { Globe, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

export const AboutVectorCanvas: React.FC = () => {
  return (
    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden liquid-glass-card p-2 border border-white/10 shadow-2xl select-none flex flex-col justify-between">
      
      {/* Background Ambient SVG Graphic */}
      <div className="relative flex-1 rounded-2xl bg-gradient-to-br from-[#121629] via-[#0d101e] to-[#070912] p-5 overflow-hidden flex flex-col justify-between">
        
        {/* Subtle SVG Grid & Vector Arcs */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="about-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
          {/* Orbital curved paths */}
          <circle cx="200" cy="120" r="90" fill="none" stroke="url(#about-grad)" strokeWidth="1.5" strokeDasharray="6 4" />
          <circle cx="200" cy="120" r="140" fill="none" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" strokeDasharray="3 6" />
        </svg>

        {/* Top Header of Blueprint */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold text-white tracking-wide">Digital Network Blueprint</span>
          </div>
          <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/60 px-2.5 py-0.5 rounded border border-indigo-700/40">
            Founded Oct 2023
          </span>
        </div>

        {/* Center Node Composition */}
        <div className="relative z-10 py-4 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            
            {/* Chennai Center Node */}
            <div className="relative z-20 w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-900/90 to-neutral-900/90 border border-indigo-400/50 p-2.5 flex flex-col items-center justify-center text-center shadow-2xl shadow-indigo-600/40 backdrop-blur-xl">
              <Zap className="w-6 h-6 text-cyan-300 mb-1" />
              <span className="text-[11px] font-bold text-white">Chennai</span>
              <span className="text-[9px] text-neutral-400 font-mono">Operating Hub</span>
            </div>

            {/* Orbiting Global Satellite Node 1 (Top Left: UK/Europe) */}
            <div className="absolute -top-3 -left-16 sm:-left-20 px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/15 backdrop-blur-md flex items-center gap-2 text-left">
              <Globe className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <div>
                <div className="text-[10px] font-bold text-white">UK &amp; Europe</div>
                <div className="text-[8px] text-neutral-400">UseCodify Ltd</div>
              </div>
            </div>

            {/* Orbiting Global Satellite Node 2 (Bottom Right: Americas & APAC) */}
            <div className="absolute -bottom-3 -right-16 sm:-right-20 px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/15 backdrop-blur-md flex items-center gap-2 text-left">
              <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-[10px] font-bold text-white">APAC &amp; Global</div>
                <div className="text-[8px] text-neutral-400">Cross-Border Clients</div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center">
          <div className="p-2 rounded-lg bg-black/30 border border-white/5">
            <span className="text-white font-bold text-xs block">72h SLA</span>
            <span className="text-[9px] text-neutral-400">Delivery Speed</span>
          </div>
          <div className="p-2 rounded-lg bg-black/30 border border-white/5">
            <span className="text-emerald-400 font-bold text-xs block">98% Score</span>
            <span className="text-[9px] text-neutral-400">Client Approval</span>
          </div>
          <div className="p-2 rounded-lg bg-black/30 border border-white/5">
            <span className="text-cyan-400 font-bold text-xs block">100% Owned</span>
            <span className="text-[9px] text-neutral-400">Client Assets</span>
          </div>
        </div>

      </div>

      {/* Footer Location Label */}
      <div className="p-3 text-left flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold text-white">Digital Delivery Studio</div>
          <div className="text-[11px] text-neutral-400 mt-0.5">
            Guindy Industrial Estate, Chennai, Tamil Nadu
          </div>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono text-indigo-400">DPIIT Recognized</span>
        </div>
      </div>

    </div>
  );
};
