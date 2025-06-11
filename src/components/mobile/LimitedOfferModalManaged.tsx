
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import EnhancedCTA from '../enhanced/EnhancedCTA';
import { trackEvent } from '../tracking/AnalyticsProvider';
import { useComponentQueue } from './ComponentQueueProvider';

interface LimitedOfferModalManagedProps {
  onDismiss?: () => void;
}

const LimitedOfferModalContent = ({ onDismiss }: LimitedOfferModalManagedProps) => {
  const handleOfferClick = () => {
    trackEvent('limited_offer_clicked');
    if (onDismiss) onDismiss();
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    trackEvent('limited_offer_dismissed');
    console.log('Close button clicked - dismissing modal');
    if (onDismiss) onDismiss();
  };

  return (
    <div className="bg-gradient-to-r from-red-900 to-xera-red p-1 rounded-lg shadow-xl max-w-[95%] sm:max-w-md mx-auto">
      <div className="bg-xera-darkgray rounded-md p-3 sm:p-4 relative">
        <button 
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors z-10 bg-black/20 rounded-full p-1 hover:bg-black/40"
          aria-label="Close offer"
          type="button"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        
        <div className="text-center mb-3 sm:mb-4 pr-8">
          <h3 className="font-bold text-lg sm:text-xl mb-1">₹500 OFF Ceramic Coating!</h3>
          <p className="text-white/70 text-xs sm:text-sm">Limited time offer. Book your ceramic coating now to save big!</p>
        </div>
        
        <div className="flex justify-center">
          <EnhancedCTA 
            text="Book on WhatsApp Now"
            href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%E2%80%99d%20like%20to%20book%20ceramic%20coating%20with%20the%20%E2%82%B9500%20discount%20offer."
            variant="primary"
            shimmerEffect={true}
            className="w-full text-sm sm:text-base py-2 sm:py-3"
            onClick={handleOfferClick}
            trackingLabel="limited_time_offer_whatsapp"
          />
        </div>
        
        <p className="text-white/50 text-xs text-center mt-2 sm:mt-3">
          * Offer valid for limited time. Mention this promo when booking.
        </p>
      </div>
    </div>
  );
};

const LimitedOfferModalManaged = () => {
  const { addComponent, removeComponent } = useComponentQueue();
  const [componentId] = useState(() => `limited-offer-${Date.now()}`);
  
  useEffect(() => {
    // Check if offer was dismissed (reset daily)
    const dismissedDate = localStorage.getItem('xera_unified_offer_dismissed');
    const today = new Date().toDateString();
    
    console.log('Checking offer dismissal:', { dismissedDate, today });
    
    if (dismissedDate === today) {
      console.log('Offer already dismissed today, skipping');
      return;
    }
    
    // Show offer after delay
    const timer = setTimeout(() => {
      console.log('Adding limited offer to queue');
      
      const handleDismiss = () => {
        console.log('Dismissing limited offer modal');
        removeComponent(componentId);
        localStorage.setItem('xera_unified_offer_dismissed', today);
        trackEvent('limited_offer_dismissed');
      };
      
      addComponent({
        id: componentId,
        component: LimitedOfferModalContent,
        props: {
          onDismiss: handleDismiss
        },
        priority: 'medium',
        position: 'bottom',
        duration: 20000, // Auto-dismiss after 20 seconds
        collision_detection: true
      });
      
      trackEvent('limited_offer_shown');
    }, 8000);
    
    return () => {
      clearTimeout(timer);
      removeComponent(componentId);
    };
  }, [addComponent, removeComponent, componentId]);
  
  return null;
};

export default LimitedOfferModalManaged;
