
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    // Skip animation on initial page load
    if (isInitialRender) {
      setIsInitialRender(false);
    }
  }, [isInitialRender]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={isInitialRender ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
