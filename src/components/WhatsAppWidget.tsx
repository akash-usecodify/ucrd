import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DESTINATION, OFFICIAL_LOGO_URL } from '../data/company';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const popupRef = useRef<HTMLDivElement>(null);

  const defaultGreeting = "Hello! Welcome to UseCodify India. How can we help you with your website or digital project?";

  // Close on outside click & escape key
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const textToSend = message.trim() || defaultGreeting;
    const url = `https://wa.me/${WHATSAPP_DESTINATION}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div 
      className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-50 flex flex-col items-start pointer-events-none" 
      ref={popupRef}
    >
      
      {/* Floating Chat Popup Window positioned on Bottom-Left */}
      {isOpen && (
        <div 
          className="pointer-events-auto mb-3 w-[340px] sm:w-[380px] max-w-[calc(100vw-32px)] rounded-3xl overflow-hidden liquid-glass-card border border-white/15 shadow-2xl shadow-black/90 animate-in fade-in slide-in-from-bottom-4 duration-200"
          role="dialog"
          aria-label="WhatsApp Live Chat Window"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#128C7E] to-[#075E54] p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 p-1 flex items-center justify-center border border-white/20 shrink-0">
                <img 
                  src={OFFICIAL_LOGO_URL} 
                  alt="UseCodify India" 
                  className="w-full h-auto object-contain brightness-200" 
                />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold tracking-tight flex items-center gap-1.5">
                  <span>UseCodify India</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>Direct Support · Fast Response</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 text-white/90 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Chat Window"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#0a0c14]/95 space-y-3 text-left">
            {/* Agent Welcome Bubble */}
            <div className="p-3.5 rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/10 text-xs text-neutral-200 leading-relaxed shadow-sm">
              <div className="text-[10px] text-emerald-400 font-semibold mb-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>UseCodify India Support</span>
              </div>
              <p>{defaultGreeting}</p>
              <div className="text-[9px] text-neutral-500 text-right mt-1 font-mono">
                {WHATSAPP_NUMBER}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="space-y-2 pt-1">
              <label htmlFor="wa-message" className="sr-only">Type your message</label>
              <textarea
                id="wa-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your project inquiry or question here..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Send on WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Footer Note */}
          <div className="px-4 py-2 bg-black/40 border-t border-white/5 text-center text-[10px] text-neutral-400">
            Direct chat opens in WhatsApp Web or App
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button: Official WhatsApp Green Circle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-emerald-300/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
        aria-label="Chat on WhatsApp with UseCodify India"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform rotate-0" />
        ) : (
          <>
            {/* Crisp, Centered, Official WhatsApp SVG Icon */}
            <svg 
              className="w-7 h-7 fill-white transition-transform group-hover:scale-105" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="sr-only">Open WhatsApp chat</span>
          </>
        )}
      </button>
    </div>
  );
};
