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
import { Shield, Droplets, Sun, Award, CheckCheck } from 'lucide-react';

const CeramicCoatingThrissur = () => {
  useEffect(() => {
    setPageMetadata(
      "Ceramic Coating Thrissur | 9H Protection | XERA Detailing",
      "Premium ceramic coating services in Thrissur, Kerala. 9H hardness, 5+ year warranty. Professional car protection for Thrissur district.",
      "https://xeradetailing.in/ceramic-coating-thrissur",
      "/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png",
      ["ceramic coating thrissur", "car ceramic coating thrissur kerala", "9h ceramic coating thrissur", "ceramic coating price thrissur", "best ceramic coating thrissur"]
    );
    trackEvent('view_location_page', { location: 'Thrissur', service: 'Ceramic Coating' });
  }, []);

  const packages = [
    { title: "Standard Ceramic", description: "Single layer 9H ceramic coating", price: "₹7,999", warranty: "3 Years", features: ["9H hardness", "Hydrophobic", "UV protection", "Basic prep"] },
    { title: "Premium Ceramic", description: "Double layer 9H ceramic coating", price: "₹12,999", warranty: "5 Years", features: ["Dual layer", "Paint correction", "Enhanced gloss", "Maintenance kit"] },
    { title: "Platinum Ceramic", description: "Triple layer with graphene infusion", price: "₹18,999", warranty: "7 Years", features: ["Triple layer", "Graphene infused", "Full paint correction", "Annual checkup"] }
  ];

  const faqQueries = [
    { question: "Where is the best ceramic coating service in Thrissur?", answer: "XERA Detailing offers premium ceramic coating for Thrissur customers. Located in Ottapalam (1 hour from Thrissur), we provide pickup service and specialize in 9H ceramic coating with up to 7-year warranty.", keywords: ["ceramic coating thrissur", "best ceramic coating near thrissur"] },
    { question: "How much does ceramic coating cost in Thrissur?", answer: "Ceramic coating for Thrissur customers starts at ₹7,999 for standard 3-year package. Premium 5-year package is ₹12,999 and Platinum 7-year package is ₹18,999. All include free pickup from Thrissur.", keywords: ["ceramic coating price thrissur", "ceramic coating cost thrissur kerala"] },
    { question: "How long does ceramic coating last in Kerala climate?", answer: "Our ceramic coating lasts 3-7 years depending on package chosen. It's specifically formulated for Kerala's humid climate, monsoon rains, and intense sun exposure.", keywords: ["ceramic coating durability kerala", "how long ceramic coating lasts"] }
  ];

  const serviceAreas = ["Thrissur Town", "Guruvayur", "Chalakudy", "Kodungallur", "Irinjalakuda", "Kunnamkulam", "Wadakkanchery", "Chavakkad"];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Ceramic Coating Thrissur | 9H Protection | XERA Detailing</title>
        <meta name="description" content="Premium ceramic coating services in Thrissur, Kerala. 9H hardness, 5+ year warranty. Professional car protection for Thrissur district." />
        <link rel="canonical" href="https://xeradetailing.in/ceramic-coating-thrissur" />
        <meta property="og:title" content="Ceramic Coating Thrissur | XERA Detailing" />
        <meta property="og:description" content="Premium 9H ceramic coating for Thrissur. 5+ year warranty with free pickup service." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "XERA Detailing - Thrissur Ceramic Coating",
            "description": "Professional ceramic coating services for Thrissur district",
            "address": { "@type": "PostalAddress", "addressLocality": "Ottapalam", "addressRegion": "Kerala", "addressCountry": "IN" },
            "telephone": "+919605858483",
            "areaServed": { "@type": "City", "name": "Thrissur" },
            "priceRange": "₹7,999 - ₹18,999"
          })}
        </script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Locations', href: '/' }, { label: 'Ceramic Coating Thrissur', href: '' }]} />

      <main className="flex-grow">
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Premium Ceramic Coating in Thrissur
              </motion.h1>
              <motion.p className="text-xl text-white/80 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                Professional 9H ceramic coating with up to 7-year warranty. Serving all of Thrissur district with free pickup & delivery.
              </motion.p>
              <EnhancedCTA text="Get Free Quote" href="https://wa.me/919605858483?text=Hi%20XERA%2C%20I%20need%20ceramic%20coating%20quote%20for%20my%20car%20in%20Thrissur" variant="primary" shimmerEffect={true} trackingLabel="hero_cta_thrissur" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">Ceramic Coating Packages</h2>
            <p className="text-center text-white/70 mb-12">Choose the protection level that suits your needs</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div key={pkg.title} className={`bg-xera-darkgray border rounded-lg p-6 ${index === 1 ? 'border-xera-red scale-105' : 'border-xera-lightgray'}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                  {index === 1 && <div className="bg-xera-red text-white text-xs font-bold py-1 px-3 rounded-full w-fit mx-auto mb-4">MOST POPULAR</div>}
                  <h3 className="text-xl font-bold text-center mb-2">{pkg.title}</h3>
                  <p className="text-center text-white/70 text-sm mb-4">{pkg.description}</p>
                  <p className="text-3xl font-bold text-center text-xera-red mb-2">{pkg.price}</p>
                  <p className="text-center text-white/50 text-sm mb-6">{pkg.warranty} Warranty</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCheck className="w-4 h-4 text-green-500" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <EnhancedCTA text="Book Now" href={`https://wa.me/919605858483?text=Hi%20XERA%2C%20I%20want%20${pkg.title}%20package%20from%20Thrissur`} variant={index === 1 ? "primary" : "outline"} className="w-full" trackingLabel={`cta_thrissur_${pkg.title.toLowerCase()}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gradient">Serving All of Thrissur District</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
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
            <h2 className="text-3xl font-bold mb-6">Protect Your Car Today</h2>
            <p className="text-white/90 mb-8">Premium ceramic coating with free pickup from Thrissur</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919605858483" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Call: +91 96058 58483</a>
              <EnhancedCTA text="WhatsApp Quote" href="https://wa.me/919605858483?text=Hi%20XERA%2C%20I%20want%20ceramic%20coating%20quote%20from%20Thrissur" variant="outline" className="border-white text-white hover:bg-white/10" trackingLabel="cta_thrissur_final" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CeramicCoatingThrissur;