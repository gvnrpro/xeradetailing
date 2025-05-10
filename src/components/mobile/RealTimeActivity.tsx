
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Calendar, CheckCircle } from 'lucide-react';

interface ActivityEvent {
  id: number;
  name: string;
  action: string;
  time: string;
  location?: string;
}

const RealTimeActivity = () => {
  const [events, setEvents] = useState<ActivityEvent[]>([]);
  const [currentEvent, setCurrentEvent] = useState<ActivityEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Names pool for realistic activity
  const names = [
    "Rahul", "Priya", "Arun", "Meena", "Vijay", "Deepa", 
    "Sanjay", "Ananya", "Rajesh", "Lakshmi", "Mohammed", "Sarah"
  ];
  
  // Actions pool
  const actions = [
    "booked ceramic coating",
    "scheduled detailing",
    "reserved express wash",
    "booked interior cleaning",
    "requested a quote",
    "booked paint protection"
  ];
  
  // Locations pool
  const locations = [
    "Ottapalam", "Palakkad", "Shoranur", "Pattambi", 
    "Perinthalmanna", "Thrissur", "Cherpulassery"
  ];
  
  useEffect(() => {
    // Only show after some time for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Generate realistic random events
  useEffect(() => {
    if (!isVisible) return;
    
    const generateEvent = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      
      const newEvent: ActivityEvent = {
        id: Date.now(),
        name: randomName,
        action: randomAction,
        location: Math.random() > 0.5 ? randomLocation : undefined,
        time: "just now"
      };
      
      return newEvent;
    };
    
    // Generate initial events
    const initialEvents = Array.from({ length: 5 }).map(() => generateEvent());
    setEvents(initialEvents);
    setCurrentEvent(initialEvents[0]);
    
    // Generate new events periodically
    const interval = setInterval(() => {
      const newEvent = generateEvent();
      setEvents(prevEvents => [newEvent, ...prevEvents.slice(0, 9)]); // Keep last 10
      setCurrentEvent(newEvent);
      
      // Hide after showing for a few seconds
      setTimeout(() => {
        setCurrentEvent(null);
      }, 5000);
      
      // Show next event after some delay
      setTimeout(() => {
        setCurrentEvent(events[Math.floor(Math.random() * events.length)]);
      }, 20000 + Math.random() * 15000); // Random delay between 20-35 seconds
    }, 45000 + Math.random() * 30000); // Random interval between 45-75 seconds
    
    return () => clearInterval(interval);
  }, [isVisible]);
  
  if (!isVisible || !currentEvent) return null;
  
  return (
    <div className="fixed bottom-28 right-4 z-30 max-w-[250px] md:hidden">
      <AnimatePresence>
        <motion.div
          key={currentEvent.id}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="bg-black/80 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg p-3"
        >
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 bg-xera-red/30 rounded-full p-1.5">
              <Users className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm text-white font-medium truncate">
                {currentEvent.name} {currentEvent.action}
              </p>
              <p className="text-xs text-white/60">
                {currentEvent.location ? `${currentEvent.location} • ` : ''}{currentEvent.time}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RealTimeActivity;
