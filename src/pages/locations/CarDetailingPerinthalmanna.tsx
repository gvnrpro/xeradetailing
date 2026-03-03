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
import { Shield, Sparkles, Car, Droplets, MapPin, Phone, Clock, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqQueries = [
  { question: 'Where is the best Car Detailing service near Perinthalmanna?', answer: 'XERA Auto Detailing in Ottapalam is the best Car Detailing service near Perinthalmanna, just 40 min away. We offer premium service with free pickup from Perinthalmanna.', keywords: ['car-detailing perinthalmanna', 'best car-detailing near perinthalmanna'] },
  { question: 'How much does Car Detailing cost near Perinthalmanna?', answer: 'Car Detailing for Perinthalmanna customers at XERA starts from ₹1,999. Call or WhatsApp for a personalised quote based on your vehicle.', keywords: ['car-detailing price perinthalmanna', 'car-detailing cost perinthalmanna kerala'] },
  { question: 'Do you offer free pickup from Perinthalmanna?', answer: 'Yes! XERA offers free vehicle pickup and drop service from Perinthalmanna for all packages above ₹1,499. Call us to schedule a convenient pickup time.', keywords: ['car pickup perinthalmanna', 'home service perinthalmanna kerala'] },
  { question: 'How far is XERA from Perinthalmanna?', answer: 'XERA Auto Detailing is located opposite NSS College, Palappuram, Ottapalam — approximately 40 min from Perinthalmanna. Free pickup eliminates the need to drive yourself.', keywords: ['XERA location near perinthalmanna', 'car detailing studio near perinthalmanna'] },
];

const CarDetailingPerinthalmanna = () => {
  useEffect(() => {
    setPageMetadata(
      'Car Detailing Perinthalmanna | Professional Car Care Kerala | XERA Detailing',
      'Professional Car Detailing for Perinthalmanna residents by XERA Ottapalam. ₹1,999, 40 min away, free pickup included. Book today!',
      'https://xeradetailing.in/car-detailing-perinthalmanna',
      '/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png',
      ['car-detailing perinthalmanna', 'car-detailing near perinthalmanna', 'car detailing perinthalmanna kerala', 'auto care perinthalmanna', 'car-detailing perinthalmanna price']
    );
    trackEvent('view_location_page', { location: 'Perinthalmanna', service: 'Car Detailing' });
  }, []);

  const nearbyAreas = ["Perinthalmanna Town","Tirur Road","Kottakkal Road","Pattambi Road","Malappuram NH","Manjeri Road"];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Car Detailing Perinthalmanna | Professional Car Care Kerala | XERA Detailing</title>
        <meta name="description" content="Professional Car Detailing for Perinthalmanna residents by XERA Ottapalam. ₹1,999, 40 min away, free pickup included. Book today!" />
        <link rel="canonical" href="https://xeradetailing.in/car-detailing-perinthalmanna" />
        <meta property="og:title" content="Car Detailing Perinthalmanna | XERA Auto Detailing" />
        <meta property="og:description" content="Car Detailing near Perinthalmanna from ₹1,999. Free pickup, professional team, premium products." />
        <meta property="og:image" content="https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png" />
        <meta property="og:url" content="https://xeradetailing.in/car-detailing-perinthalmanna" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Car Detailing',
          name: 'Car Detailing for Perinthalmanna — XERA Detailing',
          provider: { '@type': 'LocalBusiness', name: 'XERA Car Wash & Auto Detailing', telephone: '+917559999366', address: { '@type': 'PostalAddress', streetAddress: 'Opp. NSS College, Palappuram', addressLocality: 'Ottapalam', addressRegion: 'Kerala', postalCode: '679103', addressCountry: 'IN' } },
          areaServed: [{ '@type': 'City', name: 'Perinthalmanna' }],
          offers: { '@type': 'Offer', price: '1999', priceCurrency: 'INR' },
        })}</script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Car Detailing Perinthalmanna', href: '' }]} />

      <main className="flex-grow">
        <section className="relative py-20 bg-gradient-to-b from-black to-xera-darkgray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm font-semibold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Free Pickup from Perinthalmanna · 40 min Away
              </motion.span>
              <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Professional Car Detailing near Perinthalmanna
              </motion.h1>
              <motion.p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                XERA Auto Detailing serves Perinthalmanna with premium car care services. We collect your vehicle, perform professional Car Detailing, and return it looking its absolute best.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <EnhancedCTA text={"Book Free Pickup from Perinthalmanna"} href={"https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27m%20from%20Perinthalmanna%20and%20need%20Car Detailing"} variant="primary" shimmerEffect={true} trackingLabel="car-detailing_cta_perinthalmanna" />
                <a href="tel:+917559999366" className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition-colors">
                  <Phone className="w-5 h-5" /> +91 75599 99366
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-xera-darkgray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Serving Perinthalmanna & Surrounding Areas</h2>
                <p className="text-white/70 mb-6">
                  XERA is Ottapalam's premium auto detailing studio, and we extend our full-service experience to Perinthalmanna residents with our free pickup and drop facility. No need to drive to us — we come to you.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {nearbyAreas.map((area: string, i: number) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-xera-red rounded-full flex-shrink-0" />
                      <span className="text-white/70 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-black rounded-xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-6">How Pickup Works</h3>
                <div className="space-y-5">
                  {[
                    { n: '1', t: 'Book via WhatsApp or Call', d: 'Tell us your location in Perinthalmanna and preferred time.' },
                    { n: '2', t: 'We Collect Your Car', d: 'Our driver picks up your vehicle — no extra charge.' },
                    { n: '3', t: 'Service at Our Studio', d: 'Professional Car Detailing at our climate-controlled Ottapalam studio.' },
                    { n: '4', t: 'We Return Your Car', d: 'Delivered back to your Perinthalmanna address, looking its best.' },
                  ].map((step) => (
                    <div key={step.n} className="flex gap-4">
                      <span className="w-9 h-9 bg-xera-red rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">{step.n}</span>
                      <div>
                        <h4 className="text-white font-semibold">{step.t}</h4>
                        <p className="text-white/60 text-sm">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Our Services for Perinthalmanna Customers</h2>
            <p className="text-white/60 text-center mb-12">Full range of professional car care — all available with free pickup from Perinthalmanna.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {[
                { icon: Shield, title: 'Ceramic Coating', price: '₹7,999', link: '/services/ceramic-coating' },
                { icon: Sparkles, title: 'Paint Correction', price: '₹2,999', link: '/services/paint-correction' },
                { icon: Car, title: 'Interior Detailing', price: '₹1,999', link: '/services/interior-detailing' },
                { icon: Droplets, title: 'Express Wash', price: '₹499', link: '/services/express-wash' },
              ].map((s, i) => (
                <div key={i} className="bg-xera-darkgray rounded-xl p-5 border border-white/5 hover:border-xera-red/40 transition-colors">
                  <s.icon className="w-8 h-8 text-xera-red mb-3" />
                  <h3 className="text-white font-bold mb-2">{s.title}</h3>
                  <p className="text-xera-red font-semibold mb-3">From {s.price}</p>
                  <Link to={s.link} className="text-white/50 text-sm hover:text-xera-red transition-colors">View details →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-xera-darkgray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Questions from Perinthalmanna Customers</h2>
            <VoiceSearchFAQ queries={faqQueries} />
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-xera-red/20 to-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Book from Perinthalmanna?</h2>
            <p className="text-white/70 mb-8">Free pickup · Premium service · Transparent pricing</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={"https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27m%20from%20Perinthalmanna%20and%20need%20a%20Car Detailing%20quote"} className="bg-xera-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-colors">WhatsApp Us</a>
              <a href="tel:+917559999366" className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/5 transition-colors">Call +91 75599 99366</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CarDetailingPerinthalmanna;
