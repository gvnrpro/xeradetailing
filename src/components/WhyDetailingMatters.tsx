
import React from 'react';
import { Sun, CloudRain, Banknote, Droplet } from 'lucide-react';

const detailingReasons = [
  {
    icon: <Sun className="w-10 h-10 text-yellow-500" />,
    title: "Survive the Sun",
    description: "UV rays in Kerala fade paint faster than you think.",
  },
  {
    icon: <CloudRain className="w-10 h-10 text-blue-500" />,
    title: "Beat the Rain",
    description: "Monsoons cause water spots, rust, and mold.",
  },
  {
    icon: <Banknote className="w-10 h-10 text-green-500" />,
    title: "True Clean = True Value",
    description: "Resale value rises with a well-maintained car.",
  },
  {
    icon: <Droplet className="w-10 h-10 text-pink-500" />,
    title: "It's More Than Looks",
    description: "Bacteria and allergens live in dirty car interiors.",
  }
];

const WhyDetailingMatters = () => {
  return (
    <section className="py-16 md:py-24 bg-xera-darkgray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Why Every Kerala Car Owner Needs Real Detailing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {detailingReasons.map((reason, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl group"
              data-aos="fade-up" 
              data-aos-delay={100 + index * 100}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-xera-lightgray group-hover:bg-xera-red/20 transition-colors">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{reason.title}</h3>
              <p className="text-white/70 text-center">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDetailingMatters;
