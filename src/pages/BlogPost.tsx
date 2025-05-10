
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StickyCTA from '@/components/enhanced/StickyCTA';
import { setPageMetadata, generateSchemaMarkup, generateBlogPostSchema } from '@/utils/seoHelper';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import TableOfContents from '@/components/enhanced/TableOfContents';
import RelatedContent from '@/components/enhanced/RelatedContent';
import TrustSignals from '@/components/enhanced/TrustSignals';
import LeadMagnetForm from '@/components/enhanced/LeadMagnetForm';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';
import { locationKeywords } from '@/utils/seoKeywords';
import { blogPosts } from '@/data/blogPosts';
import ReviewButton from '@/components/enhanced/ReviewButton';
import EnhancedImage from '@/components/ui/enhanced-image';
import LimitedOfferModal from '@/components/enhanced/LimitedOfferModal';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [headings, setHeadings] = useState<Array<{id: string, text: string, level: number}>>([]);
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    // Find the current post from blogPosts data
    const currentPost = blogPosts.find(p => p.slug === slug);

    if (currentPost) {
      setPost(currentPost);

      // Set post-specific SEO metadata
      setPageMetadata(
        `${currentPost.title} | XERA Auto Detailing Blog`,
        currentPost.excerpt,
        `https://xeradetailing.in/blog/${slug}`,
        currentPost.coverImage,
        currentPost.keywords
      );

      // Add structured data for blog post
      const blogSchema = document.createElement('script');
      blogSchema.type = 'application/ld+json';
      blogSchema.text = generateBlogPostSchema(
        currentPost.title,
        currentPost.excerpt,
        `https://xeradetailing.in/blog/${slug}`,
        currentPost.coverImage,
        currentPost.date,
        "XERA Auto Detailing",
        "XERA Car Wash & Auto Detailing",
        "https://xeradetailing.in/logo.png",
        currentPost.keywords,
        "Complete article content goes here..." // Replace with actual content
      );
      document.head.appendChild(blogSchema);
    }

    // Track page view
    trackEvent('view_blog_post', { post_slug: slug });
    
    // Scan the article for headings once it's rendered
    setTimeout(() => {
      const articleElement = document.querySelector('article');
      if (articleElement) {
        const headingElements = articleElement.querySelectorAll('h2, h3');
        const extractedHeadings = Array.from(headingElements).map((heading, index) => {
          const id = heading.id || `heading-${index}`;
          if (!heading.id) {
            heading.id = id;
          }
          
          return {
            id,
            text: heading.textContent || '',
            level: parseInt(heading.tagName.replace('H', ''), 10)
          };
        });
        
        setHeadings(extractedHeadings);
      }
    }, 500);

    // Cleanup function to remove the schema when component unmounts
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.innerHTML.includes(slug || '')) {
          document.head.removeChild(script);
        }
      });
    };
  }, [slug]);

  // Get related posts based on category
  const relatedPosts = post
    ? blogPosts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3)
    : blogPosts.slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading post...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BreadcrumbNav 
        items={[
          { label: 'Blog', href: '/blog' }
        ]}
        currentPage={post.title || ''}
      />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <article className="prose prose-invert prose-sm md:prose-base lg:prose-lg mx-auto">
            <header className="not-prose mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-xera-red/20 text-xera-red text-xs px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="bg-black/20 text-white/70 text-xs px-2 py-1 rounded">
                  {post.date}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <p className="text-white/70 text-lg mb-6">{post.excerpt}</p>
              
              <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden">
                <EnhancedImage
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full object-cover"
                  priority={true}
                  useWebp={true}
                />
              </div>
            </header>

            <div className="blog-content">
              <h2 id="section1">Introduction</h2>
              <p>
                This is the full article content. It should be replaced with the actual blog post content for {post.title}.
              </p>
              <h2 id="section2">Key Points</h2>
              <p>Content for key points section.</p>
              <h2 id="section3">Conclusion</h2>
              <p>Content for conclusion.</p>
            </div>
          </article>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <TableOfContents headings={headings} />
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Share this article:</h3>
                <div className="flex gap-4">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://xeradetailing.in/blog/${slug}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                    onClick={() => trackEvent('share_article', { platform: 'facebook', article: slug })}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://xeradetailing.in/blog/${slug}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black text-white p-2 rounded-full hover:bg-gray-800"
                    onClick={() => trackEvent('share_article', { platform: 'twitter', article: slug })}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - https://xeradetailing.in/blog/${slug}`)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
                    onClick={() => trackEvent('share_article', { platform: 'whatsapp', article: slug })}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <LeadMagnetForm
                title="Free Car Care Checklist"
                description="Download our free checklist to keep your car in top condition."
                buttonText="Download Checklist"
              />
              
              <div className="mt-6">
                <TrustSignals variant="review-widget" />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <RelatedContent relatedPosts={relatedPosts} />
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <StickyCTA />
      <ReviewButton />
      <LimitedOfferModal />
    </div>
  );
};

export default BlogPost;
