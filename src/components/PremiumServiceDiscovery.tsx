
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Droplet, 
  Car, 
  ShowerHead, 
  PaintRoller, 
  SprayCan,
  Wrench,
  ArrowRight,
  Clock,
  CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PremiumService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  startingPrice: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

const services: PremiumService[] = [
  {
    id: "ceramic-coating",
    icon: <Droplet className="h-5 w-5" />,
    title: "Ceramic Coating",
    description: "Ultimate paint protection with 9H+ hardness and hydrophobic properties",
    startingPrice: "₹8,000",
    duration: "1-2 days",
    popular: true,
    features: [
      "9H+ hardness protection",
      "UV & weather resistance", 
      "Self-cleaning properties",
      "5+ years warranty"
    ]
  },
  {
    id: "interior-detailing",
    icon: <Car className="h-5 w-5" />,
    title: "Interior Detailing",
    description: "Complete interior restoration with premium cleaning and protection",
    startingPrice: "₹2,500",
    duration: "3-4 hours",
    features: [
      "Steam sanitization",
      "Leather conditioning",
      "Stain removal",
      "Anti-microbial treatment"
    ]
  },
  {
    id: "express-wash",
    icon: <ShowerHead className="h-5 w-5" />,
    title: "Express Wash",
    description: "Professional quick wash for busy schedules without compromising quality",
    startingPrice: "₹400",
    duration: "30-45 mins",
    features: [
      "pH-balanced foam",
      "Hand wash & dry",
      "Tire shine",
      "Interior wipe down"
    ]
  },
  {
    id: "paint-correction",
    icon: <PaintRoller className="h-5 w-5" />,
    title: "Paint Correction",
    description: "Multi-stage polishing to restore your vehicle's original luster",
    startingPrice: "₹5,000",
    duration: "1-2 days",
    features: [
      "Multi-stage polishing",
      "Swirl mark removal",
      "Scratch elimination",
      "Gloss enhancement"
    ]
  },
  {
    id: "headlight-restoration",
    icon: <SprayCan className="h-5 w-5" />,
    title: "Headlight Restoration",
    description: "Crystal clear headlights for enhanced visibility and aesthetics",
    startingPrice: "₹1,500",
    duration: "1-2 hours",
    features: [
      "UV damage reversal",
      "70% visibility improvement",
      "Professional sanding",
      "Protective coating"
    ]
  },
  {
    id: "engine-bay",
    icon: <Wrench className="h-5 w-5" />,
    title: "Engine Bay Cleaning",
    description: "Professional engine degreasing and protection service",
    startingPrice: "₹1,200",
    duration: "1-2 hours",
    features: [
      "Safe degreasing",
      "Component protection",
      "Corrosion prevention",
      "Professional finish"
    ]
  }
];

const PremiumServiceDiscovery = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  return (
    <section className="section-spacing bg-gradient-to-b from-background to-premium-charcoal">
      <div className="container-spacing">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 premium-text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-premium-light-gray text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Premium automotive care designed specifically for Kerala's challenging climate conditions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className={`premium-card cursor-pointer group relative overflow-hidden h-full ${
                  selectedService === service.id ? 'ring-2 ring-premium-accent' : ''
                }`}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-premium-accent text-premium-black text-xs font-semibold px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-premium-slate text-premium-accent group-hover:bg-premium-accent group-hover:text-premium-black transition-all duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-premium-gray text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-premium-gray">Starting from</p>
                      <p className="text-lg font-semibold text-premium-accent">{service.startingPrice}</p>
                    </div>
                    <div className="flex items-center gap-2 text-premium-gray">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-premium-slate pt-4 mb-4">
                          <h4 className="text-sm font-semibold mb-3 text-premium-accent">What's Included:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-premium-light-gray">
                                <CheckCircle className="h-3 w-3 text-premium-green flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex gap-3">
                    <Link to={`/services/${service.id}`} className="flex-1">
                      <Button 
                        variant="outline" 
                        className="w-full premium-button-outline text-sm"
                        size="sm"
                      >
                        Learn More
                      </Button>
                    </Link>
                    <Button 
                      className="premium-button text-sm group"
                      size="sm"
                    >
                      Book Now
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Premium consultation CTA */}
        <motion.div 
          className="mt-16 premium-gradient p-8 rounded-2xl border border-premium-slate"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-playfair text-2xl font-semibold mb-2">Need Expert Guidance?</h3>
              <p className="text-premium-light-gray">Our specialists can recommend the perfect service for your vehicle's unique needs.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="premium-button-outline">
                Free Consultation
              </Button>
              <Button className="premium-button">
                Get Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumServiceDiscovery;
