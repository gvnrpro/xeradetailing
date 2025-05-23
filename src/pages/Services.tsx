
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Star, Droplet, PaintRoller, Car, Wrench, ShowerHead, SprayCan } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import FeaturedGallery from '@/components/FeaturedGallery';
import BeforeAfterShowcase from '@/components/BeforeAfterShowcase';
import { motion } from 'framer-motion';

const servicesList = [
  {
    id: "express-wash",
    icon: <ShowerHead className="h-5 w-5" />,
    title: "Express Wash",
    description: "A fast yet thorough cleaning with pH-balanced foam specially formulated for Kerala's humid climate. Our Express Wash removes road grime, dust, and light contaminants without harming your paintwork.",
    imageUrl: "/assets/express-wash-after.jpg"
  },
  {
    id: "interior-detailing",
    icon: <Car className="h-5 w-5" />,
    title: "Interior Detailing",
    description: "Complete interior rejuvenation using steam sanitization and premium cleaning agents. Our process eliminates Kerala's high humidity-caused odors and prevents mold and mildew growth in your vehicle.",
    imageUrl: "/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png"
  },
  {
    id: "ceramic-coating",
    icon: <Droplet className="h-5 w-5" />,
    title: "Ceramic Coating",
    description: "Premium grade SiO2 ceramic coating with 9H+ hardness that creates a permanent bond with your vehicle's paint, providing unmatched protection against Kerala's harsh sun and monsoon conditions.",
    imageUrl: "/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png"
  },
  {
    id: "paint-correction",
    icon: <PaintRoller className="h-5 w-5" />,
    title: "Paint Correction",
    description: "Multi-stage machine polishing to remove swirl marks, oxidation, and scratches, restoring your paint to a better-than-showroom finish. Essential for older vehicles or those exposed to Kerala's harsh environmental conditions.",
    imageUrl: "/lovable-uploads/f7c92f91-b4dc-428b-a57d-26d790873710.png"
  },
  {
    id: "headlight-restoration",
    icon: <SprayCan className="h-5 w-5" />,
    title: "Headlight Restoration",
    description: "Complete restoration of yellowed, hazy, or oxidized headlights to improve visibility and safety. Crucial for older vehicles navigating Kerala's occasional nighttime fog or heavy monsoon rainfall.",
    imageUrl: "/assets/headlight-after.jpg"
  },
  {
    id: "engine-bay-cleaning",
    icon: <Wrench className="h-5 w-5" />,
    title: "Engine Bay Cleaning",
    description: "Professional degreasing and detailing for your engine bay, especially beneficial in Kerala where high humidity can accelerate corrosion and dust accumulation in engine components.",
    imageUrl: "/assets/engine-after.jpg"
  }
];

const Services = () => {
  // Update document title and meta description for SEO
  useEffect(() => {
    document.title = "Car Detailing & Auto Care Services in Ottapalam, Palakkad | XERA Kerala";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Professional car detailing services in Ottapalam, Palakkad including ceramic coating, interior cleaning, paint correction, and engine bay detailing. XERA - Kerala\'s premium auto care specialists.'
    );
    
    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://xeradetailing.in/services');
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-xera-darkgray py-16 lg:py-24 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('/assets/service-bg-pattern.jpg')] bg-repeat"></div>
          
          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-xera-red/30 rounded-full z-10"
              style={{
                top: `${20 + (i * 10)}%`,
                left: `${10 + (i * 15)}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 8 + i,
                delay: i * 2,
                ease: "easeInOut",
              }}
            />
          ))}
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              className="text-3xl md:text-5xl font-bold text-center mb-4 text-gradient"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Auto Care Services in Ottapalam
            </motion.h1>
            
            <motion.p 
              className="text-center text-white/70 max-w-3xl mx-auto mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              XERA delivers comprehensive auto care services designed specifically for Kerala's climate and road conditions, combining expert craftsmanship with premium products.
            </motion.p>
            
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 bg-xera-lightgray/50 px-4 py-2 rounded-full">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.9/5</span>
                <span className="text-sm text-white/70">based on 120+ reviews</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-xera-lightgray/30 p-6 rounded-lg max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">Serving All of Palakkad District</h2>
              <p className="text-center text-white/80 mb-4">
                We proudly serve vehicle owners in Ottapalam, Palakkad, Shoranur, Pattambi, Perinthalmanna, and Cherpulassery with premium detailing services.
              </p>
              <div className="flex justify-center">
                <Button variant="outline" className="border-xera-red text-xera-red hover:bg-xera-red/10">
                  Find Our Location
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-xera-red hover:bg-xera-red/90 text-white px-8 py-6 rounded-md shadow-lg shadow-xera-red/20 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>Book Your Service Now</span>
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-xera-red to-pink-600 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 3 }}
                />
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Featured Gallery with new images */}
        <FeaturedGallery />
        
        {/* Before/After Showcase */}
        <BeforeAfterShowcase />
        
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-gradient">Our Premium Services</h2>
              <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
                Discover our comprehensive range of detailing services, each designed to protect your vehicle from Kerala's unique climate challenges and keep it looking its best.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service, index) => (
                <ServiceCard 
                  key={service.id}
                  id={service.id.replace(/-/g, "")}
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  icon={service.icon}
                />
              ))}
            </div>
            
            <div className="mt-16">
              <div className="bg-gradient-to-b from-xera-darkgray to-black p-8 rounded-lg border border-xera-lightgray">
                <div className="max-w-3xl mx-auto text-center">
                  <motion.h2 
                    className="text-2xl md:text-3xl font-bold mb-4 text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Why Choose XERA in Ottapalam?
                  </motion.h2>
                  
                  <motion.p 
                    className="text-white/70 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    XERA is Palakkad's premier auto detailing studio, offering specialized services that protect your vehicle from Kerala's unique climate challenges.
                  </motion.p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: "Climate-Specific Solutions",
                        description: "Protection against Kerala's intense UV radiation, monsoon humidity, and coastal salt exposure."
                      },
                      {
                        title: "Certified Technicians",
                        description: "Our team is fully trained and certified in advanced detailing techniques and product application."
                      },
                      {
                        title: "Premium Products",
                        description: "We use only international-grade detailing products and protective coatings for superior results."
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="bg-xera-lightgray p-5 rounded-lg relative overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                        whileHover={{ y: -5 }}
                      >
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-white/70">{item.description}</p>
                        
                        {/* Animated border glow on hover */}
                        <motion.div 
                          className="absolute inset-0 border border-xera-red/0 rounded-lg pointer-events-none"
                          animate={{ borderColor: ['rgba(239,68,68,0)', 'rgba(239,68,68,0.3)', 'rgba(239,68,68,0)'] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg" className="bg-xera-red hover:bg-xera-red/90 relative overflow-hidden">
                        <span className="relative z-10 flex items-center">
                          <Calendar className="mr-2 h-5 w-5" />
                          <span>Schedule Appointment</span>
                        </span>
                        <motion.span 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 3 }}
                        />
                      </Button>
                    </motion.div>
                    
                    <Link to="/contact">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="outline" size="lg" className="border-xera-red text-xera-red hover:bg-xera-red/10">
                          Get Custom Quote
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Car Detailing Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "XERA Car Wash & Auto Detailing",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Opp. NSS College, Palappuram",
                  "addressLocality": "Ottapalam",
                  "addressRegion": "Kerala",
                  "postalCode": "679103",
                  "addressCountry": "IN"
                },
                "telephone": "+919605858483",
                "priceRange": "₹₹",
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 10.980150076997278,
                  "longitude": 76.37854502536776
                }
              },
              "areaServed": [
                "Ottapalam",
                "Palakkad",
                "Shoranur",
                "Pattambi",
                "Perinthalmanna",
                "Cherpulassery"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Auto Detailing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ceramic Coating",
                      "description": "9H+ hardness, hydrophobic layer, UV protection — the ultimate defense against Kerala's harsh climate"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Interior Detailing",
                      "description": "Deep vacuum, steam sanitization, dashboard polish, seat shampoo"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Express Wash",
                      "description": "Fast, spotless cleaning with pH-balanced foam"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Engine Bay Cleaning",
                      "description": "Professional degreasing and detailing for your engine bay to prevent corrosion"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "XERA Car Wash & Auto Detailing",
              "image": "https://xeradetailing.in/logo.png",
              "url": "https://xeradetailing.in",
              "telephone": "+919605858483",
              "priceRange": "₹₹",
              "description": "Kerala's leading car wash and auto detailing studio offering ceramic coating, interior cleaning, paint correction, and more in Ottapalam, Palakkad.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Opp. NSS College, Palappuram",
                "addressLocality": "Ottapalam",
                "postalCode": "679103",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.980150076997278,
                "longitude": 76.37854502536776
              },
              "keywords": "car detailing Ottapalam, ceramic coating Palakkad, auto detailing Kerala, paint correction Ottapalam, interior cleaning Palakkad, engine bay cleaning, car wash near me, headlight restoration Kerala"
            })
          }}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
