
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FeaturedGallery from '@/components/FeaturedGallery';
import BeforeAfterShowcase from '@/components/BeforeAfterShowcase';
import ServiceDiscovery from '@/components/mobile/ServiceDiscovery';
import PricingPreview from '@/components/mobile/PricingPreview';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Services = () => {
  const isMobile = useIsMobile();
  
  // Update document title and meta description for SEO
  useEffect(() => {
    document.title = "Car Detailing & Auto Care Services in Ottapalam, Palakkad | XERA Kerala";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Professional car detailing services in Ottapalam, Palakkad including ceramic coating, interior cleaning, paint correction, and engine bay detailing. XERA - Kerala\'s premium auto care specialists.'
    );
    
    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://xeradetailing.in/services');
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section - Simplified for mobile */}
        <div className="bg-xera-darkgray py-12 lg:py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              className="text-2xl md:text-4xl font-bold text-center mb-4 text-gradient"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Professional Auto Care Services
            </motion.h1>
            
            <motion.p 
              className="text-center text-white/70 max-w-2xl mx-auto mb-6 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Expert detailing services designed for Kerala's climate. From quick washes to premium ceramic coatings.
            </motion.p>
          </div>
        </div>
        
        {/* Service Discovery - Mobile Optimized */}
        <ServiceDiscovery />
        
        {/* Pricing Preview */}
        <PricingPreview />
        
        {/* Featured Gallery */}
        <FeaturedGallery />
        
        {/* Before/After Showcase */}
        <BeforeAfterShowcase />
        
        {/* Schema markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Car Detailing Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "XERA Car Wash & Auto Detailing",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Opp. NSS College, Palappuram",
                  "addressLocality": "Ottapalam",
                  "addressRegion": "Kerala",
                  "postalCode": "679103",
                  "addressCountry": "IN"
                },
                "telephone": "+919605858483",
                "priceRange": "₹₹",
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 10.980150076997278,
                  "longitude": 76.37854502536776
                }
              },
              "areaServed": [
                "Ottapalam",
                "Palakkad",
                "Shoranur",
                "Pattambi",
                "Perinthalmanna",
                "Cherpulassery"
              ]
            })
          }}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
