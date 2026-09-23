import React from 'react';
import { X, CheckCircle2, ArrowRight, Phone, ShieldCheck, Truck, Layers } from 'lucide-react';
import { COMPANY_DETAILS, IMAGES, PRICE_ITEMS } from '../data/materialsData';
import { PriceItem } from '../types';

interface MaterialDetailModalProps {
  category: 'quarry' | 'riversand' | 'filling' | 'sand' | null;
  onClose: () => void;
  onSelectForQuote: (item: PriceItem) => void;
}

export const MaterialDetailModal: React.FC<MaterialDetailModalProps> = ({
  category,
  onClose,
  onSelectForQuote,
}) => {
  if (!category) return null;

  const titleMap = {
    quarry: {
      title: 'Quarry Stones & Crushed Aggregates',
      subtitle: 'Graded granite crushed stone sizes: 3/4", 1", 3/8", 5/8"',
      image: IMAGES.quarryStones,
      badge: 'Granite Crushed Stone',
    },
    riversand: {
      title: 'Dredged River Sand',
      subtitle: 'Clean washed river sand for structural casting, columns and slab construction',
      image: IMAGES.riversand,
      badge: 'Natural Dredged Sand',
    },
    filling: {
      title: 'Filling Sand & Compaction Laterite',
      subtitle: 'Engineered site leveling, foundation backfilling and base gravel',
      image: IMAGES.fillingSand,
      badge: 'Foundation & Earthworks',
    },
    sand: {
      title: 'Graded Building & Masonry Sand',
      subtitle: 'Smooth plastering sand, medium mortar sand, and rough rendering sand',
      image: IMAGES.riversand,
      badge: 'Masonry & Plastering',
    },
  };

  const currentMeta = titleMap[category];
  const items = PRICE_ITEMS.filter((i) => {
    if (category === 'quarry') return i.category === 'quarry';
    if (category === 'riversand') return i.category === 'riversand';
    if (category === 'filling') return i.category === 'filling';
    return i.category === 'sand';
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row gap-6 items-start pb-6 border-b border-gray-100">
          <div className="w-full sm:w-44 h-36 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 shadow-md">
            <img
              src={currentMeta.image}
              alt={currentMeta.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-[10px] tracking-widest uppercase font-bold text-[#EB4D23] block mb-1">
              {currentMeta.badge}
            </span>
            <h2 className="text-2xl font-black text-gray-900 font-display">
              {currentMeta.title}
            </h2>
            <p className="text-xs text-gray-500 mt-1">{currentMeta.subtitle}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 bg-[#FFF2EE] text-[#EB4D23] px-2.5 py-1 rounded-lg font-bold">
                <Truck className="w-3.5 h-3.5" /> 20m³ Tipper Delivery
              </span>
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2.5 py-1 rounded-lg font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Tested Compressive Grade
              </span>
            </div>
          </div>
        </div>

        {/* Specific Items List */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Available Grades &amp; Rates
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#EB4D23]/40 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-md">
                  <h4 className="font-extrabold text-sm text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                  <div className="text-[11px] text-gray-600 pt-0.5">
                    <strong className="text-gray-700">Best for:</strong> {item.recommendedUse}
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
                  <div className="text-right">
                    <span className="text-base font-black text-[#EB4D23] font-mono tabular-nums block">
                      {item.prices.trip}
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase font-semibold">
                      Per Truck Trip
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      onSelectForQuote(item);
                      onClose();
                    }}
                    className="px-4 py-2 rounded-xl bg-[#EB4D23] hover:bg-[#D03B13] text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <span>Request Supply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Need custom blending or laboratory sample? Call our site engineer.
          </span>
          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            className="text-xs font-bold text-[#EB4D23] hover:underline"
          >
            Call {COMPANY_DETAILS.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
