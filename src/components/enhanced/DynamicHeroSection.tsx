import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

// Particle positions are stable (computed once) so they don't re-randomise
// on every render and don't need Math.random() inside JSX.
const DESKTOP_PARTICLES = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  x: [10, 25, 40, 55, 70, 85][i],
  y: [20, 70, 40, 80, 30, 60][i],
  size: [6, 8, 5, 9, 7, 6][i],
  duration: [4, 5, 3.5, 4.5, 5, 3.8][i],
  delay: i * 0.4,
}));

const DynamicHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // No particles on mobile (performance), max 6 on desktop
  const showParticles = !prefersReducedMotion && !isMobile;

  const heroSlides = [
    {
      title: "Premium Ceramic Coating",
      subtitle: "9H Hardness Protection",
      image: "/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png",
      description: "Ultimate protection against Kerala's harsh climate",
    },
    {
      title: "Paint Protection Film",
      subtitle: "Invisible Shield Technology",
      image: "/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png",
      description: "Self-healing protection for your vehicle's paint",
    },
    {
      title: "Complete Auto Detailing",
      subtitle: "Professional Excellence",
      image: "/lovable-uploads/b6128b34-f51e-46bf-aafb-23fdc89086b6.png",
      description: "Comprehensive care for every inch of your car",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-gradient-to-br from-black via-xera-darkgray to-black">

      {/* Animated background slides */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.55)), url(${heroSlides[currentSlide].image})`,
            }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* CSS-only floating particles — no JS animation loop, GPU-composited */}
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {DESKTOP_PARTICLES.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-xera-red/20 blur-sm floating-animation"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge — static pulse, not spinning */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-xera-red/30 to-red-600/30 backdrop-blur-sm border border-xera-red/40 text-white px-6 py-3 rounded-full mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="h-5 w-5 text-xera-red" />
            <span className="font-semibold">Kerala's #1 Premium Auto Detailing</span>
          </motion.div>

          {/* Slide headlines */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
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

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-4 sm:gap-6 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {[
              { icon: Star,         label: "5★ Reviews",     value: "120+" },
              { icon: CheckCircle,  label: "Cars Protected",  value: "500+" },
              { icon: Shield,       label: "Years Warranty",  value: "5+"   },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-black/40 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10 flex items-center gap-3"
              >
                <stat.icon className="w-5 h-5 text-xera-red shrink-0" />
                <div>
                  <div className="text-xl font-bold text-white leading-none">{stat.value}</div>
                  <div className="text-xs text-white/70 mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/services/ceramic-coating">
              <Button
                className="bg-gradient-to-r from-xera-red to-red-700 hover:from-red-600 hover:to-red-800 text-white px-8 py-4 text-lg font-bold rounded-xl transition-all group shadow-2xl relative overflow-hidden shimmer-effect"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  Get Free Quote Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Button>
            </Link>

            <a
              href="tel:+917559999366"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-4 rounded-xl transition-all border border-white/20 font-medium"
            >
              📞 <span>Call +91 75599 99366</span>
            </a>
          </motion.div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? 'w-6 h-3 bg-xera-red'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicHeroSection;
