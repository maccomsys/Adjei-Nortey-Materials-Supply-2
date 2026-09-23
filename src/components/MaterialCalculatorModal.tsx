import React, { useState } from 'react';
import { Calculator, X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, PRICE_ITEMS } from '../data/materialsData';

interface MaterialCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderWithCalc: (materialName: string, trips: number) => void;
}

export const MaterialCalculatorModal: React.FC<MaterialCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOrderWithCalc,
}) => {
  const [projectType, setProjectType] = useState<'slab' | 'foundation' | 'plaster' | 'filling'>('slab');
  const [length, setLength] = useState<number>(15);
  const [width, setWidth] = useState<number>(10);
  const [thickness, setThickness] = useState<number>(0.15); // meters (150mm)

  if (!isOpen) return null;

  // Calculations
  const area = length * width;
  const volumeM3 = area * thickness;
  const TRUCK_CAPACITY_M3 = 20; // 20m³ tipper truck

  let sandTrips = 0;
  let stoneTrips = 0;
  let fillingTrips = 0;
  let summaryText = '';

  if (projectType === 'slab') {
    // 1:2:4 concrete mix ratio rule of thumb
    // ~0.45 m3 sand and ~0.9 m3 stone per m3 concrete (+ 15% wastage)
    const totalConcrete = volumeM3 * 1.15;
    sandTrips = Math.ceil((totalConcrete * 0.45) / TRUCK_CAPACITY_M3);
    stoneTrips = Math.ceil((totalConcrete * 0.9) / TRUCK_CAPACITY_M3);
    summaryText = `For a ${length}m × ${width}m slab (${thickness * 100}cm thick): Volume ≈ ${volumeM3.toFixed(1)} m³.`;
  } else if (projectType === 'foundation') {
    const totalVolume = volumeM3 * 1.2;
    sandTrips = Math.ceil((totalVolume * 0.4) / TRUCK_CAPACITY_M3);
    stoneTrips = Math.ceil((totalVolume * 0.85) / TRUCK_CAPACITY_M3);
    summaryText = `For footings & trench foundations (${area.toFixed(0)}m² footprint): Volume ≈ ${volumeM3.toFixed(1)} m³.`;
  } else if (projectType === 'filling') {
    // Compaction factor ~1.3
    const compactedVolume = volumeM3 * 1.3;
    fillingTrips = Math.ceil(compactedVolume / TRUCK_CAPACITY_M3);
    summaryText = `For site backfilling & leveling (${area.toFixed(0)}m² at ${thickness * 100}cm depth): Volume ≈ ${volumeM3.toFixed(1)} m³.`;
  } else {
    // Plastering: ~0.025m thickness on wall area
    sandTrips = Math.ceil((area * 0.025 * 1.15) / TRUCK_CAPACITY_M3);
    summaryText = `For wall plastering/rendering on ${area.toFixed(0)}m² surface area.`;
  }

  const estStoneCost = stoneTrips * 2850;
  const estSandCost = sandTrips * 3100;
  const estFillingCost = fillingTrips * 1850;
  const totalEstimatedCost = estStoneCost + estSandCost + estFillingCost;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#FFF2EE] text-[#EB4D23] flex items-center justify-center font-bold">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-gray-900 font-display">
              Concrete &amp; Material Trip Estimator
            </h3>
            <p className="text-xs text-gray-500">
              Calculate exact 20m³ tipper truck quantities needed for your construction site.
            </p>
          </div>
        </div>

        {/* Project Selector */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Select Construction Task
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(
                [
                  { id: 'slab', label: 'Floor Slab / Decking' },
                  { id: 'foundation', label: 'Foundation Footings' },
                  { id: 'filling', label: 'Site Landfilling' },
                  { id: 'plaster', label: 'Wall Plastering' },
                ] as const
              ).map((type) => (
                <button
                  key={type.id}
                  onClick={() => {
                    setProjectType(type.id);
                    if (type.id === 'slab') setThickness(0.15);
                    if (type.id === 'foundation') setThickness(0.4);
                    if (type.id === 'filling') setThickness(0.3);
                    if (type.id === 'plaster') setThickness(0.02);
                  }}
                  className={`p-2.5 rounded-xl text-xs font-bold text-center border transition cursor-pointer ${
                    projectType === type.id
                      ? 'bg-[#EB4D23] text-white border-[#EB4D23] shadow-xs'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dimension Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-200">
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">
                Length (meters)
              </label>
              <input
                type="number"
                min={1}
                step={0.5}
                value={length}
                onChange={(e) => setLength(Number(e.target.value) || 1)}
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#EB4D23]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">
                Width (meters)
              </label>
              <input
                type="number"
                min={1}
                step={0.5}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value) || 1)}
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#EB4D23]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">
                Thickness / Depth (m)
              </label>
              <input
                type="number"
                min={0.01}
                step={0.01}
                value={thickness}
                onChange={(e) => setThickness(Number(e.target.value) || 0.05)}
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#EB4D23]"
              />
            </div>
          </div>

          {/* Results Output Box */}
          <div className="bg-[#FFF7F5] border border-[#EB4D23]/25 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#EB4D23] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Recommended Supply Trips
              </span>
              <span className="text-xs text-gray-500 font-medium">Standard 20m³ Trucks</span>
            </div>

            <p className="text-xs text-gray-600">{summaryText}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {stoneTrips > 0 && (
                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">3/4" Quarry Stones</span>
                    <span className="text-[11px] text-gray-500 font-mono">GH₵ 2,850 / trip</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-[#EB4D23] font-mono tabular-nums">
                      {stoneTrips} {stoneTrips === 1 ? 'Trip' : 'Trips'}
                    </span>
                  </div>
                </div>
              )}

              {sandTrips > 0 && (
                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">
                      {projectType === 'plaster' ? 'Smooth Plastering Sand' : 'Washed Riversand'}
                    </span>
                    <span className="text-[11px] text-gray-500 font-mono">
                      {projectType === 'plaster' ? 'GH₵ 2,400' : 'GH₵ 3,100'} / trip
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-[#EB4D23] font-mono tabular-nums">
                      {sandTrips} {sandTrips === 1 ? 'Trip' : 'Trips'}
                    </span>
                  </div>
                </div>
              )}

              {fillingTrips > 0 && (
                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between sm:col-span-2">
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">
                      Grade 1 / Laterite Filling Sand
                    </span>
                    <span className="text-[11px] text-gray-500 font-mono">GH₵ 1,850 / trip</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-[#EB4D23] font-mono tabular-nums">
                      {fillingTrips} {fillingTrips === 1 ? 'Trip' : 'Trips'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-[#EB4D23]/20 flex items-center justify-between">
              <span className="text-xs text-gray-600 font-semibold">Total Estimated Supply:</span>
              <span className="text-xl font-extrabold text-gray-900 font-mono tabular-nums">
                GH₵ {totalEstimatedCost.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-xs hover:bg-gray-50 cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onOrderWithCalc(
                `${projectType.toUpperCase()} Materials (Stones: ${stoneTrips} trips, Sand: ${sandTrips + fillingTrips} trips)`,
                stoneTrips + sandTrips + fillingTrips
              );
              onClose();
            }}
            className="px-6 py-3 rounded-xl bg-[#EB4D23] hover:bg-[#D03B13] text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md shadow-[#EB4D23]/20"
          >
            <span>Proceed With This Order</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
