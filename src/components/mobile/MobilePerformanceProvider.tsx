import React, { createContext, useContext, useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface MobilePerformanceContextType {
  reduceAnimations: boolean;
  enableLazyLoading: boolean;
  optimizedImageLoading: boolean;
  connectionType: 'slow' | 'fast' | 'unknown';
}

const MobilePerformanceContext = createContext<MobilePerformanceContextType>({
  reduceAnimations: false,
  enableLazyLoading: true,
  optimizedImageLoading: true,
  connectionType: 'unknown'
});

export const useMobilePerformance = () => {
  const context = useContext(MobilePerformanceContext);
  if (!context) {
    throw new Error('useMobilePerformance must be used within MobilePerformanceProvider');
  }
  return context;
};

interface MobilePerformanceProviderProps {
  children: React.ReactNode;
}

export const MobilePerformanceProvider: React.FC<MobilePerformanceProviderProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const [connectionType, setConnectionType] = useState<'slow' | 'fast' | 'unknown'>('unknown');
  const [reduceAnimations, setReduceAnimations] = useState(false);

  useEffect(() => {
    // Detect connection speed
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    
    if (connection) {
      const checkConnection = () => {
        const effectiveType = connection.effectiveType;
        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
          setConnectionType('slow');
          setReduceAnimations(true);
        } else if (effectiveType === '3g') {
          setConnectionType('slow');
          setReduceAnimations(isMobile);
        } else {
          setConnectionType('fast');
          setReduceAnimations(false);
        }
      };

      checkConnection();
      connection.addEventListener('change', checkConnection);
      
      return () => connection.removeEventListener('change', checkConnection);
    } else {
      // Fallback: reduce animations on mobile by default
      setReduceAnimations(isMobile);
      setConnectionType('unknown');
    }
  }, [isMobile]);

  useEffect(() => {
    // Check for user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReduceAnimations(true);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setReduceAnimations(true);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const value: MobilePerformanceContextType = {
    reduceAnimations,
    enableLazyLoading: true,
    optimizedImageLoading: true,
    connectionType
  };

  return (
    <MobilePerformanceContext.Provider value={value}>
      {children}
    </MobilePerformanceContext.Provider>
  );
};