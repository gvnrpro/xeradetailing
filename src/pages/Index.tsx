
import React from 'react';
import Navbar from '@/components/Navbar';
import PremiumHeroSection from '@/components/PremiumHeroSection';
import ServicesSection from '@/components/ServicesSection';
import HomeGallery from '@/components/HomeGallery';
import WhyDetailingMatters from '@/components/WhyDetailingMatters';
import CustomerTrust from '@/components/CustomerTrust';
import BlogPreviewSection from '@/components/BlogPreviewSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BeforeAfterShowcase from '@/components/BeforeAfterShowcase';
import LocationSection from '@/components/LocationSection';
import ServiceAreas from '@/components/ServiceAreas';
import SEOContentManager from '@/components/seo/SEOContentManager';
import SmartLeadCapture from '@/components/conversion/SmartLeadCapture';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <SEOContentManager 
        pageType="home"
        canonicalUrl="https://xeradetailing.in"
      />
      
      <div className="min-h-screen">
        <Navbar />
        <PremiumHeroSection />
        <ServicesSection />
        <WhyDetailingMatters />
        <HomeGallery />
        <BeforeAfterShowcase />
        <CustomerTrust />
        <LocationSection />
        <ServiceAreas />
        <BlogPreviewSection />
        <Footer />
        <WhatsAppButton />
        
        {/* Premium lead capture */}
        <SmartLeadCapture 
          trigger="scroll" 
          scrollThreshold={70}
          offer="Free Vehicle Assessment"
          urgency={false}
        />
      </div>
    </>
  );
};

export default Index;
