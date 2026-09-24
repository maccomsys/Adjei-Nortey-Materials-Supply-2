import React from 'react';
import { X, CheckCircle2, ArrowRight, Phone, ShieldCheck, Truck, Layers } from 'lucide-react';
import { COMPANY_DETAILS, PRICE_ITEMS, MATERIAL_CATEGORIES } from '../data/materialsData';
import { PriceItem } from '../types';

interface MaterialDetailModalProps {
  category: 'boulders' | 'quarry-stones' | 'quarry-dust' | 'filling' | 'riversand' | 'stones' | null;
  onClose: () => void;
  onSelectForQuote: (item: PriceItem) => void;
}

export const MaterialDetailModal: React.FC<MaterialDetailModalProps> = ({
  category,
  onClose,
  onSelectForQuote,
}) => {
  if (!category) return null;

  const matchedCat = MATERIAL_CATEGORIES.find((c) => c.id === category) || MATERIAL_CATEGORIES[0];

  const matchedItem = PRICE_ITEMS.find((p) => p.id === matchedCat.id) || PRICE_ITEMS[0];

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
          <div className="w-full sm:w-48 h-40 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 shadow-md">
            <img
              src={matchedCat.image}
              alt={matchedCat.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-[10px] tracking-widest uppercase font-bold text-[#EB4D23] block mb-1">
              Building Material Supply
            </span>
            <h2 className="text-2xl font-black text-gray-900 font-display">
              {matchedCat.name}
            </h2>
            <p className="text-xs text-gray-500 mt-1">{matchedCat.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 bg-[#FFF2EE] text-[#EB4D23] px-2.5 py-1 rounded-lg font-bold font-mono">
                {matchedCat.priceDisplay}
              </span>
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2.5 py-1 rounded-lg font-semibold">
                <Truck className="w-3.5 h-3.5" /> Single Trip Load
              </span>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Specifications &amp; Applications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {matchedCat.specs.map((spec, sIdx) => (
              <div key={sIdx} className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#EB4D23] flex-shrink-0" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Multiple Images Preview if available */}
        {matchedCat.images.length > 1 && (
          <div className="mt-6 pt-4 border-t border-gray-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Product Photos ({matchedCat.images.length})
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {matchedCat.images.map((imgUrl, iIdx) => (
                <div key={iIdx} className="h-28 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                  <img src={imgUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-5 py-3 rounded-full transition"
          >
            <Phone className="w-4 h-4 text-[#EB4D23]" />
            <span>Call Dispatch: {COMPANY_DETAILS.phone}</span>
          </a>

          <button
            onClick={() => {
              onSelectForQuote(matchedItem);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EB4D23] hover:bg-[#D03B13] text-white text-xs font-bold px-6 py-3 rounded-full shadow-md transition cursor-pointer"
          >
            <span>Proceed to Order</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
