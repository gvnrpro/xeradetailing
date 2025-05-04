
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ id, title, description, imageUrl, icon }: ServiceCardProps) => {
  return (
    <Card className="bg-xera-darkgray border-xera-lightgray shadow-lg overflow-hidden hover:shadow-xera-red/10 hover:border-xera-red/30 transition-all group">
      <div className="relative">
        <AspectRatio ratio={16/9}>
          <img 
            src={imageUrl || "/placeholder.svg"} 
            alt={`${title} service by XERA Detailing in Ottapalam`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </AspectRatio>
        <div className="absolute top-3 left-3 p-2 rounded-full bg-xera-red/90 text-white">
          {icon}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/70 mb-4 line-clamp-3">{description}</p>
        
        <Link to={`/services/${id}`}>
          <Button 
            variant="outline" 
            className="border-xera-red text-xera-red hover:bg-xera-red hover:text-white w-full group"
          >
            <span>View Details</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ServiceCard;
