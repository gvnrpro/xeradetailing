
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyDetailingMatters from '@/components/WhyDetailingMatters';
import ServicesSection from '@/components/ServicesSection';
import CustomerTrust from '@/components/CustomerTrust';
import AboutSection from '@/components/AboutSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

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
      'Experience the best car wash and auto detailing in Ottapalam. XERA offers expert ceramic coating, interior cleaning, and paint protection in Kerala.'
    );
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <WhyDetailingMatters />
        <ServicesSection />
        <CustomerTrust />
        <AboutSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
