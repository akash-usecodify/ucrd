import React from 'react';

export const LiquidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep dark base canvas */}
      <div className="absolute inset-0 bg-[#07090e]" />

      {/* Fluid ambient light glow 1 - Indigo/Electric Blue */}
      <div 
        className="liquid-glow w-[650px] h-[650px] -top-48 -left-48 bg-indigo-600/20"
        style={{ animation: 'pulse 14s ease-in-out infinite alternate' }}
      />

      {/* Fluid ambient light glow 2 - Subtle Violet/Purple */}
      <div 
        className="liquid-glow w-[550px] h-[550px] top-1/3 -right-48 bg-violet-600/15"
        style={{ animation: 'pulse 18s ease-in-out infinite alternate-reverse' }}
      />

      {/* Fluid ambient light glow 3 - Cyan accent */}
      <div 
        className="liquid-glow w-[500px] h-[500px] bottom-10 left-1/4 bg-cyan-600/10"
        style={{ animation: 'pulse 20s ease-in-out infinite alternate' }}
      />

      {/* Subtle hairline architectural grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      />
    </div>
  );
};
