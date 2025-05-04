
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Calendar, Clock, Check, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';

const EngineBayCleaning = () => {
  useEffect(() => {
    document.title = "Engine Bay Cleaning & Detailing in Ottapalam | XERA Kerala";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Professional engine bay cleaning service in Ottapalam. XERA\'s specialized engine detailing prevents corrosion and extends component life in Kerala\'s humid climate. Book now!'
    );
    
    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://xeradetailing.in/services/engine-bay-cleaning');
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-xera-darkgray py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('/assets/service-bg-pattern.jpg')] bg-repeat"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <div className="mb-2">
                  <Link to="/services" className="text-xera-red hover:text-white transition-colors inline-flex items-center gap-1">
                    <span>← Back to Services</span>
                  </Link>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Engine Bay Cleaning</h1>
                <p className="text-white/80 text-lg mb-6">
                  Professional degreasing and detailing for your engine bay, especially beneficial in Kerala where high humidity can accelerate corrosion and dust accumulation in engine components.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-xera-red" />
                    <span>1-3 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-xera-red" />
                    <span>Ottapalam, Palakkad</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <Button size="lg" className="bg-xera-red hover:bg-xera-red/90 text-white">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Engine Bay Cleaning
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-lg shadow-black/20">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/assets/engine-after.jpg" 
                      alt="XERA Engine Bay Cleaning service result on a car in Ottapalam" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                    <div className="p-4">
                      <div className="inline-block bg-xera-red px-3 py-1 rounded text-sm font-medium mb-2">Maintenance Essential</div>
                      <h3 className="text-white text-xl font-bold">Protect Your Engine Against Kerala's Humidity</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Our Engine Bay Cleaning Process</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Careful covering of sensitive electrical components</h3>
                      <p className="text-white/70">We meticulously protect all sensitive electronics, connectors, and sensors before beginning the cleaning process.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Application of specialized engine degreaser</h3>
                      <p className="text-white/70">We use biodegradable, professional-grade engine degreasers to break down oil, grease and grime without damaging components.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Steam cleaning for stubborn areas</h3>
                      <p className="text-white/70">For persistent dirt and grease in hard-to-reach areas, we use controlled steam cleaning that's both effective and safe.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Detail cleaning of all surfaces</h3>
                      <p className="text-white/70">Every surface in the engine bay is carefully cleaned, including plastic covers, hoses, and metal components.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Application of protectants to prevent corrosion</h3>
                      <p className="text-white/70">We finish by applying specialized protectants to plastic, rubber and metal surfaces to prevent corrosion and deterioration.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Benefits for Kerala's Climate</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Prevents corrosion in Kerala's humid climate</h3>
                      <p className="text-white/70">Removing built-up grime and applying protectants significantly reduces corrosion risk in our high-humidity environment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Makes fluid leaks easier to detect</h3>
                      <p className="text-white/70">With a clean engine bay, oil or fluid leaks become immediately visible, allowing for early detection and repair.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Extends life of rubber hoses and components</h3>
                      <p className="text-white/70">Regular cleaning and protection help rubber hoses and belts last longer by preventing premature deterioration.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Improves cooling efficiency</h3>
                      <p className="text-white/70">Clean radiators and cooling components work more efficiently, especially important in Kerala's hot climate.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Creates professional presentation</h3>
                      <p className="text-white/70">A clean engine bay demonstrates proper vehicle care and enhances value when selling or showing your car.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-xera-lightgray p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Pricing Information</h3>
                  <p className="mb-4">
                    Engine bay cleaning prices vary based on engine size, condition, and level of contamination. Contact us for a personalized quote.
                  </p>
                  <Button className="bg-xera-red hover:bg-xera-red/90">
                    Get a Custom Quote
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gradient">Before & After Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="rounded-lg overflow-hidden">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src="/assets/engine-before.jpg" 
                        alt="Engine bay before XERA cleaning service in Ottapalam Kerala" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <p className="text-center font-medium">Before</p>
                </div>
                <div className="space-y-2">
                  <div className="rounded-lg overflow-hidden">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src="/assets/engine-after.jpg" 
                        alt="Engine bay after XERA cleaning service in Ottapalam Kerala" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <p className="text-center font-medium">After</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="bg-xera-lightgray rounded-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gradient">Why Choose XERA for Engine Bay Cleaning in Ottapalam?</h2>
                <p className="text-center text-lg mb-8">
                  XERA Detailing provides the most thorough and safe engine bay cleaning service in Ottapalam and surrounding areas of Palakkad district.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-xera-darkgray p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-3">Specialized Equipment</h3>
                    <p className="text-white/70">We use professional-grade equipment including steam cleaners and precision tools for the best results.</p>
                  </div>
                  
                  <div className="bg-xera-darkgray p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-3">Safe Techniques</h3>
                    <p className="text-white/70">Our technicians are trained in safe detailing methods that protect sensitive components while ensuring thorough cleaning.</p>
                  </div>
                  
                  <div className="bg-xera-darkgray p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-3">Eco-Friendly Products</h3>
                    <p className="text-white/70">We use biodegradable degreasers and environmentally responsible cleaning agents for all engine bay services.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Ready to Revitalize Your Engine Bay?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Book your engine bay cleaning service today and protect your engine components from Kerala's humid climate while improving your vehicle's overall value and performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-xera-red hover:bg-xera-red/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Engine Bay Cleaning
                </Button>
                <Button variant="outline" size="lg" className="border-xera-red text-xera-red hover:bg-xera-red/10">
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* SEO Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Engine Bay Cleaning",
              "name": "XERA Engine Bay Cleaning Service",
              "description": "Professional degreasing and detailing for your engine bay, especially beneficial in Kerala's high humidity environment to prevent corrosion and dust accumulation in engine components.",
              "provider": {
                "@type": "LocalBusiness",
                "name": "XERA Car Wash & Auto Detailing",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Opp. NSS College, Palappuram",
                  "addressLocality": "Ottapalam",
                  "addressRegion": "Kerala",
                  "postalCode": "679103",
                  "addressCountry": "IN"
                }
              },
              "areaServed": [
                "Ottapalam", 
                "Palakkad", 
                "Shoranur", 
                "Pattambi", 
                "Perinthalmanna", 
                "Cherpulassery"
              ]
            })
          }}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EngineBayCleaning;
