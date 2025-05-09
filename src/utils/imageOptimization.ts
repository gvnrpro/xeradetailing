
// Enhanced image optimization utility functions with SEO focus

import { locationKeywords } from './seoKeywords';

// Convert path to SEO-friendly name format with local keywords
export const getSeoImageName = (path: string, location: string = locationKeywords.primary): string => {
  if (!path) return '';
  
  // Extract filename from path
  const filename = path.split('/').pop() || '';
  
  // Create a SEO-friendly version without extension
  const nameOnly = filename.split('.')[0];
  
  // Replace any non-alphanumeric characters with hyphens
  return `xera-${location.toLowerCase()}-${nameOnly.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`;
};

// Get proper alt text with SEO keywords
export const getImageAlt = (baseAlt: string, location: string = locationKeywords.primary): string => {
  if (!baseAlt) return '';
  
  // Add location if not already present
  const hasLocation = baseAlt.toLowerCase().includes(location.toLowerCase());
  
  // Add relevant SEO keywords
  let altWithKeywords = baseAlt;
  
  // Add location if not present
  if (!hasLocation) {
    altWithKeywords += ` in ${location}, ${locationKeywords.state}`;
  }
  
  // Ensure some common SEO phrases are included
  const seoTerms = [
    'XERA detailing',
    'professional auto care',
    'car detailing',
    'premium service',
    'ceramic coating',
    'paint protection',
    'auto detailing'
  ];
  
  // Add one random SEO term if none are present
  const hasSeoTerm = seoTerms.some(term => baseAlt.toLowerCase().includes(term.toLowerCase()));
  if (!hasSeoTerm) {
    const randomTerm = seoTerms[Math.floor(Math.random() * seoTerms.length)];
    altWithKeywords = `${randomTerm} - ${altWithKeywords}`;
  }
  
  return altWithKeywords;
};

// Ensure filename is SEO optimized for image files
export const getSeoOptimizedFilename = (
  service: string, 
  location: string = locationKeywords.primary
): string => {
  const cleanService = service.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const cleanLocation = location.toLowerCase().replace(/[^a-z0-9]/g, '-');
  
  return `${cleanService}-${cleanLocation}-xera-detailing`;
};

// Types for image objects used throughout the site
export interface OptimizedImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  loading?: 'lazy' | 'eager';
  seoFilename?: string;
}

// Convert paths to optimized image objects with enhanced SEO metadata
export const getOptimizedImages = (
  paths: string[],
  baseAlt: string = 'XERA auto detailing service',
  location: string = locationKeywords.primary,
  service: string = 'car detailing'
): OptimizedImage[] => {
  return paths.map(path => {
    // Create specific alt text based on image context
    const serviceSpecificAlt = `${baseAlt} - ${service}`;
    
    // Add location keywords for local SEO
    const localizedAlt = getImageAlt(serviceSpecificAlt, location);
    
    return {
      src: path,
      alt: localizedAlt,
      title: `XERA ${service} in ${location} - Professional auto detailing`,
      description: `Professional ${service} by XERA in ${location}, ${locationKeywords.state}`,
      loading: 'lazy',
      seoFilename: getSeoImageName(path, location)
    };
  });
};

// Generate descriptive alt text with service, location and benefits
export const generateServiceAltText = (
  service: string,
  location: string = locationKeywords.primary,
  benefit?: string
): string => {
  const benefits = [
    'long-lasting protection',
    'premium finish',
    'professional results',
    'expert application',
    'showroom shine',
    'enhanced appearance'
  ];
  
  const selectedBenefit = benefit || benefits[Math.floor(Math.random() * benefits.length)];
  
  return `Professional ${service} in ${location}, ${locationKeywords.state} providing ${selectedBenefit} by XERA detailing experts`;
};

// Generate structured image data object for schema markup
export const getStructuredImageData = (
  image: OptimizedImage,
  pageUrl: string
): Record<string, any> => {
  return {
    "@type": "ImageObject",
    "contentUrl": image.src,
    "description": image.description || image.alt,
    "name": image.title || image.alt.split(' - ')[0],
    "caption": image.alt,
    "representativeOfPage": true,
    "url": pageUrl
  };
};
