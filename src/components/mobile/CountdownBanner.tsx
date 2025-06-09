
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';

interface CountdownBannerProps {
  endDate?: Date;
  message?: string;
  className?: string;
}

const CountdownBanner = ({ 
  endDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Default 3 days from now
  message = "Limited Time Offer: 10% OFF Ceramic Coating",
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
  
  useEffect(() => {
    // Delay visibility for improved UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const endTime = endDate.getTime();
      const difference = endTime - now;
      
      // Check if expired
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
        if (intervalId) {
          clearInterval(intervalId);
        }
        return;
      }
      
      // Calculate time components with bounds checking
      const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));
      const hours = Math.max(0, Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutes = Math.max(0, Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = Math.max(0, Math.floor((difference % (1000 * 60)) / 1000));
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    // Initial calculation
    calculateTimeLeft();
    
    // Only start interval if not expired
    if (!isExpired) {
      intervalId = setInterval(calculateTimeLeft, 1000);
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [endDate, isExpired]);
  
  // Auto-hide when expired or not visible
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
        <div className="flex items-center justify-center gap-2">
          <Clock size={16} className="animate-pulse" />
          <span className="font-medium">{message}</span>
        </div>
        
        <div className="flex justify-center gap-3 mt-1 text-xs font-bold">
          <div className="flex flex-col items-center">
            <span className="bg-black/30 rounded px-2 py-1">{String(timeLeft.days).padStart(2, '0')}</span>
            <span>Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-black/30 rounded px-2 py-1">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span>Hrs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-black/30 rounded px-2 py-1">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span>Min</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-black/30 rounded px-2 py-1">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span>Sec</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CountdownBanner;
