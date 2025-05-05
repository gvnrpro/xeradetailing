
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import BeforeAfterGallery from './BeforeAfterGallery';

const BeforeAfterShowcase = () => {
  const transformationData = [
    {
      id: 'paint-protection',
      title: 'Paint Protection Film & Ceramic Coating',
      description: 'Our premium ceramic coating creates a hydrophobic layer that repels water, protects against UV damage, and gives your vehicle a long-lasting showroom shine. Perfect for Kerala\'s harsh climate.',
      beforeImages: [
        { 
          src: '/lovable-uploads/687fb100-26c3-4681-9015-47ddf494439c.png', 
          alt: 'Car before ceramic coating application'
        },
        { 
          src: '/lovable-uploads/3d755255-c072-49c0-a49e-d07955f19c65.png', 
          alt: 'Car paint before protection' 
        },
        { 
          src: '/lovable-uploads/f7c92f91-b4dc-428b-a57d-26d790873710.png', 
          alt: 'Car paint before protection showing scratches'
        }
      ],
      afterImages: [
        { 
          src: '/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png', 
          alt: 'Car after ceramic coating with enhanced shine and protection'
        },
        { 
          src: '/lovable-uploads/38bc246e-db78-43b4-a623-3671deb80a8c.png', 
          alt: 'Car paint after XERA protection' 
        },
        { 
          src: '/lovable-uploads/0c73c7d1-260f-4d6f-bcaf-46d4fbb2760e.png', 
          alt: 'Car paint after protection showing perfect finish'
        }
      ]
    },
    {
      id: 'interior-detailing',
      title: 'Interior Detailing & Sanitization',
      description: 'Our comprehensive interior detailing removes deep-seated dirt, eliminates odors, and sanitizes all surfaces. Especially important in Kerala\'s humid environment where mold and mildew can quickly develop.',
      beforeImages: [
        { 
          src: '/lovable-uploads/11fee74f-0dee-4060-824f-20ff61bdb764.png', 
          alt: 'Car interior before detailing with stains' 
        },
        { 
          src: '/lovable-uploads/eedb4eae-e7d4-4f76-a2af-019d0465d1ee.png', 
          alt: 'Car seats before cleaning' 
        }
      ],
      afterImages: [
        { 
          src: '/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png', 
          alt: 'Car interior after detailing looking fresh and clean' 
        },
        { 
          src: '/lovable-uploads/b0fef950-e8c9-4cf1-8847-be695187e932.png', 
          alt: 'Car clean interior after XERA treatment' 
        }
      ]
    },
    {
      id: 'engine-bay',
      title: 'Engine Bay Cleaning',
      description: 'Professional degreasing and detailing for your engine bay, especially beneficial in Kerala where high humidity can accelerate corrosion and dust accumulation in engine components.',
      beforeImages: [
        { 
          src: '/assets/engine-before.jpg', 
          alt: 'Engine bay before cleaning' 
        }
      ],
      afterImages: [
        { 
          src: '/assets/engine-after.jpg', 
          alt: 'Engine bay after professional cleaning' 
        }
      ]
    }
  ];

  return (
    <div className="py-16 bg-black relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/assets/service-bg-pattern.jpg')] bg-repeat"></div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-xera-red/5 to-transparent"
          animate={{ 
            x: ['-100%', '100%'],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">The XERA Transformation</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Witness the dramatic before & after results of our premium detailing services, specifically designed for Kerala's climate challenges.
          </p>
        </motion.div>
      
        <div className="space-y-24">
          {transformationData.map((item, index) => (
            <motion.div 
              key={item.id}
              className="flex flex-col lg:flex-row gap-8 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Card className="overflow-hidden bg-xera-darkgray border-xera-lightgray shadow-lg shadow-black/50">
                  <BeforeAfterGallery 
                    beforeImages={item.beforeImages}
                    afterImages={item.afterImages}
                    autoplaySpeed={6000}
                  />
                </Card>
              </div>
              
              <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">{item.title}</h3>
                  <p className="text-white/70 mb-6">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Kerala Climate Ready', 'Premium Products', 'Expert Application'].map((tag, idx) => (
                      <motion.span 
                        key={idx}
                        className="bg-xera-red/10 text-xera-red border border-xera-red/50 text-sm rounded-full px-3 py-1"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(239, 68, 68, 0.2)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + (idx * 0.1) }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Animated highlight box */}
                  <motion.div 
                    className="bg-xera-red/5 border border-xera-red/20 p-4 rounded-md mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className="text-white/90 text-sm italic">
                      "Our {item.title.toLowerCase()} service is specially calibrated for Kerala's unique climate challenges, 
                      protecting your vehicle from intense sun, heavy monsoons, and coastal salt exposure."
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterShowcase;
