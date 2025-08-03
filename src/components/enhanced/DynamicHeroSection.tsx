
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, CheckCircle, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileOptimizedImageLoader from './MobileOptimizedImageLoader';

const DynamicHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();
  const [particleCount, setParticleCount] = useState(isMobile ? 10 : 20);
  
  const heroSlides = [
    {
      title: "Premium Ceramic Coating",
      subtitle: "9H Hardness Protection",
      image: "/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png",
      description: "Ultimate protection against Kerala's harsh climate"
    },
    {
      title: "Paint Protection Film",
      subtitle: "Invisible Shield Technology",
      image: "/lovable-uploads/93e1be41-e185-4b92-9ccf-b53e4dfd75e0.png",
      description: "Self-healing protection for your vehicle's paint"
    },
    {
      title: "Complete Auto Detailing",
      subtitle: "Professional Excellence",
      image: "/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png",
      description: "Comprehensive care for every inch of your car"
    }
  ];

  useEffect(() => {
    // Adjust particle count based on device
    setParticleCount(isMobile ? 8 : 20);
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, isMobile ? 6000 : 5000); // Longer intervals on mobile for better performance
    return () => clearInterval(timer);
  }, [isMobile]);

  // Floating particles animation
  const Particle = ({ delay, duration, size, x, y }: any) => (
    <motion.div
      className="absolute bg-xera-red/20 rounded-full blur-sm"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-gradient-to-br from-black via-xera-darkgray to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: isMobile ? 0.8 : 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10" />
            <MobileOptimizedImageLoader
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="absolute inset-0"
              priority={currentSlide === 0}
              sizes={isMobile ? "100vw" : "(max-width: 1200px) 100vw, 1200px"}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: particleCount }).map((_, i) => (
          <Particle
            key={i}
            delay={i * 0.2}
            duration={3 + Math.random() * 2}
            size={Math.random() * 8 + 4}
            x={Math.random() * 100}
            y={Math.random() * 100}
          />
        ))}
      </div>

      {/* Moving Car Silhouettes */}
      <motion.div
        className="absolute top-1/3 left-0 w-20 h-12 opacity-10"
        animate={{ x: ["0vw", "100vw"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full bg-white rounded-lg opacity-30" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Dynamic Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-xera-red/30 to-red-600/30 backdrop-blur-sm border border-xera-red/40 text-white px-6 py-3 rounded-full mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5" />
            </motion.div>
            <span className="font-semibold">Kerala's #1 Premium Auto Detailing</span>
          </motion.div>
          
          {/* Dynamic Headlines */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-gray-200 to-xera-red bg-clip-text text-transparent">
                  {heroSlides[currentSlide].title}
                </span>
              </h1>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-xera-red mb-6">
                {heroSlides[currentSlide].subtitle}
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {heroSlides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
          
          {/* Enhanced Stats */}
          <motion.div 
            className="flex flex-wrap gap-6 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {[
              { icon: Star, label: "5★ Reviews", value: "120+" },
              { icon: CheckCircle, label: "Cars Protected", value: "500+" },
              { icon: Shield, label: "Years Warranty", value: "5+" }
            ].map((stat, idx) => (
              <motion.div 
                key={stat.label}
                className="bg-black/40 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(230, 43, 30, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                  >
                    <stat.icon className="w-6 h-6 text-xera-red" />
                  </motion.div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced CTA Section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/services/ceramic-coating">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-gradient-to-r from-xera-red to-red-700 hover:from-red-600 hover:to-red-800 text-white px-8 py-4 text-lg font-bold rounded-xl transition-all group shadow-2xl relative overflow-hidden"
                  size="lg"
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                  />
                  <span className="relative z-10 flex items-center">
                    Get Free Quote Now
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </Button>
              </motion.div>
            </Link>
            
            <motion.button
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-4 rounded-xl transition-all border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              <span className="font-medium">Watch Process Video</span>
            </motion.button>
          </motion.div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {heroSlides.map((_, idx) => (
              <motion.button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-xera-red' : 'bg-white/30'
                }`}
                onClick={() => setCurrentSlide(idx)}
                whileHover={{ scale: 1.2 }}
                animate={idx === currentSlide ? { scale: [1, 1.2, 1] } : {}}
                transition={{ repeat: idx === currentSlide ? Infinity : 0, duration: 1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicHeroSection;
