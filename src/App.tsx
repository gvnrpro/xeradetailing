
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CeramicCoating from './pages/services/CeramicCoating';
import ExpressWash from './pages/services/ExpressWash';
import EngineBayCleaning from './pages/services/EngineBayCleaning';

import './App.css'

function App() {
  // Add web app manifest for PWA support
  useEffect(() => {
    // Add manifest link if it doesn't exist
    if (!document.querySelector('link[rel="manifest"]')) {
      const manifestLink = document.createElement('link');
      manifestLink.setAttribute('rel', 'manifest');
      manifestLink.setAttribute('href', '/manifest.json');
      document.head.appendChild(manifestLink);
    }
    
    // Add theme-color meta tag for mobile browser UI
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeColorMeta = document.createElement('meta');
      themeColorMeta.setAttribute('name', 'theme-color');
      themeColorMeta.setAttribute('content', '#ef4444'); // XERA red color
      document.head.appendChild(themeColorMeta);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ceramic-coating" element={<CeramicCoating />} />
        <Route path="/services/express-wash" element={<ExpressWash />} />
        <Route path="/services/engine-bay-cleaning" element={<EngineBayCleaning />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
