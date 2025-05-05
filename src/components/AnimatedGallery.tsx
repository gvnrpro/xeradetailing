
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getImageAlt } from '@/utils/imageOptimization';
import { imageRegistry } from '@/data/imageRegistry';

const AnimatedGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Filter featured images from the registry
  const images = imageRegistry.filter(img => img.featured);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, images.length]);
  
  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  return (
    <section className="py-16 bg-xera-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Our Real Results: 100% Ceramic Coating Perfection
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            See the stunning transformations we've achieved for clients across Ottapalam, Palakkad, and surrounding areas.
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl bg-xera-darkgray">
          {/* Main image */}
          <div className="aspect-video relative">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]?.src}
              alt={images[currentIndex]?.alt || getImageAlt('Premium car detailing by XERA in Ottapalam', 'Ottapalam')}
              className="w-full h-full object-cover"
              loading="lazy"
              initial={{ opacity: 0.4, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            
            {/* Image information */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              key={`info-${currentIndex}`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {images[currentIndex]?.title || "Premium Detailing Services"}
              </h3>
              <p className="text-white/80 mb-4 max-w-2xl">
                {images[currentIndex]?.description || "Experience the XERA difference with our professional detailing services in Ottapalam and surrounding areas."}
              </p>
              <Link to="/services/ceramic-coating">
                <Button className="bg-xera-red hover:bg-red-700 text-white">
                  Explore Our Services
                </Button>
              </Link>
            </motion.div>
          </div>
          
          {/* Navigation controls */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors text-white"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors text-white"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-xera-red' : 'bg-white/30'
                }`}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Thumbnail preview */}
        <div className="flex overflow-x-auto gap-2 mt-4 pb-2 scrollbar-hide">
          {images.map((image, idx) => (
            <button
              key={idx}
              className={`flex-shrink-0 rounded overflow-hidden transition-all ${
                idx === currentIndex 
                ? 'border-2 border-xera-red transform scale-105' 
                : 'border border-white/20 opacity-70'
              }`}
              onClick={() => {
                setAutoplay(false);
                setCurrentIndex(idx);
              }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24">
                <img 
                  src={image.src} 
                  alt={`Thumbnail ${idx + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-white/70 mb-4">
            Want to see your vehicle transform into a spotless masterpiece? Visit our studio in Ottapalam, Palakkad district.
          </p>
          <Link to="/contact">
            <Button className="bg-xera-red hover:bg-red-700 text-white">
              Book Your Ceramic Coating Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnimatedGallery;
