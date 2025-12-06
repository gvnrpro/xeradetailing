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
import { Droplets, Shield, Sparkles, Clock } from 'lucide-react';

const CarWashPattambi = () => {
  useEffect(() => {
    setPageMetadata(
      "Car Wash Pattambi | Professional Car Cleaning | XERA",
      "Best car wash service in Pattambi, Kerala. Express wash, premium detailing, interior cleaning. Professional car care near Pattambi town.",
      "https://xeradetailing.in/car-wash-pattambi",
      "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
      ["car wash pattambi", "car cleaning pattambi", "car wash near pattambi", "best car wash pattambi kerala", "express car wash pattambi"]
    );
    trackEvent('view_location_page', { location: 'Pattambi', service: 'Car Wash' });
  }, []);

  const packages = [
    { icon: Droplets, title: "Express Wash", description: "Quick exterior wash & dry", price: "₹299", time: "30 min" },
    { icon: Shield, title: "Premium Wash", description: "Exterior + interior vacuum + dashboard wipe", price: "₹599", time: "1 hour" },
    { icon: Sparkles, title: "Deluxe Wash", description: "Complete wash + interior detailing + tire shine", price: "₹999", time: "2 hours" },
    { icon: Clock, title: "Ultimate Clean", description: "Full detailing + engine bay + ceramic spray", price: "₹1,999", time: "3 hours" }
  ];

  const faqQueries = [
    { question: "Where is the best car wash near Pattambi?", answer: "XERA Car Wash in Ottapalam is the best professional car wash service near Pattambi, just 20 minutes away. We offer express to premium wash packages with professional-grade equipment.", keywords: ["car wash pattambi", "best car wash near pattambi"] },
    { question: "How much does car wash cost in Pattambi area?", answer: "Car wash near Pattambi starts from ₹299 for express wash to ₹1,999 for ultimate clean package. We offer the best value with professional-grade cleaning at competitive prices.", keywords: ["car wash price pattambi", "car wash cost pattambi"] },
    { question: "Do you offer home car wash service in Pattambi?", answer: "Yes! We offer pickup service from Pattambi for premium and above packages. We'll collect your car, wash it at our professional facility, and deliver it back sparkling clean.", keywords: ["home car wash pattambi", "car wash pickup pattambi"] }
  ];

  const serviceAreas = ["Pattambi Town", "Vallappuzha", "Koppam", "Edappalam", "Nellaya", "Ongallur"];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Car Wash Pattambi | Professional Car Cleaning | XERA</title>
        <meta name="description" content="Best car wash service in Pattambi, Kerala. Express wash, premium detailing, interior cleaning. Professional car care near Pattambi town." />
        <link rel="canonical" href="https://xeradetailing.in/car-wash-pattambi" />
        <meta property="og:title" content="Car Wash Pattambi | XERA Car Wash" />
        <meta property="og:description" content="Professional car wash services near Pattambi. Express to premium packages available." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "XERA Car Wash - Pattambi Service",
            "description": "Professional car wash services for Pattambi area",
            "address": { "@type": "PostalAddress", "addressLocality": "Ottapalam", "addressRegion": "Kerala", "addressCountry": "IN" },
            "telephone": "+919605858483",
            "areaServed": { "@type": "City", "name": "Pattambi" },
            "priceRange": "₹299 - ₹1,999"
          })}
        </script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Locations', href: '/' }, { label: 'Car Wash Pattambi', href: '' }]} />

      <main className="flex-grow">
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Professional Car Wash in Pattambi
              </motion.h1>
              <motion.p className="text-xl text-white/80 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                Premium car wash services for Pattambi residents. From quick express wash to complete detailing, we've got your car covered.
              </motion.p>
              <EnhancedCTA text="Book Car Wash Now" href="https://wa.me/919605858483?text=Hi%20XERA%2C%20I%20need%20car%20wash%20service%20from%20Pattambi" variant="primary" shimmerEffect={true} trackingLabel="hero_cta_pattambi_wash" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Car Wash Packages for Pattambi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <motion.div key={pkg.title} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                  <pkg.icon className="w-12 h-12 mx-auto mb-4 text-xera-red" />
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-white/70 mb-4 text-sm">{pkg.description}</p>
                  <p className="text-3xl font-bold text-xera-red mb-2">{pkg.price}</p>
                  <p className="text-white/50 text-sm">{pkg.time}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gradient">Service Areas Near Pattambi</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {serviceAreas.map((area) => (
                <div key={area} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-4 text-center hover:border-xera-red transition-colors">
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
            <h2 className="text-3xl font-bold mb-6">Get Your Car Sparkling Clean Today!</h2>
            <p className="text-white/90 mb-8">Professional car wash service for Pattambi residents</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919605858483" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Call: +91 96058 58483</a>
              <EnhancedCTA text="WhatsApp Booking" href="https://wa.me/919605858483?text=Hi%20XERA%2C%20I%20want%20to%20book%20car%20wash%20from%20Pattambi" variant="outline" className="border-white text-white hover:bg-white/10" trackingLabel="cta_pattambi_wash" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CarWashPattambi;