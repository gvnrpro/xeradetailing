
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BlogGallery from '@/components/BlogGallery';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import LeadMagnetForm from '@/components/enhanced/LeadMagnetForm';
import TrustSignals, { CustomerPhotos } from '@/components/enhanced/TrustSignals';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';
import { setPageMetadata, generateSchemaMarkup } from '@/utils/seoHelper';
import { locationKeywords } from '@/utils/seoKeywords';

const Blog = () => {
  // Update SEO metadata when component mounts
  useEffect(() => {
    setPageMetadata(
      "Auto Detailing Blog & Resources | XERA Detailing Ottapalam", 
      "Expert auto care tips, ceramic coating guides, and Kerala-specific car protection articles from XERA - Ottapalam's premier car detailing studio.",
      "https://xeradetailing.in/blog",
      "https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
      [
        "ceramic coating blog",
        "car detailing tips ottapalam",
        "kerala car care guide",
        "xera detailing blog",
        "auto detailing resources",
        "car protection kerala climate",
        "ceramic coating benefits",
        "car maintenance tips monsoon",
        "professional car care advice",
        "car detailing blog palakkad"
      ]
    );
    
    // Track page view
    trackEvent('view_blog_page');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BreadcrumbNav currentPage="Blog" />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Auto Detailing Blog & Resources</h1>
            <p className="text-white/70 max-w-2xl">
              Expert car care tips, ceramic coating guides, and Kerala-specific protection articles from XERA's professional detailers.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main content - Blog Gallery */}
            <div className="col-span-1 md:col-span-2">
              <BlogGallery />
            </div>
            
            {/* Sidebar */}
            <div className="col-span-1 space-y-8">
              <LeadMagnetForm
                title="Free Car Care Checklist"
                description="Get our guide to maintaining your car's finish in Kerala's harsh weather conditions."
                buttonText="Download Free Guide"
              />
              
              <TrustSignals variant="review-widget" />
              
              <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3">Popular Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/services/ceramic-coating" className="flex items-center text-white/80 hover:text-xera-red transition-colors p-1">
                      <span className="mr-2">→</span>
                      <span>Ceramic Coating in {locationKeywords.primary}</span>
                    </a>
                  </li>
                  <li>
                    <a href="/services/express-wash" className="flex items-center text-white/80 hover:text-xera-red transition-colors p-1">
                      <span className="mr-2">→</span>
                      <span>Express Car Wash Services</span>
                    </a>
                  </li>
                  <li>
                    <a href="/services/engine-bay-cleaning" className="flex items-center text-white/80 hover:text-xera-red transition-colors p-1">
                      <span className="mr-2">→</span>
                      <span>Engine Bay Detailing</span>
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="flex items-center text-white/80 hover:text-xera-red transition-colors p-1">
                      <span className="mr-2">→</span>
                      <span>View All Services</span>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3">Service Areas</h3>
                <ul className="grid grid-cols-2 gap-1">
                  {[locationKeywords.primary, ...locationKeywords.nearby.slice(0, 5)].map((location, index) => (
                    <li key={index}>
                      <a href="/services" className="text-white/80 hover:text-xera-red transition-colors text-sm p-1 block">
                        {location}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <section className="my-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Satisfied Customers Across Palakkad</h2>
            <CustomerPhotos />
          </section>
        </div>
        
        {/* Article Schema markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateSchemaMarkup('Article', {
              "headline": "Auto Detailing Blog & Resources",
              "description": "Expert auto care tips, ceramic coating guides, and Kerala-specific car protection articles.",
              "keywords": "ceramic coating blog, car detailing tips ottapalam, kerala car care guide, xera detailing blog, auto detailing resources",
              "author": {
                "@type": "Organization",
                "name": "XERA Car Wash & Auto Detailing",
                "url": "https://xeradetailing.in"
              },
              "publisher": {
                "@type": "Organization",
                "name": "XERA Car Wash & Auto Detailing",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://xeradetailing.in/logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://xeradetailing.in/blog"
              }
            })
          }}
        />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateSchemaMarkup('BreadcrumbList', {
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://xeradetailing.in/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog",
                  "item": "https://xeradetailing.in/blog"
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

export default Blog;
