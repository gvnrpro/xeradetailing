
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { trackEvent } from './AnalyticsProvider';
import { useIsMobile } from '@/hooks/use-mobile';

interface ExitIntentProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  delay?: number; // minimum time (ms) before showing popup
}

const ExitIntent = ({
  title = "Wait! Get 10% Off Your Ceramic Coating",
  description = "Book your premium ceramic coating today and receive an exclusive discount. Limited time offer for clients in Ottapalam and nearby areas.",
  ctaText = "Chat on WhatsApp Now",
  ctaLink = "https://wa.me/919605858483?text=Hi%20XERA%2C%20I'm%20interested%20in%20the%2010%%20discount%20on%20ceramic%20coating.",
  delay = 10000
}: ExitIntentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [hasTimePassed, setHasTimePassed] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Only show exit intent on desktop
    if (isMobile) return;
    
    // Set minimum time delay
    const timer = setTimeout(() => {
      setHasTimePassed(true);
    }, delay);
    
    // Track mouse movement for exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 && 
        !hasTriggered && 
        hasTimePassed &&
        !sessionStorage.getItem('exitIntentShown')
      ) {
        setIsOpen(true);
        setHasTriggered(true);
        sessionStorage.setItem('exitIntentShown', 'true');
        trackEvent('exit_intent_shown');
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasTriggered, hasTimePassed, isMobile, delay]);
  
  const handleCTAClick = () => {
    trackEvent('exit_intent_cta_click', { cta_text: ctaText });
    setIsOpen(false);
  };
  
  const handleClose = () => {
    trackEvent('exit_intent_dismissed');
    setIsOpen(false);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-xera-red/50 bg-gradient-to-b from-black to-xera-darkgray">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl text-gradient">{title}</DialogTitle>
          <DialogDescription className="text-white/80">
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="rounded-md overflow-hidden">
            <img 
              src="/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png" 
              alt="Ceramic coated car with premium finish by XERA detailing in Ottapalam, Kerala"
              className="w-full h-auto"
              width={600}
              height={400}
            />
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <a 
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
            onClick={handleCTAClick}
          >
            <Button className="w-full bg-xera-red hover:bg-red-700 text-white">
              {ctaText}
            </Button>
          </a>
          <Button 
            variant="outline" 
            onClick={handleClose}
            className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
          >
            Maybe Later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntent;
