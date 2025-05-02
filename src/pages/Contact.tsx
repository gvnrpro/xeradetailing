
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocationSection from '@/components/LocationSection';

const Contact = () => {
  // Update document title for SEO
  useEffect(() => {
    document.title = "Visit XERA Car Wash | Ottapalam's Top Auto Detailing Studio";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      "Book your appointment or visit us opposite NSS College, Palappuram, Ottapalam. Call, WhatsApp, or drop by Kerala's best car care studio."
    );
    
    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://xeradetailing.in/contact');
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-20">
        <div className="bg-xera-darkgray py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-gradient">Contact Us</h1>
            <p className="text-center text-white/70 max-w-3xl mx-auto">
              Visit our studio in Ottapalam or contact us to schedule an appointment for your vehicle.
            </p>
          </div>
        </div>
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
