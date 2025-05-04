
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Calendar, Clock, Check, MapPin, CircleDollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';

const ExpressWash = () => {
  useEffect(() => {
    document.title = "Express Wash Car Detailing | XERA Ottapalam Kerala";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Professional express car wash service in Ottapalam, Palakkad. XERA\'s premium foam wash removes dirt without damaging your paintwork. Book now!'
    );
    
    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://xeradetailing.in/services/express-wash');
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-xera-darkgray py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('/assets/service-bg-pattern.jpg')] bg-repeat"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="flex flex-col lg:flex-row gap-8 items-center"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div className="lg:w-1/2" variants={itemVariants}>
                <div className="mb-2">
                  <Link to="/services" className="text-xera-red hover:text-white transition-colors inline-flex items-center gap-1">
                    <span>← Back to Services</span>
                  </Link>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Express Wash Service</h1>
                <p className="text-white/80 text-lg mb-6">
                  A fast yet thorough cleaning with pH-balanced foam specially formulated for Kerala's humid climate. Our Express Wash removes road grime, dust, and light contaminants without harming your paintwork.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-xera-red" />
                    <span>30-45 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-xera-red" />
                    <span>Ottapalam, Palakkad</span>
                  </div>
                </div>
                
                <motion.div 
                  className="mb-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-xera-red hover:bg-xera-red/90 text-white relative overflow-hidden group">
                    <span className="relative z-10 flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Express Wash Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                variants={itemVariants}
              >
                <motion.div 
                  className="relative rounded-lg overflow-hidden shadow-lg shadow-black/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/assets/express-wash-after.jpg" 
                      alt="XERA Express Wash service result on a car in Ottapalam" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                      <div className="p-4">
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="inline-block bg-xera-red px-3 py-1 rounded text-sm font-medium mb-2"
                        >
                          Popular Service
                        </motion.div>
                        <h3 className="text-white text-xl font-bold">Transform Your Car in Just 30 Minutes</h3>
                      </div>
                    </div>
                  </AspectRatio>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Our Express Wash Process</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Pre-rinse to remove loose dirt",
                      description: "We start with a gentle pre-rinse to remove loose dirt and debris, preventing scratches during the washing process."
                    },
                    {
                      title: "Application of pH-balanced foam",
                      description: "Our special pH-balanced foam formula is designed specifically for Kerala's climate, effectively lifting dirt without damaging paint."
                    },
                    {
                      title: "Hand wash with microfiber mitts",
                      description: "Our technicians use premium microfiber wash mitts to gently clean all exterior surfaces without introducing swirl marks."
                    },
                    {
                      title: "Rinse with filtered water",
                      description: "We use filtered water to remove all soap residue, preventing water spots and mineral deposits that are common with tap water."
                    },
                    {
                      title: "Soft cloth hand-drying",
                      description: "We finish with a careful hand-drying process using plush microfiber towels to ensure a spot-free finish."
                    }
                  ].map((step, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3 bg-xera-lightgray/40 p-4 rounded-lg hover:bg-xera-lightgray/60 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 4px 12px rgba(230, 43, 30, 0.15)" 
                      }}
                    >
                      <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                        <Check className="h-4 w-4 text-xera-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{step.title}</h3>
                        <p className="text-white/70">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Benefits for Kerala Drivers</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Safe contaminant removal",
                      description: "Our process safely removes road dust, mud, and environmental contaminants without scratching your paint."
                    },
                    {
                      title: "Preserves existing wax and protection",
                      description: "Unlike harsh soaps, our pH-balanced formula won't strip away your car's existing protective coatings."
                    },
                    {
                      title: "Restores natural shine",
                      description: "Removes the dull film that builds up on paint due to Kerala's humidity and pollution, restoring your car's natural shine."
                    },
                    {
                      title: "Prevents buildup of corrosive elements",
                      description: "Regular washing prevents accumulation of acidic rain residue and road salts that can damage your paint over time."
                    }
                  ].map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3 bg-xera-lightgray/40 p-4 rounded-lg hover:bg-xera-lightgray/60 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 4px 12px rgba(230, 43, 30, 0.15)" 
                      }}
                    >
                      <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                        <Check className="h-4 w-4 text-xera-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{benefit.title}</h3>
                        <p className="text-white/70">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 bg-xera-lightgray p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ boxShadow: "0 8px 30px rgba(230, 43, 30, 0.2)" }}
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CircleDollarSign className="text-xera-red h-5 w-5" />
                    <span className="bg-gradient-to-r from-xera-red to-white bg-clip-text text-transparent">Pricing</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { vehicle: "Sedan", price: "₹400" },
                      { vehicle: "SUV", price: "₹500" },
                      { vehicle: "Bike", price: "₹200" },
                      { vehicle: "Scooty", price: "₹150" }
                    ].map((pricing, index) => (
                      <motion.div 
                        key={index}
                        className="bg-xera-darkgray rounded-md p-3 flex justify-between items-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(46, 46, 46, 1)" 
                        }}
                      >
                        <span>{pricing.vehicle}</span>
                        <span className="font-bold text-xera-red">{pricing.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gradient">Before & After Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="rounded-lg overflow-hidden">
                    <AspectRatio ratio={4/3}>
                      <motion.img 
                        src="/assets/express-wash-before.jpg" 
                        alt="Car before XERA Express Wash service in Ottapalam" 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </AspectRatio>
                  </div>
                  <p className="text-center font-medium">Before</p>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="rounded-lg overflow-hidden">
                    <AspectRatio ratio={4/3}>
                      <motion.img 
                        src="/assets/express-wash-after.jpg" 
                        alt="Car after XERA Express Wash service in Ottapalam" 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </AspectRatio>
                  </div>
                  <p className="text-center font-medium">After</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-xera-lightgray rounded-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gradient">Why Choose XERA for Express Wash in Ottapalam?</h2>
                <p className="text-center text-lg mb-8">
                  XERA Detailing is Ottapalam's premier car care specialist, offering superior car wash services with attention to detail that regular car washes can't match.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Premium Products",
                      description: "We use only pH-balanced, paint-safe cleaning agents from top international brands."
                    },
                    {
                      title: "Trained Technicians",
                      description: "Our staff is specifically trained in proper car washing techniques to avoid swirl marks and paint damage."
                    },
                    {
                      title: "Convenient Location",
                      description: "Located in the heart of Ottapalam, opposite NSS College, making us easily accessible for all Palakkad residents."
                    }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="bg-xera-darkgray p-6 rounded-lg relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 10px 30px rgba(230, 43, 30, 0.2)",
                      }}
                    >
                      <motion.div 
                        className="absolute top-0 right-0 w-full h-1 bg-xera-red" 
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                      />
                      <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Ready to Experience the XERA Difference?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Book your Express Wash today and see why car owners across Ottapalam, Palakkad and surrounding areas choose XERA for their vehicle's care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-xera-red hover:bg-xera-red/90 relative overflow-hidden group">
                    <span className="relative z-10 flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Appointment
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="border-xera-red text-xera-red hover:bg-xera-red/10">
                    View All Services
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* SEO Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Express Car Wash",
              "name": "XERA Express Wash Service",
              "description": "A fast yet thorough cleaning with pH-balanced foam specially formulated for Kerala's humid climate. Removes road grime, dust, and light contaminants without harming your paintwork.",
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
              "offers": {
                "@type": "Offer",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "400",
                  "priceCurrency": "INR",
                  "eligibleTransactionVolume": {
                    "@type": "PriceSpecification",
                    "unitText": "Sedan"
                  }
                }
              }
            })
          }}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ExpressWash;
