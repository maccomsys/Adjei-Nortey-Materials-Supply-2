import React from 'react';
import {
  Boxes,
  Truck,
  Shield,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Info,
} from 'lucide-react';
import { COMPANY_DETAILS, IMAGES } from '../data/materialsData';

interface MaterialsSectionProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenDetailModal: (type: 'quarry' | 'filling' | 'sand') => void;
}

export const MaterialsSection: React.FC<MaterialsSectionProps> = ({
  onSelectCategory,
  onOpenDetailModal,
}) => {
  return (
    <section className="py-20 lg:py-24 bg-gray-50/70 border-t border-gray-200/60" id="materials">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#EB4D23] font-bold text-xs uppercase tracking-widest mb-2">
              <Boxes className="w-4 h-4" />
              <span>Our Supply Materials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 leading-tight">
              We Build Your Dreams <br />
              <span className="text-gray-900">With Trust &amp; Quality.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-500 max-w-xs leading-relaxed">
              {COMPANY_DETAILS.name} supplies all grades of premium building materials suited for
              residential, commercial, and industrial construction projects.
            </p>
            <a
              className="inline-flex items-center gap-2 bg-[#080e21] hover:bg-black text-white text-xs font-bold px-5 py-3 rounded-full transition shadow-sm"
              href="#pricing"
            >
              <span>See More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3 Material Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Quarry Stones */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 flex flex-col justify-between group">
            <div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2 font-display">
                Quarry Stones
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                High quality crushed quarry stones supplied in multiple graded sizes including 3/4",
                1", 3/8", and 5/8" for concrete works.
              </p>
              <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center mb-6 text-sm group-hover:bg-[#FFF2EE] group-hover:text-[#EB4D23] transition-colors">
                <Boxes className="w-5 h-5" />
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-52 bg-gray-100">
              <img
                alt="Quarry Stones"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={IMAGES.quarryStones}
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => onOpenDetailModal('quarry')}
                aria-label="View Quarry Stones details"
                className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[#EB4D23] text-white flex items-center justify-center shadow-lg hover:bg-[#D03B13] transition-colors cursor-pointer group-hover:scale-110"
              >
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Card 2: Filling Sand */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 flex flex-col justify-between group">
            <div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2 font-display">
                Filling Sand
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                Reliable filling sand options including Grade 1 and Laterite for strong foundation
                leveling and major site filling.
              </p>
              <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center mb-6 text-sm group-hover:bg-[#FFF2EE] group-hover:text-[#EB4D23] transition-colors">
                <Truck className="w-5 h-5" />
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-52 bg-gray-100">
              <img
                alt="Filling Sand & Laterite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={IMAGES.fillingSand}
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => onOpenDetailModal('filling')}
                aria-label="View Filling Sand details"
                className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[#EB4D23] text-white flex items-center justify-center shadow-lg hover:bg-[#D03B13] transition-colors cursor-pointer group-hover:scale-110"
              >
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Card 3: Smooth & Rough Sand */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 flex flex-col justify-between group">
            <div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2 font-display">
                Smooth &amp; Rough Sand
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                Graded sand options including Smooth Sand, Medium Sand, and Rough Sand perfect for
                masonry and fine plastering.
              </p>
              <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center mb-6 text-sm group-hover:bg-[#FFF2EE] group-hover:text-[#EB4D23] transition-colors">
                <Shield className="w-5 h-5" />
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-52 bg-gray-100">
              <img
                alt="Washed riversand and masonry aggregate"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={IMAGES.riversand}
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => onOpenDetailModal('sand')}
                aria-label="View Smooth & Rough Sand details"
                className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[#EB4D23] text-white flex items-center justify-center shadow-lg hover:bg-[#D03B13] transition-colors cursor-pointer group-hover:scale-110"
              >
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
