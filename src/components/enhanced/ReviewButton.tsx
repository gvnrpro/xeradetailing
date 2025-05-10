
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { trackEvent } from '../tracking/AnalyticsProvider';
import { useIsMobile } from '@/hooks/use-mobile';

const ReviewButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Add delay to show the button for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 20000); // Show after 20 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isVisible) return null;
  
  const reviewUrl = "https://g.page/r/CfNPuh8d4DNAEAI/review";
  
  const handleReviewClick = () => {
    trackEvent('review_button_click', {
      location: window.location.pathname
    });
  };
  
  return (
    <motion.a
      href={reviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Leave us a review on Google"
      className={`
        fixed z-50 flex items-center bg-xera-darkgray hover:bg-black
        border border-white/20 shadow-lg rounded-full
        ${isMobile ? 'left-4 bottom-20 p-2' : 'left-6 bottom-6 px-3 py-2'}
      `}
      onClick={handleReviewClick}
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        y: [0, -5, 0],
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }}
    >
      <Star className="h-4 w-4 text-yellow-400 mr-2" fill="#FBBF24" />
      {!isMobile && (
        <span className="text-sm font-medium text-white">Rate us 5⭐</span>
      )}
      {isMobile && (
        <span className="text-xs font-medium text-white">5⭐</span>
      )}
    </motion.a>
  );
};

export default ReviewButton;
