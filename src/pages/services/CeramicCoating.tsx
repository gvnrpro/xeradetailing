
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BeforeAfterShowcase from '@/components/BeforeAfterShowcase';
import { setPageMetadata, generateProductSchema, generateFaqSchema } from '@/utils/seoHelper';
import { getImageAlt } from '@/utils/imageOptimization';

const CeramicCoating = () => {
  useEffect(() => {
    // Enhanced SEO metadata setup
    setPageMetadata(
      "Best Ceramic Coating Service in Ottapalam, Palakkad | XERA Detailing", 
      "Premium 9H ceramic coating service in Ottapalam, Palakkad. Professional paint protection that lasts for 5+ years. Mobile service available across Kerala.",
      "https://xeradetailing.in/services/ceramic-coating",
      "https://xeradetailing.in/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png",
      [
        "ceramic coating Ottapalam",
        "car ceramic coating near me",
        "paint protection services Palakkad",
        "best ceramic coating shop Kerala",
        "9H ceramic coating",
        "hydrophobic coating car",
        "professional ceramic coating service",
        "mobile ceramic coating experts",
        "long lasting ceramic coat for cars",
        "car paint protection Ottapalam"
      ]
    );
  }, []);

  const ceramicCoatingFAQs = [
    {
      question: "How long does ceramic coating last in Kerala's climate?",
      answer: "Our professional ceramic coating lasts 5+ years in Kerala's climate with proper maintenance. The coating forms a chemical bond with your car's paint, providing superior protection against the region's intense sun, heavy monsoons, and high humidity."
    },
    {
      question: "Is ceramic coating worth it for cars in Ottapalam?",
      answer: "Absolutely! In Ottapalam and surrounding areas of Palakkad, vehicles face harsh environmental conditions including intense sun, heavy monsoon rain, and road dust. Ceramic coating provides superior protection against these elements while maintaining your car's showroom shine for years."
    },
    {
      question: "How much does ceramic coating cost in Palakkad?",
      answer: "Our premium ceramic coating packages start at ₹7,999 for small cars. The price varies based on vehicle size, condition, and any additional preparation work required such as paint correction. We offer free consultations and quotes tailored to your specific vehicle."
    },
    {
      question: "Do you offer mobile ceramic coating service?",
      answer: "Yes, we provide mobile ceramic coating service across Ottapalam, Shoranur, Pattambi, Palakkad, and nearby areas. Our fully-equipped mobile unit brings the same professional-grade service and equipment to your location."
    },
    {
      question: "How does your ceramic coating compare to wax or sealants?",
      answer: "Unlike traditional wax or sealants that last 2-3 months, our ceramic coating creates a permanent chemical bond with your vehicle's paint, providing protection for 5+ years. It offers superior hardness (9H+), extreme hydrophobic properties, and enhanced resistance to UV damage, chemical stains, and scratches."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
            <img 
              src="/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png" 
              alt={getImageAlt("Premium ceramic coating service with water beading effect on car surface", "Ottapalam")}
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
                Premium Ceramic Coating in Ottapalam
              </h1>
              
              <p className="text-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                Kerala's highest-rated ceramic coating service with 5+ years protection against harsh tropical conditions. Serving Ottapalam, Palakkad, and surrounding areas.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                {[
                  "9H+ Hardness Rating", 
                  "Ultra Hydrophobic", 
                  "UV Resistant", 
                  "Chemical Protection", 
                  "5-Year Warranty"
                ].map((feature, index) => (
                  <motion.span 
                    key={index}
                    className="bg-xera-darkgray/60 border border-xera-lightgray px-4 py-2 rounded-full text-sm flex items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    <Shield className="w-4 h-4 text-xera-red mr-2" />
                    {feature}
                  </motion.span>
                ))}
              </div>
              
              <motion.div 
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button size="lg" className="bg-xera-red hover:bg-red-700 text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </Button>
                
                <a href="tel:+919605858483">
                  <Button variant="outline" size="lg" className="border-white/30 hover:border-white text-white hover:bg-white/10">
                    Call Now: +91 9605858483
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Before/After Showcase */}
        <BeforeAfterShowcase title="Ceramic Coating Transformations" />
        
        {/* Benefits Section */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Benefits of Our Premium Ceramic Coating
              </h2>
              <p className="text-white/70 max-w-3xl mx-auto">
                Our ceramic coating provides unmatched protection against Kerala's harsh climate conditions while maintaining your vehicle's showroom shine for years.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Superior Protection",
                  description: "9H+ hardness rating provides exceptional resistance against scratches, swirl marks, and environmental damage.",
                  image: "/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png"
                },
                {
                  title: "Extreme Hydrophobic Properties",
                  description: "Water beads and slides off easily, carrying dirt and contaminants with it - perfect for Kerala's monsoon season.",
                  image: "/lovable-uploads/588a7319-b8dc-4e0c-99dd-909134350e51.png"
                },
                {
                  title: "Enhanced Gloss",
                  description: "Creates a deep, mirror-like finish that enhances your car's color and appearance far beyond factory paint.",
                  image: "/lovable-uploads/93e1be41-e185-4b92-9ccf-b53e4dfd75e0.png"
                },
                {
                  title: "UV Protection",
                  description: "Prevents paint oxidation and fading caused by Kerala's intense tropical sunlight and high temperatures.",
                  image: "/lovable-uploads/5c6772f8-70d4-496c-9c31-291686cf603e.png"
                },
                {
                  title: "Chemical Resistance",
                  description: "Guards against damage from acid rain, bird droppings, tree sap, and other environmental contaminants.",
                  image: "/lovable-uploads/20fa2a68-f3d0-4ad1-b35f-f1a8b1378c1e.png"
                },
                {
                  title: "Easy Maintenance",
                  description: "Dirt and grime don't stick easily, making your car easier to clean and maintain throughout the year.",
                  image: "/lovable-uploads/c9c32a28-bc86-481a-8eff-6cc44b442248.png"
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden bg-xera-darkgray border-xera-lightgray h-full hover:shadow-xera-red/20 hover:border-xera-red/30 transition-all">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={benefit.image} 
                        alt={getImageAlt(`Ceramic coating benefit: ${benefit.title} for vehicles in Kerala climate`, "Ottapalam")}
                        className="object-cover w-full h-full"
                        loading="lazy"
                        width={400}
                        height={225}
                      />
                    </AspectRatio>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-white/70">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-gradient-to-b from-black to-xera-darkgray">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Our Ceramic Coating Process
              </h2>
              <p className="text-white/70 max-w-3xl mx-auto">
                We follow a meticulous multi-step process to ensure the perfect application and maximum longevity of your ceramic coating.
              </p>
            </motion.div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                {
                  step: "Initial Wash & Decontamination",
                  description: "Thorough cleaning to remove all surface contaminants, including iron deposits and embedded dirt.",
                  duration: "2-3 hours"
                },
                {
                  step: "Paint Correction",
                  description: "Multi-stage machine polishing to remove swirl marks, scratches, and imperfections for a perfect base.",
                  duration: "4-8 hours"
                },
                {
                  step: "Surface Preparation",
                  description: "Application of special solvents to remove any polishing oils and create the perfect bonding surface.",
                  duration: "1 hour"
                },
                {
                  step: "Ceramic Coating Application",
                  description: "Careful hand application of premium ceramic coating by our certified technicians in a controlled environment.",
                  duration: "2-3 hours"
                },
                {
                  step: "Curing Process",
                  description: "Monitored curing process with optimal temperature and humidity conditions to ensure proper bonding.",
                  duration: "12-24 hours"
                },
                {
                  step: "Final Inspection & Documentation",
                  description: "Quality check, final touches, and documentation for warranty purposes.",
                  duration: "1 hour"
                }
              ].map((process, index) => (
                <motion.div 
                  key={index}
                  className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6 flex flex-col md:flex-row gap-6 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-xera-red/20 border border-xera-red flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">{process.step}</h3>
                    <p className="text-white/70 mb-3">{process.description}</p>
                    <div className="bg-black/30 px-4 py-2 rounded inline-block text-sm">
                      Estimated time: {process.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/contact">
                <Button className="bg-xera-red hover:bg-red-700 text-white">
                  Get Your Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Packages Section */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Ceramic Coating Packages
              </h2>
              <p className="text-white/70 max-w-3xl mx-auto">
                Choose the perfect protection package for your vehicle based on your needs and budget.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Silver Protection",
                  price: "₹7,999",
                  duration: "3+ years",
                  features: [
                    "9H Ceramic Coating",
                    "Basic Paint Correction",
                    "Exterior Detailing",
                    "3-Year Warranty",
                    "Free Inspection After 6 Months"
                  ],
                  recommended: false,
                  vehicles: "Hatchbacks & Sedans"
                },
                {
                  name: "Gold Protection",
                  price: "₹12,999",
                  duration: "5+ years",
                  features: [
                    "9H+ Ceramic Coating",
                    "Two-Stage Paint Correction",
                    "Exterior & Interior Detailing",
                    "Wheel & Glass Coating",
                    "5-Year Warranty",
                    "Free Inspection Every 6 Months",
                    "One Complimentary Wash"
                  ],
                  recommended: true,
                  vehicles: "All Vehicle Types"
                },
                {
                  name: "Platinum Protection",
                  price: "₹18,999",
                  duration: "7+ years",
                  features: [
                    "9H++ Premium Ceramic Coating",
                    "Three-Stage Paint Correction",
                    "Complete Interior & Exterior Detailing",
                    "Wheel, Glass & Trim Coating",
                    "7-Year Warranty",
                    "Free Inspection Every 3 Months",
                    "Two Complimentary Washes",
                    "Engine Bay Detailing"
                  ],
                  recommended: false,
                  vehicles: "Luxury & Premium Vehicles"
                }
              ].map((pkg, index) => (
                <motion.div 
                  key={index}
                  className={`rounded-xl overflow-hidden ${pkg.recommended ? 'border-2 border-xera-red relative transform md:-translate-y-4 md:scale-105' : 'border border-xera-lightgray'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {pkg.recommended && (
                    <div className="bg-xera-red text-white py-1 text-center text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="p-6 bg-xera-darkgray">
                    <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                    <p className="text-sm text-white/70 mb-4">For {pkg.vehicles}</p>
                    
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{pkg.price}</span>
                      <span className="text-white/70 ml-1">starting price</span>
                    </div>
                    
                    <p className="mb-6 bg-xera-lightgray/30 py-1 px-3 rounded-full inline-block text-sm">
                      Protection: {pkg.duration}
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-xera-red flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`w-full ${pkg.recommended ? 'bg-xera-red hover:bg-red-700' : 'bg-xera-lightgray hover:bg-xera-lightgray/80'} text-white`}>
                      Choose Package
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Mobile Service */}
        <section className="py-16 bg-gradient-to-b from-black to-xera-darkgray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="order-2 md:order-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                  Mobile Ceramic Coating Service
                </h2>
                
                <p className="text-white/70 mb-6">
                  Can't come to our studio? No problem! Our fully-equipped mobile ceramic coating service brings the same professional quality to your location in Ottapalam, Palakkad, Shoranur, Pattambi, and surrounding areas.
                </p>
                
                <ul className="space-y-4 mb-6">
                  {[
                    "Professional-grade ceramic coating at your doorstep",
                    "Full protection setup to ensure dust-free application",
                    "Same premium products and expert technicians",
                    "Convenient scheduling for busy professionals",
                    "Serving all of Palakkad district and nearby areas"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-xera-red flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-xera-red hover:bg-red-700 text-white">
                    Book Mobile Service
                  </Button>
                  
                  <a href="tel:+919605858483">
                    <Button variant="outline" className="border-white/30 hover:border-white text-white hover:bg-white/10">
                      Call: +91 9605858483
                    </Button>
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <AspectRatio ratio={3/2} className="overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="/lovable-uploads/5c6772f8-70d4-496c-9c31-291686cf603e.png" 
                    alt={getImageAlt("XERA mobile ceramic coating service in Ottapalam applying coating to luxury vehicle", "Ottapalam")}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                </AspectRatio>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-xera-darkgray/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Frequently Asked Questions
              </h2>
              <p className="text-white/70 max-w-3xl mx-auto">
                Common questions about our ceramic coating service in Ottapalam and surrounding areas
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              {ceramicCoatingFAQs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="mb-6 bg-xera-darkgray border border-xera-lightgray rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-white/70">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-black to-xera-darkgray">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Ready for Unmatched Protection?
              </h2>
              <p className="text-white/70 max-w-3xl mx-auto mb-8">
                Give your vehicle the premium protection it deserves with XERA's ceramic coating service. Serving Ottapalam, Palakkad, and surrounding areas with both in-studio and mobile options.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-xera-red hover:bg-red-700 text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Your Coating
                </Button>
                
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-white/30 hover:border-white text-white hover:bg-white/10 flex items-center gap-2">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 flex justify-center">
                <img 
                  src="/lovable-uploads/588a7319-b8dc-4e0c-99dd-909134350e51.png" 
                  alt={getImageAlt("Hydrophobic ceramic coating with water beading on vehicle surface in Ottapalam", "Ottapalam")}
                  className="rounded-lg w-full max-w-md"
                  loading="lazy"
                  width={400}
                  height={225}
                />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Schema markup for SEO */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateProductSchema(
            "Premium Ceramic Coating Service",
            "Professional 9H+ ceramic coating service that provides 5+ years of protection for your vehicle against Kerala's harsh climate conditions.",
            "https://xeradetailing.in/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png",
            "7999",
            "INR",
            "https://schema.org/InStock",
            "https://xeradetailing.in/services/ceramic-coating",
            "XERA Car Wash & Auto Detailing",
            [
              { rating: 5, author: "Rahul Menon", text: "Best ceramic coating service in Palakkad! My car looks better than when it was new." },
              { rating: 5, author: "Priya Nair", text: "Excellent service. The coating has kept my car looking amazing even after heavy monsoon." },
              { rating: 4, author: "Anand Krishna", text: "Great quality and attention to detail. Highly recommend their ceramic coating service." }
            ]
          ) }}
        />
        
        {/* FAQ Schema markup for SEO */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateFaqSchema(ceramicCoatingFAQs) }}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CeramicCoating;
