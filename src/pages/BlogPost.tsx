import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { setPageMetadata, generateSchemaMarkup } from '@/utils/seoHelper';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import TableOfContents from '@/components/enhanced/TableOfContents';
import RelatedContent from '@/components/enhanced/RelatedContent';
import TrustSignals from '@/components/enhanced/TrustSignals';
import LeadMagnetForm from '@/components/enhanced/LeadMagnetForm';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';
import { locationKeywords } from '@/utils/seoKeywords';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // Simulate fetching blog post data based on ID
    const postTitle = `Article: ${id}`;
    const postDescription = `This is a sample blog post about ${id}.`;
    const postUrl = `https://xeradetailing.in/blog/${id}`;

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
    trackEvent('view_blog_post', { post_id: id });
  }, [id]);

  // Sample related content
  const relatedContent = [
    {
      title: "Ceramic Coating Benefits",
      description: "Learn about the long-term benefits of ceramic coating for your car.",
      image: "/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png",
      imageAlt: "Ceramic coating benefits",
      link: "/blog/ceramic-coating-benefits",
    },
    {
      title: "Express Car Wash Guide",
      description: "A quick guide to express car wash services.",
      image: "/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png",
      imageAlt: "Express car wash guide",
      link: "/blog/express-car-wash-guide",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BreadcrumbNav 
        items={[
          { label: 'Blog', href: '/blog' }
        ]}
        currentPage={id}
      />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <article className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
            <h1>{`Blog Post: ${id}`}</h1>
            <p>
              This is a sample blog post content. You can replace this with
              actual content fetched from a CMS or database.
            </p>
            <h2>Table of Contents</h2>
            <ul>
              <li>
                <Link to="#section1">Section 1</Link>
              </li>
              <li>
                <Link to="#section2">Section 2</Link>
              </li>
            </ul>
            <h2 id="section1">Section 1</h2>
            <p>Content for section 1.</p>
            <h2 id="section2">Section 2</h2>
            <p>Content for section 2.</p>
          </article>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <TableOfContents 
                containerSelector="article"
                headingSelectors="h2, h3"
              />
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

          <RelatedContent 
            title="Related Articles"
            items={relatedContent}
          />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
