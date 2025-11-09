import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  authorImage?: string;
}

const EnhancedReviewWidget = () => {
  // In production, this would fetch from Google My Business API
  // For now, using static data that should be updated regularly
  const reviews: Review[] = [
    {
      author: "Rahul Kumar",
      rating: 5,
      text: "മികച്ച സേവനം! Ceramic coating quality is outstanding. Best in Ottapalam.",
      date: "2 days ago",
    },
    {
      author: "Priya Menon",
      rating: 5,
      text: "Professional service and reasonable pricing. My car looks brand new after detailing!",
      date: "1 week ago",
    },
    {
      author: "Arun S",
      rating: 5,
      text: "Excellent work on interior cleaning. Very detailed and careful with my vehicle.",
      date: "2 weeks ago",
    },
  ];

  const averageRating = 4.9;
  const totalReviews = 127;
  const googleReviewUrl = "https://g.page/r/CfNPuh8d4DNAEAI/review";
  const googleMapsUrl = "https://www.google.com/maps/place/XERA+Car+Wash+%26+Auto+Detailing";

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8 rounded-lg"
        >
          {/* Header with Rating Summary */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Customer Reviews
              </h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(averageRating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xl font-semibold">{averageRating}</span>
                <span className="text-muted-foreground">({totalReviews} reviews)</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2"
              >
                <MapPin className="h-4 w-4" />
                View on Google Maps
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <Button
              onClick={() => window.open(googleReviewUrl, '_blank')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Star className="h-4 w-4 mr-2" />
              Leave a Review
            </Button>
          </div>

          {/* Recent Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-4 rounded-lg border border-border"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {review.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{review.author}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 line-clamp-3">
                  {review.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* View All Reviews CTA */}
          <div className="text-center mt-6">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm font-medium"
            >
              View all {totalReviews} reviews on Google →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedReviewWidget;
