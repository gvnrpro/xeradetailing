
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FeaturedGallery from '@/components/FeaturedGallery';
import BeforeAfterShowcase from '@/components/BeforeAfterShowcase';
import ServiceDiscovery from '@/components/mobile/ServiceDiscovery';
import PricingPreview from '@/components/mobile/PricingPreview';
import SmartLeadCapture from '@/components/conversion/SmartLeadCapture';
import SEOContentManager from '@/components/seo/SEOContentManager';
import SocialProofSystem from '@/components/conversion/SocialProofSystem';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Services = () => {
  const isMobile = useIsMobile();
  
  const servicesStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Auto Detailing Services",
      "description": "Complete range of professional car detailing services",
      "itemListElement": [
        {
          "@type": "Service",
          "position": 1,
          "name": "Ceramic Coating",
          "description": "Premium 9H ceramic coating with 5+ year warranty",
          "offers": {
            "@type": "Offer",
            "price": "7999",
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Service", 
          "position": 2,
          "name": "Premium Car Detailing",
          "description": "Complete interior and exterior detailing service",
          "offers": {
            "@type": "Offer",
            "price": "2499",
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Service",
          "position": 3,
          "name": "Express Car Wash",
          "description": "Quick and efficient car washing service",
          "offers": {
            "@type": "Offer",
            "price": "499",
            "priceCurrency": "INR"
          }
        }
      ]
    }
  ];
  
  return (
    <>
      <SEOContentManager
        pageType="services"
        canonicalUrl="https://xeradetailing.in/services"
        structuredData={servicesStructuredData}
      />
      
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
          
          {/* Enhanced Social Proof Stats */}
          <SocialProofSystem variant="stats" className="bg-gradient-to-b from-xera-darkgray/50 to-background" />
          
          {/* Pricing Preview */}
          <PricingPreview />
          
          {/* Recent Activity Social Proof */}
          <SocialProofSystem variant="recent-activity" className="py-8" />
          
          {/* Featured Gallery */}
          <FeaturedGallery />
          
          {/* Before/After Showcase */}
          <BeforeAfterShowcase />
          
          {/* Certifications */}
          <SocialProofSystem variant="certifications" className="py-12 bg-xera-darkgray/30" />
          
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
        
        {/* Advanced conversion optimization */}
        <SmartLeadCapture 
          trigger="time" 
          delay={12000}
          offer="Free Paint Inspection + ₹500 OFF"
          urgency={true}
        />
      </div>
    </>
  );
};

export default Services;
