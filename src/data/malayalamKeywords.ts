export const malayalamKeywords = {
  // Location-based keywords
  locations: {
    ottapalam: ['ഒറ്റപ്പാലം', 'ottapalam', 'ottapalam evide'],
    palakkad: ['പാലക്കാട്', 'palakkad', 'palakkad district'],
    shoranur: ['ഷൊർണൂർ', 'shoranur', 'shoranur junction'],
    kerala: ['കേരളം', 'kerala', 'kerala state']
  },
  
  // Service keywords
  services: {
    ceramicCoating: [
      'സെറാമിക് കോട്ടിംഗ്',
      'ceramic coating',
      'ceramic coating evide',
      'സെറാമിക് കോട്ടിംഗ് എവിടെയാണ്',
      '9h ceramic coating'
    ],
    carWash: [
      'കാർ വാഷ്',
      'car wash',
      'കാർ ക്ലീനിംഗ്',
      'car cleaning',
      'car wash service',
      'express car wash'
    ],
    interiorCleaning: [
      'ഇന്റീരിയർ ക്ലീനിംഗ്',
      'interior cleaning',
      'കാർ ഇന്റീരിയർ ഡീറ്റെയിലിംഗ്',
      'seat cleaning',
      'dashboard cleaning'
    ],
    detailing: [
      'ഡീറ്റെയിലിംഗ്',
      'detailing',
      'car detailing',
      'auto detailing',
      'കാർ ഡീറ്റെയിലിംഗ് സർവീസ്'
    ]
  },
  
  // Manglish combinations
  manglish: {
    ceramicCoating: [
      'ceramic coating ottapalam evide und',
      'ceramic coating palakkad near me',
      'ceramic coating price kerala rupees',
      'best ceramic coating shop ottapalam',
      'ceramic coating malayalam'
    ],
    carWash: [
      'car wash palakkad evide und',
      'best car wash near me palakkad',
      'car wash service number ottapalam',
      'express car wash kerala price'
    ],
    search: [
      'evide und',
      'near me',
      'ethra roopa',
      'best service',
      'malayalam'
    ]
  },
  
  // Climate-specific keywords
  climate: {
    monsoon: [
      'മൺസൂൺ',
      'monsoon',
      'മഴക്കാലം',
      'rain protection',
      'water protection',
      'മൺസൂൺ കാർ കെയർ'
    ],
    summer: [
      'വേനൽ',
      'summer',
      'UV protection',
      'heat protection',
      'സൺ പ്രൊട്ടക്ഷൻ'
    ],
    humidity: [
      'ഈർപ്പം',
      'humidity',
      'rust protection',
      'കേരള കാലാവസ്ഥ',
      'kerala climate'
    ]
  },
  
  // Vehicle-specific keywords
  vehicles: {
    sedan: ['സെഡാൻ', 'sedan car', 'honda city', 'maruti dzire'],
    suv: ['SUV', 'എസ്‌യുവി', 'fortuner', 'scorpio', 'creta'],
    hatchback: ['hatchback', 'small car', 'swift', 'alto'],
    luxury: ['luxury car', 'ലക്ഷറി കാർ', 'mercedes', 'bmw', 'audi']
  },
  
  // Price-related keywords
  price: {
    queries: [
      'വില',
      'price',
      'എത്ര രൂപ',
      'ethra roopa',
      'cost',
      'കോസ്റ്റ്',
      'ചെലവ്'
    ],
    ranges: [
      'cheap',
      'affordable',
      'premium',
      'best price',
      'reasonable rate'
    ]
  },
  
  // Voice search queries
  voiceQueries: {
    whereIs: [
      'എവിടെയാണ്',
      'evideya',
      'evide und',
      'where is',
      'near me'
    ],
    howMuch: [
      'എത്ര രൂപ',
      'ethra',
      'how much',
      'price ethra',
      'വില എത്രയാണ്'
    ],
    which: [
      'ഏതാണ് നല്ലത്',
      'which is best',
      'best evide',
      'നല്ല സേവനം'
    ],
    how: [
      'എങ്ങനെ',
      'engane',
      'how to',
      'process',
      'പ്രക്രിയ'
    ]
  }
};

// Generate keyword combinations
export const generateMalayalamKeywordCombinations = (
  service: keyof typeof malayalamKeywords.services,
  location: keyof typeof malayalamKeywords.locations
): string[] => {
  const serviceTerms = malayalamKeywords.services[service];
  const locationTerms = malayalamKeywords.locations[location];
  const combinations: string[] = [];
  
  serviceTerms.forEach(serviceTerm => {
    locationTerms.forEach(locationTerm => {
      combinations.push(`${serviceTerm} ${locationTerm}`);
      combinations.push(`${locationTerm} ${serviceTerm}`);
    });
  });
  
  return combinations;
};

// Generate voice search queries
export const generateVoiceSearchQueries = (
  service: string,
  location: string
): string[] => {
  return [
    `${location} എവിടെയാണ് ${service} ചെയ്യാൻ പറ്റുക?`,
    `${service} ${location} evide und?`,
    `${service} വില എത്രയാണ് ${location}?`,
    `${location} best ${service} service evide?`,
    `${service} ചെയ്യാൻ ${location} നല്ല സ്ഥലം ഏതാണ്?`
  ];
};
