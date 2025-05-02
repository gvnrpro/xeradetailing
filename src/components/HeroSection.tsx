
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%), url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21') no-repeat center center/cover"
      }}
    >
      {/* Car Animation */}
      <div className="absolute bottom-10 w-full overflow-hidden pointer-events-none h-20 opacity-30">
        <div className="w-20 h-10 bg-white rounded animate-car-move"></div>
      </div>
      
      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-on-scroll opacity-0 transition-all duration-700 delay-100 translate-y-10 text-gradient">
            Kerala's Finest Car Detailing & Ceramic Coating Studio
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 animate-on-scroll opacity-0 transition-all duration-700 delay-300 translate-y-10">
            Located in Ottapalam. Trusted across Palakkad. Powered by Precision.
          </p>
          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-500 translate-y-10">
            <Button 
              onClick={scrollToServices}
              className="bg-xera-red hover:bg-red-700 text-white px-8 py-6 text-lg font-medium rounded-md transition-all group hover:red-glow"
            >
              Explore Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Overlay gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
