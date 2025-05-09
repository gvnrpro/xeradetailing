
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../tracking/AnalyticsProvider';

interface RelatedContentProps {
  title?: string;
  type?: 'services' | 'blog' | 'mixed';
  items: Array<{
    title: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    link: string;
  }>;
  className?: string;
}

const RelatedContent = ({
  title = "You May Also Like",
  type = 'mixed',
  items,
  className
}: RelatedContentProps) => {
  
  const trackContentClick = (item: string, index: number) => {
    trackEvent('related_content_click', {
      content_type: type,
      content_title: item,
      content_position: index,
      page: window.location.pathname
    });
  };
  
  if (!items.length) return null;
  
  return (
    <div className={`my-8 ${className}`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            onClick={() => trackContentClick(item.title, index)}
          >
            <Card className="overflow-hidden bg-xera-darkgray border-xera-lightgray hover:border-xera-red/30 hover:shadow-lg transition-all h-full">
              {item.image && (
                <AspectRatio ratio={16/9}>
                  <img 
                    src={item.image} 
                    alt={item.imageAlt || item.title}
                    className="w-full h-full object-cover" 
                  />
                </AspectRatio>
              )}
              
              <CardContent className="p-4">
                <h4 className="font-bold text-base mb-2">{item.title}</h4>
                
                {item.description && (
                  <p className="text-white/70 text-sm mb-3 line-clamp-2">{item.description}</p>
                )}
                
                <div className="flex items-center text-xera-red text-sm font-medium mt-auto">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 w-3 h-3" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedContent;
