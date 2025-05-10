
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { trackEvent } from '../tracking/AnalyticsProvider';
import { AnimatePresence, motion } from 'framer-motion';

interface EnhancedCTAProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  trackingLabel?: string;
  shimmerEffect?: boolean;
  pulseEffect?: boolean;
  showOnScroll?: boolean;
  scrollThreshold?: number;
  animateEntrance?: boolean;
  onClick?: () => void; // Added onClick handler prop
}

const EnhancedCTA = ({
  text,
  href,
  variant = 'primary',
  size = 'default',
  icon,
  className,
  trackingLabel,
  shimmerEffect = false,
  pulseEffect = false,
  showOnScroll = false,
  scrollThreshold = 300,
  animateEntrance = false,
  onClick
}: EnhancedCTAProps) => {
  const [isVisible, setIsVisible] = useState(!showOnScroll);
  
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
  
  const handleClick = () => {
    trackEvent('cta_click', { 
      cta_text: text, 
      location: window.location.pathname,
      label: trackingLabel || text
    });
    
    // Call the onClick handler if provided
    if (onClick) {
      onClick();
    }
  };
  
  const getButtonVariant = () => {
    switch (variant) {
      case 'primary': return 'default';
      case 'secondary': return 'secondary';
      case 'outline': return 'outline';
      case 'ghost': return 'ghost';
      default: return 'default';
    }
  };
  
  const getButtonClass = () => {
    const baseClasses = [];
    
    if (variant === 'primary') {
      baseClasses.push('bg-xera-red hover:bg-red-700 text-white');
    }
    
    if (shimmerEffect) {
      baseClasses.push('relative overflow-hidden');
    }
    
    if (pulseEffect) {
      baseClasses.push('animate-pulse');
    }
    
    return cn(...baseClasses, className);
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={animateEntrance ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={showOnScroll ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a href={href} onClick={handleClick}>
            <Button 
              variant={getButtonVariant()} 
              size={size}
              className={getButtonClass()}
            >
              {icon && <span className="mr-2">{icon}</span>}
              {text}
              
              {shimmerEffect && (
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 3 }}
                />
              )}
            </Button>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnhancedCTA;
