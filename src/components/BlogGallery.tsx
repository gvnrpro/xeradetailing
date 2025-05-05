
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
    id: 'ceramic-coating-ottapalam-car-protection',
    title: 'Why Ceramic Coating Is the Best Car Protection in Ottapalam',
    excerpt: 'Learn why ceramic coating is essential for protecting your car against Kerala\'s harsh climate conditions, from monsoon rains to intense sun exposure.',
    category: 'Ceramic Coating',
    date: '2024-05-05',
    image: '/assets/ceramic-after.jpg',
    alt: getImageAlt('Professional ceramic coating on car in Ottapalam showing perfect gloss and reflection', 'Ottapalam'),
    featured: true
  },
  {
    id: 'paint-correction-explained',
    title: 'Paint Correction: Restoring Your Car\'s Perfect Finish',
    excerpt: 'Learn how professional paint correction removes swirls, scratches and imperfections to restore your vehicle\'s finish to better-than-showroom condition.',
    category: 'Paint Correction',
    date: '2024-05-10',
    image: '/assets/paint-correction-after.jpg',
    alt: getImageAlt('Car paint after professional correction showing flawless mirror finish', 'Ottapalam')
  },
  {
    id: 'engine-bay-cleaning-benefits',
    title: 'Engine Bay Detailing: The Maintenance Most Kerala Drivers Overlook',
    excerpt: 'Discover why engine bay cleaning prevents costly repairs and makes maintenance easier, especially important in Kerala\'s humid climate.',
    category: 'Engine Detailing',
    date: '2024-05-09',
    image: '/assets/engine-after.jpg',
    alt: getImageAlt('Engine bay after professional cleaning by XERA detailing', 'Ottapalam')
  },
  {
    id: 'headlight-restoration-guide',
    title: 'Headlight Restoration: Improving Night Visibility and Safety',
    excerpt: 'Yellowed headlights reduce visibility by up to 70%. Learn how professional restoration improves safety during Kerala\'s monsoon nights.',
    category: 'Safety',
    date: '2024-05-07',
    image: '/assets/headlight-after.jpg',
    alt: getImageAlt('Crystal clear headlight after professional restoration by XERA', 'Ottapalam')
  },
  {
    id: 'interior-detailing-benefits',
    title: 'Why Professional Interior Detailing Is Worth Every Rupee',
    excerpt: 'Professional interior detailing isn\'t just about aesthetics—it\'s about removing allergens and bacteria that thrive in Kerala\'s humid climate.',
    category: 'Interior Care',
    date: '2024-05-05',
    image: '/assets/interior-after.jpg',
    alt: getImageAlt('Car interior after professional detailing looking fresh and clean', 'Ottapalam')
  },
  {
    id: 'paint-protection-comparison',
    title: 'Ceramic vs PPF vs Wax: Complete Paint Protection Comparison',
    excerpt: 'Confused about paint protection options? This comprehensive guide compares ceramic coating, PPF and wax to help you choose the right option.',
    category: 'Paint Protection',
    date: '2024-05-03',
    image: '/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png',
    alt: getImageAlt('Black sport sedan with perfect paint finish and ceramic coating', 'Ottapalam')
  },
  {
    id: 'why-kerala-cars-need-ceramic-coating',
    title: 'The Ultimate Guide to Ceramic Coating in Kerala',
    excerpt: 'Learn why ceramic coating is essential for protecting your car against Kerala\'s harsh climate conditions, from monsoon rains to intense sun exposure.',
    category: 'Ceramic Coating',
    date: '2024-05-01',
    image: '/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png',
    alt: getImageAlt('Kerala car protected with ceramic coating during monsoon', 'Ottapalam')
  },
  {
    id: 'car-wash-frequency-kerala',
    title: 'How Often Should You Get a Car Wash in Kerala?',
    excerpt: 'With our tropical climate and dusty roads, cars in Kerala get dirty fast. Find out how often you should wash your vehicle based on your driving conditions.',
    category: 'Car Wash',
    date: '2024-05-01',
    image: '/assets/express-wash-after.jpg',
    alt: getImageAlt('Clean car exterior after express wash service by XERA', 'Ottapalam')
  },
  {
    id: 'foam-vs-pressure-wash-kerala',
    title: 'Foam Wash vs Pressure Wash: What\'s Better for Your Car in Kerala?',
    excerpt: 'Compare different washing methods and discover why XERA\'s hybrid approach provides the safest and most effective clean for Kerala\'s road conditions.',
    category: 'Car Wash',
    date: '2024-04-28',
    image: '/assets/express-wash-before.jpg',
    alt: getImageAlt('Dirty car exterior before express wash service showing Kerala dust buildup', 'Ottapalam')
  },
  {
    id: 'ceramic-coating-care-tips',
    title: '5 Mistakes to Avoid After Ceramic Coating',
    excerpt: 'Invested in ceramic coating? Don\'t let simple mistakes ruin its performance. Learn the proper care routine to maintain protection for years.',
    category: 'Ceramic Coating',
    date: '2024-04-25',
    image: '/assets/ceramic-after.jpg',
    alt: getImageAlt('Car paint after ceramic coating application showing glossy protected finish', 'Ottapalam')
  },
  {
    id: 'bike-detailing-kerala-monsoon',
    title: 'Bike Detailing Checklist for Monsoon Season',
    excerpt: 'Protect your two-wheeler from Kerala\'s heavy rains with this comprehensive maintenance guide for before, during and after monsoon season.',
    category: 'Bike Care',
    date: '2024-04-20',
    image: '/lovable-uploads/588a7319-b8dc-4e0c-99dd-909134350e51.png',
    alt: getImageAlt('Water beading on hydrophobic ceramic coated surface showing protection', 'Ottapalam')
  },
  {
    id: 'underbody-coating-palakkad-value',
    title: 'Is Anti-Rust Underbody Coating Worth It in Palakkad?',
    excerpt: 'Discover why underbody protection is essential for vehicles in Palakkad\'s climate and how it prevents expensive repairs from corrosion damage.',
    category: 'Underbody Protection',
    date: '2024-04-15',
    image: '/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png',
    alt: getImageAlt('Luxury car with comprehensive protection including underbody coating', 'Ottapalam')
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
  // Separate featured posts from regular posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Auto Detailing Blog</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Expert tips, industry insights, and guides to keep your vehicle in showroom condition while facing Kerala's climate challenges.
        </p>
      </div>
      
      {/* Featured post section */}
      {featuredPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gradient">Featured Article</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-xera-darkgray to-xera-gray border border-white/10 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-72 md:h-full">
                  <img 
                    src={featuredPosts[0].image}
                    alt={featuredPosts[0].alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col">
                  <div className="flex items-center text-white/50 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPosts[0].date}
                    <span className="ml-3 bg-xera-red px-3 py-1 rounded-full text-xs font-semibold text-white inline-flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {featuredPosts[0].category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredPosts[0].title}</h3>
                  <p className="text-white/70 mb-6 flex-grow">{featuredPosts[0].excerpt}</p>
                  
                  <Link to={`/blog/${featuredPosts[0].id}`} className="mt-auto">
                    <Button className="bg-xera-red hover:bg-red-700 text-white w-full md:w-auto">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}
      
      <h2 className="text-2xl font-bold mb-6">All Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map((post, index) => (
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
        <h2 className="text-2xl font-bold mb-4">Popular Topics</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {['Ceramic Coating', 'Paint Protection', 'Interior Detailing', 'Headlight Restoration', 'Express Wash', 'Engine Bay', 'Bike Care'].map((tag) => (
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
              src: '/assets/ceramic-after.jpg',
              alt: getImageAlt('Car paint after ceramic coating application showing glossy protected finish', 'Ottapalam')
            },
            {
              src: '/assets/engine-after.jpg',
              alt: getImageAlt('Engine bay after professional cleaning showing spotless components', 'Ottapalam')
            },
            {
              src: '/assets/headlight-after.jpg',
              alt: getImageAlt('Crystal clear headlight after professional restoration by XERA', 'Ottapalam')
            },
            {
              src: '/assets/interior-after.jpg',
              alt: getImageAlt('Car interior after professional detailing looking fresh and clean', 'Ottapalam')
            },
            {
              src: '/assets/paint-correction-after.jpg',
              alt: getImageAlt('Car paint after professional correction showing flawless mirror finish', 'Ottapalam')
            },
            {
              src: '/assets/express-wash-after.jpg',
              alt: getImageAlt('Clean car exterior after express wash service by XERA', 'Ottapalam')
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
      
      {/* Local SEO section */}
      <div className="mt-16 bg-xera-darkgray/50 rounded-lg p-6 md:p-8 border border-white/10">
        <h3 className="text-xl font-bold mb-4">Ceramic Coating Services in Kerala</h3>
        <p className="mb-4">
          XERA provides premium ceramic coating services across Ottapalam, Palakkad, Shoranur, Pattambi, and surrounding areas.
          Our specialized detailing studio offers professional car paint protection, hydrophobic coatings, and long-lasting shine.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-xera-darkgray px-2 py-1 rounded text-sm text-white/70">Ceramic Coating Ottapalam</span>
          <span className="bg-xera-darkgray px-2 py-1 rounded text-sm text-white/70">Car Detailing Palakkad</span>
          <span className="bg-xera-darkgray px-2 py-1 rounded text-sm text-white/70">Paint Protection Kerala</span>
          <span className="bg-xera-darkgray px-2 py-1 rounded text-sm text-white/70">Auto Detailing Shoranur</span>
          <span className="bg-xera-darkgray px-2 py-1 rounded text-sm text-white/70">Premium Car Coating Pattambi</span>
          <span className="bg-xera-darkgray px-2 py-1 rounded text-sm text-white/70">9H Ceramic Coating Service</span>
          <span className="bg-xera-darkgray px-2 py-1 rounded text-sm text-white/70">Best Detailing Shop Near Me</span>
        </div>
      </div>
    </div>
  );
};

export default BlogGallery;
