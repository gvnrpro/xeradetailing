
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackEvent } from './tracking/AnalyticsProvider';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const handleNavClick = (label: string) => {
    trackEvent('nav_click', { label });
  };
  
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
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`text-white hover:text-xera-red transition-colors ${
              location.pathname === '/' ? 'text-xera-red' : ''
            }`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`text-white hover:text-xera-red transition-colors ${
              location.pathname.includes('/services') ? 'text-xera-red' : ''
            }`}
            onClick={() => handleNavClick('services')}
          >
            Services
          </Link>
          <Link 
            to="/car-care-tips" 
            className={`text-white hover:text-xera-red transition-colors ${
              location.pathname.includes('/car-care-tips') ? 'text-xera-red' : ''
            }`}
            onClick={() => handleNavClick('car_care_tips')}
          >
            Car Care Tips
          </Link>
          <Link 
            to="/blog" 
            className={`text-white hover:text-xera-red transition-colors ${
              location.pathname.includes('/blog') ? 'text-xera-red' : ''
            }`}
            onClick={() => handleNavClick('blog')}
          >
            Blog
          </Link>
          <Link 
            to="/about" 
            className={`text-white hover:text-xera-red transition-colors ${
              location.pathname === '/about' ? 'text-xera-red' : ''
            }`}
            onClick={() => handleNavClick('about')}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="bg-xera-red hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
            onClick={() => handleNavClick('contact_button')}
          >
            Contact Us
          </Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white tap-highlight p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <motion.div 
          className="md:hidden bg-black/95 backdrop-blur-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4 mobile-tap-list">
              <Link 
                to="/" 
                className={`text-white hover:text-xera-red transition-colors py-3 ${
                  location.pathname === '/' ? 'text-xera-red' : ''
                }`}
                onClick={() => handleNavClick('home_mobile')}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`text-white hover:text-xera-red transition-colors py-3 ${
                  location.pathname.includes('/services') ? 'text-xera-red' : ''
                }`}
                onClick={() => handleNavClick('services_mobile')}
              >
                Services
              </Link>
              <Link 
                to="/car-care-tips" 
                className={`text-white hover:text-xera-red transition-colors py-3 ${
                  location.pathname.includes('/car-care-tips') ? 'text-xera-red' : ''
                }`}
                onClick={() => handleNavClick('car_care_tips_mobile')}
              >
                Car Care Tips
              </Link>
              <Link 
                to="/blog" 
                className={`text-white hover:text-xera-red transition-colors py-3 ${
                  location.pathname.includes('/blog') ? 'text-xera-red' : ''
                }`}
                onClick={() => handleNavClick('blog_mobile')}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className={`text-white hover:text-xera-red transition-colors py-3 ${
                  location.pathname === '/about' ? 'text-xera-red' : ''
                }`}
                onClick={() => handleNavClick('about_mobile')}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="bg-xera-red hover:bg-red-700 text-white p-3 rounded transition-colors text-center font-medium"
                onClick={() => handleNavClick('contact_button_mobile')}
              >
                Book Now
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
