import React, { useState } from 'react';
import {
  Tags,
  Truck,
  Phone,
  AlertTriangle,
  ArrowRight,
  Calculator,
  ExternalLink,
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
    trip: { short: 'TRUCK TRIP', full: '20m³ Tipper Truck Delivery' },
    tonne: { short: 'PER TONNE', full: 'Metric Tonne' },
    m3: { short: 'PER M³', full: 'Cubic Metre' },
  };

  const getWhatsAppLink = (item: PriceItem) => {
    const text = encodeURIComponent(
      `Hello ${COMPANY_DETAILS.name}, I would like to order/confirm pricing for ${item.name} (${item.prices[activeUnit]} per ${unitLabels[activeUnit].short}). My site location is: `
    );
    return `https://wa.me/233244520024?text=${text}`;
  };

  const quarryItems = PRICE_ITEMS.filter((i) => i.category === 'quarry');
  const riversandItems = PRICE_ITEMS.filter((i) => i.category === 'riversand');
  const fillingItems = PRICE_ITEMS.filter((i) => i.category === 'filling');
  const sandItems = PRICE_ITEMS.filter((i) => i.category === 'sand');

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
            Pricing Preview
          </h2>
          <p className="text-sm text-gray-500">
            Selected building material supply prices based on a{' '}
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
              Tipper Truck Trip (20m³)
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
              <span>Volume Calculator</span>
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

        {/* 4 Price Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Price Card 1: Quarry Stones */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:border-[#EB4D23]/40 transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EB4D23]"></span>
                  <h4 className="font-bold text-gray-900 text-base">Quarry Stones</h4>
                </div>
                <span className="text-[11px] font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md uppercase">
                  [{unitLabels[activeUnit].short}]
                </span>
              </div>

              <div className="space-y-4">
                {quarryItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-1 group">
                    <div>
                      <p className="font-bold text-sm text-gray-800 group-hover:text-[#EB4D23] transition-colors">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        Per [{unitLabels[activeUnit].short}]
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-base text-gray-900 font-mono tabular-nums">
                        {item.prices[activeUnit]}
                      </span>
                      <a
                        className="w-7 h-7 rounded-lg bg-green-50 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition text-xs font-bold shadow-xs"
                        href={getWhatsAppLink(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Order via WhatsApp"
                      >
                        W
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price Card 2: Riversand */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:border-[#EB4D23]/40 transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EB4D23]"></span>
                  <h4 className="font-bold text-gray-900 text-base">Riversand</h4>
                </div>
                <span className="text-[11px] font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md uppercase">
                  [{unitLabels[activeUnit].short}]
                </span>
              </div>

              <div className="py-2">
                {riversandItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-1 group">
                    <div>
                      <p className="font-bold text-sm text-gray-800 group-hover:text-[#EB4D23] transition-colors">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        Per [{unitLabels[activeUnit].short}]
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-base text-gray-900 font-mono tabular-nums">
                        {item.prices[activeUnit]}
                      </span>
                      <a
                        className="w-7 h-7 rounded-lg bg-green-50 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition text-xs font-bold shadow-xs"
                        href={getWhatsAppLink(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Order via WhatsApp"
                      >
                        W
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FFF7F5] rounded-xl p-3.5 border border-[#EB4D23]/10 text-xs text-gray-600 mt-6">
              <span className="font-bold text-[#EB4D23] block mb-1">Standard Delivery Notice</span>
              Clean, unadulterated river sand sourced from premium dredging sites, washed and ready
              for high-strength casting.
            </div>
          </div>

          {/* Price Card 3: Filling Sand */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:border-[#EB4D23]/40 transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EB4D23]"></span>
                  <h4 className="font-bold text-gray-900 text-base">Filling Sand</h4>
                </div>
                <span className="text-[11px] font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md uppercase">
                  [{unitLabels[activeUnit].short}]
                </span>
              </div>

              <div className="space-y-4">
                {fillingItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-1 group">
                    <div>
                      <p className="font-bold text-sm text-gray-800 group-hover:text-[#EB4D23] transition-colors">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        Per [{unitLabels[activeUnit].short}]
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-base text-gray-900 font-mono tabular-nums">
                        {item.prices[activeUnit]}
                      </span>
                      <a
                        className="w-7 h-7 rounded-lg bg-green-50 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition text-xs font-bold shadow-xs"
                        href={getWhatsAppLink(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Order via WhatsApp"
                      >
                        W
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price Card 4: Sand */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:border-[#EB4D23]/40 transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EB4D23]"></span>
                  <h4 className="font-bold text-gray-900 text-base">Sand</h4>
                </div>
                <span className="text-[11px] font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md uppercase">
                  [{unitLabels[activeUnit].short}]
                </span>
              </div>

              <div className="space-y-4">
                {sandItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-1 group">
                    <div>
                      <p className="font-bold text-sm text-gray-800 group-hover:text-[#EB4D23] transition-colors">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        Per [{unitLabels[activeUnit].short}]
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-base text-gray-900 font-mono tabular-nums">
                        {item.prices[activeUnit]}
                      </span>
                      <a
                        className="w-7 h-7 rounded-lg bg-green-50 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition text-xs font-bold shadow-xs"
                        href={getWhatsAppLink(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Order via WhatsApp"
                      >
                        W
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Peach Price Confirmation Notice Box */}
        <div className="bg-[#FFF4ED] border border-[#FDD9C5] rounded-2xl p-4 sm:p-5 flex items-start gap-4 mb-10">
          <div className="w-8 h-8 rounded-full bg-[#EB4D23]/10 text-[#EB4D23] flex items-center justify-center flex-shrink-0 mt-0.5">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            <strong className="text-gray-900 font-bold">Price Confirmation Notice:</strong>{' '}
            Customers are encouraged to contact {COMPANY_DETAILS.name} on{' '}
            <a
              className="font-bold text-[#EB4D23] hover:underline font-mono"
              href={`tel:${COMPANY_DETAILS.phone}`}
            >
              {COMPANY_DETAILS.phone}
            </a>{' '}
            or via WhatsApp on{' '}
            <a
              className="font-bold text-[#25D366] hover:underline font-mono"
              href="https://wa.me/233244520024"
              target="_blank"
              rel="noopener noreferrer"
            >
              {COMPANY_DETAILS.phone}
            </a>{' '}
            to confirm current pricing and delivery schedules before placing an order.
          </p>
        </div>

        {/* Full Price List CTA */}
        <div className="text-center">
          <button
            onClick={onOpenPriceListModal}
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition cursor-pointer"
          >
            <span>View Full Price List</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
