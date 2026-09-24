import React, { useState } from 'react';
import {
  Tags,
  Truck,
  Phone,
  AlertTriangle,
  ArrowRight,
  Calculator,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { COMPANY_DETAILS, PRICE_ITEMS } from '../data/materialsData';
import { SupplyUnit, PriceItem } from '../types';

interface PricingSectionProps {
  onOpenPriceListModal: () => void;
  onOpenCalculatorModal: () => void;
  onSelectMaterialForQuote: (item: PriceItem) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenPriceListModal,
  onOpenCalculatorModal,
  onSelectMaterialForQuote,
}) => {
  const [activeUnit, setActiveUnit] = useState<SupplyUnit>('trip');

  const unitLabels: Record<SupplyUnit, { short: string; full: string }> = {
    trip: { short: 'TRUCK TRIP', full: 'Tipper Truck Delivery' },
    tonne: { short: 'PER TONNE', full: 'Metric Tonne' },
    m3: { short: 'PER M³', full: 'Cubic Metre' },
  };

  const getWhatsAppLink = (item: PriceItem) => {
    const text = encodeURIComponent(
      `Hello ${COMPANY_DETAILS.name}, I would like to order/confirm pricing for ${item.name} (${item.prices[activeUnit]} per ${unitLabels[activeUnit].short}). My site location is: `
    );
    return `https://wa.me/233244520024?text=${text}`;
  };

  return (
    <section className="py-20 lg:py-28 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-[#EB4D23] font-bold text-xs uppercase tracking-widest mb-2">
            <Tags className="w-4 h-4" />
            <span>Transparent Rates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 mb-3">
            Pricing &amp; Rate Card
          </h2>
          <p className="text-sm text-gray-500">
            Certified building material supply prices based on a{' '}
            <span className="font-bold text-gray-800 uppercase tracking-wide">
              [{unitLabels[activeUnit].short}]
            </span>
            .
          </p>

          {/* Unit Toggle Buttons */}
          <div className="mt-5 inline-flex items-center p-1 bg-gray-100 rounded-2xl border border-gray-200">
            <button
              onClick={() => setActiveUnit('trip')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
                activeUnit === 'trip'
                  ? 'bg-[#EB4D23] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Tipper Truck Trip
            </button>
            <button
              onClick={() => setActiveUnit('tonne')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
                activeUnit === 'tonne'
                  ? 'bg-[#EB4D23] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Per Tonne
            </button>
            <button
              onClick={() => setActiveUnit('m3')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
                activeUnit === 'm3'
                  ? 'bg-[#EB4D23] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Per Cubic Metre (m³)
            </button>
          </div>
        </div>

        {/* Standard Supply Unit Banner */}
        <div className="bg-[#080e21] text-white rounded-2xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#EB4D23] text-base">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase font-bold text-[#EB4D23] block">
                Standard Supply Unit
              </span>
              <p className="font-extrabold text-sm sm:text-base">
                Prices are based on {unitLabels[activeUnit].full} [{unitLabels[activeUnit].short}]
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenCalculatorModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2.5 rounded-full transition cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-[#EB4D23]" />
              <span>Trip Calculator</span>
            </button>

            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EB4D23] hover:bg-[#D03B13] text-white text-xs font-bold px-5 py-2.5 rounded-full transition shadow-md font-mono"
              href={`tel:${COMPANY_DETAILS.phone}`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>

        {/* 6 Building Materials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {PRICE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:border-[#EB4D23]/40 hover:shadow-lg transition-all flex flex-col justify-between group"
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

                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-gray-900 text-lg group-hover:text-[#EB4D23] transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md uppercase">
                    {unitLabels[activeUnit].short}
                  </span>
                </div>

                <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block font-bold uppercase">Price</span>
                  <span className="font-extrabold text-lg text-gray-900 font-mono tabular-nums text-[#EB4D23]">
                    {item.prices[activeUnit]}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    className="w-9 h-9 rounded-xl bg-green-50 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition text-xs font-bold shadow-xs"
                    href={getWhatsAppLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Order via WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => onSelectMaterialForQuote(item)}
                    className="px-4 py-2 rounded-xl bg-[#EB4D23] hover:bg-[#D03B13] text-white text-xs font-bold transition cursor-pointer shadow-sm"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button: Open full price list modal */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenPriceListModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition cursor-pointer"
          >
            <span>Open Complete Rate Card Modal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
