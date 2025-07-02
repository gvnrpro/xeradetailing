
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
        'paint protection kerala',
        'professional car detailing palakkad district',
        'ceramic coating shoranur',
        'car care kerala monsoon',
        'auto detailing near me'
      ];
    }
    
    if (pageType === 'ceramic-coating') {
      optimizedTitle = `Ceramic Coating in ${location} | 9H Protection | XERA Detailing`;
      optimizedDescription = `Professional 9H ceramic coating services in ${location} and ${locationKeywords.district}. Long-lasting paint protection, hydrophobic properties, 5+ year warranty. Book your ceramic coating today!`;
      optimizedKeywords = [
        ...generateKeywordCombinations('ceramicCoating', location),
        'ceramic coating price kerala',
        'best ceramic coating palakkad',
        'professional ceramic coating near me',
        'ceramic coating shoranur',
        'paint protection film kerala'
      ];
    }
    
    if (pageType === 'services') {
      optimizedTitle = `Car Detailing & Auto Care Services in ${location}, ${locationKeywords.district} | XERA Kerala`;
      optimizedDescription = `Professional car detailing services in ${location}, ${locationKeywords.district} including ceramic coating, interior cleaning, paint correction, and engine bay detailing. XERA - Kerala's premium auto care specialists.`;
      optimizedKeywords = [
        ...generateKeywordCombinations('carWashDetailing', location),
        ...generateKeywordCombinations('ceramicCoating', location).slice(0, 5),
        'professional car wash kerala',
        'auto detailing packages',
        'car care services palakkad'
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
    
    // Enhanced structured data with more aggressive local SEO
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
          locationKeywords.district,
          "Shoranur",
          "Pattambi", 
          "Perinthalmanna",
          "Thrithala",
          "Lakkidi",
          "Mannarkkad"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "47"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Car Detailing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ceramic Coating",
                "description": "Professional 9H ceramic coating with 5+ year warranty"
              },
              "price": "7999",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Premium Car Detailing",
                "description": "Complete interior and exterior detailing service"
              },
              "price": "2499",
              "priceCurrency": "INR"
            }
          ]
        }
      },
      // FAQ Schema for better search visibility
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does ceramic coating cost in Kerala?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Professional ceramic coating at XERA starts from ₹7,999 with a 5+ year warranty. Prices may vary based on vehicle size and specific requirements."
            }
          },
          {
            "@type": "Question",
            "name": "How long does ceramic coating last in Kerala climate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With proper maintenance, our ceramic coating lasts 5+ years even in Kerala's monsoon climate. The hydrophobic properties help protect against humidity and acid rain."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide pickup and drop services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer free pickup and drop services for customers in Ottapalam, Palakkad, Shoranur, and surrounding areas."
            }
          }
        ]
      }
    ];
    
    [...defaultStructuredData, ...structuredData].forEach(schema => {
      addSchemaToDocument(JSON.stringify(schema));
    });
    
  }, [pageType, title, description, location, canonicalUrl, imageUrl]);
  
  return (
    <Helmet>
      {/* Enhanced meta tags for aggressive SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Geo targeting with multiple locations */}
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content={`${location}, Kerala, India`} />
      <meta name="geo.position" content="10.980150076997278;76.37854502536776" />
      <meta name="ICBM" content="10.980150076997278, 76.37854502536776" />
      
      {/* Business specific enhanced */}
      <meta name="rating" content="4.9" />
      <meta name="review_count" content="47" />
      <meta name="business_type" content="Auto Detailing Service" />
      <meta name="price_range" content="₹₹" />
      <meta name="payment_methods" content="Cash, Card, UPI, Bank Transfer" />
      <meta name="service_area" content="Ottapalam, Palakkad, Shoranur, Pattambi, Perinthalmanna" />
      
      {/* Local SEO enhancement */}
      <meta name="locality" content={location} />
      <meta name="region" content="Kerala" />
      <meta name="country" content="India" />
      <meta name="zipcode" content="679103" />
      
      {/* Enhanced Open Graph with more properties */}
      <meta property="og:locale" content="en_IN" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
      <meta property="og:site_name" content="XERA Car Wash & Auto Detailing" />
      <meta property="business:contact_data:street_address" content="Opp. NSS College, Palappuram" />
      <meta property="business:contact_data:locality" content={location} />
      <meta property="business:contact_data:region" content="Kerala" />
      <meta property="business:contact_data:postal_code" content="679103" />
      <meta property="business:contact_data:country_name" content="India" />
      <meta property="business:contact_data:phone_number" content="+919605858483" />
      
      {/* Twitter Card enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@xeradetailing" />
      <meta name="twitter:creator" content="@xeradetailing" />
      
      {/* Mobile optimization enhanced */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Performance and loading hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//wa.me" />
      <link rel="dns-prefetch" href="//maps.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preload" href={imageUrl} as="image" />
      
      {/* Additional SEO hints */}
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="1 days" />
      <meta name="expires" content="never" />
      <meta name="language" content="English" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
    </Helmet>
  );
};

export default SEOContentManager;
