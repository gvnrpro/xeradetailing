
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '../tracking/AnalyticsProvider';
import { useIsMobile } from '@/hooks/use-mobile';

interface LeadCapturePopupProps {
  delay?: number; // milliseconds before showing
  scrollTrigger?: number; // percentage of page scrolled
}

const LeadCapturePopup = ({ 
  delay = 5000, 
  scrollTrigger = 40
}: LeadCapturePopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (hasDismissed) return;
    
    const hasShownBefore = sessionStorage.getItem('lead_popup_shown');
    if (hasShownBefore) return;
    
    // Trigger after delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      trackEvent('lead_capture_shown', { trigger: 'delay' });
      sessionStorage.setItem('lead_popup_shown', 'true');
    }, delay);
    
    // Alternative: trigger on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;
      
      if (scrollPercentage > scrollTrigger && !isVisible && !hasDismissed) {
        setIsVisible(true);
        trackEvent('lead_capture_shown', { trigger: 'scroll' });
        sessionStorage.setItem('lead_popup_shown', 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delay, scrollTrigger, isVisible, hasDismissed]);
  
  const handleDismiss = () => {
    setIsVisible(false);
    setHasDismissed(true);
    trackEvent('lead_capture_dismissed');
  };
  
  const handleCTAClick = (type: string) => {
    trackEvent('lead_capture_cta_click', { cta: type });
    setIsVisible(false);
    setHasDismissed(true);
  };
  
  if (hasDismissed) return null;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-gradient-to-b from-xera-darkgray to-black rounded-lg border border-white/20 shadow-xl w-full max-w-[95%] md:max-w-md overflow-hidden"
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
          >
            <div className="relative">
              <button 
                onClick={handleDismiss}
                className="absolute top-2 right-2 text-white/70 hover:text-white z-10 bg-black/30 rounded-full p-1.5 md:p-1"
                aria-label="Close popup"
              >
                <X className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              
              <div className="bg-gradient-to-r from-xera-red to-red-700 p-3 md:p-4 text-center">
                <h3 className="font-bold text-lg md:text-xl text-white">₹500 OFF Ceramic Coating</h3>
                <p className="text-white/90 text-xs md:text-sm">Limited Time Offer - Book Now!</p>
              </div>
              
              <div className="p-3 md:p-4">
                <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base text-center">
                  Book your premium ceramic coating today and receive an exclusive ₹500 discount. Limited slots available this week.
                </p>
                
                <div className="flex flex-col gap-2 md:gap-3">
                  <a 
                    href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I'm%20interested%20in%20the%20%E2%82%B9500%20discount%20offer%20for%20ceramic%20coating." 
                    className="w-full"
                    onClick={() => handleCTAClick('whatsapp')}
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 py-2 md:py-3 h-auto">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm md:text-base">Chat on WhatsApp Now</span>
                    </Button>
                  </a>
                  
                  <a 
                    href="tel:+917559999366" 
                    className="w-full"
                    onClick={() => handleCTAClick('call')}
                  >
                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 py-2 md:py-3 h-auto">
                      <span className="text-sm md:text-base">Call for Appointment</span>
                    </Button>
                  </a>
                </div>
                
                <p className="text-white/50 text-xs text-center mt-3 md:mt-4">
                  * Offer valid for bookings made within 48 hours. Mention this promo when booking.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadCapturePopup;
