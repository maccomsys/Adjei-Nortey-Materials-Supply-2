import React, { useState } from 'react';
import { Camera, Eye, X, Filter, Truck, ShieldCheck, Building2, Layers } from 'lucide-react';
import { GALLERY_ITEMS, SERVICES, COMPANY_DETAILS } from '../data/materialsData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'quarry' | 'fleet' | 'projects' | 'sand'>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

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
              <span>Haulage &amp; Supply Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 mb-3">
              Reliable Logistics &amp; Earthmoving
            </h2>
            <p className="text-sm text-gray-500">
              End-to-end site material supply solutions managed with punctual dispatch and fleet coordination.
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
                <span>Site &amp; Fleet Gallery</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 leading-tight">
                Our Fleet In Action
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-2xl border border-gray-200 shadow-xs">
              {(
                [
                  { id: 'all', label: 'All Photos' },
                  { id: 'fleet', label: 'Truck Fleet' },
                  { id: 'quarry', label: 'Quarry Aggregates' },
                  { id: 'sand', label: 'River & Filling Sand' },
                  { id: 'projects', label: 'Client Sites' },
                ] as const
              ).map((tab) => (
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
                onClick={() => setActiveImage(item)}
                className="group relative rounded-3xl overflow-hidden bg-white shadow-xs border border-gray-200/80 cursor-pointer h-72"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end text-white">
                  <span className="text-[10px] tracking-widest uppercase font-bold text-[#EB4D23] mb-1">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-bold text-sm leading-snug font-display text-white">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-300 line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-[#080e21] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-white/10 text-white">
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  className="w-full h-full object-contain max-h-[60vh]"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-[#080e21]">
                <span className="text-xs uppercase tracking-wider font-bold text-[#EB4D23]">
                  {activeImage.category}
                </span>
                <h3 className="text-xl font-bold font-display mt-1">{activeImage.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                  {activeImage.description}
                </p>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    Direct supply delivery via {COMPANY_DETAILS.shortName}
                  </span>
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="px-5 py-2 rounded-xl bg-[#EB4D23] hover:bg-[#D03B13] text-white text-xs font-bold transition"
                  >
                    Order this Spec
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
