import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { setMalayalamPageMetadata, generateMalayalamLocalBusinessSchema, addMalayalamSchemaToDocument } from '@/utils/malayalamSEO';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, MapPin, Shield, Star } from 'lucide-react';

const AboutMalayalam = () => {
  useEffect(() => {
    setMalayalamPageMetadata({
      title: 'ഞങ്ങളെക്കുറിച്ച് | About XERA | ഒറ്റപ്പാലം Car Detailing',
      description: 'XERA Car Wash & Auto Detailing - ഒറ്റപ്പാലത്തെ പ്രീമിയം കാർ ഡീറ്റെയിലിംഗ് സ്റ്റുഡിയോ. Professional ceramic coating, car wash, interior detailing. Kerala\'s trusted car care brand.',
      keywords: ['XERA ottapalam', 'ഒറ്റപ്പാലം car wash', 'xera detailing', 'about xera', 'car detailing ottapalam'],
      canonicalUrl: 'https://xeradetailing.in/ml/about',
      ogImage: 'https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png',
      hreflangEn: 'https://xeradetailing.in/about'
    });

    const schema = generateMalayalamLocalBusinessSchema(
      'XERA Car Wash & Auto Detailing',
      'ഒറ്റപ്പാലത്തെ പ്രീമിയം കാർ ഡീറ്റെയിലിംഗ് & സെറാമിക് കോട്ടിംഗ് സ്റ്റുഡിയോ',
      'NSS College Road, Palappuram',
      'Ottapalam'
    );
    addMalayalamSchemaToDocument(schema);
  }, []);

  const stats = [
    { icon: Users, value: '1000+', label: 'സന്തുഷ്ട ഉപഭോക്താക്കൾ', labelEn: 'Happy Customers' },
    { icon: Award, value: '5+', label: 'വർഷങ്ങളുടെ അനുഭവം', labelEn: 'Years Experience' },
    { icon: Star, value: '4.9', label: 'Google Rating', labelEn: 'Google Rating' },
    { icon: Shield, value: '100%', label: 'ഗുണനിലവാര ഗ്യാരന്റി', labelEn: 'Quality Guarantee' }
  ];

  const values = [
    { title: 'ഗുണനിലവാരം', titleEn: 'Quality', description: 'Premium products മാത്രം ഉപയോഗിക്കുന്നു. No shortcuts, no compromises.' },
    { title: 'സത്യസന്ധത', titleEn: 'Honesty', description: 'Transparent pricing, no hidden costs. നിങ്ങൾക്ക് ആവശ്യമുള്ളത് മാത്രം recommend ചെയ്യുന്നു.' },
    { title: 'വൈദഗ്ധ്യം', titleEn: 'Expertise', description: 'Trained professionals with years of experience in auto detailing.' },
    { title: 'ഉത്തരവാദിത്തം', titleEn: 'Responsibility', description: 'നിങ്ങളുടെ car ന്റെ care ഞങ്ങളുടെ responsibility ആണ്.' }
  ];

  return (
    <div className="min-h-screen flex flex-col" lang="ml">
      <Helmet>
        <html lang="ml" />
        <title>ഞങ്ങളെക്കുറിച്ച് | About XERA | ഒറ്റപ്പാലം Car Detailing</title>
        <meta name="description" content="XERA Car Wash & Auto Detailing - ഒറ്റപ്പാലത്തെ പ്രീമിയം കാർ ഡീറ്റെയിലിംഗ് സ്റ്റുഡിയോ." />
        <link rel="canonical" href="https://xeradetailing.in/ml/about" />
        <link rel="alternate" hrefLang="ml" href="https://xeradetailing.in/ml/about" />
        <link rel="alternate" hrefLang="en" href="https://xeradetailing.in/about" />
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                XERA - ഞങ്ങളെക്കുറിച്ച്
              </h1>
              <p className="text-lg text-white/80 mb-4">About XERA Car Wash & Auto Detailing</p>
              <p className="text-xl text-white/70 mb-8">
                ഒറ്റപ്പാലത്തെ ഏറ്റവും വിശ്വസനീയമായ car care brand. Premium detailing, ceramic coating, & complete car care solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6 text-center">
                  <stat.icon className="w-10 h-10 mx-auto mb-4 text-xera-red" />
                  <p className="text-3xl font-bold text-xera-red mb-2">{stat.value}</p>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                  <p className="text-white/50 text-xs">{stat.labelEn}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-gradient">ഞങ്ങളുടെ കഥ</h2>
              <p className="text-center text-white/70 mb-8">Our Story</p>
              <div className="prose prose-invert max-w-none text-white/80">
                <p className="mb-4">
                  XERA ആരംഭിച്ചത് ഒരു simple vision ൽ നിന്നാണ് - കേരളത്തിലെ car owners ന് international standard car care ലഭ്യമാക്കുക. 
                  ഒറ്റപ്പാലത്ത് NSS College Road ൽ ഞങ്ങളുടെ state-of-the-art facility ഉണ്ട്.
                </p>
                <p className="mb-4">
                  ഞങ്ങൾ premium products മാത്രം ഉപയോഗിക്കുന്നു - 9H ceramic coatings, professional-grade polishes, & eco-friendly cleaning solutions. 
                  ഞങ്ങളുടെ team trained professionals ആണ്, latest techniques ൽ expertise ഉള്ളവർ.
                </p>
                <p>
                  Palakkad district ലെ 1000+ satisfied customers ഞങ്ങളെ trust ചെയ്യുന്നു. Shoranur, Pattambi, Thrissur, Malappuram എന്നിവിടങ്ങളിൽ 
                  നിന്നുള്ള customers regular ആയി visit ചെയ്യുന്നു.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">ഞങ്ങളുടെ മൂല്യങ്ങൾ</h2>
            <p className="text-center text-white/70 mb-12">Our Values</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value) => (
                <div key={value.title} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6 text-center hover:border-xera-red transition-colors">
                  <h3 className="text-xl font-bold mb-1 text-xera-red">{value.title}</h3>
                  <p className="text-white/50 text-sm mb-3">{value.titleEn}</p>
                  <p className="text-white/70 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-gradient">ഞങ്ങളുടെ ലൊക്കേഷൻ</h2>
              <p className="text-center text-white/70 mb-8">Our Location</p>
              <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-xera-red flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">XERA Car Wash & Auto Detailing</h3>
                    <p className="text-white/70">NSS College Road, Palappuram</p>
                    <p className="text-white/70">Ottapalam, Palakkad - 679103</p>
                    <p className="text-white/70">Kerala, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <Clock className="w-8 h-8 text-xera-red flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">പ്രവൃത്തി സമയം (Working Hours)</h3>
                    <p className="text-white/70">തിങ്കൾ - ശനി: 9:00 AM - 7:00 PM</p>
                    <p className="text-white/70">ഞായർ: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-xera-red hover:bg-red-700">
                    <a href="https://g.page/xeradetailing" target="_blank" rel="noopener noreferrer">
                      Google Maps ൽ കാണുക
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="tel:+919605858483">വിളിക്കുക: +91 9605858483</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-xera-red to-red-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">ഞങ്ങളെ സന്ദർശിക്കുക!</h2>
            <p className="text-lg mb-2">Visit Us Today!</p>
            <p className="text-white/90 mb-8">നിങ്ങളുടെ car ന്റെ best care ഞങ്ങളിൽ trust ചെയ്യുക</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/919605858483" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                WhatsApp: +91 96058 58483
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

export default AboutMalayalam;