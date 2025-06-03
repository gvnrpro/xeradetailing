
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, CheckCircle } from 'lucide-react';
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="bg-xera-red/20 border border-xera-red/40 text-white inline-block px-4 py-2 rounded-full mb-6 animate-on-scroll opacity-0 transition-all duration-700 delay-100 translate-y-10">
            <motion.div 
              className="flex items-center gap-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
            >
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Kerala's #1 Ceramic Coating Specialists</span>
            </motion.div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll opacity-0 transition-all duration-700 delay-200 translate-y-10 text-gradient">
            Premium Ceramic Coating & Auto Detailing in Ottapalam
          </h1>
          
          {/* Value Proposition */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-on-scroll opacity-0 transition-all duration-700 delay-300 translate-y-10 max-w-3xl mx-auto">
            Protect your car with our advanced 9H ceramic coating. <span className="text-xera-red font-semibold">5+ years protection</span> against Kerala's harsh climate.
          </p>
          
          {/* Social Proof Points */}
          <div className="flex flex-wrap gap-4 justify-center mb-8 animate-on-scroll opacity-0 transition-all duration-700 delay-400 translate-y-10">
            <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 text-sm">120+ Reviews</span>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-white/90 text-sm">500+ Cars Protected</span>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-white/90 text-sm">Serving Palakkad District</span>
            </div>
          </div>
          
          {/* Single Primary CTA */}
          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-500 translate-y-10">
            <Link to="/services/ceramic-coating">
              <Button 
                className="bg-xera-red hover:bg-red-700 text-white px-8 py-6 text-lg font-bold rounded-md transition-all group hover:shadow-lg hover:shadow-xera-red/30 hero-cta"
                size="lg"
              >
                Get Your Ceramic Coating Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            
            {/* Secondary Action */}
            <div className="mt-4">
              <button 
                onClick={scrollToServices}
                className="text-white/80 hover:text-white text-sm underline transition-colors"
              >
                Or explore all our services below
              </button>
            </div>
          </div>
          
          {/* Urgency Indicator */}
          <div className="mt-8 animate-on-scroll opacity-0 transition-all duration-700 delay-600 translate-y-10">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 text-white px-4 py-2 rounded-lg inline-block">
              <p className="text-sm">⚡ Limited slots available this week - Book now to secure your spot!</p>
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
