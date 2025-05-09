
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BeforeAfterShowcase from '@/components/BeforeAfterShowcase';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { CarFront, Shield, Clock, Sparkles, Award, CheckCircle } from 'lucide-react';
import { setPageMetadata, generateSchemaMarkup } from '@/utils/seoHelper';

const CeramicCoating = () => {
  // Enhanced SEO content for this page with more focused keywords
  const pageTitle = "Best Ceramic Coating in Ottapalam | Car Paint Protection | XERA Detailing";
  const pageDescription = "Professional ceramic coating services in Ottapalam, Kerala. Long-lasting paint protection with 9H hardness, hydrophobic properties and UV resistance. Serving Palakkad, Shoranur and Pattambi areas.";

  useEffect(() => {
    // Set page metadata for SEO with expanded keyword set
    setPageMetadata(
      pageTitle,
      pageDescription,
      "https://xeradetailing.in/services/ceramic-coating",
      "/assets/ceramic-after.jpg",
      ["ceramic coating ottapalam", "best ceramic coating kerala", "car paint protection ottapalam", "hydrophobic coating", "UV protection cars", "9H ceramic coating palakkad", "auto detailing services ottapalam", "ceramic coating near me", "professional car detailing experts ottapalam"]
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative bg-xera-darkgray py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Premium Ceramic Coating in Ottapalam</h1>
                <p className="text-lg text-white/80 mb-6">
                  Protect your vehicle with our advanced 9H ceramic coating technology. Get unmatched gloss, hydrophobic properties, and protection against Kerala's harsh climate.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="bg-xera-red hover:bg-red-700 text-white px-6 py-6">
                      Book Your Ceramic Coating
                    </Button>
                  </Link>
                  <a href="tel:+919605858483">
                    <Button variant="outline" className="border-white/30 hover:bg-white/5">
                      Call for Inquiry: +91 9605858483
                    </Button>
                  </a>
                </div>
                <div className="mt-6 text-sm text-white/60">
                  Serving: Ottapalam, Palakkad, Shoranur, Pattambi and surrounding areas
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/assets/ceramic-after.jpg" 
                  alt="Premium ceramic coating applied to car in Ottapalam by XERA detailing experts" 
                  className="rounded-lg shadow-lg w-full"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-16 bg-xera-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">See The Difference</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Our ceramic coating creates a stunning transformation that protects your vehicle for years. Compare our before and after results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/assets/ceramic-before.jpg" 
                  alt="Car before ceramic coating application in Ottapalam - dull and unprotected paint surface" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="mt-3 text-center text-white/70">Before: Unprotected paint</p>
              </div>
              <div>
                <img 
                  src="/assets/ceramic-after.jpg" 
                  alt="Car after ceramic coating by XERA in Ottapalam - glossy and protected finish with hydrophobic properties" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="mt-3 text-center text-white/70">After: Ceramic coated finish</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/blog/ceramic-coating-ottapalam-car-protection" className="text-xera-red hover:underline">
                Read more about our ceramic coating process and benefits
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-xera-darkgray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
              Benefits of Our Ceramic Coating
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-xera-gray p-8 rounded-lg">
                <Shield className="text-xera-red mb-4 h-12 w-12" />
                <h3 className="text-xl font-bold mb-2">Superior Protection</h3>
                <p className="text-white/70">
                  Shields against UV rays, acid rain, bird droppings, and minor scratches. Perfect for Kerala's challenging climate.
                </p>
              </div>
              
              <div className="bg-xera-gray p-8 rounded-lg">
                <Sparkles className="text-xera-red mb-4 h-12 w-12" />
                <h3 className="text-xl font-bold mb-2">Showroom Shine</h3>
                <p className="text-white/70">
                  Enhances your car's color depth and adds a mirror-like shine that lasts for years, not months.
                </p>
              </div>
              
              <div className="bg-xera-gray p-8 rounded-lg">
                <Clock className="text-xera-red mb-4 h-12 w-12" />
                <h3 className="text-xl font-bold mb-2">Long-Lasting Results</h3>
                <p className="text-white/70">
                  Unlike waxes that wear off in weeks, our ceramic coating provides protection for 3-5 years with proper care.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="bg-xera-gray p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Why Choose XERA for Ceramic Coating in Ottapalam?</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <CheckCircle className="text-xera-red mr-3 h-6 w-6 flex-shrink-0" />
                    <span>We use only premium 9H ceramic products with advanced nanotechnology</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="text-xera-red mr-3 h-6 w-6 flex-shrink-0" />
                    <span>Our technicians are certified and experienced in perfect application</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="text-xera-red mr-3 h-6 w-6 flex-shrink-0" />
                    <span>Climate-controlled application environment for optimal results</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="text-xera-red mr-3 h-6 w-6 flex-shrink-0" />
                    <span>Full paint preparation including clay bar and multi-stage polishing</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="text-xera-red mr-3 h-6 w-6 flex-shrink-0" />
                    <span>Serving all of Ottapalam, Palakkad, Shoranur, and Pattambi areas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-xera-darkgray to-xera-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Ready to Protect Your Vehicle?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              Book your ceramic coating appointment today and enjoy years of protection and shine. Special packages available for all vehicle types.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-xera-red hover:bg-red-700 text-white px-6 py-6 text-lg">
                  Book Your Ceramic Coating
                </Button>
              </Link>
              <Link to="/blog/ceramic-coating-ottapalam-car-protection">
                <Button variant="outline" className="border-white/30 hover:bg-white/5 px-6 py-6 text-lg">
                  Learn More About Ceramic Coating
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Schema markup for SEO */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateSchemaMarkup('Service', {
            serviceType: "Ceramic Coating",
            name: "Professional Ceramic Coating in Ottapalam",
            provider: {
              "@type": "LocalBusiness",
              "name": "XERA Car Wash & Auto Detailing",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Opp. NSS College, Palappuram",
                "addressLocality": "Ottapalam",
                "addressRegion": "Kerala",
                "postalCode": "679103",
                "addressCountry": "IN"
              },
              "telephone": "+919605858483"
            },
            areaServed: ["Ottapalam", "Palakkad", "Shoranur", "Pattambi", "Perinthalmanna"],
            description: "Premium 9H+ ceramic coating that protects your vehicle's paint from Kerala's harsh climate conditions, providing extreme hydrophobic properties and UV resistance.",
            offers: {
              "@type": "Offer",
              "price": "7999",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            }
          }) }}
        />

        {/* FAQ Schema for Rich Results */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateSchemaMarkup('FAQPage', {
            mainEntity: [
              {
                "@type": "Question",
                "name": "How long does ceramic coating last in Kerala's climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With proper maintenance, our premium ceramic coating can last 3-5 years in Kerala's climate, providing continuous protection against UV rays, rain, and environmental contaminants."
                }
              },
              {
                "@type": "Question",
                "name": "Is ceramic coating worth it for cars in Ottapalam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! Ceramic coating is particularly valuable in Ottapalam due to the region's mix of sun, rain, and dust. It protects against environmental damage, maintains your car's appearance, and increases its resale value."
                }
              },
              {
                "@type": "Question",
                "name": "How much does ceramic coating cost at XERA in Ottapalam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our ceramic coating packages start from ₹7,999 for smaller vehicles, with options for different vehicle sizes and additional services like interior protection. We offer competitive pricing with premium quality materials."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide mobile ceramic coating services in Palakkad district?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, XERA offers mobile ceramic coating services throughout Palakkad district, including Ottapalam, Shoranur, Pattambi, and surrounding areas. Our mobile unit brings professional-grade equipment to your location."
                }
              }
            ]
          }) }}
        />

      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CeramicCoating;
