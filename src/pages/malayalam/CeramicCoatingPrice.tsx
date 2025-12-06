import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import VoiceSearchFAQ from '@/components/seo/VoiceSearchFAQ';
import { setMalayalamPageMetadata, generateMalayalamLocalBusinessSchema, addMalayalamSchemaToDocument } from '@/utils/malayalamSEO';
import { Button } from '@/components/ui/button';
import { CheckCheck, Car, Truck, Gem } from 'lucide-react';

const CeramicCoatingPrice = () => {
  useEffect(() => {
    setMalayalamPageMetadata({
      title: 'സെറാമിക് കോട്ടിംഗ് വില കേരളം | Ceramic Coating Price Kerala | XERA',
      description: 'കേരളത്തിൽ ceramic coating ന് എത്ര രൂപ വരും? Hatchback, Sedan, SUV, Luxury car pricing. Transparent pricing with 5+ year warranty.',
      keywords: 'സെറാമിക് കോട്ടിംഗ് വില, ceramic coating price kerala, ceramic coating cost ottapalam, 9h ceramic coating price, ceramic coating packages kerala',
      canonicalUrl: 'https://xeradetailing.in/ml/ceramic-coating-price',
      ogImage: 'https://xeradetailing.in/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png'
    });

    const schema = generateMalayalamLocalBusinessSchema(
      'XERA Ceramic Coating Kerala',
      'കേരളത്തിലെ പ്രീമിയം ceramic coating pricing',
      'NSS College Road, Palappuram',
      'Ottapalam'
    );
    addMalayalamSchemaToDocument(schema);
  }, []);

  const vehiclePricing = [
    {
      icon: Car,
      type: 'ഹാച്ച്ബാക്ക്',
      typeEn: 'Hatchback',
      examples: 'Swift, i20, Baleno, Alto',
      packages: [
        { name: 'സ്റ്റാൻഡേർഡ്', warranty: '3 വർഷം', price: '₹7,999' },
        { name: 'പ്രീമിയം', warranty: '5 വർഷം', price: '₹10,999' },
        { name: 'പ്ലാറ്റിനം', warranty: '7 വർഷം', price: '₹14,999' }
      ]
    },
    {
      icon: Car,
      type: 'സെഡാൻ',
      typeEn: 'Sedan',
      examples: 'City, Verna, Ciaz, Dzire',
      packages: [
        { name: 'സ്റ്റാൻഡേർഡ്', warranty: '3 വർഷം', price: '₹9,999' },
        { name: 'പ്രീമിയം', warranty: '5 വർഷം', price: '₹13,999' },
        { name: 'പ്ലാറ്റിനം', warranty: '7 വർഷം', price: '₹17,999' }
      ]
    },
    {
      icon: Truck,
      type: 'SUV',
      typeEn: 'SUV',
      examples: 'Creta, Seltos, Scorpio, Fortuner',
      packages: [
        { name: 'സ്റ്റാൻഡേർഡ്', warranty: '3 വർഷം', price: '₹12,999' },
        { name: 'പ്രീമിയം', warranty: '5 വർഷം', price: '₹16,999' },
        { name: 'പ്ലാറ്റിനം', warranty: '7 വർഷം', price: '₹21,999' }
      ]
    },
    {
      icon: Gem,
      type: 'ലക്ഷറി',
      typeEn: 'Luxury',
      examples: 'Mercedes, BMW, Audi, Volvo',
      packages: [
        { name: 'സ്റ്റാൻഡേർഡ്', warranty: '3 വർഷം', price: '₹15,999' },
        { name: 'പ്രീമിയം', warranty: '5 വർഷം', price: '₹21,999' },
        { name: 'പ്ലാറ്റിനം', warranty: '7 വർഷം', price: '₹29,999' }
      ]
    }
  ];

  const packageIncludes = {
    standard: ['9H Ceramic Coating', 'Basic Paint Prep', 'Exterior Only', '3 Year Warranty'],
    premium: ['9H Dual Layer Coating', 'Paint Correction', 'Interior Coating', '5 Year Warranty', 'Maintenance Kit'],
    platinum: ['Graphene Infused Coating', 'Full Paint Correction', 'Interior + Glass Coating', '7 Year Warranty', 'Annual Checkup', 'Premium Maintenance Kit']
  };

  const faqQueries = [
    { question: 'സെറാമിക് കോട്ടിംഗിന് എത്ര രൂപ വരും?', answer: 'Hatchback ₹7,999, Sedan ₹9,999, SUV ₹12,999 മുതൽ. Warranty 3-7 വർഷം. Vehicle size & package അനുസരിച്ച് price വ്യത്യാസപ്പെടും.', keywords: ['ceramic coating price', 'സെറാമിക് കോട്ടിംഗ് വില'] },
    { question: 'എന്താണ് 9H ceramic coating?', answer: '9H എന്നത് hardness scale ആണ്. Diamond 10H ആണ്. 9H coating scratches & UV damage നിന്ന് strong protection നൽകും.', keywords: ['9h ceramic coating', 'ceramic coating hardness'] },
    { question: 'Ceramic coating എത്ര നാൾ നിലനിൽക്കും?', answer: 'ഞങ്ങളുടെ ceramic coating 3-7 വർഷം നിലനിൽക്കും. Proper maintenance ൽ കൂടുതൽ കാലം പിടിക്കും. Kerala climate ന് specifically formulated.', keywords: ['ceramic coating durability', 'ceramic coating life'] }
  ];

  return (
    <div className="min-h-screen flex flex-col" lang="ml">
      <Helmet>
        <html lang="ml" />
        <title>സെറാമിക് കോട്ടിംഗ് വില കേരളം | Ceramic Coating Price Kerala | XERA</title>
        <meta name="description" content="കേരളത്തിൽ ceramic coating ന് എത്ര രൂപ വരും? Transparent pricing with 5+ year warranty." />
        <link rel="canonical" href="https://xeradetailing.in/ml/ceramic-coating-price" />
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                സെറാമിക് കോട്ടിംഗ് വില - കേരളം
              </h1>
              <p className="text-lg text-white/80 mb-4">Ceramic Coating Price List - Kerala</p>
              <p className="text-xl text-white/70 mb-8">
                Transparent pricing, no hidden costs. നിങ്ങളുടെ vehicle type & package അനുസരിച്ച് exact price അറിയുക.
              </p>
              <Button asChild className="bg-xera-red hover:bg-red-700 text-lg px-8 py-6">
                <a href="https://wa.me/919605858483?text=ഹായ്%20XERA%2C%20എന്റെ%20car%20ന്%20ceramic%20coating%20quote%20വേണം">
                  Free Quote നേടുക
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Tables */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">വാഹന അടിസ്ഥാന വില</h2>
            <p className="text-center text-white/70 mb-12">Price Based on Vehicle Type</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {vehiclePricing.map((vehicle) => (
                <div key={vehicle.type} className="bg-xera-darkgray border border-xera-lightgray rounded-lg overflow-hidden">
                  <div className="bg-xera-red/20 p-4 flex items-center gap-4">
                    <vehicle.icon className="w-10 h-10 text-xera-red" />
                    <div>
                      <h3 className="text-xl font-bold">{vehicle.type}</h3>
                      <p className="text-white/50 text-sm">{vehicle.typeEn} - {vehicle.examples}</p>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    {vehicle.packages.map((pkg) => (
                      <div key={pkg.name} className="flex justify-between items-center p-3 bg-black/20 rounded">
                        <div>
                          <p className="font-bold">{pkg.name}</p>
                          <p className="text-white/50 text-sm">{pkg.warranty} Warranty</p>
                        </div>
                        <p className="text-xl font-bold text-xera-red">{pkg.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Package Details */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">പാക്കേജ് വിശദാംശങ്ങൾ</h2>
            <p className="text-center text-white/70 mb-12">What's Included in Each Package</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center">സ്റ്റാൻഡേർഡ്</h3>
                <ul className="space-y-2">
                  {packageIncludes.standard.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCheck className="w-4 h-4 text-green-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-xera-darkgray border-2 border-xera-red rounded-lg p-6 scale-105">
                <div className="bg-xera-red text-white text-xs font-bold py-1 px-3 rounded-full w-fit mx-auto mb-4">POPULAR</div>
                <h3 className="text-xl font-bold mb-4 text-center">പ്രീമിയം</h3>
                <ul className="space-y-2">
                  {packageIncludes.premium.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCheck className="w-4 h-4 text-green-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center">പ്ലാറ്റിനം</h3>
                <ul className="space-y-2">
                  {packageIncludes.platinum.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCheck className="w-4 h-4 text-green-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">പതിവ് ചോദ്യങ്ങൾ</h2>
            <p className="text-center text-white/70 mb-12">Pricing FAQ</p>
            <VoiceSearchFAQ queries={faqQueries} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-xera-red to-red-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">നിങ്ങളുടെ Car ന് Exact Quote നേടുക</h2>
            <p className="text-white/90 mb-8">Vehicle photos അയച്ചാൽ exact price പറയാം. Free consultation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919605858483" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                വിളിക്കുക: +91 96058 58483
              </a>
              <a href="https://wa.me/919605858483?text=Ceramic%20coating%20quote%20വേണം" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                WhatsApp Quote
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

export default CeramicCoatingPrice;