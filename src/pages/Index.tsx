
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
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
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
          
          {/* Mobile-optimized service discovery */}
          <ServiceDiscovery />
          
          {/* Pricing preview for mobile users */}
          {isMobile && <PricingPreview />}
          
          <WhyDetailingMatters />
          <CustomerTrust />
          <LocationSection />
          <BlogPreviewSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
