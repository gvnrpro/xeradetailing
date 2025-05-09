
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
import CeramicCoatingOttapalam from './pages/blog/CeramicCoatingOttapalam';
import { Toaster } from '@/components/ui/toaster';
import './App.css'

function App() {
  // Add web app manifest for PWA support and enhanced SEO metadata
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
    
    // Add mobile specific meta
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
      document.head.appendChild(viewportMeta);
    }
    
    // Add mobile app capable tag for iOS
    if (!document.querySelector('meta[name="apple-mobile-web-app-capable"]')) {
      const appleMobileMeta = document.createElement('meta');
      appleMobileMeta.setAttribute('name', 'apple-mobile-web-app-capable');
      appleMobileMeta.setAttribute('content', 'yes');
      document.head.appendChild(appleMobileMeta);
    }
    
    // Preconnect to required origins
    const preconnectOrigins = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'];
    preconnectOrigins.forEach(origin => {
      if (!document.querySelector(`link[rel="preconnect"][href="${origin}"]`)) {
        const preconnectLink = document.createElement('link');
        preconnectLink.setAttribute('rel', 'preconnect');
        preconnectLink.setAttribute('href', origin);
        document.head.appendChild(preconnectLink);
      }
    });
    
    // Add Base Open Graph tags
    const ogTags = {
      'og:site_name': 'XERA Car Wash & Auto Detailing',
      'og:locale': 'en_IN',
      'og:type': 'website',
    };
    
    Object.entries(ogTags).forEach(([property, content]) => {
      if (!document.querySelector(`meta[property="${property}"]`)) {
        const ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag);
      }
    });
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
        <Route path="/blog/ceramic-coating-ottapalam-car-protection" element={<CeramicCoatingOttapalam />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
