
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Check if link is active
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gradient">XERA</span>
            <span className="ml-2 text-sm font-medium text-white/80">CAR WASH & DETAILING</span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`transition-colors ${
              isActive('/') 
                ? 'text-xera-red font-medium' 
                : 'text-white/80 hover:text-xera-red'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`transition-colors ${
              isActive('/services') 
                ? 'text-xera-red font-medium' 
                : 'text-white/80 hover:text-xera-red'
            }`}
          >
            Services
          </Link>
          <Link 
            to="/blog" 
            className={`transition-colors ${
              isActive('/blog') 
                ? 'text-xera-red font-medium' 
                : 'text-white/80 hover:text-xera-red'
            }`}
          >
            Blog
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors ${
              isActive('/about') 
                ? 'text-xera-red font-medium' 
                : 'text-white/80 hover:text-xera-red'
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors ${
              isActive('/contact') 
                ? 'text-xera-red font-medium' 
                : 'text-white/80 hover:text-xera-red'
            }`}
          >
            Contact
          </Link>
        </div>
        
        <div className="hidden md:flex items-center">
          <a href="tel:+919605858483" className="flex items-center text-white group">
            <Phone size={18} className="mr-2 text-xera-red group-hover:animate-pulse" />
            <span className="group-hover:text-xera-red transition-colors">+91 9605858483</span>
          </a>
          <Link to="/contact">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Button className="ml-6 bg-xera-red hover:bg-red-700 text-white font-medium red-glow">
                Book Now
              </Button>
            </motion.div>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <a href="tel:+919605858483" className="flex items-center text-white mr-2">
            <Phone size={18} className="text-xera-red" />
          </a>
          <button 
            className="text-white p-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-xera-darkgray/95 backdrop-blur-lg border-t border-xera-lightgray animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <Link 
              to="/" 
              className={`py-3 border-b border-gray-700 ${
                isActive('/') ? 'text-xera-red font-medium' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`py-3 border-b border-gray-700 ${
                isActive('/services') ? 'text-xera-red font-medium' : 'text-white'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className={`py-3 border-b border-gray-700 ${
                isActive('/blog') ? 'text-xera-red font-medium' : 'text-white'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className={`py-3 border-b border-gray-700 ${
                isActive('/about') ? 'text-xera-red font-medium' : 'text-white'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`py-3 border-b border-gray-700 ${
                isActive('/contact') ? 'text-xera-red font-medium' : 'text-white'
              }`}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-4 mt-6">
              <Link to="/contact">
                <Button className="w-full bg-xera-red hover:bg-red-700 text-white font-medium">
                  Book Your Service Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Book Now button for mobile */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <Link to="/contact">
          <motion.div 
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button className="bg-xera-red hover:bg-red-700 text-white font-bold py-3 px-5 rounded-full shadow-lg red-glow">
              Book Now
            </Button>
          </motion.div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
