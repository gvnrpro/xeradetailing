
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PremiumHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center premium-hero-bg overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-premium-accent rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-premium-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-premium-accent rotate-45"></div>
      </div>
      
      <div className="container-spacing relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium trust badge */}
          <motion.div 
            className="inline-flex items-center gap-2 glass-effect text-premium-accent px-4 py-2 rounded-full mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Kerala's Premier Ceramic Coating Specialists</span>
          </motion.div>
          
          {/* Elegant main headline */}
          <motion.h1 
            className="font-playfair text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 premium-text-gradient text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Automotive Excellence
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-light">Redefined</span>
          </motion.h1>
          
          {/* Refined value proposition */}
          <motion.p 
            className="text-lg md:text-xl text-premium-light-gray mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium ceramic coating and detailing services that transform your vehicle into a masterpiece of protection and beauty.
          </motion.p>
          
          {/* Clean social proof */}
          <motion.div 
            className="flex flex-wrap gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-premium-gold text-premium-gold" />
                ))}
              </div>
              <span className="text-premium-light-gray font-medium">5.0 Rating</span>
            </div>
            
            <div className="text-premium-light-gray">
              <span className="font-semibold text-premium-white">500+</span> Vehicles Protected
            </div>
            
            <div className="text-premium-light-gray">
              <span className="font-semibold text-premium-white">5+</span> Years Warranty
            </div>
          </motion.div>
          
          {/* Premium CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link to="/services/ceramic-coating">
              <Button className="premium-button group">
                <span>Discover Our Services</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button className="premium-button-outline">
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>
          
          {/* Elegant contact info */}
          <motion.div 
            className="mt-8 text-premium-gray"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-sm">
              Call us at{' '}
              <a 
                href="tel:+917559999366" 
                className="text-premium-accent hover:text-premium-white transition-colors font-medium"
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
