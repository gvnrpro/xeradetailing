import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { VoiceSearchFAQ } from '@/components/seo/VoiceSearchFAQ';
import { MalayalamBookingForm } from '@/components/malayalam/MalayalamBookingForm';
import { setMalayalamPageMetadata, generateMalayalamLocalBusinessSchema, addMalayalamSchemaToDocument } from '@/utils/malayalamSEO';
import { Button } from '@/components/ui/button';
import { Zap, Shield, Sun, Droplets, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqQueries = [
  { question: 'Graphene coating എന്താണ്? Ceramic coating ൽ നിന്ന് എങ്ങനെ വ്യത്യസ്തം?', answer: 'Graphene coating ceramic coating ന്റെ next generation ആണ്. Heat dissipation 200x better, anti-static dust repulsion, superior water beading. Kerala climate ന് ideal ആണ്.', keywords: ['graphene coating kerala', 'graphene vs ceramic'] },
  { question: 'Graphene coating ന് എത്ര രൂപ വരും ഒറ്റപ്പാലത്ത്?', answer: 'XERA Ottapalam ൽ Graphene Coating ₹9,999 മുതൽ. Standard package 3+ year warranty. Pro package ₹14,999 — 5+ year warranty, paint correction included.', keywords: ['graphene coating price ottapalam', 'graphene coating cost kerala'] },
  { question: 'Graphene coating Kerala climate ന് suitable ആണോ?', answer: 'Graphene coating Kerala climate ന് exceptionally suitable ആണ്. Palakkad heat dissipation, monsoon water beading, dry season dust repulsion — all better than ceramic.', keywords: ['graphene coating kerala climate', 'graphene coating suitable'] },
  { question: 'Graphene coating എത്ര നാൾ നിലനിൽക്കും?', answer: 'XERA ന്റെ graphene coating 3 to 7+ വർഷം നിലനിൽക്കും package അനുസരിച്ച്. Proper maintenance ൽ warranty period ൽ കൂടുതൽ കാലം protection ലഭ്യമാകും.', keywords: ['graphene coating lifespan', 'graphene coating durability'] },
];

const GrapheneCoatingOttapalam = () => {
  useEffect(() => {
    setMalayalamPageMetadata({
      title: 'ഗ്രാഫീൻ കോട്ടിംഗ് ഒറ്റപ്പാലം | Graphene Coating Ottapalam | XERA',
      description: 'ഒറ്റപ്പാലത്ത് professional graphene coating. Ceramic coating ൽ നിന്ന് superior protection. Heat dissipation, anti-static, 7+ year warranty. XERA Auto Detailing.',
      keywords: ['ഗ്രാഫീൻ കോട്ടിംഗ് ഒറ്റപ്പാലം', 'graphene coating ottapalam', 'graphene coating kerala', 'graphene vs ceramic ottapalam'],
      canonicalUrl: 'https://xeradetailing.in/ml/graphene-coating-ottapalam',
      hreflangEn: 'https://xeradetailing.in/graphene-coating-ottapalam',
      ogImage: 'https://xeradetailing.in/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png',
    });
    const schema = generateMalayalamLocalBusinessSchema('XERA Graphene Coating Ottapalam', 'ഒറ്റപ്പാലത്തിലെ next-gen graphene coating studio', 'NSS College Road, Palappuram', 'Ottapalam');
    addMalayalamSchemaToDocument(schema);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" lang="ml">
      <Helmet>
        <html lang="ml" />
        <title>ഗ്രാഫീൻ കോട്ടിംഗ് ഒറ്റപ്പാലം | Graphene Coating Ottapalam | XERA</title>
        <meta name="description" content="ഒറ്റപ്പാലത്ത് professional graphene coating. Heat dissipation, anti-static, 7+ year warranty. XERA Auto Detailing Kerala." />
        <link rel="canonical" href="https://xeradetailing.in/ml/graphene-coating-ottapalam" />
        <link rel="alternate" hrefLang="ml" href="https://xeradetailing.in/ml/graphene-coating-ottapalam" />
        <link rel="alternate" hrefLang="en" href="https://xeradetailing.in/graphene-coating-ottapalam" />
        <meta property="og:locale" content="ml_IN" />
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm font-semibold mb-4">
                🚀 Next-Gen Protection · ₹9,999 മുതൽ
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                ഗ്രാഫീൻ കോട്ടിംഗ് ഒറ്റപ്പാലം
              </h1>
              <p className="text-lg text-white/80 mb-2">Graphene Coating Ottapalam — XERA Auto Detailing</p>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Ceramic coating ൽ നിന്ന് superior protection. Heat dissipation, anti-static dust repulsion, ultra hydrophobic finish — Kerala climate ന് perfect.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-xera-red hover:bg-red-700 text-lg px-8 py-6" asChild>
                  <a href="https://wa.me/917559999366?text=ഹായ്%20XERA%2C%20Graphene%20Coating%20quote%20വേണം">
                    WhatsApp ൽ Book ചെയ്യൂ
                  </a>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/5 px-8 py-6" asChild>
                  <a href="tel:+917559999366">ഇപ്പോൾ വിളിക്കുക</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Graphene > Ceramic */}
        <section className="py-16 bg-xera-darkgray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Graphene Coating vs Ceramic Coating
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Kerala climate ന് graphene coating ceramic coating ൽ നിന്ന് മൂന്ന് key areas ൽ better ആണ്:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Sun, title: 'Heat Dissipation', ml: 'ചൂട് പ്രതിരോധം', desc: 'Palakkad Gap ലെ extreme heat graphene 200x better dissipate ചെയ്യുന്നു. Paint ഉം coating ഉം cooler ആയിരിക്കും.' },
                { icon: Zap, title: 'Anti-Static Dust Repulsion', ml: 'ഡസ്റ്റ് റിപ്പൽഷൻ', desc: 'Graphene electrical conductivity dust, pollen, fine particles actively repel ചെയ്യുന്നു. Dry season ൽ car cleaner ആയിരിക്കും.' },
                { icon: Droplets, title: 'Superior Hydrophobics', ml: 'ജലരോധകം', desc: 'Water contact angle 110°+ — ceramic ൽ കൂടുതൽ. Kerala monsoon ൽ water faster roll off ചെയ്യുന്നു.' },
              ].map((item, i) => (
                <div key={i} className="bg-black/30 rounded-xl p-6 border border-white/5 text-center">
                  <item.icon className="w-10 h-10 text-xera-red mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-xera-red text-sm mb-3">{item.ml}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Graphene Coating Packages — Ottapalam</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: 'Standard', price: '₹9,999', warranty: '3+ year', features: ['Single-layer graphene', 'Paint decontamination', 'Hydrophobic finish', 'UV protection', 'Maintenance guide'] },
                { name: 'Pro', price: '₹14,999', warranty: '5+ year', popular: true, features: ['Dual-layer graphene', 'Paint correction included', 'Anti-static protection', 'Heat dissipation', 'Free first maintenance wash'] },
                { name: 'Elite', price: '₹19,999', warranty: '7+ year', features: ['Triple-layer graphene', 'Multi-stage correction', 'Interior graphene treatment', 'Wheel & glass coating', 'Annual maintenance'] },
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
                  <a href="https://wa.me/917559999366?text=ഹായ്%20XERA%2C%20Graphene%20Coating%20book%20ചെയ്യണം" className={`block text-center py-3 rounded-lg font-semibold transition-colors ${pkg.popular ? 'bg-xera-red text-white hover:bg-red-700' : 'border border-xera-red text-xera-red hover:bg-xera-red hover:text-white'}`}>
                    Book ചെയ്യൂ
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
              പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ
            </h2>
            <VoiceSearchFAQ queries={faqQueries} />
          </div>
        </section>

        {/* English link */}
        <section className="py-8 bg-black">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white/50 text-sm">
              English version:{' '}
              <Link to="/graphene-coating-ottapalam" className="text-xera-red hover:underline">
                Graphene Coating Ottapalam (English)
              </Link>
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 bg-xera-darkgray">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-white text-center mb-8 text-gradient">
              ഇപ്പോൾ Book ചെയ്യൂ
            </h2>
            <MalayalamBookingForm />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GrapheneCoatingOttapalam;
