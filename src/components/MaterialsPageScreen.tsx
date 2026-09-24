import React, { useState } from 'react';
import {
  Truck,
  ArrowRight,
  Phone,
  MessageSquare,
  Layers,
  Sparkles,
  CheckCircle2,
  Boxes,
  Info,
} from 'lucide-react';
import { COMPANY_DETAILS, PRICE_ITEMS, MATERIAL_CATEGORIES } from '../data/materialsData';
import { PriceItem, MaterialCategoryId } from '../types';

interface MaterialsPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateServices: () => void;
  onNavigatePrices: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
  onOpenPriceList: () => void;
  onOpenDetailModal: (category: MaterialCategoryId) => void;
  onSelectMaterial: (item: PriceItem) => void;
}

export const MaterialsPageScreen: React.FC<MaterialsPageScreenProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateServices,
  onNavigatePrices,
  onNavigateGallery,
  onNavigateContact,
  onOpenPriceList,
  onOpenDetailModal,
  onSelectMaterial,
}) => {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('all');
  const [activeImageMap, setActiveImageMap] = useState<Record<string, number>>({});

  const getWhatsAppLink = (materialName: string, price: string) => {
    const text = encodeURIComponent(
      `Hello ${COMPANY_DETAILS.name}, I would like to inquire about ordering ${materialName} (${price} per Single Trip). Please advise on current stock and delivery schedule to my site.`
    );
    return `https://wa.me/233244520024?text=${text}`;
  };

  const filteredCategories =
    selectedCategoryTab === 'all'
      ? MATERIAL_CATEGORIES
      : MATERIAL_CATEGORIES.filter((c) => c.id === selectedCategoryTab);

  return (
    <div className="bg-[#F9FAFB] text-gray-800 font-sans antialiased selection:bg-[#EB4D23] selection:text-white">
      {/* 1. HeroSection */}
      <section className="relative bg-[#0B0C0E] py-20 lg:py-24 overflow-hidden text-center text-white" data-purpose="materials-hero">
        {/* Dark overlay with construction silhouette aesthetic */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-orange-400 text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-sm border border-white/10">
            <Layers className="w-3.5 h-3.5 text-orange-400" />
            <span>Material Catalog</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 font-sans">
            Building Materials Catalog
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            {COMPANY_DETAILS.name} supplies quality certified building materials delivered directly to construction sites across {COMPANY_DETAILS.location}.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-20">
        {/* 2. StandardizedUnitBanner */}
        <section
          className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 sm:p-8 mb-14 transition-all"
          data-purpose="standardized-unit-banner"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-black tracking-widest text-[#EB4D23] uppercase mb-1 block">
                Standardized Supply Unit
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B0C0E] tracking-tight mb-2">
                All material pricing is based on a Single Tipper Truck Trip Delivery
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Choose from our 6 certified building materials below. Check full specs, multiple product angles, and instant dispatch booking.
              </p>
            </div>
            <button
              onClick={onOpenPriceList}
              className="inline-flex items-center whitespace-nowrap bg-[#EB4D23] hover:bg-[#d63f17] text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              View Full Rate Card
            </button>
          </div>
        </section>

        {/* 3. Materials Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategoryTab('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCategoryTab === 'all'
                ? 'bg-[#080e21] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All 6 Materials
          </button>
          {MATERIAL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategoryTab === cat.id
                  ? 'bg-[#EB4D23] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 4. Building Material Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" data-purpose="top-product-catalog">
          {filteredCategories.map((cat) => {
            const currentImgIndex = activeImageMap[cat.id] || 0;
            const activeImage = cat.images[currentImgIndex] || cat.image;

            return (
              <article
                key={cat.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200/80 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Image Display with Gallery Carousel Switcher if multiple images */}
                  <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                    <img
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={activeImage}
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 bg-[#0B0C0E]/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                      Single Trip Delivery
                    </span>
                    <span className="absolute top-3 right-3 bg-[#EB4D23] text-white text-xs font-black tracking-wide px-3 py-1 rounded-full shadow-md font-mono">
                      {cat.priceDisplay}
                    </span>

                    {/* Multiple Image Dots Switcher */}
                    {cat.images.length > 1 && (
                      <div className="absolute bottom-3 inset-x-0 flex justify-center items-center gap-1.5 z-10">
                        {cat.images.map((img, imgIdx) => (
                          <button
                            key={imgIdx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveImageMap((prev) => ({ ...prev, [cat.id]: imgIdx }));
                            }}
                            className={`h-2 rounded-full transition-all cursor-pointer ${
                              currentImgIndex === imgIdx
                                ? 'w-6 bg-[#EB4D23]'
                                : 'w-2 bg-white/70 hover:bg-white'
                            }`}
                            aria-label={`View photo ${imgIdx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Row if multiple images */}
                  {cat.images.length > 1 && (
                    <div className="flex gap-2 p-3 bg-gray-50 border-b border-gray-100">
                      {cat.images.map((thumbUrl, tIdx) => (
                        <button
                          key={tIdx}
                          onClick={() => setActiveImageMap((prev) => ({ ...prev, [cat.id]: tIdx }))}
                          className={`w-12 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                            currentImgIndex === tIdx
                              ? 'border-[#EB4D23] scale-105'
                              : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={thumbUrl}
                            alt=""
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      ))}
                      <span className="text-[11px] text-gray-400 self-center ml-auto font-medium">
                        {cat.images.length} Photos
                      </span>
                    </div>
                  )}

                  {/* Content Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0B0C0E] group-hover:text-[#EB4D23] transition-colors mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {cat.description}
                    </p>

                    <div className="space-y-2 mb-6 text-xs text-gray-700">
                      {cat.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#EB4D23] flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Rate</span>
                    <span className="text-sm font-extrabold text-[#0B0C0E] font-mono">
                      {cat.priceDisplay}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={getWhatsAppLink(cat.name, cat.priceDisplay)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-green-50 hover:bg-green-100 text-green-600 transition text-xs font-bold"
                      title="WhatsApp Dispatch"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => {
                        const priceItem = PRICE_ITEMS.find((p) => p.id === cat.id) || PRICE_ITEMS[0];
                        onSelectMaterial(priceItem);
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#EB4D23] hover:bg-[#d63f17] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer active:scale-95"
                    >
                      <span>Book Trip</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* 5. Dispatch Support Banner */}
        <div className="bg-[#080e21] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EB4D23]">
              Direct Site Haulage
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              Need Bulk Supply or Specific Site Delivery?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our dispatch team coordinates tipper haulage to construction sites across {COMPANY_DETAILS.location}. Call directly for volume discounts and immediate dispatch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EB4D23] hover:bg-[#d63f17] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-lg transition"
            >
              <Phone className="w-4 h-4" />
              <span>Call Dispatch: {COMPANY_DETAILS.phone}</span>
            </a>
            <a
              href="https://wa.me/233244520024"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full font-bold text-sm transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
