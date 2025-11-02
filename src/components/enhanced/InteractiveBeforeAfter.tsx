
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Zap, Shield, Sparkles } from 'lucide-react';

const InteractiveBeforeAfter = () => {
  const [activeService, setActiveService] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  
  const services = [
    {
      title: "Ceramic Coating",
      before: "/assets/ceramic-before.jpg",
      after: "/assets/ceramic-after.jpg",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      benefits: ["9H Hardness", "5+ Year Protection", "Hydrophobic Effect"]
    },
    {
      title: "Paint Correction",
      before: "/assets/paint-correction-before.jpg",
      after: "/assets/paint-correction-after.jpg",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      benefits: ["Swirl Removal", "Scratch Repair", "Gloss Enhancement"]
    },
    {
      title: "Interior Detailing",
      before: "/assets/interior-before.jpg",
      after: "/assets/interior-after.jpg",
      icon: Eye,
      color: "from-green-500 to-emerald-500",
      benefits: ["Deep Cleaning", "Stain Removal", "UV Protection"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-xera-darkgray to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-xera-red bg-clip-text text-transparent">
              Witness the Transformation
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            See the dramatic before and after results of our premium detailing services
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, idx) => (
            <motion.button
              key={service.title}
              onClick={() => setActiveService(idx)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeService === idx 
                  ? 'bg-xera-red text-white shadow-lg' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <service.icon className="w-5 h-5" />
              {service.title}
            </motion.button>
          ))}
        </div>

        {/* Interactive Before/After */}
        <motion.div 
          className="max-w-4xl mx-auto"
          key={activeService}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden bg-gradient-to-br from-xera-darkgray to-black border-2 border-xera-red/30">
            <CardContent className="p-0">
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                {/* Before Image */}
                <div className="absolute inset-0">
                  <img 
                    src={services[activeService].before} 
                    alt={`${services[activeService].title} before auto detailing service at XERA Ottapalam, Kerala`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
                
                {/* After Image with Clip Path */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)` }}
                >
                  <img 
                    src={services[activeService].after} 
                    alt={`${services[activeService].title} after professional auto detailing at XERA Ottapalam, Kerala - premium results`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute top-4 right-4 bg-xera-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    AFTER
                  </div>
                </div>

                {/* Slider Handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-xera-red cursor-ew-resize flex items-center justify-center touch-none"
                  style={{ left: `${sliderPosition}%` }}
                  onMouseDown={(e) => {
                    const container = e.currentTarget.parentElement;
                    if (!container) return;
                    
                    const handleMouseMove = (moveEvent: MouseEvent) => {
                      const rect = container.getBoundingClientRect();
                      const x = ((moveEvent.clientX - rect.left) / rect.width) * 100;
                      setSliderPosition(Math.max(10, Math.min(90, x)));
                    };
                    
                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove);
                      document.removeEventListener('mouseup', handleMouseUp);
                    };
                    
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                  }}
                  onTouchStart={(e) => {
                    const container = e.currentTarget.parentElement;
                    if (!container) return;
                    
                    const handleTouchMove = (moveEvent: TouchEvent) => {
                      const rect = container.getBoundingClientRect();
                      const touch = moveEvent.touches[0];
                      const x = ((touch.clientX - rect.left) / rect.width) * 100;
                      setSliderPosition(Math.max(10, Math.min(90, x)));
                    };
                    
                    const handleTouchEnd = () => {
                      document.removeEventListener('touchmove', handleTouchMove);
                      document.removeEventListener('touchend', handleTouchEnd);
                    };
                    
                    document.addEventListener('touchmove', handleTouchMove);
                    document.addEventListener('touchend', handleTouchEnd);
                  }}
                >
                  <div className="w-12 h-12 md:w-8 md:h-8 bg-xera-red rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 md:w-2 md:h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Benefits Overlay */}
                <motion.div 
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2">{services[activeService].title} Benefits:</h3>
                    <div className="flex flex-wrap gap-2">
                      {services[activeService].benefits.map((benefit, idx) => (
                        <motion.span
                          key={benefit}
                          className="bg-xera-red/20 text-xera-red px-3 py-1 rounded-full text-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + idx * 0.1 }}
                        >
                          {benefit}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button 
            className="bg-gradient-to-r from-xera-red to-red-700 hover:from-red-600 hover:to-red-800 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl"
            size="lg"
          >
            <Zap className="mr-2 w-5 h-5" />
            Transform Your Car Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveBeforeAfter;
