import React, { useState } from 'react';
import { X, Printer, Phone, Download, CheckCircle2, ShieldAlert } from 'lucide-react';
import { COMPANY_DETAILS, PRICE_ITEMS } from '../data/materialsData';
import { PriceItem } from '../types';

interface FullPriceListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMaterial: (item: PriceItem) => void;
}

export const FullPriceListModal: React.FC<FullPriceListModalProps> = ({
  isOpen,
  onClose,
  onSelectMaterial,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[92vh] overflow-y-auto print:max-h-none print:shadow-none print:border-none">
        <div className="flex items-start justify-between pb-4 border-b border-gray-100 print:border-black">
          <div>
            <span className="text-[10px] tracking-widest uppercase font-bold text-[#EB4D23] block">
              Official Rate Card &middot; 2026 Schedule
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-display">
              {COMPANY_DETAILS.name} Price List
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Rates for 20m³ Tipper Truck Delivery, Metric Tonnage, and m³ site delivery.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition print:hidden cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Price Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700 font-bold border-b border-gray-200 uppercase text-[11px] tracking-wider">
                <th className="py-3 px-4 rounded-l-xl">Material Grade &amp; Specification</th>
                <th className="py-3 px-3">Category</th>
                <th className="py-3 px-3">Per Truck Trip (20m³)</th>
                <th className="py-3 px-3">Per Tonne</th>
                <th className="py-3 px-3">Per m³</th>
                <th className="py-3 px-4 text-right rounded-r-xl print:hidden">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {PRICE_ITEMS.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-gray-900">
                    <div>{item.name}</div>
                    <div className="text-[11px] text-gray-400 font-normal">{item.subName}</div>
                  </td>
                  <td className="py-3.5 px-3 uppercase text-[10px] font-bold text-gray-500">
                    {item.category}
                  </td>
                  <td className="py-3.5 px-3 font-mono font-bold text-gray-900 tabular-nums">
                    {item.prices.trip}
                  </td>
                  <td className="py-3.5 px-3 font-mono font-medium text-gray-600 tabular-nums">
                    {item.prices.tonne}
                  </td>
                  <td className="py-3.5 px-3 font-mono font-medium text-gray-600 tabular-nums">
                    {item.prices.m3}
                  </td>
                  <td className="py-3.5 px-4 text-right print:hidden">
                    <button
                      onClick={() => {
                        onSelectMaterial(item);
                        onClose();
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#EB4D23] hover:bg-[#D03B13] text-white text-xs font-bold transition cursor-pointer"
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notice */}
        <div className="mt-6 bg-[#FFF7F5] p-4 rounded-2xl border border-[#EB4D23]/20 flex items-start gap-3 text-xs text-gray-600">
          <ShieldAlert className="w-5 h-5 text-[#EB4D23] flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-gray-900 font-bold block mb-0.5">
              Haulage Distance &amp; Site Accessibility Note:
            </strong>
            Prices quoted are baseline rates for the Greater Accra / Tema metropolitan zone. Out-of-city
            and heavy off-road deliveries are subject to standard route adjustments. Contact dispatch
            at <span className="font-bold text-[#EB4D23] font-mono">{COMPANY_DETAILS.phone}</span>.
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Rate Card</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition cursor-pointer"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Download className="w-4 h-4" />}
              <span>{copied ? 'Link Copied' : 'Share Rate Card'}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#EB4D23] hover:bg-[#D03B13] text-white text-xs font-bold transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Dispatch Desk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
