
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  
  useEffect(() => {
    // Delay visibility for improved UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +endDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [endDate]);
  
  if (!isVisible) return null;
  
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={`bg-gradient-to-r from-xera-red to-red-700 text-white text-center py-2 px-4 text-sm ${className}`}
    >
      <div className="flex items-center justify-center gap-2">
        <Clock size={16} className="animate-pulse" />
        <span className="font-medium">{message}</span>
      </div>
      
      <div className="flex justify-center gap-3 mt-1 text-xs font-bold">
        <div className="flex flex-col items-center">
          <span className="bg-black/30 rounded px-2 py-1">{timeLeft.days}</span>
          <span>Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-black/30 rounded px-2 py-1">{timeLeft.hours}</span>
          <span>Hrs</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-black/30 rounded px-2 py-1">{timeLeft.minutes}</span>
          <span>Min</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-black/30 rounded px-2 py-1">{timeLeft.seconds}</span>
          <span>Sec</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownBanner;
