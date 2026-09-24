import React from 'react';
import {
  Phone,
  Mail,
  Clock,
  Share2,
  Layers,
  ChevronDown,
  CheckCircle2,
  Globe,
  Award,
  Truck,
  Scale,
  Building,
  ShieldCheck,
  ArrowRight,
  Headphones,
  MessageSquare,
  Waves,
  Mountain,
  Grid,
} from 'lucide-react';
import { COMPANY_DETAILS, IMAGES, PRICE_ITEMS } from '../data/materialsData';
import { PriceItem } from '../types';

interface AboutPageScreenProps {
  onNavigateHome: () => void;
  onNavigateMaterials: () => void;
  onNavigatePrices: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
  onOpenCalculator: () => void;
  onSelectMaterial: (item: PriceItem) => void;
}

export const AboutPageScreen: React.FC<AboutPageScreenProps> = ({
  onNavigateHome,
  onNavigateMaterials,
  onNavigatePrices,
  onNavigateGallery,
  onNavigateContact,
  onOpenCalculator,
  onSelectMaterial,
}) => {
  const quarryItem = PRICE_ITEMS.find((p) => p.id === 'quarry-3-4') || PRICE_ITEMS[0];
  const riversandItem = PRICE_ITEMS.find((p) => p.id === 'riversand-clean') || PRICE_ITEMS[4];
  const fillingItem = PRICE_ITEMS.find((p) => p.id === 'filling-grade-1') || PRICE_ITEMS[5];
  const sandItem = PRICE_ITEMS.find((p) => p.id === 'sand-smooth') || PRICE_ITEMS[7];

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#080e21] flex flex-col font-sans">
      {/* 3. HERO BANNER (Dark construction aesthetic with industrial scrim overlay) */}
      <section className="relative bg-[#080e21] text-white overflow-hidden py-16 md:py-24 border-b border-gray-800">
        <div className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity">
          <img
            src={IMAGES.hero}
            alt="Cinematic construction quarry yard with heavy tipper trucks"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Deep industrial scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080e21] via-[#080e21]/90 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            {/* Small badge pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-xs font-bold text-orange-300 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#EB4D23]"></span>
              <span>Company Information</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-4">
              About {COMPANY_DETAILS.name}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              {COMPANY_DETAILS.name} is a leading supplier of certified high-grade building materials,
              dedicated to delivering dependable aggregate, sand, and foundation solutions for
              residential and commercial construction projects across {COMPANY_DETAILS.location}.
            </p>

            {/* Quick Spec Highlights */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-6 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#EB4D23]" />
                <span>LICENSED QUARRY DISTRIBUTOR</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#EB4D23]" />
                <span>DIRECT SITE FLEET DISPATCH</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#EB4D23]" />
                <span>PRECISION 20M³ TRIP STANDARDS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TWO-COLUMN MAIN CONTENT LAYOUT */}
      <main className="flex-grow py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN (approx 65% width: 8 of 12 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* a) Company Profile Card */}
              <article className="bg-white rounded-2xl border border-gray-200/80 p-6 md:p-10 shadow-[0_1px_3px_rgba(8,14,33,0.05),0_4px_12px_rgba(8,14,33,0.04)] relative overflow-hidden">
                {/* Subtle architectural background mark */}
                <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none select-none text-[#080e21]">
                  <Building className="w-56 h-56" />
                </div>

                {/* Header Badge */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#FFF4ED] text-[#EB4D23] flex items-center justify-center border border-[#EB4D23]/20">
                    <Building className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono text-[#EB4D23] uppercase font-bold tracking-wider">
                    Company Profile
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#080e21] mb-6 tracking-tight">
                  Delivering Excellence In Construction Supply Across {COMPANY_DETAILS.location}
                </h2>

                {/* Paragraph Content with Trade Emphasis */}
                <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <p className="border-l-2 border-[#EB4D23] pl-4 italic text-[#080e21] font-medium bg-[#FFF4ED]/50 py-2.5 rounded-r-lg">
                    Led by Owner &amp; Managing Director{' '}
                    <strong className="text-[#080e21] font-bold">{COMPANY_DETAILS.owner}</strong>,{' '}
                    {COMPANY_DETAILS.name} has established itself as an industry-trusted partner
                    for contractors, developers, and commercial builders.
                  </p>
                  <p>
                    We specialize in direct site deliveries of crushed quarry stones, natural
                    riversand, foundation filling sand (Grade 1 and Laterite), and graded smooth,
                    medium, and rough sand engineered to meet rigorous structural specifications.
                  </p>
                  <p>
                    All pricing is transparently structured based on a{' '}
                    <span className="font-mono font-semibold text-[#080e21] bg-gray-100 px-1.5 py-0.5 rounded">
                      [20m³ TIPPER TRUCK TRIP]
                    </span>{' '}
                    standard, guaranteeing exceptional volume value with no hidden costs. Customers
                    are encouraged to contact our dispatch desk via phone or WhatsApp to verify live
                    pricing and schedule prompt deliveries.
                  </p>
                </div>

                {/* Two Info Tiles Side-by-Side */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Tile 1 (Light Neutral) */}
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/70 flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-lg bg-white text-gray-700 flex items-center justify-center shadow-xs">
                      <Globe className="w-5 h-5 text-[#080e21]" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block font-medium">Official Depot</span>
                      <span className="text-sm font-mono font-bold text-[#080e21]">
                        {COMPANY_DETAILS.shortName}.supply
                      </span>
                    </div>
                  </div>

                  {/* Tile 2 (Peach / Warm orange tint #FFF4ED) */}
                  <div className="bg-[#FFF4ED] p-4 rounded-xl border border-[#EB4D23]/30 flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-lg bg-white text-[#EB4D23] flex items-center justify-center shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#EB4D23] block font-bold">Direct Contact</span>
                      <a
                        className="text-base sm:text-lg font-bold text-[#080e21] hover:text-[#EB4D23] transition-colors font-mono"
                        href={`tel:${COMPANY_DETAILS.phone}`}
                      >
                        {COMPANY_DETAILS.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              {/* b) Materials Supplied Card */}
              <article className="bg-white rounded-2xl border border-gray-200/80 p-6 md:p-10 shadow-[0_1px_3px_rgba(8,14,33,0.05),0_4px_12px_rgba(8,14,33,0.04)]">
                <div className="mb-8">
                  <span className="text-xs font-mono text-[#EB4D23] uppercase font-bold tracking-wider block mb-1">
                    Catalog Matrix
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#080e21] tracking-tight">
                    Materials Supplied By {COMPANY_DETAILS.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Certified aggregates and graded sands delivered directly to your job site
                  </p>
                </div>

                {/* Grid of Materials */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {PRICE_ITEMS.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onSelectMaterial(item)}
                      className="border border-gray-200/90 rounded-xl p-5 hover:border-[#EB4D23] transition-all bg-white hover:shadow-md group cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-full h-36 rounded-lg overflow-hidden mb-3 bg-gray-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h3 className="text-base font-bold text-[#080e21] group-hover:text-[#EB4D23] transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                        <span>Unit: Single Trip</span>
                        <span className="font-mono text-[#EB4D23] font-bold">
                          {item.priceDisplay}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onNavigateMaterials}
                    className="bg-[#000000] hover:bg-[#080e21] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Explore Materials -&gt;</span>
                  </button>
                  <button
                    onClick={onNavigatePrices}
                    className="bg-white border border-gray-300 hover:border-gray-500 text-[#080e21] font-bold text-xs sm:text-sm px-6 py-3 rounded-lg transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Check Prices -&gt;</span>
                  </button>
                </div>
              </article>
            </div>

            {/* RIGHT COLUMN (approx 35% width: 4 of 12 cols, sticky desktop dock) */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* a) Image Card ("Construction Site Supply") */}
              <div className="rounded-2xl overflow-hidden relative min-h-[340px] shadow-md border border-gray-200 group flex flex-col justify-end p-6 bg-[#080e21]">
                <img
                  src={IMAGES.hero}
                  alt="Construction Site Supply"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient readability scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080e21] via-[#080e21]/60 to-transparent"></div>
                <div className="relative z-10">
                  <span className="inline-block bg-[#EB4D23] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 shadow-xs">
                    Construction Site Supply
                  </span>
                  <h3 className="text-xl font-extrabold font-display text-white mb-2 leading-tight">
                    Supplying Building Materials
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-snug">
                    Direct tipper truck deliveries to active building projects across{' '}
                    {COMPANY_DETAILS.location}.
                  </p>
                </div>
              </div>

              {/* b) Minor Color Rounded Card ("Contact For Orders & Delivery") */}
              <div className="bg-[#080e21] rounded-2xl p-7 text-white shadow-xl border border-gray-800 relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-lg bg-white/10 text-[#EB4D23] flex items-center justify-center">
                    <Headphones className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      Contact For Orders &amp; Delivery
                    </h3>
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                      Fast-Track Dispatch
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                  Speak directly with <strong className="text-white">{COMPANY_DETAILS.owner}</strong> or
                  our 24/7 dispatch coordination team to place urgent orders, confirm site access,
                  and schedule tipper truck dispatches.
                </p>

                <div className="space-y-3">
                  {/* Quick Call Button */}
                  <a
                    className="bg-[#EB4D23] hover:bg-[#D03B13] text-white font-bold text-sm w-full py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
                    href={`tel:${COMPANY_DETAILS.phone}`}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call: {COMPANY_DETAILS.phone}</span>
                  </a>

                  {/* WhatsApp Direct Connect Button */}
                  <a
                    className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm w-full py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
                    href="https://wa.me/233244520024"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                {/* Small Badge Note */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Available 24/7 for urgent site deliveries.</span>
                </div>
              </div>

              {/* Trade Assurance Box */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
                <h4 className="text-xs font-mono uppercase text-[#080e21] font-bold mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#EB4D23]" />
                  <span>Trade Contractor Guarantees</span>
                </h4>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Certified net weight measurement per 20m³ Trip</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>All-weather tipper fleet access across nationwide routes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Official tax invoice &amp; material test sheets</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};
