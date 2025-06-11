
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PremiumHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center xera-hero-bg overflow-hidden">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-xera-red rounded-full glow-red"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-xera-red rounded-full glow-red"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-xera-red rotate-45 glow-red"></div>
      </div>
      
      <div className="container-spacing relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium trust badge */}
          <motion.div 
            className="inline-flex items-center gap-2 glass-effect text-xera-red px-4 py-2 rounded-full mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Kerala's Premier Ceramic Coating Specialists</span>
          </motion.div>
          
          {/* Powerful main headline */}
          <motion.h1 
            className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient animate-glow">Automotive Excellence</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-light text-xera-white">Redefined</span>
          </motion.h1>
          
          {/* Strong value proposition */}
          <motion.p 
            className="text-lg md:text-xl text-xera-light-gray mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium ceramic coating and detailing services that transform your vehicle into a masterpiece of protection and beauty.
          </motion.p>
          
          {/* Dynamic social proof */}
          <motion.div 
            className="flex flex-wrap gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xera-light-gray font-medium">5.0 Rating</span>
            </div>
            
            <div className="text-xera-light-gray">
              <span className="font-bold text-xera-red">500+</span> Vehicles Protected
            </div>
            
            <div className="text-xera-light-gray">
              <span className="font-bold text-xera-red">5+</span> Years Warranty
            </div>
          </motion.div>
          
          {/* Bold CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link to="/services/ceramic-coating">
              <Button className="xera-button group">
                <span>Discover Our Services</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button className="xera-button-outline">
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>
          
          {/* Contact info */}
          <motion.div 
            className="mt-8 text-xera-gray"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-sm">
              Call us at{' '}
              <a 
                href="tel:+917559999366" 
                className="text-xera-red hover:text-xera-red-light transition-colors font-medium"
              >
                +91 755 999 9366
              </a>
              {' '}for immediate assistance
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHeroSection;
