
import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackEvent } from '../tracking/AnalyticsProvider';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Only show on mobile, with a slight delay for better UX
    if (!isMobile) return;
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [isMobile]);
  
  if (!isVisible || !isMobile) return null;
  
  const handleCallClick = () => {
    trackEvent('floating_call_button_click', {
      location: window.location.pathname
    });
  };
  
  return (
    <motion.a
      href="tel:+917559999366"
      aria-label="Call XERA Auto Detailing"
      className="fixed left-4 bottom-24 z-50 flex items-center justify-center rounded-full shadow-lg h-14 w-14 bg-gradient-to-r from-xera-red to-red-700"
      onClick={handleCallClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30
      }}
    >
      <Phone className="text-white" size={24} />
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/30"
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </motion.a>
  );
};

export default FloatingCallButton;
