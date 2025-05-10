
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

  // Different animation variants for smoother transitions
  const variants = {
    hidden: { 
      opacity: 0,
      y: 10
    },
    enter: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.61, 1, 0.88, 1]
      }
    },
    exit: { 
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
        ease: [0.61, 1, 0.88, 1]
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={isInitialRender ? { opacity: 1, y: 0 } : "hidden"}
        animate="enter"
        exit="exit"
        variants={variants}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
