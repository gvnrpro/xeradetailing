export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  coverImage: string; // Added this property
  category: string;   // Added this property
  tags: string[];
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
    category: "Ceramic Coating",
    tags: ["ceramic coating", "car protection", "Ottapalam"]
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
    category: "Car Wash",
    tags: ["car wash", "Kerala", "monsoon"]
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
    category: "Ceramic Coating",
    tags: ["ceramic coating", "Kerala", "climate"]
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
    category: "Ceramic Coating",
    tags: ["ceramic coating", "DIY", "mistakes"]
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
