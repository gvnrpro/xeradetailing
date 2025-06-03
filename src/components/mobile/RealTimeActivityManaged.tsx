
import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { useNotifications } from './NotificationProvider';

interface ActivityEvent {
  id: number;
  name: string;
  action: string;
  time: string;
  location?: string;
}

const ActivityContent: React.FC<{ event: ActivityEvent }> = ({ event }) => (
  <div className="bg-black/80 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg p-3">
    <div className="flex items-center gap-2">
      <div className="flex-shrink-0 bg-xera-red/30 rounded-full p-1.5">
        <Users className="h-4 w-4 text-white" />
      </div>
      <div>
        <p className="text-sm text-white font-medium truncate">
          {event.name} {event.action}
        </p>
        <p className="text-xs text-white/60">
          {event.location ? `${event.location} • ` : ''}{event.time}
        </p>
      </div>
    </div>
  </div>
);

const RealTimeActivityManaged = () => {
  const { addNotification } = useNotifications();
  
  const names = [
    "Rahul", "Priya", "Arun", "Meena", "Vijay", "Deepa", 
    "Sanjay", "Ananya", "Rajesh", "Lakshmi", "Mohammed", "Sarah"
  ];
  
  const actions = [
    "booked ceramic coating",
    "scheduled detailing", 
    "reserved express wash",
    "booked interior cleaning",
    "requested a quote",
    "booked paint protection"
  ];
  
  const locations = [
    "Ottapalam", "Palakkad", "Shoranur", "Pattambi", 
    "Perinthalmanna", "Thrissur", "Cherpulassery"
  ];
  
  useEffect(() => {
    const generateEvent = (): ActivityEvent => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      
      return {
        id: Date.now(),
        name: randomName,
        action: randomAction,
        location: Math.random() > 0.5 ? randomLocation : undefined,
        time: "just now"
      };
    };
    
    // Start showing activity after 8 seconds
    const startTimer = setTimeout(() => {
      const showActivity = () => {
        const event = generateEvent();
        addNotification({
          id: `activity-${event.id}`,
          component: ActivityContent,
          props: { event },
          duration: 6000,
          priority: 1
        });
      };
      
      showActivity();
      
      // Show new activity every 45-75 seconds
      const interval = setInterval(() => {
        showActivity();
      }, 45000 + Math.random() * 30000);
      
      return () => clearInterval(interval);
    }, 8000);
    
    return () => clearTimeout(startTimer);
  }, [addNotification]);
  
  return null;
};

export default RealTimeActivityManaged;
