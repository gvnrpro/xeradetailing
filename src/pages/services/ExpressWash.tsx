
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Calendar, Clock, Check, MapPin, CircleDollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';

const ExpressWash = () => {
  useEffect(() => {
    document.title = "Express Wash Car Detailing | XERA Ottapalam Kerala";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Professional express car wash service in Ottapalam, Palakkad. XERA\'s premium foam wash removes dirt without damaging your paintwork. Book now!'
    );
    
    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://xeradetailing.in/services/express-wash');
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
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Express Wash Service</h1>
                <p className="text-white/80 text-lg mb-6">
                  A fast yet thorough cleaning with pH-balanced foam specially formulated for Kerala's humid climate. Our Express Wash removes road grime, dust, and light contaminants without harming your paintwork.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-xera-red" />
                    <span>30-45 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-xera-red" />
                    <span>Ottapalam, Palakkad</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <Button size="lg" className="bg-xera-red hover:bg-xera-red/90 text-white">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Express Wash Now
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-lg shadow-black/20">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/assets/express-wash-after.jpg" 
                      alt="XERA Express Wash service result on a car in Ottapalam" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                    <div className="p-4">
                      <div className="inline-block bg-xera-red px-3 py-1 rounded text-sm font-medium mb-2">Popular Service</div>
                      <h3 className="text-white text-xl font-bold">Transform Your Car in Just 30 Minutes</h3>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Our Express Wash Process</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Pre-rinse to remove loose dirt</h3>
                      <p className="text-white/70">We start with a gentle pre-rinse to remove loose dirt and debris, preventing scratches during the washing process.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Application of pH-balanced foam</h3>
                      <p className="text-white/70">Our special pH-balanced foam formula is designed specifically for Kerala's climate, effectively lifting dirt without damaging paint.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Hand wash with microfiber mitts</h3>
                      <p className="text-white/70">Our technicians use premium microfiber wash mitts to gently clean all exterior surfaces without introducing swirl marks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Rinse with filtered water</h3>
                      <p className="text-white/70">We use filtered water to remove all soap residue, preventing water spots and mineral deposits that are common with tap water.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Soft cloth hand-drying</h3>
                      <p className="text-white/70">We finish with a careful hand-drying process using plush microfiber towels to ensure a spot-free finish.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Benefits for Kerala Drivers</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Safe contaminant removal</h3>
                      <p className="text-white/70">Our process safely removes road dust, mud, and environmental contaminants without scratching your paint.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Preserves existing wax and protection</h3>
                      <p className="text-white/70">Unlike harsh soaps, our pH-balanced formula won't strip away your car's existing protective coatings.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Restores natural shine</h3>
                      <p className="text-white/70">Removes the dull film that builds up on paint due to Kerala's humidity and pollution, restoring your car's natural shine.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Prevents buildup of corrosive elements</h3>
                      <p className="text-white/70">Regular washing prevents accumulation of acidic rain residue and road salts that can damage your paint over time.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-xera-lightgray p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CircleDollarSign className="text-xera-red h-5 w-5" />
                    Pricing
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-xera-darkgray rounded-md p-3 flex justify-between items-center">
                      <span>Sedan</span>
                      <span className="font-bold text-xera-red">₹400</span>
                    </div>
                    <div className="bg-xera-darkgray rounded-md p-3 flex justify-between items-center">
                      <span>SUV</span>
                      <span className="font-bold text-xera-red">₹500</span>
                    </div>
                    <div className="bg-xera-darkgray rounded-md p-3 flex justify-between items-center">
                      <span>Bike</span>
                      <span className="font-bold text-xera-red">₹200</span>
                    </div>
                    <div className="bg-xera-darkgray rounded-md p-3 flex justify-between items-center">
                      <span>Scooty</span>
                      <span className="font-bold text-xera-red">₹150</span>
                    </div>
                  </div>
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
                        src="/assets/express-wash-before.jpg" 
                        alt="Car before XERA Express Wash service in Ottapalam" 
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
                        src="/assets/express-wash-after.jpg" 
                        alt="Car after XERA Express Wash service in Ottapalam" 
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gradient">Why Choose XERA for Express Wash in Ottapalam?</h2>
                <p className="text-center text-lg mb-8">
                  XERA Detailing is Ottapalam's premier car care specialist, offering superior car wash services with attention to detail that regular car washes can't match.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-xera-darkgray p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-3">Premium Products</h3>
                    <p className="text-white/70">We use only pH-balanced, paint-safe cleaning agents from top international brands.</p>
                  </div>
                  
                  <div className="bg-xera-darkgray p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-3">Trained Technicians</h3>
                    <p className="text-white/70">Our staff is specifically trained in proper car washing techniques to avoid swirl marks and paint damage.</p>
                  </div>
                  
                  <div className="bg-xera-darkgray p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-3">Convenient Location</h3>
                    <p className="text-white/70">Located in the heart of Ottapalam, opposite NSS College, making us easily accessible for all Palakkad residents.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Ready to Experience the XERA Difference?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Book your Express Wash today and see why car owners across Ottapalam, Palakkad and surrounding areas choose XERA for their vehicle's care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-xera-red hover:bg-xera-red/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Appointment
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
              "serviceType": "Express Car Wash",
              "name": "XERA Express Wash Service",
              "description": "A fast yet thorough cleaning with pH-balanced foam specially formulated for Kerala's humid climate. Removes road grime, dust, and light contaminants without harming your paintwork.",
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
              ],
              "offers": {
                "@type": "Offer",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "400",
                  "priceCurrency": "INR",
                  "eligibleTransactionVolume": {
                    "@type": "PriceSpecification",
                    "unitText": "Sedan"
                  }
                }
              }
            })
          }}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ExpressWash;
