
// SEO Helper functions for metadata management

// Set comprehensive metadata for a page
export const setPageMetadata = (
  title: string,
  description: string,
  canonicalUrl: string,
  imageUrl?: string,
  keywords?: string[]
) => {
  // Set document title
  document.title = title;
  
  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);
  
  // Add keywords if provided
  if (keywords && keywords.length > 0) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));
  }
  
  // Update canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);
  
  // Update Open Graph meta tags
  const ogTags = {
    'og:title': title,
    'og:description': description,
    'og:url': canonicalUrl,
    'og:type': 'website',
    'og:site_name': 'XERA Car Wash & Auto Detailing'
  };
  
  if (imageUrl) {
    ogTags['og:image'] = imageUrl;
  }
  
  Object.entries(ogTags).forEach(([property, content]) => {
    let metaTag = document.querySelector(`meta[property="${property}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('property', property);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  });
  
  // Update Twitter Card meta tags
  const twitterTags = {
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:site': '@xeradetailing'
  };
  
  if (imageUrl) {
    twitterTags['twitter:image'] = imageUrl;
  }
  
  Object.entries(twitterTags).forEach(([name, content]) => {
    let metaTag = document.querySelector(`meta[name="${name}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', name);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  });
  
  // Add favicon if not present
  if (!document.querySelector('link[rel="icon"]')) {
    const favicon = document.createElement('link');
    favicon.setAttribute('rel', 'icon');
    favicon.setAttribute('href', '/favicon.ico');
    favicon.setAttribute('type', 'image/x-icon');
    document.head.appendChild(favicon);
  }
  
  // Add manifest if not present
  if (!document.querySelector('link[rel="manifest"]')) {
    const manifest = document.createElement('link');
    manifest.setAttribute('rel', 'manifest');
    manifest.setAttribute('href', '/manifest.json');
    document.head.appendChild(manifest);
  }
};

// Generate blog post schema markup
export const generateBlogPostSchema = (
  title: string,
  description: string,
  url: string,
  imageUrl: string,
  datePublished: string,
  authorName: string = "XERA Car Wash & Auto Detailing",
  publisherName: string = "XERA Car Wash & Auto Detailing",
  publisherLogo: string = "https://xeradetailing.in/logo.png",
  keywords: string[] = []
) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogo
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": keywords.join(', ')
  };

  return JSON.stringify(schema);
};

// Generate schema markup for various content types
export const generateSchemaMarkup = (
  type: 'LocalBusiness' | 'Service' | 'Article' | 'BreadcrumbList' | 'Product' | 'WebSite' | 'FAQPage',
  data: any
): string => {
  // Basic schema structure with context
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };
  
  return JSON.stringify(schema);
};

// Generate breadcrumb schema markup
export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => {
  const itemListElement = breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": breadcrumb.name,
    "item": breadcrumb.url
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };

  return JSON.stringify(schema);
};

// Generate FAQ schema markup for rich results
export const generateFaqSchema = (faqs: Array<{question: string, answer: string}>) => {
  const mainEntity = faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity
  };

  return JSON.stringify(schema);
};

// Generate product schema markup (for services sold as products)
export const generateProductSchema = (
  name: string,
  description: string,
  imageUrl: string,
  price: string,
  currency: string = "INR",
  availability: string = "https://schema.org/InStock",
  url: string,
  brand: string = "XERA Car Wash & Auto Detailing",
  reviews: Array<{rating: number, author: string, text: string}> = []
) => {
  const reviewItems = reviews.map(review => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.text
  }));

  // Calculate aggregate rating if reviews exist
  const aggregateRating = reviews.length > 0 ? {
    "@type": "AggregateRating",
    "ratingValue": (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1),
    "reviewCount": reviews.length
  } : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": imageUrl,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": availability,
      "url": url
    },
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "review": reviews.length > 0 ? reviewItems : undefined,
    "aggregateRating": aggregateRating
  };

  return JSON.stringify(schema);
};

// Utility to create location-specific titles and descriptions
export const getLocationSEOContent = (
  baseTitle: string, 
  baseDescription: string, 
  location: string = "Ottapalam",
  district: string = "Palakkad"
) => {
  return {
    title: `${baseTitle} in ${location}, ${district} | XERA Detailing`,
    description: `${baseDescription} Professional service in ${location} and surrounding areas of ${district}, Kerala.`
  };
};

// Add structured data for reviews
export const addReviewStructuredData = (reviews: Array<{name: string, rating: number, text: string}>) => {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "XERA Car Wash & Auto Detailing",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Opp. NSS College, Palappuram",
      "addressLocality": "Ottapalam",
      "postalCode": "679103",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.text
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
      "reviewCount": reviews.length
    }
  };

  return JSON.stringify(reviewSchema);
};

// Example usage for LocalBusiness:
// generateSchemaMarkup('LocalBusiness', {
//   name: "XERA Car Wash & Auto Detailing",
//   image: "https://xeradetailing.in/logo.png",
//   url: "https://xeradetailing.in",
//   telephone: "+919605858483",
//   priceRange: "₹₹",
//   address: {
//     "@type": "PostalAddress",
//     "streetAddress": "Opp. NSS College, Palappuram",
//     "addressLocality": "Ottapalam",
//     "postalCode": "679103",
//     "addressRegion": "Kerala",
//     "addressCountry": "IN"
//   }
// })
