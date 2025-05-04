
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
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
      whileHover={{ y: -8 }}
    >
      <Card className="bg-xera-darkgray border-xera-lightgray shadow-lg overflow-hidden hover:shadow-xera-red/10 hover:border-xera-red/30 transition-all group">
        <div className="relative">
          <AspectRatio ratio={16/9}>
            <motion.img 
              src={imageUrl || "/placeholder.svg"} 
              alt={`${title} service by XERA Detailing in Ottapalam`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              whileHover={{ scale: 1.02 }}
            />
          </AspectRatio>
          <motion.div 
            className="absolute top-3 left-3 p-2 rounded-full bg-xera-red/90 text-white"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            {icon}
          </motion.div>
        </div>
        
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/70 mb-4 line-clamp-3">{description}</p>
          
          <Link to={`/services/${id}`}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                className="border-xera-red text-xera-red hover:bg-xera-red hover:text-white w-full group"
              >
                <span>View Details</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
