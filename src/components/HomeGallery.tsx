
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageAlt } from '@/utils/imageOptimization';
import { getFeaturedImages } from '@/data/imageRegistry';

const HomeGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = getFeaturedImages().slice(0, 8); // Limit to 8 featured images
  
  // Auto-advance image carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="py-16 bg-gradient-to-b from-black to-xera-darkgray">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Premium Car Care in Ottapalam & Nearby Areas
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Discover why vehicle owners across Palakkad district trust XERA for ceramic coating, paint protection, and complete auto detailing services.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Image - Large Spotlight */}
          <motion.div 
            className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AspectRatio ratio={16/9} className="h-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  width={900}
                  height={506}
                  loading="lazy" 
                  className="object-cover w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                />
              </AnimatePresence>
            </AspectRatio>
            
            {/* Ceramic coating CTA overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
              <motion.span 
                className="text-xera-red font-bold uppercase tracking-wider text-sm mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Premium Service
              </motion.span>
              
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Ceramic Coating in Ottapalam
              </motion.h3>
              
              <motion.p 
                className="text-white/80 mb-6 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Long-lasting protection against Kerala's harsh climate. Our premium ceramic coating provides 9H+ hardness and hydrophobic properties for your vehicle.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-3"
              >
                <Link to="/services/ceramic-coating">
                  <Button className="bg-xera-red hover:bg-red-700 text-white relative overflow-hidden group">
                    <span className="relative z-10 flex items-center">
                      Explore Ceramic Coating
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 3 }}
                    />
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Get a Free Quote
                  </Button>
                </Link>
              </motion.div>
              
              <div className="absolute top-6 right-6 bg-xera-red/90 px-3 py-1 rounded-full text-sm font-bold">
                #1 Ceramic Coating Service in Palakkad
              </div>
            </div>
          </motion.div>
          
          {/* Services Grid - 4 key services for conversion */}
          {[
            { 
              title: "Paint Protection", 
              desc: "Shield your car from UV damage, acid rain & scratches",
              img: "/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png",
              alt: getImageAlt("Premium paint protection service with ceramic coating", "Ottapalam"),
              link: "/services"
            },
            { 
              title: "Interior Detailing",
              desc: "Complete sanitization & premium cleaning for your car's cabin",
              img: "/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png",
              alt: getImageAlt("Professional interior detailing service", "Ottapalam"),
              link: "/services"
            },
            { 
              title: "Expert Blog",
              desc: "Read our detailing tips & guides for Kerala car owners",
              img: "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
              alt: getImageAlt("XERA detailing blog with expert tips", "Ottapalam"),
              link: "/blog"
            },
            { 
              title: "Contact Us",
              desc: "Get your free quote today from Ottapalam's top detailers",
              img: "/lovable-uploads/18a2b3d8-292b-497f-88b3-78d082ff3357.png",
              alt: getImageAlt("XERA detailing staff with professional equipment", "Ottapalam"),
              link: "/contact"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <Link to={item.link} className="block h-full">
                <Card className="overflow-hidden bg-xera-darkgray border-xera-lightgray hover:shadow-xera-red/20 hover:border-xera-red/30 transition-all group h-full">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src={item.img} 
                      alt={item.alt}
                      width={400}
                      height={300}
                      loading="lazy" 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
                    />
                  </AspectRatio>
                  
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                    
                    <div className="mt-3 flex items-center text-xera-red text-sm font-medium transition-all">
                      <span>Learn more</span>
                      <motion.span 
                        className="ml-1"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile services section */}
        <div className="mt-16">
          <motion.div 
            className="bg-gradient-to-r from-xera-darkgray to-black p-6 rounded-lg border border-xera-lightgray"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gradient">
                  Mobile Ceramic Coating Experts in Ottapalam
                </h3>
                <p className="text-white/70 mb-4">
                  Can't come to us? Our mobile detailing team serves Ottapalam, Shoranur, Pattambi, Palakkad, and Thrissur with the same premium ceramic coating and detailing services.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-xera-red">✓</span>
                    <span>Premium ceramic coating at your doorstep</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-xera-red">✓</span>
                    <span>Fully equipped mobile detailing unit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-xera-red">✓</span>
                    <span>Serving all of Palakkad district</span>
                  </li>
                </ul>
                <Button className="bg-xera-red hover:bg-red-700 text-white">
                  Book Mobile Service
                </Button>
              </div>
              
              <div className="md:w-1/2">
                <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/5c6772f8-70d4-496c-9c31-291686cf603e.png" 
                    alt={getImageAlt("Mobile ceramic coating service by XERA technicians", "Ottapalam")}
                    width={600}
                    height={338}
                    loading="lazy"
                    className="object-cover w-full h-full" 
                  />
                </AspectRatio>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* City services badges */}
        <div className="mt-12">
          <motion.h3 
            className="text-center text-xl font-bold mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Serving Ottapalam & Nearby Areas
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["Ottapalam", "Palakkad", "Shoranur", "Pattambi", "Perinthalmanna", "Thrissur", "Cherpulassery"].map((city, i) => (
              <motion.span 
                key={city}
                className="bg-xera-lightgray px-4 py-2 rounded-full text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {city}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
