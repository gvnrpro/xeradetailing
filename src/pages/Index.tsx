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
import { setPageMetadata, generateSchemaMarkup, generateFaqSchema } from '@/utils/seoHelper';
import { serviceKeywords, locationKeywords } from '@/utils/seoKeywords';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import LeadMagnetForm from '@/components/enhanced/LeadMagnetForm';
import TrustSignals from '@/components/enhanced/TrustSignals';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';

const Index = () => {
  // Update document metadata for SEO with enhanced keywords
  useEffect(() => {
    // Enhanced SEO setup for homepage with aggressive keyword targeting
    setPageMetadata(
      "Best Ceramic Coating & Car Detailing in Ottapalam | XERA Auto Detailing", 
      "Kerala's premier ceramic coating and auto detailing studio in Ottapalam. Professional paint protection, interior detailing, and 9H ceramic coating services across Palakkad district including Shoranur, Pattambi, and nearby areas.",
      "https://xeradetailing.in/",
      "https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
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
    
    // Track page view
    trackEvent('view_homepage');
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BreadcrumbNav />
      <main>
        <HeroSection />
        <HomeGallery />
        <section className="py-12 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Experience the XERA Difference</h2>
              <p className="text-white/70 max-w-2xl mb-8">
                Our premium ceramic coating service protects your vehicle from Kerala's harsh climate while delivering a showroom finish that lasts for years.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/services/ceramic-coating">
                  <Button className="bg-xera-red hover:bg-red-700 text-white flex items-center group" onClick={() => trackEvent('homepage_cta_click', { cta_text: 'Explore Ceramic Coating Services' })}>
                    Explore Ceramic Coating Services
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/blog/ceramic-coating-ottapalam-car-protection">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" onClick={() => trackEvent('homepage_cta_click', { cta_text: 'Read About Ceramic Coating Benefits' })}>
                    Read About Ceramic Coating Benefits
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <WhyDetailingMatters />
        <ServicesSection />
        <AnimatedGallery />
        <section className="py-12 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Ready for Your Premium Car Care?</h2>
              <p className="text-white/70 max-w-2xl mb-8">
                Schedule your ceramic coating consultation today and discover why XERA is the top-rated auto detailing studio in Ottapalam and surrounding areas.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-xera-red hover:bg-red-700 text-white flex items-center group" onClick={() => trackEvent('homepage_cta_click', { cta_text: 'Book Your Appointment Now' })}>
                    Book Your Appointment Now
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="tel:+919605858483">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" onClick={() => trackEvent('homepage_cta_click', { cta_text: 'Call: +91 9605858483' })}>
                    Call: +91 9605858483
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <ServiceAreas />
        <CustomerTrust />
        <FAQSection />
        <LeadMagnetForm className="my-12" />
        <TrustSignals variant="customer-photos" className="my-16" />
        <TrustSignals variant="as-seen-on" className="my-16" />
        <TrustSignals variant="certification" className="my-16" />
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
          "@id": "https://xeradetailing.in/#organization",
          "name": "XERA Car Wash & Auto Detailing",
          "image": "https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
          "url": "https://xeradetailing.in",
          "telephone": "+919605858483",
          "email": "contact@xeradetailing.in",
          "priceRange": "₹₹",
          "description": "Kerala's leading car wash and auto detailing studio offering ceramic coating, interior cleaning, paint correction, and more in Ottapalam, Palakkad.",
          "keywords": [
            "ceramic coating ottapalam", 
            "car detailing palakkad", 
            "paint protection services kerala", 
            "best ceramic coating shop", 
            "mobile ceramic coating experts"
          ].join(", "),
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
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "10:00",
              "closes": "17:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/xeradetailing",
            "https://www.instagram.com/xeradetailing",
            "https://www.youtube.com/channel/xeradetailing"
          ],
          "areaServed": locationKeywords.nearby.concat([locationKeywords.primary, locationKeywords.district]),
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 10.980150076997278,
              "longitude": 76.37854502536776
            },
            "geoRadius": 50000
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Car Detailing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ceramic Coating",
                  "description": "Premium 9H ceramic coating with hydrophobic properties and UV protection."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Interior Detailing",
                  "description": "Complete interior sanitization and premium cleaning service."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Express Wash",
                  "description": "Quick but thorough car washing service with premium products."
                }
              }
            ]
          }
        }) }}
      />

      {/* Enhanced Service Schema with more details */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateSchemaMarkup('Service', {
          "@id": "https://xeradetailing.in/#service",
          "serviceType": "Ceramic Coating",
          "name": "Premium Ceramic Coating Service in Ottapalam",
          "provider": {
            "@type": "LocalBusiness",
            "@id": "https://xeradetailing.in/#organization"
          },
          "areaServed": locationKeywords.nearby.concat([locationKeywords.primary, locationKeywords.district]),
          "description": "Premium 9H+ ceramic coating that protects your vehicle's paint from Kerala's harsh climate conditions, providing extreme hydrophobic properties and UV resistance.",
          "offers": {
            "@type": "Offer",
            "price": "7999",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2024-12-31"
          },
          "image": {
            "@type": "ImageObject",
            "url": "https://xeradetailing.in/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png", 
            "width": 1200,
            "height": 800
          }
        }) }}
      />

      {/* Breadcrumb Schema for improved navigation */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateSchemaMarkup('BreadcrumbList', {
          "itemListElement": [
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
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "XERA Car Wash & Auto Detailing",
          "url": "https://xeradetailing.in",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://xeradetailing.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "description": "Premium car detailing and ceramic coating services in Ottapalam, Kerala"
        }) }}
      />
      
      {/* FAQ Schema for homepage */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateFaqSchema([
          {
            question: "What ceramic coating services does XERA offer in Ottapalam?",
            answer: "XERA offers premium 9H+ ceramic coating services in Ottapalam with hydrophobic properties, UV protection, and 3-5 year durability. We serve all vehicles from hatchbacks to luxury cars."
          },
          {
            question: "How much does ceramic coating cost at XERA Ottapalam?",
            answer: "Our ceramic coating packages start at ₹7,999, with pricing depending on vehicle size and condition. We offer competitive rates with premium quality materials and professional application."
          },
          {
            question: "Do you offer mobile ceramic coating services in Palakkad district?",
            answer: "Yes, XERA provides mobile ceramic coating services across Palakkad district, including Ottapalam, Shoranur, Pattambi, and nearby areas, bringing our professional equipment to your location."
          },
          {
            question: "What makes XERA's ceramic coating better than others in Kerala?",
            answer: "XERA uses advanced 9H+ ceramic coating technology specifically formulated for Kerala's climate, offering superior protection against UV rays, harsh rains, and environmental contaminants with certified application techniques."
          },
          {
            question: "How long does ceramic coating last in Kerala's climate?",
            answer: "With proper maintenance, our premium ceramic coating lasts 3-5 years even in Kerala's harsh tropical climate. We provide maintenance tips and follow-up services to ensure maximum longevity."
          },
          {
            question: "Can I get ceramic coating for my bike in Ottapalam?",
            answer: "Yes, XERA provides specialized ceramic coating services for motorcycles and bikes in Ottapalam with packages starting at ₹3,999. Our bike ceramic coating offers the same protection benefits as car coatings."
          }
        ]) }}
      />
    </div>
  );
};

export default Index;
