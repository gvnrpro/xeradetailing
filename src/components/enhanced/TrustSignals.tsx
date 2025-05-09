
import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '../ui/aspect-ratio';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Star } from 'lucide-react';

interface TrustSignalProps {
  variant?: 'review-widget' | 'certification' | 'as-seen-on' | 'customer-photos';
  className?: string;
}

export const GoogleReviewWidget = ({ className }: { className?: string }) => {
  // Static Google review data (in a real app, this would be fetched from Google API)
  const reviewData = {
    rating: 4.8,
    count: 37,
    url: "https://search.google.com/local/writereview?placeid=ChIJ_yLMYO16oDsR8036H8EBMwA"
  };
  
  return (
    <motion.a
      href={reviewData.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block bg-white text-black rounded-lg p-4 hover:shadow-lg transition-shadow ${className}`}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-2">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
          alt="Google" 
          className="w-6 h-6 mr-2"
        />
        <span className="font-medium">Google Reviews</span>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center mr-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star 
              key={star} 
              className={`w-4 h-4 ${star <= Math.round(reviewData.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
            />
          ))}
        </div>
        <span className="font-bold">{reviewData.rating}</span>
        <span className="text-gray-500 ml-1">({reviewData.count})</span>
      </div>
    </motion.a>
  );
};

export const CertificationBadges = ({ className }: { className?: string }) => {
  const certifications = [
    { name: "Ceramic Pro Certified", icon: "🛡️" },
    { name: "Pro Detailer Network", icon: "🌟" },
    { name: "Kerala Auto Club", icon: "🏁" },
  ];
  
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          className="inline-flex"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Badge variant="secondary" className="px-3 py-2 text-white bg-xera-lightgray">
            <span className="mr-1">{cert.icon}</span>
            {cert.name}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
};

export const AsSeenOn = ({ className }: { className?: string }) => {
  const brands = [
    { name: "AutoCar India", logo: "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png" },
    { name: "Car & Bike", logo: "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png" },
    { name: "Manorama", logo: "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png" },
    { name: "Mathrubhumi", logo: "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png" },
  ];
  
  return (
    <div className={className}>
      <p className="text-sm text-center mb-4 text-white/60">As Featured In</p>
      <div className="flex flex-wrap justify-center gap-6">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center h-12 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <img 
              src={brand.logo} 
              alt={`${brand.name} logo featuring XERA Car Detailing`} 
              className="max-h-full max-w-[100px] object-contain" 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const CustomerPhotos = ({ className }: { className?: string }) => {
  const testimonials = [
    {
      name: "Rahul K",
      location: "Ottapalam",
      quote: "Best ceramic coating I've ever had!",
      image: "/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png",
    },
    {
      name: "Meera S",
      location: "Shoranur",
      quote: "My car looks better than new",
      image: "/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png",
    },
    {
      name: "Ajith T",
      location: "Pattambi",
      quote: "Professional service, amazing results",
      image: "/lovable-uploads/5c6772f8-70d4-496c-9c31-291686cf603e.png",
    },
  ];
  
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="overflow-hidden bg-xera-darkgray border-xera-lightgray h-full hover:border-xera-red/30 transition-all">
              <AspectRatio ratio={4/3}>
                <img 
                  src={item.image} 
                  alt={`Customer car from ${item.location} after XERA ceramic coating service`}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold">{item.name}</p>
                  <Badge variant="outline" className="bg-xera-red/10 text-xs">
                    {item.location}
                  </Badge>
                </div>
                <p className="text-white/80 text-sm italic">"{item.quote}"</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const TrustSignals = ({ variant = 'review-widget', className }: TrustSignalProps) => {
  switch (variant) {
    case 'review-widget':
      return <GoogleReviewWidget className={className} />;
    case 'certification':
      return <CertificationBadges className={className} />;
    case 'as-seen-on':
      return <AsSeenOn className={className} />;
    case 'customer-photos':
      return <CustomerPhotos className={className} />;
    default:
      return null;
  }
};

export default TrustSignals;
