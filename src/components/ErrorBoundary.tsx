import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, MessageSquare, Mail } from 'lucide-react';
import { companyConfig } from '../data/company';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
  errorStack?: string;
  showDetails: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: '',
    errorStack: undefined,
    showDetails: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Sanitize message: never leak passwords or keys
    const rawMsg = error?.message || 'An unexpected rendering error occurred.';
    const sanitizedMsg = rawMsg
      .replace(/usecodify2025/gi, '***')
      .replace(/key=[^&\s]+/gi, 'key=***');

    return {
      hasError: true,
      errorMessage: sanitizedMsg,
      errorStack: error?.stack,
      showDetails: false,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[UseCodify India ErrorBoundary caught]:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#07090e] text-neutral-100 flex items-center justify-center p-4 sm:p-6 font-sans">
          <div className="w-full max-w-lg p-6 sm:p-8 rounded-3xl liquid-glass-card border border-white/15 shadow-2xl text-center space-y-6">
            
            <div className="w-16 h-16 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400 bg-rose-950/50 px-2.5 py-1 rounded border border-rose-800/40">
                Application Rendering Notice
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Something went wrong
              </h1>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">
                The interface encountered an unexpected runtime error. Your session and device are completely safe.
              </p>
            </div>

            {/* Error Message Box */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-left">
              <div className="text-[11px] font-mono text-neutral-400 break-words">
                {this.state.errorMessage}
              </div>
            </div>

            {/* Recovery Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={this.handleReload}
                className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>

              <button
                onClick={this.handleGoHome}
                className="px-5 py-3 rounded-xl liquid-glass border border-white/15 text-neutral-200 hover:text-white text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
            </div>

            {/* Direct Assistance Channels */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
              <a 
                href={companyConfig.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {companyConfig.whatsappNumber}</span>
              </a>
              <span className="text-neutral-600">·</span>
              <a 
                href={`mailto:${companyConfig.email}`} 
                className="hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{companyConfig.email}</span>
              </a>
            </div>

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
