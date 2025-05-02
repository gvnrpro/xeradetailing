
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import CustomerTrust from '@/components/CustomerTrust';

const About = () => {
  // Update document title for SEO
  useEffect(() => {
    document.title = "About XERA | Kerala's Premium Auto Detailing Studio";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Learn about XERA Car Wash & Auto Detailing, Kerala's leading car care studio in Ottapalam. Discover our expertise in ceramic coating and paint protection.'
    );
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-20">
        <div className="bg-xera-darkgray py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-gradient">About Us</h1>
            <p className="text-center text-white/70 max-w-3xl mx-auto">
              XERA is Kerala's premier car wash and auto detailing studio located in Ottapalam.
            </p>
          </div>
        </div>
        <AboutSection />
        <CustomerTrust />
      </main>
      <Footer />
    </div>
  );
};

export default About;
