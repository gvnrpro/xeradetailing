
import React, { createContext, useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useComponentQueue, QueuedComponent } from '@/hooks/use-component-queue';
import { useIsMobile } from '@/hooks/use-mobile';

interface ComponentQueueContextType {
  addComponent: (component: QueuedComponent) => void;
  removeComponent: (id: string) => void;
  clearAll: () => void;
}

const ComponentQueueContext = createContext<ComponentQueueContextType | null>(null);

export const useComponentQueue = () => {
  const context = useContext(ComponentQueueContext);
  if (!context) {
    throw new Error('useComponentQueue must be used within ComponentQueueProvider');
  }
  return context;
};

export const ComponentQueueProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { addToQueue, removeFromQueue, clearQueue, activeComponent, isVisible } = useComponentQueue();
  const isMobile = useIsMobile();

  const getPositionStyles = (position: string) => {
    if (!isMobile) return "fixed bottom-6 right-6 z-50";
    
    switch (position) {
      case 'top':
        return "fixed top-20 left-4 right-4 z-40";
      case 'center':
        return "fixed top-1/2 left-4 right-4 z-50 -translate-y-1/2";
      case 'bottom':
      default:
        return "fixed bottom-20 left-4 right-4 z-40";
    }
  };

  return (
    <ComponentQueueContext.Provider value={{ 
      addComponent: addToQueue, 
      removeComponent: removeFromQueue, 
      clearAll: clearQueue 
    }}>
      {children}
      
      {/* Render active component */}
      <div className={activeComponent ? getPositionStyles(activeComponent.position) : ''}>
        <AnimatePresence mode="wait">
          {isVisible && activeComponent && (
            <motion.div
              key={activeComponent.id}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <activeComponent.component {...(activeComponent.props || {})} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ComponentQueueContext.Provider>
  );
};
