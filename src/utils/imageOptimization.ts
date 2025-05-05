
// Image optimization utility functions

// Convert path to SEO-friendly name format
export const getSeoImageName = (path: string): string => {
  if (!path) return '';
  
  // Extract filename from path
  const filename = path.split('/').pop() || '';
  
  // Create a SEO-friendly version without extension
  const nameOnly = filename.split('.')[0];
  
  // Replace any non-alphanumeric characters with hyphens
  return `xera-detailing-${nameOnly.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`;
};

// Get proper alt text with SEO keywords
export const getImageAlt = (baseAlt: string, location: string = 'Ottapalam'): string => {
  if (!baseAlt) return '';
  
  // Add location if not already present
  const hasLocation = baseAlt.toLowerCase().includes(location.toLowerCase());
  
  // Add relevant SEO keywords
  let altWithKeywords = baseAlt;
  
  // Add location if not present
  if (!hasLocation) {
    altWithKeywords += ` in ${location}, Kerala`;
  }
  
  // Ensure some common SEO phrases are included
  const seoTerms = [
    'XERA detailing',
    'professional auto care',
    'car detailing',
    'premium service'
  ];
  
  // Add one random SEO term if none are present
  const hasSeoTerm = seoTerms.some(term => baseAlt.toLowerCase().includes(term.toLowerCase()));
  if (!hasSeoTerm) {
    const randomTerm = seoTerms[Math.floor(Math.random() * seoTerms.length)];
    altWithKeywords = `${randomTerm} - ${altWithKeywords}`;
  }
  
  return altWithKeywords;
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

// Convert paths to optimized image objects
export const getOptimizedImages = (
  paths: string[],
  baseAlt: string = 'XERA auto detailing service',
  location: string = 'Ottapalam'
): OptimizedImage[] => {
  return paths.map(path => ({
    src: path,
    alt: getImageAlt(`${baseAlt}`, location),
    loading: 'lazy',
    seoFilename: getSeoImageName(path)
  }));
};
