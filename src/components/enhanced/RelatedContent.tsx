
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/data/blogPosts';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';

interface RelatedContentProps {
  relatedPosts: BlogPost[];
}

const RelatedContent = ({ relatedPosts }: RelatedContentProps) => {
  if (!relatedPosts || relatedPosts.length === 0) {
    return null;
  }
  
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/car-care-tips/${post.slug}`}
            className="group"
            onClick={() => trackEvent('related_post_click', { post_title: post.title })}
          >
            <div className="bg-xera-darkgray border border-xera-lightgray overflow-hidden rounded-lg transition-all duration-300 group-hover:border-xera-red h-full flex flex-col">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.imageAlt || post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.categories.slice(0, 2).map((category) => (
                    <Badge 
                      key={category} 
                      variant="outline" 
                      className="text-xs text-white/80 border-white/30"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-xera-red transition-colors">
                  {post.title}
                </h4>
                <p className="text-white/60 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedContent;
