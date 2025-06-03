
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Wrench, Star, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackEvent } from '../tracking/AnalyticsProvider';

const MobileNavBar = () => {
  const location = useLocation();
  
  const handleNavClick = (label: string) => {
    trackEvent('mobile_nav_click', { label });
  };
  
  const navItems = [
    { icon: <Home size={20} />, label: 'Home', path: '/' },
    { icon: <Wrench size={20} />, label: 'Services', path: '/services' },
    { icon: <Star size={20} />, label: 'Reviews', path: '/#reviews' },
    { icon: <Phone size={20} />, label: 'Contact', path: '/contact' },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-black/95 backdrop-blur-md border-t border-xera-lightgray md:hidden safe-area-bottom">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = 
            item.path === '/' 
              ? location.pathname === '/' 
              : location.pathname.includes(item.path) || location.hash === item.path;
          
          return (
            <Link
              key={item.label}
              to={item.path}
              className="flex flex-col items-center justify-center w-full h-full relative"
              onClick={() => handleNavClick(item.label.toLowerCase())}
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center justify-center transition-colors duration-200 ${
                  isActive ? 'text-xera-red' : 'text-white/70'
                }`}
              >
                {item.icon}
                <span className="text-xs mt-1 font-medium">{item.label}</span>
                
                {isActive && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute bottom-0 w-10 h-0.5 bg-xera-red rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavBar;
