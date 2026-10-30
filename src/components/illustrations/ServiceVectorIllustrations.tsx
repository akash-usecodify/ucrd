import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: 'compact' | 'medium' | 'large';
}

/**
 * 1. Web Development Illustration
 * Abstract browser window with layered interface components, code structures, and responsive grid
 */
export const WebDevelopmentIllustration: React.FC<IllustrationProps> = ({ className = '', size = 'large' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-4 select-none ${className}`}>
      <svg 
        viewBox="0 0 400 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full max-h-[320px] drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="wd-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e2238" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0b0e1a" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="wd-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="wd-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ambient Back Glow */}
        <circle cx="200" cy="150" r="110" fill="url(#wd-glow)" filter="blur(30px)" />

        {/* Main Browser Window Frame */}
        <rect x="40" y="30" width="320" height="230" rx="14" fill="url(#wd-bg)" stroke="#313854" strokeWidth="1.5" />
        
        {/* Header Bar */}
        <rect x="40" y="30" width="320" height="34" rx="14" fill="#141829" />
        <rect x="40" y="52" width="320" height="12" fill="#141829" />
        <line x1="40" y1="64" x2="360" y2="64" stroke="#252b42" strokeWidth="1" />
        
        {/* Window Dots */}
        <circle cx="58" cy="47" r="4" fill="#ef4444" opacity="0.85" />
        <circle cx="72" cy="47" r="4" fill="#f59e0b" opacity="0.85" />
        <circle cx="86" cy="47" r="4" fill="#10b981" opacity="0.85" />

        {/* URL Pill */}
        <rect x="110" y="40" width="180" height="15" rx="5" fill="#0b0e18" stroke="#2a304a" strokeWidth="1" />
        <text x="120" y="51" fill="#717a99" fontSize="8" fontFamily="monospace">https://usecodify.in/app</text>

        {/* Layer 1: Left Code Structure Sidebar */}
        <rect x="56" y="78" width="80" height="166" rx="8" fill="#111524" stroke="#23283d" strokeWidth="1" />
        {/* Code line tokens */}
        <rect x="68" y="92" width="34" height="5" rx="2" fill="#6366f1" opacity="0.9" />
        <rect x="68" y="104" width="54" height="4" rx="2" fill="#475175" />
        <rect x="74" y="114" width="46" height="4" rx="2" fill="#06b6d4" opacity="0.8" />
        <rect x="74" y="124" width="38" height="4" rx="2" fill="#475175" />
        <rect x="68" y="136" width="28" height="4" rx="2" fill="#a855f7" opacity="0.8" />
        <rect x="74" y="146" width="50" height="4" rx="2" fill="#475175" />
        <rect x="68" y="158" width="42" height="4" rx="2" fill="#10b981" opacity="0.8" />

        {/* Layer 2: Main Responsive Canvas Preview */}
        <rect x="146" y="78" width="200" height="166" rx="8" fill="#0d101e" stroke="#23283d" strokeWidth="1" />
        
        {/* Hero banner inside preview */}
        <rect x="156" y="88" width="180" height="48" rx="6" fill="url(#wd-accent)" opacity="0.2" stroke="#6366f1" strokeWidth="1" />
        <rect x="166" y="98" width="70" height="7" rx="3" fill="#ffffff" opacity="0.9" />
        <rect x="166" y="110" width="100" height="5" rx="2" fill="#94a3b8" opacity="0.6" />
        <rect x="166" y="120" width="36" height="8" rx="3" fill="#6366f1" />

        {/* 3 Grid Cards below banner */}
        <rect x="156" y="144" width="54" height="48" rx="6" fill="#171b2e" stroke="#28304d" strokeWidth="1" />
        <circle cx="172" cy="158" r="6" fill="#6366f1" opacity="0.6" />
        <rect x="164" y="170" width="38" height="4" rx="2" fill="#64748b" />
        <rect x="164" y="178" width="26" height="3" rx="1.5" fill="#475569" />

        <rect x="219" y="144" width="54" height="48" rx="6" fill="#171b2e" stroke="#28304d" strokeWidth="1" />
        <circle cx="235" cy="158" r="6" fill="#06b6d4" opacity="0.6" />
        <rect x="227" y="170" width="38" height="4" rx="2" fill="#64748b" />
        <rect x="227" y="178" width="26" height="3" rx="1.5" fill="#475569" />

        <rect x="282" y="144" width="54" height="48" rx="6" fill="#171b2e" stroke="#28304d" strokeWidth="1" />
        <circle cx="298" cy="158" r="6" fill="#a855f7" opacity="0.6" />
        <rect x="290" y="170" width="38" height="4" rx="2" fill="#64748b" />
        <rect x="290" y="178" width="26" height="3" rx="1.5" fill="#475569" />

        {/* Floating Active Badge */}
        <g transform="translate(250, 198)">
          <rect width="96" height="32" rx="8" fill="#141829" stroke="#6366f1" strokeWidth="1.2" />
          <circle cx="16" cy="16" r="4" fill="#10b981" />
          <text x="26" y="15" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Clean Modular</text>
          <text x="26" y="24" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">React 19 &amp; TS</text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 2. E-Commerce Illustration
 * Stylised online store interface with product cards, checkout status, shopping bag, and currency price
 */
export const EcommerceIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-4 select-none ${className}`}>
      <svg 
        viewBox="0 0 400 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full max-h-[320px] drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="ecom-card" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1f233a" />
            <stop offset="100%" stopColor="#0d101c" />
          </linearGradient>
          <linearGradient id="ecom-btn" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* Ambient Glow */}
        <circle cx="210" cy="150" r="100" fill="#06b6d4" fillOpacity="0.15" filter="blur(30px)" />

        {/* Main Storefront Container */}
        <rect x="40" y="35" width="320" height="230" rx="16" fill="url(#ecom-card)" stroke="#2b324d" strokeWidth="1.5" />
        
        {/* Storefront Header */}
        <rect x="40" y="35" width="320" height="38" rx="16" fill="#131728" />
        <rect x="40" y="60" width="320" height="13" fill="#131728" />
        <line x1="40" y1="73" x2="360" y2="73" stroke="#252b42" strokeWidth="1" />
        
        {/* Store Title & Bag Icon */}
        <circle cx="62" cy="54" r="8" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="1" />
        <path d="M 60 51 L 64 51 L 65 57 L 59 57 Z" fill="#06b6d4" />
        <text x="76" y="58" fill="#ffffff" fontSize="10" fontWeight="bold">Storefront Portal</text>

        {/* UPI & Payment Badges */}
        <rect x="250" y="46" width="46" height="16" rx="4" fill="#082f49" stroke="#0284c7" strokeWidth="0.8" />
        <text x="257" y="57" fill="#38bdf8" fontSize="7" fontWeight="bold" fontFamily="monospace">UPI / CARDS</text>

        {/* Product Card 1 */}
        <g transform="translate(60, 90)">
          <rect width="130" height="150" rx="10" fill="#141829" stroke="#2d3552" strokeWidth="1" />
          {/* Product image placeholder */}
          <rect x="10" y="10" width="110" height="70" rx="6" fill="#1a2035" />
          <circle cx="65" cy="45" r="16" fill="#06b6d4" fillOpacity="0.3" />
          {/* Product details */}
          <rect x="10" y="90" width="75" height="6" rx="3" fill="#ffffff" opacity="0.85" />
          <rect x="10" y="102" width="50" height="5" rx="2.5" fill="#64748b" />
          {/* Price */}
          <text x="10" y="125" fill="#38bdf8" fontSize="12" fontWeight="bold">₹5,999</text>
          {/* Add to Cart button */}
          <rect x="68" y="114" width="52" height="22" rx="6" fill="url(#ecom-btn)" />
          <text x="79" y="128" fill="#ffffff" fontSize="8" fontWeight="bold">Checkout</text>
        </g>

        {/* Right Panel: Order Summary & Live Cart Stack */}
        <g transform="translate(205, 90)">
          <rect width="135" height="150" rx="10" fill="#111424" stroke="#252b42" strokeWidth="1" />
          <text x="12" y="24" fill="#e2e8f0" fontSize="9" fontWeight="bold">Instant Fulfillment</text>
          
          <rect x="12" y="34" width="111" height="26" rx="6" fill="#181d30" stroke="#2b324d" strokeWidth="0.8" />
          <circle cx="25" cy="47" r="5" fill="#10b981" />
          <text x="36" y="45" fill="#ffffff" fontSize="7" fontWeight="bold">Domestic UPI Setup</text>
          <text x="36" y="53" fill="#94a3b8" fontSize="6">Razorpay Integrated</text>

          <rect x="12" y="66" width="111" height="26" rx="6" fill="#181d30" stroke="#2b324d" strokeWidth="0.8" />
          <circle cx="25" cy="79" r="5" fill="#6366f1" />
          <text x="36" y="77" fill="#ffffff" fontSize="7" fontWeight="bold">Automated Invoices</text>
          <text x="36" y="85" fill="#94a3b8" fontSize="6">GST Compliant Receipts</text>

          <rect x="12" y="98" width="111" height="26" rx="6" fill="#181d30" stroke="#2b324d" strokeWidth="0.8" />
          <circle cx="25" cy="111" r="5" fill="#f59e0b" />
          <text x="36" y="109" fill="#ffffff" fontSize="7" fontWeight="bold">Inventory Sync</text>
          <text x="36" y="117" fill="#94a3b8" fontSize="6">Real-Time Stock Alerts</text>

          <rect x="12" y="130" width="111" height="12" rx="3" fill="#10b981" fillOpacity="0.2" />
          <text x="24" y="139" fill="#34d399" fontSize="6.5" fontWeight="bold">Zero Transaction Delay</text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 3. Mobile App Development Illustration
 * Clean vector smartphone with interface components, notification cards, and gesture cues
 */
export const MobileAppIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-4 select-none ${className}`}>
      <svg 
        viewBox="0 0 400 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full max-h-[320px] drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="phone-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e2133" />
            <stop offset="100%" stopColor="#0c0e17" />
          </linearGradient>
          <linearGradient id="phone-screen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#131726" />
            <stop offset="100%" stopColor="#090a10" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="150" r="100" fill="#8b5cf6" fillOpacity="0.15" filter="blur(30px)" />

        {/* Smartphone Chassis */}
        <rect x="125" y="20" width="150" height="260" rx="24" fill="url(#phone-body)" stroke="#3a4261" strokeWidth="2" />
        
        {/* Screen Area */}
        <rect x="133" y="28" width="134" height="244" rx="18" fill="url(#phone-screen)" />

        {/* Dynamic Island / Speaker Notch */}
        <rect x="175" y="34" width="50" height="8" rx="4" fill="#000000" />
        <circle cx="215" cy="38" r="1.5" fill="#475569" />

        {/* Status Bar */}
        <text x="142" y="42" fill="#94a3b8" fontSize="7" fontFamily="sans-serif">9:41</text>
        <rect x="245" y="36" width="12" height="6" rx="2" stroke="#94a3b8" strokeWidth="0.8" />
        <rect x="247" y="38" width="8" height="2" rx="1" fill="#10b981" />

        {/* Mobile App Header */}
        <rect x="142" y="52" width="70" height="8" rx="4" fill="#ffffff" opacity="0.9" />
        <circle cx="254" cy="56" r="6" fill="#8b5cf6" fillOpacity="0.4" />

        {/* Floating App Card 1 */}
        <rect x="142" y="70" width="116" height="52" rx="10" fill="#1c2138" stroke="#353e61" strokeWidth="1" />
        <circle cx="158" cy="88" r="9" fill="#8b5cf6" />
        <rect x="174" y="82" width="60" height="5" rx="2.5" fill="#ffffff" />
        <rect x="174" y="91" width="40" height="4" rx="2" fill="#94a3b8" />
        <rect x="150" y="106" width="100" height="6" rx="3" fill="#29304d" />
        <rect x="150" y="106" width="76" height="6" rx="3" fill="#a855f7" />

        {/* 2 Square Quick Action Tiles */}
        <rect x="142" y="130" width="54" height="48" rx="8" fill="#181d30" stroke="#2e3754" strokeWidth="1" />
        <circle cx="158" cy="146" r="6" fill="#06b6d4" fillOpacity="0.6" />
        <rect x="150" y="160" width="38" height="4" rx="2" fill="#e2e8f0" />

        <rect x="204" y="130" width="54" height="48" rx="8" fill="#181d30" stroke="#2e3754" strokeWidth="1" />
        <circle cx="220" cy="146" r="6" fill="#10b981" fillOpacity="0.6" />
        <rect x="212" y="160" width="38" height="4" rx="2" fill="#e2e8f0" />

        {/* Feed List Items */}
        <rect x="142" y="186" width="116" height="22" rx="6" fill="#141828" stroke="#283049" strokeWidth="0.8" />
        <circle cx="154" cy="197" r="4" fill="#6366f1" />
        <rect x="164" y="193" width="50" height="4" rx="2" fill="#ffffff" opacity="0.8" />
        <rect x="164" y="199" width="30" height="3" rx="1.5" fill="#64748b" />

        <rect x="142" y="214" width="116" height="22" rx="6" fill="#141828" stroke="#283049" strokeWidth="0.8" />
        <circle cx="154" cy="225" r="4" fill="#ec4899" />
        <rect x="164" y="221" width="55" height="4" rx="2" fill="#ffffff" opacity="0.8" />
        <rect x="164" y="227" width="35" height="3" rx="1.5" fill="#64748b" />

        {/* Bottom Tab Bar */}
        <line x1="133" y1="244" x2="267" y2="244" stroke="#23293f" strokeWidth="1" />
        <circle cx="156" cy="254" r="3" fill="#8b5cf6" />
        <circle cx="185" cy="254" r="3" fill="#64748b" />
        <circle cx="215" cy="254" r="3" fill="#64748b" />
        <circle cx="244" cy="254" r="3" fill="#64748b" />
        <rect x="180" y="265" width="40" height="2.5" rx="1.25" fill="#ffffff" opacity="0.6" />

        {/* Side Floating Pill: iOS & Android */}
        <g transform="translate(45, 120)">
          <rect width="68" height="32" rx="8" fill="#131626" stroke="#8b5cf6" strokeWidth="1" />
          <text x="12" y="16" fill="#ffffff" fontSize="8" fontWeight="bold">Cross-Platform</text>
          <text x="12" y="25" fill="#a78bfa" fontSize="7">React Native</text>
        </g>
        <g transform="translate(288, 120)">
          <rect width="68" height="32" rx="8" fill="#131626" stroke="#06b6d4" strokeWidth="1" />
          <text x="12" y="16" fill="#ffffff" fontSize="8" fontWeight="bold">Fast 60 FPS</text>
          <text x="12" y="25" fill="#67e8f9" fontSize="7">Native Touch</text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 4. UI/UX Design Illustration
 * Overlapping wireframes, design tokens, color palette chips, and vector pen tool bezier handles
 */
export const UiUxDesignIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-4 select-none ${className}`}>
      <svg 
        viewBox="0 0 400 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full max-h-[320px] drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="ui-artboard" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1f233b" />
            <stop offset="100%" stopColor="#101324" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="150" r="105" fill="#ec4899" fillOpacity="0.12" filter="blur(35px)" />

        {/* Background Artboard 1 */}
        <rect x="70" y="40" width="180" height="150" rx="10" fill="#121524" stroke="#2d3450" strokeWidth="1.2" />
        <rect x="85" y="55" width="70" height="6" rx="3" fill="#475569" />
        <rect x="85" y="70" width="145" height="40" rx="6" fill="#181d33" />
        <line x1="85" y1="125" x2="230" y2="125" stroke="#2d3450" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="85" y1="145" x2="190" y2="145" stroke="#2d3450" strokeWidth="1" strokeDasharray="3 3" />

        {/* Foreground Artboard 2 (Elevated & Offset) */}
        <rect x="145" y="85" width="200" height="175" rx="12" fill="url(#ui-artboard)" stroke="#ec4899" strokeWidth="1.2" strokeOpacity="0.7" />
        
        {/* Canvas Toolbar */}
        <rect x="145" y="85" width="200" height="30" rx="12" fill="#161a2e" />
        <rect x="145" y="105" width="200" height="10" fill="#161a2e" />
        <line x1="145" y1="115" x2="345" y2="115" stroke="#2e3552" strokeWidth="1" />
        <text x="160" y="104" fill="#ffffff" fontSize="9" fontWeight="bold">Design System V2</text>
        <circle cx="325" cy="100" r="3" fill="#ec4899" />

        {/* Design Tokens & Swatches */}
        <rect x="160" y="130" width="18" height="18" rx="4" fill="#6366f1" />
        <rect x="184" y="130" width="18" height="18" rx="4" fill="#06b6d4" />
        <rect x="208" y="130" width="18" height="18" rx="4" fill="#ec4899" />
        <rect x="232" y="130" width="18" height="18" rx="4" fill="#10b981" />
        <text x="256" y="142" fill="#94a3b8" fontSize="8" fontFamily="monospace">Tokens 8px</text>

        {/* Bezier Vector Pen Path */}
        <path d="M 160 210 C 190 160, 240 230, 310 180" fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="4 2" />
        {/* Handle points */}
        <circle cx="160" cy="210" r="4" fill="#ffffff" stroke="#ec4899" strokeWidth="1.5" />
        <circle cx="310" cy="180" r="4" fill="#ffffff" stroke="#ec4899" strokeWidth="1.5" />
        {/* Active control handle */}
        <line x1="240" y1="230" x2="260" y2="210" stroke="#06b6d4" strokeWidth="1" />
        <circle cx="260" cy="210" r="3" fill="#06b6d4" />

        {/* Floating Tool Cursor */}
        <g transform="translate(230, 165)">
          <path d="M 0 0 L 12 12 L 6 13 L 9 20 L 6 21 L 3 14 L -2 18 Z" fill="#ffffff" stroke="#000000" strokeWidth="1" />
        </g>

        {/* Design System Spec Card */}
        <g transform="translate(45, 190)">
          <rect width="85" height="42" rx="8" fill="#131728" stroke="#313957" strokeWidth="1" />
          <text x="10" y="16" fill="#ffffff" fontSize="8" fontWeight="bold">WCAG AA+</text>
          <text x="10" y="27" fill="#ec4899" fontSize="7">Accessible Contrast</text>
          <text x="10" y="36" fill="#94a3b8" fontSize="6.5">Zero AI Clutter</text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 5. SEO Services Illustration
 * Abstract search interface with magnifying glass, ranking indicator, and organic growth curve
 */
export const SeoServicesIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-4 select-none ${className}`}>
      <svg 
        viewBox="0 0 400 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full max-h-[320px] drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="seo-bar" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#065f46" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="150" r="105" fill="#10b981" fillOpacity="0.12" filter="blur(35px)" />

        {/* Main Search Dashboard Frame */}
        <rect x="45" y="35" width="310" height="230" rx="16" fill="#101424" stroke="#252d47" strokeWidth="1.5" />
        
        {/* Search Input Bar */}
        <rect x="65" y="55" width="270" height="34" rx="10" fill="#181d33" stroke="#374266" strokeWidth="1" />
        <circle cx="85" cy="72" r="6" stroke="#10b981" strokeWidth="1.5" />
        <line x1="89" y1="76" x2="95" y2="82" stroke="#10b981" strokeWidth="1.5" />
        <text x="105" y="75" fill="#e2e8f0" fontSize="9" fontFamily="sans-serif">web development studio chennai</text>
        
        {/* Rank #1 Badge */}
        <rect x="275" y="62" width="50" height="20" rx="6" fill="#065f46" stroke="#10b981" strokeWidth="1" />
        <text x="284" y="75" fill="#a7f3d0" fontSize="8" fontWeight="bold">RANK #1</text>

        {/* Growth Bar Chart Area */}
        <g transform="translate(65, 110)">
          <rect width="270" height="135" rx="10" fill="#13172a" stroke="#232a45" strokeWidth="1" />
          <text x="16" y="24" fill="#ffffff" fontSize="9" fontWeight="bold">Organic Search Impressions</text>
          <text x="16" y="35" fill="#94a3b8" fontSize="7">+284% Year-over-Year Growth</text>

          {/* Chart Bars */}
          <rect x="25" y="85" width="22" height="35" rx="3" fill="#1e293b" />
          <rect x="58" y="75" width="22" height="45" rx="3" fill="#1e293b" />
          <rect x="91" y="65" width="22" height="55" rx="3" fill="#2d3748" />
          <rect x="124" y="50" width="22" height="70" rx="3" fill="#065f46" />
          <rect x="157" y="42" width="22" height="78" rx="3" fill="#047857" />
          <rect x="190" y="32" width="22" height="88" rx="3" fill="#059669" />
          <rect x="223" y="20" width="22" height="100" rx="3" fill="url(#seo-bar)" />

          {/* Trend Line across chart */}
          <path d="M 36 85 L 69 75 L 102 65 L 135 50 L 168 42 L 201 32 L 234 20" fill="none" stroke="#34d399" strokeWidth="2.5" />
          <circle cx="234" cy="20" r="4" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
};

/**
 * 6. Teams On Demand Illustration
 * Connected geometric nodes representing collaboration without fabricated photos of employees
 */
export const TeamsOnDemandIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-4 select-none ${className}`}>
      <svg 
        viewBox="0 0 400 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full max-h-[320px] drop-shadow-2xl"
      >
        <circle cx="200" cy="150" r="110" fill="#f59e0b" fillOpacity="0.1" filter="blur(35px)" />

        {/* Central Core Coordination Hub */}
        <circle cx="200" cy="150" r="32" fill="#1c2136" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="200" cy="150" r="16" fill="#f59e0b" fillOpacity="0.2" />
        <text x="186" y="153" fill="#fbbf24" fontSize="8" fontWeight="bold">LEAD</text>

        {/* Glowing Network Connecting Lines */}
        <line x1="200" y1="118" x2="200" y2="60" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="228" y1="165" x2="300" y2="210" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="172" y1="165" x2="100" y2="210" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="228" y1="135" x2="310" y2="90" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="172" y1="135" x2="90" y2="90" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Node 1: Architecture Specialist (Top) */}
        <g transform="translate(155, 30)">
          <rect width="90" height="36" rx="10" fill="#141829" stroke="#f59e0b" strokeWidth="1.2" />
          <circle cx="20" cy="18" r="6" fill="#f59e0b" />
          <text x="32" y="16" fill="#ffffff" fontSize="8" fontWeight="bold">Solutions Lead</text>
          <text x="32" y="26" fill="#94a3b8" fontSize="7">Cloud &amp; DevOps</text>
        </g>

        {/* Node 2: Frontend Engineering (Bottom Right) */}
        <g transform="translate(255, 195)">
          <rect width="90" height="36" rx="10" fill="#141829" stroke="#6366f1" strokeWidth="1.2" />
          <circle cx="20" cy="18" r="6" fill="#6366f1" />
          <text x="32" y="16" fill="#ffffff" fontSize="8" fontWeight="bold">Frontend Dev</text>
          <text x="32" y="26" fill="#94a3b8" fontSize="7">React &amp; Next.js</text>
        </g>

        {/* Node 3: Backend & Database (Bottom Left) */}
        <g transform="translate(55, 195)">
          <rect width="90" height="36" rx="10" fill="#141829" stroke="#06b6d4" strokeWidth="1.2" />
          <circle cx="20" cy="18" r="6" fill="#06b6d4" />
          <text x="32" y="16" fill="#ffffff" fontSize="8" fontWeight="bold">Backend Dev</text>
          <text x="32" y="26" fill="#94a3b8" fontSize="7">Node &amp; Postgres</text>
        </g>

        {/* Node 4: Product & QA (Top Right) */}
        <g transform="translate(265, 70)">
          <rect width="90" height="36" rx="10" fill="#141829" stroke="#10b981" strokeWidth="1.2" />
          <circle cx="20" cy="18" r="6" fill="#10b981" />
          <text x="32" y="16" fill="#ffffff" fontSize="8" fontWeight="bold">QA &amp; Security</text>
          <text x="32" y="26" fill="#94a3b8" fontSize="7">Automated CI/CD</text>
        </g>

        {/* Node 5: UI/UX Specialist (Top Left) */}
        <g transform="translate(45, 70)">
          <rect width="90" height="36" rx="10" fill="#141829" stroke="#ec4899" strokeWidth="1.2" />
          <circle cx="20" cy="18" r="6" fill="#ec4899" />
          <text x="32" y="16" fill="#ffffff" fontSize="8" fontWeight="bold">Design Systems</text>
          <text x="32" y="26" fill="#94a3b8" fontSize="7">Wireframes &amp; UX</text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 7. Website Maintenance Illustration
 * Stylised browser interface with settings, maintenance gears, 99.98% uptime, and SSL protection
 */
export const WebsiteMaintenanceIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-4 select-none ${className}`}>
      <svg 
        viewBox="0 0 400 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full max-h-[320px] drop-shadow-2xl"
      >
        <circle cx="200" cy="150" r="105" fill="#3b82f6" fillOpacity="0.12" filter="blur(35px)" />

        <rect x="45" y="35" width="310" height="230" rx="16" fill="#0f1424" stroke="#263152" strokeWidth="1.5" />
        
        {/* Header */}
        <rect x="45" y="35" width="310" height="34" rx="16" fill="#141b30" />
        <line x1="45" y1="69" x2="355" y2="69" stroke="#242e4d" strokeWidth="1" />
        <circle cx="65" cy="52" r="3.5" fill="#ef4444" />
        <circle cx="77" cy="52" r="3.5" fill="#f59e0b" />
        <circle cx="89" cy="52" r="3.5" fill="#10b981" />
        <text x="105" y="55" fill="#94a3b8" fontSize="8" fontFamily="monospace">system-monitor.usecodify.in</text>

        {/* Central Rotating Gear / Maintenance Cog */}
        <g transform="translate(160, 95)">
          <circle cx="40" cy="40" r="28" fill="#18213d" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="40" cy="40" r="14" fill="#0f1424" stroke="#60a5fa" strokeWidth="1.5" />
          {/* Cog teeth */}
          <rect x="36" y="6" width="8" height="8" rx="2" fill="#3b82f6" />
          <rect x="36" y="66" width="8" height="8" rx="2" fill="#3b82f6" />
          <rect x="6" y="36" width="8" height="8" rx="2" fill="#3b82f6" />
          <rect x="66" y="36" width="8" height="8" rx="2" fill="#3b82f6" />
        </g>

        {/* Status Indicators Around */}
        <g transform="translate(65, 190)">
          <rect width="125" height="50" rx="10" fill="#131b33" stroke="#243054" strokeWidth="1" />
          <text x="12" y="20" fill="#94a3b8" fontSize="7.5">UPTIME SLA</text>
          <text x="12" y="38" fill="#34d399" fontSize="13" fontWeight="bold">99.98%</text>
        </g>

        <g transform="translate(210, 190)">
          <rect width="125" height="50" rx="10" fill="#131b33" stroke="#243054" strokeWidth="1" />
          <text x="12" y="20" fill="#94a3b8" fontSize="7.5">SSL SECURITY</text>
          <text x="12" y="38" fill="#60a5fa" fontSize="13" fontWeight="bold">Auto-Renewed</text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 8. Digital Marketing Illustration
 * Abstract campaign cards, audience engagement representation, and multi-channel metrics
 */
export const DigitalMarketingIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-4 select-none ${className}`}>
      <svg 
        viewBox="0 0 400 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full max-h-[320px] drop-shadow-2xl"
      >
        <circle cx="200" cy="150" r="105" fill="#f43f5e" fillOpacity="0.12" filter="blur(35px)" />

        <rect x="45" y="35" width="310" height="230" rx="16" fill="#121321" stroke="#2d283d" strokeWidth="1.5" />
        
        {/* Campaign Funnel Layers */}
        <g transform="translate(65, 55)">
          <rect width="270" height="36" rx="8" fill="#1d1a2f" stroke="#3b3259" strokeWidth="1" />
          <circle cx="20" cy="18" r="6" fill="#f43f5e" />
          <text x="34" y="16" fill="#ffffff" fontSize="8" fontWeight="bold">Top of Funnel Reach</text>
          <text x="34" y="26" fill="#94a3b8" fontSize="7">Search, Meta Ads, LinkedIn Ads</text>
          <text x="210" y="22" fill="#fb7185" fontSize="9" fontWeight="bold">120K Impr.</text>
        </g>

        <g transform="translate(85, 105)">
          <rect width="230" height="36" rx="8" fill="#201a33" stroke="#4a386b" strokeWidth="1" />
          <circle cx="20" cy="18" r="6" fill="#a855f7" />
          <text x="34" y="16" fill="#ffffff" fontSize="8" fontWeight="bold">Engaged Clicks</text>
          <text x="34" y="26" fill="#94a3b8" fontSize="7">Dedicated Landing Page Funnel</text>
          <text x="180" y="22" fill="#c084fc" fontSize="9" fontWeight="bold">8.4% CTR</text>
        </g>

        <g transform="translate(105, 155)">
          <rect width="190" height="36" rx="8" fill="#241b38" stroke="#6b21a8" strokeWidth="1" />
          <circle cx="20" cy="18" r="6" fill="#38bdf8" />
          <text x="34" y="16" fill="#ffffff" fontSize="8" fontWeight="bold">Verified Leads</text>
          <text x="34" y="26" fill="#94a3b8" fontSize="7">WhatsApp Inquiries &amp; Forms</text>
          <text x="145" y="22" fill="#38bdf8" fontSize="9" fontWeight="bold">₹142 CPL</text>
        </g>

        {/* Bottom Conversion Metric Bar */}
        <g transform="translate(65, 208)">
          <rect width="270" height="38" rx="8" fill="#16152b" stroke="#332a52" strokeWidth="1" />
          <text x="16" y="18" fill="#ffffff" fontSize="8" fontWeight="bold">Commercial ROAS Tracker</text>
          <text x="16" y="29" fill="#10b981" fontSize="10" fontWeight="bold">4.2x Revenue Multiple</text>
          <text x="175" y="24" fill="#94a3b8" fontSize="7.5">Weekly Analytics Report</text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 9. Consulting & Strategy Illustration
 * Strategic roadmap with milestone diamonds, architecture stages, and connected timeline flow
 */
export const ConsultingStrategyIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-4 select-none ${className}`}>
      <svg 
        viewBox="0 0 400 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full max-h-[320px] drop-shadow-2xl"
      >
        <circle cx="200" cy="150" r="105" fill="#6366f1" fillOpacity="0.12" filter="blur(35px)" />

        <rect x="45" y="35" width="310" height="230" rx="16" fill="#0f1221" stroke="#252b47" strokeWidth="1.5" />
        
        {/* Roadmap Timeline Pipeline */}
        <line x1="75" y1="150" x2="325" y2="150" stroke="#374169" strokeWidth="2" strokeDasharray="6 4" />

        {/* Milestone 1: Discovery */}
        <g transform="translate(65, 95)">
          <rect width="70" height="40" rx="8" fill="#14182e" stroke="#6366f1" strokeWidth="1.2" />
          <text x="8" y="16" fill="#ffffff" fontSize="7.5" fontWeight="bold">01. Discovery</text>
          <text x="8" y="28" fill="#94a3b8" fontSize="6.5">Market &amp; Stack</text>
          <circle cx="35" cy="55" r="7" fill="#6366f1" stroke="#ffffff" strokeWidth="1.5" />
        </g>

        {/* Milestone 2: Blueprint Architecture */}
        <g transform="translate(165, 165)">
          <circle cx="35" cy="-15" r="7" fill="#06b6d4" stroke="#ffffff" strokeWidth="1.5" />
          <rect width="70" height="40" rx="8" fill="#14182e" stroke="#06b6d4" strokeWidth="1.2" />
          <text x="8" y="16" fill="#ffffff" fontSize="7.5" fontWeight="bold">02. Blueprint</text>
          <text x="8" y="28" fill="#94a3b8" fontSize="6.5">Tech Feasibility</text>
        </g>

        {/* Milestone 3: Execution Roadmap */}
        <g transform="translate(265, 95)">
          <rect width="70" height="40" rx="8" fill="#14182e" stroke="#10b981" strokeWidth="1.2" />
          <text x="8" y="16" fill="#ffffff" fontSize="7.5" fontWeight="bold">03. Execution</text>
          <text x="8" y="28" fill="#94a3b8" fontSize="6.5">Scaling Sprints</text>
          <circle cx="35" cy="55" r="7" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
        </g>

        {/* Bottom Strategic Deliverables summary */}
        <g transform="translate(65, 215)">
          <rect width="270" height="34" rx="8" fill="#141930" stroke="#252f52" strokeWidth="1" />
          <text x="16" y="21" fill="#ffffff" fontSize="8" fontWeight="bold">Executive Strategy Blueprint</text>
          <text x="165" y="21" fill="#818cf8" fontSize="7.5" fontFamily="monospace">Vendor-Neutral Advisory</text>
        </g>
      </svg>
    </div>
  );
};

/**
 * Helper to render vector illustration by service slug
 */
export const ServiceVectorIllustration: React.FC<{ slug: string; className?: string }> = ({ slug, className }) => {
  switch (slug) {
    case 'web-development':
      return <WebDevelopmentIllustration className={className} />;
    case 'ecommerce':
      return <EcommerceIllustration className={className} />;
    case 'mobile-development':
      return <MobileAppIllustration className={className} />;
    case 'ui-ux-design':
      return <UiUxDesignIllustration className={className} />;
    case 'seo-services':
      return <SeoServicesIllustration className={className} />;
    case 'teams-on-demand':
      return <TeamsOnDemandIllustration className={className} />;
    case 'website-maintenance':
      return <WebsiteMaintenanceIllustration className={className} />;
    case 'digital-marketing':
      return <DigitalMarketingIllustration className={className} />;
    case 'consulting-strategy':
      return <ConsultingStrategyIllustration className={className} />;
    default:
      return <WebDevelopmentIllustration className={className} />;
  }
};
