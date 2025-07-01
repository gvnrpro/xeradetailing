
import React, { createContext, useContext } from 'react';
import { useNotificationQueue, QueuedNotification } from '@/hooks/use-notification-queue';
import { AnimatePresence, motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface NotificationContextType {
  addNotification: (notification: QueuedNotification) => void;
  removeNotification: (id: string) => void;
  clearQueue: () => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within NotificationProvider');
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { addNotification, removeNotification, clearQueue, currentNotification, isVisible } = useNotificationQueue();
  const isMobile = useIsMobile();

  // Position notifications to avoid overlap with other mobile elements
  const getNotificationPosition = () => {
    if (!isMobile) return "fixed bottom-24 right-6 z-40";
    return "fixed bottom-20 right-4 z-40 max-w-[280px]";
  };

  return (
    <NotificationContext.Provider value={{ addNotification, removeNotification, clearQueue }}>
      {children}
      
      {/* Render current notification */}
      <div className={getNotificationPosition()}>
        <AnimatePresence>
          {isVisible && currentNotification && (
            <motion.div
              key={currentNotification.id}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <currentNotification.component {...(currentNotification.props || {})} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
};
