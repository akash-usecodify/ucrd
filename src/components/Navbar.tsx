import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight, ExternalLink, ShoppingBag, Globe } from 'lucide-react';
import { servicesData, companyConfig, OFFICIAL_LOGO_URL, RAZORPAY_SHOP_URL, GLOBAL_WEBSITE_URL } from '../data/company';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLinkClick = (path: string) => {
    navigate(path);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#090a0f]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/60 py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Official Logo */}
          <button 
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1 text-left shrink-0 group"
            aria-label="UseCodify India Homepage"
          >
            <img 
              src={OFFICIAL_LOGO_URL} 
              alt="UseCodify India" 
              className="h-7 sm:h-8 w-auto object-contain brightness-105 group-hover:opacity-90 transition-opacity"
            />
          </button>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <button
              onClick={() => handleLinkClick('/')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isActive('/') && currentPath === '/' ? 'text-indigo-400 font-semibold' : ''
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick('/about')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isActive('/about') ? 'text-indigo-400 font-semibold' : ''
              }`}
            >
              About
            </button>

            {/* Redesigned 2-Column Mega-Menu Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer py-1 ${
                  currentPath.startsWith('/services') ? 'text-indigo-400 font-semibold' : ''
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-indigo-400' : 'text-neutral-400'}`} />
              </button>

              {servicesOpen && (
                <div 
                  className="absolute top-full -left-44 w-[620px] max-w-[calc(100vw-32px)] mt-2 rounded-2xl bg-[#0c0e17] border border-white/15 shadow-2xl shadow-black/90 p-4 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-2xl z-50"
                  role="menu"
                >
                  <div className="px-3 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider border-b border-white/10 mb-3 flex items-center justify-between">
                    <span className="text-white">Services &amp; Digital Solutions</span>
                    <span className="text-[11px] text-indigo-400 font-normal">9 Specialized Tracks</span>
                  </div>

                  {/* Clean 2-column grid without vertical scrolling or overlap */}
                  <div className="grid grid-cols-2 gap-2">
                    {servicesData.map((svc) => (
                      <button
                        key={svc.slug}
                        onClick={() => handleLinkClick(`/services/${svc.slug}`)}
                        className={`text-left px-3 py-2.5 rounded-xl transition-all flex items-start gap-2.5 group cursor-pointer ${
                          currentPath === `/services/${svc.slug}` 
                            ? 'bg-indigo-600/20 text-white border border-indigo-500/30' 
                            : 'hover:bg-white/[0.06] text-neutral-300 hover:text-white'
                        }`}
                        role="menuitem"
                      >
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                        <div>
                          <div className="text-xs font-semibold tracking-tight text-neutral-200 group-hover:text-indigo-300 transition-colors">
                            {svc.title}
                          </div>
                          <div className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                            {svc.shortDescription}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between px-2 text-xs text-neutral-400">
                    <span>Need a custom package?</span>
                    <button
                      onClick={() => handleLinkClick('/pricing')}
                      className="text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer"
                    >
                      Compare Packages (₹5,999+) &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('/pricing')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isActive('/pricing') ? 'text-indigo-400 font-semibold' : ''
              }`}
            >
              Pricing
            </button>

            <button
              onClick={() => handleLinkClick('/contact')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isActive('/contact') ? 'text-indigo-400 font-semibold' : ''
              }`}
            >
              Contact
            </button>

            <a
              href={RAZORPAY_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-neutral-300 transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
              <span>Shop</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('/contact')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e17] border-b border-white/10 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto mt-2 shadow-2xl">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleLinkClick('/')}
              className={`text-left text-base font-medium py-2 ${currentPath === '/' ? 'text-indigo-400 font-semibold' : 'text-neutral-200'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('/about')}
              className={`text-left text-base font-medium py-2 ${currentPath === '/about' ? 'text-indigo-400 font-semibold' : 'text-neutral-200'}`}
            >
              About UseCodify
            </button>
            
            {/* Collapsible Mobile Services Section */}
            <div className="py-1">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full text-left text-base font-medium py-2 flex items-center justify-between text-neutral-200"
                aria-expanded={mobileServicesOpen}
              >
                <span>Services ({servicesData.length})</span>
                <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${mobileServicesOpen ? 'rotate-180 text-indigo-400' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pr-1 py-2 space-y-2 border-l border-white/10 mt-1">
                  {servicesData.map((svc) => (
                    <button
                      key={svc.slug}
                      onClick={() => handleLinkClick(`/services/${svc.slug}`)}
                      className={`w-full text-left text-xs py-1.5 flex items-center justify-between ${
                        currentPath === `/services/${svc.slug}` ? 'text-indigo-400 font-semibold' : 'text-neutral-300'
                      }`}
                    >
                      <span>{svc.title}</span>
                      <span className="text-[10px] text-neutral-500">{svc.badge}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('/pricing')}
              className={`text-left text-base font-medium py-2 ${currentPath === '/pricing' ? 'text-indigo-400 font-semibold' : 'text-neutral-200'}`}
            >
              Pricing &amp; Packages (from ₹5,999)
            </button>
            <button
              onClick={() => handleLinkClick('/contact')}
              className={`text-left text-base font-medium py-2 ${currentPath === '/contact' ? 'text-indigo-400 font-semibold' : 'text-neutral-200'}`}
            >
              Contact Us
            </button>
            <a
              href={RAZORPAY_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-base font-medium py-2 text-cyan-300 hover:text-white flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-cyan-400" />
                <span>Shop (Templates &amp; Digital Store)</span>
              </span>
              <ExternalLink className="w-4 h-4 text-neutral-400" />
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => handleLinkClick('/contact')}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30"
            >
              Discuss Your Project
            </button>
            <div className="text-center text-xs text-neutral-400">
              Chennai Operating Office: Guindy Industrial Estate (SP–7A)
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
