import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import DynamicHeroSection from '@/components/enhanced/DynamicHeroSection';
import SimpleStatsSection from '@/components/SimpleStatsSection';
import SimpleBeforeAfter from '@/components/SimpleBeforeAfter';
import SimpleServiceGrid from '@/components/SimpleServiceGrid';
import SimpleTestimonials from '@/components/SimpleTestimonials';
import AboutSection from '@/components/AboutSection';
import LocationSection from '@/components/LocationSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

const Index = () => {
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
      "areaServed": ["Ottapalam", "Palakkad", "Shoranur", "Pattambi", "Perinthalmanna", "Thrissur", "Mannarkkad", "Cherpulassery"],
      "offers": {
        "@type": "Offer",
        "price": "7999",
        "priceCurrency": "INR",
        "description": "Premium 9H Ceramic Coating with 5+ year warranty"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "XERA Car Wash & Auto Detailing",
      "description": "Kerala's premier auto detailing and ceramic coating specialists in Ottapalam, Palakkad",
      "url": "https://xeradetailing.in",
      "logo": "https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
      "sameAs": [
        "https://www.facebook.com/xeraautodetailing/",
        "https://www.instagram.com/xera_auto_detailing/",
        "https://share.google/lvFNI6D3uS5HLSRrA",
        "https://wa.me/917559999366"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7559999366",
        "contactType": "customer service",
        "areaServed": "Kerala",
        "availableLanguage": ["English", "Malayalam", "Hindi"]
      }
    }
  ];
  
  return (
    <>
      <LocalBusinessSchema />
      
      <Helmet>
        <title>XERA Auto Detailing | Premium Car Care in Ottapalam, Palakkad Kerala</title>
        <meta name="description" content="Kerala's premier auto detailing studio in Ottapalam, Palakkad. Professional ceramic coating, paint correction, interior cleaning & car wash services. 5+ years protection guaranteed. Call +91 75599 99366" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="XERA Auto Detailing" />
        <meta property="og:title" content="XERA Auto Detailing | Premium Car Care in Ottapalam, Palakkad Kerala" />
        <meta property="og:description" content="Kerala's premier auto detailing studio. Professional ceramic coating, paint correction & car wash services in Ottapalam, Palakkad." />
        <meta property="og:image" content="https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png" />
        <meta property="og:url" content="https://xeradetailing.in" />
        <meta property="article:publisher" content="https://www.facebook.com/xeraautodetailing/" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="XERA Auto Detailing | Premium Car Care in Kerala" />
        <meta name="twitter:description" content="Kerala's premier auto detailing studio. Professional ceramic coating & car wash services." />
        <meta name="twitter:image" content="https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png" />
        
        {/* Canonical & Language */}
        <link rel="canonical" href="https://xeradetailing.in" />
        <link rel="alternate" hrefLang="en" href="https://xeradetailing.in" />
        <link rel="alternate" hrefLang="ml" href="https://xeradetailing.in/ml" />
        <link rel="alternate" hrefLang="x-default" href="https://xeradetailing.in" />
        
        {/* Keywords */}
        <meta name="keywords" content="ceramic coating kerala, car detailing ottapalam, auto detailing palakkad, ceramic coating shoranur, car wash kerala, paint protection kerala, professional car detailing, ceramic coating near me, car care kerala monsoon, auto detailing near me, കാർ വാഷ് ഒറ്റപ്പാലം, സെറാമിക് കോട്ടിംഗ് കേരള, XERA auto detailing" />
        
        {/* Additional SEO */}
        <meta name="author" content="XERA Car Wash & Auto Detailing" />
        <meta name="publisher" content="XERA Car Wash & Auto Detailing" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Ottapalam, Palakkad, Kerala" />
        <meta name="geo.position" content="10.7739;76.3771" />
        <meta name="ICBM" content="10.7739, 76.3771" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <DynamicHeroSection />
          <SimpleStatsSection />
          <SimpleBeforeAfter />
          <SimpleServiceGrid />
          <SimpleTestimonials />
          <AboutSection />
          <LocationSection />
          <FAQSection />
          <BlogPreviewSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
