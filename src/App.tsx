import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LiquidBackground } from './components/LiquidBackground';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { AdminInquiriesPage } from './pages/AdminInquiriesPage';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { companyConfig } from './data/company';

export default function App() {
  // Normalize current path from pathname, index.html, or hash
  const getCurrentRoute = () => {
    // Check hash first for direct hash navigation (e.g. /#/about or #about)
    const rawHash = window.location.hash.replace(/^#\/?/, '');
    if (rawHash) {
      const cleanHash = rawHash.split('?')[0];
      if (
        cleanHash === 'about' || 
        cleanHash === 'pricing' || 
        cleanHash === 'contact' || 
        cleanHash === 'terms-of-service' || 
        cleanHash === 'refund-policy' || 
        cleanHash === 'privacy-policy' || 
        cleanHash === 'admin' || 
        cleanHash.startsWith('services/')
      ) {
        return `/${cleanHash}`;
      }
    }

    let pathname = window.location.pathname || '/';
    // If the server serves through /index.html or has trailing slashes
    pathname = pathname.replace(/\/index\.html?$/i, '') || '/';
    return pathname;
  };

  const [currentPath, setCurrentPath] = useState<string>(getCurrentRoute);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Sync route on popstate (browser back/forward) and hashchange
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getCurrentRoute());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      window.history.pushState({}, '', path);
    } catch (e) {
      // Fallback for strict origin restrictions
      window.location.hash = path;
    }

    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render active page based on path
  const renderPage = () => {
    const cleanPath = currentPath.split('?')[0].replace(/\/+$/, '') || '/';

    if (cleanPath === '/' || cleanPath === '') {
      return <HomePage navigate={navigate} />;
    }

    if (cleanPath === '/about') {
      return <AboutPage navigate={navigate} />;
    }

    if (cleanPath === '/pricing') {
      return <PricingPage navigate={navigate} />;
    }

    if (cleanPath === '/contact') {
      return <ContactPage navigate={navigate} />;
    }

    if (cleanPath === '/terms-of-service') {
      return <TermsPage navigate={navigate} />;
    }

    if (cleanPath === '/refund-policy') {
      return <RefundPolicyPage navigate={navigate} />;
    }

    if (cleanPath === '/privacy-policy') {
      return <PrivacyPolicyPage navigate={navigate} />;
    }

    if (cleanPath === '/admin' || cleanPath === '/admin/inquiries') {
      return <AdminInquiriesPage navigate={navigate} />;
    }

    if (cleanPath.startsWith('/services/')) {
      const slug = cleanPath.replace('/services/', '');
      return <ServiceDetailPage slug={slug} navigate={navigate} />;
    }

    // Default fallback to HomePage if unmatched
    return <HomePage navigate={navigate} />;
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-neutral-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Ambient Liquid Gradient Canvas */}
      <LiquidBackground />

      {/* Top Bar Navigation */}
      <Navbar currentPath={currentPath} navigate={navigate} />

      {/* Main Dynamic Viewport */}
      <main className="flex-1 relative z-10">
        {renderPage()}
      </main>

      {/* Comprehensive Verified Footer */}
      <Footer navigate={navigate} />

      {/* Floating Action Button: Start Project CTA on Bottom-Right (WhatsApp is on Bottom-Left) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 pointer-events-auto">
        <button
          onClick={() => navigate('/contact')}
          className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-xl shadow-indigo-600/35 hover:shadow-indigo-500/50 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-indigo-400/30 backdrop-blur-md"
        >
          <MessageSquare className="w-4 h-4 text-cyan-300" />
          <span className="hidden sm:inline">Start Project · 72h SLA</span>
          <span className="sm:hidden">Start Project</span>
        </button>
      </div>

      {/* Floating Back to Top Button positioned safely above Start Project on Bottom-Right */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-20 right-5 sm:bottom-22 sm:right-6 z-40 w-10 sm:w-11 h-10 sm:h-11 rounded-full liquid-glass border border-white/15 text-neutral-300 hover:text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* WhatsApp Floating Chat Widget at Bottom-Left */}
      <WhatsAppWidget />
    </div>
  );
}
