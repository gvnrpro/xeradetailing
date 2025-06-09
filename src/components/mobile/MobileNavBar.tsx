
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Wrench, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackEvent } from '../tracking/AnalyticsProvider';

const MobileNavBar = () => {
  const location = useLocation();
  
  const handleNavClick = (label: string) => {
    trackEvent('mobile_nav_click', { label });
  };
  
  const navItems = [
    { icon: <Home size={20} />, label: 'Home', path: '/', color: 'text-blue-400' },
    { icon: <Wrench size={20} />, label: 'Services', path: '/services', color: 'text-green-400' },
    { 
      icon: <MessageCircle size={20} />, 
      label: 'WhatsApp', 
      path: 'https://wa.me/917559999366?text=Hi%20XERA%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment.',
      external: true,
      color: 'text-green-500'
    },
    { icon: <Phone size={20} />, label: 'Call', path: 'tel:+917559999366', external: true, color: 'text-red-400' },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-black/95 backdrop-blur-md border-t border-white/10 md:hidden safe-area-bottom">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const isActive = !item.external && (
            item.path === '/' 
              ? location.pathname === '/' 
              : location.pathname.includes(item.path)
          );
          
          const Component = item.external ? 'a' : Link;
          const linkProps = item.external 
            ? { href: item.path, target: '_blank', rel: 'noopener noreferrer' }
            : { to: item.path };
          
          return (
            <Component
              key={item.label}
              {...linkProps}
              className="flex flex-col items-center justify-center h-full relative tap-highlight"
              onClick={() => handleNavClick(item.label.toLowerCase())}
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center justify-center transition-colors duration-200 ${
                  isActive ? `${item.color}` : 'text-white/70'
                }`}
              >
                {item.icon}
                <span className="text-xs mt-1 font-medium">{item.label}</span>
                
                {isActive && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className={`absolute bottom-0 w-8 h-0.5 rounded-full ${item.color.replace('text-', 'bg-')}`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            </Component>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavBar;
