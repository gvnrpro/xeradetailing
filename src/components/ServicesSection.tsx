
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Soap, Droplet, PaintRoller, Headlight, Engine, Car } from 'lucide-react';

const services = [
  {
    id: "express-wash",
    icon: <Soap className="h-6 w-6" />,
    title: "Express Wash",
    description: "Fast, spotless cleaning with pH-balanced foam",
    pricing: [
      { vehicle: "Sedan", price: "₹400" },
      { vehicle: "SUV", price: "₹500" },
      { vehicle: "Bike", price: "₹200" },
      { vehicle: "Scooty", price: "₹150" }
    ]
  },
  {
    id: "interior-detailing",
    icon: <Car className="h-6 w-6" />,
    title: "Interior Detailing",
    description: "Deep vacuum, steam sanitization, dashboard polish, seat shampoo",
    pricing: []
  },
  {
    id: "ceramic-coating",
    icon: <Droplet className="h-6 w-6" />,
    title: "Ceramic Coating",
    description: "9H+ hardness, hydrophobic layer, UV protection — the ultimate defense",
    pricing: []
  },
  {
    id: "paint-correction",
    icon: <PaintRoller className="h-6 w-6" />,
    title: "Paint Correction",
    description: "Removes swirl marks, oxidation, scratches – paint like new again",
    pricing: []
  },
  {
    id: "headlight-restoration",
    icon: <Headlight className="h-6 w-6" />,
    title: "Headlight Restoration",
    description: "Clears yellowing, improves night visibility and safety",
    pricing: []
  },
  {
    id: "engine-bay",
    icon: <Engine className="h-6 w-6" />,
    title: "Engine Bay Cleaning",
    description: "Professional degreasing & detailing for a showroom-clean engine",
    pricing: []
  }
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("express-wash");
  
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">XERA Auto Care Services</h2>
        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
          We offer specialized care for every vehicle type — cars, SUVs, bikes, and more.
        </p>

        <Tabs defaultValue="express-wash" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-xera-darkgray mb-8">
            {services.map(service => (
              <TabsTrigger 
                key={service.id} 
                value={service.id}
                className="data-[state=active]:bg-xera-red data-[state=active]:text-white"
              >
                <div className="flex flex-col items-center">
                  {service.icon}
                  <span className="mt-1 hidden md:block">{service.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {services.map(service => (
            <TabsContent key={service.id} value={service.id} className="focus:outline-none">
              <Card className="bg-xera-darkgray border-xera-lightgray">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-xera-red/20 mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  
                  <p className="text-white/70 mb-6">{service.description}</p>
                  
                  {service.pricing.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.pricing.map((item, index) => (
                        <div key={index} className="bg-xera-lightgray rounded p-4 flex justify-between items-center">
                          <span>{item.vehicle}</span>
                          <span className="font-bold text-xera-red">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
