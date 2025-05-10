
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  coverImage: string;
  image: string;
  imageAlt?: string;
  category: string;
  categories: string[];
  tags: string[];
  keywords: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "ceramic-coating-ottapalam-car-protection",
    title: "Why Ceramic Coating is Essential for Car Protection in Ottapalam",
    excerpt: "Discover how ceramic coating protects your car from the harsh climate in Ottapalam and keeps it looking new for years.",
    content: "Ceramic coating is a liquid polymer applied to a vehicle's exterior to protect it from environmental damage...",
    date: "August 15, 2023",
    author: "Admin",
    coverImage: "/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png",
    image: "/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png",
    imageAlt: "Ceramic coated car in Ottapalam",
    category: "Ceramic Coating",
    categories: ["Ceramic Coating", "Car Protection"],
    tags: ["ceramic coating", "car protection", "Ottapalam"],
    keywords: ["ceramic coating Ottapalam", "car protection Kerala", "XERA detailing"],
    metaTitle: "Ceramic Coating in Ottapalam - Long-Term Car Protection | XERA",
    metaDescription: "Discover how ceramic coating provides the ultimate protection for your vehicle against Kerala's harsh climate. Expert application by XERA in Ottapalam."
  },
  {
    id: "2",
    slug: "car-wash-kerala-monsoon",
    title: "The Ultimate Guide to Car Washing During Kerala Monsoons",
    excerpt: "Learn how to keep your car clean and protected during the monsoon season in Kerala with these essential car washing tips.",
    content: "The monsoon season in Kerala can be tough on your car, but with the right washing techniques, you can keep it clean and protected...",
    date: "July 22, 2023",
    author: "Admin",
    coverImage: "/lovable-uploads/18a2b3d8-292b-497f-88b3-78d082ff3357.png",
    image: "/lovable-uploads/18a2b3d8-292b-497f-88b3-78d082ff3357.png",
    imageAlt: "Car wash during Kerala monsoon",
    category: "Car Wash",
    categories: ["Car Wash", "Monsoon Care"],
    tags: ["car wash", "Kerala", "monsoon"],
    keywords: ["car wash Kerala monsoon", "rainy season car care", "XERA detailing"],
    metaTitle: "Car Washing Guide for Kerala Monsoons | XERA Detailing",
    metaDescription: "Essential tips for keeping your vehicle clean and protected during Kerala's intense monsoon season. Professional advice from XERA Detailing."
  },
  {
    id: "3",
    slug: "ceramic-coating-kerala-climate",
    title: "How Kerala's Climate Affects Your Car's Paint and Why Ceramic Coating is the Solution",
    excerpt: "Understand the impact of Kerala's climate on your car's paint and why ceramic coating is the best solution for long-term protection.",
    content: "Kerala's humid and tropical climate can be harsh on your car's paint, leading to fading, oxidation, and corrosion. Ceramic coating provides a durable barrier...",
    date: "June 10, 2023",
    author: "Admin",
    coverImage: "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
    image: "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
    imageAlt: "Car with ceramic coating in Kerala climate",
    category: "Ceramic Coating",
    categories: ["Ceramic Coating", "Climate Protection"],
    tags: ["ceramic coating", "Kerala", "climate"],
    keywords: ["ceramic coating Kerala climate", "paint protection humid climate", "XERA detailing"],
    metaTitle: "Kerala Climate Car Paint Protection: Ceramic Coating Solution | XERA",
    metaDescription: "Learn how Kerala's unique climate affects your vehicle's paint and why ceramic coating is the ultimate protection solution. Expert service by XERA."
  },
  {
    id: "4",
    slug: "ceramic-coating-mistakes",
    title: "Common Mistakes to Avoid When Applying Ceramic Coating on Your Car",
    excerpt: "Avoid these common mistakes when applying ceramic coating to ensure optimal protection and longevity for your car's paint.",
    content: "Applying ceramic coating can be a rewarding DIY project, but it's essential to avoid common mistakes that can compromise its effectiveness...",
    date: "May 05, 2023",
    author: "Admin",
    coverImage: "/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png",
    image: "/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png",
    imageAlt: "Common ceramic coating application mistakes",
    category: "Ceramic Coating",
    categories: ["Ceramic Coating", "DIY Tips"],
    tags: ["ceramic coating", "DIY", "mistakes"],
    keywords: ["ceramic coating mistakes", "DIY ceramic coating", "professional coating XERA"],
    metaTitle: "Avoid These Ceramic Coating Application Mistakes | XERA Detailing",
    metaDescription: "Learn the most common mistakes people make when applying ceramic coating and how to avoid them. Get professional results with XERA Detailing."
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
