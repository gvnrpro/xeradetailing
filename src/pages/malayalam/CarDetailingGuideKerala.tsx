import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { VoiceSearchFAQ } from '@/components/seo/VoiceSearchFAQ';
import { MalayalamBookingForm } from '@/components/malayalam/MalayalamBookingForm';
import { setMalayalamPageMetadata, generateMalayalamLocalBusinessSchema, addMalayalamSchemaToDocument } from '@/utils/malayalamSEO';
import { Button } from '@/components/ui/button';
import { Shield, Droplets, Sparkles, Car, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: Shield, title: 'Ceramic Coating', ml: 'സെറാമിക് കോട്ടിംഗ്', desc: 'UV, scratches, rain നിന്ന് 3-7 year protection.', price: '₹7,999 മുതൽ', link: '/ml/ceramic-coating-ottapalam' },
  { icon: Sparkles, title: 'Paint Correction', ml: 'പെയിന്റ് കറക്ഷൻ', desc: 'Scratches, swirl marks remove ചെയ്യുന്നു.', price: '₹2,999 മുതൽ', link: '/services/paint-correction' },
  { icon: Car, title: 'Interior Detailing', ml: 'ഇന്റീരിയർ ഡീറ്റെയിലിംഗ്', desc: 'Deep clean, odor removal, sanitization.', price: '₹1,999 മുതൽ', link: '/services/interior-detailing' },
  { icon: Droplets, title: 'Express Wash', ml: 'എക്സ്പ്രസ് വാഷ്', desc: '30 min premium foam wash.', price: '₹499 മുതൽ', link: '/services/express-wash' },
];

const faqQueries = [
  { question: 'Car detailing എന്താണ്?', answer: 'Car detailing ഒരു thorough cleaning & restoration process ആണ്. Regular car wash exterior dirt remove ചെയ്യുമ്പോൾ, detailing paint correction, interior deep clean, coating application എന്നിവ ചെയ്യുന്നു.', keywords: ['car detailing meaning', 'detailing vs car wash'] },
  { question: 'Kerala ൽ car detailing ന് best time എന്ത്?', answer: 'Monsoon (June-October) ന് മുമ്പ് — April-May. Monsoon protection ന് ceramic coating ഇക്കാലത്ത് ചെയ്യുന്നത് ideal. Monsoon ശേഷം (October-November) post-monsoon deep clean ന് best time.', keywords: ['car detailing best time kerala', 'when to get car detailed kerala'] },
  { question: 'Car detailing ന് എത്ര time വേണം?', answer: 'Express wash: 30-45 min. Interior detailing: 3-5 hours. Full exterior detail: 4-6 hours. Ceramic coating: 1-2 days (paint prep included). XERA ൽ all services available.', keywords: ['car detailing time', 'how long car detailing takes'] },
  { question: 'Ceramic coating ഉം car wash ഉം different ആണോ?', answer: 'Yes, completely different. Car wash external dirt remove ചെയ്യുന്നു — temporary cleanliness. Ceramic coating paint ൽ chemically bond ആകുന്ന protective layer ആണ് — years of protection.', keywords: ['ceramic coating vs car wash', 'difference detailing wash'] },
  { question: 'XERA Ottapalam ൽ services ലഭ്യമാണോ?', answer: 'ഉണ്ട്! XERA NSS College opposite, Palappuram, Ottapalam ൽ ആണ്. Ceramic coating, graphene coating, PPF, paint correction, interior detailing, express wash — all available. Shoranur, Pattambi, Palakkad customers ന് free pickup ലഭ്യം.', keywords: ['XERA ottapalam', 'car detailing ottapalam'] },
];

const CarDetailingGuideKerala = () => {
  useEffect(() => {
    setMalayalamPageMetadata({
      title: 'Car Detailing Guide Kerala | കാർ ഡീറ്റെയിലിംഗ് ഗൈഡ് | XERA Ottapalam',
      description: 'Kerala car owners ന് complete car detailing guide. Ceramic coating, paint correction, interior detailing — services, pricing, tips. XERA Ottapalam.',
      keywords: ['car detailing guide kerala', 'കാർ ഡീറ്റെയിലിംഗ് ഗൈഡ്', 'car care guide kerala malayalam', 'XERA ottapalam detailing'],
      canonicalUrl: 'https://xeradetailing.in/ml/car-detailing-guide-kerala',
      hreflangEn: 'https://xeradetailing.in/car-care-tips',
      ogImage: 'https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png',
    });
    const schema = generateMalayalamLocalBusinessSchema('XERA Car Detailing Kerala', 'Kerala car owners ന് complete detailing guide', 'NSS College Road, Palappuram', 'Ottapalam');
    addMalayalamSchemaToDocument(schema);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" lang="ml">
      <Helmet>
        <html lang="ml" />
        <title>Car Detailing Guide Kerala | കാർ ഡീറ്റെയിലിംഗ് ഗൈഡ് | XERA Ottapalam</title>
        <meta name="description" content="Kerala car owners ന് complete car detailing guide. Ceramic coating, paint correction, interior detailing — services, pricing, tips. XERA Ottapalam." />
        <link rel="canonical" href="https://xeradetailing.in/ml/car-detailing-guide-kerala" />
        <link rel="alternate" hrefLang="ml" href="https://xeradetailing.in/ml/car-detailing-guide-kerala" />
        <link rel="alternate" hrefLang="en" href="https://xeradetailing.in/car-care-tips" />
        <meta property="og:locale" content="ml_IN" />
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                കേരള കാർ ഡീറ്റെയിലിംഗ് ഗൈഡ്
              </h1>
              <p className="text-lg text-white/80 mb-2">Complete Car Care Guide for Kerala</p>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Kerala climate ൽ നിങ്ങളുടെ car protect ചെയ്യാൻ ആദ്യം അറിയേണ്ടത് — Ceramic coating മുതൽ Express wash വരെ. XERA ന്റെ expert guide.
              </p>
              <Button className="bg-xera-red hover:bg-red-700 text-lg px-8 py-6" asChild>
                <a href="https://wa.me/917559999366?text=ഹായ്%20XERA%2C%20car%20detailing%20advice%20വേണം">
                  Free Advice WhatsApp ൽ
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-xera-darkgray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">XERA ൽ ലഭ്യമായ Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bg-black/40 rounded-xl p-6 border border-white/5 hover:border-xera-red/40 transition-colors">
                  <s.icon className="w-10 h-10 text-xera-red mb-4" />
                  <h3 className="text-white font-bold mb-1">{s.ml}</h3>
                  <p className="text-white/50 text-xs mb-2">{s.title}</p>
                  <p className="text-white/60 text-sm mb-3">{s.desc}</p>
                  <p className="text-xera-red font-bold mb-3">{s.price}</p>
                  <Link to={s.link} className="text-xera-red text-sm hover:underline flex items-center gap-1">
                    കൂടുതൽ അറിയൂ <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kerala Climate Tips */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Kerala Climate ന് Car Care Tips</h2>
            <div className="space-y-4">
              {[
                { season: 'ഏപ്രിൽ - മേയ് (Dry Season)', tips: ['Monsoon ന് മുമ്പ് Ceramic Coating ചെയ്യുക', 'AC filter clean ചെയ്യുക', 'Underbody coating check ചെയ്യുക'] },
                { season: 'ജൂൺ - ഒക്ടോബർ (Monsoon)', tips: ['ആഴ്ചയിൽ ഒരിക്കൽ pH-neutral wash ചെയ്യുക', 'Bird droppings 1 hour ക്ക് ഉള്ളിൽ clean ചെയ്യുക', 'Wiper condition regularly check ചെയ്യുക'] },
                { season: 'നവംബർ - ഡിസംബർ (Post-Monsoon)', tips: ['Post-monsoon deep clean ചെയ്യുക', 'Paint condition inspect ചെയ്യുക', 'Coating maintenance spray apply ചെയ്യുക'] },
              ].map((item, i) => (
                <div key={i} className="bg-xera-darkgray rounded-xl p-6 border border-white/5">
                  <h3 className="text-xera-red font-bold mb-4">{item.season}</h3>
                  <ul className="space-y-2">
                    {item.tips.map((tip, j) => (
                      <li key={j} className="flex items-center gap-2 text-white/70 text-sm">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" /> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-xera-darkgray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              Car Detailing — പതിവ് ചോദ്യങ്ങൾ
            </h2>
            <VoiceSearchFAQ queries={faqQueries} />
          </div>
        </section>

        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-white text-center mb-8 text-gradient">XERA ൽ Book ചെയ്യൂ</h2>
            <MalayalamBookingForm />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CarDetailingGuideKerala;
