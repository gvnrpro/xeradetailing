import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Calendar, CheckCircle, Shield, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SocialProofSystemProps {
  variant?: 'testimonials' | 'stats' | 'recent-activity' | 'certifications';
  className?: string;
}

const testimonialData = [
  {
    name: "Rahul Krishnan",
    location: "Ottapalam",
    rating: 5,
    text: "Best ceramic coating in Kerala! My car still looks brand new after 8 months of monsoon.",
    service: "Ceramic Coating",
    date: "2 days ago"
  },
  {
    name: "Priya Menon", 
    location: "Shoranur",
    rating: 5,
    text: "Professional service and amazing results. Worth every rupee spent on paint protection.",
    service: "Paint Protection",
    date: "1 week ago"
  },
  {
    name: "Ajith Thomas",
    location: "Pattambi", 
    rating: 5,
    text: "XERA team exceeded my expectations. The ceramic coating quality is outstanding.",
    service: "Premium Detail + Coating",
    date: "3 days ago"
  }
];

const statsData = [
  { number: "500+", label: "Cars Protected", icon: <CheckCircle className="h-5 w-5" /> },
  { number: "4.9/5", label: "Average Rating", icon: <Star className="h-5 w-5" /> },
  { number: "5+ Years", label: "Protection Warranty", icon: <Shield className="h-5 w-5" /> },
  { number: "24hr", label: "Booking Response", icon: <Clock className="h-5 w-5" /> }
];

const recentActivity = [
  "Vinod K. from Mannarkkad just booked Ceramic Coating",
  "Sreya M. from Perinthalmanna left a 5-star review",
  "2 new appointments scheduled for this week in Ottapalam",
  "Jithin R. from Thrissur just completed Premium Detail package"
];

const certifications = [
  { name: "Certified Ceramic Pro Installer", verified: true },
  { name: "IDA Professional Member", verified: true },
  { name: "Kerala Auto Club Partner", verified: true },
  { name: "Insurance Approved Service", verified: true }
];

const TestimonialsView = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {testimonialData.map((testimonial, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <Card className="h-full bg-xera-darkgray border-xera-lightgray hover:border-xera-red/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <div className="flex items-center gap-1 text-sm text-white/60">
                  <MapPin className="h-3 w-3" />
                  {testimonial.location}
                </div>
              </div>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            
            <p className="text-white/80 text-sm mb-3">"{testimonial.text}"</p>
            
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs">
                {testimonial.service}
              </Badge>
              <span className="text-xs text-white/50">{testimonial.date}</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);

const StatsView = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {statsData.map((stat, index) => (
      <motion.div
        key={index}
        className="text-center p-4 bg-xera-darkgray rounded-lg border border-xera-lightgray"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="flex justify-center mb-2 text-xera-red">
          {stat.icon}
        </div>
        <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
        <div className="text-sm text-white/60">{stat.label}</div>
      </motion.div>
    ))}
  </div>
);

const RecentActivityView = () => (
  <div className="space-y-3">
    {recentActivity.map((activity, index) => (
      <motion.div
        key={index}
        className="flex items-center gap-3 p-3 bg-xera-darkgray rounded-lg border border-xera-lightgray"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <p className="text-white/80 text-sm">{activity}</p>
      </motion.div>
    ))}
  </div>
);

const CertificationsView = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {certifications.map((cert, index) => (
      <motion.div
        key={index}
        className="flex items-center gap-3 p-3 bg-xera-darkgray rounded-lg border border-xera-lightgray"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <CheckCircle className="h-5 w-5 text-green-400" />
        <span className="text-white font-medium text-sm">{cert.name}</span>
        {cert.verified && (
          <Badge variant="outline" className="ml-auto text-xs text-green-400 border-green-400">
            Verified
          </Badge>
        )}
      </motion.div>
    ))}
  </div>
);

const SocialProofSystem = ({ variant = 'testimonials', className }: SocialProofSystemProps) => {
  const renderContent = () => {
    switch (variant) {
      case 'testimonials':
        return <TestimonialsView />;
      case 'stats':
        return <StatsView />;
      case 'recent-activity':
        return <RecentActivityView />;
      case 'certifications':
        return <CertificationsView />;
      default:
        return <TestimonialsView />;
    }
  };
  
  return (
    <section className={`py-8 ${className}`}>
      <div className="container mx-auto px-4">
        {renderContent()}
      </div>
    </section>
  );
};

export default SocialProofSystem;
