
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Calendar, Clock, Check, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';

const CeramicCoating = () => {
  useEffect(() => {
    document.title = "Ceramic Coating Service in Ottapalam | XERA Detailing Kerala";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Professional ceramic coating services in Ottapalam, Kerala. XERA\'s 9H+ ceramic coating provides long-lasting protection against UV rays, rain, and environmental contaminants. Book now!'
    );
    
    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://xeradetailing.in/services/ceramic-coating');
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
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Ceramic Coating</h1>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">(48 reviews)</span>
                </div>
                <p className="text-white/80 text-lg mb-6">
                  Premium grade SiO2 ceramic coating with 9H+ hardness that creates a permanent bond with your vehicle's paint, providing unmatched protection against Kerala's harsh sun and monsoon conditions for up to 5 years.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-xera-red" />
                    <span>1-3 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-xera-red" />
                    <span>Ottapalam, Palakkad</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <Button size="lg" className="bg-xera-red hover:bg-xera-red/90 text-white">
                    <Calendar className="mr-2 h-5 w-5" />
                    Get Ceramic Coating Quote
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-lg shadow-black/20">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/assets/ceramic-after.jpg" 
                      alt="XERA Ceramic Coating service result on a car in Ottapalam Kerala" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                    <div className="p-4">
                      <div className="inline-block bg-xera-red px-3 py-1 rounded text-sm font-medium mb-2">Premium Service</div>
                      <h3 className="text-white text-xl font-bold">Ultimate Protection for Kerala's Climate</h3>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Our Ceramic Coating Process</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Paint decontamination and clay bar treatment</h3>
                      <p className="text-white/70">We thoroughly clean and decontaminate your paint surface, removing embedded contaminants that regular washing can't eliminate.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Machine polishing to remove imperfections</h3>
                      <p className="text-white/70">Our expert technicians use professional-grade polishing machines to remove swirl marks, minor scratches, and oxidation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">IPA wipedown to prepare surface</h3>
                      <p className="text-white/70">We use Isopropyl Alcohol to remove any polishing oils and residues, ensuring a perfectly clean surface for coating adhesion.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Application of ISO-grade ceramic coating</h3>
                      <p className="text-white/70">We apply our premium 9H+ ceramic coating by hand, ensuring full coverage and proper bonding to your vehicle's paint.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">24-hour controlled curing process</h3>
                      <p className="text-white/70">Your vehicle remains in our climate-controlled facility for at least 24 hours, allowing the coating to fully cure and bond with the paint.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Benefits for Kerala Climate</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Up to 5 years of protection</h3>
                      <p className="text-white/70">With proper maintenance, our ceramic coating provides up to 5 years of protection against Kerala's harsh environmental conditions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Exceptional UV protection</h3>
                      <p className="text-white/70">Provides critical protection against Kerala's intense sun, preventing paint oxidation and fading that's common in our tropical climate.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Superior water beading and self-cleaning</h3>
                      <p className="text-white/70">Extreme hydrophobic properties repel water and contaminants, keeping your car cleaner during Kerala's monsoon season.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Enhanced gloss and depth</h3>
                      <p className="text-white/70">Creates a glass-like, high-gloss finish that enhances your vehicle's color and shine beyond factory paint.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-xera-red/20 p-1.5 rounded-full">
                      <Check className="h-4 w-4 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Chemical resistance</h3>
                      <p className="text-white/70">Protects against bird droppings, tree sap, and road chemicals that are highly damaging to automotive paint.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-xera-lightgray p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Our Ceramic Coating Packages</h3>
                  <div className="space-y-4">
                    <div className="bg-xera-darkgray rounded-md p-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-lg">Silver Package</h4>
                        <div className="text-xera-red font-bold">Starting from ₹15,000</div>
                      </div>
                      <p className="text-white/70 mt-1">2-year protection, single layer coating</p>
                    </div>
                    
                    <div className="bg-xera-darkgray rounded-md p-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-lg">Gold Package</h4>
                        <div className="text-xera-red font-bold">Starting from ₹25,000</div>
                      </div>
                      <p className="text-white/70 mt-1">3-4 year protection, double layer coating</p>
                    </div>
                    
                    <div className="bg-xera-darkgray rounded-md p-4 border border-xera-red">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-lg">Platinum Package</h4>
                        <div className="text-xera-red font-bold">Starting from ₹35,000</div>
                      </div>
                      <p className="text-white/70 mt-1">5+ year protection, 3-layer coating with quarterly maintenance</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-white/50">* Prices vary based on vehicle size and condition. Contact us for a personalized quote.</p>
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
                        src="/assets/ceramic-before.jpg" 
                        alt="Car before XERA Ceramic Coating service in Ottapalam Kerala" 
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
                        src="/assets/ceramic-after.jpg" 
                        alt="Car after XERA Ceramic Coating service in Ottapalam Kerala" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <p className="text-center font-medium">After</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/X_YioNyNiv4"
                  title="XERA Ceramic Coating Process"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[300px] md:h-[500px] border-0"
                ></iframe>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="bg-xera-lightgray rounded-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gradient">Why Choose XERA for Ceramic Coating in Ottapalam?</h2>
                <p className="text-center text-lg mb-8">
                  XERA Detailing is Ottapalam's leading ceramic coating specialist, offering premium protection solutions you won't find at regular car care centers.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-xera-darkgray p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-3">Certified Applicators</h3>
                    <p className="text-white/70">Our technicians are fully certified and trained in proper ceramic coating application techniques.</p>
                  </div>
                  
                  <div className="bg-xera-darkgray p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-3">ISO-Grade Products</h3>
                    <p className="text-white/70">We use only internationally certified 9H+ ceramic coating products with verified hardness ratings.</p>
                  </div>
                  
                  <div className="bg-xera-darkgray p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-3">Climate-Controlled Facility</h3>
                    <p className="text-white/70">Our specially designed facility ensures perfect curing conditions regardless of Kerala's weather.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Ready to Protect Your Vehicle?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Contact us today for a personalized ceramic coating consultation and quote. Our expert team will help you choose the perfect protection package for your vehicle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-xera-red hover:bg-xera-red/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Get Ceramic Coating Quote
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
              "serviceType": "Ceramic Coating",
              "name": "XERA Ceramic Coating Service",
              "description": "Premium grade SiO2 ceramic coating with 9H+ hardness that creates a permanent bond with your vehicle's paint, providing unmatched protection against Kerala's harsh sun and monsoon conditions.",
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

export default CeramicCoating;
