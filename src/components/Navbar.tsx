import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from './tracking/AnalyticsProvider';
import { LanguageToggle } from '@/components/ui/language-toggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const handleNavClick = (label: string) => trackEvent('nav_click', { label });

  const navLinks = [
    { to: '/',              label: 'Home',          match: (p: string) => p === '/'                     },
    { to: '/services',      label: 'Services',      match: (p: string) => p.includes('/services')       },
    { to: '/car-care-tips', label: 'Car Care Tips', match: (p: string) => p.includes('/car-care-tips')  },
    { to: '/blog',          label: 'Blog',          match: (p: string) => p.includes('/blog')           },
    { to: '/about',         label: 'About',         match: (p: string) => p === '/about'                },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-black/90 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl font-bold"
          onClick={() => handleNavClick('logo')}
        >
          <span className="text-gradient">XERA</span> Detailing
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ to, label, match }) => (
            <Link
              key={to}
              to={to}
              className={`text-white hover:text-xera-red transition-colors ${
                match(location.pathname) ? 'text-xera-red' : ''
              }`}
              onClick={() => handleNavClick(label.toLowerCase())}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-xera-red hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
            onClick={() => handleNavClick('contact_button')}
          >
            Contact Us
          </Link>
          <LanguageToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle className="text-white" />
          <button
            className="text-white tap-highlight p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {/* Animated hamburger → X */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu — AnimatePresence enables the exit animation */}
      {/* ✅ Removed `isMobile` JS guard: caused flash + broke exit animation.
             Visibility is now handled by CSS (md:hidden on the toggle button
             means this menu is unreachable on desktop anyway). */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-md overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-1 mobile-tap-list">
                {navLinks.map(({ to, label, match }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`text-white hover:text-xera-red transition-colors py-4 px-4 rounded-lg min-h-[52px] flex items-center ${
                      match(location.pathname) ? 'bg-xera-red/20 text-xera-red' : 'hover:bg-white/5'
                    }`}
                    onClick={() => handleNavClick(`${label.toLowerCase()}_mobile`)}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-xera-red to-red-700 hover:from-red-600 hover:to-red-800 text-white py-4 px-4 rounded-lg transition-colors text-center font-semibold min-h-[52px] flex items-center justify-center mt-2"
                  onClick={() => handleNavClick('contact_button_mobile')}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
