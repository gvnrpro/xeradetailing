
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getImageAlt } from '@/utils/imageOptimization';
import { imageRegistry } from '@/data/imageRegistry';

const AnimatedGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  // Filter featured images from the registry
  const images = imageRegistry.filter(img => img.featured);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay && isVisible) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, images.length, isVisible]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    
    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);
  
  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  return (
    <section ref={galleryRef} className="py-16 bg-gradient-to-b from-xera-gray to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-xera-red/20 border border-xera-red/40 text-white px-4 py-1 rounded-full mb-4"
          >
            XERA Results
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Real Results: 100% Ceramic Coating Perfection
          </motion.h2>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            See the stunning transformations we've achieved for clients across Ottapalam, Palakkad, and surrounding areas including Shoranur, Pattambi, and Cherpulassery.
          </motion.p>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl bg-xera-darkgray shadow-lg border border-xera-lightgray">
          {/* Main image */}
          <div className="aspect-video relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]?.src}
                alt={images[currentIndex]?.alt || getImageAlt('Premium car detailing by XERA in Ottapalam', 'Ottapalam')}
                className="w-full h-full object-cover"
                loading="lazy"
                initial={{ opacity: 0.4, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.4, scale: 1.08 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </AnimatePresence>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            
            {/* Image information */}
            <AnimatePresence mode="wait">
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                key={`info-${currentIndex}`}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {images[currentIndex]?.title || "Premium Detailing Services"}
                </h3>
                <p className="text-white/80 mb-4 max-w-2xl">
                  {images[currentIndex]?.description || "Experience the XERA difference with our professional detailing services in Ottapalam and surrounding areas."}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/services/ceramic-coating">
                    <Button className="bg-xera-red hover:bg-red-700 text-white">
                      Explore Our Services
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Book Your Service
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation controls */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors text-white z-10"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors text-white z-10"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-24 sm:bottom-28 md:bottom-28 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-xera-red scale-125' : 'bg-white/30'
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
        <div className="hidden md:flex overflow-x-auto gap-2 mt-4 pb-2 scrollbar-hide">
          {images.map((image, idx) => (
            <motion.button
              key={idx}
              className={`flex-shrink-0 rounded overflow-hidden transition-all ${
                idx === currentIndex 
                ? 'border-2 border-xera-red scale-105 shadow-lg' 
                : 'border border-white/20 opacity-70'
              }`}
              onClick={() => {
                setAutoplay(false);
                setCurrentIndex(idx);
              }}
              whileHover={{ scale: 1.05, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24">
                <img 
                  src={image.src} 
                  alt={`Thumbnail ${idx + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Mobile thumbnails (scrollable) */}
        <div className="md:hidden flex overflow-x-auto gap-2 mt-4 pb-2 px-1">
          {images.map((image, idx) => (
            <button
              key={idx}
              className={`flex-shrink-0 rounded overflow-hidden transition-all ${
                idx === currentIndex 
                ? 'border-2 border-xera-red scale-105' 
                : 'border border-white/20 opacity-70'
              }`}
              onClick={() => {
                setAutoplay(false);
                setCurrentIndex(idx);
              }}
            >
              <div className="w-16 h-16">
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
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link to="/contact">
              <Button className="bg-xera-red hover:bg-red-700 text-white">
                Book Your Ceramic Coating Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedGallery;
