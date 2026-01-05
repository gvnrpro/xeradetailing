import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MalayalamBookingForm } from '@/components/malayalam/MalayalamBookingForm';
import { setMalayalamPageMetadata, generateMalayalamLocalBusinessSchema, addMalayalamSchemaToDocument } from '@/utils/malayalamSEO';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactMalayalam = () => {
  useEffect(() => {
    setMalayalamPageMetadata({
      title: 'ബന്ധപ്പെടുക | Contact XERA | Ottapalam Car Detailing',
      description: 'XERA Car Wash & Auto Detailing - ബന്ധപ്പെടുക. Phone, WhatsApp, address, working hours. Book your car service today in Ottapalam.',
      keywords: ['xera contact', 'xera phone number', 'xera ottapalam address', 'car detailing booking', 'ബന്ധപ്പെടുക'],
      canonicalUrl: 'https://xeradetailing.in/ml/contact',
      ogImage: 'https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png',
      hreflangEn: 'https://xeradetailing.in/contact'
    });

    const schema = generateMalayalamLocalBusinessSchema(
      'XERA Car Wash & Auto Detailing',
      'ഒറ്റപ്പാലത്തെ പ്രീമിയം കാർ ഡീറ്റെയിലിംഗ് സ്റ്റുഡിയോ',
      'NSS College Road, Palappuram',
      'Ottapalam'
    );
    addMalayalamSchemaToDocument(schema);
  }, []);

  const contactInfo = [
    { icon: Phone, title: 'ഫോൺ നമ്പർ', titleEn: 'Phone', value: '+91 96058 58483', link: 'tel:+919605858483' },
    { icon: MessageCircle, title: 'WhatsApp', titleEn: 'WhatsApp', value: '+91 96058 58483', link: 'https://wa.me/919605858483' },
    { icon: Mail, title: 'ഇമെയിൽ', titleEn: 'Email', value: 'info@xeradetailing.in', link: 'mailto:info@xeradetailing.in' }
  ];

  return (
    <div className="min-h-screen flex flex-col" lang="ml">
      <Helmet>
        <html lang="ml" />
        <title>ബന്ധപ്പെടുക | Contact XERA | Ottapalam Car Detailing</title>
        <meta name="description" content="XERA Car Wash & Auto Detailing - ബന്ധപ്പെടുക. Phone, WhatsApp, address, working hours." />
        <link rel="canonical" href="https://xeradetailing.in/ml/contact" />
        <link rel="alternate" hrefLang="ml" href="https://xeradetailing.in/ml/contact" />
        <link rel="alternate" hrefLang="en" href="https://xeradetailing.in/contact" />
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                ബന്ധപ്പെടുക
              </h1>
              <p className="text-lg text-white/80 mb-4">Contact Us</p>
              <p className="text-xl text-white/70 mb-8">
                നിങ്ങളുടെ car care needs ന് ഞങ്ങളെ contact ചെയ്യുക. Free consultation & quote ലഭ്യം.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {contactInfo.map((info) => (
                <a key={info.title} href={info.link} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6 text-center hover:border-xera-red transition-colors block">
                  <info.icon className="w-12 h-12 mx-auto mb-4 text-xera-red" />
                  <h3 className="font-bold mb-1">{info.title}</h3>
                  <p className="text-white/50 text-sm mb-2">{info.titleEn}</p>
                  <p className="text-white/80">{info.value}</p>
                </a>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Address & Hours */}
              <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-8">
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="w-8 h-8 text-xera-red flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">വിലാസം</h3>
                      <p className="text-white/50 text-sm mb-2">Address</p>
                      <p className="text-white/80">XERA Car Wash & Auto Detailing</p>
                      <p className="text-white/70">NSS College Road, Palappuram</p>
                      <p className="text-white/70">Ottapalam, Palakkad - 679103</p>
                      <p className="text-white/70">Kerala, India</p>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-xera-red hover:bg-red-700">
                    <a href="https://g.page/xeradetailing" target="_blank" rel="noopener noreferrer">
                      Google Maps ൽ കാണുക
                    </a>
                  </Button>
                </div>

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <Clock className="w-8 h-8 text-xera-red flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">പ്രവൃത്തി സമയം</h3>
                      <p className="text-white/50 text-sm mb-2">Working Hours</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-white/80">
                    <div className="flex justify-between">
                      <span>തിങ്കൾ - ശനി (Mon-Sat)</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ഞായർ (Sunday)</span>
                      <span>10:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-2 text-gradient">ഉടൻ ബന്ധപ്പെടുക</h3>
                <p className="text-white/70 mb-6">Quick Contact Options</p>
                
                <div className="space-y-4">
                  <a href="tel:+919605858483" className="flex items-center gap-4 p-4 bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
                    <Phone className="w-8 h-8" />
                    <div>
                      <p className="font-bold">ഇപ്പോൾ വിളിക്കുക</p>
                      <p className="text-white/80 text-sm">Call Now: +91 96058 58483</p>
                    </div>
                  </a>
                  
                  <a href="https://wa.me/919605858483?text=ഹായ്%20XERA%2C%20service%20booking%20വേണം" className="flex items-center gap-4 p-4 bg-green-500 rounded-lg hover:bg-green-600 transition-colors">
                    <MessageCircle className="w-8 h-8" />
                    <div>
                      <p className="font-bold">WhatsApp Message</p>
                      <p className="text-white/80 text-sm">Quick response guaranteed</p>
                    </div>
                  </a>

                  <a href="https://g.page/xeradetailing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    <MapPin className="w-8 h-8" />
                    <div>
                      <p className="font-bold">Directions</p>
                      <p className="text-white/80 text-sm">Get directions on Google Maps</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">ഓൺലൈൻ ബുക്കിംഗ്</h2>
            <p className="text-center text-white/70 mb-8">Online Booking Form</p>
            <MalayalamBookingForm />
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">സേവന മേഖലകൾ</h2>
            <p className="text-center text-white/70 mb-8">We Serve These Areas</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {['ഒറ്റപ്പാലം', 'പാലക്കാട്', 'ഷൊർണൂർ', 'പട്ടാമ്പി', 'മണ്ണാർക്കാട്', 'തൃശ്ശൂർ', 'പെരിന്തൽമണ്ണ', 'ചെർപ്പുളശ്ശേരി'].map((area) => (
                <div key={area} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-4 text-center hover:border-xera-red transition-colors">
                  {area}
                </div>
              ))}
            </div>
            <p className="text-center text-white/70 mt-6">
              എല്ലാ areas ലും free pickup & drop service ലഭ്യം
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactMalayalam;