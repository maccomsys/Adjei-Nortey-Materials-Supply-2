import React from 'react';
import { Phone, Clock, MessageSquare } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/materialsData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#EB4D23] text-white text-sm sm:text-base py-2.5 px-4 sm:px-8 border-b border-[#D03B13]/30 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2.5">
        {/* Left: Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <div className="inline-flex items-center gap-2 bg-black/10 px-3 py-1 rounded-lg">
            <Phone className="w-4 h-4 shrink-0 text-white" />
            <span className="font-bold text-xs sm:text-sm uppercase tracking-wider text-white/90">Call:</span>
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="hover:text-yellow-200 transition-colors font-black text-sm sm:text-base tracking-wide font-mono"
            >
              {COMPANY_DETAILS.phone}
            </a>
            <span className="text-white/60 font-bold">/</span>
            <a
              href={`tel:${COMPANY_DETAILS.secondaryPhone}`}
              className="hover:text-yellow-200 transition-colors font-black text-sm sm:text-base tracking-wide font-mono"
            >
              {COMPANY_DETAILS.secondaryPhone}
            </a>
          </div>
          <a
            href="https://wa.me/233244520024"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 px-3 py-1 rounded-lg text-white hover:text-white transition-colors font-bold text-xs sm:text-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-200 fill-emerald-200 shrink-0" />
            <span>WhatsApp: <strong className="text-white font-mono font-black text-sm sm:text-base">{COMPANY_DETAILS.phone}</strong></span>
          </a>
          <div className="hidden xl:inline-flex items-center gap-1.5 text-white/90 text-xs sm:text-sm font-medium">
            <Clock className="w-4 h-4 shrink-0" />
            <span>Mon - Sat: 7:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Right: Social Links & Trust Tag */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/85 hidden lg:inline-block">Connect with us:</span>
          <div className="flex items-center gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition text-xs font-bold"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition text-xs font-bold"
              aria-label="Twitter X"
            >
              𝕏
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition text-xs font-bold"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition text-xs font-bold"
              aria-label="Instagram"
            >
              ig
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
