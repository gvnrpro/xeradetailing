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
  { question: 'Where is the best Ceramic Coating service near Mannarkkad?', answer: 'XERA Auto Detailing in Ottapalam is the best Ceramic Coating service near Mannarkkad, just 55 min away. We offer premium service with free pickup from Mannarkkad.', keywords: ['ceramic-coating mannarkkad', 'best ceramic-coating near mannarkkad'] },
  { question: 'How much does Ceramic Coating cost near Mannarkkad?', answer: 'Ceramic Coating for Mannarkkad customers at XERA starts from ₹7,999. Call or WhatsApp for a personalised quote based on your vehicle.', keywords: ['ceramic-coating price mannarkkad', 'ceramic-coating cost mannarkkad kerala'] },
  { question: 'Do you offer free pickup from Mannarkkad?', answer: 'Yes! XERA offers free vehicle pickup and drop service from Mannarkkad for all packages above ₹1,499. Call us to schedule a convenient pickup time.', keywords: ['car pickup mannarkkad', 'home service mannarkkad kerala'] },
  { question: 'How far is XERA from Mannarkkad?', answer: 'XERA Auto Detailing is located opposite NSS College, Palappuram, Ottapalam — approximately 55 min from Mannarkkad. Free pickup eliminates the need to drive yourself.', keywords: ['XERA location near mannarkkad', 'car detailing studio near mannarkkad'] },
];

const CeramicCoatingMannarkkad = () => {
  useEffect(() => {
    setPageMetadata(
      'Ceramic Coating Mannarkkad | Professional Car Care Kerala | XERA Detailing',
      'Professional Ceramic Coating for Mannarkkad residents by XERA Ottapalam. ₹7,999, 55 min away, free pickup included. Book today!',
      'https://xeradetailing.in/ceramic-coating-mannarkkad',
      '/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png',
      ['ceramic-coating mannarkkad', 'ceramic-coating near mannarkkad', 'car detailing mannarkkad kerala', 'auto care mannarkkad', 'ceramic-coating mannarkkad price']
    );
    trackEvent('view_location_page', { location: 'Mannarkkad', service: 'Ceramic Coating' });
  }, []);

  const nearbyAreas = ["Mannarkkad Town","Palakkad Road","Agali Road","Mudur","Thavalam","Kottayi Road Mannarkkad"];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Ceramic Coating Mannarkkad | Professional Car Care Kerala | XERA Detailing</title>
        <meta name="description" content="Professional Ceramic Coating for Mannarkkad residents by XERA Ottapalam. ₹7,999, 55 min away, free pickup included. Book today!" />
        <link rel="canonical" href="https://xeradetailing.in/ceramic-coating-mannarkkad" />
        <meta property="og:title" content="Ceramic Coating Mannarkkad | XERA Auto Detailing" />
        <meta property="og:description" content="Ceramic Coating near Mannarkkad from ₹7,999. Free pickup, professional team, premium products." />
        <meta property="og:image" content="https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png" />
        <meta property="og:url" content="https://xeradetailing.in/ceramic-coating-mannarkkad" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Ceramic Coating',
          name: 'Ceramic Coating for Mannarkkad — XERA Detailing',
          provider: { '@type': 'LocalBusiness', name: 'XERA Car Wash & Auto Detailing', telephone: '+917559999366', address: { '@type': 'PostalAddress', streetAddress: 'Opp. NSS College, Palappuram', addressLocality: 'Ottapalam', addressRegion: 'Kerala', postalCode: '679103', addressCountry: 'IN' } },
          areaServed: [{ '@type': 'City', name: 'Mannarkkad' }],
          offers: { '@type': 'Offer', price: '7999', priceCurrency: 'INR' },
        })}</script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Ceramic Coating Mannarkkad', href: '' }]} />

      <main className="flex-grow">
        <section className="relative py-20 bg-gradient-to-b from-black to-xera-darkgray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm font-semibold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Free Pickup from Mannarkkad · 55 min Away
              </motion.span>
              <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Professional Ceramic Coating near Mannarkkad
              </motion.h1>
              <motion.p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                XERA Auto Detailing serves Mannarkkad with premium car care services. We collect your vehicle, perform professional Ceramic Coating, and return it looking its absolute best.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <EnhancedCTA text={"Book Free Pickup from Mannarkkad"} href={"https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27m%20from%20Mannarkkad%20and%20need%20Ceramic Coating"} variant="primary" shimmerEffect={true} trackingLabel="ceramic-coating_cta_mannarkkad" />
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
                <h2 className="text-3xl font-bold text-white mb-6">Serving Mannarkkad & Surrounding Areas</h2>
                <p className="text-white/70 mb-6">
                  XERA is Ottapalam's premium auto detailing studio, and we extend our full-service experience to Mannarkkad residents with our free pickup and drop facility. No need to drive to us — we come to you.
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
                    { n: '1', t: 'Book via WhatsApp or Call', d: 'Tell us your location in Mannarkkad and preferred time.' },
                    { n: '2', t: 'We Collect Your Car', d: 'Our driver picks up your vehicle — no extra charge.' },
                    { n: '3', t: 'Service at Our Studio', d: 'Professional Ceramic Coating at our climate-controlled Ottapalam studio.' },
                    { n: '4', t: 'We Return Your Car', d: 'Delivered back to your Mannarkkad address, looking its best.' },
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
            <h2 className="text-3xl font-bold text-white text-center mb-4">Our Services for Mannarkkad Customers</h2>
            <p className="text-white/60 text-center mb-12">Full range of professional car care — all available with free pickup from Mannarkkad.</p>
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
            <h2 className="text-3xl font-bold text-white text-center mb-10">Questions from Mannarkkad Customers</h2>
            <VoiceSearchFAQ queries={faqQueries} />
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-xera-red/20 to-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Book from Mannarkkad?</h2>
            <p className="text-white/70 mb-8">Free pickup · Premium service · Transparent pricing</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={"https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27m%20from%20Mannarkkad%20and%20need%20a%20Ceramic Coating%20quote"} className="bg-xera-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-colors">WhatsApp Us</a>
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

export default CeramicCoatingMannarkkad;
