import React, { useState } from 'react';
import {
  Layers,
  Check,
  ArrowRight,
  Award,
  ShieldCheck,
  Truck,
  Building,
  CheckCircle2,
  X,
} from 'lucide-react';
import { COMPANY_DETAILS, IMAGES } from '../data/materialsData';

export const AboutSection: React.FC = () => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-white relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#EB4D23] font-bold text-xs uppercase tracking-widest">
              <Layers className="w-4 h-4" />
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 leading-tight">
              Building Excellence &amp; <br />
              <span className="text-[#EB4D23]">Trust With Quality</span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              {COMPANY_DETAILS.name} is a dedicated materials supply company supplying quality
              building materials across {COMPANY_DETAILS.location}. We provide transparent pricing
              based on standard tipper truck trips and tonnage, making site procurement direct,
              dependable, and completely straightforward.
            </p>

            {/* 4 Checklist Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFF2EE] text-[#EB4D23] flex items-center justify-center flex-shrink-0 text-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="font-bold text-sm text-gray-800">Boulders &amp; Quarry Stones</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFF2EE] text-[#EB4D23] flex items-center justify-center flex-shrink-0 text-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="font-bold text-sm text-gray-800">Clean Washed Riversand</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFF2EE] text-[#EB4D23] flex items-center justify-center flex-shrink-0 text-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="font-bold text-sm text-gray-800">Quarry Dust &amp; Laterite</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FFF2EE] text-[#EB4D23] flex items-center justify-center flex-shrink-0 text-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="font-bold text-sm text-gray-800">Transparent Pricing</span>
              </div>
            </div>

            {/* Action & Owner Chip */}
            <div className="pt-6 flex flex-wrap items-center gap-6">
              <button
                onClick={() => setProfileModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#EB4D23] hover:bg-[#D03B13] text-white font-bold px-7 py-3.5 rounded-full shadow-md shadow-[#EB4D23]/20 transition cursor-pointer"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Owner Chip */}
              <div className="flex items-center gap-3 pl-2 sm:border-l sm:border-gray-200">
                <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-inner font-display">
                  AN
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-gray-900 leading-snug">
                    {COMPANY_DETAILS.owner}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">{COMPANY_DETAILS.ownerTitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Overlapping Rounded Construction Photos */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg flex items-center justify-center">
              {/* Floating Badge: Since [YEAR] */}
              <div className="absolute -top-4 left-6 z-20 bg-[#EB4D23] text-white text-xs font-black px-4 py-2 rounded-xl shadow-lg uppercase tracking-wider">
                Since {COMPANY_DETAILS.establishedYear}
              </div>

              {/* Overlapping Left Image (Tall) */}
              <div className="w-1/2 pr-2">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-72 sm:h-96 relative group bg-gray-100">
                  <img
                    alt="Construction site structure"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={IMAGES.aboutTall}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Overlapping Right Image */}
              <div className="w-1/2 pl-2 pt-10">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-64 sm:h-80 relative group bg-gray-100">
                  <img
                    alt="Concrete building foundation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={IMAGES.aboutFoundation}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating Experience Badge Bottom Right */}
              <div className="absolute -bottom-6 right-4 sm:right-6 z-20 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFF2EE] text-[#EB4D23] flex items-center justify-center text-xl">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-gray-900 leading-tight tabular-nums font-mono">
                    {COMPANY_DETAILS.yearsExperience}+
                  </p>
                  <p className="text-xs text-gray-500 font-semibold">Years Of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Profile Modal */}
      {profileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setProfileModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EB4D23] text-white flex items-center justify-center font-bold text-lg font-display">
                AN
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-gray-900 font-display">
                  {COMPANY_DETAILS.name} Profile
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Led by {COMPANY_DETAILS.owner} &middot; Established {COMPANY_DETAILS.establishedYear}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
              <p>
                Founded by <strong>{COMPANY_DETAILS.owner}</strong>, our company has evolved into a
                premier building materials aggregate supplier in Ghana. We bridge the gap between
                raw industrial quarries and on-site contractors with punctuality, volume integrity,
                and transparent trip billing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 text-center">
                  <Truck className="w-5 h-5 mx-auto text-[#EB4D23] mb-1" />
                  <span className="font-extrabold text-sm text-gray-900 block font-mono">
                    {COMPANY_DETAILS.truckFleetCount} Trucks
                  </span>
                  <span className="text-[11px] text-gray-500">Active Tipper Fleet</span>
                </div>
                <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 text-center">
                  <ShieldCheck className="w-5 h-5 mx-auto text-[#EB4D23] mb-1" />
                  <span className="font-extrabold text-sm text-gray-900 block font-mono">
                    100% Inspected
                  </span>
                  <span className="text-[11px] text-gray-500">Graded Aggregates</span>
                </div>
                <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 text-center">
                  <Building className="w-5 h-5 mx-auto text-[#EB4D23] mb-1" />
                  <span className="font-extrabold text-sm text-gray-900 block font-mono">
                    {COMPANY_DETAILS.happyClientsCount}
                  </span>
                  <span className="text-[11px] text-gray-500">Completed Projects</span>
                </div>
              </div>

              <p className="pt-2">
                Whether you are casting residential floor slabs, setting civil drainage culverts, or
                undertaking major estate earthworks, our team ensures rapid turnaround within 24
                hours of order confirmation.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end gap-3">
              <button
                onClick={() => setProfileModalOpen(false)}
                className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-xs hover:bg-gray-50"
              >
                Close
              </button>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="px-6 py-2.5 rounded-xl bg-[#EB4D23] text-white font-bold text-xs hover:bg-[#D03B13] transition"
              >
                Call {COMPANY_DETAILS.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
