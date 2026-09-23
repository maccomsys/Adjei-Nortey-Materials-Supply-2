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
  const [materialNeeded, setMaterialNeeded] = useState('General Materials Supply Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const unitDisplay = {
    trip: '20m³ Tipper Truck Trip',
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
      materialId: 'quarry-3-4',
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

  const getFormWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello ${COMPANY_DETAILS.name},\n\nI would like to make a Direct Supply Enquiry:\n- Phone: ${phone || 'Not specified'}\n- Email: ${email || 'Not specified'}\n- Material: ${materialNeeded}\n- Notes: ${message || 'Please provide quotation and delivery availability.'}`
    );
    return `https://wa.me/233244520024?text=${text}`;
  };

  const quarryItems = PRICE_ITEMS.filter((i) => i.category === 'quarry');
  const riversandItems = PRICE_ITEMS.filter((i) => i.category === 'riversand');
  const fillingItems = PRICE_ITEMS.filter((i) => i.category === 'filling');
  const sandItems = PRICE_ITEMS.filter((i) => i.category === 'sand');

  return (
    <div className="bg-[#F8F9FA] text-[#2D3139] font-sans antialiased selection:bg-[#EB4D23] selection:text-white min-h-screen flex flex-col">
      {/* 1. Hero Section */}
      <section
        className="text-white pt-20 pb-28 px-4 text-center relative overflow-hidden bg-[#080e21]"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(235, 77, 35, 0.22) 0%, transparent 70%), linear-gradient(rgba(8, 14, 33, 0.92), rgba(8, 14, 33, 0.98))',
        }}
        data-purpose="hero-banner"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          {/* Transparent Pricing Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[#EB4D23] font-bold text-xs uppercase tracking-wider mb-6 border border-white/10">
            <Box className="w-3.5 h-3.5 text-[#EB4D23]" />
            <span>TRANSPARENT PRICING</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-6">
            Building Material Supply Prices
          </h1>

          {/* Subtitle Description */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal">
            All prices are based on a{' '}
            <span className="text-white font-semibold">[{unitDisplay}]</span>.{' '}
            <span className="text-white font-semibold">{COMPANY_DETAILS.name}</span> maintains clear,
            honest pricing.
          </p>

          {/* Unit Toggle Tabs */}
          <div className="mt-6 inline-flex items-center p-1 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-xs">
            <button
              onClick={() => setActiveUnit('trip')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                activeUnit === 'trip'
                  ? 'bg-[#EB4D23] text-white shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Tipper Truck Trip (20m³)
            </button>
            <button
              onClick={() => setActiveUnit('tonne')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                activeUnit === 'tonne'
                  ? 'bg-[#EB4D23] text-white shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Per Tonne
            </button>
            <button
              onClick={() => setActiveUnit('m3')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                activeUnit === 'm3'
                  ? 'bg-[#EB4D23] text-white shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Per m³
            </button>
          </div>
        </div>
      </section>

      {/* 2. Pricing Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 -mt-10 relative z-20 pb-20 space-y-8 flex-grow">
        {/* 1. Official Price Schedule Card */}
        <div
          className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-gray-200/80 text-left"
          data-purpose="price-schedule-card"
        >
          <span className="block text-[#EB4D23] font-bold text-xs uppercase tracking-wider mb-1.5 font-mono">
            OFFICIAL PRICE SCHEDULE
          </span>
          <p className="text-gray-600 text-sm sm:text-[15px] font-normal">
            orders or current delivery confirmation, please call or whatsapp us.
          </p>
        </div>

        {/* 2. Standard Supply Unit Banner */}
        <div
          className="bg-[#080e21] text-white rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-lg border border-gray-800"
          data-purpose="standard-unit-banner"
        >
          <div className="flex items-center gap-4">
            {/* Truck Icon Box */}
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 text-[#EB4D23] text-xl">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-[#EB4D23] uppercase text-xs font-bold tracking-wider font-mono">
                STANDARD SUPPLY UNIT
              </span>
              <h2 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight mt-0.5">
                Prices are based on an [{unitDisplay}]
              </h2>
            </div>
          </div>

          {/* Phone Call Button */}
          <a
            className="inline-flex items-center gap-2 bg-[#EB4D23] hover:bg-[#D03B13] text-white text-sm font-bold px-6 py-3 rounded-full transition-all shrink-0 shadow-md shadow-[#EB4D23]/30 font-mono"
            href={`tel:${COMPANY_DETAILS.phone}`}
          >
            <Phone className="w-4 h-4" />
            <span>Call: {COMPANY_DETAILS.phone}</span>
          </a>
        </div>

        {/* 3. Price Grid (2x2 Grid) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
          data-purpose="materials-pricing-grid"
        >
          {/* Card 1: Quarry Stones */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-gray-200/80 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EB4D23] inline-block"></span>
                  <h3 className="font-bold text-lg text-gray-900 tracking-tight font-display">
                    Quarry Stones
                  </h3>
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 font-mono">
                  [{unitBadge}]
                </span>
              </div>

              {/* Items List */}
              <div className="divide-y divide-gray-100 space-y-4">
                {quarryItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between ${idx !== 0 ? 'pt-4' : ''}`}
                  >
                    <div>
                      <p className="font-bold text-gray-800 text-[15px]">{item.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5 font-normal">
                        Per [{unitBadge}]
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-gray-900 text-base sm:text-lg tracking-tight font-mono">
                        {item.prices[activeUnit]}
                      </span>
                      <a
                        className="w-8 h-8 rounded-full border border-green-200 bg-green-50 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-sm cursor-pointer shadow-xs"
                        href={getWhatsAppLink(item.name, item.prices[activeUnit])}
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Riversand */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-gray-200/80 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EB4D23] inline-block"></span>
                  <h3 className="font-bold text-lg text-gray-900 tracking-tight font-display">
                    Riversand
                  </h3>
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 font-mono">
                  [{unitBadge}]
                </span>
              </div>

              {/* Items List */}
              <div className="divide-y divide-gray-100 space-y-4">
                {riversandItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between ${idx !== 0 ? 'pt-4' : ''}`}
                  >
                    <div>
                      <p className="font-bold text-gray-800 text-[15px]">{item.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5 font-normal">
                        Per [{unitBadge}]
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-gray-900 text-base sm:text-lg tracking-tight font-mono">
                        {item.prices[activeUnit]}
                      </span>
                      <a
                        className="w-8 h-8 rounded-full border border-green-200 bg-green-50 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-sm cursor-pointer shadow-xs"
                        href={getWhatsAppLink(item.name, item.prices[activeUnit])}
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Filling Sand */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-gray-200/80 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EB4D23] inline-block"></span>
                  <h3 className="font-bold text-lg text-gray-900 tracking-tight font-display">
                    Filling Sand
                  </h3>
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 font-mono">
                  [{unitBadge}]
                </span>
              </div>

              {/* Items List */}
              <div className="divide-y divide-gray-100 space-y-4">
                {fillingItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between ${idx !== 0 ? 'pt-4' : ''}`}
                  >
                    <div>
                      <p className="font-bold text-gray-800 text-[15px]">{item.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5 font-normal">
                        Per [{unitBadge}]
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-gray-900 text-base sm:text-lg tracking-tight font-mono">
                        {item.prices[activeUnit]}
                      </span>
                      <a
                        className="w-8 h-8 rounded-full border border-green-200 bg-green-50 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-sm cursor-pointer shadow-xs"
                        href={getWhatsAppLink(item.name, item.prices[activeUnit])}
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Sand */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-gray-200/80 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EB4D23] inline-block"></span>
                  <h3 className="font-bold text-lg text-gray-900 tracking-tight font-display">
                    Sand
                  </h3>
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 font-mono">
                  [{unitBadge}]
                </span>
              </div>

              {/* Items List */}
              <div className="divide-y divide-gray-100 space-y-4">
                {sandItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between ${idx !== 0 ? 'pt-4' : ''}`}
                  >
                    <div>
                      <p className="font-bold text-gray-800 text-[15px]">{item.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5 font-normal">
                        Per [{unitBadge}]
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-gray-900 text-base sm:text-lg tracking-tight font-mono">
                        {item.prices[activeUnit]}
                      </span>
                      <a
                        className="w-8 h-8 rounded-full border border-green-200 bg-green-50 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-sm cursor-pointer shadow-xs"
                        href={getWhatsAppLink(item.name, item.prices[activeUnit])}
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Peach Price Confirmation Notice Bar */}
        <div
          className="bg-[#FEF4ED] border border-[#FBD8C5] rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-xs"
          data-purpose="confirmation-notice-bar"
        >
          <div className="w-7 h-7 rounded-full bg-[#EB4D23]/10 flex items-center justify-center shrink-0 text-[#EB4D23] mt-0.5">
            <AlertCircle className="w-4 h-4 stroke-[2.5]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-normal">
            <strong className="font-bold text-gray-900">Price Confirmation Notice:</strong>{' '}
            Customers are encouraged to contact{' '}
            <span className="font-semibold text-gray-900">{COMPANY_DETAILS.name}</span> on{' '}
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="font-bold text-[#EB4D23] hover:underline font-mono"
            >
              {COMPANY_DETAILS.phone}
            </a>{' '}
            or via WhatsApp on{' '}
            <a
              href="https://wa.me/233244520024"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#25D366] hover:underline font-mono"
            >
              {COMPANY_DETAILS.phone}
            </a>{' '}
            to confirm current pricing and delivery schedules before placing an order.
          </p>
        </div>

        {/* 5. Two-Column Enquiry & Quick Action Area */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-start"
          data-purpose="enquiry-order-section"
        >
          {/* Left Column: Direct Supply Enquiry Form (7 Cols) */}
          <div
            className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-gray-200/80"
            id="enquiry-form"
          >
            <span className="block text-[#EB4D23] uppercase text-xs font-bold tracking-wider mb-2 font-mono">
              DIRECT SUPPLY ENQUIRY
            </span>
            <h3 className="text-2xl font-extrabold text-[#080e21] tracking-tight mb-2 font-display">
              Send An Enquiry To {COMPANY_DETAILS.name}
            </h3>
            <p className="text-gray-500 text-sm mb-6 font-normal">
              Complete the form below to enquire about building material availability and orders.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-gray-900 text-base">Enquiry Dispatched!</h4>
                <p className="text-xs text-gray-600">
                  Thank you! Our haulage coordinator will call you back within 15 minutes.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmitEnquiry}>
                {/* Row 1: Phone and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="phone">
                      Phone Number <span className="text-[#EB4D23]">*</span>
                    </label>
                    <input
                      className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#EB4D23] focus:border-[#EB4D23] focus:bg-white outline-none transition-all"
                      id="phone"
                      name="phone"
                      placeholder="e.g. 0244520024"
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#EB4D23] focus:border-[#EB4D23] focus:bg-white outline-none transition-all"
                      id="email"
                      name="email"
                      placeholder="e.g. name@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Row 2: Material Needed */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="material">
                    Material Needed <span className="text-[#EB4D23]">*</span>
                  </label>
                  <input
                    className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#EB4D23] focus:border-[#EB4D23] focus:bg-white outline-none transition-all"
                    id="material"
                    name="material"
                    required
                    type="text"
                    value={materialNeeded}
                    onChange={(e) => setMaterialNeeded(e.target.value)}
                  />
                </div>

                {/* Row 3: Message / Details */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="message">
                    Message / Details <span className="text-[#EB4D23]">*</span>
                  </label>
                  <textarea
                    className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#EB4D23] focus:border-[#EB4D23] focus:bg-white outline-none transition-all resize-none"
                    id="message"
                    name="message"
                    placeholder="State quantity, location or project specifications..."
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                {/* Form Buttons */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#080e21] hover:bg-black text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm cursor-pointer"
                    type="submit"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <a
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#EB4D23] hover:bg-[#D03B13] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm shadow-[#EB4D23]/20"
                    href={getFormWhatsAppLink()}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Quick Action Box & Unit Basis Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Orders Dark Card */}
            <div
              className="bg-[#080e21] rounded-2xl p-6 sm:p-7 text-white shadow-md border border-gray-800"
              data-purpose="quick-orders-card"
            >
              <span className="block text-[#EB4D23] uppercase text-xs font-bold tracking-wider mb-2 font-mono">
                QUICK ORDERS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white mb-6">
                Confirm Pricing &amp; Order Today
              </h3>
              <div className="space-y-3">
                <a
                  className="w-full flex items-center justify-center gap-2.5 bg-[#EB4D23] hover:bg-[#D03B13] text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all shadow-md font-mono"
                  href={`tel:${COMPANY_DETAILS.phone}`}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {COMPANY_DETAILS.phone}</span>
                </a>
                <a
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all shadow-md font-mono"
                  href="https://wa.me/233244520024"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: {COMPANY_DETAILS.phone}</span>
                </a>
              </div>
            </div>

            {/* Unit Basis Information White Card */}
            <div
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-gray-200/80"
              data-purpose="unit-info-card"
            >
              <h4 className="font-bold text-gray-900 text-base mb-2 tracking-tight font-display">
                Unit Basis Information
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                All prices on this page are stated per{' '}
                <strong className="text-gray-900 font-semibold">[{unitDisplay}]</strong>. No speculative
                taxes or hidden add-ons have been included. Please contact us to confirm your
                delivery destination and logistics.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
