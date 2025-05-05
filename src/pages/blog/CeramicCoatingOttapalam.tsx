import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Shield, Droplets, CheckCircle, Sun, Car, Heart } from 'lucide-react';
import { setPageMetadata, generateBlogPostSchema, generateFaqSchema } from '@/utils/seoHelper';
const CeramicCoatingOttapalam = () => {
  // SEO metadata
  const pageTitle = "Ceramic Coating In Ottapalam | Long-Lasting Car Paint Protection | XERA";
  const pageDescription = "Get the best ceramic coating in Ottapalam. XERA's nano-coating service offers unmatched shine and UV protection for your car. Serving Palakkad, Shoranur, and Pattambi.";
  const imageUrl = "/assets/ceramic-after.jpg";
  useEffect(() => {
    // Set page metadata for SEO
    setPageMetadata(pageTitle, pageDescription, "https://xeradetailing.in/blog/ceramic-coating-ottapalam-car-protection", imageUrl, ["ceramic coating Ottapalam", "car detailing Palakkad", "paint protection Kerala", "nano coating cars", "9H ceramic coating", "hydrophobic coating", "UV protection", "car protection Shoranur", "premium car coating Pattambi", "best ceramic coating shop"]);
  }, []);

  // FAQ data for schema markup
  const faqItems = [{
    question: "How long does ceramic coating last?",
    answer: "With proper care, ceramic coating can last up to 5 years or more. Regular maintenance and using ceramic-safe cleaning products will help maximize longevity."
  }, {
    question: "Is ceramic better than wax?",
    answer: "Yes, ceramic coating is superior to wax in almost every way. It lasts significantly longer (years vs. months), offers better protection against environmental contaminants, provides stronger UV resistance, and maintains a more premium glossy finish."
  }, {
    question: "How much does ceramic coating cost in Ottapalam?",
    answer: "Our ceramic coating packages at XERA start affordably and vary depending on the vehicle size, condition, and service level selected. We offer different packages to suit various budgets. Contact us for a personalized quote."
  }];
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-xera-darkgray py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Why Ceramic Coating Is the Best Car Protection in Ottapalam</h1>
            <div className="flex flex-wrap items-center text-white/70 gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" /> May 5, 2024
              </div>
              <div className="bg-xera-red/20 text-xera-red px-3 py-1 rounded-full text-sm font-medium">
                Ceramic Coating
              </div>
            </div>
          </div>
        </div>
        
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Featured image */}
              <div className="mb-10 rounded-xl overflow-hidden">
                <img src={imageUrl} alt="Professional ceramic coating on car in Ottapalam showing perfect gloss and reflection" className="w-full h-auto" />
              </div>
              
              {/* Introduction */}
              <div className="prose prose-invert max-w-none">
                <p className="text-lg">
                  If you're a car owner in Ottapalam or nearby areas like Palakkad, Pattambi, or Shoranur, you've probably asked: "How can I keep my car looking brand new, even in this climate?" The answer is simple — ceramic coating.
                </p>
                <p>
                  At XERA, we specialize in ceramic coating in Ottapalam that not only gives your vehicle an unmatched shine but also adds long-term protection from the elements. Whether you drive daily or only on weekends, your car deserves premium care.
                </p>
                
                {/* What Is Ceramic Coating */}
                <h2 className="text-2xl font-bold mt-10 mb-4 text-gradient">What Is Ceramic Coating?</h2>
                <p>
                  Ceramic coating is a high-tech, liquid polymer that chemically bonds with your car's factory paint. Unlike wax or polish, it doesn't wash off or break down over time. Think of it as a strong, invisible shield for your car.
                </p>
                <p>
                  At XERA, we use industry-leading 9H ceramic coatings and nano-coating technology to ensure your car is guarded against UV rays, acid rain, bird droppings, tree sap, and minor scratches.
                </p>
                
                {/* Top Benefits */}
                <h2 className="text-2xl font-bold mt-10 mb-6 text-gradient">Top Benefits of Ceramic Coating</h2>
                
                <div className="space-y-8 mb-10">
                  {/* Benefit 1 */}
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <Sun className="h-8 w-8 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Protection From UV and Fading</h3>
                      <p>Kerala's sun can be brutal. Ceramic coating prevents paint oxidation, keeping your car color deep and rich.</p>
                    </div>
                  </div>
                  
                  {/* Benefit 2 */}
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <Droplets className="h-8 w-8 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Hydrophobic Water Repellency</h3>
                      <p>Dirt and water slide right off, making your vehicle easier to clean and maintain.</p>
                    </div>
                  </div>
                  
                  {/* Benefit 3 */}
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <Shield className="h-8 w-8 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Scratch and Chemical Resistance</h3>
                      <p>Everyday elements like pollution, bird poop, and harsh soaps won't ruin your finish.</p>
                    </div>
                  </div>
                  
                  {/* Benefit 4 */}
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <Car className="h-8 w-8 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Glossy Mirror-Like Shine</h3>
                      <p>The rich, wet-look finish turns heads on the street — every time.</p>
                    </div>
                  </div>
                  
                  {/* Benefit 5 */}
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <Heart className="h-8 w-8 text-xera-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Increased Resale Value</h3>
                      <p>A well-protected car retains higher value. Buyers love a ceramic-coated car.</p>
                    </div>
                  </div>
                </div>
                
                {/* Why XERA */}
                <h2 className="text-2xl font-bold mt-10 mb-6 text-gradient">Why XERA Is Ottapalam's Ceramic Coating Expert</h2>
                <p>
                  With hundreds of satisfied customers across Ottapalam, Palakkad, and Thrissur, XERA is quickly becoming Kerala's go-to car detailing and ceramic coating expert.
                </p>
                
                <div className="bg-xera-darkgray/30 p-6 rounded-lg my-6 border border-white/10">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-xera-red mr-3 flex-shrink-0 mt-0.5" />
                      <span>Advanced 9H Ceramic Technology</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-xera-red mr-3 flex-shrink-0 mt-0.5" />
                      <span>Highly Trained Technicians</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-xera-red mr-3 flex-shrink-0 mt-0.5" />
                      <span>Affordable Packages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-xera-red mr-3 flex-shrink-0 mt-0.5" />
                      <span>Quick Turnaround</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-xera-red mr-3 flex-shrink-0 mt-0.5" />
                      <span>Doorstep Service (for select areas)</span>
                    </li>
                  </ul>
                </div>
                
                <p>
                  We also offer paint protection film (PPF), engine bay detailing, and interior ceramic treatments to ensure your entire car stays showroom fresh.
                </p>
                
                {/* Before and After */}
                <h2 className="text-2xl font-bold mt-10 mb-6 text-gradient">Real Results: Before & After</h2>
              </div>
              
              {/* Before/After Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div>
                  <img alt="Car before ceramic coating in Ottapalam - dull and dirty paint surface" className="w-full h-auto rounded-lg" loading="lazy" src="/lovable-uploads/0ce6d940-bdf2-495a-a7ba-2da69855c3a1.jpg" />
                  <p className="text-sm text-center text-white/70 mt-2">Before: Dull, unprotected paint</p>
                </div>
                <div>
                  <img src="/assets/ceramic-after.jpg" alt="Car after ceramic coating by XERA in Ottapalam - glossy and protected finish" className="w-full h-auto rounded-lg" loading="lazy" />
                  <p className="text-sm text-center text-white/70 mt-2">After: Glossy, protected finish</p>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-sm italic">No sliders. No gimmicks. Just real photos of our actual client cars taken right here in Ottapalam.</p>
                
                {/* FAQ Section */}
                <h2 className="text-2xl font-bold mt-10 mb-6 text-gradient">Frequently Asked Questions (FAQ)</h2>
                
                <div className="space-y-6 mb-10">
                  {faqItems.map((faq, index) => <div key={index} className="bg-xera-darkgray/30 p-6 rounded-lg border border-white/10">
                      <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>)}
                </div>
                
                {/* CTA Section */}
                <h2 className="text-2xl font-bold mt-10 mb-4 text-gradient">Ready to Protect Your Car?</h2>
                <p>
                  Visit XERA's detailing studio in Ottapalam or schedule a free ceramic coating consultation today. Whether you're in Shoranur, Pattambi, or Palakkad, we've got you covered.
                </p>
                
                <div className="bg-xera-red/10 border border-xera-red/20 rounded-lg p-6 mt-6 mb-10">
                  <div className="flex flex-col md:flex-row gap-6 justify-between">
                    <div className="space-y-2">
                      <div className="font-semibold">📞 Call now:</div>
                      <a href="tel:+919605858483" className="text-xera-red hover:underline">+91-9605858483</a>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold">📍 Find us:</div>
                      <a href="https://www.google.com/maps/place/Xera+Car+Wash+%26+Auto+Detailing+%7C+Car+Wash+in+Ottapalam+%7C+Ceramic+Coating+%26+Interior+Cleaning/@10.7670753,76.4074051,17z/" target="_blank" rel="noopener noreferrer" className="text-xera-red hover:underline">
                        Google Maps
                      </a>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold">🖱️ Book online:</div>
                      <Link to="/contact" className="text-xera-red hover:underline">
                        Contact page
                      </Link>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg font-bold">
                  Your car deserves the XERA shine. Don't wait — protect your paint and drive with pride.
                </p>
              </div>
              
              {/* Related posts and share section */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Link to="/blog/paint-correction-explained" className="bg-xera-darkgray rounded-lg p-4 hover:bg-xera-darkgray/70 transition-all">
                    <h4 className="font-bold mb-2">Paint Correction: Restoring Your Car's Perfect Finish</h4>
                    <p className="text-sm text-white/70">Learn how professional paint correction removes swirls and scratches</p>
                  </Link>
                  <Link to="/blog/ceramic-coating-care-tips" className="bg-xera-darkgray rounded-lg p-4 hover:bg-xera-darkgray/70 transition-all">
                    <h4 className="font-bold mb-2">5 Mistakes to Avoid After Ceramic Coating</h4>
                    <p className="text-sm text-white/70">Protect your investment with these essential care tips</p>
                  </Link>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="text-xl font-bold mb-4">Share This Article</h3>
                  <div className="flex gap-4">
                    <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')} className="bg-[#1877F2] text-white p-2 rounded-full hover:opacity-80 transition-opacity" aria-label="Share on Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </button>
                    <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(pageTitle + ' - ' + window.location.href)}`, '_blank')} className="bg-[#25D366] text-white p-2 rounded-full hover:opacity-80 transition-opacity" aria-label="Share on WhatsApp">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </button>
                    <button onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('URL copied to clipboard!');
                  }} className="bg-gray-700 text-white p-2 rounded-full hover:opacity-80 transition-opacity" aria-label="Copy URL">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* Blog post schema markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: generateBlogPostSchema("Why Ceramic Coating Is the Best Car Protection in Ottapalam", pageDescription, "https://xeradetailing.in/blog/ceramic-coating-ottapalam-car-protection", imageUrl, "2024-05-05", "XERA Car Wash & Auto Detailing", "XERA Car Wash & Auto Detailing", "https://xeradetailing.in/logo.png", ["ceramic coating", "Ottapalam", "car paint protection", "Kerala", "hydrophobic coating", "9H ceramic", "nano coating"])
      }} />
        
        {/* FAQ schema markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: generateFaqSchema(faqItems)
      }} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>;
};
export default CeramicCoatingOttapalam;