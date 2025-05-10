
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from './tracking/AnalyticsProvider';
import { motion } from 'framer-motion';
import EnhancedImage from './ui/enhanced-image';

const BlogPreviewSection = () => {
  // Get the latest 3 blog posts
  const latestPosts = [...blogPosts].slice(0, 3);
  
  return (
    <section className="py-16 md:py-24 bg-xera-darkgray" id="blog-preview">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Car Care Tips & Resources
          </h2>
          <p className="text-white/70">
            Expert advice, maintenance tips, and guides to help you keep your vehicle looking and performing its best in Kerala's climate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {latestPosts.map((post, index) => (
            <motion.div 
              key={post.slug} 
              className="glass-card rounded-lg overflow-hidden border border-white/10 hover:border-xera-red/50 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(255, 0, 0, 0.2)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link 
                to={`/blog/${post.slug}`}
                onClick={() => trackEvent('home_blog_card_click', { post_title: post.title })}
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <EnhancedImage
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-60 object-cover"
                    aspectRatio="16/9"
                  />
                  <div className="absolute top-3 right-3 bg-xera-red text-white text-xs py-1 px-2 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 hover:text-xera-red transition-colors">{post.title}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-white/50">
                    <span>{post.date}</span>
                    <span className="flex items-center text-xera-red hover:underline">
                      Read More <ArrowRight className="ml-1 w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link to="/blog">
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => trackEvent('home_view_all_blogs_click')}
            >
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
