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
import { Shield, Sun, Droplets, Award } from 'lucide-react';

const PaintProtectionPerinthalmanna = () => {
  useEffect(() => {
    setPageMetadata(
      "Paint Protection Perinthalmanna | PPF & Ceramic Coating | XERA",
      "Professional paint protection services in Perinthalmanna, Malappuram. PPF, ceramic coating, paint correction. Protect your car from Kerala's climate.",
      "https://xeradetailing.in/paint-protection-perinthalmanna",
      "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
      ["paint protection perinthalmanna", "ppf perinthalmanna", "ceramic coating perinthalmanna malappuram", "car paint protection perinthalmanna", "paint protection film malappuram"]
    );
    trackEvent('view_location_page', { location: 'Perinthalmanna', service: 'Paint Protection' });
  }, []);

  const protectionOptions = [
    { icon: Shield, title: "Paint Protection Film (PPF)", description: "Self-healing film that protects against scratches, stone chips & road debris", price: "₹25,000", warranty: "7 Years" },
    { icon: Sun, title: "Ceramic Coating", description: "9H hardness coating for UV protection, hydrophobic properties & gloss", price: "₹7,999", warranty: "5 Years" },
    { icon: Droplets, title: "Graphene Coating", description: "Next-gen protection with superior heat resistance & durability", price: "₹15,999", warranty: "5 Years" },
    { icon: Award, title: "PPF + Ceramic Combo", description: "Ultimate protection: PPF for high-impact areas + full ceramic coating", price: "₹35,000", warranty: "7 Years" }
  ];

  const faqQueries = [
    { question: "Where can I get PPF done near Perinthalmanna?", answer: "XERA Detailing offers professional PPF installation for Perinthalmanna customers. We're located in Ottapalam, about 45 minutes from Perinthalmanna, and offer pickup/drop service for paint protection treatments.", keywords: ["ppf perinthalmanna", "paint protection film near perinthalmanna"] },
    { question: "What is the cost of ceramic coating in Perinthalmanna?", answer: "Ceramic coating for Perinthalmanna customers starts at ₹7,999 for hatchbacks with 5-year warranty. We offer free pickup from Perinthalmanna for all ceramic coating services.", keywords: ["ceramic coating price perinthalmanna", "ceramic coating cost malappuram"] },
    { question: "Is PPF worth it in Kerala's climate?", answer: "Absolutely! Kerala's road conditions with stone chips, and the humid climate make PPF essential for luxury cars. It protects against scratches, UV damage, and maintains resale value.", keywords: ["ppf kerala", "paint protection kerala climate"] }
  ];

  const serviceAreas = ["Perinthalmanna Town", "Manjeri", "Malappuram", "Tirur", "Nilambur", "Kalikavu"];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Paint Protection Perinthalmanna | PPF & Ceramic Coating | XERA</title>
        <meta name="description" content="Professional paint protection services in Perinthalmanna, Malappuram. PPF, ceramic coating, paint correction. Protect your car from Kerala's climate." />
        <link rel="canonical" href="https://xeradetailing.in/paint-protection-perinthalmanna" />
        <meta property="og:title" content="Paint Protection Perinthalmanna | XERA Detailing" />
        <meta property="og:description" content="PPF & Ceramic coating services for Perinthalmanna. Professional paint protection with warranty." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "XERA Detailing - Perinthalmanna Paint Protection",
            "description": "Professional paint protection services for Perinthalmanna area",
            "address": { "@type": "PostalAddress", "addressLocality": "Ottapalam", "addressRegion": "Kerala", "addressCountry": "IN" },
            "telephone": "+919605858483",
            "areaServed": [{ "@type": "City", "name": "Perinthalmanna" }, { "@type": "City", "name": "Malappuram" }]
          })}
        </script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Locations', href: '/' }, { label: 'Paint Protection Perinthalmanna', href: '' }]} />

      <main className="flex-grow">
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Paint Protection Services in Perinthalmanna
              </motion.h1>
              <motion.p className="text-xl text-white/80 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                Protect your car's paint from Kerala's harsh conditions. Professional PPF installation & ceramic coating for Perinthalmanna and Malappuram district.
              </motion.p>
              <EnhancedCTA text="Get Free Consultation" href="https://wa.me/919605858483?text=Hi%20XERA%2C%20I%20need%20paint%20protection%20service%20in%20Perinthalmanna" variant="primary" shimmerEffect={true} trackingLabel="hero_cta_perinthalmanna" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Paint Protection Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {protectionOptions.map((option, index) => (
                <motion.div key={option.title} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                  <option.icon className="w-12 h-12 mb-4 text-xera-red" />
                  <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                  <p className="text-white/70 mb-4 text-sm">{option.description}</p>
                  <p className="text-2xl font-bold text-xera-red mb-1">From {option.price}</p>
                  <p className="text-white/50 text-sm">{option.warranty} Warranty</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gradient">Serving Malappuram District</h2>
              <p className="text-center text-white/70 mb-8">We provide paint protection services to customers across Malappuram district with free pickup and delivery.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {serviceAreas.map((area) => (
                  <div key={area} className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-4 text-center hover:border-xera-red transition-colors text-sm">
                    {area}
                  </div>
                ))}
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
            <h2 className="text-3xl font-bold mb-6">Protect Your Investment Today</h2>
            <p className="text-white/90 mb-8">Premium paint protection with warranty for Perinthalmanna customers</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919605858483" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Call: +91 96058 58483</a>
              <EnhancedCTA text="WhatsApp Consultation" href="https://wa.me/919605858483?text=Hi%20XERA%2C%20I%20want%20paint%20protection%20consultation%20from%20Perinthalmanna" variant="outline" className="border-white text-white hover:bg-white/10" trackingLabel="cta_perinthalmanna" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PaintProtectionPerinthalmanna;