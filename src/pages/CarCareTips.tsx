
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';
import { setPageMetadata, generateSchemaMarkup } from '@/utils/seoHelper';
import { locationKeywords } from '@/utils/seoKeywords';
import LeadMagnetForm from '@/components/enhanced/LeadMagnetForm';
import EnhancedCTA from '@/components/enhanced/EnhancedCTA';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';

const CarCareTips = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Set page metadata for SEO
    setPageMetadata(
      "Auto Care Tips From XERA Detailing | Expert Car Care Advice Kerala",
      "Discover professional auto care tips from XERA Detailing experts. Learn about ceramic coating, interior detailing, monsoon protection, and more for Kerala drivers.",
      "https://xeradetailing.in/car-care-tips",
      "https://xeradetailing.in/lovable-uploads/c9c32a28-bc86-481a-8eff-6cc44b442248.png",
      [
        "car care tips kerala",
        "auto detailing advice",
        "ceramic coating maintenance",
        "monsoon car protection",
        "kerala car wash guide",
        "ottapalam car care",
        "palakkad detailing tips",
        "car protection kerala climate",
        "professional car maintenance",
        "XERA detailing guides"
      ]
    );

    // Track page view
    trackEvent('view_content_hub');
  }, []);

  // Filter posts based on search term and active filter
  useEffect(() => {
    let results = blogPosts;
    
    // Filter by category if not "all"
    if (activeFilter !== 'all') {
      results = results.filter(post => 
        post.categories.includes(activeFilter)
      );
    }
    
    // Then filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.categories.some(category => category.toLowerCase().includes(term))
      );
    }
    
    setFilteredPosts(results);
  }, [searchTerm, activeFilter]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    trackEvent('content_hub_search', { search_term: e.target.value });
  };

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    trackEvent('content_hub_filter', { filter });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BreadcrumbNav currentPage="Car Care Tips" />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Auto Care Tips From XERA Detailing</h1>
            <p className="text-white/70 max-w-3xl">
              Expert advice, pro techniques, and insider knowledge on maintaining your vehicle in Kerala's challenging climate. 
              From ceramic coating care to monsoon protection, our team shares their best tips.
            </p>
          </header>
          
          {/* Search and Filter Section */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={16} />
                <Input 
                  type="search" 
                  placeholder="Search tips and guides..." 
                  className="pl-10 bg-xera-darkgray border-xera-lightgray"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              
              <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={handleFilterChange}>
                <TabsList className="bg-xera-darkgray">
                  <TabsTrigger value="all">All Tips</TabsTrigger>
                  <TabsTrigger value="ceramic-coating">Ceramic Coating</TabsTrigger>
                  <TabsTrigger value="interior-detailing">Interior</TabsTrigger>
                  <TabsTrigger value="monsoon">Monsoon</TabsTrigger>
                  <TabsTrigger value="bike-care">Bike Care</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts Grid */}
            <div className="col-span-1 lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <BlogPostCard 
                      key={post.slug} 
                      post={post} 
                    />
                  ))
                ) : (
                  <div className="col-span-full py-8 text-center">
                    <p className="text-white/70">No articles found matching your search. Try another term or browse our categories.</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-span-1 space-y-6">
              {/* Lead Magnet Form */}
              <LeadMagnetForm
                title="FREE Car Care Checklist for Kerala Drivers"
                description="Download our expert guide to keeping your car protected in Kerala's harsh climate. Includes monsoon preparation tips!"
                buttonText="Get Free Checklist Now"
              />
              
              {/* CTA */}
              <div className="bg-gradient-to-r from-xera-darkgray to-black border border-xera-lightgray rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gradient">Ready for Pro-Level Protection?</h3>
                <p className="text-white/70 mb-4">
                  Turn theory into practice. Book your ceramic coating session with our experts.
                </p>
                <EnhancedCTA
                  text="Book Ceramic Coating"
                  href="/services/ceramic-coating"
                  variant="primary"
                  shimmerEffect={true}
                  trackingLabel="sidebar_ceramic_cta"
                />
              </div>
              
              {/* Popular Articles */}
              <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Popular Articles</h3>
                <ul className="space-y-3">
                  {blogPosts.slice(0, 5).map((post) => (
                    <li key={post.slug}>
                      <Link 
                        to={`/car-care-tips/${post.slug}`}
                        className="flex items-start space-x-3 text-white/80 hover:text-xera-red transition-colors"
                        onClick={() => trackEvent('popular_article_click', { article: post.title })}
                      >
                        <div className="w-16 h-12 bg-black/30 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium leading-tight">{post.title}</h4>
                          <div className="flex mt-1">
                            {post.categories.slice(0, 2).map((category) => (
                              <Badge key={category} variant="outline" className="text-xs mr-1">{category}</Badge>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Location Links */}
              <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Our Service Locations</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/ceramic-coating-palakkad" className="text-white/80 hover:text-xera-red transition-colors flex">
                      <span className="mr-2">→</span>
                      <span>Ceramic Coating in Palakkad</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/car-detailing-shoranur" className="text-white/80 hover:text-xera-red transition-colors flex">
                      <span className="mr-2">→</span>
                      <span>Car Detailing in Shoranur</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/car-wash-pattambi" className="text-white/80 hover:text-xera-red transition-colors flex">
                      <span className="mr-2">→</span>
                      <span>Car Wash Services in Pattambi</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/paint-protection-perinthalmanna" className="text-white/80 hover:text-xera-red transition-colors flex">
                      <span className="mr-2">→</span>
                      <span>Paint Protection in Perinthalmanna</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/interior-cleaning-mannarkkad" className="text-white/80 hover:text-xera-red transition-colors flex">
                      <span className="mr-2">→</span>
                      <span>Interior Cleaning in Mannarkkad</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* BlogPosting Schema for the Content Hub */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateSchemaMarkup('WebSite', {
              "@id": "https://xeradetailing.in/car-care-tips#website",
              "name": "XERA Detailing Car Care Tips",
              "url": "https://xeradetailing.in/car-care-tips",
              "description": "Expert car care advice, ceramic coating tips, and auto detailing guides from XERA professionals in Kerala",
              "publisher": {
                "@type": "Organization",
                "name": "XERA Car Wash & Auto Detailing",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://xeradetailing.in/logo.png"
                }
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
                  "name": "Car Care Tips",
                  "item": "https://xeradetailing.in/car-care-tips"
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

export default CarCareTips;
