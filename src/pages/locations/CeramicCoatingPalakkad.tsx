import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import LeadMagnetForm from '@/components/enhanced/LeadMagnetForm';
import EnhancedCTA from '@/components/enhanced/EnhancedCTA';
import { setPageMetadata, generateSchemaMarkup, generateServiceSchema } from '@/utils/seoHelper';
import { generateKeywordCombinations } from '@/utils/seoKeywords';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';
import { ArrowRight, CheckCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import the required blog posts for related content
import { blogPosts } from '@/data/blogPosts';

// Testimonials specific to Palakkad
const testimonials = [
  {
    name: "Suresh Kumar",
    location: "Palakkad",
    rating: 5,
    text: "Got ceramic coating done for my Creta at XERA, and even after 6 months, the finish looks amazing despite Palakkad's harsh sun. Their team was professional from start to finish!"
  },
  {
    name: "Anita George",
    location: "Palakkad",
    rating: 5,
    text: "Best ceramic coating service in Palakkad district! My car looks better than when I bought it, and the water beading effect during monsoons is impressive."
  },
  {
    name: "Mathew Philip",
    location: "Palakkad",
    rating: 5,
    text: "Drove from Palakkad city to XERA in Ottapalam based on recommendations, and it was worth every kilometer. Their attention to detail is unmatched. Highly recommend!"
  }
];

const CeramicCoatingPalakkad = () => {
  useEffect(() => {
    // SEO metadata
    setPageMetadata(
      "Best Ceramic Coating in Palakkad | 9H Protection | XERA Detailing",
      "Professional ceramic coating services in Palakkad. Protect your car from Kerala's harsh climate with XERA's premium 9H ceramic coating. Serving all areas in Palakkad district.",
      "https://xeradetailing.in/ceramic-coating-palakkad",
      "https://xeradetailing.in/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png",
      generateKeywordCombinations('ceramicCoating', 'Palakkad')
    );
    
    // Track page view
    trackEvent('view_location_page', { location: 'Palakkad', service: 'Ceramic Coating' });
  }, []);

  // Find related blog posts about ceramic coating
  const relatedBlogPosts = blogPosts.filter(post => 
    post.categories.includes('ceramic-coating') || 
    post.title.toLowerCase().includes('ceramic')
  ).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <BreadcrumbNav 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Ceramic Coating in Palakkad', href: '/ceramic-coating-palakkad' }
        ]}
      />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0 opacity-70"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png')] bg-cover bg-center"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4 text-white border-white/20">Palakkad's Premier Ceramic Coating Service</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Professional Ceramic Coating in Palakkad
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Protect your vehicle from Kerala's extreme weather conditions with XERA's premium ceramic coating services. 
                Serving all areas in Palakkad district including Ottapalam, Shoranur, Pattambi, and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <EnhancedCTA 
                  text="Book a Consultation" 
                  href="/contact" 
                  variant="primary"
                  shimmerEffect={true}
                  trackingLabel="palakkad_hero_cta"
                />
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <a href="tel:+919605858483">
                    Call: +91 9605858483
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gradient">
                Why Choose XERA's Ceramic Coating in Palakkad?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our premium ceramic coating service provides unmatched protection specifically designed for 
                Palakkad's climate conditions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-xera-darkgray p-6 rounded-lg border border-xera-lightgray">
                <div className="bg-xera-red/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <CheckCheck className="text-xera-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">UV Protection</h3>
                <p className="text-white/70">
                  Shields your vehicle from Palakkad's intense sunlight, preventing paint oxidation and fading.
                </p>
              </div>
              
              <div className="bg-xera-darkgray p-6 rounded-lg border border-xera-lightgray">
                <div className="bg-xera-red/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <CheckCheck className="text-xera-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Monsoon Protection</h3>
                <p className="text-white/70">
                  Creates a hydrophobic layer that repels water, reducing the risk of water spots and rain damage.
                </p>
              </div>
              
              <div className="bg-xera-darkgray p-6 rounded-lg border border-xera-lightgray">
                <div className="bg-xera-red/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <CheckCheck className="text-xera-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Long-lasting Shine</h3>
                <p className="text-white/70">
                  Maintains a glossy, showroom finish for years, enhancing your vehicle's appearance and value.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gradient">
                Our Ceramic Coating Process
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We follow a meticulous multi-step process to ensure perfect application and maximum durability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-6 border-l-2 border-dashed border-white/10 z-0"></div>
                <div className="space-y-12">
                  <div className="relative z-10 flex">
                    <div className="bg-xera-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Deep Cleaning</h3>
                      <p className="text-white/70">
                        Complete exterior washing to remove all surface contaminants, followed by clay bar treatment to extract embedded particles.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex">
                    <div className="bg-xera-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Paint Correction</h3>
                      <p className="text-white/70">
                        Machine polishing to remove swirls, scratches, and imperfections, creating a perfect surface for coating.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex">
                    <div className="bg-xera-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Surface Preparation</h3>
                      <p className="text-white/70">
                        IPA (Isopropyl Alcohol) wipe-down to remove any oils, silicones, or residues that could affect bonding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-6 border-l-2 border-dashed border-white/10 z-0"></div>
                <div className="space-y-12">
                  <div className="relative z-10 flex">
                    <div className="bg-xera-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Ceramic Coating Application</h3>
                      <p className="text-white/70">
                        Professional application of 9H ceramic coating in a controlled environment for optimal results.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex">
                    <div className="bg-xera-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Curing Process</h3>
                      <p className="text-white/70">
                        Controlled environment curing to ensure proper bonding of the ceramic coating to your vehicle's paint.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex">
                    <div className="bg-xera-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">6</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Final Inspection</h3>
                      <p className="text-white/70">
                        Thorough quality check to ensure perfect application and proper coverage of all treated surfaces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <EnhancedCTA
                text="Book Your Ceramic Coating Today"
                href="/contact"
                variant="primary"
                pulseEffect={true}
                trackingLabel="palakkad_process_cta"
              />
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gradient">
                What Palakkad Customers Say
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our customers from Palakkad have to say.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-xera-darkgray border border-xera-lightgray p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-white/80 mb-4">"{testimonial.text}"</p>
                  
                  <div className="text-sm">
                    <span className="font-bold text-white">{testimonial.name}</span>
                    <span className="text-white/50"> • {testimonial.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Service Areas Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gradient">
                Areas We Serve in Palakkad District
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our ceramic coating services are available throughout Palakkad district. We serve customers from:
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {['Palakkad Town', 'Ottapalam', 'Shoranur', 'Pattambi', 'Alathur', 'Chittur', 'Mannarkkad', 'Kalpathi', 'Malampuzha', 'Kollengode', 'Vadakkenchery', 'Thrithala'].map((area) => (
                <div 
                  key={area}
                  className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-4 text-center hover:border-xera-red transition-colors"
                >
                  {area}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-white/70 mb-6">
                We offer pickup and drop service for customers throughout Palakkad district. Contact us for details.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <EnhancedCTA
                  text="Book an Appointment"
                  href="/contact"
                  variant="primary"
                  trackingLabel="palakkad_areas_cta"
                />
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <a href="https://g.page/xeradetailing" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gradient">
                Frequently Asked Questions
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Common questions about ceramic coating in Palakkad
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">How long does ceramic coating last in Palakkad's climate?</h3>
                <p className="text-white/70">
                  Our premium ceramic coating lasts between 3-5 years in Palakkad's climate with proper maintenance. 
                  The coating's longevity depends on exposure conditions and maintenance practices.
                </p>
              </div>
              
              <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">How much does ceramic coating cost in Palakkad?</h3>
                <p className="text-white/70">
                  Our ceramic coating services in Palakkad start at ₹7,999 for hatchbacks. The final price depends on 
                  vehicle size, condition, and the specific package you choose. Contact us for a personalized quote.
                </p>
              </div>
              
              <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Do you offer mobile ceramic coating services in Palakkad?</h3>
                <p className="text-white/70">
                  Yes, we offer mobile ceramic coating services throughout Palakkad district. Our team can come to your 
                  location with all necessary equipment. For best results, we recommend visiting our studio in Ottapalam.
                </p>
              </div>
              
              <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">How long does it take to apply ceramic coating?</h3>
                <p className="text-white/70">
                  The complete ceramic coating process typically takes 1-3 days depending on your vehicle's size and condition. 
                  This includes thorough preparation, application, and curing time to ensure optimal results.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gradient">
                Related Car Care Tips
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Learn more about caring for your vehicle in Kerala's climate
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedBlogPosts.map((post) => (
                <Link 
                  key={post.slug} 
                  to={`/car-care-tips/${post.slug}`}
                  className="group"
                  onClick={() => trackEvent('related_blog_click', { post_title: post.title, from: 'location_page' })}
                >
                  <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg overflow-hidden h-full group-hover:border-xera-red transition-colors">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-xera-red transition-colors">{post.title}</h3>
                      <p className="text-white/70 mb-4">{post.excerpt.substring(0, 120)}...</p>
                      <div className="flex items-center text-xera-red font-medium">
                        Read Article <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-xera-darkgray to-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between max-w-5xl mx-auto">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gradient">
                  Ready to Protect Your Vehicle?
                </h2>
                <p className="text-white/70 mb-6">
                  Book your ceramic coating appointment today. Our team in Palakkad is ready to give your vehicle 
                  the premium protection it deserves.
                </p>
                <div className="flex flex-wrap gap-4">
                  <EnhancedCTA
                    text="Schedule Now"
                    href="/contact"
                    variant="primary"
                    shimmerEffect={true}
                    pulseEffect={true}
                    trackingLabel="palakkad_bottom_cta"
                  />
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <a href="tel:+919605858483">
                      Call Us Directly
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <LeadMagnetForm
                  title="Get a FREE Quote for Your Vehicle"
                  description="Fill out this quick form to receive a personalized ceramic coating quote for your vehicle in Palakkad."
                  buttonText="Get My Free Quote"
                  redirectToWhatsapp={true}
                  whatsappMessage="Hi XERA, I'd like a ceramic coating quote for my vehicle in Palakkad. Can you help?"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateServiceSchema(
              "Ceramic Coating in Palakkad",
              "Professional ceramic coating service in Palakkad district providing premium paint protection with 3-5 years durability, UV resistance, and hydrophobic properties.",
              "https://xeradetailing.in/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png",
              "https://xeradetailing.in/ceramic-coating-palakkad",
              "Starting at ₹7,999",
              ["Palakkad", "Ottapalam", "Shoranur", "Pattambi", "Mannarkkad", "Alathur"]
            )
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateSchemaMarkup('FAQPage', {
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does ceramic coating last in Palakkad's climate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our premium ceramic coating lasts between 3-5 years in Palakkad's climate with proper maintenance. The coating's longevity depends on exposure conditions and maintenance practices."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does ceramic coating cost in Palakkad?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our ceramic coating services in Palakkad start at ₹7,999 for hatchbacks. The final price depends on vehicle size, condition, and the specific package you choose. Contact us for a personalized quote."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer mobile ceramic coating services in Palakkad?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer mobile ceramic coating services throughout Palakkad district. Our team can come to your location with all necessary equipment. For best results, we recommend visiting our studio in Ottapalam."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to apply ceramic coating?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The complete ceramic coating process typically takes 1-3 days depending on your vehicle's size and condition. This includes thorough preparation, application, and curing time to ensure optimal results."
                  }
                }
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

export default CeramicCoatingPalakkad;
