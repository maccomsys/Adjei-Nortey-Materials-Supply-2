import React, { useState } from 'react';
import {
  Phone,
  ArrowRight,
  User,
  Mail,
  Lock,
  Star,
  UserCheck,
  Truck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { COMPANY_DETAILS, IMAGES, PRICE_ITEMS } from '../data/materialsData';
import { QuoteRequest } from '../types';

interface HeroSectionProps {
  onQuoteSubmit: (quote: QuoteRequest) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onQuoteSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('quarry-stones');
  const [tripsCount, setTripsCount] = useState(2);
  const [siteLocation, setSiteLocation] = useState('Mallam Junction / Greater Accra');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentItem = PRICE_ITEMS.find((p) => p.id === selectedMaterial) || PRICE_ITEMS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onQuoteSubmit({
        fullName: name,
        email: email || COMPANY_DETAILS.email,
        phone: phone,
        materialId: selectedMaterial,
        quantity: tripsCount,
        unit: 'trip',
        location: siteLocation,
      });
    }, 400);
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
              Best Construction Materials
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight">
              Expert Material &amp; <br className="hidden sm:inline" />
              <span className="text-white">Reliable Solutions</span>
            </h1>

            {/* Intro copy */}
            <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
              {COMPANY_DETAILS.name} is a dedicated supply partner delivering premium quarry stones,
              riversand, and graded filling sand for commercial and residential builders across{' '}
              <span className="text-white font-medium">Accra, Tema, and nationwide</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#EB4D23] hover:bg-[#D03B13] text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-[#EB4D23]/30 transition-all hover:scale-[1.02]"
              >
                <span>Contact Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="inline-flex items-center justify-center sm:justify-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-white transition"
              >
                <div className="w-9 h-9 rounded-full bg-[#EB4D23]/20 flex items-center justify-center text-[#EB4D23]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
                    Call Now
                  </span>
                  <span className="font-bold text-sm tracking-wide font-mono tabular-nums">
                    {COMPANY_DETAILS.phone}
                  </span>
                </div>
              </a>
            </div>

            {/* Avatar Proof Stats */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#080e21] bg-gradient-to-tr from-amber-600 to-amber-400 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  CK
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#080e21] bg-gradient-to-tr from-blue-700 to-cyan-500 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  DA
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#080e21] bg-gradient-to-tr from-emerald-700 to-teal-500 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  EN
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#080e21] bg-[#EB4D23] text-white flex items-center justify-center font-bold text-xs shadow-md">
                  +
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 text-xs mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-300 font-semibold uppercase tracking-wider">
                  <span className="text-white font-bold text-sm tabular-nums">
                    {COMPANY_DETAILS.satisfiedPartners}
                  </span>{' '}
                  Satisfied Partners
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Quote Card with floating badges */}
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

            {/* Request a Quote White Form Card */}
            <div
              className="bg-white rounded-3xl p-6 sm:p-8 text-gray-900 shadow-2xl relative z-10 border border-gray-100 pt-10 sm:pt-10"
              id="quote-form"
            >
              <div className="mb-5">
                <h2 className="text-xl sm:text-2xl font-black font-display text-[#080e21] tracking-tight">
                  Request A Quote
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Get immediate pricing on delivery to your job site.
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
                      placeholder="e.g. John Doe"
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                    Your Email
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EB4D23] focus:bg-white transition"
                      placeholder="e.g. adjeinortey999@gmail.com"
                      type="email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                    Phone Number <span className="text-[#EB4D23]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EB4D23] focus:bg-white transition"
                      placeholder="0244520024"
                      type="tel"
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
                      className="w-full py-2 px-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#EB4D23]"
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
                        className="px-3 py-1.5 hover:bg-gray-200 text-sm font-bold text-gray-600 transition cursor-pointer"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center text-xs font-bold tabular-nums">
                        {tripsCount} {tripsCount === 1 ? 'Trip' : 'Trips'}
                      </span>
                      <button
                        type="button"
                        onClick={() => setTripsCount(tripsCount + 1)}
                        className="px-3 py-1.5 hover:bg-gray-200 text-sm font-bold text-gray-600 transition cursor-pointer"
                      >
                        +
                      </button>
                    </div>
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
                    className="w-full bg-[#EB4D23] hover:bg-[#D03B13] active:scale-[0.99] text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-[#EB4D23]/30 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-75"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Processing Quote...
                      </span>
                    ) : (
                      <>
                        <span>Submit Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-center text-gray-400 mt-1">
                  <Lock className="w-3 h-3 inline mr-1 text-gray-400" />
                  No spam. Instant quote dispatched within 15 mins.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
