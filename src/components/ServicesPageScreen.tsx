import React from 'react';
import {
  Truck,
  Layers,
  Shield,
  Grid,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
  Sparkles,
  Boxes,
  Mountain,
} from 'lucide-react';
import { COMPANY_DETAILS, PRICE_ITEMS, MATERIAL_CATEGORIES } from '../data/materialsData';
import { PriceItem, MaterialCategoryId } from '../types';

interface ServicesPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigatePrices: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
  onSelectCategory: (category: MaterialCategoryId) => void;
  onSelectMaterial: (item: PriceItem) => void;
}

export const ServicesPageScreen: React.FC<ServicesPageScreenProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigatePrices,
  onNavigateGallery,
  onNavigateContact,
  onSelectCategory,
  onSelectMaterial,
}) => {
  return (
    <div className="bg-white min-h-screen text-[#080e21] antialiased selection:bg-[#EB4D23] selection:text-white flex flex-col font-sans">
      {/* 1. Services Hero Section */}
      <section className="relative bg-[#080e21] text-white py-20 md:py-28 overflow-hidden" data-purpose="services-hero">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EB4D23]/15 border border-[#EB4D23]/35 text-[#EB4D23] text-xs uppercase font-bold tracking-widest mb-6">
            <Layers className="w-4 h-4 text-[#EB4D23]" />
            <span>BUILDING MATERIAL SUPPLY SERVICES</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-white uppercase mb-6 leading-tight">
            Building Material Supply Services
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {COMPANY_DETAILS.name} provides dependable supply of boulders, quarry stones, quarry dust, riversand, filling material, and stones across {COMPANY_DETAILS.location}.
          </p>
        </div>
      </section>

      {/* 2. Main Content Services Grid */}
      <section className="py-16 sm:py-24 bg-[#FAFAFC]" data-purpose="services-grid-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#EB4D23] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2 font-mono">
              OUR CORE SUPPLY SCOPE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-[#080e21] tracking-tight">
              Quality Building Material Supply In Ghana
            </h2>
          </div>

          {/* 6 Material Supply Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MATERIAL_CATEGORIES.map((cat) => {
              const priceItem = PRICE_ITEMS.find((p) => p.id === cat.id) || PRICE_ITEMS[0];
              return (
                <div
                  key={cat.id}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgba(8,14,33,0.05)] hover:shadow-[0_16px_40px_rgba(235,77,35,0.08)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-48 w-full overflow-hidden bg-gray-100 relative">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 right-3 bg-[#EB4D23] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md font-mono">
                        {cat.priceDisplay}
                      </span>
                    </div>

                    <div className="p-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1 font-mono">
                        DIRECT SITE SUPPLY
                      </span>
                      <h3 className="text-xl font-bold font-display text-[#080e21] tracking-tight mb-2">
                        {cat.name}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {cat.description}
                      </p>

                      <ul className="space-y-2 text-xs font-medium text-slate-800 mb-4">
                        {cat.specs.slice(0, 2).map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#EB4D23] flex-shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => onSelectMaterial(priceItem)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-50 text-xs font-bold text-[#080e21] hover:bg-[#EB4D23] hover:text-white transition-all cursor-pointer border border-gray-200 hover:border-[#EB4D23]"
                    >
                      <span>Order {cat.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Call to Action Banner */}
      <section className="bg-[#080e21] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-display">
            Ready to Order Construction Materials?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Contact dispatch directly for single trip deliveries or volume bulk supply to your job site across {COMPANY_DETAILS.location}.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="bg-[#EB4D23] hover:bg-[#d63f17] text-white px-7 py-3 rounded-full font-bold text-sm shadow-md transition"
            >
              Call {COMPANY_DETAILS.phone}
            </a>
            <a
              href="https://wa.me/233244520024"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-bold text-sm shadow-md transition"
            >
              WhatsApp Dispatch Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
