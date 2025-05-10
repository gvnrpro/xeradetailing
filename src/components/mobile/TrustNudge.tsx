
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Calendar, CheckCircle } from 'lucide-react';

interface TrustNudgeMessage {
  id: number;
  icon: React.ReactNode;
  message: string;
}

const TrustNudge = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const messages: TrustNudgeMessage[] = [
    {
      id: 1,
      icon: <Users className="h-4 w-4 text-green-400" />,
      message: "3 people just booked Ceramic Coating this hour"
    },
    {
      id: 2,
      icon: <Calendar className="h-4 w-4 text-yellow-400" />,
      message: "Booked slots filling fast - 2 appointments left this week"
    },
    {
      id: 3,
      icon: <CheckCircle className="h-4 w-4 text-blue-400" />,
      message: "5 new 5-star reviews in the last 24 hours"
    }
  ];
  
  // Show the nudge after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Rotate through messages
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [messages.length, isVisible]);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-20 right-4 z-30 max-w-[280px] md:hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={messages[currentIndex].id}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="bg-black/80 backdrop-blur-md rounded-lg border border-white/20 shadow-lg p-3"
        >
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 bg-white/10 rounded-full p-2">
              {messages[currentIndex].icon}
            </div>
            <p className="text-sm text-white">{messages[currentIndex].message}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TrustNudge;
