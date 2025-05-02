
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyDetailingMatters from '@/components/WhyDetailingMatters';
import ServicesSection from '@/components/ServicesSection';
import CustomerTrust from '@/components/CustomerTrust';
import FAQSection from '@/components/FAQSection';
import GoogleReviewInvite from '@/components/GoogleReviewInvite';
import AboutSection from '@/components/AboutSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  // Update document title for SEO
  useEffect(() => {
    document.title = "XERA Car Wash & Auto Detailing | Ceramic Coating in Ottapalam";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      "Experience the best car wash and auto detailing in Ottapalam. XERA offers expert ceramic coating, interior cleaning, and paint protection in Kerala."
    );

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://xeradetailing.in/');
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <WhyDetailingMatters />
        <ServicesSection />
        <CustomerTrust />
        <FAQSection />
        <GoogleReviewInvite />
        <AboutSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />

      {/* LocalBusiness Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "XERA Car Wash & Auto Detailing",
            "image": "https://xeradetailing.in/logo.png",
            "url": "https://xeradetailing.in",
            "telephone": "+919605858483",
            "priceRange": "₹₹",
            "description": "Kerala's leading car wash and auto detailing studio offering ceramic coating, interior cleaning, paint correction, and more.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Opp. NSS College, Palappuram",
              "addressLocality": "Ottapalam",
              "postalCode": "679103",
              "addressRegion": "Kerala",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 10.980150076997278,
              "longitude": 76.37854502536776
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "09:00",
              "closes": "19:00"
            },
            "sameAs": [
              "https://www.facebook.com/xeradetailing",
              "https://www.instagram.com/xeradetailing"
            ]
          }
        `}}
      />
    </div>
  );
};

export default Index;
