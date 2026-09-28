import React, { useState } from 'react';
import {
  Phone,
  ArrowRight,
  User,
  MessageSquare,
  Lock,
  UserCheck,
  Truck,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { COMPANY_DETAILS, IMAGES, PRICE_ITEMS } from '../data/materialsData';
import { QuoteRequest } from '../types';

interface HeroSectionProps {
  onQuoteSubmit?: (quote: QuoteRequest) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onQuoteSubmit }) => {
  const [name, setName] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('quarry-stones');
  const [tripsCount, setTripsCount] = useState(2);
  const [siteLocation, setSiteLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentItem = PRICE_ITEMS.find((p) => p.id === selectedMaterial) || PRICE_ITEMS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    setIsSubmitting(true);
    const message =
      `Hello ${COMPANY_DETAILS.name},\n` +
      `I would like to enquire about building materials supply:\n\n` +
      `*Customer Name:* ${name}\n` +
      `*Material:* ${currentItem.name} (${currentItem.priceDisplay})\n` +
      `*Quantity / Trips:* ${tripsCount} ${tripsCount === 1 ? 'Trip' : 'Trips'}\n` +
      `*Site Location / Requirements:* ${siteLocation || 'Mallam Junction & Greater Accra'}\n\n` +
      `Please confirm availability and dispatch schedule. Thank you!`;

    const whatsappUrl = `https://wa.me/233244520024?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, '_blank');
      if (onQuoteSubmit) {
        onQuoteSubmit({
          fullName: name,
          email: COMPANY_DETAILS.email,
          phone: COMPANY_DETAILS.phone,
          materialId: selectedMaterial,
          quantity: tripsCount,
          unit: 'trip',
          location: siteLocation || 'Accra Site',
        });
      }
    }, 200);
  };

  return (
    <section className="relative bg-[#080e21] text-white overflow-hidden hero-glow pt-12 pb-20 lg:py-24">
      {/* Background Image Overlay with Scrim */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
        <img
          src={IMAGES.hero}
          alt="Construction aggregate quarry and trucks"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small pill label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EB4D23]/15 border border-[#EB4D23]/30 text-[#EB4D23] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#EB4D23] animate-pulse"></span>
              Building Materials &amp; Supply
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight">
              Expert Material &amp; <br className="hidden sm:inline" />
              <span className="text-white">Reliable Solutions</span>
            </h1>

            {/* Intro copy */}
            <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
              {COMPANY_DETAILS.name} is a dedicated supply partner delivering premium quarry stones,
              riversand, boulders, and graded filling sand for commercial and residential builders across{' '}
              <span className="text-white font-medium">Accra, Tema, and nationwide</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={`https://wa.me/233244520024?text=${encodeURIComponent(
                  `Hello ${COMPANY_DETAILS.name}, I would like to enquire about building materials supply for my site.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>

              <div className="inline-flex items-center justify-center sm:justify-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 rounded-full text-white transition">
                <div className="w-9 h-9 rounded-full bg-[#EB4D23]/20 flex items-center justify-center text-[#EB4D23] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
                    Call Now
                  </span>
                  <div className="flex items-center gap-2 font-black text-sm sm:text-base md:text-lg tracking-wide font-mono tabular-nums">
                    <a
                      href={`tel:${COMPANY_DETAILS.phone}`}
                      className="hover:text-[#EB4D23] transition underline-offset-2 hover:underline"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                    <span className="text-gray-500 font-normal">/</span>
                    <a
                      href={`tel:${COMPANY_DETAILS.secondaryPhone}`}
                      className="hover:text-[#EB4D23] transition underline-offset-2 hover:underline"
                    >
                      {COMPANY_DETAILS.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Enquiry Card with floating badges */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Floating Badge Top Left */}
            <div className="absolute -top-7 -left-3 sm:-top-8 sm:-left-6 z-20 bg-white/95 backdrop-blur-md text-gray-900 px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFF2EE] text-[#EB4D23] flex items-center justify-center font-bold">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-lg font-black leading-none tabular-nums font-mono text-[#080e21]">
                  {COMPANY_DETAILS.happyClientsCount}
                </p>
                <p className="text-[11px] text-gray-500 font-semibold">Happy Clients</p>
              </div>
            </div>

            {/* Floating Badge Top Right */}
            <div className="absolute -top-7 right-2 sm:-top-8 sm:right-0 z-20 bg-white/95 backdrop-blur-md text-gray-900 px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#EB4D23] text-white flex items-center justify-center font-bold">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-lg font-black leading-none tabular-nums font-mono text-[#080e21]">
                  {COMPANY_DETAILS.truckFleetCount}
                </p>
                <p className="text-[11px] text-gray-500 font-semibold">Truck Fleet</p>
              </div>
            </div>

            {/* WhatsApp Material Enquiry White Form Card */}
            <div
              className="bg-white rounded-3xl p-6 sm:p-8 text-gray-900 shadow-2xl relative z-10 border border-gray-100 pt-10 sm:pt-10"
              id="quote-form"
            >
              <div className="mb-5">
                <div className="inline-flex items-center gap-1.5 text-[#25D366] text-xs font-extrabold uppercase tracking-wider mb-1">
                  <MessageSquare className="w-3.5 h-3.5 fill-[#25D366]" />
                  <span>WhatsApp Material Enquiry</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black font-display text-[#080e21] tracking-tight">
                  Quick Supply Enquiry
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Submit to chat directly on WhatsApp for rates &amp; dispatch ETA.
                </p>
              </div>

              <form className="space-y-3.5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                    Your Name <span className="text-[#EB4D23]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EB4D23] focus:bg-white transition"
                      placeholder="e.g. Samuel Mensah"
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                      Material
                    </label>
                    <select
                      value={selectedMaterial}
                      onChange={(e) => setSelectedMaterial(e.target.value)}
                      className="w-full py-2.5 px-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#EB4D23] cursor-pointer"
                    >
                      {PRICE_ITEMS.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                      Trips / Quantity
                    </label>
                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setTripsCount(Math.max(1, tripsCount - 1))}
                        className="px-3 py-2 hover:bg-gray-200 text-sm font-bold text-gray-600 transition cursor-pointer"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center text-xs font-bold tabular-nums">
                        {tripsCount} {tripsCount === 1 ? 'Trip' : 'Trips'}
                      </span>
                      <button
                        type="button"
                        onClick={() => setTripsCount(tripsCount + 1)}
                        className="px-3 py-2 hover:bg-gray-200 text-sm font-bold text-gray-600 transition cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                    Site Location &amp; Requirements
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <input
                      value={siteLocation}
                      onChange={(e) => setSiteLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EB4D23] focus:bg-white transition"
                      placeholder="e.g. Mallam Junction / East Legon site"
                      type="text"
                    />
                  </div>
                </div>

                {/* Estimate Preview */}
                <div className="bg-[#FFF7F5] border border-[#EB4D23]/20 rounded-xl p-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Sparkles className="w-3.5 h-3.5 text-[#EB4D23]" />
                    <span className="text-[11px]">Est. Rate per Trip:</span>
                  </div>
                  <span className="font-black text-[#EB4D23] font-mono">
                    {currentItem.prices.trip}
                  </span>
                </div>

                <div className="pt-1">
                  <button
                    disabled={isSubmitting}
                    className="w-full bg-[#25D366] hover:bg-emerald-600 active:scale-[0.99] text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-75"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Opening WhatsApp...
                      </span>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4 fill-white" />
                        <span>Send WhatsApp Message</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-2 text-center text-xs sm:text-sm text-gray-600 flex items-center justify-center gap-2 flex-wrap border-t border-gray-100 mt-2">
                  <Phone className="w-3.5 h-3.5 text-[#EB4D23]" />
                  <span className="font-medium">Direct Call:</span>
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="font-black text-gray-900 hover:text-[#EB4D23] transition font-mono text-sm sm:text-base tracking-wide"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                  <span className="text-gray-400 font-bold">/</span>
                  <a
                    href={`tel:${COMPANY_DETAILS.secondaryPhone}`}
                    className="font-black text-gray-900 hover:text-[#EB4D23] transition font-mono text-sm sm:text-base tracking-wide"
                  >
                    {COMPANY_DETAILS.secondaryPhone}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
