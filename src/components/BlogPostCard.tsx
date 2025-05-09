
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/data/blogPosts';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogPostCard = ({ post, featured = false }: BlogPostCardProps) => {
  const handleClick = () => {
    trackEvent('blog_post_click', { 
      post_title: post.title,
      post_slug: post.slug,
      featured: featured ? 'yes' : 'no'
    });
  };
  
  return (
    <Card 
      className={`overflow-hidden bg-xera-darkgray border-xera-lightgray hover:border-xera-red transition-all duration-300 group ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="relative overflow-hidden">
        <Link to={`/car-care-tips/${post.slug}`} onClick={handleClick}>
          <div className="aspect-video overflow-hidden">
            <img 
              src={post.image} 
              alt={post.imageAlt || post.title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              width="600"
              height="337"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70 opacity-70"></div>
        </Link>
      </div>
      
      <CardContent className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.map((category) => (
            <Badge 
              key={category} 
              variant="outline" 
              className="text-xs text-white/80 border-white/30 hover:bg-xera-red hover:text-white hover:border-xera-red transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>
        <Link to={`/car-care-tips/${post.slug}`} onClick={handleClick}>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-xera-red transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-white/70 line-clamp-3 mb-3">
          {post.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="px-5 pb-5 pt-0 flex justify-between items-center">
        <div className="text-sm text-white/50">
          {post.date}
        </div>
        <Link 
          to={`/car-care-tips/${post.slug}`}
          className="text-sm font-medium text-xera-red hover:text-white transition-colors"
          onClick={handleClick}
        >
          Read More →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
