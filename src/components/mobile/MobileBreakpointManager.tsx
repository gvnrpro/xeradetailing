import React, { createContext, useContext, useEffect, useState } from 'react';

interface BreakpointContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
  orientation: 'portrait' | 'landscape';
  safePadding: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

const BreakpointContext = createContext<BreakpointContextType>({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  screenWidth: 1024,
  orientation: 'landscape',
  safePadding: { top: 0, bottom: 0, left: 0, right: 0 }
});

export const useBreakpoint = () => {
  const context = useContext(BreakpointContext);
  if (!context) {
    throw new Error('useBreakpoint must be used within BreakpointProvider');
  }
  return context;
};

interface BreakpointProviderProps {
  children: React.ReactNode;
}

export const BreakpointProvider: React.FC<BreakpointProviderProps> = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('landscape');
  const [safePadding, setSafePadding] = useState({ top: 0, bottom: 0, left: 0, right: 0 });

  useEffect(() => {
    const updateScreenInfo = () => {
      setScreenWidth(window.innerWidth);
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
      
      // Calculate safe areas for mobile devices
      if ('screen' in window && 'orientation' in screen) {
        const computedStyle = getComputedStyle(document.documentElement);
        setSafePadding({
          top: parseInt(computedStyle.getPropertyValue('--safe-area-inset-top') || '0'),
          bottom: parseInt(computedStyle.getPropertyValue('--safe-area-inset-bottom') || '0'),
          left: parseInt(computedStyle.getPropertyValue('--safe-area-inset-left') || '0'),
          right: parseInt(computedStyle.getPropertyValue('--safe-area-inset-right') || '0'),
        });
      }
    };

    updateScreenInfo();
    window.addEventListener('resize', updateScreenInfo);
    window.addEventListener('orientationchange', updateScreenInfo);

    return () => {
      window.removeEventListener('resize', updateScreenInfo);
      window.removeEventListener('orientationchange', updateScreenInfo);
    };
  }, []);

  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const isDesktop = screenWidth >= 1024;

  const value: BreakpointContextType = {
    isMobile,
    isTablet,
    isDesktop,
    screenWidth,
    orientation,
    safePadding
  };

  return (
    <BreakpointContext.Provider value={value}>
      <div 
        className={`min-h-screen ${isMobile ? 'mobile-layout' : isTablet ? 'tablet-layout' : 'desktop-layout'}`}
        style={{
          paddingTop: `env(safe-area-inset-top, ${safePadding.top}px)`,
          paddingBottom: `env(safe-area-inset-bottom, ${safePadding.bottom}px)`,
          paddingLeft: `env(safe-area-inset-left, ${safePadding.left}px)`,
          paddingRight: `env(safe-area-inset-right, ${safePadding.right}px)`,
        }}
      >
        {children}
      </div>
    </BreakpointContext.Provider>
  );
};