
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ id, title, description, imageUrl, icon }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <Card className="bg-xera-darkgray border-xera-lightgray shadow-lg overflow-hidden hover:shadow-xera-red/20 hover:border-xera-red/30 transition-all group">
        <div className="relative">
          <AspectRatio ratio={16/9}>
            <motion.img 
              src={imageUrl || "/placeholder.svg"} 
              alt={`${title} service by XERA Detailing in Ottapalam`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
          </AspectRatio>
          
          <motion.div 
            className="absolute top-3 left-3 p-2 rounded-full bg-xera-red/90 text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
          >
            {icon}
          </motion.div>
          
          {/* NEW: Added shimmering effect overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "linear",
              repeatDelay: 5
            }}
          />
          
          {/* NEW: Added Sparkle effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400/80"
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 90, 180]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              repeatDelay: 7
            }}
          >
            <Sparkles className="w-12 h-12" />
          </motion.div>
        </div>
        
        <motion.div 
          className="p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h3 
            className="text-xl font-bold mb-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-white/70 mb-4 line-clamp-3"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {description}
          </motion.p>
          
          <Link to={`/services/${id}`}>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative overflow-hidden"
            >
              <Button 
                variant="outline" 
                className="border-xera-red text-xera-red hover:bg-xera-red hover:text-white w-full group"
              >
                <span>View Details</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              {/* NEW: Added button glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-xera-red/0 via-xera-red/30 to-xera-red/0"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  ease: "easeInOut",
                  repeatDelay: 3
                }}
              />
            </motion.div>
          </Link>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
