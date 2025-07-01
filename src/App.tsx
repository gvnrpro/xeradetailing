import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import Services from '@/pages/Services';
import CeramicCoating from '@/pages/CeramicCoating';
import ExpressWash from '@/pages/ExpressWash';
import EngineBayCleaning from '@/pages/EngineBayCleaning';
import CeramicCoatingPalakkad from '@/pages/CeramicCoatingPalakkad';
import CarCareTips from '@/pages/CarCareTips';
import CeramicCoatingKeralaClimate from '@/pages/CeramicCoatingKeralaClimate';
import CarWashKeralaMonsoon from '@/pages/CarWashKeralaMonsoon';
import CeramicCoatingMistakes from '@/pages/CeramicCoatingMistakes';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import CeramicCoatingOttapalam from '@/pages/CeramicCoatingOttapalam';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import FAQ from '@/pages/FAQ';
import Pricing from '@/pages/Pricing';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/ceramic-coating" element={<CeramicCoating />} />
            <Route path="/services/express-wash" element={<ExpressWash />} />
            <Route path="/services/engine-bay-cleaning" element={<EngineBayCleaning />} />
            <Route path="/ceramic-coating-palakkad" element={<CeramicCoatingPalakkad />} />
            <Route path="/car-care-tips" element={<CarCareTips />} />
            <Route path="/car-care-tips/ceramic-coating-kerala-climate" element={<CeramicCoatingKeralaClimate />} />
            <Route path="/car-care-tips/car-wash-kerala-monsoon" element={<CarWashKeralaMonsoon />} />
            <Route path="/car-care-tips/ceramic-coating-mistakes" element={<CeramicCoatingMistakes />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog/ceramic-coating-ottapalam-car-protection" element={<CeramicCoatingOttapalam />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
