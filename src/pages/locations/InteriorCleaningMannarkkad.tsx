import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import EnhancedCTA from '@/components/enhanced/EnhancedCTA';
import VoiceSearchFAQ from '@/components/seo/VoiceSearchFAQ';
import { setPageMetadata } from '@/utils/seoHelper';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';
import { motion } from 'framer-motion';
import { Sofa, Wind, Sparkles, Bug } from 'lucide-react';

const InteriorCleaningMannarkkad = () => {
  useEffect(() => {
    setPageMetadata(
      "Interior Cleaning Mannarkkad | Car Interior Detailing | XERA",
      "Professional car interior cleaning in Mannarkkad, Palakkad. Deep seat cleaning, dashboard detailing, AC vent sanitization, odor removal.",
      "https://xeradetailing.in/interior-cleaning-mannarkkad",
      "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
      ["interior cleaning mannarkkad", "car interior detailing mannarkkad", "seat cleaning mannarkkad palakkad", "car interior cleaning near mannarkkad", "dashboard cleaning mannarkkad"]
    );
    trackEvent('view_location_page', { location: 'Mannarkkad', service: 'Interior Cleaning' });
  }, []);

  const services = [
    { icon: Sofa, title: "Seat Deep Cleaning", description: "Fabric/leather seat shampooing & conditioning with stain removal", price: "₹1,499" },
    { icon: Wind, title: "AC Vent Sanitization", description: "Complete AC system cleaning & anti-bacterial treatment", price: "₹799" },
    { icon: Sparkles, title: "Dashboard Detailing", description: "Dashboard, door panels & console restoration with UV protection", price: "₹999" },
    { icon: Bug, title: "Odor Removal", description: "Deep sanitization & ozone treatment for stubborn odors", price: "₹1,299" }
  ];

  const fullPackage = {
    title: "Complete Interior Restoration",
    description: "Full interior detailing including seats, carpet, dashboard, door panels, headliner & trunk",
    price: "₹2,999",
    includes: ["Deep vacuum cleaning", "Seat shampooing", "Dashboard restoration", "AC sanitization", "Door panel cleaning", "Carpet extraction", "Odor treatment", "Leather conditioning"]
  };

  const faqQueries = [
    { question: "Where can I get car interior cleaning near Mannarkkad?", answer: "XERA Detailing offers professional interior cleaning for Mannarkkad customers. Located in Ottapalam, we provide pickup service from Mannarkkad for complete interior restoration.", keywords: ["interior cleaning mannarkkad", "car interior cleaning near mannarkkad"] },
    { question: "How much does interior detailing cost in Mannarkkad?", answer: "Interior cleaning for Mannarkkad customers starts at ₹1,499 for seat cleaning. Complete interior restoration package is ₹2,999 including seats, dashboard, carpet & AC sanitization.", keywords: ["interior cleaning price mannarkkad", "interior detailing cost mannarkkad"] },
    { question: "Can you remove bad smell from car interior?", answer: "Yes! Our odor removal treatment uses ozone technology to eliminate stubborn smells from smoke, pets, food or mold. This service is ₹1,299 and includes full sanitization.", keywords: ["car odor removal", "remove smell from car"] }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Interior Cleaning Mannarkkad | Car Interior Detailing | XERA</title>
        <meta name="description" content="Professional car interior cleaning in Mannarkkad, Palakkad. Deep seat cleaning, dashboard detailing, AC vent sanitization, odor removal." />
        <link rel="canonical" href="https://xeradetailing.in/interior-cleaning-mannarkkad" />
        <meta property="og:title" content="Interior Cleaning Mannarkkad | XERA Detailing" />
        <meta property="og:description" content="Professional car interior cleaning for Mannarkkad. Seat cleaning, dashboard detailing, odor removal." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "XERA Detailing - Mannarkkad Interior Cleaning",
            "description": "Professional car interior cleaning for Mannarkkad area",
            "address": { "@type": "PostalAddress", "addressLocality": "Ottapalam", "addressRegion": "Kerala", "addressCountry": "IN" },
            "telephone": "+919605858483",
            "areaServed": { "@type": "City", "name": "Mannarkkad" }
          })}
        </script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Locations', href: '/' }, { label: 'Interior Cleaning Mannarkkad', href: '' }]} />

      <main className="flex-grow">
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Car Interior Cleaning in Mannarkkad
              </motion.h1>
              <motion.p className="text-xl text-white/80 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                Professional interior detailing for Mannarkkad car owners. Deep cleaning, sanitization & restoration for a fresh, healthy cabin environment.
              </motion.p>
              <EnhancedCTA text="Book Interior Cleaning" href="https://wa.me/919605858483?text=Hi%20XERA%2C%20I%20need%20interior%20cleaning%20service%20from%20Mannarkkad" variant="primary" shimmerEffect={true} trackingLabel="hero_cta_mannarkkad" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Interior Cleaning Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {services.map((service, index) => (
                <motion.div key={service.title} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-xera-red" />
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-white/70 mb-4 text-sm">{service.description}</p>
                  <p className="text-2xl font-bold text-xera-red">{service.price}</p>
                </motion.div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto bg-gradient-to-r from-xera-red to-red-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-4">{fullPackage.title}</h3>
              <p className="text-center text-white/90 mb-6">{fullPackage.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {fullPackage.includes.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">✓</span> {item}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-4">{fullPackage.price}</p>
                <EnhancedCTA text="Book Full Interior Package" href="https://wa.me/919605858483?text=Hi%20XERA%2C%20I%20want%20to%20book%20complete%20interior%20cleaning%20from%20Mannarkkad" variant="secondary" className="bg-white text-black hover:bg-gray-100" trackingLabel="cta_mannarkkad_full" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Frequently Asked Questions</h2>
            <VoiceSearchFAQ queries={faqQueries} />
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Ready for a Fresh Interior?</h2>
            <p className="text-white/70 mb-8">Professional interior cleaning with pickup service from Mannarkkad</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919605858483" className="bg-xera-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">Call: +91 96058 58483</a>
              <EnhancedCTA text="WhatsApp Booking" href="https://wa.me/919605858483?text=Hi%20XERA%2C%20I%20want%20interior%20cleaning%20from%20Mannarkkad" variant="outline" trackingLabel="cta_mannarkkad" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default InteriorCleaningMannarkkad;