
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './card';
import { AspectRatio } from './aspect-ratio';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  index?: number;
}

export const ServiceCard = ({ 
  title, 
  description, 
  image, 
  imageAlt, 
  link,
  index = 0
}: ServiceCardProps) => {
  const handleClick = () => {
    trackEvent('service_card_click', { service: title });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link to={link} onClick={handleClick}>
        <Card className="overflow-hidden bg-xera-darkgray border-xera-lightgray hover:border-xera-red transition-all duration-300 h-full">
          <div className="relative">
            <AspectRatio ratio={16/9}>
              <img 
                src={image} 
                alt={imageAlt}
                loading="lazy" 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/placeholder.svg";
                }}
              />
            </AspectRatio>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
          </div>
          <CardContent className="p-6">
            <h3 className="font-bold text-xl mb-2 group-hover:text-xera-red transition-colors">{title}</h3>
            <p className="text-white/70">{description}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
