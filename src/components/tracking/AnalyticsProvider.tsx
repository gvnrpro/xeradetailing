
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const trackEvent = (
  eventName: string, 
  eventParams: Record<string, any> = {}
) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
    console.log(`Analytics event tracked: ${eventName}`, eventParams);
  }
};

export const trackScroll = () => {
  if (typeof window !== 'undefined') {
    const scrollTracker = () => {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
      
      // Track at 25%, 50%, 75%, and 100% scroll depth
      const checkpoints = [25, 50, 75, 100];
      
      checkpoints.forEach(checkpoint => {
        if (
          scrollPercent >= checkpoint && 
          !window.sessionStorage.getItem(`scrolled-${checkpoint}`)
        ) {
          window.sessionStorage.setItem(`scrolled-${checkpoint}`, 'true');
          trackEvent('scroll_depth', { 
            depth: checkpoint, 
            page: window.location.pathname 
          });
        }
      });
    };
    
    window.addEventListener('scroll', scrollTracker);
    
    return () => window.removeEventListener('scroll', scrollTracker);
  }
};

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Track page views
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname,
        page_location: window.location.href,
        page_title: document.title
      });
    }
    
    // Set up scroll depth tracking
    const cleanupScrollTracking = trackScroll();
    
    return () => {
      cleanupScrollTracking?.();
    };
  }, [location]);
  
  return <>{children}</>;
};

export default AnalyticsProvider;
