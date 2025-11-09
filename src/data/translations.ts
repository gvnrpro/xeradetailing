// Malayalam translations for Kerala-specific SEO
export const translations = {
  en: {
    // Hero Section
    hero_title: "Premium Car Detailing & Ceramic Coating",
    hero_subtitle: "Ottapalam's Trusted Auto Care Experts",
    hero_cta: "Book Now",
    hero_cta_secondary: "View Services",

    // Services
    services_title: "Our Services",
    ceramic_coating: "Ceramic Coating",
    ceramic_coating_desc: "9H protection for your car's paint",
    interior_detailing: "Interior Detailing",
    interior_detailing_desc: "Complete interior cleaning and restoration",
    express_wash: "Express Wash",
    express_wash_desc: "Quick and thorough exterior wash",
    paint_correction: "Paint Correction",
    paint_correction_desc: "Remove scratches and swirl marks",

    // Location
    location_title: "Visit Us or Book from Nearby",
    contact_info: "Contact Information",
    our_address: "Our Address",
    working_hours: "Working Hours",
    phone: "Phone",
    service_areas: "We Service These Areas:",
    connect_with_us: "Connect With Us:",
    book_appointment: "Book An Appointment",

    // Trust Signals
    google_rating: "Google Rating",
    satisfied_customers: "Satisfied Customers",
    years_experience: "Years Experience",
    certified_professionals: "Certified Professionals",

    // Common
    learn_more: "Learn More",
    view_gallery: "View Gallery",
    get_quote: "Get Quote",
    call_now: "Call Now",
    whatsapp: "WhatsApp",
  },
  ml: {
    // Hero Section
    hero_title: "പ്രീമിയം കാർ ഡീറ്റെയിലിംഗ് & സെറാമിക് കോട്ടിംഗ്",
    hero_subtitle: "ഒറ്റപ്പാലത്തെ വിശ്വസ്ത ഓട്ടോ കെയർ വിദഗ്ധർ",
    hero_cta: "ബുക്ക് ചെയ്യുക",
    hero_cta_secondary: "സേവനങ്ങൾ കാണുക",

    // Services
    services_title: "ഞങ്ങളുടെ സേവനങ്ങൾ",
    ceramic_coating: "സെറാമിക് കോട്ടിംഗ്",
    ceramic_coating_desc: "നിങ്ങളുടെ കാറിന്റെ പെയിന്റിന് 9H സംരക്ഷണം",
    interior_detailing: "ഇന്റീരിയർ ഡീറ്റെയിലിംഗ്",
    interior_detailing_desc: "സമ്പൂർണ്ണ ഇന്റീരിയർ ക്ലീനിംഗും പുനരുദ്ധാരണവും",
    express_wash: "എക്സ്പ്രസ് വാഷ്",
    express_wash_desc: "വേഗത്തിലും സമഗ്രമായും എക്സ്റ്റീരിയർ വാഷ്",
    paint_correction: "പെയിന്റ് കറക്ഷൻ",
    paint_correction_desc: "പോറലുകളും സ്വിർൾ മാർക്കുകളും നീക്കം ചെയ്യുക",

    // Location
    location_title: "ഞങ്ങളെ സന്ദർശിക്കുക അല്ലെങ്കിൽ അടുത്തുള്ളിടത്ത് നിന്ന് ബുക്ക് ചെയ്യുക",
    contact_info: "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
    our_address: "ഞങ്ങളുടെ വിലാസം",
    working_hours: "പ്രവൃത്തി സമയം",
    phone: "ഫോൺ",
    service_areas: "ഞങ്ങൾ സേവനം നൽകുന്ന പ്രദേശങ്ങൾ:",
    connect_with_us: "ഞങ്ങളുമായി ബന്ധപ്പെടുക:",
    book_appointment: "അപ്പോയിന്റ്‌മെന്റ് ബുക്ക് ചെയ്യുക",

    // Trust Signals
    google_rating: "ഗൂഗിൾ റേറ്റിംഗ്",
    satisfied_customers: "സംതൃപ്തരായ ഉപഭോക്താക്കൾ",
    years_experience: "വർഷങ്ങളുടെ പരിചയം",
    certified_professionals: "സർട്ടിഫൈഡ് പ്രൊഫഷണലുകൾ",

    // Common
    learn_more: "കൂടുതൽ അറിയുക",
    view_gallery: "ഗാലറി കാണുക",
    get_quote: "ക്വോട്ട് നേടുക",
    call_now: "ഇപ്പോൾ വിളിക്കുക",
    whatsapp: "വാട്സ്ആപ്പ്",
  }
};

export type Language = 'en' | 'ml';

export const getTranslation = (key: string, lang: Language = 'en'): string => {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};
