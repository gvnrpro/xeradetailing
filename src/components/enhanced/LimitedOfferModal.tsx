
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import EnhancedCTA from './EnhancedCTA';
import { trackEvent } from '../tracking/AnalyticsProvider';
import { useIsMobile } from '@/hooks/use-mobile';

const LimitedOfferModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Check if the offer has been dismissed
    const offerDismissed = localStorage.getItem('xera_offer_dismissed');
    if (offerDismissed) {
      setIsDismissed(true);
      return;
    }
    
    // Show offer after delay or on scroll
    const timer = setTimeout(() => {
      setIsVisible(true);
      trackEvent('limited_offer_shown');
    }, 8000); // 8 seconds delay
    
    // Alternative scroll trigger
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight * 0.5 && !isVisible && !isDismissed) {
        setIsVisible(true);
        trackEvent('limited_offer_shown');
        window.removeEventListener('scroll', handleScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, isDismissed]);
  
  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('xera_offer_dismissed', 'true');
    trackEvent('limited_offer_dismissed');
  };
  
  const handleOfferClick = () => {
    trackEvent('limited_offer_clicked');
  };
  
  if (isDismissed) return null;
  
  // Position based on device type - higher on mobile to avoid overlap with bottom nav
  const positionClass = isMobile 
    ? "fixed bottom-20 inset-x-0 px-4 z-40 mx-auto" 
    : "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 max-w-sm w-full md:max-w-md";
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={positionClass}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-gradient-to-r from-red-900 to-xera-red p-1 rounded-lg shadow-xl max-w-[95%] sm:max-w-md mx-auto">
            <div className="bg-xera-darkgray rounded-md p-3 sm:p-4 relative">
              <button 
                onClick={handleDismiss}
                className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close offer"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              
              <div className="text-center mb-3 sm:mb-4">
                <h3 className="font-bold text-lg sm:text-xl mb-1">This Week Only: 10% OFF Ceramic Coating!</h3>
                <p className="text-white/70 text-xs sm:text-sm">Limited availability. Book your ceramic coating now to lock in this exclusive price!</p>
              </div>
              
              <div className="flex justify-center">
                <EnhancedCTA 
                  text="Book on WhatsApp Now"
                  href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%E2%80%99d%20like%20to%20book%20ceramic%20coating%20with%20the%2010%25%20discount%20offer."
                  variant="primary"
                  shimmerEffect={true}
                  className="w-full text-sm sm:text-base py-2 sm:py-3"
                  onClick={handleOfferClick}
                  trackingLabel="limited_time_offer_whatsapp"
                />
              </div>
              
              <p className="text-white/50 text-xs text-center mt-2 sm:mt-3">
                * Offer valid for bookings made this week. Mention this promo when booking.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LimitedOfferModal;
