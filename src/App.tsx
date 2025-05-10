
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Services from './pages/Services';
import CeramicCoating from './pages/services/CeramicCoating';
import ExpressWash from './pages/services/ExpressWash';
import EngineBayCleaning from './pages/services/EngineBayCleaning';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import CeramicCoatingOttapalam from './pages/blog/CeramicCoatingOttapalam';
import AnalyticsProvider from './components/tracking/AnalyticsProvider';
import PageTransition from './components/PageTransition';
import MobileNavBar from './components/mobile/MobileNavBar';
import FloatingCallButton from './components/mobile/FloatingCallButton';
import TrustNudge from './components/mobile/TrustNudge';
import LeadCapturePopup from './components/mobile/LeadCapturePopup';
import RealTimeActivity from './components/mobile/RealTimeActivity';
import { useIsMobile } from './hooks/use-mobile';
import { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import CountdownBanner from './components/mobile/CountdownBanner';

// Content Hub Pages
import CarCareTips from './pages/CarCareTips';
import CeramicCoatingKeralaClimate from './pages/car-care-tips/CeramicCoatingKeralaClimate';
import CarWashKeralaMonsoon from './pages/car-care-tips/CarWashKeralaMonsoon';
import CeramicCoatingMistakes from './pages/car-care-tips/CeramicCoatingMistakes';

// Location Pages
import CeramicCoatingPalakkad from './pages/locations/CeramicCoatingPalakkad';

function App() {
  const isMobile = useIsMobile();

  // Add viewport meta tag for mobile optimization
  useEffect(() => {
    // Add preloading hints for key assets
    const fontPreloadLink = document.createElement('link');
    fontPreloadLink.rel = 'preload';
    fontPreloadLink.href = '/fonts/inter-var.woff2';
    fontPreloadLink.as = 'font';
    fontPreloadLink.type = 'font/woff2';
    fontPreloadLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreloadLink);

    // Add PWA meta tags for mobile
    if (isMobile) {
      const metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      metaThemeColor.content = '#000000';
      document.head.appendChild(metaThemeColor);

      const metaAppleMobile = document.createElement('meta');
      metaAppleMobile.name = 'apple-mobile-web-app-capable';
      metaAppleMobile.content = 'yes';
      document.head.appendChild(metaAppleMobile);
      
      // Add JavaScript to detect iOS and add class for height fixes
      const script = document.createElement('script');
      script.textContent = `
        if (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)) {
          document.documentElement.classList.add('ios-device');
        }
        document.documentElement.classList.add('js');
      `;
      document.head.appendChild(script);
    }

    // Cleanup
    return () => {
      document.head.removeChild(fontPreloadLink);
      if (isMobile) {
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        const metaAppleMobile = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
        if (metaThemeColor) document.head.removeChild(metaThemeColor);
        if (metaAppleMobile) document.head.removeChild(metaAppleMobile);
      }
    };
  }, [isMobile]);

  return (
    <Router>
      <HelmetProvider>
        <AnalyticsProvider>
          <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <link rel="apple-touch-icon" href="/favicon.svg" />
            <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          </Helmet>

          {isMobile && <CountdownBanner />}

          <PageTransition>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Service Pages */}
              <Route path="/services/ceramic-coating" element={<CeramicCoating />} />
              <Route path="/services/express-wash" element={<ExpressWash />} />
              <Route path="/services/engine-bay-cleaning" element={<EngineBayCleaning />} />
              
              {/* Blog Pages */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/blog/ceramic-coating-ottapalam-car-protection" element={<CeramicCoatingOttapalam />} />
              
              {/* Content Hub and Articles */}
              <Route path="/car-care-tips" element={<CarCareTips />} />
              <Route path="/car-care-tips/ceramic-coating-kerala-climate" element={<CeramicCoatingKeralaClimate />} />
              <Route path="/car-care-tips/car-wash-kerala-monsoon" element={<CarWashKeralaMonsoon />} />
              <Route path="/car-care-tips/ceramic-coating-mistakes" element={<CeramicCoatingMistakes />} />
              
              {/* Location Pages */}
              <Route path="/ceramic-coating-palakkad" element={<CeramicCoatingPalakkad />} />
              <Route path="/car-detailing-shoranur" element={<CeramicCoatingPalakkad />} />
              <Route path="/car-wash-pattambi" element={<CeramicCoatingPalakkad />} />
              <Route path="/paint-protection-perinthalmanna" element={<CeramicCoatingPalakkad />} />
              <Route path="/interior-cleaning-mannarkkad" element={<CeramicCoatingPalakkad />} />
              
              {/* 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>

          {/* Mobile-specific components */}
          {isMobile && (
            <>
              <MobileNavBar />
              <FloatingCallButton />
              <TrustNudge />
              <RealTimeActivity />
              <LeadCapturePopup />
            </>
          )}
        </AnalyticsProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;
