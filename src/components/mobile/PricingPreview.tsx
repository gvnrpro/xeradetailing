
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  duration: string;
  popular?: boolean;
  description: string;
  features: string[];
  vehicles: string[];
  savings?: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'express',
    name: 'Express Care',
    price: '₹500',
    duration: '45 mins',
    description: 'Perfect for regular maintenance',
    vehicles: ['Hatchback', 'Sedan'],
    features: [
      'Exterior wash & dry',
      'Tire cleaning',
      'Interior vacuum',
      'Dashboard wipe',
      'Window cleaning'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Detail',
    price: '₹2,500',
    originalPrice: '₹3,000',
    duration: '3-4 hours',
    popular: true,
    description: 'Complete interior & exterior care',
    vehicles: ['All vehicles'],
    savings: 'Save ₹500',
    features: [
      'Deep exterior wash',
      'Paint decontamination',
      'Interior steam cleaning',
      'Leather conditioning',
      'Engine bay cleaning',
      'Tire shine & protection'
    ]
  },
  {
    id: 'ceramic',
    name: 'Ceramic Protection',
    price: '₹8,000',
    duration: '1-2 days',
    description: 'Long-term paint protection',
    vehicles: ['Sedan', 'SUV', 'Luxury'],
    features: [
      'Paint correction',
      '9H ceramic coating',
      'Interior detailing',
      'Engine bay cleaning',
      '5-year protection',
      'Maintenance kit included'
    ]
  }
];

const PricingPreview = () => {
  const [selectedTier, setSelectedTier] = useState('premium');

  return (
    <section className="py-8 bg-gradient-to-b from-background to-xera-darkgray/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gradient">
            Transparent Pricing
          </h2>
          <p className="text-white/70 text-sm">No hidden costs. Quality guaranteed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card 
                className={`relative bg-xera-darkgray border-2 transition-all cursor-pointer ${
                  tier.popular 
                    ? 'border-xera-red shadow-lg shadow-xera-red/20 scale-105' 
                    : selectedTier === tier.id
                    ? 'border-xera-red/50'
                    : 'border-xera-lightgray hover:border-xera-red/30'
                }`}
                onClick={() => setSelectedTier(tier.id)}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-xera-red">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg">{tier.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-xera-red">{tier.price}</span>
                    {tier.originalPrice && (
                      <span className="text-lg text-white/50 line-through">{tier.originalPrice}</span>
                    )}
                  </div>
                  {tier.savings && (
                    <Badge variant="outline" className="border-green-400 text-green-400 mx-auto">
                      {tier.savings}
                    </Badge>
                  )}
                  <p className="text-sm text-white/60">{tier.description}</p>
                  <p className="text-xs text-white/50">Duration: {tier.duration}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-white/60 mb-2">SUITABLE FOR:</p>
                    <div className="flex flex-wrap gap-1">
                      {tier.vehicles.map((vehicle) => (
                        <Badge key={vehicle} variant="outline" className="text-xs">
                          {vehicle}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <Button 
                      className={`w-full ${
                        tier.popular 
                          ? 'bg-xera-red hover:bg-red-700' 
                          : 'bg-xera-darkgray border border-xera-red text-xera-red hover:bg-xera-red hover:text-white'
                      }`}
                      variant={tier.popular ? 'default' : 'outline'}
                    >
                      Book {tier.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="w-full text-white/60 hover:text-white"
                    >
                      <Calculator className="mr-2 h-4 w-4" />
                      Get Custom Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-400" />
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-400" />
              <span>Certified technicians</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-400" />
              <span>Premium products only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
