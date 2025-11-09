import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ReviewSchemaProps {
  reviews?: Array<{
    author: string;
    rating: number;
    text: string;
    date: string;
  }>;
}

const ReviewSchema: React.FC<ReviewSchemaProps> = ({ reviews }) => {
  const defaultReviews = [
    {
      author: "Rahul Kumar",
      rating: 5,
      text: "Excellent ceramic coating service. Best in Ottapalam!",
      date: "2024-11-05",
    },
    {
      author: "Priya Menon",
      rating: 5,
      text: "Professional service and reasonable pricing. Highly recommended!",
      date: "2024-11-01",
    },
    {
      author: "Arun S",
      rating: 5,
      text: "Outstanding work on interior detailing. Very careful and thorough.",
      date: "2024-10-28",
    },
  ];

  const reviewData = reviews || defaultReviews;

  const aggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  };

  const reviewSchemas = reviewData.map((review, index) => ({
    "@type": "Review",
    "@id": `https://xeradetailing.in/#review-${index + 1}`,
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "datePublished": review.date,
    "reviewBody": review.text,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  }));

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "XERA Car Wash & Auto Detailing",
    "image": "https://xeradetailing.in/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png",
    "url": "https://xeradetailing.in",
    "telephone": "+919605858483",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Opp. NSS College, Palappuram",
      "addressLocality": "Ottapalam",
      "addressRegion": "Kerala",
      "postalCode": "679103",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.980151",
      "longitude": "76.378545"
    },
    "aggregateRating": aggregateRating,
    "review": reviewSchemas,
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      }
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

export default ReviewSchema;
