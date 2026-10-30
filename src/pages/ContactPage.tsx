import React, { useState, useEffect } from 'react';
import { 
  Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2, 
  AlertCircle, MessageSquare, ArrowRight, Building 
} from 'lucide-react';
import { companyConfig, servicesData } from '../data/company';

interface ContactPageProps {
  navigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Web Development & Design');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<{ id: string; createdAt: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Check URL params for pre-selected plan
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get('plan');
    if (plan) {
      if (plan === 'kickstart') setService('KickStart Website Package (₹5,999)');
      if (plan === 'business') setService('Business Website Package (₹7,999)');
      if (plan === 'growth') setService('Growth Website Package (₹9,999)');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMsg('Please provide a valid phone or WhatsApp contact number.');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('Please enter a brief description of your project or requirements.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          service: service.trim(),
          message: message.trim(),
        }),
      });

      const contentType = res.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        throw new Error(
          'Online inquiry API is currently unreachable on this server. Please use the direct Email or WhatsApp options below to send your project requirements immediately.'
        );
      }

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'The server could not process your inquiry. Please try again.');
      }

      setSubmittedInquiry({
        id: data.inquiry?.id || 'inq_' + Date.now(),
        createdAt: data.inquiry?.createdAt || new Date().toISOString(),
      });
      setSubmitSuccess(true);
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setErrorMsg(
        err.message || 'Unable to reach the inquiry server. You can also contact us directly via WhatsApp or email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${service} - ${fullName || 'Client'}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nProject Overview:\n${message}`
    );
    return `mailto:${companyConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative pt-20 sm:pt-24 pb-16 space-y-16 sm:space-y-20">
      
      {/* HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-4 sm:pt-6 text-left space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-white/10 text-xs font-medium text-indigo-400">
          <span>Direct Commercial Contact</span>
          <span className="text-neutral-500">·</span>
          <span>Chennai Operational Hub</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Let's Build Something Exceptional Together
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
          Whether you require our rapid 72-hour website launch from ₹5,999, complex custom web systems, or dedicated on-demand engineering capacity, our team responds to all inquiries within 24 hours.
        </p>
      </section>

      {/* CONTACT FORM & INFORMATION GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="liquid-glass-card rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl text-left">
              <h2 className="text-xl font-bold text-white mb-2">Project Brief &amp; Discovery</h2>
              <p className="text-xs text-neutral-400 mb-6">
                Fill in your details below and our team will get in touch with technical recommendations and scope.
              </p>

              {submitSuccess ? (
                <div className="p-8 rounded-2xl bg-indigo-600/10 border border-indigo-500/30 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                      <span>Inquiry Logged on Server</span>
                      {submittedInquiry?.id && (
                        <>
                          <span className="text-neutral-500">·</span>
                          <span className="font-bold">Ref: #{submittedInquiry.id.slice(-8).toUpperCase()}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white">Inquiry Received Successfully</h3>
                    <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{fullName}</strong>. Your inquiry for <strong className="text-indigo-300">{service}</strong> has been logged to our client lead database. Our engineering team will review your specifications and reach out to you at <strong className="text-white">{email}</strong> or <strong className="text-white">{phone}</strong> within 24 hours.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={getMailtoLink()}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Direct Email Copy</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setSubmittedInquiry(null);
                        setMessage('');
                      }}
                      className="px-5 py-2.5 rounded-xl text-xs font-medium text-neutral-300 hover:text-white liquid-glass border border-white/10 transition-colors cursor-pointer"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Anand Sharma"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Work / Personal Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. anand@company.in"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Interested Service / Package *
                      </label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#11131c] border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      >
                        <optgroup label="Website Launch Packages">
                          <option value="KickStart Website Package (₹5,999)">KickStart Package (₹5,999)</option>
                          <option value="Business Website Package (₹7,999)">Business Package (₹7,999)</option>
                          <option value="Growth Website Package (₹9,999)">Growth Package (₹9,999)</option>
                        </optgroup>
                        <optgroup label="Specialized Digital Tracks">
                          {servicesData.map((svc) => (
                            <option key={svc.slug} value={svc.title}>{svc.title}</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Project Details &amp; Requirements *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your business, intended goals, existing website URL (if any), and timeline..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Brief...</span>
                      ) : (
                        <>
                          <span>Submit Project Brief</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <div className="text-[11px] text-neutral-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Guaranteed response within 24 hours</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Office Address & Direct Channels */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Operating Office Card */}
            <div className="liquid-glass rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Operating Headquarters</span>
              </div>
              <h3 className="text-base font-bold text-white">Chennai Facility</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {companyConfig.operatingAddress.doorNo}, {companyConfig.operatingAddress.building}, {companyConfig.operatingAddress.estate}, {companyConfig.operatingAddress.locality}, {companyConfig.operatingAddress.city}, {companyConfig.operatingAddress.state} - {companyConfig.operatingAddress.pincode}, {companyConfig.operatingAddress.country}
              </p>
              <div className="pt-2 text-[11px] text-neutral-400 font-mono">
                Visiting hours: Mon – Sat, 9:30 AM – 6:30 PM IST
              </div>
            </div>

            {/* Official WhatsApp Support Channel */}
            <div className="liquid-glass-card rounded-2xl p-6 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Concierge</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Connect directly with our client onboarding team on WhatsApp for fast answers and 24-hour turnaround quotes.
              </p>
              <div className="pt-1">
                <a 
                  href={companyConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono text-xs font-semibold"
                >
                  <span>{companyConfig.whatsappNumber}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Email Channel */}
            <div className="liquid-glass-card rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>Email Enquiries</span>
              </div>
              <h4 className="text-sm font-bold text-white">Direct Executive Inbox</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                You can write to us directly at any time. Our management team reviews all incoming commercial scopes.
              </p>
              <a 
                href={`mailto:${companyConfig.email}`}
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-mono text-xs font-semibold"
              >
                <span>{companyConfig.email}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
