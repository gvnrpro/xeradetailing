
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { generateKeywordCombinations, serviceKeywords, locationKeywords } from '@/utils/seoKeywords';
import { setPageMetadata, generateSchemaMarkup, addSchemaToDocument } from '@/utils/seoHelper';

interface SEOContentManagerProps {
  pageType: 'home' | 'services' | 'location' | 'blog' | 'ceramic-coating' | 'car-wash';
  title?: string;
  description?: string;
  keywords?: string[];
  location?: string;
  service?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  structuredData?: any[];
}

const SEOContentManager = ({
  pageType,
  title,
  description,
  keywords = [],
  location = locationKeywords.primary,
  service,
  canonicalUrl,
  imageUrl = '/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png',
  structuredData = []
}: SEOContentManagerProps) => {
  
  useEffect(() => {
    // Generate dynamic SEO content based on page type
    let optimizedTitle = title;
    let optimizedDescription = description;
    let optimizedKeywords = [...keywords];
    
    if (pageType === 'home') {
      optimizedTitle = `XERA Auto Detailing | Premium Car Care in ${location}, ${locationKeywords.district} Kerala`;
      optimizedDescription = `Kerala's premier auto detailing studio in ${location}, ${locationKeywords.district}. Professional ceramic coating, paint correction, interior cleaning & car wash services. 5+ years protection guaranteed.`;
      optimizedKeywords = [
        ...generateKeywordCombinations('ceramicCoating', location),
        'car detailing ottapalam',
        'auto detailing kerala',
        'ceramic coating near me',
        'car wash ottapalam',
        'paint protection kerala'
      ];
    }
    
    if (pageType === 'ceramic-coating') {
      optimizedTitle = `Ceramic Coating in ${location} | 9H Protection | XERA Detailing`;
      optimizedDescription = `Professional 9H ceramic coating services in ${location} and ${locationKeywords.district}. Long-lasting paint protection, hydrophobic properties, 5+ year warranty. Book your ceramic coating today!`;
      optimizedKeywords = generateKeywordCombinations('ceramicCoating', location);
    }
    
    if (pageType === 'services') {
      optimizedTitle = `Car Detailing & Auto Care Services in ${location}, ${locationKeywords.district} | XERA Kerala`;
      optimizedDescription = `Professional car detailing services in ${location}, ${locationKeywords.district} including ceramic coating, interior cleaning, paint correction, and engine bay detailing. XERA - Kerala's premium auto care specialists.`;
      optimizedKeywords = [
        ...generateKeywordCombinations('carWashDetailing', location),
        ...generateKeywordCombinations('ceramicCoating', location).slice(0, 5)
      ];
    }
    
    // Set optimized metadata
    if (optimizedTitle && optimizedDescription) {
      setPageMetadata(
        optimizedTitle,
        optimizedDescription,
        canonicalUrl || window.location.href,
        imageUrl,
        optimizedKeywords
      );
    }
    
    // Add structured data
    const defaultStructuredData = [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "XERA Car Wash & Auto Detailing",
        "description": "Premium car detailing and ceramic coating services in Ottapalam, Kerala",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Opp. NSS College, Palappuram",
          "addressLocality": location,
          "addressRegion": "Kerala",
          "postalCode": "679103",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 10.980150076997278,
          "longitude": 76.37854502536776
        },
        "telephone": "+919605858483",
        "url": "https://xeradetailing.in",
        "image": imageUrl,
        "priceRange": "₹₹",
        "openingHours": [
          "Mo-Sa 09:00-18:00",
          "Su 10:00-17:00"
        ],
        "areaServed": [
          location,
          ...locationKeywords.nearby,
          locationKeywords.district
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "47"
        }
      }
    ];
    
    [...defaultStructuredData, ...structuredData].forEach(schema => {
      addSchemaToDocument(JSON.stringify(schema));
    });
    
  }, [pageType, title, description, location, canonicalUrl, imageUrl]);
  
  return (
    <Helmet>
      {/* Additional meta tags for enhanced SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Geo targeting */}
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content={`${location}, Kerala, India`} />
      <meta name="geo.position" content="10.980150076997278;76.37854502536776" />
      <meta name="ICBM" content="10.980150076997278, 76.37854502536776" />
      
      {/* Business specific */}
      <meta name="rating" content="4.9" />
      <meta name="review_count" content="47" />
      <meta name="business_type" content="Auto Detailing Service" />
      <meta name="price_range" content="₹₹" />
      
      {/* Local SEO */}
      <meta name="locality" content={location} />
      <meta name="region" content="Kerala" />
      <meta name="country" content="India" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:locale" content="en_IN" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
      <meta property="business:contact_data:street_address" content="Opp. NSS College, Palappuram" />
      <meta property="business:contact_data:locality" content={location} />
      <meta property="business:contact_data:region" content="Kerala" />
      <meta property="business:contact_data:postal_code" content="679103" />
      <meta property="business:contact_data:country_name" content="India" />
      
      {/* Mobile optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//wa.me" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Helmet>
  );
};

export default SEOContentManager;
