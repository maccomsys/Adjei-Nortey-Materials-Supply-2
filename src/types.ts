export type SupplyUnit = 'trip' | 'tonne' | 'm3';

export interface PriceItem {
  id: string;
  name: string;
  subName?: string;
  category: 'quarry' | 'riversand' | 'filling' | 'sand';
  prices: {
    trip: string;
    tonne: string;
    m3: string;
  };
  description: string;
  recommendedUse: string;
  available: boolean;
}

export interface MaterialCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  items: PriceItem[];
  highlightNotice?: string;
}

export interface QuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  materialId?: string;
  quantity?: number;
  unit?: SupplyUnit;
  location?: string;
  deliveryDate?: string;
  additionalNotes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'quarry' | 'fleet' | 'projects' | 'sand';
  image: string;
  description: string;
}
