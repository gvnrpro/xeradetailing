
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedCTA from './EnhancedCTA';
import { MessageCircle, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface StickyCTAProps {
  showOnScroll?: boolean;
  scrollThreshold?: number; 
  whatsappUrl?: string;
  phoneNumber?: string;
}

const StickyCTA = ({ 
  showOnScroll = true,
  scrollThreshold = 300,
  whatsappUrl = "https://wa.me/919605858483?text=Hi%20XERA%2C%20I%E2%80%99d%20like%20to%20book%20a%20car%20wash%20or%20detailing%20appointment.",
  phoneNumber = "tel:+919605858483"
}: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(!showOnScroll);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!showOnScroll) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > scrollThreshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showOnScroll, scrollThreshold]);
  
  if (!isVisible) return null;
  
  // Desktop: Floating in bottom right
  if (!isMobile) {
    return (
      <AnimatePresence>
        <motion.div 
          className="fixed bottom-24 right-6 z-40 flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <EnhancedCTA 
            text="Chat on WhatsApp"
            href={whatsappUrl}
            variant="primary"
            icon={<MessageCircle className="h-4 w-4" />}
            shimmerEffect={true}
            trackingLabel="floating_whatsapp_button"
          />
          
          <EnhancedCTA 
            text="Call Now"
            href={phoneNumber}
            variant="outline"
            icon={<Phone className="h-4 w-4" />}
            className="border-white/30 text-white hover:bg-white/10"
            trackingLabel="floating_call_button"
          />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  // Mobile: Sticky bottom bar
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-t border-xera-lightgray p-3"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex gap-3">
          <EnhancedCTA 
            text="Chat on WhatsApp" 
            href={whatsappUrl}
            variant="primary"
            icon={<MessageCircle className="h-4 w-4" />}
            trackingLabel="mobile_sticky_whatsapp"
            className="flex-1"
          />
          
          <EnhancedCTA 
            text="Call Now"
            href={phoneNumber}
            variant="outline"
            icon={<Phone className="h-4 w-4" />}
            className="flex-1 border-white/30 text-white hover:bg-white/10"
            trackingLabel="mobile_sticky_call"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StickyCTA;
