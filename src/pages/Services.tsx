
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FeaturedGallery from '@/components/FeaturedGallery';
import BeforeAfterShowcase from '@/components/BeforeAfterShowcase';
import PremiumServiceDiscovery from '@/components/PremiumServiceDiscovery';
import PricingPreview from '@/components/mobile/PricingPreview';
import SmartLeadCapture from '@/components/conversion/SmartLeadCapture';
import SEOContentManager from '@/components/seo/SEOContentManager';
import SocialProofSystem from '@/components/conversion/SocialProofSystem';
import { motion } from 'framer-motion';

const Services = () => {
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
          {/* Premium Hero Section */}
          <div className="section-spacing premium-hero-bg relative overflow-hidden">
            <div className="container-spacing relative z-10">
              <motion.div 
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 premium-text-gradient text-balance">
                  Professional Automotive Care
                </h1>
                
                <p className="text-lg md:text-xl text-premium-light-gray leading-relaxed max-w-2xl mx-auto">
                  Experience the pinnacle of automotive detailing with our premium services, meticulously designed for Kerala's unique climate challenges.
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Premium Service Discovery */}
          <PremiumServiceDiscovery />
          
          {/* Refined Social Proof */}
          <SocialProofSystem variant="stats" className="section-spacing bg-premium-charcoal/50" />
          
          {/* Pricing Preview */}
          <PricingPreview />
          
          {/* Featured Gallery */}
          <FeaturedGallery />
          
          {/* Before/After Showcase */}
          <BeforeAfterShowcase />
          
          {/* Certifications */}
          <SocialProofSystem variant="certifications" className="section-spacing bg-premium-slate/30" />
          
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
        
        {/* Refined conversion optimization */}
        <SmartLeadCapture 
          trigger="time" 
          delay={15000}
          offer="Complimentary Vehicle Assessment"
          urgency={false}
        />
      </div>
    </>
  );
};

export default Services;
