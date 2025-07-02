
import React, { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Lazy load images when they come into viewport
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    // Observe all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => imageObserver.observe(img));

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero image
      const heroImage = new Image();
      heroImage.src = '/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png';

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
    };

    // Service worker registration for caching
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          await navigator.serviceWorker.register('/service-worker.js');
          console.log('Service Worker registered successfully');
        } catch (error) {
          console.log('Service Worker registration failed:', error);
        }
      }
    };

    // Critical CSS injection for above-the-fold content
    const injectCriticalCSS = () => {
      const criticalCSS = `
        /* Critical CSS for above-the-fold content */
        .hero-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .text-gradient {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .lazy-image {
          opacity: 0;
          transition: opacity 0.3s;
        }
        .lazy-image.loaded {
          opacity: 1;
        }
      `;

      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.appendChild(style);
    };

    // Initialize performance optimizations
    preloadCriticalResources();
    registerServiceWorker();
    injectCriticalCSS();

    // Cleanup
    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
