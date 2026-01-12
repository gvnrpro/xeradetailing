import { Award, Car, Clock, Star, Shield, Users } from 'lucide-react';

const stats = [
  {
    icon: Car,
    value: "500+",
    label: "Cars Detailed",
    description: "Premium detailing services"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Google Rating",
    description: "Based on customer reviews"
  },
  {
    icon: Clock,
    value: "5+",
    label: "Years Experience",
    description: "Professional expertise"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Satisfaction",
    description: "Customer guarantee"
  }
];

const SimpleStatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-xera-darkgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-xera-red">Kerala's</span> Car Enthusiasts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has made us the preferred choice for premium auto detailing in Ottapalam and surrounding areas.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-xera-red/50 transition-all duration-300 hover:shadow-lg hover:shadow-xera-red/10"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-xera-red/10 mb-4">
                <stat.icon className="w-7 h-7 text-xera-red" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-xera-red mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleStatsSection;
