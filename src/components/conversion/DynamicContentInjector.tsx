
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Clock, Shield } from 'lucide-react';

interface DynamicContentInjectorProps {
  location?: string;
  injectAfter?: number; // seconds after page load
}

const DynamicContentInjector = ({ 
  location = "Ottapalam",
  injectAfter = 3
}: DynamicContentInjectorProps) => {
  const [showContent, setShowContent] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const dynamicMessages = [
    {
      icon: <Users className="h-4 w-4 text-green-400" />,
      text: `3 ${location} residents booked ceramic coating this week`,
      urgency: "high"
    },
    {
      icon: <Clock className="h-4 w-4 text-yellow-400" />,
      text: "Limited slots available - Only 2 appointments left this week",
      urgency: "medium"
    },
    {
      icon: <Star className="h-4 w-4 text-blue-400" />,
      text: "Just received a 5-star review for our ceramic coating service",
      urgency: "low"
    },
    {
      icon: <Shield className="h-4 w-4 text-purple-400" />,
      text: "5+ year ceramic coating warranty - Now with monsoon protection guarantee",
      urgency: "medium"
    }
  ];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, injectAfter * 1000);
    
    return () => clearTimeout(timer);
  }, [injectAfter]);
  
  useEffect(() => {
    if (!showContent) return;
    
    const interval = setInterval(() => {
      setCurrentMessageIndex(prev => (prev + 1) % dynamicMessages.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [showContent, dynamicMessages.length]);
  
  if (!showContent) return null;
  
  const currentMessage = dynamicMessages[currentMessageIndex];
  const urgencyColors = {
    high: "border-red-400 bg-red-400/10",
    medium: "border-yellow-400 bg-yellow-400/10", 
    low: "border-blue-400 bg-blue-400/10"
  };
  
  return (
    <motion.div
      className="fixed bottom-20 left-4 right-4 z-30 flex justify-center"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        key={currentMessageIndex}
        className={`${urgencyColors[currentMessage.urgency]} border rounded-lg p-3 backdrop-blur-md max-w-sm mx-auto`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2">
          {currentMessage.icon}
          <p className="text-sm text-white font-medium">{currentMessage.text}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DynamicContentInjector;
