
import React from 'react';
import { Star, Car, Wrench, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const stats = [
  {
    icon: <Star className="h-6 w-6 text-yellow-500" />,
    value: "4.9/5",
    label: "Google Rating"
  },
  {
    icon: <Car className="h-6 w-6 text-blue-500" />,
    value: "1,500+",
    label: "Cars Transformed"
  },
  {
    icon: <Wrench className="h-6 w-6 text-green-500" />,
    value: "ISO-Grade",
    label: "Products & Tools"
  },
  {
    icon: <User className="h-6 w-6 text-purple-500" />,
    value: "Professional",
    label: "Detailing Experts"
  }
];

const testimonials = [
  {
    text: "Got my ceramic coating done here. Amazing quality. Easily the best auto detailing center in Ottapalam.",
    name: "Riyas",
    location: "Palappuram"
  },
  {
    text: "Great interior cleaning and dashboard polish. Worth the drive from Palakkad.",
    name: "Anju",
    location: "Palakkad"
  },
  {
    text: "The paint correction service at XERA made my car look brand new. Highly recommend their premium services.",
    name: "Aravind",
    location: "Shoranur"
  }
];

const CustomerTrust = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 md:py-24 bg-xera-darkgray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Why Kerala Car Owners Choose XERA
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card p-4 md:p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-xl md:text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-white/70 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-xera-lightgray border-xera-lightgray hover:border-xera-red transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-white/60">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTrust;
