
import React, { useEffect, useState } from 'react';
import { Users, Calendar, CheckCircle } from 'lucide-react';
import { useNotifications } from './NotificationProvider';

interface TrustNudgeMessage {
  id: number;
  icon: React.ReactNode;
  message: string;
}

const TrustNudgeContent: React.FC<{ message: TrustNudgeMessage }> = ({ message }) => (
  <div className="bg-black/80 backdrop-blur-md rounded-lg border border-white/20 shadow-lg p-3">
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 bg-white/10 rounded-full p-2">
        {message.icon}
      </div>
      <p className="text-sm text-white">{message.message}</p>
    </div>
  </div>
);

const TrustNudgeManaged = () => {
  const { addNotification } = useNotifications();
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
  
  useEffect(() => {
    // Initial delay before starting notifications
    const startTimer = setTimeout(() => {
      const showNotification = () => {
        const message = messages[currentIndex];
        addNotification({
          id: `trust-nudge-${message.id}-${Date.now()}`,
          component: TrustNudgeContent,
          props: { message },
          duration: 5000,
          priority: 2
        });
        
        setCurrentIndex(prev => (prev + 1) % messages.length);
      };
      
      showNotification();
      
      // Show next notification every 30 seconds
      const interval = setInterval(showNotification, 30000);
      
      return () => clearInterval(interval);
    }, 4000);
    
    return () => clearTimeout(startTimer);
  }, [addNotification, currentIndex, messages]);
  
  return null; // This component doesn't render anything directly
};

export default TrustNudgeManaged;
