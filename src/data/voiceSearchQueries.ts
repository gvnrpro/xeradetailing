export interface VoiceSearchQuery {
  question: string;
  answer: string;
  keywords: string[];
}

export const voiceSearchQueries = {
  ceramicCoatingOttapalam: [
    {
      question: "ഒറ്റപ്പാലത്ത് എവിടെയാണ് സെറാമിക് കോട്ടിംഗ് ചെയ്യാൻ നല്ലത്?",
      answer: "ഒറ്റപ്പാലം പാലപ്പുറത്ത് NSS കോളേജിന് എതിർവശത്തുള്ള XERA കാർ വാഷ് & ഓട്ടോ ഡീറ്റെയിലിംഗ് കേരളത്തിലെ മികച്ച സെറാമിക് കോട്ടിംഗ് സേവനം നൽകുന്നു. ഞങ്ങൾ 9H പ്രീമിയം സെറാമിക് കോട്ടിംഗ് ഉപയോഗിക്കുന്നു.",
      keywords: ['ഒറ്റപ്പാലം', 'സെറാമിക് കോട്ടിംഗ്', 'നല്ലത്', 'എവിടെയാണ്']
    },
    {
      question: "Ottapalam car ceramic coating evide und?",
      answer: "XERA Car Wash & Auto Detailing NSS College opposite Palappuram, Ottapalam-ൽ premium ceramic coating service നൽകുന്നു. Phone: +91 9605858483",
      keywords: ['ottapalam', 'ceramic coating', 'evide', 'und']
    },
    {
      question: "സെറാമിക് കോട്ടിംഗിന് എത്ര രൂപ വരും ഒറ്റപ്പാലത്ത്?",
      answer: "സെഡാൻ കാറുകൾക്ക് ₹9,999 മുതൽ ₹15,999 വരെയും SUV കൾക്ക് ₹12,999 മുതൽ ₹19,999 വരെയും വില വരുന്നു. വാഹനത്തിന്റെ അവസ്ഥയും തിരഞ്ഞെടുക്കുന്ന പാക്കേജും അനുസരിച്ച് വില വ്യത്യാസപ്പെടാം.",
      keywords: ['വില', 'എത്ര രൂപ', 'ഒറ്റപ്പാലം', 'സെറാമിക് കോട്ടിംഗ്']
    },
    {
      question: "സെറാമിക് കോട്ടിംഗ് എത്ര കാലം നിലനിൽക്കും കേരളത്തിലെ കാലാവസ്ഥയിൽ?",
      answer: "കേരളത്തിലെ കാലാവസ്ഥയിൽ ശരിയായ പരിചരണത്തോടെ 3 മുതൽ 5 വർഷം വരെ സെറാമിക് കോട്ടിംഗ് നിലനിൽക്കും. മൺസൂണിലും തീവ്രമായ സൂര്യപ്രകാശത്തിലും പൂർണ്ണ സംരക്ഷണം നൽകുന്നു.",
      keywords: ['എത്ര കാലം', 'കേരളം', 'കാലാവസ്ഥ', 'നിലനിൽക്കും']
    },
    {
      question: "ceramic coating ചെയ്യാൻ എത്ര സമയം വേണം?",
      answer: "പൂർണ്ണമായ ceramic coating process-നു 2-3 ദിവസം വേണം. ഇതിൽ paint correction, surface preparation, coating application, curing എല്ലാം ഉൾപ്പെടുന്നു.",
      keywords: ['സമയം', 'എത്ര', 'process', 'ദിവസം']
    }
  ],
  
  carWashPalakkad: [
    {
      question: "പാലക്കാട്ടിൽ എവിടെയാണ് നല്ല കാർ വാഷ് ഉള്ളത്?",
      answer: "ഒറ്റപ്പാലം പാലപ്പുറത്തുള്ള XERA Car Wash പാലക്കാട് ജില്ലയിലെ മികച്ച കാർ വാഷ് സേവനം നൽകുന്നു. Express wash മുതൽ premium detailing വരെയുള്ള സേവനങ്ങൾ ലഭ്യമാണ്.",
      keywords: ['പാലക്കാട്', 'കാർ വാഷ്', 'നല്ലത്', 'എവിടെയാണ്']
    },
    {
      question: "Palakkad best car wash evide und?",
      answer: "XERA Car Wash Ottapalam (NSS College near) പാലക്കാട് district-ലെ best car wash service ആണ്. All areas pickup/drop available. Call: +91 9605858483",
      keywords: ['palakkad', 'car wash', 'best', 'evide']
    },
    {
      question: "കാർ വാഷ് വില എത്രയാണ് പാലക്കാട്?",
      answer: "Express car wash ₹299 മുതൽ തുടങ്ങുന്നു. Premium wash ₹799, Complete detailing ₹2,999 മുതൽ. വാഹനത്തിന്റെ വലിപ്പം അനുസരിച്ച് വില മാറും.",
      keywords: ['വില', 'എത്രയാണ്', 'പാലക്കാട്', 'കാർ വാഷ്']
    },
    {
      question: "mobile car wash service und palakkad district?",
      answer: "അതെ, XERA പാലക്കാട് ജില്ലയിലെ എല്ലാ പ്രദേശങ്ങളിലും pickup and drop service നൽകുന്നു. Ottapalam, Shoranur, Pattambi, എല്ലായിടത്തും service ലഭ്യമാണ്.",
      keywords: ['mobile', 'service', 'palakkad', 'district']
    }
  ],
  
  interiorCleaningShoranur: [
    {
      question: "ഷൊർണൂരിൽ കാർ ഇന്റീരിയർ ക്ലീനിംഗ് ചെയ്യുന്നുണ്ടോ?",
      answer: "അതെ, ഒറ്റപ്പാലത്തുള്ള XERA Car Wash ഷൊർണൂർ പ്രദേശത്തിനായി complete interior cleaning & detailing സേവനം നൽകുന്നു. Pickup & drop service available ആണ്.",
      keywords: ['ഷൊർണൂർ', 'ഇന്റീരിയർ ക്ലീനിംഗ്', 'ചെയ്യുന്നുണ്ടോ']
    },
    {
      question: "shoranur car interior cleaning service evide?",
      answer: "XERA Auto Detailing (Ottapalam, 15km from Shoranur Railway Station) മികച്ച interior cleaning service നൽകുന്നു. Seat shampooing, dashboard cleaning, odor removal എല്ലാം available.",
      keywords: ['shoranur', 'interior cleaning', 'service', 'evide']
    },
    {
      question: "കാർ സീറ്റ് വൃത്തിയാക്കാൻ എത്ര ചെലവ് വരും?",
      answer: "Basic seat cleaning ₹599 മുതൽ, Complete interior deep cleaning ₹2,499 മുതൽ. Leather seats-നു special treatment ലഭ്യമാണ്. Pet hair removal, stain removal എല്ലാം included.",
      keywords: ['സീറ്റ്', 'വൃത്തിയാക്കൽ', 'ചെലവ്', 'എത്ര']
    }
  ],
  
  monsoonCarCare: [
    {
      question: "മഴക്കാലത്ത് കാർ എങ്ങനെ സംരക്ഷിക്കാം?",
      answer: "മൺസൂണിന് മുമ്പ് ceramic coating ചെയ്യുക, underbody coating നൽകുക, തുടർച്ചയായി വൃത്തിയാക്കുക, paint sealant ഉപയോഗിക്കുക. XERA-യുടെ monsoon protection package-ൽ എല്ലാം ഉൾപ്പെടുന്നു.",
      keywords: ['മഴക്കാലം', 'സംരക്ഷിക്കാം', 'എങ്ങനെ', 'കാർ']
    },
    {
      question: "kerala monsoon car care tips malayalam",
      answer: "കേരള മൺസൂണിൽ: 1) സെറാമിക് കോട്ടിംഗ് നിർബന്ധമായും ചെയ്യുക 2) Weekly wash ചെയ്യുക 3) Interior dry ആയി സൂക്ഷിക്കുക 4) Underbody protection നൽകുക 5) Regular maintenance.",
      keywords: ['kerala', 'monsoon', 'car care', 'tips', 'malayalam']
    },
    {
      question: "മൺസൂണിൽ സെറാമിക് കോട്ടിംഗ് ചെയ്യണോ?",
      answer: "തീർച്ചയായും ചെയ്യണം! മൺസൂണിന് മുമ്പ് സെറാമിക് കോട്ടിംഗ് ചെയ്താൽ മഴവെള്ളം, ഈർപ്പം, acid rain എല്ലാത്തിൽ നിന്നും പൂർണ്ണ സംരക്ഷണം ലഭിക്കും. Paint oxidation തടയും.",
      keywords: ['മൺസൂൺ', 'സെറാമിക് കോട്ടിംഗ്', 'ചെയ്യണോ']
    }
  ],
  
  ceramicCoatingPrice: [
    {
      question: "സെറാമിക് കോട്ടിംഗിന് എത്ര രൂപ വരും?",
      answer: "Hatchback: ₹7,999-₹12,999, Sedan: ₹9,999-₹15,999, SUV: ₹12,999-₹19,999, Luxury: ₹15,999-₹25,999. 3-5 year warranty included. വാഹനത്തിന്റെ condition അനുസരിച്ച് വില മാറും.",
      keywords: ['എത്ര രൂപ', 'സെറാമിക് കോട്ടിംഗ്', 'വില']
    },
    {
      question: "ceramic coating cost kerala rupees",
      answer: "Kerala-യിൽ quality ceramic coating ₹7,999 മുതൽ ₹25,999 വരെ. XERA 9H premium coating ഉപയോഗിക്കുന്നു. Paint correction, 5-year warranty included. EMI options available.",
      keywords: ['ceramic coating', 'cost', 'kerala', 'rupees']
    },
    {
      question: "ഏറ്റവും ചെലവ് കുറഞ്ഞ ceramic coating package ഏതാണ്?",
      answer: "Basic ceramic coating package ₹7,999 മുതൽ (small cars-നു). ഇതിൽ exterior wash, basic paint correction, 1-layer 9H coating, 3-year warranty included. Premium packages-ൽ കൂടുതൽ benefits.",
      keywords: ['ചെലവ് കുറഞ്ഞ', 'package', 'ഏതാണ്']
    }
  ]
};

// Generate FAQ schema for voice search
export const generateVoiceSearchFAQSchema = (queries: VoiceSearchQuery[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": queries.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };
};
