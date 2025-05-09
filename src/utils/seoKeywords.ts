
// Centralized keyword repository for consistent SEO implementation

// Primary location keywords
export const locationKeywords = {
  primary: 'Ottapalam',
  district: 'Palakkad',
  nearby: ['Shoranur', 'Pattambi', 'Perinthalmanna', 'Thrissur', 'Cherpulassery'],
  state: 'Kerala'
};

// Service-specific keywords
export const serviceKeywords = {
  // Ceramic Coating keywords
  ceramicCoating: {
    primary: [
      'ceramic coating ottapalam',
      'car ceramic coating near me',
      'paint protection services ottapalam',
      'best ceramic coating shop',
      'mobile ceramic coating experts',
    ],
    secondary: [
      '9H ceramic coating',
      'hydrophobic coating',
      'uv protection cars',
      'nano ceramic coating',
      'long-lasting car protection',
      'premium car detailing'
    ],
    longTail: [
      'affordable ceramic coating services in ottapalam',
      'professional car detailing experts ottapalam',
      'ceramic coating for SUVs in ottapalam',
      'top-rated auto detailing near ottapalam',
      'best ceramic coating service in palakkad district'
    ]
  },
  
  // Car Wash & Detailing keywords
  carWashDetailing: {
    primary: [
      'car wash services ottapalam',
      'auto detailing services ottapalam',
      'car detailing ottapalam',
      'best car wash near me'
    ],
    secondary: [
      'exterior car polishing ottapalam',
      'premium car wash',
      'professional auto detailing',
      'express car cleaning'
    ],
    longTail: [
      'eco-friendly car wash ottapalam',
      'affordable car detailing services in palakkad',
      'best hand car wash near ottapalam'
    ]
  },
  
  // Interior Cleaning keywords
  interiorCleaning: {
    primary: [
      'interior car cleaning ottapalam',
      'car interior detailing',
      'auto interior sanitization'
    ],
    secondary: [
      'car upholstery cleaning',
      'leather seat conditioning',
      'dashboard polishing',
      'car carpet cleaning'
    ],
    longTail: [
      'complete car interior sanitization ottapalam',
      'premium leather treatment for car seats',
      'professional car interior cleaning services'
    ]
  },
  
  // Paint Protection keywords
  paintProtection: {
    primary: [
      'paint protection ottapalam',
      'car paint protection film',
      'ppf installation kerala'
    ],
    secondary: [
      'scratch resistant coating',
      'paint sealant',
      'car paint preservation'
    ],
    longTail: [
      'best car paint protection services in ottapalam',
      'long-lasting protection for car exteriors',
      'premium ppf installation for luxury cars'
    ]
  },
  
  // Additional Services keywords
  additionalServices: {
    primary: [
      'headlight restoration ottapalam',
      'engine bay cleaning ottapalam',
      'wheel detailing services'
    ],
    secondary: [
      'headlight polishing',
      'engine detailing',
      'rim cleaning'
    ],
    longTail: [
      'professional headlight restoration services in palakkad',
      'complete engine bay cleaning and protection',
      'alloy wheel detailing and ceramic coating'
    ]
  }
};

// General brand keywords
export const brandKeywords = [
  'XERA detailing',
  'XERA car wash',
  'XERA auto spa',
  'best detailing studio in ottapalam',
  'premium car care kerala'
];

// Generate keyword combinations for meta tags and content
export const generateKeywordCombinations = (
  service: keyof typeof serviceKeywords,
  location: string = locationKeywords.primary
): string[] => {
  const keywords: string[] = [];
  
  // Combine service keywords with location
  const serviceData = serviceKeywords[service];
  
  // Add primary keywords
  serviceData.primary.forEach(keyword => keywords.push(keyword));
  
  // Add some secondary keywords with location
  serviceData.secondary.forEach(keyword => {
    if (!keyword.toLowerCase().includes(location.toLowerCase())) {
      keywords.push(`${keyword} ${location}`);
    } else {
      keywords.push(keyword);
    }
  });
  
  // Add a few long tail keywords
  serviceData.longTail.forEach(keyword => keywords.push(keyword));
  
  // Add a few brand keywords
  keywords.push(...brandKeywords.slice(0, 2));
  
  return keywords;
};

// Generate meta description with keywords
export const generateMetaDescription = (
  baseDescription: string,
  service: keyof typeof serviceKeywords,
  location: string = locationKeywords.primary
): string => {
  // Extract primary keywords for the service
  const primaryKeywords = serviceKeywords[service].primary.slice(0, 2);
  
  // Add nearby locations
  const nearbyLocations = locationKeywords.nearby.slice(0, 3).join(', ');
  
  return `${baseDescription} Professional ${primaryKeywords[0]} in ${location} and surrounding areas including ${nearbyLocations}, ${locationKeywords.state}. ${primaryKeywords[1]} with satisfaction guaranteed.`;
};

// Generate SEO-friendly alt text for images
export const generateSeoImageAlt = (
  baseDescription: string,
  service: keyof typeof serviceKeywords,
  location: string = locationKeywords.primary
): string => {
  // Get a random primary keyword
  const primaryKeywords = serviceKeywords[service].primary;
  const randomKeyword = primaryKeywords[Math.floor(Math.random() * primaryKeywords.length)];
  
  return `${baseDescription} - ${randomKeyword} in ${location}, ${locationKeywords.state}`;
};
