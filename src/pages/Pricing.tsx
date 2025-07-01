
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import { Button } from '@/components/ui/button';
import { Check, Star, Shield, Clock } from 'lucide-react';
import { setPageMetadata, generateSchemaMarkup } from '@/utils/seoHelper';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';
import StickyCTA from '@/components/enhanced/StickyCTA';
import { motion } from 'framer-motion';

const Pricing = () => {
  useEffect(() => {
    setPageMetadata(
      "Ceramic Coating & Car Detailing Prices | XERA Kerala",
      "Transparent pricing for ceramic coating, car detailing, and paint protection services in Kerala. Professional automotive care packages starting from ₹499. Get instant quotes.",
      "https://xeradetailing.in/pricing",
      "https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
      [
        "ceramic coating price kerala",
        "car detailing cost ottapalam",
        "paint protection pricing palakkad",
        "auto detailing packages kerala",
        "ceramic coating cost palakkad",
        "car wash prices ottapalam",
        "detailing service rates kerala"
      ]
    );
    
    trackEvent('view_pricing_page');
  }, []);

  const pricingTiers = [
    {
      name: "Express Wash",
      price: "₹499",
      originalPrice: "₹699",
      category: "Basic Care",
      duration: "45 mins",
      popular: false,
      features: [
        "Exterior foam wash & rinse",
        "Interior vacuuming",
        "Tire cleaning & dressing",
        "Glass cleaning (inside & out)",
        "Dashboard wiping",
        "Quick exterior dry"
      ],
      ideal: "Regular maintenance, quick refresh"
    },
    {
      name: "Premium Detailing",
      price: "₹2,499",
      originalPrice: "₹3,499",
      category: "Complete Care",
      duration: "4-5 hours",
      popular: true,
      features: [
        "Complete exterior wash & clay bar",
        "Paint correction & polishing",
        "Deep interior cleaning",
        "Leather conditioning",
        "Engine bay cleaning",
        "Tire & rim detailing",
        "Interior sanitization",
        "Glass coating application"
      ],
      ideal: "Monthly maintenance, comprehensive care"
    },
    {
      name: "Ceramic Coating",
      price: "₹7,999",
      originalPrice: "₹12,999",
      category: "Premium Protection",
      duration: "1-2 days",
      popular: false,
      features: [
        "Paint correction & preparation",
        "9H ceramic coating application",
        "5+ year warranty coverage",
        "Hydrophobic protection",
        "UV & chemical resistance",
        "Complete interior detailing",
        "Engine bay protection",
        "Maintenance kit included"
      ],
      ideal: "Long-term protection, new cars"
    }
  ];

  const additionalServices = [
    { name: "Paint Protection Film (PPF)", price: "₹15,999+", description: "Physical protection against stone chips" },
    { name: "Headlight Restoration", price: "₹1,499", description: "Restore clarity and brightness" },
    { name: "Engine Bay Detailing", price: "₹899", description: "Deep cleaning and protection" },
    { name: "Interior Deep Clean", price: "₹1,999", description: "Comprehensive interior restoration" },
    { name: "Scratch Removal", price: "₹999+", description: "Professional paint correction" },
    { name: "Odor Elimination", price: "₹799", description: "Complete odor removal treatment" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BreadcrumbNav currentPage="Pricing" />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Transparent Pricing for Premium Care
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Professional automotive detailing services with upfront pricing. No hidden costs, guaranteed satisfaction.
            </p>
          </header>

          {/* Main Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`relative bg-xera-darkgray rounded-xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-xera-red shadow-lg shadow-xera-red/20' 
                    : 'border-white/10 hover:border-xera-red/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-xera-red text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" /> Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-xera-red text-sm font-medium mb-4">{tier.category}</p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gradient">{tier.price}</span>
                    <span className="text-white/50 line-through ml-2">{tier.originalPrice}</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-4 text-sm text-white/70">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {tier.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Shield className="w-4 h-4" /> Warranty
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-xera-red flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <p className="text-sm text-white/60">
                    <strong>Best for:</strong> {tier.ideal}
                  </p>
                </div>

                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-xera-red hover:bg-red-700' 
                      : 'bg-white/10 hover:bg-xera-red border border-white/20'
                  }`}
                  onClick={() => trackEvent('pricing_cta_click', { package: tier.name })}
                >
                  Book {tier.name}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  className="bg-xera-darkgray rounded-lg p-6 border border-white/10 hover:border-xera-red/50 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold mb-2">{service.name}</h3>
                  <p className="text-xera-red font-bold text-lg mb-2">{service.price}</p>
                  <p className="text-white/70 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pricing Notes */}
          <div className="bg-xera-darkgray rounded-lg p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-center">Pricing Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-3 text-xera-red">What's Included:</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Free vehicle inspection & consultation</li>
                  <li>• Premium products & materials</li>
                  <li>• Professional application by experts</li>
                  <li>• Quality guarantee on all services</li>
                  <li>• Post-service care instructions</li>
                  <li>• Customer support & maintenance advice</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-xera-red">Payment Options:</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Cash payments accepted</li>
                  <li>• All major credit/debit cards</li>
                  <li>• UPI & digital wallet payments</li>
                  <li>• Bank transfer options</li>
                  <li>• Flexible payment plans available</li>
                  <li>• Corporate billing available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Book Your Service?</h3>
            <p className="text-white/70 mb-6">
              Get a personalized quote based on your vehicle's specific needs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="tel:+919605858483"
                className="bg-xera-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call for Quote
              </a>
              <a 
                href="https://wa.me/919605858483"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                WhatsApp Quote
              </a>
            </div>
          </div>
        </div>

        {/* Pricing Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateSchemaMarkup('ItemList', {
              name: "XERA Auto Detailing Service Prices",
              description: "Professional car detailing and ceramic coating service pricing in Kerala",
              itemListElement: pricingTiers.map((tier, index) => ({
                "@type": "Offer",
                position: index + 1,
                name: tier.name,
                description: tier.ideal,
                price: tier.price.replace('₹', ''),
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                validFrom: "2025-01-01",
                validThrough: "2025-12-31",
                seller: {
                  "@type": "LocalBusiness",
                  name: "XERA Car Wash & Auto Detailing"
                }
              }))
            })
          }}
        />
      </main>
      
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
};

export default Pricing;
