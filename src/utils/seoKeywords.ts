
// Centralized keyword repository for consistent SEO implementation

// Primary location keywords
export const locationKeywords = {
  primary: 'Ottapalam',
  district: 'Palakkad',
  nearby: ['Shoranur', 'Pattambi', 'Perinthalmanna', 'Thrissur', 'Cherpulassery', 'Mannarkkad', 'Kottayi'],
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
      '9h ceramic coating palakkad',
      'nano ceramic coating kerala',
      'ceramic coating price kerala'
    ],
    secondary: [
      '9H ceramic coating',
      'hydrophobic coating',
      'uv protection cars',
      'nano ceramic coating',
      'long-lasting car protection',
      'premium car detailing',
      'ceramic pro ottapalam',
      'ceramic coating benefits',
      'ceramic coating vs wax',
      'car paint protection'
    ],
    longTail: [
      'affordable ceramic coating services in ottapalam',
      'professional car detailing experts ottapalam',
      'ceramic coating for SUVs in ottapalam',
      'top-rated auto detailing near ottapalam',
      'best ceramic coating service in palakkad district',
      'how long does ceramic coating last in kerala climate',
      'ceramic coating for bikes in palakkad',
      'ceramic coating for luxury cars ottapalam',
      'is ceramic coating worth it kerala rain',
      'ceramic coating maintenance tips kerala'
    ]
  },
  
  // Car Wash & Detailing keywords
  carWashDetailing: {
    primary: [
      'car wash services ottapalam',
      'auto detailing services ottapalam',
      'car detailing ottapalam',
      'best car wash near me',
      'premium car cleaning ottapalam',
      'professional car washing palakkad'
    ],
    secondary: [
      'exterior car polishing ottapalam',
      'premium car wash',
      'professional auto detailing',
      'express car cleaning',
      'car washing service',
      'luxury car detailing',
      'car foam wash ottapalam',
      'waterless car wash'
    ],
    longTail: [
      'eco-friendly car wash ottapalam',
      'affordable car detailing services in palakkad',
      'best hand car wash near ottapalam',
      'monthly car wash packages ottapalam',
      'car detailing for monsoon season kerala',
      'ceramic coating maintenance wash ottapalam',
      'touchless car wash ottapalam',
      'car spa services palakkad'
    ]
  },
  
  // Interior Cleaning keywords
  interiorCleaning: {
    primary: [
      'interior car cleaning ottapalam',
      'car interior detailing',
      'auto interior sanitization',
      'vehicle interior cleaning palakkad',
      'professional interior detailing kerala'
    ],
    secondary: [
      'car upholstery cleaning',
      'leather seat conditioning',
      'dashboard polishing',
      'car carpet cleaning',
      'car interior sanitization',
      'car AC cleaning ottapalam',
      'fabric seat cleaning',
      'car odor removal'
    ],
    longTail: [
      'complete car interior sanitization ottapalam',
      'premium leather treatment for car seats',
      'professional car interior cleaning services',
      'car interior deep cleaning package palakkad',
      'germ-free car interior treatment ottapalam',
      'car interior detailing for allergy sufferers',
      'stain removal car seats ottapalam',
      'smoke smell removal car interior'
    ]
  },
  
  // Paint Protection keywords
  paintProtection: {
    primary: [
      'paint protection ottapalam',
      'car paint protection film',
      'ppf installation kerala',
      'car scratch protection ottapalam',
      'paint protection for new cars'
    ],
    secondary: [
      'scratch resistant coating',
      'paint sealant',
      'car paint preservation',
      'stone chip protection film',
      'clear bra paint protection',
      'self-healing ppf',
      'xpel ppf installation',
      'llumar ppf kerala'
    ],
    longTail: [
      'best car paint protection services in ottapalam',
      'long-lasting protection for car exteriors',
      'premium ppf installation for luxury cars',
      'ppf vs ceramic coating which is better kerala',
      'paint protection for daily drivers ottapalam',
      'full body ppf installation cost palakkad',
      'paint protection for bikes in kerala',
      'ppf maintenance tips for kerala climate'
    ]
  },
  
  // Additional Services keywords
  additionalServices: {
    primary: [
      'headlight restoration ottapalam',
      'engine bay cleaning ottapalam',
      'wheel detailing services',
      'car dent removal palakkad',
      'car scratch repair ottapalam'
    ],
    secondary: [
      'headlight polishing',
      'engine detailing',
      'rim cleaning',
      'exhaust tip polishing',
      'windshield coating',
      'glass coating cars',
      'brake caliper painting',
      'plastic trim restoration'
    ],
    longTail: [
      'professional headlight restoration services in palakkad',
      'complete engine bay cleaning and protection',
      'alloy wheel detailing and ceramic coating',
      'minor dent removal without painting ottapalam',
      'headlight yellowing treatment kerala climate',
      'ceramic coating for car glass ottapalam',
      'rain repellent windshield treatment',
      'car plastic trim restoration service'
    ]
  }
};

// General brand keywords
export const brandKeywords = [
  'XERA detailing',
  'XERA car wash',
  'XERA auto spa',
  'best detailing studio in ottapalam',
  'premium car care kerala',
  'XERA ceramic coating',
  'XERA paint protection',
  'top car detailers palakkad',
  'trusted auto detailing kerala',
  'XERA mobile detailing service'
];

// Product-specific keywords
export const productKeywords = {
  ceramicCoating: [
    '9H ceramic coating',
    'ceramic pro 9H',
    'SiO2 ceramic coating',
    'graphene coating',
    'ceramic coating spray',
    'nano ceramic protectant',
    'professional ceramic coating',
    'DIY ceramic coating'
  ],
  detailingProducts: [
    'microfiber towels',
    'car shampoo',
    'detailing clay',
    'polish compounds',
    'car wax',
    'tire dressing',
    'glass cleaner',
    'interior protectant'
  ]
};

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
  keywords.push(...brandKeywords.slice(0, 3));
  
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

// Generate SEO-optimized page titles
export const generateSeoPageTitle = (
  service: string,
  location: string = locationKeywords.primary,
  includePrice: boolean = false
): string => {
  const priceTag = includePrice ? "| Starting ₹7,999" : "";
  return `${service} in ${location}, ${locationKeywords.district} ${priceTag} | XERA Detailing`;
};

// Generate schema markup for service areas
export const generateServiceAreasList = (primary: string = locationKeywords.primary): string[] => {
  return [primary, ...locationKeywords.nearby, locationKeywords.district];
};

// Generate location-based meta titles
export const generateLocationBasedTitles = (serviceName: string): string[] => {
  const locations = [locationKeywords.primary, ...locationKeywords.nearby.slice(0, 4)];
  
  return locations.map(location => 
    `${serviceName} in ${location} | Professional Auto Detailing | XERA`
  );
};

// Generate enhanced service descriptions with keywords
export const generateEnhancedServiceDescriptions = (
  service: keyof typeof serviceKeywords,
  includeLocation: boolean = true
): string[] => {
  const primaryKeywords = serviceKeywords[service].primary;
  const secondaryKeywords = serviceKeywords[service].secondary.slice(0, 3);
  const location = includeLocation ? ` in ${locationKeywords.primary} and ${locationKeywords.district}` : '';
  
  return [
    `Professional ${primaryKeywords[0]}${location} with premium materials and expert application.`,
    `Top-rated ${secondaryKeywords[0]} services${location} providing long-lasting results.`,
    `Advanced ${primaryKeywords[1]}${location} using industry-leading techniques and products.`
  ];
};
