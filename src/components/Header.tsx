import React, { useState, useEffect } from 'react';
import {
  Layers,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Calculator,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/materialsData';

interface HeaderProps {
  currentView: 'home' | 'about' | 'materials' | 'quarry-stones' | 'services' | 'prices' | 'contact' | 'terms' | 'privacy';
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateMaterials: () => void;
  onNavigateServices: () => void;
  onNavigatePrices: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
  onOpenCalculator: () => void;
  onOpenPriceList: () => void;
  onSelectMaterial: (materialId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigateHome,
  onNavigateAbout,
  onNavigateServices,
  onNavigatePrices,
  onNavigateMaterials,
  onNavigateGallery,
  onNavigateContact,
  onOpenCalculator,
  onOpenPriceList,
  onSelectMaterial,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [materialsDropdownOpen, setMaterialsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`bg-white sticky top-0 z-40 transition-shadow duration-200 border-b border-gray-200/80 ${
        scrolled ? 'shadow-md' : 'shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 text-left uppercase group cursor-pointer"
        >
          <span className="w-10 h-10 rounded-lg bg-[#EB4D23] flex items-center justify-center text-white shadow-md shadow-[#EB4D23]/20 group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5 stroke-[2.2]" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[#080e21] font-black tracking-tight font-display text-lg sm:text-xl">
              {COMPANY_DETAILS.shortName.toUpperCase()}
            </span>
            <span className="text-[10px] text-gray-500 tracking-widest font-mono font-semibold uppercase mt-0.5">
              MATERIALS DISPATCH
            </span>
          </span>
        </button>

        {/* Desktop Navigation Cluster */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold tracking-wide text-gray-700">
          <button
            onClick={onNavigateHome}
            className={`transition-colors duration-150 py-2 cursor-pointer ${
              currentView === 'home'
                ? 'text-[#EB4D23] font-bold border-b-2 border-[#EB4D23]'
                : 'text-gray-700 hover:text-[#EB4D23]'
            }`}
          >
            Home
          </button>

          {/* About View Button */}
          <button
            onClick={onNavigateAbout}
            className={`transition-colors duration-150 py-2 cursor-pointer ${
              currentView === 'about'
                ? 'text-[#EB4D23] font-bold border-b-2 border-[#EB4D23]'
                : 'text-gray-700 hover:text-[#EB4D23]'
            }`}
          >
            About
          </button>

          {/* Materials Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMaterialsDropdownOpen(true)}
            onMouseLeave={() => setMaterialsDropdownOpen(false)}
          >
            <button
              onClick={() => {
                onNavigateMaterials();
                setMaterialsDropdownOpen(!materialsDropdownOpen);
              }}
              className={`flex items-center gap-1 transition-colors py-2 cursor-pointer ${
                currentView === 'materials' || currentView === 'quarry-stones'
                  ? 'text-[#EB4D23] font-bold border-b-2 border-[#EB4D23]'
                  : 'text-gray-700 hover:text-[#EB4D23]'
              }`}
            >
              <span>Materials</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  currentView === 'materials' || currentView === 'quarry-stones' ? 'text-[#EB4D23]' : ''
                } ${materialsDropdownOpen ? 'rotate-180 text-[#EB4D23]' : ''}`}
              />
            </button>
            {materialsDropdownOpen && (
              <div className="absolute left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <button
                  onClick={() => {
                    onSelectMaterial('quarry-3-4');
                    setMaterialsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-[#FFF2EE] hover:text-[#EB4D23] font-medium transition-colors cursor-pointer"
                >
                  <span className="font-semibold block text-gray-900">Quarry Stones</span>
                  <span className="text-[11px] text-gray-400">3/4", 1", 3/8", 5/8" Aggregates</span>
                </button>
                <button
                  onClick={() => {
                    onSelectMaterial('riversand-clean');
                    setMaterialsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-[#FFF2EE] hover:text-[#EB4D23] font-medium transition-colors cursor-pointer"
                >
                  <span className="font-semibold block text-gray-900">Riversand</span>
                  <span className="text-[11px] text-gray-400">Clean washed dredged sand</span>
                </button>
                <button
                  onClick={() => {
                    onSelectMaterial('filling-grade-1');
                    setMaterialsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-[#FFF2EE] hover:text-[#EB4D23] font-medium transition-colors cursor-pointer"
                >
                  <span className="font-semibold block text-gray-900">Graded Filling Sand</span>
                  <span className="text-[11px] text-gray-400">Grade 1 &amp; Laterite foundation fill</span>
                </button>
                <button
                  onClick={() => {
                    onSelectMaterial('sand-smooth');
                    setMaterialsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-[#FFF2EE] hover:text-[#EB4D23] font-medium transition-colors cursor-pointer"
                >
                  <span className="font-semibold block text-gray-900">Smooth &amp; Rough Sand</span>
                  <span className="text-[11px] text-gray-400">Plastering &amp; block laying sand</span>
                </button>
              </div>
            )}
          </div>

          {/* Services Active / Dropdown Item */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => {
                onNavigateServices();
                setServicesDropdownOpen(!servicesDropdownOpen);
              }}
              className={`flex items-center gap-1 transition-colors py-2 cursor-pointer ${
                currentView === 'services'
                  ? 'text-[#EB4D23] font-bold border-b-2 border-[#EB4D23]'
                  : 'text-gray-700 hover:text-[#EB4D23]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-[#EB4D23]' : ''
                }`}
              />
            </button>
            {servicesDropdownOpen && (
              <div className="absolute left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <button
                  onClick={() => {
                    onNavigateServices();
                    setServicesDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-[#FFF2EE] hover:text-[#EB4D23] font-medium transition-colors cursor-pointer"
                >
                  <span className="font-semibold block text-gray-900">Building Material Supply</span>
                  <span className="text-[11px] text-gray-400">Quarry stones, riversand, filling</span>
                </button>
                <button
                  onClick={() => {
                    onNavigateServices();
                    setServicesDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-[#FFF2EE] hover:text-[#EB4D23] font-medium transition-colors cursor-pointer"
                >
                  <span className="font-semibold block text-gray-900">Bulk Tipper Fleet Logistics</span>
                  <span className="text-[11px] text-gray-400">10m³ to 20m³ direct site haulage</span>
                </button>
                <button
                  onClick={() => {
                    onNavigateServices();
                    setServicesDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-[#FFF2EE] hover:text-[#EB4D23] font-medium transition-colors cursor-pointer"
                >
                  <span className="font-semibold block text-gray-900">Site Landfilling &amp; Earthmoving</span>
                  <span className="text-[11px] text-gray-400">Excavation &amp; foundation leveling</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={onNavigatePrices}
            className={`transition-colors duration-150 py-2 cursor-pointer ${
              currentView === 'prices'
                ? 'text-[#EB4D23] font-bold border-b-2 border-[#EB4D23]'
                : 'text-gray-700 hover:text-[#EB4D23]'
            }`}
          >
            Prices
          </button>
          <button
            onClick={onNavigateGallery}
            className="hover:text-[#EB4D23] transition-colors py-2 cursor-pointer"
          >
            Gallery
          </button>
          <button
            onClick={onNavigateContact}
            className={`transition-colors duration-150 py-2 cursor-pointer ${
              currentView === 'contact'
                ? 'text-[#EB4D23] font-bold border-b-2 border-[#EB4D23]'
                : 'text-gray-700 hover:text-[#EB4D23]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Area: Icons and Trailing CTA */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="hidden sm:flex items-center space-x-1.5 border-r border-gray-200 pr-3">
            <a
              aria-label="Call Dispatch"
              className="p-2 text-gray-600 hover:text-[#EB4D23] rounded-full hover:bg-gray-100 transition-colors"
              href={`tel:${COMPANY_DETAILS.phone}`}
              title="Call Dispatch"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              aria-label="Mail Dispatch"
              className="p-2 text-gray-600 hover:text-[#EB4D23] rounded-full hover:bg-gray-100 transition-colors"
              href={`mailto:${COMPANY_DETAILS.email}`}
              title="Email Dispatch"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenCalculator}
              aria-label="Schedule / Calculator"
              className="p-2 text-gray-600 hover:text-[#EB4D23] rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              title="Trip Calculator"
            >
              <Clock className="w-4 h-4" />
            </button>
          </div>

          <a
            className="bg-[#EB4D23] hover:bg-[#D03B13] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full shadow-md shadow-[#EB4D23]/20 hover:shadow-lg active:scale-95 transition-all inline-flex items-center gap-2"
            href={`tel:${COMPANY_DETAILS.phone}`}
          >
            <span>Book Now →</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Collapsible Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-5 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <button
            className={`block w-full text-left font-bold py-1.5 cursor-pointer ${
              currentView === 'home' ? 'text-[#EB4D23]' : 'text-gray-700'
            }`}
            onClick={() => {
              onNavigateHome();
              setMobileMenuOpen(false);
            }}
          >
            Home
          </button>
          <button
            className={`block w-full text-left font-bold py-1.5 cursor-pointer ${
              currentView === 'about' ? 'text-[#EB4D23]' : 'text-gray-700'
            }`}
            onClick={() => {
              onNavigateAbout();
              setMobileMenuOpen(false);
            }}
          >
            About
          </button>
          <button
            className={`block w-full text-left font-bold py-1.5 cursor-pointer ${
              currentView === 'materials' ? 'text-[#EB4D23]' : 'text-gray-700'
            }`}
            onClick={() => {
              onNavigateMaterials();
              setMobileMenuOpen(false);
            }}
          >
            Materials Catalog
          </button>
          <button
            className={`block w-full text-left font-bold py-1.5 cursor-pointer ${
              currentView === 'services' ? 'text-[#EB4D23]' : 'text-gray-700'
            }`}
            onClick={() => {
              onNavigateServices();
              setMobileMenuOpen(false);
            }}
          >
            Services
          </button>
          <button
            className={`block w-full text-left font-bold py-1.5 cursor-pointer ${
              currentView === 'prices' ? 'text-[#EB4D23]' : 'text-gray-700'
            }`}
            onClick={() => {
              onNavigatePrices();
              setMobileMenuOpen(false);
            }}
          >
            Prices &amp; Rate Card
          </button>
          <button
            className="block w-full text-left text-gray-700 hover:text-[#EB4D23] font-semibold py-1.5 cursor-pointer"
            onClick={() => {
              onNavigateGallery();
              setMobileMenuOpen(false);
            }}
          >
            Site &amp; Fleet Gallery
          </button>
          <button
            className={`block w-full text-left font-bold py-1.5 cursor-pointer ${
              currentView === 'contact' ? 'text-[#EB4D23]' : 'text-gray-700'
            }`}
            onClick={() => {
              onNavigateContact();
              setMobileMenuOpen(false);
            }}
          >
            Contact
          </button>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full inline-flex justify-center items-center gap-2 bg-gray-100 text-gray-800 font-bold py-2.5 px-4 rounded-xl text-sm cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#EB4D23]" />
              <span>Concrete &amp; Trip Calculator</span>
            </button>
            <a
              className="w-full inline-flex justify-center items-center gap-2 bg-[#EB4D23] text-white font-bold py-3 px-4 rounded-full shadow-md text-sm"
              href={`tel:${COMPANY_DETAILS.phone}`}
            >
              <span>Book Now →</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
