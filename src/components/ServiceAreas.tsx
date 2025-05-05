
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const ServiceAreas = () => {
  const mainLocations = [
    "Ottapalam", "Palakkad", "Shoranur", "Pattambi"
  ];
  
  const secondaryLocations = [
    "Perinthalmanna", "Cherpulassery", "Thrissur", "Mannarkad", 
    "Kozhikode", "Malappuram", "Kottakkal", "Manjeri"
  ];

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
            Serving Kerala with Premium Ceramic Coating
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Our studio is located in Ottapalam, and we provide mobile ceramic coating and detailing services across Palakkad district and beyond.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Map visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-ratio ratio-4/3 overflow-hidden rounded-lg shadow-lg bg-xera-darkgray">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31371.83977335477!2d76.35980083476561!3d10.97549699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cf4460658aab%3A0x7900ad37ffce8fe6!2sXERA!5e0!3m2!1sen!2sin!4v1651322114926!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="XERA Detailing Location"
                className="w-full h-full"
              ></iframe>
            </div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-xera-red text-white px-4 py-3 rounded-lg shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <p className="font-bold">Our Studio in Ottapalam</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Service areas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Primary Service Areas <span className="text-xera-red">(Studio & Mobile)</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {mainLocations.map((location, index) => (
                <motion.div 
                  key={location}
                  className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-4 flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.3)' }}
                >
                  <div className="w-8 h-8 rounded-full bg-xera-red/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-xera-red" />
                  </div>
                  <span className="text-lg font-medium">{location}</span>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mb-6">
              Extended Service Areas <span className="text-white/60">(Mobile Only)</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {secondaryLocations.map((location, index) => (
                <motion.div 
                  key={location}
                  className="bg-xera-darkgray/50 border border-xera-lightgray/50 rounded-lg p-3 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.05) }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span>{location}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 bg-xera-darkgray/50 border border-xera-lightgray rounded-lg p-4">
              <p className="text-white/80 text-sm">
                Need service in a location not listed? Contact us at <a href="tel:+919605858483" className="text-xera-red">+91 9605858483</a> to check availability for your area.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
