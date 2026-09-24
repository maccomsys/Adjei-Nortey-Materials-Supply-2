import React, { useState } from 'react';
import {
  Truck,
  Phone,
  MessageSquare,
  AlertCircle,
  Send,
  CheckCircle2,
  Box,
  Layers,
  Sparkles,
} from 'lucide-react';
import { COMPANY_DETAILS, PRICE_ITEMS } from '../data/materialsData';
import { PriceItem, SupplyUnit, QuoteRequest } from '../types';

interface PricesPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateServices: () => void;
  onNavigateMaterials: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
  onSelectMaterial: (item: PriceItem) => void;
  onQuoteSubmit: (quote: QuoteRequest) => void;
}

export const PricesPageScreen: React.FC<PricesPageScreenProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateServices,
  onNavigateMaterials,
  onNavigateGallery,
  onNavigateContact,
  onSelectMaterial,
  onQuoteSubmit,
}) => {
  const [activeUnit, setActiveUnit] = useState<SupplyUnit>('trip');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [materialNeeded, setMaterialNeeded] = useState('Quarry Stones / Chippings');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const unitDisplay = {
    trip: 'Tipper Truck Trip',
    tonne: 'Metric Tonne',
    m3: 'Cubic Metre (m³)',
  }[activeUnit];

  const unitBadge = {
    trip: 'TRUCK TRIP',
    tonne: 'PER TONNE',
    m3: 'PER M³',
  }[activeUnit];

  const getWhatsAppLink = (itemName: string, price: string) => {
    const text = encodeURIComponent(
      `Hello ${COMPANY_DETAILS.name}, I am inquiring about ${itemName} (${price} per ${unitBadge}). My site location is: `
    );
    return `https://wa.me/233244520024?text=${text}`;
  };

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    onQuoteSubmit({
      fullName: 'Prospective Builder / Site Client',
      email: email || COMPANY_DETAILS.email,
      phone: phone,
      materialId: 'quarry-stones',
      quantity: 1,
      unit: activeUnit,
      location: 'Accra / Tema Corridor',
      additionalNotes: `Material Needed: ${materialNeeded}\nDetails: ${message}`,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setPhone('');
      setEmail('');
      setMessage('');
    }, 4000);
  };

  return (
    <div className="bg-[#F8F9FA] text-[#2D3139] font-sans antialiased selection:bg-[#EB4D23] selection:text-white min-h-screen flex flex-col">
      {/* 1. Header Banner */}
      <section className="relative bg-[#080e21] text-white py-16 md:py-24 border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#080e21] via-[#080e21]/90 to-transparent z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#EB4D23]"></span>
              <span>Rate Card &middot; Certified Building Materials</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
              Material Price List
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Transparent rate card for building materials supplied by {COMPANY_DETAILS.name} across {COMPANY_DETAILS.location}.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30 pb-20 flex-1">
        {/* Unit Selector Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200/80 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#EB4D23]" />
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              Display Pricing Unit:
            </span>
          </div>

          <div className="inline-flex items-center p-1 bg-gray-100 rounded-xl border border-gray-200">
            <button
              onClick={() => setActiveUnit('trip')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                activeUnit === 'trip'
                  ? 'bg-[#EB4D23] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Tipper Trip
            </button>
            <button
              onClick={() => setActiveUnit('tonne')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                activeUnit === 'tonne'
                  ? 'bg-[#EB4D23] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Per Tonne
            </button>
            <button
              onClick={() => setActiveUnit('m3')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                activeUnit === 'm3'
                  ? 'bg-[#EB4D23] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Per m³
            </button>
          </div>
        </div>

        {/* 6 Price Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PRICE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:border-[#EB4D23]/40 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 w-full rounded-xl overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#EB4D23] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded uppercase">
                    {unitBadge}
                  </span>
                </div>

                <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block font-bold uppercase">Rate</span>
                  <span className="font-extrabold text-lg text-[#EB4D23] font-mono tabular-nums">
                    {item.prices[activeUnit]}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={getWhatsAppLink(item.name, item.prices[activeUnit] || item.priceDisplay)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-green-50 text-green-600 hover:bg-green-100 transition text-xs font-bold"
                    title="Inquire on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => onSelectMaterial(item)}
                    className="px-4 py-2 rounded-xl bg-[#EB4D23] hover:bg-[#D03B13] text-white text-xs font-bold transition shadow-sm cursor-pointer"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Dispatch Order / Call Form */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EB4D23]">
                Direct Dispatch Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-display">
                Need a Custom Supply Quotation?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Contact our dispatch coordinators directly for multi-trip logistics, combined orders, or precise delivery schedules in {COMPANY_DETAILS.location}.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#EB4D23] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-[#d63f17] transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
                <a
                  href="https://wa.me/233244520024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-green-700 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Material Dispatch Inquiry</h3>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-xs font-semibold">
                    Thank you! Your dispatch inquiry has been received. Our team will contact you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitEnquiry} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0244520024"
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EB4D23]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Material Needed
                    </label>
                    <select
                      value={materialNeeded}
                      onChange={(e) => setMaterialNeeded(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EB4D23]"
                    >
                      {PRICE_ITEMS.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name} — {item.priceDisplay}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Delivery Location &amp; Notes
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. 3 trips to site at Mallam Junction"
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EB4D23]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#EB4D23] hover:bg-[#d63f17] text-white font-bold py-3 px-6 rounded-xl text-sm shadow-md transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Dispatch Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
