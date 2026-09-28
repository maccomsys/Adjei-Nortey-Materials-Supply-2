import React, { useState } from 'react';
import {
  Phone,
  Clock,
  Globe,
  MapPin,
  MessageSquare,
  CheckCircle2,
  Info,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/materialsData';
import { QuoteRequest } from '../types';

interface ContactPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateMaterials: () => void;
  onNavigateServices: () => void;
  onNavigatePrices: () => void;
  onNavigateGallery: () => void;
  onQuoteSubmit?: (quote: QuoteRequest) => void;
}

export const ContactPageScreen: React.FC<ContactPageScreenProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateMaterials,
  onNavigateServices,
  onNavigatePrices,
  onNavigateGallery,
  onQuoteSubmit,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [materialNeeded, setMaterialNeeded] = useState('Quarry Stones / Chippings');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello ${COMPANY_DETAILS.name},\n` +
      `I am sending an enquiry regarding building materials:\n\n` +
      `*Name:* ${fullName || 'Site Client'}\n` +
      `*Phone:* ${phone || 'Available on request'}\n` +
      `*Material Needed:* ${materialNeeded}\n` +
      `*Requirements / Site Location:* ${message || 'Mallam Junction / Greater Accra area'}\n\n` +
      `Please provide current rates and delivery schedule.`
    );
    return `https://wa.me/233244520024?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName) return;

    const whatsappUrl = generateWhatsAppLink();
    window.open(whatsappUrl, '_blank');

    if (onQuoteSubmit) {
      onQuoteSubmit({
        fullName,
        email: COMPANY_DETAILS.email,
        phone: phone || COMPANY_DETAILS.phone,
        materialId: 'general',
        quantity: 1,
        unit: 'trip',
        location: message || 'Accra/Ghana Site',
        additionalNotes: `Material Needed: ${materialNeeded}\nDetails: ${message}`,
      });
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFullName('');
      setPhone('');
      setMessage('');
      setMaterialNeeded('Quarry Stones / Chippings');
    }, 4000);
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-800 antialiased selection:bg-[#EB4D23] selection:text-white">
      {/* 1. HeroBanner */}
      <section
        className="py-20 px-4 text-center text-white relative overflow-hidden bg-[#0E1015]"
        data-purpose="hero-banner"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(14, 16, 21, 0.88), rgba(14, 16, 21, 0.96)), radial-gradient(ellipse at 50% 40%, rgba(235, 77, 35, 0.18) 0%, rgba(14, 16, 21, 0.8) 75%)',
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Eyebrow / Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
            <span>Building Materials &amp; Supply</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-white font-display">
            Contact Us
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Contact {COMPANY_DETAILS.name} directly via Call or WhatsApp for building material orders, rates, and delivery confirmations.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="enquiry-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Direct Supply WhatsApp Enquiry Form */}
          <section
            className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200"
            data-purpose="enquiry-card"
          >
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#EB4D23] block mb-1">
              WhatsApp Supply Enquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 font-display">
              Send An Enquiry To {COMPANY_DETAILS.name}
            </h2>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3 animate-in fade-in zoom-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Enquiry Dispatched To WhatsApp!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{fullName}</strong>. Your message was formatted and sent. You can also call us directly on{' '}
                  <strong className="text-slate-900 font-mono">{COMPANY_DETAILS.phone}</strong>.
                </p>
                <div className="pt-2">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Open WhatsApp Chat Again</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="fullName">
                    Customer Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Samuel Mensah"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#EB4D23] focus:ring-2 focus:ring-[#EB4D23]/20 transition-all text-sm outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0244520024"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#EB4D23] focus:ring-2 focus:ring-[#EB4D23]/20 transition-all text-sm outline-none"
                  />
                </div>

                {/* Material Needed */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="materialNeeded">
                    Building Material / Product *
                  </label>
                  <div className="relative">
                    <select
                      id="materialNeeded"
                      name="materialNeeded"
                      value={materialNeeded}
                      onChange={(e) => setMaterialNeeded(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:bg-white focus:border-[#EB4D23] focus:ring-2 focus:ring-[#EB4D23]/20 transition-all text-sm appearance-none outline-none cursor-pointer font-medium"
                    >
                      <option value="Boulders (GH₵ 6,000 / Trip)">Boulders (GH₵ 6,000 / Trip)</option>
                      <option value="Filling Material / Laterite (Contact for Price)">Filling Material / Laterite (Contact for Price)</option>
                      <option value="Quarry Dust (GH₵ 7,300 / Trip)">Quarry Dust (GH₵ 7,300 / Trip)</option>
                      <option value="Quarry Stones / Chippings (GH₵ 5,500 / Trip)">Quarry Stones / Chippings (GH₵ 5,500 / Trip)</option>
                      <option value="Riversand (Contact for Price)">Riversand (Clean Dredged Sand)</option>
                      <option value="Stones (GH₵ 5,000 / Trip)">Stones (GH₵ 5,000 / Trip)</option>
                      <option value="General Materials Supply Enquiry">General Materials Supply Enquiry</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Message / Quantity & Location */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="messageDetails">
                    Quantity, Requirements or Site Location *
                  </label>
                  <textarea
                    id="messageDetails"
                    name="messageDetails"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Need 3 trips delivered to Mallam Junction construction site tomorrow morning."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#EB4D23] focus:ring-2 focus:ring-[#EB4D23]/20 transition-all text-sm outline-none resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-emerald-900/20 transition-all text-sm cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="w-full bg-[#EB4D23] hover:bg-[#d94119] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 hover:shadow-lg transition-all text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Us: {COMPANY_DETAILS.phone}</span>
                  </a>
                </div>
              </form>
            )}
          </section>

          {/* RIGHT COLUMN: Company Details & Notice */}
          <section className="lg:col-span-5 space-y-6" data-purpose="company-details-sidebar">
            {/* Main Details White Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
              <span className="text-xs uppercase tracking-wider font-extrabold text-[#EB4D23] block mb-1">
                Company Details
              </span>
              <h2 className="text-2xl font-black text-slate-900 mb-6 font-display">
                {COMPANY_DETAILS.name}
              </h2>

              {/* Stack of Contact Information Cards */}
              <div className="space-y-3.5">
                {/* Physical Location Tile */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5 hover:bg-slate-100 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-[#EB4D23] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-wider text-slate-500 uppercase font-mono">
                      Office &amp; Depot Location
                    </p>
                    <p className="text-sm font-extrabold text-slate-900">
                      {COMPANY_DETAILS.location}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fast tipper dispatch across Greater Accra &amp; nationwide
                    </p>
                  </div>
                </div>

                {/* Direct Phone Tile */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-4 hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-orange-100 text-[#EB4D23] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider text-slate-500 uppercase font-mono mb-0.5">
                      Official Phone Numbers (Call Us)
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        className="text-lg sm:text-xl font-black text-slate-900 hover:text-[#EB4D23] transition-colors font-mono tracking-tight"
                        href={`tel:${COMPANY_DETAILS.phone}`}
                      >
                        {COMPANY_DETAILS.phone}
                      </a>
                      <span className="text-slate-400 font-bold">/</span>
                      <a
                        className="text-lg sm:text-xl font-black text-slate-900 hover:text-[#EB4D23] transition-colors font-mono tracking-tight"
                        href={`tel:${COMPANY_DETAILS.secondaryPhone}`}
                      >
                        {COMPANY_DETAILS.secondaryPhone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Tile (Highlighted Green) */}
                <div className="p-4 rounded-xl border border-emerald-300 bg-emerald-50/70 flex items-center gap-4 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MessageSquare className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider text-emerald-800 uppercase font-mono mb-0.5">
                      WhatsApp Messaging
                    </p>
                    <a
                      className="text-lg sm:text-xl font-black text-emerald-800 hover:text-emerald-900 transition-colors font-mono tracking-tight"
                      href={`https://wa.me/233244520024?text=${encodeURIComponent(
                        `Hello ${COMPANY_DETAILS.name}, I am contacting you to order building materials for my site.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>

                {/* Working Hours Tile */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5 hover:bg-slate-100 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-[#EB4D23] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-wider text-slate-500 uppercase font-mono">
                      Working Hours
                    </p>
                    <p className="text-sm font-extrabold text-slate-900">
                      Monday – Saturday: 7:00 AM – 6:00 PM (24/7 Available)
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Orders and delivery enquiries processed promptly
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-6 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    className="w-full bg-[#EB4D23] hover:bg-[#d94119] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 hover:shadow-lg transition-all text-xs sm:text-sm font-mono"
                    href={`tel:${COMPANY_DETAILS.phone}`}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {COMPANY_DETAILS.phone}</span>
                  </a>
                  <a
                    className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-xs sm:text-sm font-mono"
                    href={`tel:${COMPANY_DETAILS.secondaryPhone}`}
                  >
                    <Phone className="w-4 h-4 text-[#EB4D23]" />
                    <span>Call {COMPANY_DETAILS.secondaryPhone}</span>
                  </a>
                </div>
                <a
                  className="w-full bg-[#25D366] hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-green-600/20 hover:shadow-lg transition-all text-sm"
                  href={`https://wa.me/233244520024?text=${encodeURIComponent(
                    `Hello ${COMPANY_DETAILS.name}, I would like to inquire about building material supply and delivery.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Supply Standard Notice Card */}
            <div
              className="bg-slate-950 text-white rounded-2xl p-6 sm:p-7 shadow-md border border-slate-800"
              data-purpose="standard-notice"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-[#EB4D23] flex items-center justify-center shrink-0 mt-0.5">
                  <Info className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5 text-white">Supply Standard Notice</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    All building material prices are strictly based on{' '}
                    <span className="text-white font-semibold">Single Trip (16m³ Tipper Truck Load)</span>. Please reach out with your delivery location so we can give you prompt confirmation.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
