
import { useState, useEffect, useCallback, useRef } from 'react';

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
  const autoRemoveTimerRef = useRef<NodeJS.Timeout | null>(null);
  const processingRef = useRef(false);

  const clearAutoRemoveTimer = useCallback(() => {
    if (autoRemoveTimerRef.current) {
      clearTimeout(autoRemoveTimerRef.current);
      autoRemoveTimerRef.current = null;
    }
  }, []);

  const addToQueue = useCallback((component: QueuedComponent) => {
    console.log('Adding component to queue:', component.id);
    
    setQueue(prev => {
      // Check for collision if collision_detection is enabled
      if (component.collision_detection && prev.length > 0) {
        console.log('Collision detected, replacing queue');
        // Replace queue with higher priority component
        return [component];
      }
      
      const newQueue = [...prev, component];
      // Sort by priority: high -> medium -> low
      return newQueue.sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
    });
  }, []);

  const removeFromQueue = useCallback((id: string) => {
    console.log('Removing component from queue:', id);
    
    setQueue(prev => prev.filter(comp => comp.id !== id));
    
    if (activeComponent?.id === id) {
      console.log('Removing active component');
      setActiveComponent(null);
      setIsVisible(false);
      clearAutoRemoveTimer();
    }
  }, [activeComponent, clearAutoRemoveTimer]);

  const clearQueue = useCallback(() => {
    console.log('Clearing entire queue');
    setQueue([]);
    setActiveComponent(null);
    setIsVisible(false);
    clearAutoRemoveTimer();
  }, [clearAutoRemoveTimer]);

  // Process queue with improved logic
  useEffect(() => {
    if (!activeComponent && queue.length > 0 && !processingRef.current) {
      processingRef.current = true;
      
      const nextComponent = queue[0];
      console.log('Processing next component:', nextComponent.id);
      
      setActiveComponent(nextComponent);
      setIsVisible(true);
      
      // Auto-remove after duration with proper cleanup
      if (nextComponent.duration && nextComponent.duration > 0) {
        autoRemoveTimerRef.current = setTimeout(() => {
          console.log('Auto-removing component after duration:', nextComponent.id);
          removeFromQueue(nextComponent.id);
        }, nextComponent.duration);
      }
      
      // Remove from queue
      setQueue(prev => prev.slice(1));
      
      // Reset processing flag after a brief delay
      setTimeout(() => {
        processingRef.current = false;
      }, 100);
    }
  }, [queue, activeComponent, removeFromQueue]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      clearAutoRemoveTimer();
    };
  }, [clearAutoRemoveTimer]);

  return {
    addToQueue,
    removeFromQueue,
    clearQueue,
    activeComponent,
    isVisible,
    queueLength: queue.length
  };
};
