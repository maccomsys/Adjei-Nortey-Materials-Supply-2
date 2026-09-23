import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Truck,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Send,
  Info,
  ChevronDown,
} from 'lucide-react';
import { COMPANY_DETAILS, IMAGES, PRICE_ITEMS } from '../data/materialsData';
import { QuoteRequest } from '../types';

interface QuarryStonesPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateMaterials: () => void;
  onNavigateServices: () => void;
  onNavigatePrices: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
  onSelectOtherMaterial?: (category: 'riversand' | 'filling' | 'sand') => void;
  onQuoteSubmit?: (quote: QuoteRequest) => void;
}

export const QuarryStonesPageScreen: React.FC<QuarryStonesPageScreenProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateMaterials,
  onNavigateServices,
  onNavigatePrices,
  onNavigateGallery,
  onNavigateContact,
  onSelectOtherMaterial,
  onQuoteSubmit,
}) => {
  const [selectedSize, setSelectedSize] = useState('Quarry Stones (3/4")');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Quarry items from database
  const quarryItems = PRICE_ITEMS.filter((item) => item.category === 'quarry');
  const itemThreeQuarter = quarryItems.find((i) => i.id === 'quarry-3-4') || { prices: { trip: 'GH₵ 2,850' } };
  const itemOneInch = quarryItems.find((i) => i.id === 'quarry-1-inch') || { prices: { trip: 'GH₵ 2,750' } };
  const itemThreeEighth = quarryItems.find((i) => i.id === 'quarry-3-8') || { prices: { trip: 'GH₵ 2,950' } };
  const itemFiveEighth = quarryItems.find((i) => i.id === 'quarry-5-8') || { prices: { trip: 'GH₵ 2,800' } };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    if (onQuoteSubmit) {
      onQuoteSubmit({
        fullName,
        email: email || COMPANY_DETAILS.email,
        phone,
        materialId: 'quarry-stones',
        quantity: 1,
        unit: 'trip',
        location: 'Accra/Ghana Site',
        additionalNotes: `Selected Material: ${selectedSize}\nNotes: ${message}`,
      });
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFullName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 4000);
  };

  const handleQuickEnquireSize = (sizeName: string) => {
    setSelectedSize(sizeName);
    const formElem = document.getElementById('enquiry-form');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello ${COMPANY_DETAILS.name},\n` +
      `I would like to order Quarry Stones (${selectedSize}).\n` +
      `Name: ${fullName || 'Site Contractor'}\n` +
      `Phone: ${phone || 'Available on call'}\n` +
      `Notes: ${message || 'Please confirm price per single trip (16m³) and dispatch timing.'}`
    );
    return `https://wa.me/233244520024?text=${text}`;
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans antialiased selection:bg-[#EB4D23] selection:text-white">
      {/* 1. Hero Section */}
      <section
        className="relative bg-[#0B0C0E] py-20 lg:py-24 text-white overflow-hidden"
        data-purpose="page-hero"
      >
        {/* Dark Textured Overlay Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-6 font-semibold">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={onNavigateMaterials}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Building Materials
            </button>
            <span>/</span>
            <span className="text-[#EB4D23] font-bold">QUARRY STONES</span>
          </div>

          {/* Main Headline & Subtitle */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 font-display">
            Quarry Stones
          </h1>
          <p className="max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed font-normal">
            {COMPANY_DETAILS.name} supplies crushed quarry stones in multiple graded sizes based on a{' '}
            <span className="text-white font-semibold">Single Trip (16m³ Tipper Truck Load)</span>.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* LEFT COLUMN: Product Details & Form (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* SECTION: Two Product Showcase Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-purpose="product-gallery-preview">
              {/* Image 1: Granular Stones Pile */}
              <div className="rounded-2xl overflow-hidden shadow-sm bg-neutral-200 aspect-[4/3] group relative">
                <img
                  alt="Crushed Quarry Stones in bulk yard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN58Gh-LAge3W0UNZegp8I9greSSDtUzIAtMlQAsrys29DF7-Equ9reEKopqN5WsRQZEb824Fdi4VmAft8FNNr6VLFTE-SI2Elz24Bz32KKLlVF6qYyoh4TI8XjZNK69bL47ithrV5ihyVzpqyhj7XnhQM84__HyLxexBIgY1yDaSr6lIqVRIiQZqLufgjbOjXSMJMJrmfN4fBoclyymOUVkGe8L5zl_H61sOgRP6dxTPX7Qawv_E0"
                  onError={(e) => {
                    // Fallback to local image asset
                    e.currentTarget.src = IMAGES.quarryStones;
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider bg-black/40 backdrop-blur-md px-2.5 py-1 rounded">
                    Graded Aggregate Pile
                  </span>
                </div>
              </div>

              {/* Image 2: Direct Dispatch Yard Truck */}
              <div className="rounded-2xl overflow-hidden shadow-sm bg-neutral-200 aspect-[4/3] group relative">
                <img
                  alt="Construction stone aggregate site delivery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxcpNWhoU9Hcq7pFvMPb8DoiAwRY21Spcf66lwIlWn6v5dzcfYkN_SqwIZ_US9gSu_udhaCh80Oz2MqXxZP_EfOQW1XI0cgRwXGKa_ypo20oPCkYhhrLfsINz1iVW-xPBecIDdF-7sEVYsIMaAmlgefKZ4mOCUb7cYw2I5dzYGGKiR_v7SkGcdmMsOByQCEc4AfTkaqLUEn5T3qTOVNKw0zxtTOXTVFazK44rXbbXCvggDdj5vV6q6"
                  onError={(e) => {
                    // Fallback to local image asset
                    e.currentTarget.src = IMAGES.hero;
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider bg-black/40 backdrop-blur-md px-2.5 py-1 rounded">
                    Direct Dispatch Yard
                  </span>
                </div>
              </div>
            </div>

            {/* SECTION: Material Description Card */}
            <article
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6"
              data-purpose="product-description-card"
            >
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#EB4D23] block mb-2 font-mono">
                  Material Description
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight font-display">
                  Quarry Stones Supply &amp; Sizing
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-base">
                {COMPANY_DETAILS.name} supplies high quality crushed quarry stones for construction projects.
                Our quarry stones are sorted and supplied in four distinct size grades to fulfill different structural
                and building requirements.
              </p>

              {/* Unit Basis Notice Banner */}
              <div className="bg-orange-50 border border-orange-200/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 text-orange-950">
                <div className="w-12 h-12 bg-white rounded-xl shadow-xs border border-orange-200 flex-shrink-0 flex items-center justify-center text-[#EB4D23]">
                  <Truck className="w-6 h-6 stroke-[2]" />
                </div>
                <p className="text-sm sm:text-base leading-snug">
                  <strong className="font-bold text-[#D03B13]">Unit Basis:</strong> All prices are calculated per{' '}
                  <span className="font-semibold underline decoration-[#EB4D23]/40">
                    Single Trip (16m³ Tipper Truck Load)
                  </span>.
                </p>
              </div>
            </article>

            {/* SECTION: Available Sizes & Pricing */}
            <section
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm"
              data-purpose="sizing-and-pricing-table"
            >
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight font-display">
                  Available Sizes &amp; Pricing
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  High-durability machine crushed gravel tailored for civil engineering and residential concrete works.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Size Item 1: 3/4" */}
                <div className="border border-gray-100 bg-gray-50/60 rounded-2xl p-5 hover:border-[#EB4D23]/30 hover:bg-orange-50/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-lg text-gray-900">Three Quarter (3/4")</h4>
                      <span className="bg-[#EB4D23]/10 text-[#EB4D23] text-xs font-bold px-2 py-0.5 rounded">
                        Standard
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                      Ideal for cast concrete slabs, structural beams, pillars, and reinforced flooring foundations.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block font-medium">Rate / Unit</span>
                      <span className="text-base font-extrabold text-[#D03B13] font-mono">
                        {itemThreeQuarter.prices.trip}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleQuickEnquireSize('Quarry Stones (3/4")')}
                      className="text-xs font-semibold text-gray-700 hover:text-[#EB4D23] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Enquire Size</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Size Item 2: 1" */}
                <div className="border border-gray-100 bg-gray-50/60 rounded-2xl p-5 hover:border-[#EB4D23]/30 hover:bg-orange-50/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-lg text-gray-900">One Inch (1")</h4>
                      <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-0.5 rounded">
                        Coarse
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                      Heavy-duty civil foundations, retaining walls, civil drainage beds, and road sub-base ballast.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block font-medium">Rate / Unit</span>
                      <span className="text-base font-extrabold text-[#D03B13] font-mono">
                        {itemOneInch.prices.trip}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleQuickEnquireSize('Quarry Stones (1")')}
                      className="text-xs font-semibold text-gray-700 hover:text-[#EB4D23] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Enquire Size</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Size Item 3: 3/8" */}
                <div className="border border-gray-100 bg-gray-50/60 rounded-2xl p-5 hover:border-[#EB4D23]/30 hover:bg-orange-50/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-lg text-gray-900">Three Eighth (3/8")</h4>
                      <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-0.5 rounded">
                        Fine Grade
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                      Engineered for concrete hollow blocks, decorative kerbs, tight rebar cavities, and precast panels.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block font-medium">Rate / Unit</span>
                      <span className="text-base font-extrabold text-[#D03B13] font-mono">
                        {itemThreeEighth.prices.trip}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleQuickEnquireSize('Quarry Stones (3/8")')}
                      className="text-xs font-semibold text-gray-700 hover:text-[#EB4D23] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Enquire Size</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Size Item 4: 5/8" */}
                <div className="border border-gray-100 bg-gray-50/60 rounded-2xl p-5 hover:border-[#EB4D23]/30 hover:bg-orange-50/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-lg text-gray-900">Five Eighth (5/8")</h4>
                      <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-0.5 rounded">
                        Versatile
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                      Smooth aggregate concrete finishes, lightweight flooring, and standard masonry work.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block font-medium">Rate / Unit</span>
                      <span className="text-base font-extrabold text-[#D03B13] font-mono">
                        {itemFiveEighth.prices.trip}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleQuickEnquireSize('Quarry Stones (5/8")')}
                      className="text-xs font-semibold text-gray-700 hover:text-[#EB4D23] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Enquire Size</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: Direct Supply Enquiry Form */}
            <section
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm"
              data-purpose="material-enquiry-form"
              id="enquiry-form"
            >
              <div className="mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#EB4D23] block mb-2 font-mono">
                  Direct Supply Enquiry
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight font-display">
                  Send An Enquiry To {COMPANY_DETAILS.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Complete the form below to enquire about building material availability and orders.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-gray-900">Enquiry Received</h4>
                  <p className="text-xs text-gray-600">
                    Thank you {fullName}! Our dispatch manager will contact you promptly at {phone}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="full_name">
                      Your Name *
                    </label>
                    <input
                      id="full_name"
                      name="full_name"
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Samuel Mensah"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm focus:bg-white focus:border-[#EB4D23] focus:ring-2 focus:ring-[#EB4D23]/20 outline-none transition-all"
                    />
                  </div>

                  {/* Phone & Email (Side by Side) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 055XXXXXXX"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm focus:bg-white focus:border-[#EB4D23] focus:ring-2 focus:ring-[#EB4D23]/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. name@example.com"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm focus:bg-white focus:border-[#EB4D23] focus:ring-2 focus:ring-[#EB4D23]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Material Needed */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="material">
                      Material Needed *
                    </label>
                    <div className="relative">
                      <select
                        id="material"
                        name="material"
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm focus:bg-white focus:border-[#EB4D23] focus:ring-2 focus:ring-[#EB4D23]/20 text-gray-800 appearance-none outline-none cursor-pointer"
                      >
                        <option value={'Quarry Stones (3/4")'}>Quarry Stones (3/4")</option>
                        <option value={'Quarry Stones (1")'}>Quarry Stones (1")</option>
                        <option value={'Quarry Stones (3/8")'}>Quarry Stones (3/8")</option>
                        <option value={'Quarry Stones (5/8")'}>Quarry Stones (5/8")</option>
                        <option value="Riversand">Riversand</option>
                        <option value="Filling Sand">Filling Sand</option>
                        <option value="Smooth Sand">Smooth Sand</option>
                        <option value="Rough Sand">Rough Sand</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Message / Notes */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="message">
                      Message / Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="State quantity, location or project specifications..."
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm focus:bg-white focus:border-[#EB4D23] focus:ring-2 focus:ring-[#EB4D23]/20 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Buttons Grid */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="submit"
                      className="w-full bg-[#0B0C0E] hover:bg-black text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md text-sm cursor-pointer"
                    >
                      <span>Submit Enquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#EB4D23] hover:bg-[#D03B13] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md text-sm cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </section>
          </div>

          {/* RIGHT COLUMN: Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6" data-purpose="sidebar-actions">
            {/* SIDEBAR CARD: Direct Dispatch (Order Quarry Stones) */}
            <div
              className="bg-[#111317] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-neutral-800 relative overflow-hidden"
              id="order-section"
            >
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#EB4D23]/10 rounded-full blur-2xl pointer-events-none" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#EB4D23] block mb-2 font-mono">
                Direct Dispatch
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2 font-display">
                Order Quarry Stones
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Contact {COMPANY_DETAILS.name} directly to confirm availability and schedule delivery to your construction site. Managed by Mr. Adjei Nortey.
              </p>
              <div className="space-y-3">
                {/* Call Action Button */}
                <a
                  className="w-full bg-[#EB4D23] hover:bg-[#D03B13] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md text-sm"
                  href={`tel:${COMPANY_DETAILS.phone}`}
                >
                  <Phone className="w-4 h-4" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </a>
                {/* WhatsApp Action Button */}
                <a
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md text-sm"
                  href={`https://wa.me/233244520024?text=${encodeURIComponent(
                    `Hello ${COMPANY_DETAILS.name}, I am contacting you to order Quarry Stones for my site.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* SIDEBAR CARD: Other Building Materials */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100 font-display">
                Other Building Materials
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectOtherMaterial) onSelectOtherMaterial('riversand');
                      else onNavigateMaterials();
                    }}
                    className="w-full text-left group flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-[#EB4D23]/40 hover:bg-orange-50/20 transition-all cursor-pointer"
                  >
                    <div>
                      <span className="block font-bold text-sm text-gray-800 group-hover:text-[#EB4D23]">
                        Riversand
                      </span>
                      <span className="text-xs text-gray-500 font-medium font-mono">
                        GH₵ 3,100
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#EB4D23]/10 flex items-center justify-center text-gray-400 group-hover:text-[#EB4D23] transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectOtherMaterial) onSelectOtherMaterial('filling');
                      else onNavigateMaterials();
                    }}
                    className="w-full text-left group flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-[#EB4D23]/40 hover:bg-orange-50/20 transition-all cursor-pointer"
                  >
                    <div>
                      <span className="block font-bold text-sm text-gray-800 group-hover:text-[#EB4D23]">
                        Filling Sand
                      </span>
                      <span className="text-xs text-gray-500 font-medium font-mono">
                        FROM GH₵ 1,850
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#EB4D23]/10 flex items-center justify-center text-gray-400 group-hover:text-[#EB4D23] transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectOtherMaterial) onSelectOtherMaterial('sand');
                      else onNavigateMaterials();
                    }}
                    className="w-full text-left group flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-[#EB4D23]/40 hover:bg-orange-50/20 transition-all cursor-pointer"
                  >
                    <div>
                      <span className="block font-bold text-sm text-gray-800 group-hover:text-[#EB4D23]">
                        Smooth, Medium &amp; Rough Sand
                      </span>
                      <span className="text-xs text-gray-500 font-medium font-mono">
                        FROM GH₵ 2,300
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#EB4D23]/10 flex items-center justify-center text-gray-400 group-hover:text-[#EB4D23] transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                </li>
              </ul>
            </div>

            {/* Prompt Delivery Notice Box */}
            <div className="bg-gray-100/80 rounded-2xl p-5 border border-gray-200 text-xs text-gray-600 leading-relaxed">
              <div className="flex items-center gap-2 font-bold text-gray-900 mb-1">
                <Info className="w-4 h-4 text-[#EB4D23]" />
                <span>Prompt Delivery Notice</span>
              </div>
              All building material prices are strictly based on a{' '}
              <strong className="text-gray-900">Single Trip (16m³ Tipper Truck Load)</strong>. Please reach out with your exact project location so we can give you prompt delivery confirmation.
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};
