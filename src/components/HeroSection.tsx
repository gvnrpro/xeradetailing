
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
      className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden hero-bg"
    >
      {/* Simplified background with better loading */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Simplified trust badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-xera-red/20 border border-xera-red/40 text-white px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Kerala's #1 Ceramic Coating</span>
          </motion.div>
          
          {/* Cleaner headline */}
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Premium Car Protection
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl">in Ottapalam</span>
          </motion.h1>
          
          {/* Simplified value prop */}
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Advanced 9H ceramic coating with <span className="text-xera-red font-semibold">5+ years protection</span> against Kerala's harsh climate.
          </motion.p>
          
          {/* Condensed social proof */}
          <motion.div 
            className="flex flex-wrap gap-3 justify-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-black/40 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 text-sm">120+ Reviews</span>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-green-400" />
              <span className="text-white/90 text-sm">500+ Cars Protected</span>
            </div>
          </motion.div>
          
          {/* Single strong CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link to="/services/ceramic-coating">
              <Button 
                className="bg-xera-red hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all group shadow-lg hover:shadow-xera-red/30"
                size="lg"
              >
                Get Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            
            {/* Simple secondary action */}
            <p className="mt-4 text-white/70 text-sm">
              Or call <a href="tel:+917559999366" className="text-xera-red hover:underline">+91 755 999 9366</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
