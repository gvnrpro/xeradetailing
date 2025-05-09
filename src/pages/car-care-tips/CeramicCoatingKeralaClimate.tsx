import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LeadMagnetForm from '@/components/enhanced/LeadMagnetForm';
import EnhancedCTA from '@/components/enhanced/EnhancedCTA';
import TableOfContents from '@/components/enhanced/TableOfContents';
import RelatedContent from '@/components/enhanced/RelatedContent';
import { blogPosts } from '@/data/blogPosts';
import { setPageMetadata, generateBlogPostSchema } from '@/utils/seoHelper';
import { trackEvent, trackScroll } from '@/components/tracking/AnalyticsProvider';

const CeramicCoatingKeralaClimate = () => {
  const post = blogPosts.find(post => post.slug === "ceramic-coating-kerala-climate");
  
  useEffect(() => {
    // Set page metadata
    if (post) {
      setPageMetadata(
        post.metaTitle,
        post.metaDescription,
        `https://xeradetailing.in/car-care-tips/${post.slug}`,
        post.image,
        post.keywords
      );
      
      // Track page view
      trackEvent('view_blog_post', { 
        post_title: post.title,
        post_slug: post.slug,
        categories: post.categories.join(', ')
      });
      
      // Set up scroll tracking
      const cleanup = trackScroll();
      return cleanup;
    }
  }, [post]);

  // If post not found
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <p className="mb-8">Sorry, the blog post you're looking for doesn't exist or has been moved.</p>
          <Link to="/car-care-tips" className="text-xera-red hover:underline">
            Return to Car Care Tips
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Extract table of contents from the post content
  const getTableOfContents = () => {
    const headings: {id: string, text: string, level: number}[] = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content, 'text/html');
    const h2Elements = doc.querySelectorAll('h2');
    const h3Elements = doc.querySelectorAll('h3');
    const h4Elements = doc.querySelectorAll('h4');
    
    h2Elements.forEach((h2, index) => {
      const text = h2.textContent || `Section ${index + 1}`;
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      headings.push({ id, text, level: 2 });
    });
    
    h3Elements.forEach((h3, index) => {
      const text = h3.textContent || `Subsection ${index + 1}`;
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      headings.push({ id, text, level: 3 });
    });
    
    h4Elements.forEach((h4, index) => {
      const text = h4.textContent || `Subsection ${index + 1}`;
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      headings.push({ id, text, level: 4 });
    });
    
    return headings;
  };
  
  // Process content to add IDs to headings
  const processedContent = post.content.replace(/<(h[2-4])>(.*?)<\/h[2-4]>/g, (match, tag, content) => {
    const id = content.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `<${tag} id="${id}">${content}</${tag}>`;
  });
  
  // Get related posts
  const relatedPosts = blogPosts
    .filter(relatedPost => 
      relatedPost.id !== post.id && 
      relatedPost.categories.some(category => post.categories.includes(category))
    )
    .slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <BreadcrumbNav 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Car Care Tips', href: '/car-care-tips' },
          { label: post.title, href: `/car-care-tips/${post.slug}` }
        ]}
      />
      
      <main className="flex-grow">
        <article className="container mx-auto px-4 py-8">
          <header className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="text-white/80 border-white/30"
                >
                  {category}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{post.title}</h1>
            
            <p className="text-white/70 text-lg mb-6">{post.excerpt}</p>
            
            <div className="flex items-center justify-between text-white/50 text-sm border-t border-b border-white/10 py-3">
              <div>By {post.author} • {post.date}</div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href
                    });
                    trackEvent('share_blog_post', { post_slug: post.slug });
                  }}
                  className="flex items-center hover:text-white transition-colors"
                >
                  Share
                </button>
              </div>
            </div>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
            {/* Sidebar with TOC */}
            <div className="hidden lg:block lg:col-span-3 relative">
              <div className="sticky top-24">
                <TableOfContents headings={getTableOfContents()} />
                <div className="mt-8">
                  <EnhancedCTA
                    text="Book Ceramic Coating"
                    href="/services/ceramic-coating"
                    variant="primary"
                    shimmerEffect={true}
                    size="sm"
                    className="w-full"
                    trackingLabel="blog_sidebar_cta"
                  />
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <img 
                  src={post.image} 
                  alt={post.imageAlt || post.title}
                  className="w-full h-auto rounded-lg"
                  width="800"
                  height="450"
                />
              </div>
              
              <div 
                className="prose prose-invert prose-lg max-w-none prose-headings:text-gradient prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-white/80 prose-a:text-xera-red hover:prose-a:text-white prose-li:text-white/80"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />
              
              <div className="mt-12 border-t border-white/10 pt-8">
                <h3 className="text-xl font-bold mb-4">Services Mentioned in This Article</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link 
                    to="/services/ceramic-coating"
                    className="bg-xera-darkgray border border-xera-lightgray hover:border-xera-red p-4 rounded-lg transition-colors flex items-center"
                  >
                    <div>
                      <h4 className="font-bold mb-1">Ceramic Coating</h4>
                      <p className="text-sm text-white/60">Premium 9H ceramic protection</p>
                    </div>
                    <ArrowRight className="ml-auto" size={16} />
                  </Link>
                  <Link 
                    to="/services/express-wash"
                    className="bg-xera-darkgray border border-xera-lightgray hover:border-xera-red p-4 rounded-lg transition-colors flex items-center"
                  >
                    <div>
                      <h4 className="font-bold mb-1">Express Wash</h4>
                      <p className="text-sm text-white/60">Quick but thorough cleaning</p>
                    </div>
                    <ArrowRight className="ml-auto" size={16} />
                  </Link>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 p-6 bg-gradient-to-r from-xera-darkgray to-black border border-xera-lightgray rounded-lg">
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold mb-2">Want Expert Ceramic Coating in Kerala?</h3>
                  <p className="text-white/70">Book a consultation with our team to protect your vehicle today.</p>
                </div>
                <div>
                  <EnhancedCTA
                    text="Book a Consultation"
                    href="/contact"
                    variant="primary"
                    shimmerEffect={true}
                    pulseEffect={true}
                    trackingLabel="blog_bottom_cta"
                  />
                </div>
              </div>
              
              {/* Tags */}
              <div className="mt-8">
                <h4 className="text-sm uppercase text-white/50 mb-2">Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((keyword, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="bg-black/30 hover:bg-black/50 text-white/70 cursor-pointer"
                      onClick={() => trackEvent('tag_click', { tag: keyword })}
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Related Posts */}
              <div className="mt-12">
                <RelatedContent relatedPosts={relatedPosts} />
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <LeadMagnetForm
                  title="Free Kerala Car Care Checklist"
                  description="Get our complete guide to protecting your vehicle in Kerala's challenging climate."
                  buttonText="Download Free Guide"
                  className="mb-6"
                />
                
                <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-bold mb-3">Local Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/ceramic-coating-palakkad" className="text-white/80 hover:text-xera-red transition-colors text-sm flex">
                        <span className="mr-2">→</span>
                        <span>Ceramic Coating Palakkad</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/car-detailing-shoranur" className="text-white/80 hover:text-xera-red transition-colors text-sm flex">
                        <span className="mr-2">→</span>
                        <span>Car Detailing Shoranur</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/car-wash-pattambi" className="text-white/80 hover:text-xera-red transition-colors text-sm flex">
                        <span className="mr-2">→</span>
                        <span>Car Wash Pattambi</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* BlogPosting Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateBlogPostSchema(
              post.title,
              post.excerpt,
              `https://xeradetailing.in/car-care-tips/${post.slug}`,
              post.image,
              post.date,
              post.author,
              "XERA Car Wash & Auto Detailing",
              "https://xeradetailing.in/logo.png",
              post.keywords,
              post.content.replace(/<[^>]*>?/gm, ' ').substring(0, 5000)
            )
          }}
        />
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does ceramic coating last in Kerala's climate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A professionally applied ceramic coating can last 3-5 years in Kerala with proper maintenance. This is significantly longer than traditional wax (3-4 months) or sealants (6-8 months)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is ceramic coating worth the cost in Kerala?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Kerala's climate is particularly harsh on vehicles, with intense UV radiation, heavy monsoons, and high humidity. Ceramic coating provides superior protection against these specific environmental challenges, making it an excellent investment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can ceramic coating be applied to older cars?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, ceramic coating can be applied to vehicles of any age. However, older cars may require more extensive prep work, including paint correction to remove existing damage before coating."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I maintain my ceramic coating during monsoon season?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Regular washing (at least weekly) with pH-neutral car shampoo, avoiding harsh chemicals, and immediate cleaning of bird droppings or tree sap will help maintain your coating during the rainy season."
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

export default CeramicCoatingKeralaClimate;
