import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileOptimizedNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/', icon: Shield },
    { name: 'Services', path: '/services', icon: Star },
    { name: 'About', path: '/about', icon: MapPin },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  if (!isMobile) return null;

  return (
    <>
      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 
            ? 'bg-black/95 backdrop-blur-lg border-b border-white/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-xera-red to-red-400 bg-clip-text text-transparent"
              whileTap={{ scale: 0.95 }}
            >
              XERA
            </motion.div>
          </Link>

          <motion.button
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ backgroundColor: 'rgba(230, 43, 30, 0.2)' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 w-80 h-full bg-black/95 backdrop-blur-xl border-l border-white/10 z-50"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-6 pt-20">
              {/* Navigation Items */}
              <nav className="space-y-6">
                {navItems.map((item) => (
                  <motion.div key={item.path} variants={itemVariants}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                        location.pathname === item.path
                          ? 'bg-xera-red/20 text-xera-red border border-xera-red/30'
                          : 'text-white hover:bg-white/10 hover:text-xera-red'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA Section */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-xera-red/20 to-red-600/20 rounded-xl border border-xera-red/30"
                variants={itemVariants}
              >
                <h3 className="text-white font-semibold mb-2">Ready to Book?</h3>
                <p className="text-white/70 text-sm mb-4">
                  Get your free quote in under 2 minutes
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-xera-red to-red-700 hover:from-red-600 hover:to-red-800"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="mt-6 text-center text-white/60 text-sm"
                variants={itemVariants}
              >
                <p>📍 Ottapalam, Kerala</p>
                <p>📞 +91 9876543210</p>
                <p>⭐ 4.9/5 Rating</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileOptimizedNav;