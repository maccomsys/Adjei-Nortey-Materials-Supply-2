import { PriceItem, GalleryItem } from '../types';

export const COMPANY_DETAILS = {
  name: 'Adjei Nortey Materials & Supply',
  shortName: 'Adjei Nortey',
  tagline: 'Expert Material & Reliable Solutions',
  owner: 'Mr. Adjei Nortey',
  ownerTitle: 'Owner & Managing Director',
  phone: '0244520024',
  phoneIntl: '+233244520024',
  email: 'adjeinortey999@gmail.com',
  location: 'Accra Industrial Area & Spintex Delivery Depot, Ghana',
  establishedYear: '2012',
  yearsExperience: '14',
  truckFleetCount: '45+',
  happyClientsCount: '1,200+',
  satisfiedPartners: '500+',
  currency: 'GH₵',
};

// Generated images
export const IMAGES = {
  hero: '/src/assets/images/hero_construction_quarry_trucks_1790185216938.jpg',
  aboutTall: '/src/assets/images/about_construction_site_tall_1790185229829.jpg',
  aboutFoundation: '/src/assets/images/about_foundation_workers_1790185241864.jpg',
  quarryStones: '/src/assets/images/material_quarry_crushed_stones_1790185252963.jpg',
  riversand: '/src/assets/images/material_clean_riversand_1790185262906.jpg',
  fillingSand: '/src/assets/images/material_filling_sand_laterite_1790185273194.jpg',
};

export const PRICE_ITEMS: PriceItem[] = [
  // Quarry Stones
  {
    id: 'quarry-3-4',
    name: 'Three Quarter (3/4")',
    subName: '19mm Crushed Granite Aggregate',
    category: 'quarry',
    prices: {
      trip: 'GH₵ 2,850',
      tonne: 'GH₵ 165',
      m3: 'GH₵ 190',
    },
    description: 'Premier grade 3/4" machine-crushed granite aggregate. Highly recommended for reinforced columns, beams, floor decking slabs, and precast concrete work.',
    recommendedUse: 'High-strength structural concrete, pillars, floor slabs, culverts',
    available: true,
  },
  {
    id: 'quarry-1-inch',
    name: 'One Inch (1")',
    subName: '25mm Heavy Duty Granite Stone',
    category: 'quarry',
    prices: {
      trip: 'GH₵ 2,750',
      tonne: 'GH₵ 158',
      m3: 'GH₵ 182',
    },
    description: '1-inch heavy ballast aggregate for substantial foundation footings, ground leveling concrete, mass pour structures, and roadway sub-bases.',
    recommendedUse: 'Foundation footings, heavy sub-bases, retaining walls, civil works',
    available: true,
  },
  {
    id: 'quarry-3-8',
    name: 'Three Eighth (3/8")',
    subName: '10mm Pea Gravel / Chippings',
    category: 'quarry',
    prices: {
      trip: 'GH₵ 2,950',
      tonne: 'GH₵ 170',
      m3: 'GH₵ 195',
    },
    description: 'Fine 3/8" quarry chippings ideal for thin screeds, high-performance hollow blocks, asphalt premix, terrazzo, and aesthetic paving.',
    recommendedUse: 'Concrete blocks, asphalt premix, terrazzo, decorative driveway paving',
    available: true,
  },
  {
    id: 'quarry-5-8',
    name: 'Five Eighth (5/8")',
    subName: '14mm Precision Graded Aggregate',
    category: 'quarry',
    prices: {
      trip: 'GH₵ 2,800',
      tonne: 'GH₵ 162',
      m3: 'GH₵ 188',
    },
    description: 'Evenly graded 5/8" aggregate for residential concrete casting, lintels, staircase pours, and medium structural load members.',
    recommendedUse: 'Staircases, lintels, concrete pavements, precast curb stones',
    available: true,
  },

  // Riversand
  {
    id: 'riversand-clean',
    name: 'Riversand',
    subName: 'Dredged & Washed River Sand',
    category: 'riversand',
    prices: {
      trip: 'GH₵ 3,100',
      tonne: 'GH₵ 180',
      m3: 'GH₵ 210',
    },
    description: 'Clean, unadulterated river sand sourced from premium dredging sites, washed and silt-free for high-strength concrete casting and structural durability.',
    recommendedUse: 'High-strength structural concrete, casting, lintels, columns, precast items',
    available: true,
  },

  // Filling Sand
  {
    id: 'filling-grade-1',
    name: 'Grade 1 Filling Sand',
    subName: 'Granular Foundation Backfill',
    category: 'filling',
    prices: {
      trip: 'GH₵ 1,850',
      tonne: 'GH₵ 110',
      m3: 'GH₵ 130',
    },
    description: 'Granular non-cohesive filling sand engineered for perimeter backfilling, underground pipe bedding, and sub-slab stabilization.',
    recommendedUse: 'Foundation backfilling, pipe bedding, sub-base leveling, swamp reclamation',
    available: true,
  },
  {
    id: 'filling-laterite',
    name: 'Laterite (Red Clayey Gravel)',
    subName: 'Compaction Grade Laterite',
    category: 'filling',
    prices: {
      trip: 'GH₵ 1,950',
      tonne: 'GH₵ 115',
      m3: 'GH₵ 135',
    },
    description: 'Cohesive, red lateritic soil gravel with high compaction density. Perfect for access road formation, yard leveling, and firm sub-grades.',
    recommendedUse: 'Road sub-bases, site access tracks, building pad elevation, heavy compaction',
    available: true,
  },

  // Sand
  {
    id: 'sand-smooth',
    name: 'Smooth Sand (Plastering)',
    subName: 'Fine Washed Sifted Sand',
    category: 'sand',
    prices: {
      trip: 'GH₵ 2,400',
      tonne: 'GH₵ 145',
      m3: 'GH₵ 165',
    },
    description: 'Super-fine sifted sand free of pebbles, formulated specifically for buttery-smooth internal wall plastering and ceiling rendering.',
    recommendedUse: 'Internal wall plastering, ceiling rendering, decorative skimming',
    available: true,
  },
  {
    id: 'sand-medium',
    name: 'Medium Sand (Block Laying)',
    subName: 'Mortar Grade Sand',
    category: 'sand',
    prices: {
      trip: 'GH₵ 2,300',
      tonne: 'GH₵ 138',
      m3: 'GH₵ 158',
    },
    description: 'Balanced particle-size sand optimized for high-adhesion masonry mortar, block laying, and general brickwork bonding.',
    recommendedUse: 'Solid/hollow block laying, brickwork, joint grouting, floor screeding',
    available: true,
  },
  {
    id: 'sand-rough',
    name: 'Rough Sand (External Rendering)',
    subName: 'Sharp Coarse Sand',
    category: 'sand',
    prices: {
      trip: 'GH₵ 2,350',
      tonne: 'GH₵ 140',
      m3: 'GH₵ 160',
    },
    description: 'Sharp, angular coarse sand providing exceptional keying and weather resistance for external wall Tyrolean finishes and rough casting.',
    recommendedUse: 'External rendering, Tyrolean roughcast, heavy screeds, drainage bedding',
    available: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Modern Tipper Fleet on Site Delivery',
    category: 'fleet',
    image: IMAGES.hero,
    description: '20m³ heavy-duty tipper trucks discharging 3/4" quarry aggregates at a commercial high-rise foundation site.',
  },
  {
    id: 'gal-2',
    title: 'Reinforced Concrete Superstructure',
    category: 'projects',
    image: IMAGES.aboutTall,
    description: 'Multi-storey structural framework cast using our washed riversand and 3/4" granite stones.',
  },
  {
    id: 'gal-3',
    title: 'Precision Site Foundation Inspection',
    category: 'projects',
    image: IMAGES.aboutFoundation,
    description: 'Engineers approving compaction of Grade 1 filling sand and sub-base aggregate.',
  },
  {
    id: 'gal-4',
    title: 'High Grade 3/4" Crushed Granite Quarry Stones',
    category: 'quarry',
    image: IMAGES.quarryStones,
    description: 'Clean washed machine-crushed granite aggregate stock ready for prompt dispatch.',
  },
  {
    id: 'gal-5',
    title: 'Dredged River Sand Stockpile',
    category: 'sand',
    image: IMAGES.riversand,
    description: 'High-purity washed river sand prepared for high-specification casting projects.',
  },
  {
    id: 'gal-6',
    title: 'Site Earthworks & Laterite Compaction',
    category: 'quarry',
    image: IMAGES.fillingSand,
    description: 'Laterite and foundation filling distribution for road infrastructure and estate development.',
  },
];

export const SERVICES = [
  {
    id: 'srv-1',
    title: 'Bulk Haulage & Tipper Fleet Logistics',
    description: 'Dedicated fleet of 10m³, 15m³, and 20m³ tipper trucks operating 24/7 to guarantee on-schedule material delivery directly to your job site.',
    icon: 'Truck',
  },
  {
    id: 'srv-2',
    title: 'Site Landfilling & Earthmoving Preparation',
    description: 'Complete excavation, backfilling, laterite supply, and mechanical compaction services for swampy or uneven terrains.',
    icon: 'Layers',
  },
  {
    id: 'srv-3',
    title: 'Commercial & Estate Procurement Contracts',
    description: 'Tailored corporate aggregate supply contracts for real estate developers, road contractors, and commercial infrastructure builders.',
    icon: 'Building2',
  },
  {
    id: 'srv-4',
    title: 'Material Quality Testing & Certification',
    description: 'Laboratory tested silt-free river sand, compressive strength certified crushed granite, and grading reports upon request.',
    icon: 'ShieldCheck',
  },
];
