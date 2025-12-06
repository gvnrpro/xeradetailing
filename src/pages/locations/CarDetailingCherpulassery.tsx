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
import { Car, Sparkles, Shield, Clock } from 'lucide-react';

const CarDetailingCherpulassery = () => {
  useEffect(() => {
    setPageMetadata(
      "Car Detailing Cherpulassery | Professional Auto Care | XERA",
      "Professional car detailing services in Cherpulassery, Palakkad. Complete interior & exterior detailing, ceramic coating, paint correction.",
      "https://xeradetailing.in/car-detailing-cherpulassery",
      "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
      ["car detailing cherpulassery", "auto detailing cherpulassery palakkad", "car cleaning cherpulassery", "car wash near cherpulassery", "professional detailing cherpulassery"]
    );
    trackEvent('view_location_page', { location: 'Cherpulassery', service: 'Car Detailing' });
  }, []);

  const services = [
    { icon: Car, title: "Exterior Detailing", description: "Complete exterior restoration including wash, clay bar, polish & wax", price: "₹1,999" },
    { icon: Sparkles, title: "Interior Detailing", description: "Deep interior cleaning, seat shampooing, dashboard restoration", price: "₹1,499" },
    { icon: Shield, title: "Ceramic Coating", description: "9H ceramic coating for long-term paint protection", price: "₹7,999" },
    { icon: Clock, title: "Express Service", description: "Quick wash & vacuum for time-pressed customers", price: "₹499" }
  ];

  const faqQueries = [
    { question: "Where is the best car detailing near Cherpulassery?", answer: "XERA Auto Detailing in Ottapalam is the best professional detailing service near Cherpulassery, just 25 minutes away. We offer premium detailing with pickup service from Cherpulassery.", keywords: ["car detailing cherpulassery", "best detailing near cherpulassery"] },
    { question: "What is the cost of car detailing in Cherpulassery?", answer: "Car detailing for Cherpulassery customers starts at ₹499 for express wash. Full exterior detailing is ₹1,999, interior is ₹1,499, and ceramic coating starts at ₹7,999.", keywords: ["car detailing price cherpulassery", "detailing cost cherpulassery"] },
    { question: "Do you offer home pickup from Cherpulassery?", answer: "Yes! We offer free pickup and delivery service from Cherpulassery for all detailing packages above ₹1,499. Just call to schedule your pickup.", keywords: ["car pickup cherpulassery", "home service cherpulassery"] }
  ];

  const nearbyAreas = ["Cherpulassery Town", "Pattambi Road", "Mannarkad Road", "Sreekrishnapuram", "Koppam", "Vadakkenchery"];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Car Detailing Cherpulassery | Professional Auto Care | XERA</title>
        <meta name="description" content="Professional car detailing services in Cherpulassery, Palakkad. Complete interior & exterior detailing, ceramic coating, paint correction." />
        <link rel="canonical" href="https://xeradetailing.in/car-detailing-cherpulassery" />
        <meta property="og:title" content="Car Detailing Cherpulassery | XERA Detailing" />
        <meta property="og:description" content="Professional car detailing for Cherpulassery. Interior, exterior & ceramic coating services." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "XERA Detailing - Cherpulassery Service",
            "description": "Professional car detailing for Cherpulassery area",
            "address": { "@type": "PostalAddress", "addressLocality": "Ottapalam", "addressRegion": "Kerala", "addressCountry": "IN" },
            "telephone": "+919605858483",
            "areaServed": { "@type": "City", "name": "Cherpulassery" }
          })}
        </script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Locations', href: '/' }, { label: 'Car Detailing Cherpulassery', href: '' }]} />

      <main className="flex-grow">
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Professional Car Detailing in Cherpulassery
              </motion.h1>
              <motion.p className="text-xl text-white/80 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                Complete auto care services for Cherpulassery residents. From express wash to ceramic coating, we've got your car covered.
              </motion.p>
              <EnhancedCTA text="Book Detailing Now" href="https://wa.me/919605858483?text=Hi%20XERA%2C%20I%20need%20car%20detailing%20from%20Cherpulassery" variant="primary" shimmerEffect={true} trackingLabel="hero_cta_cherpulassery" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Our Services for Cherpulassery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div key={service.title} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-xera-red" />
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-white/70 mb-4 text-sm">{service.description}</p>
                  <p className="text-2xl font-bold text-xera-red">From {service.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gradient">Service Areas Near Cherpulassery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {nearbyAreas.map((area) => (
                <div key={area} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-4 text-center text-sm hover:border-xera-red transition-colors">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Frequently Asked Questions</h2>
            <VoiceSearchFAQ queries={faqQueries} />
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-xera-red to-red-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Car?</h2>
            <p className="text-white/90 mb-8">Professional detailing with free pickup from Cherpulassery</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919605858483" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Call: +91 96058 58483</a>
              <EnhancedCTA text="WhatsApp Booking" href="https://wa.me/919605858483?text=Hi%20XERA%2C%20I%20want%20to%20book%20detailing%20from%20Cherpulassery" variant="outline" className="border-white text-white hover:bg-white/10" trackingLabel="cta_cherpulassery" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CarDetailingCherpulassery;