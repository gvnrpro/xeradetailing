
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Slider } from "@/components/ui/slider";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface BeforeAfterGalleryProps {
  beforeImages: { src: string; alt: string }[];
  afterImages: { src: string; alt: string }[];
  autoplaySpeed?: number;
  aspectRatio?: number;
}

const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ 
  beforeImages, 
  afterImages,
  autoplaySpeed = 5000,
  aspectRatio = 16/9
}) => {
  const [position, setPosition] = useState(50);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    if (isHovering) return;
    
    // Auto-cycle through images when not hovering
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % beforeImages.length);
    }, autoplaySpeed);
    
    return () => clearInterval(interval);
  }, [beforeImages.length, autoplaySpeed, isHovering]);

  const handleSliderChange = (value: number[]) => {
    setPosition(value[0]);
  };
  
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AspectRatio ratio={aspectRatio} className="bg-muted">
          <div className="relative w-full h-full overflow-hidden rounded-md">
            <div className="absolute inset-0 z-10">
              <div 
                className="absolute inset-0 bg-black/20 z-20 flex items-center justify-center text-white font-bold text-lg"
                style={{ right: `${100 - position}%` }}
              >
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-black/50 px-3 py-1 rounded-full text-sm"
                >
                  BEFORE
                </motion.span>
              </div>
              <img 
                src={beforeImages[activeIndex].src} 
                alt={beforeImages[activeIndex].alt} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute inset-0 z-20 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <div 
                className="absolute inset-0 bg-black/20 z-20 flex items-center justify-center text-white font-bold text-lg"
              >
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-black/50 px-3 py-1 rounded-full text-sm"
                >
                  AFTER
                </motion.span>
              </div>
              <img 
                src={afterImages[activeIndex].src} 
                alt={afterImages[activeIndex].alt} 
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: `${100 / (position/100)}%` }}
              />
            </div>
            <div 
              className="absolute inset-0 z-30 flex items-center pointer-events-none"
              style={{ left: `calc(${position}% - 1px)` }}
            >
              <div className="w-0.5 h-full bg-xera-red"></div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 z-40 px-4">
              <Slider
                value={[position]}
                min={10}
                max={90}
                step={1}
                onValueChange={handleSliderChange}
                className="z-40"
              />
            </div>
            
            {/* Image Transition Indicators */}
            {beforeImages.length > 1 && (
              <div className="absolute bottom-14 left-0 right-0 z-40 flex justify-center gap-1.5">
                {beforeImages.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full ${activeIndex === idx ? 'bg-xera-red' : 'bg-white/50'}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ 
                      scale: activeIndex === idx ? [1, 1.2, 1] : 1,
                      transition: { 
                        repeat: activeIndex === idx ? Infinity : 0, 
                        repeatType: "reverse", 
                        duration: 1
                      }
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </AspectRatio>
      </motion.div>
    </div>
  );
};

export default BeforeAfterGallery;
