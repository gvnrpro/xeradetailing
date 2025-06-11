
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';

interface CountdownBannerProps {
  endDate?: Date;
  message?: string;
  className?: string;
}

const CountdownBanner = ({ 
  endDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Default 3 days from now
  message = "Limited Time Offer: ₹500 OFF Ceramic Coating",
  className = ""
}: CountdownBannerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const visibilityTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const calculateTimeLeft = useCallback(() => {
    const now = Date.now();
    const endTime = endDate.getTime();
    const difference = endTime - now;
    
    // Check if expired
    if (difference <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setIsExpired(true);
      setIsVisible(false);
      
      // Clear interval when expired
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    
    // Calculate time components with proper bounds checking
    const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = Math.max(0, Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = Math.max(0, Math.floor((difference % (1000 * 60)) / 1000));
    
    setTimeLeft({ days, hours, minutes, seconds });
  }, [endDate]);
  
  useEffect(() => {
    // Initial calculation
    calculateTimeLeft();
    
    // Show banner after delay if not expired
    if (!isExpired) {
      visibilityTimerRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
    }
    
    // Set up interval for updates
    if (!isExpired) {
      intervalRef.current = setInterval(calculateTimeLeft, 1000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (visibilityTimerRef.current) {
        clearTimeout(visibilityTimerRef.current);
      }
    };
  }, [calculateTimeLeft, isExpired]);
  
  // Don't render if not visible or expired
  if (!isVisible || isExpired) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`bg-gradient-to-r from-xera-red to-red-700 text-white text-center py-2 px-4 text-sm ${className}`}
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <Clock size={16} className="animate-pulse" />
          <span className="font-medium">{message}</span>
        </div>
        
        <div className="flex justify-center gap-2 sm:gap-3 text-xs font-bold">
          <div className="flex flex-col items-center">
            <span className="bg-black/30 rounded px-1.5 py-0.5 sm:px-2 sm:py-1 min-w-[24px]">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-black/30 rounded px-1.5 py-0.5 sm:px-2 sm:py-1 min-w-[24px]">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs">Hrs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-black/30 rounded px-1.5 py-0.5 sm:px-2 sm:py-1 min-w-[24px]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs">Min</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-black/30 rounded px-1.5 py-0.5 sm:px-2 sm:py-1 min-w-[24px]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs">Sec</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CountdownBanner;
