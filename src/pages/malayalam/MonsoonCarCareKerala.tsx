import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import VoiceSearchFAQ from '@/components/seo/VoiceSearchFAQ';
import MalayalamBookingForm from '@/components/malayalam/MalayalamBookingForm';
import { setMalayalamPageMetadata, generateMalayalamLocalBusinessSchema, addMalayalamSchemaToDocument } from '@/utils/malayalamSEO';
import { Button } from '@/components/ui/button';
import { CloudRain, Shield, Droplets, Bug, Car, Sparkles } from 'lucide-react';

const MonsoonCarCareKerala = () => {
  useEffect(() => {
    setMalayalamPageMetadata({
      title: 'മൺസൂൺ കാർ കെയർ കേരളം | Monsoon Car Care Kerala | XERA',
      description: 'കേരളത്തിലെ മഴക്കാലത്ത് നിങ്ങളുടെ കാർ എങ്ങനെ സംരക്ഷിക്കാം? Monsoon car care tips, rust protection, water damage prevention. Professional monsoon car service in Kerala.',
      keywords: 'മൺസൂൺ കാർ കെയർ, monsoon car care kerala, മഴക്കാല കാർ പരിപാലനം, rain protection car kerala, rust protection kerala',
      canonicalUrl: 'https://xeradetailing.in/ml/monsoon-car-care-kerala',
      ogImage: 'https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png'
    });

    const schema = generateMalayalamLocalBusinessSchema(
      'XERA Monsoon Car Care Kerala',
      'കേരളത്തിലെ മൺസൂൺ സീസണിൽ കാർ സംരക്ഷണ സേവനങ്ങൾ',
      'NSS College Road, Palappuram',
      'Ottapalam'
    );
    addMalayalamSchemaToDocument(schema);
  }, []);

  const monsoonServices = [
    { icon: Shield, title: 'സെറാമിക് കോട്ടിംഗ്', titleEn: 'Ceramic Coating', description: 'മഴയിൽ നിന്നും UV rays ൽ നിന്നും സംരക്ഷണം. 5 വർഷം warranty.', price: '₹7,999' },
    { icon: Droplets, title: 'അണ്ടർബോഡി കോട്ടിംഗ്', titleEn: 'Underbody Coating', description: 'Rust protection for underbody. Kerala roads ന് അനിവാര്യം.', price: '₹3,999' },
    { icon: Bug, title: 'ഇന്റീരിയർ സാനിറ്റൈസേഷൻ', titleEn: 'Interior Sanitization', description: 'Fungus, mold, bad odor എന്നിവ prevent ചെയ്യുക.', price: '₹1,299' },
    { icon: Car, title: 'എഞ്ചിൻ ബേ ക്ലീനിംഗ്', titleEn: 'Engine Bay Cleaning', description: 'Water logging prevention & engine protection.', price: '₹999' },
    { icon: CloudRain, title: 'ഗ്ലാസ് കോട്ടിംഗ്', titleEn: 'Glass Coating', description: 'Rain repellent coating for windshield & windows.', price: '₹1,499' },
    { icon: Sparkles, title: 'മൺസൂൺ സ്പെഷ്യൽ പാക്കേജ്', titleEn: 'Monsoon Special Package', description: 'Complete monsoon protection combo package.', price: '₹9,999' }
  ];

  const careTips = [
    'മഴക്കാലത്ത് ആഴ്ചയിൽ ഒരിക്കലെങ്കിലും കാർ വാഷ് ചെയ്യുക',
    'AC filter മാസത്തിൽ ഒരിക്കൽ clean ചെയ്യുക',
    'Tyre pressure regularly check ചെയ്യുക',
    'Wiper blades condition check ചെയ്യുക',
    'Underbody rust ഉണ്ടോ എന്ന് inspect ചെയ്യുക',
    'Headlights & taillights working properly ആണോ confirm ചെയ്യുക'
  ];

  const faqQueries = [
    { question: 'മഴക്കാലത്ത് കാർ എങ്ങനെ സംരക്ഷിക്കാം?', answer: 'Ceramic coating, underbody coating, interior sanitization എന്നിവ മഴക്കാലത്ത് car protection ന് essential ആണ്. XERA monsoon special package എല്ലാം ഉൾപ്പെടുന്നു.', keywords: ['monsoon car care', 'മഴക്കാല കാർ സംരക്ഷണം'] },
    { question: 'മൺസൂണിൽ ceramic coating ചെയ്യണോ?', answer: 'തീർച്ചയായും! Ceramic coating മഴവെള്ളം repel ചെയ്യും, water spots prevent ചെയ്യും, paint protect ചെയ്യും. Kerala monsoon ന് ideal ആണ്.', keywords: ['ceramic coating monsoon', 'മൺസൂൺ ceramic coating'] },
    { question: 'Underbody coating എന്തിനാണ്?', answer: 'Kerala roads ൽ water logging & salt exposure underbody rust ഉണ്ടാക്കും. Underbody coating ഇത് prevent ചെയ്യും. ₹3,999 മുതൽ.', keywords: ['underbody coating kerala', 'rust protection'] }
  ];

  return (
    <div className="min-h-screen flex flex-col" lang="ml">
      <Helmet>
        <html lang="ml" />
        <title>മൺസൂൺ കാർ കെയർ കേരളം | Monsoon Car Care Kerala | XERA</title>
        <meta name="description" content="കേരളത്തിലെ മഴക്കാലത്ത് നിങ്ങളുടെ കാർ എങ്ങനെ സംരക്ഷിക്കാം? Monsoon car care tips, rust protection." />
        <link rel="canonical" href="https://xeradetailing.in/ml/monsoon-car-care-kerala" />
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <CloudRain className="w-16 h-16 text-xera-red" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                കേരളത്തിലെ മൺസൂൺ കാർ കെയർ
              </h1>
              <p className="text-lg text-white/80 mb-4">Monsoon Car Care Guide for Kerala</p>
              <p className="text-xl text-white/70 mb-8">
                മഴക്കാലത്ത് നിങ്ങളുടെ കാർ സംരക്ഷിക്കാൻ XERA യുടെ professional monsoon protection services. Rust prevention, water damage protection, interior sanitization.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="bg-xera-red hover:bg-red-700 text-lg px-8 py-6">
                  <a href="https://wa.me/919605858483?text=ഹായ്%20XERA%2C%20monsoon%20car%20care%20package%20booking%20വേണം">
                    മൺസൂൺ പാക്കേജ് ബുക്ക് ചെയ്യുക
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">മൺസൂൺ പ്രൊട്ടക്ഷൻ സേവനങ്ങൾ</h2>
            <p className="text-center text-white/70 mb-12">Monsoon Protection Services</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {monsoonServices.map((service) => (
                <div key={service.title} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6 hover:border-xera-red transition-colors">
                  <service.icon className="w-10 h-10 mb-4 text-xera-red" />
                  <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                  <p className="text-white/50 text-sm mb-2">{service.titleEn}</p>
                  <p className="text-white/70 mb-4 text-sm">{service.description}</p>
                  <p className="text-2xl font-bold text-xera-red">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-gradient">മൺസൂൺ കാർ കെയർ ടിപ്സ്</h2>
              <p className="text-center text-white/70 mb-8">Essential Monsoon Car Care Tips</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {careTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 bg-xera-darkgray p-4 rounded-lg">
                    <span className="bg-xera-red text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">{index + 1}</span>
                    <p className="text-white/80">{tip}</p>
                  </div>
                ))}
              </div>
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
            <MalayalamBookingForm />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MonsoonCarCareKerala;