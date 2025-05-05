
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Droplet, Shield, Sparkles, Award, Zap, Car } from 'lucide-react';
import { getSeoImageName, getImageAlt } from '@/utils/imageOptimization';

const FeaturedGallery = () => {
  // Array of images uploaded by the user with SEO-optimized properties
  const galleryImages = [
    {
      src: '/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png',
      alt: getImageAlt('Ceramic coating protection for car in Kerala rain', 'Ottapalam'),
      title: 'Kerala Monsoon Protection',
      description: 'Our ceramic coating creates a hydrophobic shield against Kerala\'s heavy rainfall',
      icon: <Droplet className="h-6 w-6" />
    },
    {
      src: '/lovable-uploads/7dbc3f0f-1641-4d72-a5df-75f309fe9aab.png',
      alt: getImageAlt('XERA coating studio with professional lighting and equipment', 'Ottapalam'),
      title: 'Professional Studio',
      description: 'State-of-the-art detailing studio with controlled environment',
      icon: <Zap className="h-6 w-6" />
    },
    {
      src: '/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png',
      alt: getImageAlt('Interior detailing showcasing clean luxury seats with XERA branding', 'Ottapalam'),
      title: 'Interior Transformation',
      description: 'Meticulous interior cleaning and protection for your family\'s health',
      icon: <Car className="h-6 w-6" />
    },
    {
      src: '/lovable-uploads/d4676f3a-b30c-4c07-8484-0598b007bd16.png',
      alt: getImageAlt('Before and after of headlight restoration by XERA detailing', 'Ottapalam'),
      title: 'Crystal Clear Vision',
      description: 'Headlight restoration for enhanced visibility and safety',
      icon: <Award className="h-6 w-6" />
    },
    {
      src: '/lovable-uploads/687fb100-26c3-4681-9015-47ddf494439c.png',
      alt: getImageAlt('Vintage car with restored paint under night sky with XERA logo', 'Ottapalam'),
      title: 'Classic Car Care',
      description: 'Specialized detailing for vintage and classic cars',
      icon: <Shield className="h-6 w-6" />
    },
    {
      src: '/lovable-uploads/18a2b3d8-292b-497f-88b3-78d082ff3357.png',
      alt: getImageAlt('XERA staff cleaning a red vehicle with professional equipment', 'Ottapalam'),
      title: 'Expert Technicians',
      description: 'Our trained specialists use only premium products and techniques',
      icon: <Sparkles className="h-6 w-6" />
    },
    // New images added from latest uploads
    {
      src: '/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png',
      alt: getImageAlt('Black luxury car with XERA red stripe detailing', 'Ottapalam'),
      title: 'Signature Red Line Design',
      description: 'Exclusive XERA detailing with our signature red accents',
      icon: <Zap className="h-6 w-6" />
    },
    {
      src: '/lovable-uploads/93e1be41-e185-4b92-9ccf-b53e4dfd75e0.png',
      alt: getImageAlt('Black SUV with premium detailing in XERA studio', 'Ottapalam'),
      title: 'Premium SUV Specialists',
      description: 'Tailored detailing packages for luxury SUVs and crossovers',
      icon: <Award className="h-6 w-6" />
    },
    {
      src: '/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png',
      alt: getImageAlt('Black sedan with red accents in professional XERA studio', 'Ottapalam'),
      title: 'Showroom Finish',
      description: 'Better-than-new appearance for your prestigious vehicle',
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <div className="py-16 bg-xera-darkgray/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Experience XERA Excellence</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Kerala's premier auto detailing studio delivering showroom-quality results tailored for local climate conditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-xera-darkgray border-xera-lightgray hover:shadow-xera-red/20 hover:border-xera-red/30 transition-all group">
                <div className="relative">
                  <AspectRatio ratio={3/2}>
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      width={480}
                      height={320}
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AspectRatio>
                  
                  {/* Animated gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Icon effects */}
                  <motion.div 
                    className="absolute top-2 right-2 text-xera-red"
                    animate={{ 
                      y: [0, -5, 0], 
                      rotate: [0, 5, 0, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      repeatType: "loop"
                    }}
                  >
                    {image.icon || <Sparkles className="h-6 w-6" />}
                  </motion.div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <motion.h3 
                      className="font-bold text-lg"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {image.title}
                    </motion.h3>
                    <motion.p 
                      className="text-white/80 text-sm"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {image.description}
                    </motion.p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedGallery;
