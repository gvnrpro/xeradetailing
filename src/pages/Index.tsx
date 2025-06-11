
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServiceDiscovery from '@/components/mobile/ServiceDiscovery';
import PricingPreview from '@/components/mobile/PricingPreview';
import WhyDetailingMatters from '@/components/WhyDetailingMatters';
import CustomerTrust from '@/components/CustomerTrust';
import LocationSection from '@/components/LocationSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SmartLeadCapture from '@/components/conversion/SmartLeadCapture';
import SEOContentManager from '@/components/seo/SEOContentManager';
import DynamicContentInjector from '@/components/conversion/DynamicContentInjector';
import SocialProofSystem from '@/components/conversion/SocialProofSystem';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "XERA Car Wash & Auto Detailing",
      "url": "https://xeradetailing.in",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://xeradetailing.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Ceramic Coating",
      "provider": {
        "@type": "LocalBusiness",
        "name": "XERA Car Wash & Auto Detailing"
      },
      "areaServed": ["Ottapalam", "Palakkad", "Shoranur", "Pattambi", "Perinthalmanna"],
      "offers": {
        "@type": "Offer",
        "price": "7999",
        "priceCurrency": "INR",
        "description": "Premium 9H Ceramic Coating with 5+ year warranty"
      }
    }
  ];
  
  return (
    <>
      <SEOContentManager
        pageType="home"
        canonicalUrl="https://xeradetailing.in"
        structuredData={structuredData}
      />
      
      <Helmet>
        <title>XERA Auto Detailing | Premium Car Care in Ottapalam, Palakkad Kerala</title>
        <meta name="description" content="Kerala's premier auto detailing studio in Ottapalam, Palakkad. Professional ceramic coating, paint correction, interior cleaning & car wash services. 5+ years protection guaranteed." />
        <meta property="og:title" content="XERA Auto Detailing | Premium Car Care in Ottapalam, Palakkad Kerala" />
        <meta property="og:description" content="Kerala's premier auto detailing studio. Professional ceramic coating, paint correction & car wash services in Ottapalam, Palakkad." />
        <meta property="og:image" content="/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png" />
        <meta property="og:url" content="https://xeradetailing.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://xeradetailing.in" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          
          {/* Enhanced Social Proof */}
          <SocialProofSystem variant="stats" className="bg-gradient-to-b from-background to-xera-darkgray/50" />
          
          {/* Mobile-optimized service discovery */}
          <ServiceDiscovery />
          
          {/* Pricing preview for mobile users */}
          {isMobile && <PricingPreview />}
          
          {/* Customer testimonials with enhanced social proof */}
          <SocialProofSystem variant="testimonials" className="py-12" />
          
          <WhyDetailingMatters />
          <CustomerTrust />
          <LocationSection />
          <BlogPreviewSection />
        </main>
        <Footer />
        <WhatsAppButton />
        
        {/* Conversion Optimization Components */}
        <SmartLeadCapture 
          trigger="scroll" 
          scrollThreshold={50}
          offer="₹500 OFF Ceramic Coating"
          urgency={true}
        />
        <DynamicContentInjector location="Ottapalam" injectAfter={5} />
      </div>
    </>
  );
};

export default Index;
