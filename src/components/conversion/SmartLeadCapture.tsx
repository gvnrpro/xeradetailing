
import React, { useEffect, useState } from 'react';
import { X, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useComponentQueue } from '@/components/mobile/ComponentQueueProvider';
import { trackEvent } from '../tracking/AnalyticsProvider';

interface SmartLeadCaptureProps {
  trigger?: 'scroll' | 'time' | 'exit';
  scrollThreshold?: number;
  delay?: number;
  offer?: string;
  urgency?: boolean;
}

const LeadCaptureContent: React.FC<{ 
  offer: string; 
  urgency: boolean; 
  onDismiss: () => void;
  onCTAClick: (type: string) => void;
}> = ({ offer, urgency, onDismiss, onCTAClick }) => (
  <div className="bg-gradient-to-b from-xera-darkgray to-black rounded-lg border border-white/20 shadow-xl overflow-hidden max-w-sm mx-auto">
    <div className="relative">
      <button 
        onClick={onDismiss}
        className="absolute top-2 right-2 text-white/70 hover:text-white z-10 bg-black/30 rounded-full p-1"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>
      
      <div className="bg-gradient-to-r from-xera-red to-red-700 p-3 text-center">
        <h3 className="font-bold text-lg text-white">{offer}</h3>
        {urgency && <p className="text-white/90 text-xs">Limited Time - Book Today!</p>}
      </div>
      
      <div className="p-3">
        <p className="text-white/80 mb-3 text-sm text-center">
          Get expert ceramic coating protection. Limited slots this week.
        </p>
        
        <div className="flex flex-col gap-2">
          <a 
            href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I'm%20interested%20in%20the%20special%20offer." 
            className="w-full"
            onClick={() => onCTAClick('whatsapp')}
          >
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 h-auto py-2">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">Chat on WhatsApp</span>
            </Button>
          </a>
          
          <a 
            href="tel:+917559999366" 
            className="w-full"
            onClick={() => onCTAClick('call')}
          >
            <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 h-auto py-2">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">Call Now</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const SmartLeadCapture: React.FC<SmartLeadCaptureProps> = ({ 
  trigger = 'time',
  scrollThreshold = 50,
  delay = 8000,
  offer = "₹500 OFF Ceramic Coating",
  urgency = true
}) => {
  const { addComponent, removeComponent } = useComponentQueue();
  const [hasTriggered, setHasTriggered] = useState(false);
  
  useEffect(() => {
    if (hasTriggered) return;
    
    const hasShownRecently = sessionStorage.getItem('lead_capture_shown');
    const lastShown = hasShownRecently ? parseInt(hasShownRecently) : 0;
    const now = Date.now();
    
    // Don't show if shown in last 30 minutes
    if (now - lastShown < 30 * 60 * 1000) return;
    
    const componentId = `lead-capture-${now}`;
    
    const handleDismiss = () => {
      removeComponent(componentId);
      sessionStorage.setItem('lead_capture_shown', now.toString());
    };
    
    const handleCTAClick = (type: string) => {
      trackEvent('smart_lead_capture_cta', { type, offer });
      removeComponent(componentId);
      sessionStorage.setItem('lead_capture_shown', now.toString());
    };
    
    const showLeadCapture = () => {
      if (hasTriggered) return;
      
      addComponent({
        id: componentId,
        component: LeadCaptureContent,
        props: { offer, urgency, onDismiss: handleDismiss, onCTAClick: handleCTAClick },
        priority: 'high',
        position: 'center',
        duration: 15000,
        collision_detection: true
      });
      
      setHasTriggered(true);
      trackEvent('smart_lead_capture_shown', { trigger, offer });
    };
    
    if (trigger === 'time') {
      const timer = setTimeout(showLeadCapture, delay);
      return () => clearTimeout(timer);
    }
    
    if (trigger === 'scroll') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / scrollHeight) * 100;
        
        if (scrollPercentage > scrollThreshold) {
          showLeadCapture();
          window.removeEventListener('scroll', handleScroll);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [trigger, delay, scrollThreshold, offer, urgency, hasTriggered, addComponent, removeComponent]);
  
  return null;
};

export default SmartLeadCapture;
