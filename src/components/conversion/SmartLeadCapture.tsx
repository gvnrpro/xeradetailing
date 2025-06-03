
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Phone, Star, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { trackEvent } from '../tracking/AnalyticsProvider';
import { useIsMobile } from '@/hooks/use-mobile';

interface SmartLeadCaptureProps {
  trigger?: 'scroll' | 'time' | 'exit-intent' | 'page-visit';
  delay?: number;
  scrollThreshold?: number;
  offer?: string;
  urgency?: boolean;
}

const SmartLeadCapture = ({
  trigger = 'scroll',
  delay = 8000,
  scrollThreshold = 60,
  offer = "₹500 OFF Ceramic Coating",
  urgency = true
}: SmartLeadCaptureProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (hasTriggered) return;
    
    const hasShown = sessionStorage.getItem('smart_lead_capture_shown');
    if (hasShown) return;
    
    const handleTrigger = () => {
      setIsVisible(true);
      setHasTriggered(true);
      sessionStorage.setItem('smart_lead_capture_shown', 'true');
      trackEvent('smart_lead_capture_shown', { trigger });
    };
    
    if (trigger === 'time') {
      const timer = setTimeout(handleTrigger, delay);
      return () => clearTimeout(timer);
    }
    
    if (trigger === 'scroll') {
      const handleScroll = () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrolled > scrollThreshold) {
          handleTrigger();
          window.removeEventListener('scroll', handleScroll);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    
    if (trigger === 'exit-intent' && !isMobile) {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0) {
          handleTrigger();
          document.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
      
      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [trigger, delay, scrollThreshold, hasTriggered, isMobile]);
  
  const handleDismiss = () => {
    setIsVisible(false);
    trackEvent('smart_lead_capture_dismissed');
  };
  
  const handleCTAClick = (action: string) => {
    trackEvent('smart_lead_capture_conversion', { action, offer });
    setIsVisible(false);
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-xera-darkgray via-black to-xera-darkgray rounded-2xl border border-xera-red/50 shadow-2xl w-full max-w-md overflow-hidden"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button 
              onClick={handleDismiss}
              className="absolute top-3 right-3 z-10 text-white/70 hover:text-white bg-black/30 rounded-full p-1.5"
            >
              <X className="h-4 w-4" />
            </button>
            
            {/* Header with offer */}
            <div className="bg-gradient-to-r from-xera-red to-red-700 p-4 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
              <div className="relative z-10">
                <Gift className="h-6 w-6 mx-auto mb-2 text-white" />
                <h3 className="font-bold text-xl text-white">{offer}</h3>
                {urgency && (
                  <Badge className="bg-yellow-500 text-black mt-2">
                    Limited Time - This Week Only!
                  </Badge>
                )}
              </div>
            </div>
            
            <CardContent className="p-6 space-y-4">
              <div className="text-center space-y-2">
                <p className="text-white/90 text-sm">
                  Book your premium ceramic coating today and receive this exclusive discount.
                </p>
                <div className="flex items-center justify-center gap-2 text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                  <span className="text-white/70 text-sm">4.9/5 • 50+ reviews</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <a 
                  href="https://wa.me/919605858483?text=Hi%20XERA%2C%20I'm%20interested%20in%20the%20%E2%82%B9500%20discount%20offer%20for%20ceramic%20coating."
                  onClick={() => handleCTAClick('whatsapp')}
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Book on WhatsApp Now
                  </Button>
                </a>
                
                <a 
                  href="tel:+919605858483"
                  onClick={() => handleCTAClick('call')}
                >
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    <Phone className="h-4 w-4 mr-2" />
                    Call for Instant Quote
                  </Button>
                </a>
              </div>
              
              <div className="text-center space-y-1">
                <p className="text-white/50 text-xs">✅ Money-back guarantee</p>
                <p className="text-white/50 text-xs">✅ 5+ year protection warranty</p>
                <p className="text-white/40 text-xs">* Mention this offer when booking</p>
              </div>
            </CardContent>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SmartLeadCapture;
