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
import { Shield, Sparkles, Car, Droplets, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: Shield, title: 'Ceramic Coating', desc: '9H protection with 5+ year warranty', price: '₹7,999', link: '/services/ceramic-coating' },
  { icon: Sparkles, title: 'Paint Correction', desc: 'Remove scratches, swirls & oxidation', price: '₹2,999', link: '/services/paint-correction' },
  { icon: Car, title: 'Interior Detailing', desc: 'Full deep clean & sanitization', price: '₹1,999', link: '/services/interior-detailing' },
  { icon: Droplets, title: 'Express Wash', desc: 'Quick foam wash in 30 minutes', price: '₹499', link: '/services/express-wash' },
];

const faqQueries = [
  { question: 'Where is the best car detailing in Ottapalam?', answer: 'XERA Auto Detailing, located opposite NSS College, Palappuram, Ottapalam is Kerala's top-rated car detailing studio. We offer ceramic coating, paint correction, interior detailing and express wash.', keywords: ['best car detailing ottapalam', 'car detailing near me ottapalam'] },
  { question: 'How much does car detailing cost in Ottapalam?', answer: 'Car detailing in Ottapalam at XERA starts from ₹499 for express wash, ₹1,999 for interior detailing, ₹2,999 for paint correction and ₹7,999 for ceramic coating with 5+ year warranty.', keywords: ['car detailing price ottapalam', 'detailing cost ottapalam kerala'] },
  { question: 'Do you offer ceramic coating in Ottapalam?', answer: 'Yes, XERA Ottapalam offers premium 9H ceramic coating starting from ₹7,999 with 5+ year warranty. We use top-grade products suitable for Kerala's climate.', keywords: ['ceramic coating ottapalam', 'car coating ottapalam kerala'] },
  { question: 'What services does XERA Ottapalam offer?', answer: 'XERA Ottapalam offers ceramic coating, graphene coating, PPF, paint correction, interior detailing, engine bay cleaning, headlight restoration, underbody coating and express wash.', keywords: ['XERA ottapalam services', 'car care ottapalam'] },
];

const CarDetailingOttapalam = () => {
  useEffect(() => {
    setPageMetadata(
      'Car Detailing Ottapalam | Best Auto Detailing Studio Kerala | XERA',
      'Best car detailing in Ottapalam, Kerala. Ceramic coating, paint correction, interior detailing & express wash. Opposite NSS College, Palappuram. Call XERA today!',
      'https://xeradetailing.in/car-detailing-ottapalam',
      '/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png',
      ['car detailing ottapalam', 'auto detailing ottapalam kerala', 'best car detailing ottapalam', 'car care ottapalam palakkad', 'car wash ottapalam', 'detailing studio ottapalam', 'XERA detailing ottapalam']
    );
    trackEvent('view_location_page', { location: 'Ottapalam', service: 'Car Detailing' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Car Detailing Ottapalam | Best Auto Detailing Studio Kerala | XERA</title>
        <meta name="description" content="Best car detailing in Ottapalam, Kerala. Ceramic coating, paint correction, interior detailing & express wash. Opposite NSS College, Palappuram. Call XERA today!" />
        <link rel="canonical" href="https://xeradetailing.in/car-detailing-ottapalam" />
        <meta property="og:title" content="Car Detailing Ottapalam | XERA Auto Detailing Kerala" />
        <meta property="og:description" content="Ottapalam's #1 car detailing studio. Ceramic coating from ₹7,999, paint correction, interior deep clean & express wash." />
        <meta property="og:image" content="https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png" />
        <meta property="og:url" content="https://xeradetailing.in/car-detailing-ottapalam" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AutoRepair',
          name: 'XERA Car Wash & Auto Detailing',
          description: 'Professional car detailing studio in Ottapalam, Kerala. Ceramic coating, paint correction, interior detailing & express wash.',
          url: 'https://xeradetailing.in',
          telephone: '+917559999366',
          address: { '@type': 'PostalAddress', streetAddress: 'Opp. NSS College, Palappuram', addressLocality: 'Ottapalam', addressRegion: 'Kerala', postalCode: '679103', addressCountry: 'IN' },
          geo: { '@type': 'GeoCoordinates', latitude: 10.7739, longitude: 76.3771 },
          openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '09:00', closes: '19:00' },
          priceRange: '₹₹',
          aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '120' },
          areaServed: ['Ottapalam','Palakkad','Shoranur','Pattambi','Perinthalmanna','Cherpulassery','Mannarkkad'],
        })}</script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Car Detailing Ottapalam', href: '' }]} />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-b from-black to-xera-darkgray overflow-hidden">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm font-semibold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                🏆 Ottapalam's #1 Car Detailing Studio
              </motion.span>
              <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Professional Car Detailing in Ottapalam
              </motion.h1>
              <motion.p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                Kerala's most trusted auto detailing studio — right in your city. Ceramic coating, paint correction, interior deep clean and express wash. Opposite NSS College, Palappuram.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <EnhancedCTA text="Book Now on WhatsApp" href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27d%20like%20to%20book%20car%20detailing%20in%20Ottapalam" variant="primary" shimmerEffect={true} trackingLabel="hero_cta_ottapalam_detailing" />
                <a href="tel:+917559999366" className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition-colors font-medium">
                  <Phone className="w-5 h-5" /> +91 75599 99366
                </a>
              </motion.div>
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/60 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-xera-red" /> Opp. NSS College, Palappuram, Ottapalam</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-xera-red" /> Open 9AM – 7PM, 7 Days</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-xera-darkgray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Our Services in Ottapalam</h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">Every service performed by trained professionals using premium imported products.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <motion.div key={i} className="bg-black/40 border border-white/5 rounded-xl p-6 hover:border-xera-red/40 transition-colors group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <s.icon className="w-10 h-10 text-xera-red mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold mb-1">{s.title}</h3>
                  <p className="text-white/60 text-sm mb-3">{s.desc}</p>
                  <p className="text-xera-red font-bold mb-4">From {s.price}</p>
                  <Link to={s.link} className="text-xera-red text-sm hover:underline">Learn more →</Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why XERA */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Ottapalam Trusts XERA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: '500+ Cars Detailed', desc: 'More experience than any other studio in Palakkad district.' },
                { title: '4.9★ Google Rating', desc: '120+ verified reviews from satisfied customers across Kerala.' },
                { title: 'Premium Products Only', desc: 'We use top-grade imported ceramic and graphene coating brands — no cheap alternatives.' },
                { title: 'Free Pickup & Drop', desc: 'We collect your car from anywhere in Ottapalam, Shoranur or Pattambi. No extra charge.' },
                { title: 'Climate-Controlled Studio', desc: 'Our coating studio maintains controlled temperature & humidity for perfect application results.' },
                { title: 'Transparent Pricing', desc: 'No hidden charges. You see the full price before we start. What we quote is what you pay.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-xera-darkgray rounded-xl p-5 border border-white/5">
                  <CheckCircle className="w-6 h-6 text-xera-red flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-xera-darkgray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
            <VoiceSearchFAQ queries={faqQueries} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-xera-red/20 to-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Book Your Car Detailing in Ottapalam Today</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">Join 500+ satisfied car owners in Ottapalam & Palakkad district who trust XERA for premium car care.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27d%20like%20to%20book%20a%20service" className="bg-xera-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-colors">Book on WhatsApp</a>
              <a href="tel:+917559999366" className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/5 transition-colors">Call Now</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CarDetailingOttapalam;
