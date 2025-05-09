
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
import { serviceKeywords, locationKeywords } from '@/utils/seoKeywords';

const Index = () => {
  // Update document metadata for SEO with enhanced keywords
  useEffect(() => {
    // Enhanced SEO setup for homepage with aggressive keyword targeting
    setPageMetadata(
      "Best Ceramic Coating & Car Detailing in Ottapalam | XERA Auto Detailing", 
      "Kerala's premier ceramic coating and auto detailing studio in Ottapalam. Professional paint protection, interior detailing, and 9H ceramic coating services across Palakkad district including Shoranur and Pattambi.",
      "https://xeradetailing.in/",
      "https://xeradetailing.in/assets/ceramic-after.jpg",
      [
        // Primary keywords
        "ceramic coating ottapalam",
        "car detailing ottapalam", 
        "paint protection services ottapalam",
        "auto detailing services ottapalam",
        "best ceramic coating near me",
        // Secondary keywords
        "9H ceramic coating palakkad",
        "interior car cleaning ottapalam",
        "exterior car polishing ottapalam",
        "headlight restoration ottapalam",
        "car wash services ottapalam",
        // Long-tail keywords
        "affordable ceramic coating services in ottapalam",
        "professional car detailing experts ottapalam",
        "top-rated auto detailing near ottapalam",
        "ceramic coating for SUVs in ottapalam",
        "eco-friendly car wash ottapalam",
        // Brand keywords
        "XERA detailing",
        "premium car care kerala"
      ]
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

      {/* Enhanced LocalBusiness Schema with more details */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateSchemaMarkup('LocalBusiness', {
          name: "XERA Car Wash & Auto Detailing",
          image: "https://xeradetailing.in/assets/ceramic-after.jpg",
          url: "https://xeradetailing.in",
          telephone: "+919605858483",
          priceRange: "₹₹",
          description: "Kerala's leading car wash and auto detailing studio offering ceramic coating, interior cleaning, paint correction, and more in Ottapalam, Palakkad.",
          keywords: [
            "ceramic coating ottapalam", 
            "car detailing palakkad", 
            "paint protection services kerala", 
            "best ceramic coating shop", 
            "mobile ceramic coating experts"
          ].join(", "),
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
          areaServed: locationKeywords.nearby.concat([locationKeywords.primary, locationKeywords.district]),
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

      {/* Enhanced Service Schema with more details */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateSchemaMarkup('Service', {
          serviceType: "Ceramic Coating",
          name: "Premium Ceramic Coating Service in Ottapalam",
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
          areaServed: locationKeywords.nearby.concat([locationKeywords.primary, locationKeywords.district]),
          description: "Premium 9H+ ceramic coating that protects your vehicle's paint from Kerala's harsh climate conditions, providing extreme hydrophobic properties and UV resistance.",
          offers: {
            "@type": "Offer",
            "price": "7999",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }) }}
      />

      {/* Breadcrumb Schema for improved navigation */}
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
      
      {/* Enhanced WebSite Schema */}
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
      
      {/* FAQ Schema for homepage */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateSchemaMarkup('FAQPage', {
          mainEntity: [
            {
              "@type": "Question",
              "name": "What ceramic coating services does XERA offer in Ottapalam?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "XERA offers premium 9H+ ceramic coating services in Ottapalam with hydrophobic properties, UV protection, and 3-5 year durability. We serve all vehicles from hatchbacks to luxury cars."
              }
            },
            {
              "@type": "Question",
              "name": "How much does ceramic coating cost at XERA Ottapalam?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our ceramic coating packages start at ₹7,999, with pricing depending on vehicle size and condition. We offer competitive rates with premium quality materials and professional application."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer mobile ceramic coating services in Palakkad district?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, XERA provides mobile ceramic coating services across Palakkad district, including Ottapalam, Shoranur, Pattambi, and nearby areas, bringing our professional equipment to your location."
              }
            },
            {
              "@type": "Question",
              "name": "What makes XERA's ceramic coating better than others in Kerala?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "XERA uses advanced 9H+ ceramic coating technology specifically formulated for Kerala's climate, offering superior protection against UV rays, harsh rains, and environmental contaminants with certified application techniques."
              }
            }
          ]
        }) }}
      />
    </div>
  );
};

export default Index;
