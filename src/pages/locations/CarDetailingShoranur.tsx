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
import { CheckCheck, MapPin, Phone, Clock } from 'lucide-react';

const CarDetailingShoranur = () => {
  useEffect(() => {
    setPageMetadata(
      "Car Detailing Shoranur | Professional Auto Detailing | XERA",
      "Premium car detailing services in Shoranur, Kerala. Complete interior & exterior detailing, ceramic coating, paint correction. Near Shoranur Railway Station.",
      "https://xeradetailing.in/car-detailing-shoranur",
      "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
      ["car detailing shoranur", "auto detailing shoranur kerala", "car cleaning shoranur", "professional car detailing near shoranur railway station", "interior detailing shoranur", "exterior detailing shoranur"]
    );
    trackEvent('view_location_page', { location: 'Shoranur', service: 'Car Detailing' });
  }, []);

  const services = [
    { title: "Complete Detailing", description: "Full interior & exterior restoration to showroom condition", price: "₹2,999" },
    { title: "Interior Deep Clean", description: "Thorough seat, carpet, dashboard & AC vent cleaning", price: "₹1,499" },
    { title: "Exterior Polish", description: "Paint correction, polish & wax for mirror finish", price: "₹1,999" },
    { title: "Ceramic Coating", description: "9H protection with 5+ year warranty", price: "₹7,999" }
  ];

  const faqQueries = [
    { question: "Where is the best car detailing service in Shoranur?", answer: "XERA Auto Detailing in Ottapalam is the best car detailing service near Shoranur, just 15 minutes from Shoranur Railway Station. We offer premium detailing with pickup/drop service.", keywords: ["car detailing shoranur", "best detailing shoranur"] },
    { question: "How much does car detailing cost in Shoranur?", answer: "Car detailing in Shoranur starts from ₹1,499 for interior cleaning to ₹2,999 for complete detailing. Ceramic coating packages start at ₹7,999 with 5+ year warranty.", keywords: ["car detailing price shoranur", "detailing cost shoranur"] },
    { question: "Do you offer pickup service from Shoranur?", answer: "Yes! We offer free pickup and drop service for all Shoranur customers. Just call us to schedule, and we'll collect your car from your location.", keywords: ["car pickup shoranur", "home service shoranur"] }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Car Detailing Shoranur | Professional Auto Detailing | XERA</title>
        <meta name="description" content="Premium car detailing services in Shoranur, Kerala. Complete interior & exterior detailing, ceramic coating, paint correction. Near Shoranur Railway Station." />
        <link rel="canonical" href="https://xeradetailing.in/car-detailing-shoranur" />
        <meta property="og:title" content="Car Detailing Shoranur | XERA Auto Detailing" />
        <meta property="og:description" content="Premium car detailing services in Shoranur with free pickup/drop. Interior, exterior & ceramic coating services." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "XERA Car Wash & Auto Detailing - Shoranur Service",
            "description": "Professional car detailing services in Shoranur",
            "address": { "@type": "PostalAddress", "addressLocality": "Ottapalam", "addressRegion": "Kerala", "addressCountry": "IN" },
            "telephone": "+919605858483",
            "areaServed": { "@type": "City", "name": "Shoranur" }
          })}
        </script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Locations', href: '/' }, { label: 'Car Detailing Shoranur', href: '' }]} />

      <main className="flex-grow">
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Professional Car Detailing in Shoranur
              </motion.h1>
              <motion.p className="text-xl text-white/80 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                Complete auto detailing services for Shoranur residents. Interior deep cleaning, exterior polishing, ceramic coating & more. Free pickup from Shoranur Railway Station area.
              </motion.p>
              <EnhancedCTA text="Book Detailing - Free Pickup" href="https://wa.me/919605858483?text=Hi%20XERA%2C%20I%20need%20car%20detailing%20service%20in%20Shoranur" variant="primary" shimmerEffect={true} trackingLabel="hero_cta_shoranur_detailing" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Our Detailing Services for Shoranur</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div key={service.title} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                  <h3 className="text-xl font-bold mb-2 text-xera-red">{service.title}</h3>
                  <p className="text-white/70 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold">Starting {service.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Why Shoranur Customers Choose XERA</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex items-start gap-4">
                <MapPin className="text-xera-red w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">15 Min from Railway Station</h3>
                  <p className="text-white/70">Easy access via Ottapalam-Shoranur Road with free parking</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-xera-red w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Free Pickup & Drop</h3>
                  <p className="text-white/70">We collect and deliver your car anywhere in Shoranur</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-xera-red w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Same Day Service</h3>
                  <p className="text-white/70">Express detailing available for Shoranur customers</p>
                </div>
              </div>
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
            <h2 className="text-3xl font-bold mb-6">Ready for Professional Detailing?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">Join hundreds of Shoranur car owners who trust XERA for premium detailing services.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919605858483" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Call: +91 96058 58483</a>
              <EnhancedCTA text="WhatsApp Booking" href="https://wa.me/919605858483?text=Hi%20XERA%2C%20I%20want%20to%20book%20car%20detailing%20from%20Shoranur" variant="outline" className="border-white text-white hover:bg-white/10" trackingLabel="cta_shoranur_detailing" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CarDetailingShoranur;