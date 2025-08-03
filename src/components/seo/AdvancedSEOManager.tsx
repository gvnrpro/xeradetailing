import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface AdvancedSEOManagerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  imageUrl?: string;
  type?: 'website' | 'article' | 'service' | 'local_business';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  location?: {
    name: string;
    latitude: number;
    longitude: number;
    address: string;
    postalCode: string;
  };
}

const AdvancedSEOManager: React.FC<AdvancedSEOManagerProps> = ({
  title = "XERA Car Wash & Auto Detailing - Premium Ceramic Coating Kerala",
  description = "Kerala's premier auto detailing service specializing in ceramic coating, paint protection, and professional car care in Ottapalam, Palakkad, Shoranur. 5+ years warranty.",
  keywords = [],
  canonicalUrl,
  imageUrl = "/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png",
  type = "website",
  author = "XERA Auto Detailing",
  publishedTime,
  modifiedTime,
  location
}) => {
  const currentLocation = useLocation();
  const currentUrl = `https://xeradetailing.in${currentLocation.pathname}`;
  const canonical = canonicalUrl || currentUrl;

  // Enhanced keywords for Kerala automotive market
  const defaultKeywords = [
    "ceramic coating kerala",
    "car detailing ottapalam",
    "paint protection film kerala",
    "auto detailing palakkad",
    "ceramic coating shoranur",
    "car wash kerala monsoon",
    "automotive detailing malappuram",
    "car care kerala climate",
    "premium car detailing",
    "hydrophobic coating kerala"
  ];

  const allKeywords = [...defaultKeywords, ...keywords];

  // Location-specific schema data
  const locationSchema = location ? {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": location.name,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.latitude,
      "longitude": location.longitude
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address,
      "addressLocality": "Ottapalam",
      "addressRegion": "Kerala",
      "postalCode": location.postalCode,
      "addressCountry": "IN"
    }
  } : null;

  // Business schema for local SEO
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "XERA Car Wash & Auto Detailing",
    "description": description,
    "url": "https://xeradetailing.in",
    "logo": "https://xeradetailing.in/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png",
    "image": imageUrl,
    "telephone": "+91-9876543210",
    "email": "info@xeradetailing.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road",
      "addressLocality": "Ottapalam",
      "addressRegion": "Kerala",
      "postalCode": "679101",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.7705,
      "longitude": 76.3773
    },
    "openingHours": "Mo-Sa 09:00-18:00",
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Ottapalam"
      },
      {
        "@type": "Place", 
        "name": "Palakkad"
      },
      {
        "@type": "Place",
        "name": "Shoranur"
      },
      {
        "@type": "Place",
        "name": "Malappuram"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Auto Detailing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ceramic Coating",
            "description": "Premium 9H ceramic coating with 5+ years warranty"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paint Protection Film",
            "description": "Self-healing paint protection film"
          }
        }
      ]
    }
  };

  // Article schema for blog posts
  const articleSchema = type === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "XERA Auto Detailing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://xeradetailing.in/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png"
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical
    }
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:site_name" content="XERA Auto Detailing" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Geographic targeting */}
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Ottapalam, Kerala" />
      <meta name="geo.position" content="10.7705;76.3773" />
      <meta name="ICBM" content="10.7705, 76.3773" />

      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {/* Localization */}
      <link rel="alternate" hrefLang="en-in" href={canonical} />
      <link rel="alternate" hrefLang="ml-in" href={canonical} />

      {/* Business verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="facebook-domain-verification" content="your-facebook-verification" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      
      {locationSchema && (
        <script type="application/ld+json">
          {JSON.stringify(locationSchema)}
        </script>
      )}

      {/* FAQ Schema for FAQ pages */}
      {currentLocation.pathname.includes('faq') && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does ceramic coating last in Kerala climate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our premium ceramic coating lasts 5+ years in Kerala's humid climate with proper maintenance. It provides excellent protection against monsoon, UV rays, and coastal salt air."
                }
              },
              {
                "@type": "Question",
                "name": "What is the cost of ceramic coating in Ottapalam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ceramic coating prices start from ₹7,999 depending on the vehicle size and coating type. We offer free consultation and customized packages for your needs."
                }
              }
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

export default AdvancedSEOManager;