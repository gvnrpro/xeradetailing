
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import { Button } from '@/components/ui/button';
import { Calendar, Star } from 'lucide-react';

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
    
    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://xeradetailing.in/services');
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-xera-darkgray py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('/assets/service-bg-pattern.jpg')] bg-repeat"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-gradient">Premium Auto Care Services</h1>
            <p className="text-center text-white/70 max-w-3xl mx-auto mb-8">
              XERA delivers comprehensive auto care services designed specifically for Kerala's climate and road conditions, combining expert craftsmanship with premium products.
            </p>
            
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-2 bg-xera-lightgray/50 px-4 py-2 rounded-full">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.9/5</span>
                <span className="text-sm text-white/70">based on 120+ reviews</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button size="lg" className="bg-xera-red hover:bg-xera-red/90 text-white px-8 py-6 rounded-md shadow-lg shadow-xera-red/20">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Service Now
              </Button>
            </div>
          </div>
        </div>
        
        <ServicesSection />
        
        <div className="bg-xera-darkgray py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-xera-darkgray to-xera-lightgray p-8 rounded-lg border border-xera-lightgray">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Ready to transform your vehicle?</h2>
                <p className="text-white/70 mb-6">
                  Our expert team is ready to provide the premium auto care service your vehicle deserves. Book now or contact us for a custom quote tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-xera-red hover:bg-xera-red/90">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Appointment
                  </Button>
                  <Button variant="outline" size="lg" className="border-xera-red text-xera-red hover:bg-xera-red/10">
                    Get Custom Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Car Detailing Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "XERA Car Wash & Auto Detailing"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Ottapalam, Kerala"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Auto Detailing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ceramic Coating",
                      "description": "9H+ hardness, hydrophobic layer, UV protection — the ultimate defense"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Interior Detailing",
                      "description": "Deep vacuum, steam sanitization, dashboard polish, seat shampoo"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Express Wash",
                      "description": "Fast, spotless cleaning with pH-balanced foam"
                    }
                  }
                ]
              }
            })
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
