
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
import AnimatedGallery from '@/components/AnimatedGallery';
import HomeGallery from '@/components/HomeGallery';
import ServiceAreas from '@/components/ServiceAreas';
import { setPageMetadata, generateSchemaMarkup } from '@/utils/seoHelper';

const Index = () => {
  // Update document metadata for SEO
  useEffect(() => {
    // Comprehensive SEO setup for homepage
    setPageMetadata(
      "XERA Car Wash & Auto Detailing | Ceramic Coating in Ottapalam, Palakkad", 
      "Kerala's premier car ceramic coating and auto detailing studio in Ottapalam. Professional paint protection, interior detailing, and car care services across Palakkad district.",
      "https://xeradetailing.in/",
      "https://xeradetailing.in/logo.png",
      ["ceramic coating Ottapalam", "car detailing Palakkad", "paint protection services", "auto detailing Kerala", "car wash near me", "best ceramic coating shop"]
    );
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <HomeGallery />
        <WhyDetailingMatters />
        <ServicesSection />
        <AnimatedGallery />
        <ServiceAreas />
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
        dangerouslySetInnerHTML={{ __html: generateSchemaMarkup('LocalBusiness', {
          name: "XERA Car Wash & Auto Detailing",
          image: "https://xeradetailing.in/logo.png",
          url: "https://xeradetailing.in",
          telephone: "+919605858483",
          priceRange: "₹₹",
          description: "Kerala's leading car wash and auto detailing studio offering ceramic coating, interior cleaning, paint correction, and more in Ottapalam, Palakkad.",
          keywords: "ceramic coating Ottapalam, car detailing Palakkad, paint protection services Kerala, best ceramic coating shop, mobile ceramic coating experts",
          address: {
            "@type": "PostalAddress",
            "streetAddress": "Opp. NSS College, Palappuram",
            "addressLocality": "Ottapalam",
            "postalCode": "679103",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
          },
          geo: {
            "@type": "GeoCoordinates",
            "latitude": 10.980150076997278,
            "longitude": 76.37854502536776
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "09:00",
            "closes": "19:00"
          },
          sameAs: [
            "https://www.facebook.com/xeradetailing",
            "https://www.instagram.com/xeradetailing"
          ],
          areaServed: ["Ottapalam", "Palakkad", "Shoranur", "Pattambi", "Perinthalmanna", "Thrissur", "Cherpulassery"],
          serviceArea: {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 10.980150076997278,
              "longitude": 76.37854502536776
            },
            "geoRadius": 50000
          }
        }) }}
      />

      {/* Service Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateSchemaMarkup('Service', {
          serviceType: "Ceramic Coating",
          provider: {
            "@type": "LocalBusiness",
            "name": "XERA Car Wash & Auto Detailing",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Opp. NSS College, Palappuram",
              "addressLocality": "Ottapalam",
              "addressRegion": "Kerala",
              "postalCode": "679103",
              "addressCountry": "IN"
            }
          },
          areaServed: ["Ottapalam", "Palakkad", "Shoranur", "Pattambi", "Perinthalmanna"],
          description: "Premium 9H+ ceramic coating that protects your vehicle's paint from Kerala's harsh climate conditions, providing extreme hydrophobic properties and UV resistance.",
          offers: {
            "@type": "Offer",
            "price": "7999",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }) }}
      />

      {/* Breadcrumb Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateSchemaMarkup('BreadcrumbList', {
          itemListElement: [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://xeradetailing.in/"
            }
          ]
        }) }}
      />
      
      {/* WebSite Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateSchemaMarkup('WebSite', {
          name: "XERA Car Wash & Auto Detailing",
          url: "https://xeradetailing.in",
          potentialAction: {
            "@type": "SearchAction",
            "target": "https://xeradetailing.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }) }}
      />
    </div>
  );
};

export default Index;
