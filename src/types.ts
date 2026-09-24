export type SupplyUnit = 'trip' | 'tonne' | 'm3';

export type MaterialCategoryId =
  | 'boulders'
  | 'filling'
  | 'quarry-dust'
  | 'quarry-stones'
  | 'riversand'
  | 'stones';

export interface PriceItem {
  id: string;
  name: string;
  subName?: string;
  category: MaterialCategoryId;
  prices: {
    trip: string;
    tonne?: string;
    m3?: string;
  };
  priceDisplay: string;
  images: string[];
  image: string;
  description: string;
  recommendedUse: string;
  available: boolean;
}

export interface MaterialCategory {
  id: MaterialCategoryId;
  name: string;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  images: string[];
  items: PriceItem[];
  highlightNotice?: string;
  description: string;
  priceDisplay: string;
  specs: string[];
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
  category: string;
  location?: string;
  image: string;
  images?: string[];
  description: string;
}
