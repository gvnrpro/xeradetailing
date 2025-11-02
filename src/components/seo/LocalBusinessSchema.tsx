import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  address?: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  phone?: string;
  email?: string;
  url?: string;
  priceRange?: string;
  openingHours?: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name = "XERA Car Wash & Auto Detailing",
  description = "Kerala's premier auto detailing studio specializing in ceramic coating, paint protection, and professional car care services in Ottapalam, Palakkad district",
  address = {
    street: "NH 66, Palappuram",
    locality: "Ottapalam",
    region: "Kerala",
    postalCode: "679101",
    country: "IN"
  },
  geo = {
    latitude: 10.7739,
    longitude: 76.3771
  },
  phone = "+91-96058-58483",
  email = "info@xeradetailing.in",
  url = "https://xeradetailing.in",
  priceRange = "₹₹",
  openingHours = ["Mo-Su 09:00-19:00"],
  aggregateRating = {
    ratingValue: 4.9,
    reviewCount: 120
  }
}) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#organization`,
    "name": name,
    "description": description,
    "url": url,
    "telephone": phone,
    "email": email,
    "priceRange": priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.locality,
      "addressRegion": address.region,
      "postalCode": address.postalCode,
      "addressCountry": address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "openingHoursSpecification": openingHours.map(hours => {
      const [days, time] = hours.split(' ');
      const [opens, closes] = time.split('-');
      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": days === "Mo-Su" ? [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ] : days.split('-'),
        "opens": opens,
        "closes": closes
      };
    }),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Ottapalam",
        "containedIn": {
          "@type": "AdministrativeArea",
          "name": "Palakkad District"
        }
      },
      {
        "@type": "City",
        "name": "Palakkad"
      },
      {
        "@type": "City",
        "name": "Shoranur"
      },
      {
        "@type": "City",
        "name": "Pattambi"
      },
      {
        "@type": "City",
        "name": "Perinthalmanna"
      }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Digital Wallet"],
    "currenciesAccepted": "INR",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Auto Detailing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ceramic Coating",
            "description": "9H hardness ceramic coating with 5+ year protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paint Protection Film",
            "description": "Self-healing PPF for ultimate paint protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Detailing",
            "description": "Complete interior deep cleaning and protection"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/xeradetailing",
      "https://www.instagram.com/xeradetailing",
      "https://wa.me/919605858483"
    ],
    "logo": `${url}/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png`,
    "image": [
      `${url}/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png`,
      `${url}/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png`
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
