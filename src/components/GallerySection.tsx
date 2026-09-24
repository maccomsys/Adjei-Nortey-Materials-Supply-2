import React, { useState } from 'react';
import { Camera, Eye, X, Filter, Truck, ShieldCheck, Building2, Layers } from 'lucide-react';
import { GALLERY_ITEMS, SERVICES, COMPANY_DETAILS } from '../data/materialsData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const filteredItems =
    selectedFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <>
      {/* Services Section */}
      <section className="py-20 bg-white border-t border-gray-200/60" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-[#EB4D23] font-bold text-xs uppercase tracking-widest mb-2">
              <Truck className="w-4 h-4" />
              <span>Supply &amp; Logistics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 mb-3">
              Building Material Supply Services
            </h2>
            <p className="text-sm text-gray-500">
              Direct site material supply solutions managed with punctual dispatch and fleet coordination across {COMPANY_DETAILS.location}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((srv, idx) => (
              <div
                key={srv.id}
                className="bg-gray-50/80 rounded-3xl p-6 border border-gray-200/70 hover:border-[#EB4D23]/30 hover:bg-white transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs text-[#EB4D23] flex items-center justify-center mb-5 group-hover:bg-[#EB4D23] group-hover:text-white transition-colors">
                    {idx === 0 && <Truck className="w-6 h-6" />}
                    {idx === 1 && <Layers className="w-6 h-6" />}
                    {idx === 2 && <Building2 className="w-6 h-6" />}
                    {idx === 3 && <ShieldCheck className="w-6 h-6" />}
                  </div>
                  <h3 className="font-extrabold text-base text-gray-900 mb-2 font-display">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-200/50 mt-6 flex items-center justify-between text-[11px] font-bold text-[#EB4D23]">
                  <span>Available 24/7</span>
                  <span className="font-mono text-gray-400">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 lg:py-24 bg-gray-50/60 border-t border-gray-200/60" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-[#EB4D23] font-bold text-xs uppercase tracking-widest mb-2">
                <Camera className="w-4 h-4" />
                <span>Materials Gallery</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 leading-tight">
                Supplied Building Materials
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-2xl border border-gray-200 shadow-xs">
              {[
                { id: 'all', label: 'All Photos' },
                { id: 'boulders', label: 'Boulders' },
                { id: 'quarry-stones', label: 'Quarry Stones' },
                { id: 'quarry-dust', label: 'Quarry Dust' },
                { id: 'riversand', label: 'Riversand' },
                { id: 'filling', label: 'Filling & Laterite' },
                { id: 'stones', label: 'Stones' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    selectedFilter === tab.id
                      ? 'bg-[#080e21] text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveItem(item);
                  setActiveImageIdx(0);
                }}
                className="group relative rounded-3xl overflow-hidden bg-gray-200 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer h-72 border border-gray-200/80"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 inset-x-4 text-white">
                  <span className="text-[10px] uppercase font-bold text-[#EB4D23] bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs block w-max mb-1">
                    {item.location}
                  </span>
                  <h3 className="font-extrabold text-base leading-tight font-display mb-0.5">
                    {item.title}
                  </h3>
                  {item.images && item.images.length > 1 && (
                    <span className="text-[11px] text-gray-300">
                      {item.images.length} Photos available
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative max-w-4xl w-full bg-[#080e21] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-80 sm:h-[480px] w-full bg-black">
              <img
                src={activeItem.images ? activeItem.images[activeImageIdx] || activeItem.image : activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* If multiple photos, show switcher */}
            {activeItem.images && activeItem.images.length > 1 && (
              <div className="p-3 bg-black/80 flex gap-2 justify-center border-t border-white/10">
                {activeItem.images.map((imgUrl, iIdx) => (
                  <button
                    key={iIdx}
                    onClick={() => setActiveImageIdx(iIdx)}
                    className={`w-14 h-11 rounded-lg overflow-hidden border-2 transition cursor-pointer ${
                      activeImageIdx === iIdx ? 'border-[#EB4D23] scale-105' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}

            <div className="p-6 bg-[#080e21] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#EB4D23] tracking-widest block mb-1">
                  {activeItem.location}
                </span>
                <h4 className="text-xl font-bold font-display">{activeItem.title}</h4>
                <p className="text-xs text-gray-400 mt-1">{activeItem.description}</p>
              </div>

              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="bg-[#EB4D23] hover:bg-[#d63f17] text-white px-5 py-2.5 rounded-full text-xs font-bold transition whitespace-nowrap shadow-md"
              >
                Order This Material
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
