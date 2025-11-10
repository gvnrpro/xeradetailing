import { malayalamKeywords, generateMalayalamKeywordCombinations } from '@/data/malayalamKeywords';

export interface MalayalamSEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  hreflangEn?: string;
}

export const setMalayalamPageMetadata = (config: MalayalamSEOConfig) => {
  // Set page title
  document.title = config.title;
  
  // Set HTML lang attribute
  document.documentElement.lang = 'ml';
  
  // Meta description
  const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
  metaDescription.setAttribute('name', 'description');
  metaDescription.setAttribute('content', config.description);
  if (!document.querySelector('meta[name="description"]')) {
    document.head.appendChild(metaDescription);
  }
  
  // Meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
  metaKeywords.setAttribute('name', 'keywords');
  metaKeywords.setAttribute('content', config.keywords.join(', '));
  if (!document.querySelector('meta[name="keywords"]')) {
    document.head.appendChild(metaKeywords);
  }
  
  // Malayalam language meta
  const metaLanguage = document.querySelector('meta[name="language"]') || document.createElement('meta');
  metaLanguage.setAttribute('name', 'language');
  metaLanguage.setAttribute('content', 'Malayalam');
  if (!document.querySelector('meta[name="language"]')) {
    document.head.appendChild(metaLanguage);
  }
  
  // Canonical URL
  const linkCanonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
  linkCanonical.setAttribute('rel', 'canonical');
  linkCanonical.setAttribute('href', config.canonicalUrl);
  if (!document.querySelector('link[rel="canonical"]')) {
    document.head.appendChild(linkCanonical);
  }
  
  // Hreflang tags
  if (config.hreflangEn) {
    const hreflangEn = document.querySelector('link[hreflang="en"]') || document.createElement('link');
    hreflangEn.setAttribute('rel', 'alternate');
    hreflangEn.setAttribute('hreflang', 'en');
    hreflangEn.setAttribute('href', config.hreflangEn);
    if (!document.querySelector('link[hreflang="en"]')) {
      document.head.appendChild(hreflangEn);
    }
  }
  
  const hreflangMl = document.querySelector('link[hreflang="ml"]') || document.createElement('link');
  hreflangMl.setAttribute('rel', 'alternate');
  hreflangMl.setAttribute('hreflang', 'ml');
  hreflangMl.setAttribute('href', config.canonicalUrl);
  if (!document.querySelector('link[hreflang="ml"]')) {
    document.head.appendChild(hreflangMl);
  }
  
  const hreflangDefault = document.querySelector('link[hreflang="x-default"]') || document.createElement('link');
  hreflangDefault.setAttribute('rel', 'alternate');
  hreflangDefault.setAttribute('hreflang', 'x-default');
  hreflangDefault.setAttribute('href', config.hreflangEn || config.canonicalUrl);
  if (!document.querySelector('link[hreflang="x-default"]')) {
    document.head.appendChild(hreflangDefault);
  }
  
  // Open Graph tags
  const ogLocale = document.querySelector('meta[property="og:locale"]') || document.createElement('meta');
  ogLocale.setAttribute('property', 'og:locale');
  ogLocale.setAttribute('content', 'ml_IN');
  if (!document.querySelector('meta[property="og:locale"]')) {
    document.head.appendChild(ogLocale);
  }
  
  const ogLocaleAlt = document.querySelector('meta[property="og:locale:alternate"]') || document.createElement('meta');
  ogLocaleAlt.setAttribute('property', 'og:locale:alternate');
  ogLocaleAlt.setAttribute('content', 'en_US');
  if (!document.querySelector('meta[property="og:locale:alternate"]')) {
    document.head.appendChild(ogLocaleAlt);
  }
  
  const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.setAttribute('content', config.title);
  if (!document.querySelector('meta[property="og:title"]')) {
    document.head.appendChild(ogTitle);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
  ogDescription.setAttribute('property', 'og:description');
  ogDescription.setAttribute('content', config.description);
  if (!document.querySelector('meta[property="og:description"]')) {
    document.head.appendChild(ogDescription);
  }
  
  if (config.ogImage) {
    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', config.ogImage);
    if (!document.querySelector('meta[property="og:image"]')) {
      document.head.appendChild(ogImage);
    }
  }
  
  // Geo tags
  const geoRegion = document.querySelector('meta[name="geo.region"]') || document.createElement('meta');
  geoRegion.setAttribute('name', 'geo.region');
  geoRegion.setAttribute('content', 'IN-KL');
  if (!document.querySelector('meta[name="geo.region"]')) {
    document.head.appendChild(geoRegion);
  }
};

export const generateMalayalamLocalBusinessSchema = (
  businessName: string,
  description: string,
  address: string,
  city: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "description": description,
    "telephone": "+91-96058-58483",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": city,
      "addressRegion": "കേരളം",
      "postalCode": "679103",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.7728",
      "longitude": "76.3778"
    },
    "url": "https://xeradetailing.in",
    "priceRange": "₹₹-₹₹₹",
    "inLanguage": ["ml", "en"],
    "areaServed": [
      {
        "@type": "City",
        "name": "ഒറ്റപ്പാലം"
      },
      {
        "@type": "City",
        "name": "പാലക്കാട്"
      },
      {
        "@type": "City",
        "name": "ഷൊർണൂർ"
      }
    ]
  };
};

export const addMalayalamSchemaToDocument = (schemaJson: object) => {
  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.text = JSON.stringify(schemaJson);
  
  // Remove existing schema if present
  const existingSchema = document.querySelector('script[type="application/ld+json"]');
  if (existingSchema) {
    existingSchema.remove();
  }
  
  document.head.appendChild(scriptTag);
};

export const generateManglishKeywords = (
  malayalamTerm: string,
  englishTerm: string,
  location: string
): string[] => {
  return [
    `${malayalamTerm} ${location}`,
    `${englishTerm} ${location}`,
    `${malayalamTerm} ${location} evide`,
    `${englishTerm} ${location} near me`,
    `best ${malayalamTerm} ${location}`,
    `${malayalamTerm} price ${location}`,
    `${location} ${malayalamTerm} service`
  ];
};
