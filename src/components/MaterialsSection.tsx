import React from 'react';
import {
  Boxes,
  Truck,
  Shield,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Info,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY_DETAILS, MATERIAL_CATEGORIES, PRICE_ITEMS } from '../data/materialsData';
import { PriceItem, MaterialCategoryId } from '../types';

interface MaterialsSectionProps {
  onSelectCategory: (categoryId: MaterialCategoryId) => void;
  onOpenDetailModal?: (type: MaterialCategoryId) => void;
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
              We Supply Your Projects <br />
              <span className="text-[#EB4D23]">With Trust &amp; Quality.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-500 max-w-xs leading-relaxed">
              {COMPANY_DETAILS.name} supplies quality building materials suited for
              residential, commercial, and infrastructure construction projects.
            </p>
            <a
              className="inline-flex items-center gap-2 bg-[#080e21] hover:bg-black text-white text-xs font-bold px-5 py-3 rounded-full transition shadow-sm"
              href="#pricing"
            >
              <span>View Prices</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6 Material Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MATERIAL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-extrabold text-gray-900 font-display group-hover:text-[#EB4D23] transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-xs font-mono font-bold text-[#EB4D23] bg-[#FFF2EE] px-2.5 py-1 rounded-full">
                    {cat.priceDisplay}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                  {cat.description}
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-52 bg-gray-100 mt-2">
                <img
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={cat.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                  <span>Single Trip Load</span>
                </div>
                <button
                  aria-label={`View ${cat.name} details`}
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[#EB4D23] text-white flex items-center justify-center shadow-lg hover:bg-[#D03B13] transition-colors cursor-pointer group-hover:scale-110"
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
