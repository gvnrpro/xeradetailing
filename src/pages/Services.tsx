
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const Services = () => {
  // Update document title and meta description for SEO
  useEffect(() => {
    document.title = "Car Detailing & Auto Care Services | XERA Kerala";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Explore premium car detailing services in Kerala including interior cleaning, foam wash, ceramic coating, engine bay detailing & more at XERA.'
    );
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-20">
        <div className="bg-xera-darkgray py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-gradient">Our Services</h1>
            <p className="text-center text-white/70 max-w-3xl mx-auto">
              XERA offers comprehensive auto care services designed specifically for Kerala's climate and road conditions.
            </p>
          </div>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
