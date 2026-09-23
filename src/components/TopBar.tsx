import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/materialsData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#EB4D23] text-white text-xs sm:text-sm py-2 px-4 sm:px-8 border-b border-[#D03B13]/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left: Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{COMPANY_DETAILS.phone}</span>
          </a>
          <a
            href={`mailto:${COMPANY_DETAILS.email}`}
            className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors font-medium"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{COMPANY_DETAILS.email}</span>
          </a>
          <div className="hidden lg:inline-flex items-center gap-1.5 text-white/95">
            <Clock className="w-3.5 h-3.5" />
            <span>Monday - Saturday: 7:00 AM - 6:00 PM (24/7 Available)</span>
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
