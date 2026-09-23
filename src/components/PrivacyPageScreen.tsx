import React from 'react';
import { ArrowLeft, Shield, Phone, Mail, Globe } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/materialsData';

interface PrivacyPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateMaterials: () => void;
  onNavigateServices: () => void;
  onNavigatePrices: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
}

export const PrivacyPageScreen: React.FC<PrivacyPageScreenProps> = ({
  onNavigateHome,
}) => {
  return (
    <div className="bg-[#F4F5F8] text-gray-800 font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-[#EB4D23] selection:text-white">
      {/* 1. Hero Section */}
      <section className="bg-[#0B0C0E] text-white pt-14 pb-28 relative overflow-hidden [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
          {/* Back to Home link */}
          <button
            onClick={onNavigateHome}
            className="text-xs uppercase tracking-wider text-gray-400 hover:text-white inline-flex items-center gap-1.5 mb-4 transition-colors font-medium cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 stroke-[2]" />
            <span>BACK TO HOME</span>
          </button>

          {/* Privacy Badge */}
          <div className="inline-flex items-center gap-2 border border-[#EB4D23]/40 text-[#EB4D23] bg-[#EB4D23]/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 font-mono">
            <Shield className="w-3.5 h-3.5 stroke-[2]" />
            <span>PRIVACY &amp; DATA POLICY</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3 font-display">
            Privacy Policy
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-normal">
            {COMPANY_DETAILS.name}
          </p>
        </div>
      </section>

      {/* 2. Main Content Card */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-4 -mt-16 mb-24 relative z-20">
        <article className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Top Colored Accent Bar */}
          <div className="h-1.5 w-full bg-[#EB4D23]" />

          {/* Inner Article Content */}
          <div className="p-6 sm:p-10 md:p-14 space-y-10 text-gray-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight font-display">
                1. Information We Collect
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                When you request material supply quotes, volume calculations, or tipper truck dispatches through{' '}
                <strong className="font-semibold text-gray-800">{COMPANY_DETAILS.name}</strong>, we collect your name,
                telephone number, email address, delivery site location, and material specifications solely for the
                purpose of fulfilling your order.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight font-display">
                2. How We Use Your Data
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Your contact details and site coordinates are utilized directly by our logistics and dispatch team to
                coordinate driver navigation, quote confirmations, and customer support. We do not sell, rent, or trade
                customer data to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight font-display">
                3. Direct WhatsApp &amp; Phone Inquiries
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Communications initiated through direct WhatsApp links or phone lines are processed through standard
                secure messaging channels according to WhatsApp’s privacy protections and our internal customer care standards.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight font-display">
                4. Contact Information
              </h2>
              <div className="bg-gray-50/80 rounded-2xl p-6 sm:p-7 border border-gray-200/60 text-sm space-y-2.5">
                <p className="font-bold text-gray-900 text-base mb-1 font-display">
                  {COMPANY_DETAILS.name}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span className="font-medium text-gray-700">Website:</span>
                  <span className="text-gray-900 font-medium">adjeinorteymaterials.com</span>
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="font-medium text-gray-700">Email:</span>
                  <a className="text-[#EB4D23] font-medium hover:underline" href={`mailto:${COMPANY_DETAILS.email}`}>
                    {COMPANY_DETAILS.email}
                  </a>
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="font-medium text-gray-700">Phone / WhatsApp:</span>
                  <a
                    className="text-[#EB4D23] font-semibold hover:underline font-mono"
                    href={`tel:${COMPANY_DETAILS.phone}`}
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
};
