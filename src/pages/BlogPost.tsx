
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StickyCTA from '@/components/enhanced/StickyCTA';
import { setPageMetadata, generateSchemaMarkup } from '@/utils/seoHelper';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import TableOfContents from '@/components/enhanced/TableOfContents';
import RelatedContent from '@/components/enhanced/RelatedContent';
import TrustSignals from '@/components/enhanced/TrustSignals';
import LeadMagnetForm from '@/components/enhanced/LeadMagnetForm';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';
import { locationKeywords } from '@/utils/seoKeywords';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [headings, setHeadings] = useState<Array<{id: string, text: string, level: number}>>([]);

  useEffect(() => {
    // Simulate fetching blog post data based on ID
    const postTitle = `Article: ${slug}`;
    const postDescription = `This is a sample blog post about ${slug}.`;
    const postUrl = `https://xeradetailing.in/blog/${slug}`;

    setPageMetadata(
      postTitle,
      postDescription,
      postUrl,
      "https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
      [
        "ceramic coating blog",
        "car detailing tips ottapalam",
        "kerala car care guide",
        "xera detailing blog",
        "auto detailing resources",
      ]
    );

    // Track page view
    trackEvent('view_blog_post', { post_id: slug });
    
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
  }, [slug]);

  // Sample related content based on actual blog posts data
  const relatedPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BreadcrumbNav 
        items={[
          { label: 'Blog', href: '/blog' }
        ]}
        currentPage={slug || ''}
      />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <article className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
            <h1>{`Blog Post: ${slug}`}</h1>
            <p>
              This is a sample blog post content. You can replace this with
              actual content fetched from a CMS or database.
            </p>
            <h2 id="section1">Section 1</h2>
            <p>Content for section 1.</p>
            <h2 id="section2">Section 2</h2>
            <p>Content for section 2.</p>
          </article>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <TableOfContents headings={headings} />
            </div>
            <div className="md:col-span-1">
              <LeadMagnetForm
                title="Free Car Care Checklist"
                description="Download our free checklist to keep your car in top condition."
                buttonText="Download Checklist"
              />
              <TrustSignals variant="review-widget" />
            </div>
          </div>

          <div className="mt-12">
            <RelatedContent relatedPosts={relatedPosts} />
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
};

export default BlogPost;
