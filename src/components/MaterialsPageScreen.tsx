import React from 'react';
import {
  Truck,
  ArrowRight,
  Phone,
  MessageSquare,
  Layers,
  Sparkles,
} from 'lucide-react';
import { COMPANY_DETAILS, IMAGES, PRICE_ITEMS } from '../data/materialsData';
import { PriceItem } from '../types';

interface MaterialsPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateServices: () => void;
  onNavigatePrices: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
  onOpenPriceList: () => void;
  onOpenDetailModal: (category: 'quarry' | 'riversand' | 'filling' | 'sand') => void;
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
  const getWhatsAppLink = (materialName: string, price: string) => {
    const text = encodeURIComponent(
      `Hello ${COMPANY_DETAILS.name}, I would like to inquire about ordering ${materialName} (${price} per Single Trip). Please advise on current stock and delivery schedule to my site.`
    );
    return `https://wa.me/233244520024?text=${text}`;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            Building Materials
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            {COMPANY_DETAILS.name} supplies quality building materials for construction projects in Ghana and nationwide.
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
                All material pricing is based on a Single Trip (16m³ Tipper Truck Load)
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Select any material to review sizes, available grades, exact pricing, and enquiry options.
              </p>
            </div>
            <button
              onClick={onOpenPriceList}
              className="inline-flex items-center whitespace-nowrap bg-[#EB4D23] hover:bg-[#d63f17] text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              View Full Price Table
            </button>
          </div>
        </section>

        {/* 3. TopProductCardsGrid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" data-purpose="top-product-catalog">
          {/* Card 1: Quarry Stones */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <img
                  alt="Crushed Quarry Stones"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOlx0fblRvwIPDoQC-f8R7VmbEXuVq3Bh6qemav7tfvsNyrjBnHSLUr1nq4u2aZIsxkUt4PaAzF-_SwnsdqQhGjF_gZHKaO2nhIW3GV7-13fGPG9neBqdkqD117LoFq6UYH21rMCZKV3yexU5AOQ_1aGieD__YJaBW5gP5K_z5Xyd6Klqzv27hXI8DNGG2MRg1UAfwbEKm9I7h6e2NmjoTuaHowMlRvL02Mo3YjbgB0xBu4Sx0a1zX"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = IMAGES.quarryStones;
                  }}
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-[#0B0C0E]/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase">
                  Quarry Stones
                </span>
                <span className="absolute bottom-3 right-3 bg-[#EB4D23] text-white text-xs font-black px-2.5 py-1 rounded-md shadow">
                  From GH₵ 2,750
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quarry Stones</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  High quality crushed quarry stones supplied in multiple graded sizes for construction projects.
                </p>
                <div className="bg-gray-50 rounded-lg p-2.5 flex items-center gap-2 border border-gray-100 mb-4">
                  <Truck className="w-3.5 h-3.5 text-[#EB4D23] shrink-0" />
                  <span className="text-xs text-gray-600 font-medium">
                    Unit: <strong className="text-gray-900">Single Trip (16m³)</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5 pb-5 pt-0 grid grid-cols-2 gap-2">
              <button
                onClick={() => onOpenDetailModal('quarry')}
                className="inline-flex justify-center items-center py-2 px-3 border border-gray-200 text-xs font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Details
              </button>
              <a
                className="inline-flex justify-center items-center py-2 px-3 bg-[#EB4D23] hover:bg-[#d63f17] text-xs font-semibold rounded-lg text-white transition-colors"
                href={getWhatsAppLink('Quarry Stones (3/4", 1", 3/8", 5/8")', 'From GH₵ 2,750')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire
              </a>
            </div>
          </article>

          {/* Card 2: Riversand */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <img
                  alt="Riversand Pile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJGVO8-1WHNLqDBLxL8E6MDHhrk2SYz4iTaYdGzm64yMtxRik8ph2g7dlvLWX9h35sqQd7201pnAFtoW-mLKfhhHzUt63lHFagkimF_p2Mu7xF9x1JTGoAdjXQ8ThNOVw0LN8x7ee-Ji130XMm8YuREk03_A91b_rkI9XQ-Rh1nwSTw-A9shquCoBy0a63DTlQfyVrTaEycCbl_zqbjNQ-HwsWZw4EMVBiVNFB0Ev9T4x2QLxrTH7H"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = IMAGES.riversand;
                  }}
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-[#0B0C0E]/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase">
                  Riversand
                </span>
                <span className="absolute bottom-3 right-3 bg-[#EB4D23] text-white text-xs font-black px-2.5 py-1 rounded-md shadow">
                  GH₵ 3,100
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Riversand</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Quality natural riversand supplied for construction works and building projects.
                </p>
                <div className="bg-gray-50 rounded-lg p-2.5 flex items-center gap-2 border border-gray-100 mb-4">
                  <Truck className="w-3.5 h-3.5 text-[#EB4D23] shrink-0" />
                  <span className="text-xs text-gray-600 font-medium">
                    Unit: <strong className="text-gray-900">Single Trip (16m³)</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5 pb-5 pt-0 grid grid-cols-2 gap-2">
              <button
                onClick={() => onOpenDetailModal('riversand')}
                className="inline-flex justify-center items-center py-2 px-3 border border-gray-200 text-xs font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Details
              </button>
              <a
                className="inline-flex justify-center items-center py-2 px-3 bg-[#EB4D23] hover:bg-[#d63f17] text-xs font-semibold rounded-lg text-white transition-colors"
                href={getWhatsAppLink('Clean Riversand', 'GH₵ 3,100')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire
              </a>
            </div>
          </article>

          {/* Card 3: Filling Sand */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <img
                  alt="Laterite Filling Sand"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjrw4n9kE9sEGRyoLHtnJJtop1_MBuCDDMLuFyDIaRv-KRq32yIA8-eabiszYDIhKsuorCaiqZVxl-8_2lBPZhJfJH94FOVLlUFD06wzh1txRS56lBcPi5sdOC7Pb9C8r1Y43BlwEBKdi76NeZjQXx-lsH9QruTywZdjxB8TbWtnZ5QlVjhorvuHr2B9lTKIWCJJHIEIfq_H1PyFA_V59PgBCITK89bgD9HvtphPWg9hZyKBU5f6k7"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = IMAGES.fillingSand;
                  }}
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-[#0B0C0E]/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase">
                  Filling Sand
                </span>
                <span className="absolute bottom-3 right-3 bg-[#EB4D23] text-white text-xs font-black px-2.5 py-1 rounded-md shadow">
                  From GH₵ 1,850
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Filling Sand</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Reliable filling sand options including Grade 1 and Laterite for foundation, leveling, and site filling.
                </p>
                <div className="bg-gray-50 rounded-lg p-2.5 flex items-center gap-2 border border-gray-100 mb-4">
                  <Truck className="w-3.5 h-3.5 text-[#EB4D23] shrink-0" />
                  <span className="text-xs text-gray-600 font-medium">
                    Unit: <strong className="text-gray-900">Single Trip (16m³)</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5 pb-5 pt-0 grid grid-cols-2 gap-2">
              <button
                onClick={() => onOpenDetailModal('filling')}
                className="inline-flex justify-center items-center py-2 px-3 border border-gray-200 text-xs font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Details
              </button>
              <a
                className="inline-flex justify-center items-center py-2 px-3 bg-[#EB4D23] hover:bg-[#d63f17] text-xs font-semibold rounded-lg text-white transition-colors"
                href={getWhatsAppLink('Filling Sand (Grade 1 & Laterite)', 'From GH₵ 1,850')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire
              </a>
            </div>
          </article>

          {/* Card 4: Smooth, Medium & Rough Sand */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <img
                  alt="Tipper Truck with Sand"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSttSXHBV0R3wic-Dm1OJI-JNuJFHCb8ZJidaAAbrIeXnE0HDFicc3PB-hn3NZ2DNbVhDdQjIm-AN9GgPPT9Eb9wOBxg34n0taofeeALC5wnrQWcYTj9vuh5K3EBliFII0RxJxaiyBXMPka8cfpKLjwwkbMsQdNBc1-w1lzp9Qj_CmPvXO0NR41oF2S4vkJrpVXSTvUFB85RIj4ygPVVq_7DqQmYC9KtsRxpaoZ4c7FVuij-w16ftp"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = IMAGES.hero;
                  }}
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-[#0B0C0E]/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase">
                  Sand
                </span>
                <span className="absolute bottom-3 right-3 bg-[#EB4D23] text-white text-xs font-black px-2.5 py-1 rounded-md shadow">
                  From GH₵ 2,300
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Smooth, Medium &amp; Rough Sand</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Graded sand options including Smooth Sand, Medium Sand, and Rough Sand for masonry and plastering.
                </p>
                <div className="bg-gray-50 rounded-lg p-2.5 flex items-center gap-2 border border-gray-100 mb-4">
                  <Truck className="w-3.5 h-3.5 text-[#EB4D23] shrink-0" />
                  <span className="text-xs text-gray-600 font-medium">
                    Unit: <strong className="text-gray-900">Single Trip (16m³)</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5 pb-5 pt-0 grid grid-cols-2 gap-2">
              <button
                onClick={() => onOpenDetailModal('sand')}
                className="inline-flex justify-center items-center py-2 px-3 border border-gray-200 text-xs font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Details
              </button>
              <a
                className="inline-flex justify-center items-center py-2 px-3 bg-[#EB4D23] hover:bg-[#d63f17] text-xs font-semibold rounded-lg text-white transition-colors"
                href={getWhatsAppLink('Smooth, Medium & Rough Sand', 'From GH₵ 2,300')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire
              </a>
            </div>
          </article>
        </section>

        {/* 4. CategorizedSupplyGuide */}
        <section className="mb-20" data-purpose="categorized-supply-guide" id="supply-guide">
          {/* Section Header */}
          <div className="text-center md:text-left mb-8">
            <span className="text-xs font-extrabold tracking-widest text-[#EB4D23] uppercase">
              Categorized Supply Guide
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B0C0E] tracking-tight mt-1">
              Material Categories &amp; Specifications
            </h2>
          </div>

          <div className="space-y-6">
            {/* Large Card 1: Quarry Stones */}
            <div
              className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-center gap-6 lg:gap-8"
              id="guide-quarry"
            >
              <div className="w-full md:w-5/12 h-56 sm:h-64 rounded-xl overflow-hidden shrink-0 bg-gray-100 shadow-xs">
                <img
                  alt="Crushed Quarry Stones Specifications"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPDX09SwdWFtoBVKLvSWNFDxW56thiFc2pnmdane-DB3XGcExgKvUKS1nP3ETKG-ddSKhvVHTOSAvbMS8UXsVAIQG-szAilviypHZLGGcu_P9-j-m-H4TfKsp0bZ3SLvObdkApU94ALYk9HfVMdBSWP8vBN3br9MlLpaB90yr1ftRfUv0lK4vmoeDX-Ua8orwUsipVFsyLryV2WiF47JA9KfSMqTB4VSekJwl1ICXGa4SRXYic-fs4"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = IMAGES.quarryStones;
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-7/12 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Quarry Stones</h3>
                    <span className="bg-[#FFF4ED] text-[#EB4D23] border border-orange-200 text-xs font-black px-3 py-1 rounded-full whitespace-nowrap">
                      From GH₵ 2,750
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {COMPANY_DETAILS.name} supplies crushed quarry stones in 4 standard sizes: Three Quarter (3/4), One Inch (1"), Three Eighth (3/8), and Five Eighth (5/8).
                  </p>
                  {/* Responsive Chips Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5 text-center text-xs font-semibold text-gray-800">
                      3/4: GH₵ 2,850
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5 text-center text-xs font-semibold text-gray-800">
                      1": GH₵ 2,750
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5 text-center text-xs font-semibold text-gray-800">
                      3/8: GH₵ 2,950
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5 text-center text-xs font-semibold text-gray-800">
                      5/8: GH₵ 2,800
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => onOpenDetailModal('quarry')}
                    className="inline-flex items-center gap-2 bg-[#0B0C0E] hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>View Quarry Stones Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Large Card 2: Riversand */}
            <div
              className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-center gap-6 lg:gap-8"
              id="guide-riversand"
            >
              <div className="w-full md:w-5/12 h-56 sm:h-64 rounded-xl overflow-hidden shrink-0 bg-gray-100 shadow-xs">
                <img
                  alt="Riversand Details"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZlVtPpk3emh67w2NDREor3J1LHZvmrHlN6OykNvTdlw4pc6lZRhlPOcKqPsl2jUziA_bo8JBS46gkZbazszK7p4wIaStwTsFHUrgkVsMRkSR6uuzI0Fcjjjx4phuXtq5d135_PitW0HqSQb_CQw3MHWBP4RUAplPZXn8-4kZ7BraeNNYS7W5wxekIZOryBl9AEE4gVxdvUghwx45ND3WdIa7hxoWAWpdnBDY9r7UFQoQbzOfKiVYo"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = IMAGES.riversand;
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-7/12 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Riversand</h3>
                    <span className="bg-[#FFF4ED] text-[#EB4D23] border border-orange-200 text-xs font-black px-3 py-1 rounded-full whitespace-nowrap">
                      GH₵ 3,100
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    Quality natural riversand supplied for construction works and building projects. Delivered per Single Trip (16m³).
                  </p>
                  <div className="mb-6">
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-left text-xs font-semibold text-gray-800">
                      Rate: GH₵ 3,100 per Single Trip (16m³)
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => onOpenDetailModal('riversand')}
                    className="inline-flex items-center gap-2 bg-[#0B0C0E] hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>View Riversand Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Large Card 3: Filling Sand */}
            <div
              className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-center gap-6 lg:gap-8"
              id="guide-filling"
            >
              <div className="w-full md:w-5/12 h-56 sm:h-64 rounded-xl overflow-hidden shrink-0 bg-gray-100 shadow-xs">
                <img
                  alt="Filling Sand Details"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy3ijYFDSJrW-MPHW6hV4ugAeHO7UwdR-bHrr_C2I1sxj5O7Smh6xXYpcHTjVnnduuzvI6CXnrsoRwjzG4CWeZ-DFGyN7ms8WpC28NDk7FdYGtTZ_JXK1Bvu0oPBgt9YBfP9M-lzIuzEkNzTMTPNxUZKmCbduzNm6Zk6aU7EQl-4wKyOWvVFfrW8Hdl8TvAevlrTWbKFUeY9f9lcZOuhhWZrq4TBOOj8b3s42WfBbo5ilI1Cug7cZp"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = IMAGES.fillingSand;
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-7/12 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Filling Sand</h3>
                    <span className="bg-[#FFF4ED] text-[#EB4D23] border border-orange-200 text-xs font-black px-3 py-1 rounded-full whitespace-nowrap">
                      From GH₵ 1,850
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    Available options include Grade 1 filling sand (GH₵ 1,850) and Laterite (GH₵ 1,950) for site filling, foundation compaction, and earth leveling per Single Trip (16m³).
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-xs font-semibold text-gray-800">
                      <div>Grade 1: GH₵ 1,850</div>
                      <span className="text-[11px] font-normal text-gray-500">(Per Single Trip)</span>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-xs font-semibold text-gray-800">
                      <div>Laterite: GH₵ 1,950</div>
                      <span className="text-[11px] font-normal text-gray-500">(Per Single Trip)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => onOpenDetailModal('filling')}
                    className="inline-flex items-center gap-2 bg-[#0B0C0E] hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>View Filling Sand Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Large Card 4: Smooth, Medium & Rough Sand */}
            <div
              className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-center gap-6 lg:gap-8"
              id="guide-sand"
            >
              <div className="w-full md:w-5/12 h-56 sm:h-64 rounded-xl overflow-hidden shrink-0 bg-gray-100 shadow-xs">
                <img
                  alt="Smooth and Rough Sand Specifications"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEnIP6PGvX_ilWxpAX3uWegNX3wrr6UKaA4WAMa0LsSBi60Ky4yhuRk1zvcSpJeiwcQLBeHv8NUMEMU8O2u2D5B9LJkP0JtSZvAzjLRf8Q2MTU8ZCUwkK0m6fWaGmeWsSH6VirscWsrJrWzLIwO_-9u73F3be2CSs6TtsjSQxNLJ8fsd-Ij_t1uU3EqJCYW7FxQyfexeJbxeyuHyw8PGDil-T47Suy_xAq7qsyaPQQsRb5Zpcf0M8H"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = IMAGES.aboutFoundation;
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-7/12 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Smooth, Medium &amp; Rough Sand</h3>
                    <span className="bg-[#FFF4ED] text-[#EB4D23] border border-orange-200 text-xs font-black px-3 py-1 rounded-full whitespace-nowrap">
                      From GH₵ 2,300
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    Supplying Smooth Sand (GH₵ 2,400), Medium Sand (GH₵ 2,300), and Rough Sand (GH₵ 2,350) for masonry, concrete, and building finishes.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5 text-center text-xs font-semibold text-gray-800">
                      Smooth Sand: GH₵ 2,400
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5 text-center text-xs font-semibold text-gray-800">
                      Medium Sand: GH₵ 2,300
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5 text-center text-xs font-semibold text-gray-800">
                      Rough Sand: GH₵ 2,350
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => onOpenDetailModal('sand')}
                    className="inline-flex items-center gap-2 bg-[#0B0C0E] hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>View Sand Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CallToAction Section */}
        <section
          className="bg-[#111317] rounded-3xl p-8 sm:p-12 text-white border border-gray-800 shadow-2xl relative overflow-hidden"
          data-purpose="cta-section"
          id="contact-block"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold tracking-widest text-[#EB4D23] uppercase block mb-1">
                Need To Order Building Materials?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">
                Need To Order Building Materials?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Contact {COMPANY_DETAILS.name} to confirm stock, pricing, and delivery schedules.
              </p>
            </div>
            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0 justify-center">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#EB4D23] hover:bg-[#d63f17] text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg active:scale-95"
                href={`tel:${COMPANY_DETAILS.phone}`}
              >
                <Phone className="w-4 h-4" />
                <span>Call: {COMPANY_DETAILS.phone}</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg active:scale-95"
                href={`https://wa.me/233244520024?text=${encodeURIComponent(
                  `Hello ${COMPANY_DETAILS.name}, I want to confirm stock, pricing, and delivery schedule for building materials.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
