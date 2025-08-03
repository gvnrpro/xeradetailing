
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Droplets, Sparkles, Car, Zap, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMobilePerformance } from '@/components/mobile/MobilePerformanceProvider';
import MobileOptimizedImageLoader from './MobileOptimizedImageLoader';

const EnhancedServiceGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const { reduceAnimations } = useMobilePerformance();
  
  const services = [
    {
      title: "Ceramic Coating",
      subtitle: "9H Hardness Protection",
      description: "Ultimate protection against scratches, UV rays, and chemical damage with our premium ceramic coating technology.",
      price: "From ₹7,999",
      duration: "6-8 hours",
      icon: Shield,
      image: "/lovable-uploads/5c6772f8-70d4-496c-9c31-291686cf603e.png",
      gradient: "from-blue-600 to-cyan-500",
      features: ["9H Hardness", "5+ Year Warranty", "Hydrophobic Effect", "UV Protection"],
      link: "/services/ceramic-coating"
    },
    {
      title: "Paint Protection Film",
      subtitle: "Self-Healing Technology",
      description: "Invisible protection film that heals minor scratches automatically and preserves your car's original paint.",
      price: "From ₹12,999",
      duration: "8-10 hours",
      icon: Eye,
      image: "/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png",
      gradient: "from-purple-600 to-pink-500",
      features: ["Self-Healing", "Invisible Protection", "10+ Year Life", "Stain Resistant"],
      link: "/services"
    },
    {
      title: "Complete Detailing",
      subtitle: "Interior & Exterior",
      description: "Comprehensive cleaning and protection for every surface of your vehicle, inside and out.",
      price: "From ₹3,999",
      duration: "4-6 hours",
      icon: Sparkles,
      image: "/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png",
      gradient: "from-green-600 to-emerald-500",
      features: ["Deep Cleaning", "Stain Removal", "Leather Care", "Glass Treatment"],
      link: "/services"
    },
    {
      title: "Express Wash",
      subtitle: "Quick & Professional",
      description: "Fast and efficient wash service for busy schedules without compromising on quality.",
      price: "From ₹999",
      duration: "1-2 hours",
      icon: Droplets,
      image: "/lovable-uploads/5c6772f8-70d4-496c-9c31-291686cf603e.png",
      gradient: "from-cyan-600 to-blue-500",
      features: ["Quick Service", "Eco-Friendly", "Spot-Free Rinse", "Tire Shine"],
      link: "/services/express-wash"
    },
    {
      title: "Engine Bay Cleaning",
      subtitle: "Deep Engine Care",
      description: "Professional engine bay cleaning and detailing to keep your engine running cool and looking great.",
      price: "From ₹1,999",
      duration: "2-3 hours",
      icon: Car,
      image: "/lovable-uploads/93e1be41-e185-4b92-9ccf-b53e4dfd75e0.png",
      gradient: "from-orange-600 to-red-500",
      features: ["Degreasing", "Component Care", "Corrosion Protection", "Performance Boost"],
      link: "/services/engine-bay-cleaning"
    },
    {
      title: "Paint Correction",
      subtitle: "Swirl & Scratch Removal",
      description: "Multi-stage polishing process to remove swirls, scratches, and restore your paint's original glory.",
      price: "From ₹5,999",
      duration: "6-8 hours",
      icon: Zap,
      image: "/lovable-uploads/588a7319-b8dc-4e0c-99dd-909134350e51.png",
      gradient: "from-yellow-600 to-orange-500",
      features: ["Swirl Removal", "Scratch Repair", "Gloss Enhancement", "Paint Restoration"],
      link: "/services"
    }
  ];

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
              Premium Services
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Professional auto detailing services designed to protect, enhance, and maintain your vehicle's beauty
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group cursor-pointer"
            >
              <Card className="h-full bg-gradient-to-br from-xera-darkgray/90 to-black/90 backdrop-blur-sm border border-white/10 hover:border-xera-red/50 transition-all duration-500 overflow-hidden relative group-hover:scale-105">
                <CardContent className="p-0 relative">
                  {/* Background Image */}
                  <div className="relative h-48 overflow-hidden">
                    <MobileOptimizedImageLoader
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full"
                      lazy={index > 2} // Load first 3 images eagerly
                      sizes={isMobile ? "100vw" : "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"}
                    />
                    {!reduceAnimations && (
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          scale: hoveredCard === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`} />
                    
                    {/* Service Icon */}
                    <motion.div 
                      className="absolute top-4 right-4"
                      animate={{ 
                        rotate: hoveredCard === index ? 360 : 0,
                        scale: hoveredCard === index ? 1.2 : 1 
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>

                    {/* Price Badge */}
                    <div className="absolute top-4 left-4 bg-xera-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <span className="text-sm text-xera-red font-medium">{service.duration}</span>
                    </div>
                    
                    <p className="text-xera-red font-semibold text-sm mb-3">{service.subtitle}</p>
                    <p className="text-white/80 text-sm mb-4 line-clamp-3">{service.description}</p>

                    {/* Features */}
                    <AnimatePresence>
                      {hoveredCard === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4"
                        >
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature, idx) => (
                              <motion.span
                                key={feature}
                                className="bg-xera-red/20 text-xera-red px-2 py-1 rounded text-xs"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                {feature}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CTA Button */}
                    <Link to={service.link}>
                      <Button 
                        className="w-full bg-gradient-to-r from-xera-red to-red-700 hover:from-red-600 hover:to-red-800 text-white group/btn"
                        variant="default"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${service.gradient.replace('from-', '').replace(' to-', ', ')})`,
                      filter: 'blur(20px)',
                      zIndex: -1,
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Vehicle?
          </h3>
          <p className="text-white/70 mb-6">
            Get a free consultation and quote for your car's perfect protection package
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-xera-red to-red-700 hover:from-red-600 hover:to-red-800 text-white px-8 py-4 text-lg font-bold rounded-xl">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedServiceGrid;
