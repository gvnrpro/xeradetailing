import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { setMalayalamPageMetadata, generateMalayalamLocalBusinessSchema, addMalayalamSchemaToDocument } from '@/utils/malayalamSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Droplets, Sparkles, Car, Sun, Lightbulb, Settings, Wind } from 'lucide-react';

const ServicesMalayalam = () => {
  useEffect(() => {
    setMalayalamPageMetadata({
      title: 'സേവനങ്ങൾ | XERA Services | Car Detailing Ottapalam',
      description: 'XERA യുടെ എല്ലാ car care services - Ceramic coating, car wash, interior detailing, paint correction, headlight restoration, engine bay cleaning. Complete list.',
      keywords: ['xera services', 'car detailing services ottapalam', 'ceramic coating', 'car wash', 'interior cleaning', 'സേവനങ്ങൾ'],
      canonicalUrl: 'https://xeradetailing.in/ml/services',
      ogImage: 'https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png',
      hreflangEn: 'https://xeradetailing.in/services'
    });

    const schema = generateMalayalamLocalBusinessSchema(
      'XERA Car Services',
      'Complete car care services in Ottapalam',
      'NSS College Road, Palappuram',
      'Ottapalam'
    );
    addMalayalamSchemaToDocument(schema);
  }, []);

  const services = [
    {
      icon: Shield,
      title: 'സെറാമിക് കോട്ടിംഗ്',
      titleEn: 'Ceramic Coating',
      description: '9H hardness premium ceramic coating. 5+ year warranty. UV protection, hydrophobic properties, scratch resistance.',
      price: '₹7,999 മുതൽ',
      link: '/ml/ceramic-coating-ottapalam'
    },
    {
      icon: Droplets,
      title: 'കാർ വാഷ്',
      titleEn: 'Car Wash',
      description: 'Express wash മുതൽ premium detailing വരെ. Professional-grade cleaning products ഉപയോഗിച്ച് thorough cleaning.',
      price: '₹299 മുതൽ',
      link: '/ml/car-wash-palakkad'
    },
    {
      icon: Sparkles,
      title: 'ഇന്റീരിയർ ഡീറ്റെയിലിംഗ്',
      titleEn: 'Interior Detailing',
      description: 'Deep seat cleaning, dashboard restoration, AC sanitization, odor removal. Complete interior transformation.',
      price: '₹1,499 മുതൽ',
      link: '/ml/interior-cleaning-shoranur'
    },
    {
      icon: Car,
      title: 'പെയിന്റ് കറക്ഷൻ',
      titleEn: 'Paint Correction',
      description: 'Swirl marks, scratches, oxidation removal. Multi-stage machine polishing for mirror finish.',
      price: '₹4,999 മുതൽ',
      link: '/services/ceramic-coating'
    },
    {
      icon: Lightbulb,
      title: 'ഹെഡ്ലൈറ്റ് റെസ്റ്ററേഷൻ',
      titleEn: 'Headlight Restoration',
      description: 'Foggy, yellowed headlights ക്ലിയർ ആക്കുക. Improved visibility & better aesthetics.',
      price: '₹999 മുതൽ',
      link: '/services'
    },
    {
      icon: Settings,
      title: 'എഞ്ചിൻ ബേ ക്ലീനിംഗ്',
      titleEn: 'Engine Bay Cleaning',
      description: 'Safe engine bay degreasing & detailing. Improved cooling & easy maintenance.',
      price: '₹999 മുതൽ',
      link: '/services/engine-bay-cleaning'
    },
    {
      icon: Sun,
      title: 'PPF (പെയിന്റ് പ്രൊട്ടക്ഷൻ ഫിലിം)',
      titleEn: 'Paint Protection Film',
      description: 'Self-healing film for stone chip, scratch protection. Ultimate paint protection.',
      price: '₹25,000 മുതൽ',
      link: '/paint-protection-perinthalmanna'
    },
    {
      icon: Wind,
      title: 'അണ്ടർബോഡി കോട്ടിംഗ്',
      titleEn: 'Underbody Coating',
      description: 'Rust protection for underbody. Essential for Kerala roads & monsoon.',
      price: '₹3,999 മുതൽ',
      link: '/ml/monsoon-car-care-kerala'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" lang="ml">
      <Helmet>
        <html lang="ml" />
        <title>സേവനങ്ങൾ | XERA Services | Car Detailing Ottapalam</title>
        <meta name="description" content="XERA യുടെ എല്ലാ car care services - Ceramic coating, car wash, interior detailing, paint correction." />
        <link rel="canonical" href="https://xeradetailing.in/ml/services" />
        <link rel="alternate" hrefLang="ml" href="https://xeradetailing.in/ml/services" />
        <link rel="alternate" hrefLang="en" href="https://xeradetailing.in/services" />
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                ഞങ്ങളുടെ സേവനങ്ങൾ
              </h1>
              <p className="text-lg text-white/80 mb-4">Our Services</p>
              <p className="text-xl text-white/70 mb-8">
                Complete car care solutions - Express wash മുതൽ premium ceramic coating വരെ. Professional service, guaranteed quality.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6 hover:border-xera-red transition-colors flex flex-col">
                  <service.icon className="w-12 h-12 mb-4 text-xera-red" />
                  <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                  <p className="text-white/50 text-sm mb-3">{service.titleEn}</p>
                  <p className="text-white/70 text-sm mb-4 flex-grow">{service.description}</p>
                  <p className="text-xl font-bold text-xera-red mb-4">{service.price}</p>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full">
                      കൂടുതൽ അറിയുക
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">എന്തുകൊണ്ട് XERA?</h2>
            <p className="text-center text-white/70 mb-12">Why Choose XERA?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-xera-red/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-xera-red" />
                </div>
                <h3 className="font-bold mb-2">Premium Products</h3>
                <p className="text-white/70 text-sm">International quality products മാത്രം ഉപയോഗിക്കുന്നു</p>
              </div>
              <div className="text-center">
                <div className="bg-xera-red/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-xera-red" />
                </div>
                <h3 className="font-bold mb-2">Expert Team</h3>
                <p className="text-white/70 text-sm">Trained professionals with years of experience</p>
              </div>
              <div className="text-center">
                <div className="bg-xera-red/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-xera-red" />
                </div>
                <h3 className="font-bold mb-2">Guaranteed Results</h3>
                <p className="text-white/70 text-sm">100% satisfaction guarantee with warranty</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-xera-red to-red-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">ഇപ്പോൾ ബുക്ക് ചെയ്യുക!</h2>
            <p className="text-lg mb-2">Book Your Service Now!</p>
            <p className="text-white/90 mb-8">Free consultation & quote ലഭിക്കാൻ ഇപ്പോൾ contact ചെയ്യുക</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919605858483" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                വിളിക്കുക: +91 96058 58483
              </a>
              <a href="https://wa.me/919605858483?text=Service%20booking%20വേണം" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                WhatsApp ബുക്കിംഗ്
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesMalayalam;