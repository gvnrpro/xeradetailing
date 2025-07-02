import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import EnhancedCTA from '@/components/enhanced/EnhancedCTA';
import TrustSignals from '@/components/enhanced/TrustSignals';
import { setPageMetadata, generateSchemaMarkup } from '@/utils/seoHelper';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';
import { motion } from 'framer-motion';

const CeramicCoatingShoranur = () => {
  useEffect(() => {
    setPageMetadata(
      "Ceramic Coating Shoranur | Professional Car Protection | XERA Detailing",
      "Premium ceramic coating services in Shoranur, Kerala. 9H protection, 5+ year warranty. Professional car detailing near Shoranur Railway Station. Book today!",
      "https://xeradetailing.in/ceramic-coating-shoranur",
      "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
      [
        "ceramic coating shoranur",
        "car detailing shoranur",
        "paint protection shoranur kerala",
        "ceramic coating near shoranur railway station",
        "professional car care shoranur",
        "auto detailing shoranur palakkad",
        "ceramic coating shoranur price",
        "car wash shoranur"
      ]
    );
    
    trackEvent('view_location_page', { location: 'shoranur' });
  }, []);

  const benefits = [
    {
      title: "9H Hardness Protection",
      description: "Military-grade ceramic coating that's 10x harder than factory paint"
    },
    {
      title: "5+ Year Warranty",
      description: "Long-term protection guaranteed with professional maintenance"
    },
    {
      title: "Hydrophobic Technology",
      description: "Water beads and rolls off, preventing water spots and stains"
    },
    {
      title: "UV Ray Protection",
      description: "Blocks 99% of harmful UV rays that cause paint fading"
    }
  ];

  const serviceAreas = [
    "Shoranur Railway Station Area",
    "Shoranur Town Center", 
    "Cherukulam",
    "Kuttippuram Road",
    "Bharathapuzha Riverside",
    "Shoranur Junction vicinity"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Ceramic Coating Shoranur | Professional Car Protection | XERA Detailing</title>
        <meta name="description" content="Premium ceramic coating services in Shoranur, Kerala. 9H protection, 5+ year warranty. Professional car detailing near Shoranur Railway Station." />
        <link rel="canonical" href="https://xeradetailing.in/ceramic-coating-shoranur" />
        <meta property="og:title" content="Ceramic Coating Shoranur | Professional Car Protection" />
        <meta property="og:description" content="Premium ceramic coating services in Shoranur with 5+ year warranty. Professional car protection near Railway Station." />
        <meta property="og:image" content="/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png" />
        <meta property="og:url" content="https://xeradetailing.in/ceramic-coating-shoranur" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Ceramic Coating",
            "provider": {
              "@type": "LocalBusiness",
              "name": "XERA Car Wash & Auto Detailing",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ottapalam",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              },
              "telephone": "+919605858483"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Shoranur",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Kerala"
                }
              }
            ],
            "offers": {
              "@type": "Offer",
              "price": "7999",
              "priceCurrency": "INR",
              "description": "Professional 9H ceramic coating with 5+ year warranty"
            }
          })}
        </script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav 
        items={[
          { label: 'Locations', href: '/' },
          { label: 'Ceramic Coating Shoranur', href: '' }
        ]} 
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-xera-darkgray/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Professional Ceramic Coating in Shoranur
              </motion.h1>
              <motion.p 
                className="text-xl text-white/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Premium car protection services for Shoranur residents. 9H ceramic coating with 5+ year warranty, just 15 minutes from Shoranur Railway Station.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <EnhancedCTA 
                  text="Book Ceramic Coating - ₹500 OFF"
                  href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%20want%20ceramic%20coating%20service%20in%20Shoranur"
                  variant="primary"
                  shimmerEffect={true}
                  className="text-lg px-8 py-4"
                  trackingLabel="hero_cta_shoranur"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
              Why Choose XERA for Ceramic Coating in Shoranur?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="bg-xera-darkgray rounded-lg p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold mb-3 text-xera-red">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Information */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gradient">Serving Shoranur & Surrounding Areas</h2>
                  <p className="text-white/80 mb-6">
                    Located just 15 minutes from Shoranur Railway Station, XERA Detailing provides premium ceramic coating services to car owners throughout the Shoranur region. Our state-of-the-art facility in Ottapalam offers convenient access for Shoranur residents.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4 text-xera-red">Service Areas in Shoranur:</h3>
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-xera-red rounded-full"></div>
                        <span className="text-white/70">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-xera-darkgray rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gradient">Easy Access from Shoranur</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-xera-red rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-bold mb-1">From Shoranur Railway Station</h4>
                        <p className="text-white/70">15-minute drive via Ottapalam-Shoranur Road</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-xera-red rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-bold mb-1">From Shoranur Town</h4>
                        <p className="text-white/70">Direct route via NH544, easy parking available</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-xera-red rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-bold mb-1">Pickup & Drop Service</h4>
                        <p className="text-white/70">Free pickup and drop for Shoranur customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gradient">Transparent Pricing for Shoranur Customers</h2>
              <p className="text-white/80 mb-12">No hidden costs, upfront pricing with warranty included</p>
              
              <div className="bg-gradient-to-r from-xera-red to-red-700 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Premium Ceramic Coating Package</h3>
                <div className="text-4xl font-bold mb-2">
                  <span className="line-through text-white/50">₹12,999</span>
                  <span className="ml-4">₹7,999</span>
                </div>
                <p className="text-white/90 mb-6">Complete ceramic coating with 5+ year warranty</p>
                <ul className="text-left max-w-md mx-auto space-y-2 mb-8">
                  <li>✓ Paint correction & preparation</li>
                  <li>✓ 9H ceramic coating application</li>
                  <li>✓ Interior detailing included</li>
                  <li>✓ 5+ year warranty coverage</li>
                  <li>✓ Free pickup/drop in Shoranur</li>
                  <li>✓ Maintenance kit included</li>
                </ul>
                <EnhancedCTA 
                  text="Book Now - Save ₹5,000"
                  href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%20want%20to%20book%20ceramic%20coating%20from%20Shoranur%20at%20the%20discounted%20price"
                  variant="secondary"
                  shimmerEffect={true}
                  className="bg-white text-black hover:bg-gray-100"
                  trackingLabel="pricing_cta_shoranur"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals with default variant */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Trusted by Car Owners Across Kerala</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <TrustSignals variant="review-widget" />
                <TrustSignals variant="certification" />
                <TrustSignals variant="customer-photos" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-gradient">Ready to Protect Your Car?</h2>
              <p className="text-white/80 mb-8">
                Join hundreds of satisfied customers from Shoranur who trust XERA for premium car protection.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="tel:+919605858483"
                  className="bg-xera-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Call Now: +91 96058 58483
                </a>
                <EnhancedCTA 
                  text="WhatsApp for Quote"
                  href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%20need%20a%20quote%20for%20ceramic%20coating%20in%20Shoranur"
                  variant="outline"
                  className="px-8 py-4"
                  trackingLabel="contact_whatsapp_shoranur"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CeramicCoatingShoranur;
