import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import VoiceSearchFAQ from '@/components/seo/VoiceSearchFAQ';
import MalayalamBookingForm from '@/components/malayalam/MalayalamBookingForm';
import { setMalayalamPageMetadata, generateMalayalamLocalBusinessSchema, addMalayalamSchemaToDocument } from '@/utils/malayalamSEO';
import { Button } from '@/components/ui/button';
import { Sofa, Wind, Sparkles, Bug } from 'lucide-react';

const InteriorCleaningShoranur = () => {
  useEffect(() => {
    setMalayalamPageMetadata({
      title: 'ഇന്റീരിയർ ക്ലീനിംഗ് ഷൊർണൂർ | Interior Cleaning Shoranur | XERA',
      description: 'ഷൊർണൂരിലെ മികച്ച കാർ ഇന്റീരിയർ ക്ലീനിംഗ് സേവനം. Seat cleaning, dashboard detailing, odor removal. Professional interior detailing near Shoranur Railway Station.',
      keywords: 'ഇന്റീരിയർ ക്ലീനിംഗ് ഷൊർണൂർ, interior cleaning shoranur, seat cleaning shoranur, car interior detailing shoranur, dashboard cleaning',
      canonicalUrl: 'https://xeradetailing.in/ml/interior-cleaning-shoranur',
      ogImage: 'https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png',
      enHreflang: 'https://xeradetailing.in/car-detailing-shoranur'
    });

    const schema = generateMalayalamLocalBusinessSchema(
      'XERA Interior Cleaning - Shoranur',
      'ഷൊർണൂരിലെ പ്രൊഫഷണൽ കാർ ഇന്റീരിയർ ക്ലീനിംഗ് സേവനം',
      'NSS College Road, Palappuram',
      'Ottapalam'
    );
    addMalayalamSchemaToDocument(schema);
  }, []);

  const services = [
    { icon: Sofa, title: 'സീറ്റ് ക്ലീനിംഗ്', titleEn: 'Seat Deep Cleaning', description: 'Fabric/leather seat shampooing & stain removal', price: '₹1,499' },
    { icon: Wind, title: 'AC വെന്റ് സാനിറ്റൈസേഷൻ', titleEn: 'AC Vent Sanitization', description: 'Complete AC system cleaning & anti-bacterial treatment', price: '₹799' },
    { icon: Sparkles, title: 'ഡാഷ്ബോർഡ് ഡീറ്റെയിലിംഗ്', titleEn: 'Dashboard Detailing', description: 'Dashboard, door panels & console restoration with UV protection', price: '₹999' },
    { icon: Bug, title: 'ഓഡർ റിമൂവൽ', titleEn: 'Odor Removal', description: 'Deep sanitization & ozone treatment for stubborn odors', price: '₹1,299' }
  ];

  const faqQueries = [
    { question: 'ഷൊർണൂരിൽ കാർ ഇന്റീരിയർ ക്ലീനിംഗ് എവിടെ ചെയ്യാം?', answer: 'ഒറ്റപ്പാലത്തുള്ള XERA Detailing ഷൊർണൂർ കസ്റ്റമർമാർക്ക് professional interior cleaning നൽകുന്നു. Shoranur Railway Station ൽ നിന്ന് 15 മിനിറ്റ് മാത്രം.', keywords: ['ഇന്റീരിയർ ക്ലീനിംഗ് ഷൊർണൂർ', 'interior cleaning shoranur evide'] },
    { question: 'ഇന്റീരിയർ ക്ലീനിംഗിന് എത്ര രൂപ വരും?', answer: 'Seat cleaning ₹1,499, AC sanitization ₹799, complete interior ₹2,999. Free pickup Shoranur ൽ നിന്ന് ലഭ്യം.', keywords: ['interior cleaning price', 'ഇന്റീരിയർ ക്ലീനിംഗ് വില'] },
    { question: 'കാറിലെ ദുർഗന്ധം മാറ്റാൻ കഴിയുമോ?', answer: 'തീർച്ചയായും! ഞങ്ങളുടെ ozone treatment smoke, pet, food odors എന്നിവ പൂർണ്ണമായും നീക്കും. ₹1,299 മാത്രം.', keywords: ['car odor removal', 'ദുർഗന്ധം മാറ്റൽ'] }
  ];

  return (
    <div className="min-h-screen flex flex-col" lang="ml">
      <Helmet>
        <html lang="ml" />
        <title>ഇന്റീരിയർ ക്ലീനിംഗ് ഷൊർണൂർ | Interior Cleaning Shoranur | XERA</title>
        <meta name="description" content="ഷൊർണൂരിലെ മികച്ച കാർ ഇന്റീരിയർ ക്ലീനിംഗ് സേവനം. Seat cleaning, dashboard detailing, odor removal." />
        <link rel="canonical" href="https://xeradetailing.in/ml/interior-cleaning-shoranur" />
        <link rel="alternate" hreflang="ml" href="https://xeradetailing.in/ml/interior-cleaning-shoranur" />
        <link rel="alternate" hreflang="en" href="https://xeradetailing.in/car-detailing-shoranur" />
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                ഷൊർണൂരിലെ കാർ ഇന്റീരിയർ ക്ലീനിംഗ്
              </h1>
              <p className="text-lg text-white/80 mb-4">Professional Interior Cleaning in Shoranur</p>
              <p className="text-xl text-white/70 mb-8">
                നിങ്ങളുടെ കാറിന്റെ ഇന്റീരിയർ പുതിയത് പോലെ ക്ലീൻ ചെയ്യാം. Seat cleaning, dashboard detailing, AC sanitization & odor removal.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="bg-xera-red hover:bg-red-700 text-lg px-8 py-6">
                  <a href="https://wa.me/919605858483?text=ഹായ്%20XERA%2C%20ഷൊർണൂരിൽ%20നിന്ന്%20interior%20cleaning%20booking%20വേണം">
                    ബുക്ക് ചെയ്യുക
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-white/30 text-lg px-8 py-6">
                  <a href="tel:+919605858483">വിളിക്കുക: +91 9605858483</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">ഇന്റീരിയർ ക്ലീനിംഗ് സേവനങ്ങൾ</h2>
            <p className="text-center text-white/70 mb-12">Interior Cleaning Services</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6 text-center hover:border-xera-red transition-colors">
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-xera-red" />
                  <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                  <p className="text-white/50 text-sm mb-2">{service.titleEn}</p>
                  <p className="text-white/70 mb-4 text-sm">{service.description}</p>
                  <p className="text-2xl font-bold text-xera-red">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Package */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-xera-red to-red-700 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">കംപ്ലീറ്റ് ഇന്റീരിയർ റെസ്റ്ററേഷൻ</h3>
              <p className="text-white/90 mb-4">Complete Interior Restoration Package</p>
              <p className="text-white/80 mb-6">Seats, carpet, dashboard, door panels, headliner & trunk - എല്ലാം ഉൾപ്പെടുന്നു</p>
              <p className="text-4xl font-bold mb-6">₹2,999</p>
              <Button asChild className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4">
                <a href="https://wa.me/919605858483?text=ഷൊർണൂരിൽ%20നിന്ന്%20complete%20interior%20package%20book%20ചെയ്യണം">
                  ഇപ്പോൾ ബുക്ക് ചെയ്യുക
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">പതിവ് ചോദ്യങ്ങൾ</h2>
            <p className="text-center text-white/70 mb-12">Frequently Asked Questions</p>
            <VoiceSearchFAQ queries={faqQueries} />
          </div>
        </section>

        {/* Booking */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">ബുക്കിംഗ്</h2>
            <p className="text-center text-white/70 mb-8">Book Interior Cleaning Now</p>
            <MalayalamBookingForm />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default InteriorCleaningShoranur;