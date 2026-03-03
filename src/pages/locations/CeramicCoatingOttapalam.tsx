import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import EnhancedCTA from '@/components/enhanced/EnhancedCTA';
import { VoiceSearchFAQ } from '@/components/seo/VoiceSearchFAQ';
import { setPageMetadata } from '@/utils/seoHelper';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';
import { motion } from 'framer-motion';
import { Shield, Check, Star, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqQueries = [
  { question: 'How much does ceramic coating cost in Ottapalam?', answer: 'Ceramic coating in Ottapalam at XERA starts from ₹7,999 for sedans with 5+ year warranty. SUV packages from ₹9,999. All packages include paint decontamination and maintenance kit.', keywords: ['ceramic coating price ottapalam', 'ceramic coating cost ottapalam kerala'] },
  { question: 'How long does ceramic coating last in Kerala climate?', answer: 'At XERA Ottapalam, our premium ceramic coating lasts 3–5 years in Kerala\'s tropical climate. Proper maintenance extends life further. We also offer 7+ year graphene coating.', keywords: ['ceramic coating durability kerala', 'how long ceramic coating lasts ottapalam'] },
  { question: 'Is ceramic coating worth it in Ottapalam?', answer: 'Yes — especially in Ottapalam where intense sun, monsoon rains and dusty roads are constant. Ceramic coating prevents UV fade, water spots, and paint oxidation, saving on frequent polishing costs.', keywords: ['ceramic coating worth it kerala', 'ceramic coating benefits ottapalam'] },
  { question: 'Do you offer ceramic coating for bikes in Ottapalam?', answer: 'Yes! XERA Ottapalam offers ceramic coating for motorcycles and scooters from ₹3,999. Perfect for Kerala\'s heavy two-wheeler traffic.', keywords: ['bike ceramic coating ottapalam', 'motorcycle coating ottapalam'] },
];

const CeramicCoatingOttapalam = () => {
  useEffect(() => {
    setPageMetadata(
      'Ceramic Coating Ottapalam | 9H Car Paint Protection from ₹7,999 | XERA',
      'Best ceramic coating in Ottapalam, Kerala. Professional 9H protection with 5+ year warranty. UV resistance, hydrophobic finish, scratch protection. Book XERA today!',
      'https://xeradetailing.in/ceramic-coating-ottapalam',
      '/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png',
      ['ceramic coating ottapalam', 'best ceramic coating ottapalam', 'car ceramic coating ottapalam kerala', 'ceramic coating price ottapalam', '9H ceramic ottapalam', 'ceramic coating near me ottapalam']
    );
    trackEvent('view_location_page', { location: 'Ottapalam', service: 'Ceramic Coating' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Ceramic Coating Ottapalam | 9H Car Paint Protection from ₹7,999 | XERA</title>
        <meta name="description" content="Best ceramic coating in Ottapalam, Kerala. Professional 9H protection with 5+ year warranty. UV resistance, hydrophobic finish, scratch protection. Book XERA today!" />
        <link rel="canonical" href="https://xeradetailing.in/ceramic-coating-ottapalam" />
        <meta property="og:title" content="Ceramic Coating Ottapalam | XERA Auto Detailing" />
        <meta property="og:description" content="Professional ceramic coating in Ottapalam from ₹7,999. 9H hardness, 5+ year warranty, hydrophobic protection." />
        <meta property="og:image" content="https://xeradetailing.in/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png" />
        <meta property="og:url" content="https://xeradetailing.in/ceramic-coating-ottapalam" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Ceramic Coating',
          name: 'Ceramic Coating in Ottapalam by XERA',
          description: 'Professional 9H ceramic coating in Ottapalam, Kerala. 5+ year warranty, UV protection, hydrophobic finish.',
          provider: { '@type': 'LocalBusiness', name: 'XERA Car Wash & Auto Detailing', telephone: '+917559999366', address: { '@type': 'PostalAddress', streetAddress: 'Opp. NSS College, Palappuram', addressLocality: 'Ottapalam', addressRegion: 'Kerala', postalCode: '679103', addressCountry: 'IN' } },
          areaServed: [{ '@type': 'City', name: 'Ottapalam' }],
          offers: { '@type': 'Offer', price: '7999', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How much does ceramic coating cost in Ottapalam?', acceptedAnswer: { '@type': 'Answer', text: 'Ceramic coating in Ottapalam at XERA starts from ₹7,999 for sedans with 5+ year warranty.' } },
            { '@type': 'Question', name: 'How long does ceramic coating last in Kerala?', acceptedAnswer: { '@type': 'Answer', text: 'Our ceramic coating lasts 3–5 years in Kerala\'s climate with proper maintenance.' } },
          ],
        })}</script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Ceramic Coating Ottapalam', href: '' }]} />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-black to-xera-darkgray overflow-hidden">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png')] bg-cover bg-center opacity-25" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm font-semibold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                ₹7,999 onwards · 5+ Year Warranty
              </motion.span>
              <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Ceramic Coating in Ottapalam
              </motion.h1>
              <motion.p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                Professional 9H ceramic coating at XERA — Ottapalam's most trusted detailing studio. Military-grade paint protection against UV, scratches, rain and road grime with a 5+ year warranty guarantee.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <EnhancedCTA text="Book Ceramic Coating – Free Inspection" href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27d%20like%20ceramic%20coating%20in%20Ottapalam" variant="primary" shimmerEffect={true} trackingLabel="hero_cta_ceramic_ottapalam" />
                <a href="tel:+917559999366" className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition-colors">
                  <Phone className="w-5 h-5" /> Call for Quote
                </a>
              </motion.div>
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-white/50">
                <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9★ Google Rating</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-xera-red" /> Opp. NSS College, Palappuram</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-xera-red" /> 9AM–7PM Daily</span>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Ceramic Coating Packages — Ottapalam</h2>
            <p className="text-white/60 text-center mb-12">All packages include paint decontamination, application, and a maintenance care kit.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: 'Silver', price: '₹7,999', warranty: '3 year', vehicle: 'Hatchback / Sedan', features: ['Paint decontamination', 'Single-layer 9H coating', 'Hydrophobic finish', 'UV protection', 'Maintenance kit'] },
                { name: 'Gold', price: '₹11,999', warranty: '5 year', vehicle: 'SUV / MUV', features: ['Paint correction (single stage)', 'Dual-layer 9H coating', 'Enhanced hydrophobics', 'UV + scratch protection', 'Maintenance kit + free first wash'], popular: true },
                { name: 'Platinum', price: '₹16,999', warranty: '7 year', vehicle: 'Premium / Luxury', features: ['Multi-stage paint correction', 'Triple-layer coating', 'Graphene-hybrid formula', 'Full warranty documentation', 'Annual maintenance included'] },
              ].map((pkg, i) => (
                <div key={i} className={`rounded-xl p-6 border relative ${pkg.popular ? 'border-xera-red bg-xera-red/5' : 'border-white/10 bg-xera-darkgray'}`}>
                  {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-xera-red text-white text-xs px-4 py-1 rounded-full font-semibold">Most Popular</span>}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">{pkg.name} Package</h3>
                    <p className="text-white/50 text-sm">{pkg.vehicle}</p>
                  </div>
                  <p className="text-3xl font-bold text-xera-red mb-1">{pkg.price}</p>
                  <p className="text-green-400 text-sm mb-6">{pkg.warranty} warranty</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-white/80 text-sm">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27d%20like%20to%20book%20ceramic%20coating%20in%20Ottapalam" className={`block text-center py-3 rounded-lg font-semibold transition-colors ${pkg.popular ? 'bg-xera-red text-white hover:bg-red-700' : 'border border-xera-red text-xera-red hover:bg-xera-red hover:text-white'}`}>
                    Book This Package
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Ceramic for Kerala */}
        <section className="py-16 bg-xera-darkgray">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Why Ceramic Coating is Essential in Ottapalam</h2>
            <p className="text-white/60 text-center mb-10 max-w-2xl mx-auto">Ottapalam's climate is one of the harshest on car paint in India. Here's why ceramic coating is not a luxury — it's protection your car needs.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'Palakkad Gap Heat', desc: 'Ottapalam sits in the Palakkad Gap, which funnels hot dry winds from Tamil Nadu. Summer temperatures regularly cross 40°C, accelerating paint oxidation and UV fade. Ceramic coating's UV-blocking properties prevent this.' },
                { title: 'Monsoon Acid Rain', desc: 'Kerala receives 300+ cm of annual rainfall. Rainwater carries pollutants that become mildly acidic on your paint surface. Ceramic's chemical resistance prevents acid etching and water spotting.' },
                { title: 'Dust & Road Grime', desc: 'NH544 and Ottapalam's market roads generate heavy dust and grime. Hydrophobic ceramic means water beads off taking dirt with it — your car stays cleaner between washes.' },
                { title: 'Tree Sap & Bird Droppings', desc: 'Kerala's dense vegetation means constant exposure to tree sap and bird droppings — both highly corrosive. Ceramic coating's chemical resistance prevents permanent etching.' },
              ].map((item, i) => (
                <div key={i} className="bg-black/30 rounded-xl p-5 border border-white/5">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-xera-red flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Ceramic Coating FAQs — Ottapalam</h2>
            <VoiceSearchFAQ queries={faqQueries} />
          </div>
        </section>

        {/* Related */}
        <section className="py-12 bg-xera-darkgray">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white/60 mb-4">Also serving:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[['Ceramic Coating Palakkad', '/ceramic-coating-palakkad'], ['Ceramic Coating Shoranur', '/ceramic-coating-shoranur'], ['Ceramic Coating Pattambi', '/ceramic-coating-pattambi'], ['Graphene Coating Ottapalam', '/graphene-coating-ottapalam'], ['Car Detailing Ottapalam', '/car-detailing-ottapalam']].map(([label, href]) => (
                <Link key={href} to={href} className="bg-black border border-white/10 text-white/70 px-4 py-2 rounded-lg hover:border-xera-red hover:text-white transition-colors text-sm">{label}</Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CeramicCoatingOttapalam;
