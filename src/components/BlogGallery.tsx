
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { getImageAlt } from '@/utils/imageOptimization';

// Sample blog post data with SEO-optimized images
const blogPosts = [
  {
    id: 'ceramic-coating-benefits',
    title: 'The Ultimate Guide to Ceramic Coating in Kerala',
    excerpt: 'Learn why ceramic coating is essential for protecting your car against Kerala\'s harsh climate conditions, from monsoon rains to intense sun exposure.',
    category: 'Ceramic Coating',
    date: '2024-05-01',
    image: '/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png',
    alt: getImageAlt('Kerala car protected with ceramic coating during monsoon', 'Ottapalam')
  },
  {
    id: 'interior-detailing-guide',
    title: 'Interior Detailing for Kerala Climate: Protection Guide',
    excerpt: 'Discover how professional interior detailing can protect your car from humidity damage and keep your family safe from allergens.',
    category: 'Interior Detailing',
    date: '2024-04-25',
    image: '/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png',
    alt: getImageAlt('Premium car interior after XERA professional detailing', 'Ottapalam')
  },
  {
    id: 'professional-detailing-studio',
    title: 'Why Choose a Professional Detailing Studio Over DIY',
    excerpt: 'The benefits of professional equipment, controlled environments and expert techniques for superior results that last longer.',
    category: 'Professional Detailing',
    date: '2024-04-18',
    image: '/lovable-uploads/7dbc3f0f-1641-4d72-a5df-75f309fe9aab.png',
    alt: getImageAlt('XERA professional detailing studio with controlled environment', 'Ottapalam')
  },
  {
    id: 'paint-protection-options',
    title: 'Paint Protection Options for Kerala\'s Climate Challenges',
    excerpt: 'Compare ceramic coatings, PPF, waxes and other protection methods to find what works best for your vehicle in Kerala.',
    category: 'Paint Protection',
    date: '2024-04-10',
    image: '/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png',
    alt: getImageAlt('Black luxury car with premium ceramic coating shine', 'Ottapalam')
  },
  {
    id: 'headlight-restoration',
    title: 'Headlight Restoration: Improving Safety and Appearance',
    excerpt: 'Why yellowed headlights are dangerous during Kerala monsoons and how professional restoration can restore visibility.',
    category: 'Safety',
    date: '2024-04-05',
    image: '/lovable-uploads/d4676f3a-b30c-4c07-8484-0598b007bd16.png',
    alt: getImageAlt('Headlight restoration before and after by XERA detailing', 'Ottapalam')
  },
  {
    id: 'mobile-detailing-services',
    title: 'Mobile Detailing Services Near Me in Ottapalam',
    excerpt: 'Discover XERA\'s premium mobile detailing options bringing professional studio quality to your doorstep.',
    category: 'Mobile Services',
    date: '2024-03-28',
    image: '/lovable-uploads/5c6772f8-70d4-496c-9c31-291686cf603e.png',
    alt: getImageAlt('XERA technician applying ceramic coating to car exterior', 'Ottapalam')
  },
  {
    id: 'car-care-monsoon-tips',
    title: 'Essential Car Care Tips for Kerala Monsoon Season',
    excerpt: 'Protect your vehicle from the damaging effects of heavy rainfall and humidity during Kerala\'s intense monsoon season.',
    category: 'Seasonal Care',
    date: '2024-03-20',
    image: '/lovable-uploads/588a7319-b8dc-4e0c-99dd-909134350e51.png',
    alt: getImageAlt('Water beading on ceramic coated car surface in rain', 'Ottapalam')
  },
  {
    id: 'luxury-detailing-packages',
    title: 'Premium Detailing Packages for Luxury Vehicles',
    excerpt: 'Specialized care and maintenance options for high-end vehicles that preserve their value and enhance their appearance.',
    category: 'Luxury',
    date: '2024-03-12',
    image: '/lovable-uploads/93e1be41-e185-4b92-9ccf-b53e4dfd75e0.png',
    alt: getImageAlt('Luxury SUV with premium detailing in studio lighting', 'Ottapalam')
  },
  {
    id: 'interior-sanitization',
    title: 'Interior Sanitization: Beyond Clean to Safety',
    excerpt: 'How professional sanitization removes allergens, bacteria and mold that commonly develop in Kerala\'s humid climate.',
    category: 'Health',
    date: '2024-03-05',
    image: '/lovable-uploads/659be358-cbf5-4440-9ff6-995f4bc402da.png',
    alt: getImageAlt('Clean car interior after professional detailing and sanitization', 'Ottapalam')
  }
];

const BlogGallery = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Auto Detailing Blog</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Expert tips, industry insights, and guides to keep your vehicle in showroom condition while facing Kerala's climate challenges.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="h-full"
          >
            <Card className="overflow-hidden bg-xera-darkgray border-xera-lightgray hover:shadow-xera-red/20 hover:border-xera-red/30 transition-all h-full flex flex-col">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    width={640}
                    height={360}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                
                <div className="absolute top-3 left-3">
                  <span className="bg-xera-red px-3 py-1 rounded-full text-xs font-semibold text-white inline-flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="flex flex-col flex-grow p-5">
                <div className="flex items-center text-white/50 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-white/70 mb-5 flex-grow">{post.excerpt}</p>
                
                <Link to={`/blog/${post.id}`} className="mt-auto">
                  <Button variant="outline" className="border-xera-red text-xera-red hover:bg-xera-red hover:text-white w-full">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">More Car Care Resources</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {['Ceramic Coating', 'Paint Protection', 'Interior Detailing', 'Headlight Restoration', 'Express Wash'].map((tag) => (
            <Link to={`/blog/category/${tag.toLowerCase().replace(' ', '-')}`} key={tag}>
              <motion.span 
                className="bg-xera-darkgray border border-xera-lightgray rounded-full px-4 py-2 text-sm hover:bg-xera-red/10 hover:border-xera-red transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.span>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Featured image gallery showing more of our latest work */}
      <div className="mt-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gradient">Our Latest Detailing Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Browse our recent work showcasing premium detailing results across various vehicle types
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              src: '/lovable-uploads/20fa2a68-f3d0-4ad1-b35f-f1a8b1378c1e.png',
              alt: getImageAlt('XERA staff applying ceramic coating to car exterior', 'Ottapalam')
            },
            {
              src: '/lovable-uploads/c9c32a28-bc86-481a-8eff-6cc44b442248.png',
              alt: getImageAlt('Water beading on hydrophobic ceramic coated surface', 'Ottapalam')
            },
            {
              src: '/lovable-uploads/a660543a-ab72-4dcf-a45c-eaa17732fee6.png',
              alt: getImageAlt('Professional interior leather care and protection', 'Ottapalam')
            },
            {
              src: '/lovable-uploads/b47f3168-6434-4bb5-b063-5ca151a41e7b.png',
              alt: getImageAlt('Premium car dashboard after interior detailing', 'Ottapalam')
            },
            {
              src: '/lovable-uploads/b6128b34-f51e-46bf-aafb-23fdc89086b6.png',
              alt: getImageAlt('Luxury SUV in XERA detailing studio with red accents', 'Ottapalam')
            },
            {
              src: '/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png',
              alt: getImageAlt('Sport sedan with custom red line detailing by XERA', 'Ottapalam')
            },
            {
              src: '/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png', 
              alt: getImageAlt('Luxury car with XERA signature red accent detailing', 'Ottapalam')
            },
            {
              src: '/lovable-uploads/93e1be41-e185-4b92-9ccf-b53e4dfd75e0.png',
              alt: getImageAlt('Premium black SUV with professional studio lighting', 'Ottapalam')
            }
          ].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${index === 0 || index === 7 ? 'col-span-2 row-span-2' : ''}`}
            >
              <AspectRatio ratio={index === 0 || index === 7 ? 1 : 1.5} className="h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  width={400}
                  height={index === 0 || index === 7 ? 400 : 600}
                  className="object-cover w-full h-full rounded-md"
                />
              </AspectRatio>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogGallery;
