
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "5 Reasons Kerala Cars Need Ceramic Coating",
    slug: "why-kerala-cars-need-ceramic-coating",
    excerpt: "Owning a car in Kerala means dealing with blazing sun, heavy rain, muddy roads, and humidity — all of which can ruin your vehicle's paint. That's where ceramic coating comes in.",
    imageUrl: "https://lovable.dev/placeholder.svg", // Replace with actual image
    date: "2024-05-01",
    readTime: "4 min read"
  },
  {
    id: 2,
    title: "How Often Should You Get a Car Wash in Kerala?",
    slug: "car-wash-frequency-kerala",
    excerpt: "With our tropical climate and traffic-packed roads, cars in Kerala get dirty fast. But how often should you actually wash your vehicle?",
    imageUrl: "https://lovable.dev/placeholder.svg", // Replace with actual image
    date: "2024-05-01",
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "Bike Detailing Checklist for Monsoon Season",
    slug: "bike-detailing-kerala-monsoon",
    excerpt: "Rainy season in Kerala is beautiful — but for your bike, it's a nightmare. Follow this checklist to keep your ride rust-free and shiny.",
    imageUrl: "https://lovable.dev/placeholder.svg", // Replace with actual image
    date: "2024-05-01",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "5 Mistakes to Avoid After Ceramic Coating",
    slug: "ceramic-coating-care-tips",
    excerpt: "You've invested in ceramic coating — great! But don't let a few small mistakes ruin its performance.",
    imageUrl: "https://lovable.dev/placeholder.svg", // Replace with actual image
    date: "2024-05-01",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "Is Anti-Rust Underbody Coating Worth It in Palakkad?",
    slug: "underbody-coating-palakkad-value",
    excerpt: "Short answer: YES. Kerala's roads are full of moisture, mud, and salt — the perfect recipe for underbody rust.",
    imageUrl: "https://lovable.dev/placeholder.svg", // Replace with actual image
    date: "2024-05-01",
    readTime: "3 min read"
  },
  {
    id: 6,
    title: "Foam Wash vs Pressure Wash: What's Better for Your Car in Kerala?",
    slug: "foam-vs-pressure-wash-kerala",
    excerpt: "Both clean your car — but they're not the same. Which one should you choose?",
    imageUrl: "https://lovable.dev/placeholder.svg", // Replace with actual image
    date: "2024-05-01",
    readTime: "3 min read"
  }
];

const Blog = () => {
  // Update document title for SEO
  useEffect(() => {
    document.title = "Car Detailing Blog | Auto Care Tips by XERA Kerala";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      "Expert car care tips, ceramic coating guides, and auto detailing advice for Kerala's climate. Read XERA's blog for professional car maintenance insights."
    );
    
    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://xeradetailing.in/blog');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-20 flex-grow">
        <div className="bg-xera-darkgray py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-gradient">Auto Care Blog</h1>
            <p className="text-center text-white/70 max-w-3xl mx-auto">
              Expert tips and insights on car detailing, ceramic coating, and vehicle maintenance for Kerala's unique climate.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group glass-card p-0 overflow-hidden rounded-xl flex flex-col transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
                >
                  <div className="aspect-video w-full overflow-hidden bg-gray-900">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center text-sm text-white/60 mb-3 gap-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-xera-red transition-colors">{post.title}</h2>
                    <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-xera-red font-semibold">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* BlogPosting schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "headline": "XERA Auto Care Blog",
              "description": "Expert car care tips, ceramic coating guides, and auto detailing advice for Kerala's climate.",
              "publisher": {
                "@type": "Organization",
                "name": "XERA Car Wash & Auto Detailing",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://xeradetailing.in/logo.png"
                }
              },
              "blogPost": blogPosts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "datePublished": post.date,
                "mainEntityOfPage": `https://xeradetailing.in/blog/${post.slug}`,
                "author": {
                  "@type": "Organization",
                  "name": "XERA Car Wash & Auto Detailing"
                }
              }))
            })
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
