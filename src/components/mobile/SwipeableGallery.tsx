import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipe } from '@/hooks/use-swipe';
import { Button } from '@/components/ui/button';

interface SwipeableGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  className?: string;
}

const SwipeableGallery: React.FC<SwipeableGalleryProps> = ({ images, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const swipeHandlers = useSwipe({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
    minSwipeDistance: 50
  });

  return (
    <div className={`relative ${className}`} {...swipeHandlers}>
      {/* Gallery Container */}
      <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-black/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {images[currentIndex].title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-semibold">{images[currentIndex].title}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white min-h-[44px] min-w-[44px]"
          onClick={prevSlide}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white min-h-[44px] min-w-[44px]"
          onClick={nextSlide}
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all min-h-[44px] min-w-[44px] flex items-center justify-center ${
              index === currentIndex
                ? 'bg-xera-red scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-2 text-sm text-white/60">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default SwipeableGallery;
