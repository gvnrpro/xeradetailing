
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/data/blogPosts';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';

interface RelatedContentProps {
  relatedPosts?: BlogPost[];
  posts?: BlogPost[];
  items?: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    link: string;
  }[];
  title?: string;
}

const RelatedContent = ({ relatedPosts, posts, items, title = "Related Articles" }: RelatedContentProps) => {
  // Determine which content to use - priority: relatedPosts, posts, items
  const contentToShow = relatedPosts || posts || items;
  
  if (!contentToShow || contentToShow.length === 0) {
    return null;
  }
  
  const renderBlogPost = (post: BlogPost) => (
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
            {post.categories?.slice(0, 2).map((category) => (
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
  );

  const renderCustomItem = (item: any, index: number) => (
    <Link
      key={index}
      to={item.link}
      className="group"
      onClick={() => trackEvent('related_item_click', { item_title: item.title })}
    >
      <div className="bg-xera-darkgray border border-xera-lightgray overflow-hidden rounded-lg transition-all duration-300 group-hover:border-xera-red h-full flex flex-col">
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={item.image} 
            alt={item.imageAlt || item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h4 className="text-lg font-bold mb-2 group-hover:text-xera-red transition-colors">
            {item.title}
          </h4>
          <p className="text-white/60 text-sm line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
    </Link>
  );
  
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts || posts 
          ? (relatedPosts || posts).map(renderBlogPost) 
          : items?.map(renderCustomItem)}
      </div>
    </div>
  );
};

export default RelatedContent;
