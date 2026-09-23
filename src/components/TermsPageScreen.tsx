import React from 'react';
import { ArrowLeft, FileText, Phone, Mail, Globe } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/materialsData';

interface TermsPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateMaterials: () => void;
  onNavigateServices: () => void;
  onNavigatePrices: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
}

export const TermsPageScreen: React.FC<TermsPageScreenProps> = ({
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

          {/* Legal Documentation Badge */}
          <div className="inline-flex items-center gap-2 border border-[#EB4D23]/40 text-[#EB4D23] bg-[#EB4D23]/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 font-mono">
            <FileText className="w-3.5 h-3.5 stroke-[2]" />
            <span>LEGAL DOCUMENTATION</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3 font-display">
            Terms &amp; Conditions
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
            {/* Section 1 */}
            <section data-purpose="terms-section" className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight font-display">
                1. General Terms
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                By accessing this website, placing inquiries, and ordering building materials from{' '}
                <strong className="font-semibold text-gray-800">{COMPANY_DETAILS.name}</strong>, you acknowledge
                that you have read, understood, and agree to be bound by these Terms and Conditions. These terms
                govern all supply transactions, haulage agreements, and interactions with our dispatch operations.
              </p>
            </section>

            {/* Section 2 */}
            <section data-purpose="terms-section" className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight font-display">
                2. Unit Basis &amp; Supply Standards
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                All building material supply quotes, listings, and order calculations are based on the{' '}
                <strong className="text-gray-900 font-semibold">Single Trip (16m³ Tipper Truck Load)</strong> standard,
                unless otherwise formally agreed in writing for a specific custom consignment.
              </p>
            </section>

            {/* Section 3 */}
            <section data-purpose="terms-section" className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight font-display">
                3. Pricing &amp; Order Confirmation
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                While <span className="font-medium text-gray-800">{COMPANY_DETAILS.name}</span> strives to keep all
                website pricing current, material market conditions and haulage distance can vary. Customers are advised
                and encouraged to contact <span className="font-medium text-gray-800">{COMPANY_DETAILS.name}</span> via
                phone or WhatsApp on{' '}
                <a
                  className="text-[#EB4D23] font-bold hover:underline transition-colors font-mono"
                  href={`tel:${COMPANY_DETAILS.phone}`}
                >
                  {COMPANY_DETAILS.phone}
                </a>{' '}
                to confirm current material prices and delivery feasibility prior to placing an order.
              </p>
            </section>

            {/* Section 4 */}
            <section data-purpose="terms-section" className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight font-display">
                4. Site Access &amp; Delivery Offloading
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                The customer is responsible for ensuring that the destination construction site has adequate, safe road
                access and clearance for a <span className="font-semibold text-gray-900">Single Trip (16m³ Tipper Truck Load)</span> truck
                to maneuver and tip materials safely.
              </p>
            </section>

            {/* Section 5 */}
            <section data-purpose="terms-section" className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight font-display">
                5. Governing Law
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                These terms are governed by and construed in accordance with the laws of the Republic of Ghana.
              </p>
            </section>

            {/* Section 6 */}
            <section data-purpose="terms-section" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight font-display">
                6. Contact Details
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
