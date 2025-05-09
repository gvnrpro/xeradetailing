
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

// Content Hub Pages
import CarCareTips from './pages/CarCareTips';
import CeramicCoatingKeralaClimate from './pages/car-care-tips/CeramicCoatingKeralaClimate';
import CarWashKeralaMonsoon from './pages/car-care-tips/CarWashKeralaMonsoon';
import CeramicCoatingMistakes from './pages/car-care-tips/CeramicCoatingMistakes';

// Location Pages
import CeramicCoatingPalakkad from './pages/locations/CeramicCoatingPalakkad';

function App() {
  return (
    <Router>
      <AnalyticsProvider>
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
      </AnalyticsProvider>
    </Router>
  );
}

export default App;
