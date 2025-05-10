
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface AppLikePageTransitionProps {
  children: React.ReactNode;
}

const AppLikePageTransition = ({ children }: AppLikePageTransitionProps) => {
  const location = useLocation();
  
  // Mobile-friendly animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100%"
    },
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: "-100%"
    }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.3
  };
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AppLikePageTransition;
