import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import DynamicHeroSection from '@/components/enhanced/DynamicHeroSection';
import InteractiveBeforeAfter from '@/components/enhanced/InteractiveBeforeAfter';
import AnimatedStats from '@/components/enhanced/AnimatedStats';
import EnhancedServiceGrid from '@/components/enhanced/EnhancedServiceGrid';
import AboutSection from '@/components/AboutSection';
import CustomerTrust from '@/components/CustomerTrust';
import LocationSection from '@/components/LocationSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SmartLeadCapture from '@/components/conversion/SmartLeadCapture';
import SEOContentManager from '@/components/seo/SEOContentManager';
import DynamicContentInjector from '@/components/conversion/DynamicContentInjector';
import SocialProofSystem from '@/components/conversion/SocialProofSystem';
import PerformanceOptimizer from '@/components/performance/PerformanceOptimizer';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import EnhancedReviewWidget from '@/components/gmb/EnhancedReviewWidget';
import ReviewSchema from '@/components/gmb/ReviewSchema';
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
    },
    // Enhanced Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "XERA Car Wash & Auto Detailing",
      "description": "Kerala's premier auto detailing and ceramic coating specialists",
      "url": "https://xeradetailing.in",
      "logo": "https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
      "sameAs": [
        "https://www.facebook.com/xeradetailing",
        "https://www.instagram.com/xeradetailing",
        "https://wa.me/917559999366"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-96058-58483",
        "contactType": "customer service",
        "areaServed": "Kerala",
        "availableLanguage": ["English", "Malayalam", "Hindi"]
      }
    }
  ];
  
  return (
    <>
      <PerformanceOptimizer />
      <LocalBusinessSchema />
      <ReviewSchema />
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
        
        {/* Enhanced meta keywords for aggressive SEO */}
        <meta name="keywords" content="ceramic coating kerala, car detailing ottapalam, auto detailing palakkad, ceramic coating shoranur, car wash kerala, paint protection kerala, professional car detailing, ceramic coating near me, car care kerala monsoon, auto detailing near me, കാർ വാഷ് ഒറ്റപ്പാലം, സെറാമിക് കോട്ടിംഗ് കേരള" />
        
        {/* Additional SEO enhancements */}
        <meta name="author" content="XERA Car Wash & Auto Detailing" />
        <meta name="publisher" content="XERA Car Wash & Auto Detailing" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Ottapalam, Palakkad" />
        <meta name="geo.position" content="10.7739;76.3771" />
        <meta name="ICBM" content="10.7739, 76.3771" />
        <link rel="alternate" hrefLang="en" href="https://xeradetailing.in" />
        <link rel="alternate" hrefLang="ml" href="https://xeradetailing.in/ml" />
        <link rel="alternate" hrefLang="x-default" href="https://xeradetailing.in" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <DynamicHeroSection />
          <AnimatedStats />
          <InteractiveBeforeAfter />
          <EnhancedServiceGrid />
          <AboutSection />
          
          {/* Enhanced Social Proof */}
          <SocialProofSystem variant="stats" className="bg-gradient-to-b from-background to-xera-darkgray/50" />
          
          {/* Customer testimonials with enhanced social proof */}
          <SocialProofSystem variant="testimonials" className="py-12" />
          
          <CustomerTrust />
          
          {/* Enhanced Google Reviews Widget */}
          <EnhancedReviewWidget />
          
          <LocationSection />
          <FAQSection />
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
