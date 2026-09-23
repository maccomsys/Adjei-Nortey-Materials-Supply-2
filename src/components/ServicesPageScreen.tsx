import React from 'react';
import {
  Truck,
  Layers,
  Shield,
  Grid,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { COMPANY_DETAILS, PRICE_ITEMS } from '../data/materialsData';
import { PriceItem } from '../types';

interface ServicesPageScreenProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigatePrices: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
  onSelectCategory: (category: 'quarry' | 'riversand' | 'filling' | 'sand') => void;
  onSelectMaterial: (item: PriceItem) => void;
}

export const ServicesPageScreen: React.FC<ServicesPageScreenProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigatePrices,
  onNavigateGallery,
  onNavigateContact,
  onSelectCategory,
  onSelectMaterial,
}) => {
  return (
    <div className="bg-white min-h-screen text-[#080e21] antialiased selection:bg-[#EB4D23] selection:text-white flex flex-col font-sans">
      {/* 1. Services Hero Section */}
      <section className="relative bg-[#080e21] text-white py-20 md:py-28 overflow-hidden" data-purpose="services-hero">
        {/* Geometric Grid Background & Radial Glow */}
        <div
          className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity bg-cover bg-center"
          style={{
            backgroundImage:
              'radial-gradient(circle at center, rgba(235, 77, 35, 0.25) 0%, transparent 70%), linear-gradient(rgba(8, 14, 33, 0.85), rgba(8, 14, 33, 0.98))',
          }}
        >
          <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%"></rect>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EB4D23]/15 border border-[#EB4D23]/35 text-[#EB4D23] text-xs uppercase font-bold tracking-widest mb-6">
            <Layers className="w-4 h-4 text-[#EB4D23]" />
            <span>MATERIAL SUPPLY SERVICES</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-white uppercase mb-6 leading-tight">
            Building Material Supply Services
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {COMPANY_DETAILS.name} provides dependable supply of quarry stones, riversand, filling
            sand, and graded sand across {COMPANY_DETAILS.location}.
          </p>
        </div>
      </section>

      {/* 2. Main Content Services Grid */}
      <section className="py-16 sm:py-24 bg-[#FAFAFC]" data-purpose="services-grid-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#EB4D23] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2 font-mono">
              OUR CORE SUPPLY SCOPE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-[#080e21] tracking-tight">
              Quality Building Material Supply In Ghana
            </h2>
          </div>

          {/* 2x2 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Quarry Stones Supply */}
            <div
              className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-[0_8px_30px_rgba(8,14,33,0.05)] hover:shadow-[0_16px_40px_rgba(235,77,35,0.08)] transition-all duration-300 flex flex-col justify-between group"
              data-purpose="service-item-quarry-stones"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#FFF3F0] text-[#EB4D23] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Truck className="w-7 h-7 stroke-[2]" />
                </div>
                {/* Labels & Title */}
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1 font-mono">
                  AGGREGATES SUPPLY
                </span>
                <h3 className="text-2xl font-bold font-display text-[#080e21] tracking-tight mb-4">
                  Quarry Stones Supply
                </h3>
                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  We supply crushed quarry stones in Three Quarter (3/4"), One Inch (1"), Three
                  Eighth (3/8"), and Five Eighth (5/8") sizes. Delivered per 20m³ Tipper Truck Trip.
                </p>
                {/* Checklist items */}
                <ul className="space-y-3 mb-8 text-sm font-medium text-slate-800">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EB4D23] flex-shrink-0 mt-0.5" />
                    <span>Three Quarter (3/4") &amp; One Inch (1") – GH₵ 2,850</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EB4D23] flex-shrink-0 mt-0.5" />
                    <span>Three Eighth (3/8") &amp; Five Eighth (5/8") – GH₵ 2,950</span>
                  </li>
                </ul>
              </div>
              {/* Action Pill Button */}
              <div>
                <button
                  onClick={() => onSelectCategory('quarry')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-sm font-bold text-[#080e21] hover:bg-[#EB4D23] hover:text-white hover:border-[#EB4D23] transition-all cursor-pointer"
                >
                  <span>Explore Quarry Stones</span>
                  <span className="text-lg leading-none">→</span>
                </button>
              </div>
            </div>

            {/* Card 2: Riversand Supply */}
            <div
              className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-[0_8px_30px_rgba(8,14,33,0.05)] hover:shadow-[0_16px_40px_rgba(235,77,35,0.08)] transition-all duration-300 flex flex-col justify-between group"
              data-purpose="service-item-riversand"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#FFF3F0] text-[#EB4D23] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Layers className="w-7 h-7 stroke-[2]" />
                </div>
                {/* Labels & Title */}
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1 font-mono">
                  NATURAL SAND SUPPLY
                </span>
                <h3 className="text-2xl font-bold font-display text-[#080e21] tracking-tight mb-4">
                  Riversand Supply
                </h3>
                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  Supply of natural riversand for structural building, concrete mixing, and general
                  masonry work. Delivered per 20m³ Tipper Truck Trip.
                </p>
                {/* Checklist items */}
                <ul className="space-y-3 mb-8 text-sm font-medium text-slate-800">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EB4D23] flex-shrink-0 mt-0.5" />
                    <span>Clean washed natural riversand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EB4D23] flex-shrink-0 mt-0.5" />
                    <span>GH₵ 3,100 per Tipper Truck Trip (20m³)</span>
                  </li>
                </ul>
              </div>
              {/* Action Pill Button */}
              <div>
                <button
                  onClick={() => onSelectCategory('riversand')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-sm font-bold text-[#080e21] hover:bg-[#EB4D23] hover:text-white hover:border-[#EB4D23] transition-all cursor-pointer"
                >
                  <span>Explore Riversand</span>
                  <span className="text-lg leading-none">→</span>
                </button>
              </div>
            </div>

            {/* Card 3: Filling Sand Supply */}
            <div
              className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-[0_8px_30px_rgba(8,14,33,0.05)] hover:shadow-[0_16px_40px_rgba(235,77,35,0.08)] transition-all duration-300 flex flex-col justify-between group"
              data-purpose="service-item-filling-sand"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#FFF3F0] text-[#EB4D23] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Shield className="w-7 h-7 stroke-[2]" />
                </div>
                {/* Labels & Title */}
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1 font-mono">
                  FOUNDATION &amp; SITE PREP
                </span>
                <h3 className="text-2xl font-bold font-display text-[#080e21] tracking-tight mb-4">
                  Filling Sand Supply
                </h3>
                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  Supply of foundation filling sand and laterite for building foundation
                  compaction, land leveling, and ground preparation works.
                </p>
                {/* Checklist items */}
                <ul className="space-y-3 mb-8 text-sm font-medium text-slate-800">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EB4D23] flex-shrink-0 mt-0.5" />
                    <span>Grade 1 Filling Sand – GH₵ 1,850</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EB4D23] flex-shrink-0 mt-0.5" />
                    <span>Laterite – GH₵ 1,950</span>
                  </li>
                </ul>
              </div>
              {/* Action Pill Button */}
              <div>
                <button
                  onClick={() => onSelectCategory('filling')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-sm font-bold text-[#080e21] hover:bg-[#EB4D23] hover:text-white hover:border-[#EB4D23] transition-all cursor-pointer"
                >
                  <span>Explore Filling Sand</span>
                  <span className="text-lg leading-none">→</span>
                </button>
              </div>
            </div>

            {/* Card 4: Smooth, Medium & Rough Sand */}
            <div
              className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-[0_8px_30px_rgba(8,14,33,0.05)] hover:shadow-[0_16px_40px_rgba(235,77,35,0.08)] transition-all duration-300 flex flex-col justify-between group"
              data-purpose="service-item-graded-sand"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#FFF3F0] text-[#EB4D23] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Grid className="w-7 h-7 stroke-[2]" />
                </div>
                {/* Labels & Title */}
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1 font-mono">
                  GRADED TEXTURES
                </span>
                <h3 className="text-2xl font-bold font-display text-[#080e21] tracking-tight mb-4">
                  Smooth, Medium &amp; Rough Sand
                </h3>
                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  We supply multiple sand grades suited for plastering, mortar, screeding, and block
                  production per 20m³ Tipper Truck Trip.
                </p>
                {/* Checklist items */}
                <ul className="space-y-3 mb-8 text-sm font-medium text-slate-800">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EB4D23] flex-shrink-0 mt-0.5" />
                    <span>Smooth Sand &amp; Medium Sand – GH₵ 2,300</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EB4D23] flex-shrink-0 mt-0.5" />
                    <span>Rough Sand – GH₵ 2,350</span>
                  </li>
                </ul>
              </div>
              {/* Action Pill Button */}
              <div>
                <button
                  onClick={() => onSelectCategory('sand')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-sm font-bold text-[#080e21] hover:bg-[#EB4D23] hover:text-white hover:border-[#EB4D23] transition-all cursor-pointer"
                >
                  <span>Explore Graded Sand</span>
                  <span className="text-lg leading-none">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Order Dispatch Banner */}
      <section className="py-12 bg-[#FAFAFC]" data-purpose="cta-banner-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#080e21] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-[#EB4D23] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2 font-mono">
                ORDER DISPATCH
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight mb-4">
                Schedule Your Material Supply
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
                Contact {COMPANY_DETAILS.name} to place an order or confirm current delivery schedules.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              {/* Call Button */}
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#EB4D23] hover:bg-[#D03B13] text-white font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-[#EB4D23]/30"
                href={`tel:${COMPANY_DETAILS.phone}`}
              >
                <Phone className="w-5 h-5" />
                <span>Call: {COMPANY_DETAILS.phone}</span>
              </a>

              {/* WhatsApp Button */}
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-emerald-500/30"
                href="https://wa.me/233244520024"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
