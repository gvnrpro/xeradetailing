
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Car, Zap, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PremiumServiceDiscovery = () => {
  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ceramic Coating",
      description: "9H hardness protection with 5+ year warranty. Ultimate defense against Kerala's harsh weather.",
      price: "₹7,999",
      popular: true,
      features: ["9H Hardness", "UV Protection", "5+ Year Warranty", "Hydrophobic"],
      link: "/services/ceramic-coating"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Premium Detailing",
      description: "Complete interior and exterior transformation. Professional grade cleaning and protection.",
      price: "₹2,499",
      popular: false,
      features: ["Interior Deep Clean", "Exterior Polish", "Paint Protection", "Leather Care"],
      link: "/services"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Express Wash",
      description: "Quick, professional cleaning service. Perfect for regular maintenance and upkeep.",
      price: "₹499",
      popular: false,
      features: ["Quick Service", "Professional Clean", "Tire Shine", "Interior Vacuum"],
      link: "/services/express-wash"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-xera-black to-xera-dark">
      <div className="container-spacing">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Premium Services</span>
          </h2>
          <p className="text-lg text-xera-light-gray max-w-2xl mx-auto">
            Professional automotive care designed for perfection. Choose the service that best fits your vehicle's needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative xera-card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-xera-red text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-xera-red mb-4">
                  {service.icon}
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-xera-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-xera-light-gray mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-xera-red rounded-full"></div>
                      <span className="text-sm text-xera-light-gray">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-xera-red">{service.price}</span>
                    <span className="text-xera-light-gray text-sm ml-1">starting</span>
                  </div>
                </div>
                
                <Link to={service.link} className="block">
                  <Button className="w-full xera-button group">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/contact">
            <Button className="xera-button-outline">
              Get Custom Quote
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumServiceDiscovery;
