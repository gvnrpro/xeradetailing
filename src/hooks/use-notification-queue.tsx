
import { useState, useEffect, useCallback } from 'react';

export interface QueuedNotification {
  id: string;
  component: React.ComponentType<any>;
  props?: any;
  duration?: number;
  priority?: number;
}

export const useNotificationQueue = () => {
  const [queue, setQueue] = useState<QueuedNotification[]>([]);
  const [currentNotification, setCurrentNotification] = useState<QueuedNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const addNotification = useCallback((notification: QueuedNotification) => {
    setQueue(prev => {
      const newQueue = [...prev, notification];
      // Sort by priority (higher first), then by order added
      return newQueue.sort((a, b) => (b.priority || 0) - (a.priority || 0));
    });
  }, []);

  const removeNotification = useCallback((id: string) => {
    setQueue(prev => prev.filter(n => n.id !== id));
    if (currentNotification?.id === id) {
      setCurrentNotification(null);
      setIsVisible(false);
    }
  }, [currentNotification]);

  const clearQueue = useCallback(() => {
    setQueue([]);
    setCurrentNotification(null);
    setIsVisible(false);
  }, []);

  // Process queue
  useEffect(() => {
    if (!currentNotification && queue.length > 0) {
      const nextNotification = queue[0];
      setCurrentNotification(nextNotification);
      setIsVisible(true);
      
      // Auto-remove after duration
      if (nextNotification.duration) {
        setTimeout(() => {
          removeNotification(nextNotification.id);
        }, nextNotification.duration);
      }
      
      // Remove from queue
      setQueue(prev => prev.slice(1));
    }
  }, [queue, currentNotification, removeNotification]);

  return {
    addNotification,
    removeNotification,
    clearQueue,
    currentNotification,
    isVisible,
    queueLength: queue.length
  };
};
