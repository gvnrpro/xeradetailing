import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { VoiceSearchFAQ } from '@/components/seo/VoiceSearchFAQ';
import { MalayalamBookingForm } from '@/components/malayalam/MalayalamBookingForm';
import { setMalayalamPageMetadata, generateMalayalamLocalBusinessSchema, addMalayalamSchemaToDocument } from '@/utils/malayalamSEO';
import { voiceSearchQueries } from '@/data/voiceSearchQueries';
import { translations } from '@/data/translations';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Shield, Droplets, Sun } from 'lucide-react';

const CeramicCoatingOttapalam = () => {
  const t = translations.ml.pages.ceramicCoatingOttapalam;

  useEffect(() => {
    setMalayalamPageMetadata({
      title: 'സെറാമിക് കോട്ടിംഗ് ഒറ്റപ്പാലം | 9H സംരക്ഷണം | XERA Auto Detailing',
      description: 'ഒറ്റപ്പാലത്തിലെ മികച്ച സെറാമിക് കോട്ടിംഗ് സേവനം. 5 വർഷം വാറന്റി, മൺസൂൺ സംരക്ഷണം, UV പ്രൊട്ടക്ഷൻ. ₹7,999 മുതൽ. Call: +91 9605858483',
      keywords: ['സെറാമിക് കോട്ടിംഗ് ഒറ്റപ്പാലം', 'ceramic coating ottapalam', 'car ceramic coating', 'ഒറ്റപ്പാലം കാർ ഡീറ്റെയിലിംഗ്'],
      canonicalUrl: 'https://xeradetailing.in/ml/ceramic-coating-ottapalam',
      hreflangEn: 'https://xeradetailing.in/blog/ceramic-coating-ottapalam-car-protection',
      ogImage: 'https://xeradetailing.in/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png'
    });

    const schema = generateMalayalamLocalBusinessSchema(
      'XERA Car Wash & Auto Detailing',
      'ഒറ്റപ്പാലത്തിലെ പ്രീമിയം സെറാമിക് കോട്ടിംഗ് & കാർ ഡീറ്റെയിലിംഗ് സ്റ്റുഡിയോ',
      'NSS കോളേജിന് എതിർവശം, പാലപ്പുറം',
      'ഒറ്റപ്പാലം'
    );
    addMalayalamSchemaToDocument(schema);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png')] bg-cover bg-center"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{t.title}</h1>
              <p className="text-xl text-white/90 mb-4">{t.subtitle}</p>
              <p className="text-lg text-white/80 mb-8">{t.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-xera-red hover:bg-xera-red/90" asChild>
                  <a href="tel:+919605858483">ഇപ്പോൾ വിളിക്കുക</a>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <a href="https://wa.me/917559999366">WhatsApp ചാറ്റ്</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-black/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">{t.whyChoose}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-xera-darkgray p-6 rounded-lg border border-xera-lightgray">
                <Sun className="w-12 h-12 text-xera-red mb-4" />
                <h3 className="text-xl font-bold mb-2">{t.benefits.uvProtection.title}</h3>
                <p className="text-white/70">{t.benefits.uvProtection.description}</p>
              </div>
              <div className="bg-xera-darkgray p-6 rounded-lg border border-xera-lightgray">
                <Droplets className="w-12 h-12 text-xera-red mb-4" />
                <h3 className="text-xl font-bold mb-2">{t.benefits.monsoonProtection.title}</h3>
                <p className="text-white/70">{t.benefits.monsoonProtection.description}</p>
              </div>
              <div className="bg-xera-darkgray p-6 rounded-lg border border-xera-lightgray">
                <Shield className="w-12 h-12 text-xera-red mb-4" />
                <h3 className="text-xl font-bold mb-2">{t.benefits.longLasting.title}</h3>
                <p className="text-white/70">{t.benefits.longLasting.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ</h2>
            <VoiceSearchFAQ queries={voiceSearchQueries.ceramicCoatingOttapalam} />
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 bg-black/30">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gradient">ബുക്കിംഗ് ഫോം</h2>
            <MalayalamBookingForm />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CeramicCoatingOttapalam;
