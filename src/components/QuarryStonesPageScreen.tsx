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
import { COMPANY_DETAILS, PRICE_ITEMS, MATERIAL_IMAGES } from '../data/materialsData';
import { QuoteRequest, MaterialCategoryId } from '../types';

interface QuarryStonesPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateMaterials: () => void;
  onNavigateServices: () => void;
  onNavigatePrices: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
  onSelectOtherMaterial?: (category: MaterialCategoryId) => void;
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
  const quarryStoneImages = MATERIAL_IMAGES.quarryStones;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const quarryItem = PRICE_ITEMS.find((item) => item.id === 'quarry-stones') || PRICE_ITEMS[3];

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
        location: 'Accra / Ghana Site',
        additionalNotes: `Selected Material: Quarry Stones / Chippings\nNotes: ${message}`,
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

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello ${COMPANY_DETAILS.name},\n` +
      `I would like to order Quarry Stones / Chippings (GH₵ 5,500 / Single Trip).\n` +
      `Name: ${fullName || 'Site Contractor'}\n` +
      `Phone: ${phone || 'Available on call'}\n` +
      `Location: Mallam Junction / Accra\n` +
      `Notes: ${message || 'Please confirm single trip dispatch schedule.'}`
    );
    return `https://wa.me/233244520024?text=${text}`;
  };

  return (
    <div className="bg-[#F8F9FA] text-[#2D3139] font-sans antialiased min-h-screen flex flex-col">
      {/* 1. Header Banner */}
      <section className="relative bg-[#080e21] text-white py-14 sm:py-20 border-b border-gray-800 overflow-hidden">
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <button onClick={onNavigateHome} className="hover:text-white transition">Home</button>
            <span>/</span>
            <button onClick={onNavigateMaterials} className="hover:text-white transition">Materials</button>
            <span>/</span>
            <span className="text-[#EB4D23] font-bold">Quarry Stones / Chippings</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EB4D23]/20 border border-[#EB4D23]/30 text-[#EB4D23] text-xs font-bold uppercase tracking-wider mb-4">
              <span>Granite Aggregate &amp; Chippings</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-3">
              Quarry Stones / Chippings
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Crushed granite quarry stones and aggregate chippings for foundation concrete, casting, beams, and columns across {COMPANY_DETAILS.location}.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Image Gallery & Specs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Gallery View */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-gray-200/80 shadow-md">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-gray-100 mb-4 shadow-inner">
                <img
                  src={quarryStoneImages[activeImageIndex]}
                  alt="Quarry Stones Chippings"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-[#EB4D23] text-white px-4 py-1.5 rounded-full text-sm font-black font-mono shadow-md">
                  GH₵ 5,500 / Trip
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {quarryStoneImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#EB4D23] scale-105 shadow-md'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Specifications */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md space-y-6">
              <h2 className="text-xl font-bold text-gray-900 font-display">
                Material Specifications &amp; Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-xs text-gray-400 block font-bold uppercase mb-1">Standard Load</span>
                  <span className="font-extrabold text-gray-900">Single Tipper Truck Trip</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-xs text-gray-400 block font-bold uppercase mb-1">Price</span>
                  <span className="font-extrabold text-[#EB4D23] font-mono">GH₵ 5,500 / Trip</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-xs text-gray-400 block font-bold uppercase mb-1">Applications</span>
                  <span className="font-extrabold text-gray-900">Reinforced Concrete, Columns, Beams</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-xs text-gray-400 block font-bold uppercase mb-1">Delivery</span>
                  <span className="font-extrabold text-gray-900">{COMPANY_DETAILS.location} &amp; Nationwide</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-sm text-gray-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#EB4D23] flex-shrink-0 mt-0.5" />
                  <span>Crushed granite aggregates screened for consistent gradation and superior bonding strength.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#EB4D23] flex-shrink-0 mt-0.5" />
                  <span>Ideal for residential foundations, multi-storey commercial slabs, and heavy civil engineering.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#EB4D23] flex-shrink-0 mt-0.5" />
                  <span>Direct delivery from quarry dispatch to your construction site without delay.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order / Inquiry Form */}
          <div className="lg:col-span-5 space-y-6">
            <div id="enquiry-form" className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EB4D23] block mb-1">
                Direct Dispatch Order
              </span>
              <h3 className="text-2xl font-bold text-gray-900 font-display mb-2">
                Order Quarry Stones
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Fill in your details below to schedule dispatch to your site.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-5 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p className="text-xs font-semibold">
                    Thank you! Your dispatch request has been submitted. Our team will contact you shortly to confirm delivery.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EB4D23] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0244520024"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EB4D23] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Delivery Location &amp; Trips</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. 2 trips to Mallam Junction, Accra"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EB4D23] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#EB4D23] hover:bg-[#d63f17] text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-md transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Dispatch Request</span>
                  </button>

                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl text-sm shadow-md transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Order Directly on WhatsApp</span>
                  </a>
                </form>
              )}
            </div>

            {/* Direct Phone Dispatch Card */}
            <div className="bg-[#080e21] rounded-3xl p-6 text-white space-y-3 shadow-lg">
              <span className="text-xs uppercase font-bold text-[#EB4D23] tracking-wider">
                Direct Dispatch Hotline
              </span>
              <h4 className="text-lg font-bold">Call Our Materials Desk</h4>
              <p className="text-xs text-gray-300">
                Speak directly with dispatch regarding truck arrival times and immediate loadings.
              </p>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full text-white font-bold text-sm transition"
              >
                <Phone className="w-4 h-4 text-[#EB4D23]" />
                <span>{COMPANY_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
