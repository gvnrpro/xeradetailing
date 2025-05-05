
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
        background: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%), url('/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png') no-repeat center center/cover"
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-xera-red/20 border border-xera-red/40 text-white inline-block px-4 py-1 rounded-full mb-4 animate-on-scroll opacity-0 transition-all duration-700 delay-100 translate-y-10">
            <motion.div 
              className="flex items-center gap-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
            >
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Kerala's #1 Ceramic Coating Specialists</span>
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-on-scroll opacity-0 transition-all duration-700 delay-200 translate-y-10 text-gradient">
            Premium Ceramic Coating & Auto Detailing in Ottapalam
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 animate-on-scroll opacity-0 transition-all duration-700 delay-300 translate-y-10 max-w-3xl">
            Professional car care services with 5+ years protection. Serving Palakkad district with studio and mobile options.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-on-scroll opacity-0 transition-all duration-700 delay-500 translate-y-10">
            <Link to="/services/ceramic-coating">
              <Button 
                className="bg-xera-red hover:bg-red-700 text-white px-8 py-6 text-lg font-medium rounded-md transition-all group hover:red-glow"
              >
                Explore Ceramic Coating
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            
            <Button 
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-md transition-all flex items-center gap-2"
              onClick={scrollToServices}
            >
              <CalendarDays size={20} />
              Book Appointment
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-6 items-center justify-start animate-on-scroll opacity-0 transition-all duration-700 delay-600 translate-y-10">
            <div className="bg-black/40 backdrop-blur-sm px-4 py-3 rounded-lg flex items-center gap-3">
              <div className="text-white/90">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs">Based on 120+ reviews</p>
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-white/90 text-sm">Serving Ottapalam, Palakkad & Nearby Areas</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
