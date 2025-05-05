
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
    'og:type': 'website'
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
    'twitter:description': description
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
};

// Generate schema markup for various content types
export const generateSchemaMarkup = (
  type: 'LocalBusiness' | 'Service' | 'Article' | 'BreadcrumbList' | 'Product',
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
