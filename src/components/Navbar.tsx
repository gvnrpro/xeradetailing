
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <Link to="/" className="text-white/80 hover:text-white hover:text-xera-red transition-colors">Home</Link>
          <Link to="/services" className="text-white/80 hover:text-white hover:text-xera-red transition-colors">Services</Link>
          <Link to="/blog" className="text-white/80 hover:text-white hover:text-xera-red transition-colors">Blog</Link>
          <Link to="/about" className="text-white/80 hover:text-white hover:text-xera-red transition-colors">About</Link>
          <Link to="/contact" className="text-white/80 hover:text-white hover:text-xera-red transition-colors">Contact</Link>
        </div>
        
        <div className="hidden md:flex items-center">
          <a href="tel:+919605858483" className="flex items-center text-white">
            <Phone size={18} className="mr-2 text-xera-red" />
            <span>+91 9605858483</span>
          </a>
          <Link to="/contact">
            <Button className="ml-6 bg-xera-red hover:bg-red-700 text-white font-medium">Book Now</Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-xera-darkgray border-t border-xera-lightgray animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <Link 
              to="/" 
              className="py-3 border-b border-gray-700 text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="py-3 border-b border-gray-700 text-white"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className="py-3 border-b border-gray-700 text-white"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="py-3 border-b border-gray-700 text-white"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="py-3 border-b border-gray-700 text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-4 mt-4">
              <a href="tel:+919605858483" className="flex items-center text-white">
                <Phone size={18} className="mr-2 text-xera-red" />
                <span>+91 9605858483</span>
              </a>
              <Link to="/contact">
                <Button className="w-full bg-xera-red hover:bg-red-700 text-white font-medium">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
