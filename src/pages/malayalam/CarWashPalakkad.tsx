import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import VoiceSearchFAQ from '@/components/seo/VoiceSearchFAQ';
import MalayalamBookingForm from '@/components/malayalam/MalayalamBookingForm';
import { setMalayalamPageMetadata, generateMalayalamLocalBusinessSchema, addMalayalamSchemaToDocument } from '@/utils/malayalamSEO';
import { Button } from '@/components/ui/button';
import { Droplets, Sparkles, Shield, Clock } from 'lucide-react';

const CarWashPalakkad = () => {
  useEffect(() => {
    setMalayalamPageMetadata({
      title: 'കാർ വാഷ് പാലക്കാട് | Best Car Wash Palakkad | XERA',
      description: 'പാലക്കാട്ടിലെ മികച്ച കാർ വാഷ് സേവനം. Express wash മുതൽ premium detailing വരെ. Professional car cleaning in Palakkad district.',
      keywords: 'കാർ വാഷ് പാലക്കാട്, car wash palakkad, car cleaning palakkad, express car wash palakkad, best car wash near palakkad, കാർ ക്ലീനിംഗ്',
      canonicalUrl: 'https://xeradetailing.in/ml/car-wash-palakkad',
      ogImage: 'https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png',
      enHreflang: 'https://xeradetailing.in/car-wash-pattambi'
    });

    const schema = generateMalayalamLocalBusinessSchema(
      'XERA Car Wash - Palakkad Service',
      'പാലക്കാട് ജില്ലയിലെ പ്രീമിയം കാർ വാഷ് & ഡീറ്റെയിലിംഗ് സേവനം',
      'NSS College Road, Palappuram',
      'Ottapalam'
    );
    addMalayalamSchemaToDocument(schema);
  }, []);

  const packages = [
    { icon: Droplets, title: 'എക്സ്പ്രസ് വാഷ്', titleEn: 'Express Wash', description: 'വേഗത്തിലുള്ള എക്സ്റ്റീരിയർ വാഷ് & ഡ്രൈ', price: '₹299', time: '30 മിനിറ്റ്' },
    { icon: Shield, title: 'പ്രീമിയം വാഷ്', titleEn: 'Premium Wash', description: 'എക്സ്റ്റീരിയർ + ഇന്റീരിയർ vacuum + dashboard wipe', price: '₹599', time: '1 മണിക്കൂർ' },
    { icon: Sparkles, title: 'ഡീലക്സ് വാഷ്', titleEn: 'Deluxe Wash', description: 'Complete wash + interior detailing + tire shine', price: '₹999', time: '2 മണിക്കൂർ' },
    { icon: Clock, title: 'അൾട്ടിമേറ്റ് ക്ലീൻ', titleEn: 'Ultimate Clean', description: 'Full detailing + engine bay + ceramic spray', price: '₹1,999', time: '3 മണിക്കൂർ' }
  ];

  const faqQueries = [
    { question: 'പാലക്കാട്ടിൽ എവിടെയാണ് നല്ല കാർ വാഷ് ഉള്ളത്?', answer: 'ഒറ്റപ്പാലത്തുള്ള XERA കാർ വാഷ് പാലക്കാട് ജില്ലയിലെ ഏറ്റവും മികച്ച car wash service ആണ്. Express wash മുതൽ premium detailing വരെ ലഭ്യം.', keywords: ['കാർ വാഷ് പാലക്കാട്', 'car wash palakkad evide'] },
    { question: 'കാർ വാഷിന് എത്ര രൂപ വരും പാലക്കാട്?', answer: 'Express wash ₹299 മുതൽ Ultimate clean ₹1,999 വരെ. എല്ലാ packages ലും professional grade equipment ഉപയോഗിക്കുന്നു.', keywords: ['car wash price palakkad', 'കാർ വാഷ് വില'] },
    { question: 'പാലക്കാട്ടിൽ home car wash service ഉണ്ടോ?', answer: 'Premium packages ന് free pickup service ഉണ്ട്. Palakkad town, Ottapalam, Shoranur, Pattambi എന്നിവിടങ്ങളിൽ pickup ലഭ്യം.', keywords: ['home car wash palakkad', 'car wash pickup'] }
  ];

  const serviceAreas = ['പാലക്കാട് ടൗൺ', 'ഒറ്റപ്പാലം', 'ഷൊർണൂർ', 'പട്ടാമ്പി', 'ആലത്തൂർ', 'ചിറ്റൂർ', 'മണ്ണാർക്കാട്', 'കൊല്ലങ്കോട്'];

  return (
    <div className="min-h-screen flex flex-col" lang="ml">
      <Helmet>
        <html lang="ml" />
        <title>കാർ വാഷ് പാലക്കാട് | Best Car Wash Palakkad | XERA</title>
        <meta name="description" content="പാലക്കാട്ടിലെ മികച്ച കാർ വാഷ് സേവനം. Express wash മുതൽ premium detailing വരെ. Professional car cleaning in Palakkad." />
        <link rel="canonical" href="https://xeradetailing.in/ml/car-wash-palakkad" />
        <link rel="alternate" hreflang="ml" href="https://xeradetailing.in/ml/car-wash-palakkad" />
        <link rel="alternate" hreflang="en" href="https://xeradetailing.in/car-wash-pattambi" />
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                പാലക്കാട്ടിലെ മികച്ച കാർ വാഷ് സേവനം
              </h1>
              <p className="text-lg text-white/80 mb-4">Best Car Wash Service in Palakkad District</p>
              <p className="text-xl text-white/70 mb-8">
                Express wash മുതൽ premium detailing വരെ. നിങ്ങളുടെ കാർ പുതുമയോടെ സൂക്ഷിക്കാൻ ഞങ്ങൾ സഹായിക്കാം!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="bg-xera-red hover:bg-red-700 text-lg px-8 py-6">
                  <a href="https://wa.me/919605858483?text=ഹായ്%20XERA%2C%20പാലക്കാട്ടിൽ%20നിന്ന്%20car%20wash%20booking%20വേണം">
                    ഇപ്പോൾ ബുക്ക് ചെയ്യുക
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-white/30 text-lg px-8 py-6">
                  <a href="tel:+919605858483">വിളിക്കുക: +91 9605858483</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">കാർ വാഷ് പാക്കേജുകൾ</h2>
            <p className="text-center text-white/70 mb-12">Car Wash Packages for Palakkad</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <div key={pkg.title} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6 text-center hover:border-xera-red transition-colors">
                  <pkg.icon className="w-12 h-12 mx-auto mb-4 text-xera-red" />
                  <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                  <p className="text-white/50 text-sm mb-2">{pkg.titleEn}</p>
                  <p className="text-white/70 mb-4 text-sm">{pkg.description}</p>
                  <p className="text-3xl font-bold text-xera-red mb-2">{pkg.price}</p>
                  <p className="text-white/50 text-sm">{pkg.time}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">സേവന മേഖലകൾ</h2>
            <p className="text-center text-white/70 mb-8">Service Areas in Palakkad District</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {serviceAreas.map((area) => (
                <div key={area} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-4 text-center hover:border-xera-red transition-colors">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">പതിവ് ചോദ്യങ്ങൾ</h2>
            <p className="text-center text-white/70 mb-12">Frequently Asked Questions</p>
            <VoiceSearchFAQ queries={faqQueries} />
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">ബുക്കിംഗ്</h2>
            <p className="text-center text-white/70 mb-8">Book Your Car Wash Now</p>
            <MalayalamBookingForm />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-xera-red to-red-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">നിങ്ങളുടെ കാർ ക്ലീനിംഗിന് തയ്യാറാണോ?</h2>
            <p className="text-lg mb-2">Ready for a Sparkling Clean Car?</p>
            <p className="text-white/90 mb-8">പാലക്കാട് ജില്ലയിലെ എവിടെ നിന്നും free pickup service ലഭ്യം</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919605858483" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                വിളിക്കുക: +91 96058 58483
              </a>
              <a href="https://wa.me/919605858483?text=പാലക്കാട്ടിൽ%20നിന്ന്%20car%20wash%20booking" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
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

export default CarWashPalakkad;