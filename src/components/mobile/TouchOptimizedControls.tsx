import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface TouchOptimizedControlsProps {
  children: React.ReactNode;
  onTap?: () => void;
  onLongPress?: () => void;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  hapticFeedback?: boolean;
  className?: string;
}

const TouchOptimizedControls: React.FC<TouchOptimizedControlsProps> = ({
  children,
  onTap,
  onLongPress,
  onSwipeLeft,
  onSwipeRight,
  hapticFeedback = true,
  className = ''
}) => {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; time: number } | null>(null);
  const [isLongPressing, setIsLongPressing] = useState(false);
  const isMobile = useIsMobile();

  const triggerHaptic = useCallback((type: 'light' | 'medium' | 'heavy' = 'light') => {
    if (hapticFeedback && 'vibrate' in navigator) {
      const patterns = {
        light: [10],
        medium: [20],
        heavy: [30]
      };
      navigator.vibrate(patterns[type]);
    }
  }, [hapticFeedback]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    });

    // Long press detection
    const longPressTimer = setTimeout(() => {
      setIsLongPressing(true);
      triggerHaptic('medium');
      onLongPress?.();
    }, 500);

    // Store timer to clear it if touch ends early
    (e.currentTarget as any)._longPressTimer = longPressTimer;
  }, [onLongPress, triggerHaptic]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!(e.currentTarget as any)._longPressTimer) return;
    
    clearTimeout((e.currentTarget as any)._longPressTimer);
    
    if (!touchStart) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    const deltaTime = Date.now() - touchStart.time;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Swipe detection
    if (deltaTime < 300 && distance > 50) {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          triggerHaptic('light');
          onSwipeRight?.();
        } else {
          triggerHaptic('light');
          onSwipeLeft?.();
        }
      }
    } 
    // Tap detection (not long press and minimal movement)
    else if (!isLongPressing && distance < 10 && deltaTime < 500) {
      triggerHaptic('light');
      onTap?.();
    }

    setTouchStart(null);
    setIsLongPressing(false);
  }, [touchStart, isLongPressing, onTap, onSwipeLeft, onSwipeRight, triggerHaptic]);

  const handleTouchCancel = useCallback((e: React.TouchEvent) => {
    if ((e.currentTarget as any)._longPressTimer) {
      clearTimeout((e.currentTarget as any)._longPressTimer);
    }
    setTouchStart(null);
    setIsLongPressing(false);
  }, []);

  if (!isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`touch-none select-none ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      whileTap={{ scale: 0.98 }}
      style={{
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation'
      }}
    >
      {children}
    </motion.div>
  );
};

export default TouchOptimizedControls;