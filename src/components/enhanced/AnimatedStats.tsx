
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Car, Shield, Users, Award, Clock } from 'lucide-react';

const AnimatedStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const stats = [
    {
      icon: Car,
      value: 500,
      suffix: '+',
      label: 'Cars Protected',
      color: 'from-blue-500 to-cyan-500',
      description: 'Premium vehicles serviced'
    },
    {
      icon: Star,
      value: 4.9,
      suffix: '/5',
      label: 'Customer Rating',
      color: 'from-yellow-500 to-orange-500',
      description: 'Based on 120+ reviews'
    },
    {
      icon: Shield,
      value: 5,
      suffix: '+',
      label: 'Years Warranty',
      color: 'from-green-500 to-emerald-500',
      description: 'On ceramic coating'
    },
    {
      icon: Users,
      value: 350,
      suffix: '+',
      label: 'Happy Customers',
      color: 'from-purple-500 to-pink-500',
      description: 'Across Palakkad district'
    },
    {
      icon: Award,
      value: 1,
      suffix: 'st',
      label: 'Rank in Kerala',
      color: 'from-red-500 to-rose-500',
      description: 'Premium auto detailing'
    },
    {
      icon: Clock,
      value: 24,
      suffix: 'hrs',
      label: 'Service Time',
      color: 'from-indigo-500 to-blue-500',
      description: 'Complete transformation'
    }
  ];

  const Counter = ({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isInView) return;
      
      let startTime: number;
      let animationFrame: number;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Eased animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        setCount(value * easeOutCubic);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [isInView, value, duration]);
    
    return (
      <span className="font-bold text-3xl md:text-4xl">
        {Math.round(count * 10) / 10}{suffix}
      </span>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-xera-darkgray relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-xera-red bg-clip-text text-transparent">
              Trusted by Thousands
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Numbers that speak for our excellence in premium auto detailing services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <Card className="h-full bg-gradient-to-br from-xera-darkgray/80 to-black/80 backdrop-blur-sm border border-white/10 hover:border-xera-red/30 transition-all duration-300 overflow-hidden relative group">
                <CardContent className="p-6 text-center relative z-10">
                  {/* Gradient Background */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                  
                  {/* Icon */}
                  <motion.div 
                    className="relative mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${stat.color} p-4 shadow-lg`}>
                      <stat.icon className="w-full h-full text-white" />
                    </div>
                  </motion.div>
                  
                  {/* Counter */}
                  <motion.div 
                    className="text-white mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  >
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </motion.div>
                  
                  {/* Label */}
                  <motion.h3 
                    className="text-xl font-semibold text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                  >
                    {stat.label}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p 
                    className="text-white/70 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                  >
                    {stat.description}
                  </motion.p>

                  {/* Hover Effect */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-xera-red/50 transition-all duration-300"
                    whileHover={{ boxShadow: "0 0 20px rgba(230, 43, 30, 0.3)" }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-xera-red/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
