
// Central registry of all website images with SEO information

import { getImageAlt } from "@/utils/imageOptimization";

export interface RegisteredImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
  tags?: string[];
  location?: string;
  featured?: boolean;
  loading?: 'lazy' | 'eager';
}

// Main image registry
export const imageRegistry: RegisteredImage[] = [
  // Gallery & Featured Images
  {
    id: "ceramic-monsoon",
    src: "/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png",
    alt: getImageAlt("Ceramic coating protection for car in Kerala rain", "Ottapalam"),
    title: "Kerala Monsoon Protection",
    description: "Our ceramic coating creates a hydrophobic shield against Kerala's heavy rainfall",
    category: "Ceramic Coating",
    tags: ["rain protection", "ceramic coating", "hydrophobic", "kerala monsoon"],
    featured: true,
    loading: "eager"
  },
  {
    id: "professional-studio",
    src: "/lovable-uploads/7dbc3f0f-1641-4d72-a5df-75f309fe9aab.png",
    alt: getImageAlt("XERA coating studio with professional lighting and equipment", "Ottapalam"),
    title: "Professional Studio",
    description: "State-of-the-art detailing studio with controlled environment",
    category: "Facility",
    tags: ["detailing studio", "professional equipment", "controlled environment"],
    featured: true
  },
  {
    id: "interior-cleaning",
    src: "/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png",
    alt: getImageAlt("Interior detailing showcasing clean luxury seats with XERA branding", "Ottapalam"),
    title: "Interior Transformation",
    description: "Meticulous interior cleaning and protection for your family's health",
    category: "Interior Detailing",
    tags: ["interior cleaning", "sanitization", "leather care"],
    featured: true
  },
  {
    id: "headlight-restoration",
    src: "/lovable-uploads/d4676f3a-b30c-4c07-8484-0598b007bd16.png",
    alt: getImageAlt("Before and after of headlight restoration by XERA detailing", "Ottapalam"),
    title: "Crystal Clear Vision",
    description: "Headlight restoration for enhanced visibility and safety",
    category: "Headlight Restoration",
    tags: ["safety", "visibility", "restoration"],
    featured: true
  },
  {
    id: "vintage-car",
    src: "/lovable-uploads/687fb100-26c3-4681-9015-47ddf494439c.png",
    alt: getImageAlt("Vintage car with restored paint under night sky with XERA logo", "Ottapalam"),
    title: "Classic Car Care",
    description: "Specialized detailing for vintage and classic cars",
    category: "Specialized Care",
    tags: ["vintage", "classic car", "specialized"],
    featured: true
  },
  {
    id: "expert-technician",
    src: "/lovable-uploads/18a2b3d8-292b-497f-88b3-78d082ff3357.png",
    alt: getImageAlt("XERA staff cleaning a red vehicle with professional equipment", "Ottapalam"),
    title: "Expert Technicians",
    description: "Our trained specialists use only premium products and techniques",
    category: "Team",
    tags: ["technicians", "expert care", "professional"],
    featured: true
  },
  
  // New images
  {
    id: "signature-red-line",
    src: "/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png",
    alt: getImageAlt("Black luxury car with XERA red stripe detailing in premium studio", "Ottapalam"),
    title: "Signature Red Line Design",
    category: "Premium Detailing",
    tags: ["luxury", "custom detailing", "signature design"],
    featured: true
  },
  {
    id: "premium-suv",
    src: "/lovable-uploads/93e1be41-e185-4b92-9ccf-b53e4dfd75e0.png",
    alt: getImageAlt("Black premium SUV with professional detailing in XERA studio", "Ottapalam"),
    title: "Premium SUV Specialists",
    category: "SUV Detailing",
    tags: ["SUV", "luxury vehicle", "premium care"],
    featured: true
  },
  {
    id: "black-sedan",
    src: "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
    alt: getImageAlt("Black sport sedan with red accents in professional XERA studio", "Ottapalam"),
    title: "Showroom Finish",
    category: "Paint Protection",
    tags: ["ceramic coating", "paint correction", "showroom finish"],
    featured: true
  },
  {
    id: "ceramic-technician-1",
    src: "/lovable-uploads/5c6772f8-70d4-496c-9c31-291686cf603e.png",
    alt: getImageAlt("XERA technician applying ceramic coating to vehicle exterior", "Ottapalam"),
    title: "Expert Application",
    category: "Ceramic Coating",
    tags: ["ceramic coating", "professional application", "expertise"],
    featured: true
  },
  {
    id: "water-beading",
    src: "/lovable-uploads/588a7319-b8dc-4e0c-99dd-909134350e51.png",
    alt: getImageAlt("Water beading on hydrophobic ceramic coated surface showing protection", "Ottapalam"),
    title: "Hydrophobic Protection",
    category: "Ceramic Coating",
    tags: ["hydrophobic", "water beading", "protection"],
    featured: true
  },
  
  // More images but not all marked as featured
  {
    id: "ceramic-technician-2",
    src: "/lovable-uploads/20fa2a68-f3d0-4ad1-b35f-f1a8b1378c1e.png",
    alt: getImageAlt("Professional detailer applying ceramic coating in controlled environment", "Ottapalam"),
    title: "Precision Application",
    category: "Ceramic Coating",
    tags: ["professional application", "precision", "expertise"]
  },
  {
    id: "water-droplets",
    src: "/lovable-uploads/c9c32a28-bc86-481a-8eff-6cc44b442248.png",
    alt: getImageAlt("Close-up of water beading on ceramic coated surface showing hydrophobic properties", "Ottapalam"),
    title: "Ultimate Protection",
    category: "Ceramic Coating",
    tags: ["water beading", "hydrophobic", "paint protection"]
  },
  {
    id: "leather-interior",
    src: "/lovable-uploads/a660543a-ab72-4dcf-a45c-eaa17732fee6.png",
    alt: getImageAlt("Professional interior leather cleaning and conditioning in luxury vehicle", "Ottapalam"),
    title: "Premium Leather Care",
    category: "Interior Detailing",
    tags: ["leather care", "luxury interior", "conditioning"]
  },
  {
    id: "dashboard-detail",
    src: "/lovable-uploads/b47f3168-6434-4bb5-b063-5ca151a41e7b.png",
    alt: getImageAlt("Premium car dashboard after professional interior detailing with XERA products", "Ottapalam"),
    title: "Dashboard Perfection",
    category: "Interior Detailing",
    tags: ["dashboard cleaning", "interior detailing", "premium care"]
  },
  {
    id: "luxury-suv-studio",
    src: "/lovable-uploads/b6128b34-f51e-46bf-aafb-23fdc89086b6.png",
    alt: getImageAlt("Luxury SUV in XERA detailing studio with professional lighting and red branding", "Ottapalam"),
    title: "Premium SUV Care",
    category: "SUV Detailing",
    tags: ["luxury SUV", "premium detailing", "professional care"]
  },
  
  // Before-after images
  {
    id: "ceramic-before",
    src: "/assets/ceramic-before.jpg",
    alt: getImageAlt("Car paint before ceramic coating application showing dull finish", "Ottapalam"),
    title: "Before Ceramic Coating",
    description: "Vehicle paint before our premium ceramic coating application",
    category: "Before/After",
    tags: ["ceramic coating", "before after", "paint protection"]
  },
  {
    id: "ceramic-after",
    src: "/assets/ceramic-after.jpg",
    alt: getImageAlt("Car paint after ceramic coating application showing glossy protected finish", "Ottapalam"),
    title: "After Ceramic Coating",
    description: "Vehicle paint after our premium ceramic coating application with mirror-like finish",
    category: "Before/After",
    tags: ["ceramic coating", "before after", "paint protection"],
    featured: true
  },
  {
    id: "engine-before",
    src: "/assets/engine-before.jpg",
    alt: getImageAlt("Engine bay before professional cleaning showing dirt and grime buildup", "Ottapalam"),
    title: "Before Engine Detailing",
    description: "Engine bay with typical dirt and grime buildup",
    category: "Before/After",
    tags: ["engine bay", "detailing", "cleaning"]
  },
  {
    id: "engine-after",
    src: "/assets/engine-after.jpg",
    alt: getImageAlt("Engine bay after professional cleaning showing spotless components", "Ottapalam"),
    title: "After Engine Detailing",
    description: "Clean engine bay after our comprehensive cleaning process",
    category: "Before/After",
    tags: ["engine bay", "detailing", "cleaning"]
  },
  {
    id: "headlight-before",
    src: "/assets/headlight-before.jpg",
    alt: getImageAlt("Yellowed and oxidized headlight before professional restoration", "Ottapalam"),
    title: "Before Headlight Restoration",
    description: "Oxidized and yellowed headlights reducing visibility",
    category: "Before/After",
    tags: ["headlight", "restoration", "safety"]
  },
  {
    id: "headlight-after",
    src: "/assets/headlight-after.jpg",
    alt: getImageAlt("Crystal clear headlight after professional restoration by XERA", "Ottapalam"),
    title: "After Headlight Restoration",
    description: "Perfectly clear headlights after our restoration process",
    category: "Before/After",
    tags: ["headlight", "restoration", "safety"]
  },
  {
    id: "interior-before",
    src: "/assets/interior-before.jpg",
    alt: getImageAlt("Car interior before deep cleaning showing dirt and stains", "Ottapalam"),
    title: "Before Interior Detailing",
    description: "Vehicle interior with typical dirt, stains, and wear",
    category: "Before/After",
    tags: ["interior", "detailing", "cleaning"]
  },
  {
    id: "interior-after",
    src: "/assets/interior-after.jpg",
    alt: getImageAlt("Car interior after professional detailing looking fresh and clean", "Ottapalam"),
    title: "After Interior Detailing",
    description: "Fresh and sanitized interior after our professional detailing",
    category: "Before/After",
    tags: ["interior", "detailing", "cleaning"]
  },
  {
    id: "paint-correction-before",
    src: "/assets/paint-correction-before.jpg",
    alt: getImageAlt("Car paint before correction showing swirl marks and scratches", "Ottapalam"),
    title: "Before Paint Correction",
    description: "Vehicle paint with swirl marks, scratches and imperfections",
    category: "Before/After",
    tags: ["paint correction", "detailing", "swirl removal"]
  },
  {
    id: "paint-correction-after",
    src: "/assets/paint-correction-after.jpg",
    alt: getImageAlt("Car paint after professional correction showing flawless mirror finish", "Ottapalam"),
    title: "After Paint Correction",
    description: "Flawless paint finish after our professional correction process",
    category: "Before/After",
    tags: ["paint correction", "detailing", "swirl removal"]
  },
  {
    id: "express-wash-before",
    src: "/assets/express-wash-before.jpg",
    alt: getImageAlt("Dirty car exterior before express wash service", "Ottapalam"),
    title: "Before Express Wash",
    description: "Vehicle with typical road dirt and environmental contaminants",
    category: "Before/After",
    tags: ["express wash", "car wash", "cleaning"]
  },
  {
    id: "express-wash-after",
    src: "/assets/express-wash-after.jpg",
    alt: getImageAlt("Clean car exterior after express wash service by XERA", "Ottapalam"),
    title: "After Express Wash",
    description: "Sparkling clean vehicle after our express washing service",
    category: "Before/After",
    tags: ["express wash", "car wash", "cleaning"]
  }
];

// Helper function to get images by category
export const getImagesByCategory = (category: string): RegisteredImage[] => {
  return imageRegistry.filter(img => img.category === category);
};

// Helper function to get featured images
export const getFeaturedImages = (): RegisteredImage[] => {
  return imageRegistry.filter(img => img.featured);
};

// Helper function to get images by tag
export const getImagesByTag = (tag: string): RegisteredImage[] => {
  return imageRegistry.filter(img => img.tags?.includes(tag));
};

// Helper function to get before/after image pairs
export const getBeforeAfterPairs = (): { before: RegisteredImage; after: RegisteredImage }[] => {
  const beforeImages = imageRegistry.filter(img => img.id.includes('before'));
  
  return beforeImages.map(beforeImg => {
    const afterId = beforeImg.id.replace('before', 'after');
    const afterImg = imageRegistry.find(img => img.id === afterId);
    
    if (afterImg) {
      return { before: beforeImg, after: afterImg };
    }
    return null;
  }).filter(Boolean) as { before: RegisteredImage; after: RegisteredImage }[];
};
