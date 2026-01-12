import { Link } from 'react-router-dom';
import { Sparkles, Shield, Car, Droplets, Wrench, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Shield,
    title: "Ceramic Coating",
    description: "Premium 9H ceramic protection with 5+ years warranty. Hydrophobic coating that protects against UV, scratches, and chemical stains.",
    price: "From ₹7,999",
    link: "/services/ceramic-coating",
    features: ["9H Hardness", "5+ Years Protection", "Hydrophobic"]
  },
  {
    icon: Sparkles,
    title: "Paint Correction",
    description: "Professional multi-stage paint correction to remove swirl marks, scratches, and oxidation. Restore your car's showroom finish.",
    price: "From ₹4,999",
    link: "/services",
    features: ["Swirl Removal", "Scratch Repair", "Mirror Finish"]
  },
  {
    icon: Car,
    title: "Interior Detailing",
    description: "Deep cleaning and sanitization of your car's interior. Steam cleaning, leather conditioning, and odor elimination.",
    price: "From ₹2,499",
    link: "/services",
    features: ["Steam Cleaning", "Leather Care", "Sanitization"]
  },
  {
    icon: Droplets,
    title: "Express Wash",
    description: "Quick yet thorough exterior wash with premium products. Perfect for regular maintenance between full details.",
    price: "From ₹499",
    link: "/services/express-wash",
    features: ["30 Minutes", "Foam Wash", "Tire Shine"]
  },
  {
    icon: Wrench,
    title: "Engine Bay Cleaning",
    description: "Professional engine bay detailing to remove grease, dirt, and grime. Improve engine cooling and spot leaks early.",
    price: "From ₹1,499",
    link: "/services/engine-bay-cleaning",
    features: ["Degreasing", "Protection", "Inspection"]
  },
  {
    icon: Sun,
    title: "Headlight Restoration",
    description: "Restore cloudy, yellowed headlights to crystal clear condition. Improve visibility and vehicle appearance.",
    price: "From ₹999",
    link: "/services",
    features: ["UV Coating", "Clear Vision", "Like New"]
  }
];

const SimpleServiceGrid = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-xera-darkgray to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-xera-red">Premium</span> Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional auto detailing services in Ottapalam, Palakkad. We use only premium products and techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-xera-red/50 transition-all duration-300 hover:shadow-lg hover:shadow-xera-red/10 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-xera-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-xera-red/20 transition-colors">
                  <service.icon className="w-6 h-6 text-xera-red" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{service.title}</h3>
                  <span className="text-xera-red font-semibold text-sm">{service.price}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-xera-red/10 text-xera-red text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Link to={service.link}>
                <Button 
                  variant="outline" 
                  className="w-full border-xera-red/50 text-xera-red hover:bg-xera-red hover:text-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services">
            <Button size="lg" className="bg-xera-red hover:bg-xera-red/90 text-white">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SimpleServiceGrid;
