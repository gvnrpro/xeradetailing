import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { VoiceSearchFAQ } from '@/components/seo/VoiceSearchFAQ';
import { MalayalamBookingForm } from '@/components/malayalam/MalayalamBookingForm';
import { setMalayalamPageMetadata, generateMalayalamLocalBusinessSchema, addMalayalamSchemaToDocument } from '@/utils/malayalamSEO';
import { Button } from '@/components/ui/button';
import { Shield, RefreshCw, Eye, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqQueries = [
  { question: 'PPF (Paint Protection Film) എന്താണ്?', answer: 'PPF ഒരു thick transparent polyurethane film ആണ് car paint ൽ apply ചെയ്യുന്നത്. Stone chips, scratches, road debris physically absorb ചെയ്യുന്നു. Self-healing technology — minor scratches sunlight ൽ disappear ആകുന്നു.', keywords: ['PPF paint protection film', 'PPF kerala'] },
  { question: 'PPF ഒറ്റപ്പാലത്ത് ലഭ്യമാണോ?', answer: 'ഉണ്ട്! XERA Ottapalam professional PPF installation ₹15,999 മുതൽ offer ചെയ്യുന്നു. Partial, full front, full body options available.', keywords: ['PPF ottapalam', 'paint protection film ottapalam'] },
  { question: 'PPF ന് ceramic coating ഒരുമിച്ച് ചെയ്യാമോ?', answer: 'ഉണ്ട് — ഇത് best combination ആണ്! PPF high-impact areas (hood, bumper) ൽ physical protection. Ceramic/graphene coating remaining panels ൽ chemical protection. Maximum protection ലഭിക്കുന്നു.', keywords: ['PPF and ceramic coating', 'combination coating kerala'] },
  { question: 'PPF visible ആണോ car ൽ?', answer: 'ഇല്ല — high quality PPF optically clear ആണ്. Car original colour & finish maintain ആകുന്നു. Gloss-boost option ഉം ഉണ്ട് extra shine ന്.', keywords: ['PPF visible car', 'invisible PPF kerala'] },
];

const PPFCoatingOttapalam = () => {
  useEffect(() => {
    setMalayalamPageMetadata({
      title: 'PPF കോട്ടിംഗ് ഒറ്റപ്പാലം | Paint Protection Film Kerala | XERA',
      description: 'ഒറ്റപ്പാലത്ത് professional PPF (Paint Protection Film) installation. Self-healing, invisible protection. Stone chips, scratches from Kerala roads. 10-year warranty.',
      keywords: ['PPF ഒറ്റപ്പാലം', 'paint protection film ottapalam', 'PPF kerala', 'invisible car protection kerala'],
      canonicalUrl: 'https://xeradetailing.in/ml/ppf-coating-ottapalam',
      hreflangEn: 'https://xeradetailing.in/ppf-coating-ottapalam',
      ogImage: 'https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png',
    });
    const schema = generateMalayalamLocalBusinessSchema('XERA PPF Ottapalam', 'ഒറ്റപ്പാലത്തിലെ professional PPF installation', 'NSS College Road, Palappuram', 'Ottapalam');
    addMalayalamSchemaToDocument(schema);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" lang="ml">
      <Helmet>
        <html lang="ml" />
        <title>PPF കോട്ടിംഗ് ഒറ്റപ്പാലം | Paint Protection Film Kerala | XERA</title>
        <meta name="description" content="ഒറ്റപ്പാലത്ത് professional PPF installation. Self-healing invisible film. Stone chip protection from Kerala roads. 10-year warranty. XERA Auto Detailing." />
        <link rel="canonical" href="https://xeradetailing.in/ml/ppf-coating-ottapalam" />
        <link rel="alternate" hrefLang="ml" href="https://xeradetailing.in/ml/ppf-coating-ottapalam" />
        <link rel="alternate" hrefLang="en" href="https://xeradetailing.in/ppf-coating-ottapalam" />
        <meta property="og:locale" content="ml_IN" />
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm font-semibold mb-4">
                🛡️ Ultimate Physical Protection · ₹15,999 മുതൽ
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                PPF കോട്ടിംഗ് ഒറ്റപ്പാലം
              </h1>
              <p className="text-lg text-white/80 mb-2">Paint Protection Film — XERA Auto Detailing Ottapalam</p>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Car paint ന്റെ strongest physical barrier. Stone chips, scratches, road debris absorb ചെയ്യുന്ന self-healing invisible film. Kerala roads ന് essential.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-xera-red hover:bg-red-700 text-lg px-8 py-6" asChild>
                  <a href="https://wa.me/917559999366?text=ഹായ്%20XERA%2C%20PPF%20coating%20quote%20വേണം">
                    Free Quote WhatsApp ൽ
                  </a>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/5 px-8 py-6" asChild>
                  <a href="tel:+917559999366">Call: +91 75599 99366</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why PPF in Kerala */}
        <section className="py-16 bg-xera-darkgray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Kerala Roads ന് PPF എന്തുകൊണ്ട് Essential?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Shield, title: 'Stone Chip Protection', desc: 'NH544 & Kerala highways ൽ constant stone chips. PPF physically absorb ചെയ്യുന്നു — paint touch ചെയ്യുന്നില്ല.' },
                { icon: RefreshCw, title: 'Self-Healing Film', desc: 'Minor scratches sunlight ൽ disappear ആകുന്നു. Car always perfect ആയിരിക്കും. No manual intervention needed.' },
                { icon: Eye, title: 'Invisible Protection', desc: 'Optically clear film — car original appearance maintain ആകുന്നു. No one knows it\'s there.' },
              ].map((item, i) => (
                <div key={i} className="bg-black/30 rounded-xl p-6 border border-white/5 text-center">
                  <item.icon className="w-10 h-10 text-xera-red mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">PPF Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: 'Partial', price: '₹15,999', warranty: '5 year', features: ['Hood partial', 'Door edge guards', 'Mirror covers', 'Bumper strip', 'Self-healing'] },
                { name: 'Full Front', price: '₹29,999', warranty: '7 year', popular: true, features: ['Full hood', 'Full front bumper', 'Both fenders', 'Headlights', 'Side mirrors', 'Self-healing'] },
                { name: 'Full Body', price: '₹59,999+', warranty: '10 year', features: ['Complete car', 'All panels', 'Roof included', 'Door sills', 'Self-healing + gloss boost'] },
              ].map((pkg, i) => (
                <div key={i} className={`rounded-xl p-6 border relative ${pkg.popular ? 'border-xera-red bg-xera-red/5' : 'border-white/10 bg-xera-darkgray'}`}>
                  {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-xera-red text-white text-xs px-4 py-1 rounded-full">Most Popular</span>}
                  <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-xera-red mb-1">{pkg.price}</p>
                  <p className="text-green-400 text-sm mb-5">{pkg.warranty} warranty</p>
                  <ul className="space-y-2 mb-5">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-white/80 text-sm">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/917559999366?text=ഹായ്%20XERA%2C%20PPF%20package%20quote%20വേണം" className={`block text-center py-3 rounded-lg font-semibold transition-colors ${pkg.popular ? 'bg-xera-red text-white hover:bg-red-700' : 'border border-xera-red text-xera-red hover:bg-xera-red hover:text-white'}`}>
                    Quote ചോദിക്കൂ
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-xera-darkgray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              PPF പതിവ് ചോദ്യങ്ങൾ
            </h2>
            <VoiceSearchFAQ queries={faqQueries} />
          </div>
        </section>

        <section className="py-8 bg-black">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white/50 text-sm">
              English version:{' '}
              <Link to="/ppf-coating-ottapalam" className="text-xera-red hover:underline">
                PPF Coating Ottapalam (English)
              </Link>
            </p>
          </div>
        </section>

        <section className="py-16 bg-xera-darkgray">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-white text-center mb-8 text-gradient">ഇപ്പോൾ Book ചെയ്യൂ</h2>
            <MalayalamBookingForm />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PPFCoatingOttapalam;
