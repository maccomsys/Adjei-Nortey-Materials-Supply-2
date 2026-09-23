import React from 'react';
import { CheckCircle2, X, Phone, ArrowRight, MessageSquare, Truck, Clock } from 'lucide-react';
import { COMPANY_DETAILS, PRICE_ITEMS } from '../data/materialsData';
import { QuoteRequest } from '../types';

interface QuoteSuccessModalProps {
  quote: QuoteRequest | null;
  onClose: () => void;
}

export const QuoteSuccessModal: React.FC<QuoteSuccessModalProps> = ({ quote, onClose }) => {
  if (!quote) return null;

  const material = PRICE_ITEMS.find((p) => p.id === quote.materialId) || PRICE_ITEMS[0];
  const refCode = `AN-${Math.floor(100000 + Math.random() * 900000)}`;

  const getWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello ${COMPANY_DETAILS.name} [Ref: ${refCode}],\n\nI just requested a quote on your website:\n- Client: ${quote.fullName}\n- Phone: ${quote.phone}\n- Material: ${material.name}\n- Quantity: ${quote.quantity || 1} Trips\n- Site: ${quote.location || 'Accra / Tema Corridor'}\n\nPlease confirm availability and dispatch ETA.`
    );
    return `https://wa.me/233244520024?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 text-center">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="text-[10px] tracking-widest uppercase font-bold text-[#EB4D23]">
          Quote Request Received &middot; Ref #{refCode}
        </span>
        <h3 className="text-2xl font-black text-gray-900 font-display mt-1">
          Thank You, {quote.fullName}!
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          Your quote for <strong>{material.name}</strong> ({quote.quantity || 1} Trips) has been
          registered. A dispatch coordinator will call you within 15 minutes.
        </p>

        {/* Order Details Card */}
        <div className="my-6 bg-gray-50 p-4 rounded-2xl border border-gray-200 text-left space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-500">Selected Material:</span>
            <span className="font-bold text-gray-900">{material.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Quantity / Unit:</span>
            <span className="font-bold text-gray-900">{quote.quantity || 1} Tipper Truck Trips (20m³)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Contact Number:</span>
            <span className="font-bold text-gray-900 font-mono">{quote.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Delivery Zone:</span>
            <span className="font-bold text-gray-900">{quote.location || 'Accra / Tema'}</span>
          </div>
        </div>

        {/* Instant WhatsApp dispatch */}
        <div className="space-y-2.5">
          <a
            href={getWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl text-xs shadow-md transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Fast-Track via WhatsApp Now</span>
          </a>

          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl text-xs transition"
          >
            <Phone className="w-4 h-4" />
            <span>Call Hotline ({COMPANY_DETAILS.phone})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
