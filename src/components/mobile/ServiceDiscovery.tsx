
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Droplet, 
  PaintRoller, 
  Car, 
  Wrench, 
  ShowerHead, 
  SprayCan,
  ArrowRight,
  Clock,
  Star,
  CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServicePreview {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  startingPrice: string;
  duration: string;
  popular?: boolean;
  beforeAfter?: {
    before: string;
    after: string;
  };
  features: string[];
  category: 'protection' | 'cleaning' | 'restoration';
}

const services: ServicePreview[] = [
  {
    id: "ceramic-coating",
    icon: <Droplet className="h-6 w-6" />,
    title: "Ceramic Coating",
    shortDescription: "Ultimate paint protection with 5+ years durability",
    startingPrice: "₹8,000",
    duration: "1-2 days",
    popular: true,
    category: "protection",
    features: [
      "9H+ hardness protection",
      "UV & weather resistance", 
      "Self-cleaning properties",
      "5+ years warranty"
    ]
  },
  {
    id: "interior-detailing",
    icon: <Car className="h-6 w-6" />,
    title: "Interior Detailing",
    shortDescription: "Deep cleaning & sanitization for healthier cabin",
    startingPrice: "₹2,500",
    duration: "3-4 hours",
    category: "cleaning",
    features: [
      "Steam sanitization",
      "Leather conditioning",
      "Stain removal",
      "Anti-microbial treatment"
    ]
  },
  {
    id: "express-wash",
    icon: <ShowerHead className="h-6 w-6" />,
    title: "Express Wash",
    shortDescription: "Quick professional cleaning for busy schedules",
    startingPrice: "₹400",
    duration: "30-45 mins",
    category: "cleaning",
    features: [
      "pH-balanced foam",
      "Hand wash & dry",
      "Tire shine",
      "Quick interior wipe"
    ]
  },
  {
    id: "paint-correction",
    icon: <PaintRoller className="h-6 w-6" />,
    title: "Paint Correction",
    shortDescription: "Remove scratches & restore original shine",
    startingPrice: "₹5,000",
    duration: "1-2 days",
    category: "restoration",
    features: [
      "Multi-stage polishing",
      "Swirl mark removal",
      "Scratch elimination",
      "Gloss enhancement"
    ]
  },
  {
    id: "headlight-restoration",
    icon: <SprayCan className="h-6 w-6" />,
    title: "Headlight Restoration",
    shortDescription: "Clear foggy headlights for better visibility",
    startingPrice: "₹1,500",
    duration: "1-2 hours",
    category: "restoration",
    features: [
      "UV damage reversal",
      "70% visibility improvement",
      "Professional sanding",
      "Protective coating"
    ]
  },
  {
    id: "engine-bay",
    icon: <Wrench className="h-6 w-6" />,
    title: "Engine Bay Cleaning",
    shortDescription: "Degrease & protect engine components",
    startingPrice: "₹1,200",
    duration: "1-2 hours",
    category: "cleaning",
    features: [
      "Safe degreasing",
      "Component protection",
      "Corrosion prevention",
      "Professional finish"
    ]
  }
];

const categories = [
  { id: 'all', label: 'All Services', icon: <Star className="h-4 w-4" /> },
  { id: 'protection', label: 'Protection', icon: <Droplet className="h-4 w-4" /> },
  { id: 'cleaning', label: 'Cleaning', icon: <ShowerHead className="h-4 w-4" /> },
  { id: 'restoration', label: 'Restoration', icon: <PaintRoller className="h-4 w-4" /> }
];

const ServiceDiscovery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  const filteredServices = services.filter(service => 
    activeCategory === 'all' || service.category === activeCategory
  );

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gradient">
            Choose Your Service
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto">
            Professional detailing services designed for Kerala's climate. Tap any service for instant pricing.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? 'bg-xera-red text-white'
                  : 'bg-xera-darkgray text-white/70 hover:text-white'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card 
                  className={`bg-xera-darkgray border-xera-lightgray hover:border-xera-red/50 transition-all cursor-pointer group relative overflow-hidden ${
                    selectedService === service.id ? 'ring-2 ring-xera-red' : ''
                  }`}
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                >
                  {service.popular && (
                    <Badge className="absolute top-3 right-3 bg-xera-red z-10">
                      Popular
                    </Badge>
                  )}
                  
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-xera-red/20 text-xera-red group-hover:bg-xera-red group-hover:text-white transition-colors">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{service.title}</h3>
                          <p className="text-white/60 text-sm">{service.shortDescription}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-sm text-white/60">Starting from</p>
                          <p className="text-xl font-bold text-xera-red">{service.startingPrice}</p>
                        </div>
                        <div className="flex items-center gap-1 text-white/60">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Features */}
                    <AnimatePresence>
                      {selectedService === service.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/10 pt-4 mb-4">
                            <h4 className="text-sm font-semibold mb-2 text-xera-red">What's Included:</h4>
                            <ul className="space-y-1">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                                  <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex gap-2">
                      <Link to={`/services/${service.id.replace(/-/g, "")}`} className="flex-1">
                        <Button 
                          variant="outline" 
                          className="w-full border-xera-red text-xera-red hover:bg-xera-red hover:text-white text-sm"
                          size="sm"
                        >
                          View Details
                        </Button>
                      </Link>
                      <Button 
                        className="bg-xera-red hover:bg-red-700 text-white text-sm"
                        size="sm"
                      >
                        Book Now
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Quick Action Bar */}
        <div className="mt-8 bg-gradient-to-r from-xera-darkgray to-black p-4 rounded-lg border border-xera-lightgray">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg mb-1">Need Help Choosing?</h3>
              <p className="text-white/70 text-sm">Our experts can recommend the best service for your vehicle</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-xera-red text-xera-red hover:bg-xera-red/10">
                Call Now
              </Button>
              <Button className="bg-xera-red hover:bg-red-700">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDiscovery;
