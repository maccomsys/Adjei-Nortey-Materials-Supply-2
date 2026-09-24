import React, { useState } from 'react';
import { ChevronRight, Phone, Mail, MapPin, ArrowUp, X, Shield, FileText } from 'lucide-react';
import { COMPANY_DETAILS, LOGO } from '../data/materialsData';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  onNavigateTerms?: () => void;
  onNavigatePrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onNavigateTerms,
  onNavigatePrivacy,
}) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Grid: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <img
                src={LOGO}
                alt={COMPANY_DETAILS.name}
                className="h-12 sm:h-14 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              {COMPANY_DETAILS.name} is a leading supplier of quality building materials for
              commercial, residential, and infrastructure construction projects.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#EB4D23] flex items-center justify-center text-xs font-bold transition"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#EB4D23] flex items-center justify-center text-xs font-bold transition"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter X"
              >
                𝕏
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#EB4D23] flex items-center justify-center text-xs font-bold transition"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#EB4D23] flex items-center justify-center text-xs font-bold transition"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                ig
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <a className="hover:text-[#EB4D23] transition flex items-center gap-1.5" href="#">
                  <ChevronRight className="w-3 h-3 text-[#EB4D23]" /> Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#EB4D23] transition flex items-center gap-1.5"
                  href="#about"
                >
                  <ChevronRight className="w-3 h-3 text-[#EB4D23]" /> About Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#EB4D23] transition flex items-center gap-1.5"
                  href="#materials"
                >
                  <ChevronRight className="w-3 h-3 text-[#EB4D23]" /> Materials
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#EB4D23] transition flex items-center gap-1.5"
                  href="#services"
                >
                  <ChevronRight className="w-3 h-3 text-[#EB4D23]" /> Services
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#EB4D23] transition flex items-center gap-1.5"
                  href="#gallery"
                >
                  <ChevronRight className="w-3 h-3 text-[#EB4D23]" /> Gallery
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#EB4D23] transition flex items-center gap-1.5"
                  href="#contact"
                >
                  <ChevronRight className="w-3 h-3 text-[#EB4D23]" /> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Materials */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Our Materials
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <a
                  className="hover:text-[#EB4D23] transition flex items-center gap-1.5"
                  href="#pricing"
                  onClick={() => onSelectCategory('boulders')}
                >
                  <ChevronRight className="w-3 h-3 text-[#EB4D23]" /> Boulders (GH₵ 6,000)
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#EB4D23] transition flex items-center gap-1.5"
                  href="#pricing"
                  onClick={() => onSelectCategory('filling')}
                >
                  <ChevronRight className="w-3 h-3 text-[#EB4D23]" /> Filling Material / Laterite
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#EB4D23] transition flex items-center gap-1.5"
                  href="#pricing"
                  onClick={() => onSelectCategory('quarry-dust')}
                >
                  <ChevronRight className="w-3 h-3 text-[#EB4D23]" /> Quarry Dust (GH₵ 7,300)
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#EB4D23] transition flex items-center gap-1.5"
                  href="#pricing"
                  onClick={() => onSelectCategory('quarry-stones')}
                >
                  <ChevronRight className="w-3 h-3 text-[#EB4D23]" /> Quarry Stones / Chippings (GH₵ 5,500)
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#EB4D23] transition flex items-center gap-1.5"
                  href="#pricing"
                  onClick={() => onSelectCategory('riversand')}
                >
                  <ChevronRight className="w-3 h-3 text-[#EB4D23]" /> Riversand
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#EB4D23] transition flex items-center gap-1.5"
                  href="#pricing"
                  onClick={() => onSelectCategory('stones')}
                >
                  <ChevronRight className="w-3 h-3 text-[#EB4D23]" /> Stones (GH₵ 5,000)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Contact Info
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EB4D23] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 block">Location</span>
                  <p className="text-white font-medium">
                    {COMPANY_DETAILS.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#EB4D23] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 block">Call Us</span>
                  <a
                    className="text-white hover:text-[#EB4D23] transition font-semibold font-mono"
                    href={`tel:${COMPANY_DETAILS.phone}`}
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#EB4D23] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 block">Email Us</span>
                  <a
                    className="text-white hover:text-[#EB4D23] transition break-all"
                    href={`mailto:${COMPANY_DETAILS.email}`}
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-[10px] mt-0.5 flex-shrink-0">
                  W
                </span>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 block">WhatsApp</span>
                  <a
                    className="text-white hover:text-[#25D366] transition font-semibold font-mono"
                    href="https://wa.me/233244520024"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 {COMPANY_DETAILS.name}. All rights reserved. Managed by {COMPANY_DETAILS.owner}.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                if (onNavigatePrivacy) onNavigatePrivacy();
                else setLegalModal('privacy');
              }}
              className="hover:text-gray-300 transition cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                if (onNavigateTerms) onNavigateTerms();
                else setLegalModal('terms');
              }}
              className="hover:text-gray-300 transition cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            {/* Round Back-to-Top Button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#EB4D23] text-white flex items-center justify-center hover:bg-[#D03B13] transition shadow-md cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Notice Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 text-gray-800">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-black text-gray-900 font-display mb-4">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>

            <div className="space-y-3 text-xs text-gray-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    <strong>1. Information Collection:</strong> When you submit a quote request,
                    we collect your name, phone number, email, and job site location exclusively to
                    coordinate aggregate logistics and dispatch.
                  </p>
                  <p>
                    <strong>2. Zero Spam:</strong> We never sell, lease, or share your contact data
                    with third parties. Your details are accessed solely by {COMPANY_DETAILS.name}
                    haulage coordinators.
                  </p>
                  <p>
                    <strong>3. Data Security:</strong> All inquiries sent through this site are
                    processed with strict commercial confidentiality.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Trip Pricing &amp; Volume:</strong> Standard trip quotes correspond
                    to 20-cubic-meter tipper truck capacities unless specified otherwise in writing.
                  </p>
                  <p>
                    <strong>2. Offloading &amp; Site Access:</strong> Clients are responsible for
                    ensuring unhindered, safe access for heavy tipper vehicles at the designated site.
                  </p>
                  <p>
                    <strong>3. Material Inspection:</strong> Aggregate grade, cleanliness, and
                    volume must be inspected at the point of discharge before signing the delivery slip.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-xl bg-[#080e21] text-white text-xs font-bold"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
