
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Droplet, 
  PaintRoller, 
  Car, 
  Wrench, 
  ShowerHead, 
  SprayCan,
  CircleDollarSign,
  Calendar
} from 'lucide-react';

// Updated complete service data with more comprehensive information
const services = [
  {
    id: "express-wash",
    icon: <ShowerHead className="h-6 w-6" />,
    title: "Express Wash",
    description: "A fast yet thorough cleaning with pH-balanced foam specially formulated for Kerala's humid climate. Our Express Wash removes road grime, dust, and light contaminants without harming your paintwork.",
    process: [
      "Pre-rinse to remove loose dirt",
      "Application of pH-balanced foam",
      "Hand wash with microfiber mitts",
      "Rinse with filtered water",
      "Soft cloth hand-drying"
    ],
    benefits: [
      "Safely removes contaminants without scratching",
      "Preserves existing wax and protection",
      "Restores natural shine of paint surface",
      "Prevents buildup of corrosive elements"
    ],
    beforeAfterImages: {
      before: "/assets/express-wash-before.jpg", 
      after: "/assets/express-wash-after.jpg"
    },
    pricing: [
      { vehicle: "Sedan", price: "₹400" },
      { vehicle: "SUV", price: "₹500" },
      { vehicle: "Bike", price: "₹200" },
      { vehicle: "Scooty", price: "₹150" }
    ],
    estimatedTime: "30-45 minutes"
  },
  {
    id: "interior-detailing",
    icon: <Car className="h-6 w-6" />,
    title: "Interior Detailing",
    description: "Complete interior rejuvenation using steam sanitization and premium cleaning agents. Our process eliminates Kerala's high humidity-caused odors and prevents mold and mildew growth in your vehicle.",
    process: [
      "Thorough vacuuming including hard-to-reach areas",
      "Steam cleaning of seats, carpets and upholstery",
      "Dashboard and trim detailed cleaning with UV protection",
      "Glass and mirror cleaning with anti-fog treatment",
      "Application of anti-microbial treatment"
    ],
    benefits: [
      "Removes allergens and bacteria for healthier cabin air",
      "Prevents mold growth common in Kerala's humid climate",
      "Restores interior surfaces to like-new condition",
      "UV protection for dashboard prevents cracking and fading"
    ],
    beforeAfterImages: {
      before: "/assets/interior-before.jpg", 
      after: "/assets/interior-after.jpg"
    },
    pricing: [],
    estimatedTime: "3-5 hours"
  },
  {
    id: "ceramic-coating",
    icon: <Droplet className="h-6 w-6" />,
    title: "Ceramic Coating",
    description: "Premium grade SiO2 ceramic coating with 9H+ hardness that creates a permanent bond with your vehicle's paint, providing unmatched protection against Kerala's harsh sun and monsoon conditions.",
    process: [
      "Paint decontamination and clay bar treatment",
      "Machine polishing to remove imperfections",
      "IPA wipedown to prepare surface",
      "Application of ISO-grade ceramic coating",
      "24-hour controlled curing process"
    ],
    benefits: [
      "Up to 5 years of protection with proper maintenance",
      "Exceptional UV protection critical in Kerala's intense sun",
      "Superior water beading and self-cleaning properties for monsoon season",
      "Enhanced gloss and depth that makes your paint truly stand out",
      "Resistance against environmental contaminants and bird droppings"
    ],
    beforeAfterImages: {
      before: "/assets/ceramic-before.jpg", 
      after: "/assets/ceramic-after.jpg"
    },
    videoUrl: "https://www.youtube.com/embed/X_YioNyNiv4",
    pricing: [],
    estimatedTime: "1-3 days"
  },
  {
    id: "paint-correction",
    icon: <PaintRoller className="h-6 w-6" />,
    title: "Paint Correction",
    description: "Multi-stage machine polishing to remove swirl marks, oxidation, and scratches, restoring your paint to a better-than-showroom finish. Essential for older vehicles or those exposed to Kerala's harsh environmental conditions.",
    process: [
      "Paint depth measurement for safety",
      "Multiple stages of machine polishing",
      "Graduated abrasive compounds for optimal results",
      "Final refinement stage for maximum gloss",
      "IPA wipedown to reveal true correction results"
    ],
    benefits: [
      "Removes years of damage and oxidation caused by sun exposure",
      "Eliminates swirl marks from improper washing techniques",
      "Restores original color depth and clarity",
      "Provides perfect base for ceramic coating or other protectants",
      "Dramatically improves overall appearance and value"
    ],
    beforeAfterImages: {
      before: "/assets/paint-correction-before.jpg", 
      after: "/assets/paint-correction-after.jpg"
    },
    videoUrl: "https://www.youtube.com/embed/Zl_iSYYGBiY",
    pricing: [],
    estimatedTime: "1-2 days"
  },
  {
    id: "headlight-restoration",
    icon: <SprayCan className="h-6 w-6" />,
    title: "Headlight Restoration",
    description: "Complete restoration of yellowed, hazy, or oxidized headlights to improve visibility and safety. Crucial for older vehicles navigating Kerala's occasional nighttime fog or heavy monsoon rainfall.",
    process: [
      "Wet sanding with progressive grit sandpaper",
      "Machine polishing with specialized compounds",
      "Application of UV-resistant protective coating",
      "Heat treatment for coating curing"
    ],
    benefits: [
      "Improves nighttime visibility by up to 70%",
      "Enhances safety during Kerala's heavy monsoon rainfall",
      "Restores factory-new appearance",
      "UV protection prevents rapid re-oxidation",
      "More cost-effective than headlight replacement"
    ],
    beforeAfterImages: {
      before: "/assets/headlight-before.jpg", 
      after: "/assets/headlight-after.jpg"
    },
    pricing: [],
    estimatedTime: "1-2 hours"
  },
  {
    id: "engine-bay",
    icon: <Wrench className="h-6 w-6" />,
    title: "Engine Bay Cleaning",
    description: "Professional degreasing and detailing for your engine bay, especially beneficial in Kerala where high humidity can accelerate corrosion and dust accumulation in engine components.",
    process: [
      "Careful covering of sensitive electrical components",
      "Application of specialized engine degreaser",
      "Steam cleaning for stubborn areas",
      "Detail cleaning of all surfaces",
      "Application of protectants to prevent corrosion"
    ],
    benefits: [
      "Prevents corrosion of engine components in Kerala's humid climate",
      "Makes fluid leaks and mechanical issues easier to detect",
      "Extends life of rubber hoses and components",
      "Improves cooling efficiency",
      "Creates professional presentation for vehicle enthusiasts"
    ],
    beforeAfterImages: {
      before: "/assets/engine-before.jpg", 
      after: "/assets/engine-after.jpg"
    },
    pricing: [],
    estimatedTime: "1-3 hours"
  }
];

// Before/After Image Comparison Slider component
const BeforeAfterSlider = ({ before, after }) => {
  const [position, setPosition] = useState(50);
  
  const handleSliderChange = (value) => {
    setPosition(value[0]);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-md">
      <div className="absolute inset-0 z-10">
        <div 
          className="absolute inset-0 bg-black/20 z-20 flex items-center justify-center text-white font-bold text-lg"
          style={{ right: `${100 - position}%` }}
        >
          BEFORE
        </div>
        <img 
          src={before || "/placeholder.svg"} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div 
        className="absolute inset-0 z-20 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div 
          className="absolute inset-0 bg-black/20 z-20 flex items-center justify-center text-white font-bold text-lg"
        >
          AFTER
        </div>
        <img 
          src={after || "/placeholder.svg"} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${100 / (position/100)}%` }}
        />
      </div>
      <div 
        className="absolute inset-0 z-30 flex items-center pointer-events-none"
        style={{ left: `calc(${position}% - 1px)` }}
      >
        <div className="w-0.5 h-full bg-xera-red"></div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 z-40 px-4">
        <Slider
          value={[position]}
          min={10}
          max={90}
          step={1}
          onValueChange={handleSliderChange}
          className="z-40"
        />
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("express-wash");
  
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">XERA Auto Care Services</h2>
        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
          Professional detailing services tailored for Kerala's climate — protecting your vehicle from intense UV, monsoon rain, and coastal salt exposure.
        </p>

        <Tabs defaultValue="express-wash" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-xera-darkgray mb-8 h-auto">
            {services.map(service => (
              <TabsTrigger 
                key={service.id} 
                value={service.id}
                className="data-[state=active]:bg-xera-red data-[state=active]:text-white py-3"
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
              <Card className="bg-xera-darkgray border-xera-lightgray shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-xera-red/20 mr-4">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                      
                      <p className="text-white/80 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-xera-red mb-3">Our Process</h4>
                        <ul className="ml-6 space-y-2">
                          {service.process.map((step, index) => (
                            <li key={index} className="text-white/80 list-disc">{step}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-xera-red mb-3">Benefits</h4>
                        <ul className="ml-6 space-y-2">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="text-white/80 list-disc">{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {service.pricing.length > 0 ? (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-xera-red mb-3">Pricing</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.pricing.map((item, index) => (
                              <div key={index} className="bg-xera-lightgray rounded-md p-3 flex justify-between items-center">
                                <span>{item.vehicle}</span>
                                <span className="font-bold text-xera-red">{item.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="mb-6">
                          <div className="flex items-center gap-4 mb-2">
                            <CircleDollarSign className="text-xera-red h-5 w-5" />
                            <h4 className="text-lg font-semibold">Custom Pricing</h4>
                          </div>
                          <p className="text-white/70 mb-4">Pricing varies based on vehicle size and condition. Contact us for a personalized quote.</p>
                          <Button className="bg-xera-red hover:bg-xera-red/90">
                            Get a Custom Quote
                          </Button>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 text-sm text-white/60 mt-4">
                        <Calendar className="h-4 w-4" />
                        <span>Estimated time: {service.estimatedTime}</span>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 space-y-6">
                      <div className="rounded-lg overflow-hidden h-64 md:h-80">
                        <AspectRatio ratio={16 / 9} className="bg-muted">
                          {service.beforeAfterImages?.before && service.beforeAfterImages?.after ? (
                            <BeforeAfterSlider 
                              before={service.beforeAfterImages.before} 
                              after={service.beforeAfterImages.after}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-xera-lightgray">
                              <p className="text-white/50">Before/After images coming soon</p>
                            </div>
                          )}
                        </AspectRatio>
                      </div>
                      
                      {service.videoUrl && (
                        <div className="rounded-lg overflow-hidden">
                          <AspectRatio ratio={16 / 9}>
                            <iframe 
                              src={service.videoUrl}
                              title={`${service.title} Process Video`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full border-0 rounded-lg"
                            ></iframe>
                          </AspectRatio>
                        </div>
                      )}
                      
                      <div className="flex justify-center">
                        <Button size="lg" className="bg-xera-red hover:bg-xera-red/90 px-8">
                          <Calendar className="mr-2 h-5 w-5" />
                          Book This Service
                        </Button>
                      </div>
                    </div>
                  </div>
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
