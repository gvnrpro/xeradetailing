
import { useState, useEffect, useCallback } from 'react';

export interface QueuedComponent {
  id: string;
  component: React.ComponentType<any>;
  props?: any;
  priority: 'high' | 'medium' | 'low';
  position: 'top' | 'bottom' | 'center';
  duration?: number;
  collision_detection: boolean;
}

export const useComponentQueue = () => {
  const [queue, setQueue] = useState<QueuedComponent[]>([]);
  const [activeComponent, setActiveComponent] = useState<QueuedComponent | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const addToQueue = useCallback((component: QueuedComponent) => {
    setQueue(prev => {
      const newQueue = [...prev, component];
      // Sort by priority: high -> medium -> low
      return newQueue.sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
    });
  }, []);

  const removeFromQueue = useCallback((id: string) => {
    setQueue(prev => prev.filter(comp => comp.id !== id));
    if (activeComponent?.id === id) {
      setActiveComponent(null);
      setIsVisible(false);
    }
  }, [activeComponent]);

  const clearQueue = useCallback(() => {
    setQueue([]);
    setActiveComponent(null);
    setIsVisible(false);
  }, []);

  // Process queue
  useEffect(() => {
    if (!activeComponent && queue.length > 0) {
      const nextComponent = queue[0];
      setActiveComponent(nextComponent);
      setIsVisible(true);
      
      // Auto-remove after duration
      if (nextComponent.duration) {
        setTimeout(() => {
          removeFromQueue(nextComponent.id);
        }, nextComponent.duration);
      }
      
      // Remove from queue
      setQueue(prev => prev.slice(1));
    }
  }, [queue, activeComponent, removeFromQueue]);

  return {
    addToQueue,
    removeFromQueue,
    clearQueue,
    activeComponent,
    isVisible,
    queueLength: queue.length
  };
};
