/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AboutPageScreen } from './components/AboutPageScreen';
import { ServicesPageScreen } from './components/ServicesPageScreen';
import { PricesPageScreen } from './components/PricesPageScreen';
import { MaterialsPageScreen } from './components/MaterialsPageScreen';
import { QuarryStonesPageScreen } from './components/QuarryStonesPageScreen';
import { ContactPageScreen } from './components/ContactPageScreen';
import { TermsPageScreen } from './components/TermsPageScreen';
import { PrivacyPageScreen } from './components/PrivacyPageScreen';
import { MaterialsSection } from './components/MaterialsSection';
import { PricingSection } from './components/PricingSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MaterialCalculatorModal } from './components/MaterialCalculatorModal';
import { FullPriceListModal } from './components/FullPriceListModal';
import { MaterialDetailModal } from './components/MaterialDetailModal';
import { QuoteSuccessModal } from './components/QuoteSuccessModal';
import { QuoteRequest, PriceItem } from './types';
import { PRICE_ITEMS } from './data/materialsData';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'materials' | 'quarry-stones' | 'services' | 'prices' | 'contact' | 'terms' | 'privacy'>('terms');
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [priceListOpen, setPriceListOpen] = useState(false);
  const [detailModalCategory, setDetailModalCategory] = useState<'quarry' | 'riversand' | 'filling' | 'sand' | null>(null);
  const [activeQuote, setActiveQuote] = useState<QuoteRequest | null>(null);

  // Synchronize hash with view
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about-page' || hash === '#about') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#terms' || hash === '#terms-and-conditions' || hash === '#terms-page' || hash === '#legal') {
        setCurrentView('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#privacy' || hash === '#privacy-policy' || hash === '#privacy-page') {
        setCurrentView('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#quarry-stones' || hash === '#quarry' || hash === '#quarry-stone' || hash === '#stones') {
        setCurrentView('quarry-stones');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#materials-page' || hash === '#materials' || hash === '#catalog') {
        setCurrentView('materials');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#services-page' || hash === '#services') {
        setCurrentView('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#prices-page' || hash === '#prices' || hash === '#pricing-page' || hash === '#pricing') {
        setCurrentView('prices');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact-page' || hash === '#contact' || hash === '#contact-us' || hash === '#enquiry-form') {
        setCurrentView('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home') {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleQuoteSubmit = (quote: QuoteRequest) => {
    setActiveQuote(quote);
  };

  const handleSelectMaterial = (materialId: string) => {
    if (materialId.startsWith('quarry')) {
      setCurrentView('quarry-stones');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const item = PRICE_ITEMS.find((p) => p.id === materialId);
    if (item) {
      if (item.category === 'quarry') setDetailModalCategory('quarry');
      else if (item.category === 'riversand') setDetailModalCategory('riversand');
      else if (item.category === 'filling') setDetailModalCategory('filling');
      else setDetailModalCategory('sand');
    }
  };

  const handleSelectCategoryFromFooter = (category: string) => {
    if (category === 'quarry') {
      setCurrentView('quarry-stones');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (category === 'quarry' || category === 'riversand' || category === 'filling' || category === 'sand') {
      setDetailModalCategory(category as 'quarry' | 'riversand' | 'filling' | 'sand');
    }
  };

  const handleSelectPriceItemForQuote = (item: PriceItem) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const formElement = document.getElementById('quote-form');
        if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const formElement = document.getElementById('quote-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOrderWithCalc = (materialSummary: string, trips: number) => {
    setActiveQuote({
      fullName: 'Prospective Contractor / Builder',
      email: 'client@site.com',
      phone: '0244520024',
      materialId: 'quarry-3-4',
      quantity: trips,
      unit: 'trip',
      location: 'Standard Delivery Zone (Accra/Tema)',
      additionalNotes: materialSummary,
    });
  };

  const navigateToHomeSection = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const elem = document.getElementById(sectionId);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans selection:bg-[#EB4D23] selection:text-white">
      {/* 1. Top Utility Bar */}
      <TopBar />

      {/* 2. Header Navigation */}
      <Header
        currentView={currentView}
        onNavigateHome={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateAbout={() => {
          setCurrentView('about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateServices={() => {
          setCurrentView('services');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigatePrices={() => {
          setCurrentView('prices');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateMaterials={() => {
          setCurrentView('materials');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateGallery={() => navigateToHomeSection('gallery')}
        onNavigateContact={() => {
          setCurrentView('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCalculator={() => setCalculatorOpen(true)}
        onOpenPriceList={() => setPriceListOpen(true)}
        onSelectMaterial={handleSelectMaterial}
      />

      <main className="flex-grow">
        {currentView === 'terms' ? (
          /* Dedicated Terms & Conditions Page Screen matching uploaded design */
          <TermsPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateAbout={() => {
              setCurrentView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateMaterials={() => {
              setCurrentView('materials');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateServices={() => {
              setCurrentView('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigatePrices={() => {
              setCurrentView('prices');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateGallery={() => navigateToHomeSection('gallery')}
            onNavigateContact={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentView === 'privacy' ? (
          /* Dedicated Privacy Policy Page Screen */
          <PrivacyPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateAbout={() => {
              setCurrentView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateMaterials={() => {
              setCurrentView('materials');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateServices={() => {
              setCurrentView('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigatePrices={() => {
              setCurrentView('prices');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateGallery={() => navigateToHomeSection('gallery')}
            onNavigateContact={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentView === 'quarry-stones' ? (
          /* Dedicated Quarry Stones Material Detail Page Screen matching uploaded screen */
          <QuarryStonesPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateAbout={() => {
              setCurrentView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateMaterials={() => {
              setCurrentView('materials');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateServices={() => {
              setCurrentView('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigatePrices={() => {
              setCurrentView('prices');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateGallery={() => navigateToHomeSection('gallery')}
            onNavigateContact={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectOtherMaterial={(cat) => {
              if (cat === 'riversand') {
                setDetailModalCategory('riversand');
              } else if (cat === 'filling') {
                setDetailModalCategory('filling');
              } else {
                setDetailModalCategory('sand');
              }
            }}
            onQuoteSubmit={handleQuoteSubmit}
          />
        ) : currentView === 'contact' ? (
          /* Dedicated Contact Us Page Screen */
          <ContactPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateAbout={() => {
              setCurrentView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateMaterials={() => {
              setCurrentView('materials');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateServices={() => {
              setCurrentView('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigatePrices={() => {
              setCurrentView('prices');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateGallery={() => navigateToHomeSection('gallery')}
            onQuoteSubmit={handleQuoteSubmit}
          />
        ) : currentView === 'materials' ? (
          /* Dedicated Building Materials Catalog Page Screen */
          <MaterialsPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateAbout={() => {
              setCurrentView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateServices={() => {
              setCurrentView('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigatePrices={() => {
              setCurrentView('prices');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateGallery={() => navigateToHomeSection('gallery')}
            onNavigateContact={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenPriceList={() => setPriceListOpen(true)}
            onOpenDetailModal={(cat) => setDetailModalCategory(cat)}
            onSelectMaterial={handleSelectPriceItemForQuote}
          />
        ) : currentView === 'about' ? (
          /* Dedicated About Us Page Screen */
          <AboutPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateMaterials={() => {
              setCurrentView('materials');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigatePrices={() => {
              setCurrentView('prices');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateGallery={() => navigateToHomeSection('gallery')}
            onNavigateContact={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenCalculator={() => setCalculatorOpen(true)}
            onSelectMaterial={handleSelectPriceItemForQuote}
          />
        ) : currentView === 'services' ? (
          /* Dedicated Services Page Screen matching uploaded screen verbatim */
          <ServicesPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateAbout={() => {
              setCurrentView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigatePrices={() => {
              setCurrentView('prices');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateGallery={() => navigateToHomeSection('gallery')}
            onNavigateContact={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCategory={(cat) => {
              if (cat === 'quarry') setDetailModalCategory('quarry');
              else if (cat === 'filling') setDetailModalCategory('filling');
              else setDetailModalCategory('sand');
            }}
            onSelectMaterial={handleSelectPriceItemForQuote}
          />
        ) : currentView === 'prices' ? (
          /* Dedicated Building Material Supply Prices Page Screen */
          <PricesPageScreen
            onNavigateHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateAbout={() => {
              setCurrentView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateServices={() => {
              setCurrentView('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateMaterials={() => {
              setCurrentView('materials');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateGallery={() => navigateToHomeSection('gallery')}
            onNavigateContact={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectMaterial={handleSelectPriceItemForQuote}
            onQuoteSubmit={handleQuoteSubmit}
          />
        ) : (
          /* Home Landing View */
          <>
            {/* 3. Hero Section with Request a Quote */}
            <HeroSection onQuoteSubmit={handleQuoteSubmit} />

            {/* 4. About Us Preview Section */}
            <AboutSection />

            {/* 5. Our Supply Materials Section */}
            <MaterialsSection
              onSelectCategory={(cat) => setDetailModalCategory(cat as any)}
              onOpenDetailModal={(cat) => setDetailModalCategory(cat)}
            />

            {/* 6. Pricing Preview Section */}
            <PricingSection
              onOpenPriceListModal={() => setPriceListOpen(true)}
              onOpenCalculatorModal={() => setCalculatorOpen(true)}
              onSelectMaterialForQuote={handleSelectPriceItemForQuote}
            />

            {/* 7. Gallery & Services Section */}
            <GallerySection />

            {/* 8. Contact & CTA Block */}
            <ContactSection
              onOpenQuoteModal={() => {
                const formElement = document.getElementById('quote-form');
                if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </>
        )}
      </main>

      {/* 9. Footer */}
      <Footer
        onSelectCategory={handleSelectCategoryFromFooter}
        onNavigateTerms={() => {
          setCurrentView('terms');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigatePrivacy={() => {
          setCurrentView('privacy');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 10. Sticky Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Modals & Dialogs */}
      <MaterialCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onOrderWithCalc={handleOrderWithCalc}
      />

      <FullPriceListModal
        isOpen={priceListOpen}
        onClose={() => setPriceListOpen(false)}
        onSelectMaterial={handleSelectPriceItemForQuote}
      />

      <MaterialDetailModal
        category={detailModalCategory}
        onClose={() => setDetailModalCategory(null)}
        onSelectForQuote={handleSelectPriceItemForQuote}
      />

      <QuoteSuccessModal
        quote={activeQuote}
        onClose={() => setActiveQuote(null)}
      />
    </div>
  );
}
