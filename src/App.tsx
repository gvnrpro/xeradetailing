
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import Services from '@/pages/Services';
import CeramicCoating from '@/pages/services/CeramicCoating';
import ExpressWash from '@/pages/services/ExpressWash';
import EngineBayCleaning from '@/pages/services/EngineBayCleaning';
import CeramicCoatingPalakkad from '@/pages/locations/CeramicCoatingPalakkad';
import CeramicCoatingShoranur from '@/pages/locations/CeramicCoatingShoranur';
import CarDetailingShoranur from '@/pages/locations/CarDetailingShoranur';
import CarWashPattambi from '@/pages/locations/CarWashPattambi';
import PaintProtectionPerinthalmanna from '@/pages/locations/PaintProtectionPerinthalmanna';
import InteriorCleaningMannarkkad from '@/pages/locations/InteriorCleaningMannarkkad';
import CeramicCoatingThrissur from '@/pages/locations/CeramicCoatingThrissur';
import CarDetailingCherpulassery from '@/pages/locations/CarDetailingCherpulassery';
import CarCareTips from '@/pages/CarCareTips';
import CeramicCoatingKeralaClimate from '@/pages/car-care-tips/CeramicCoatingKeralaClimate';
import CarWashKeralaMonsoon from '@/pages/car-care-tips/CarWashKeralaMonsoon';
import CeramicCoatingMistakes from '@/pages/car-care-tips/CeramicCoatingMistakes';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import CeramicCoatingOttapalam from '@/pages/blog/CeramicCoatingOttapalam';
import CeramicCoatingMonsoonProtection from '@/pages/blog/CeramicCoatingMonsoonProtection';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import FAQ from '@/pages/FAQ';
import Pricing from '@/pages/Pricing';
import CeramicCoatingOttapalamMl from '@/pages/malayalam/CeramicCoatingOttapalam';
import CarWashPalakkadMl from '@/pages/malayalam/CarWashPalakkad';
import InteriorCleaningShoranurMl from '@/pages/malayalam/InteriorCleaningShoranur';
import MonsoonCarCareKeralaMl from '@/pages/malayalam/MonsoonCarCareKerala';
import CeramicCoatingPriceMl from '@/pages/malayalam/CeramicCoatingPrice';
import AboutMalayalam from '@/pages/malayalam/AboutMalayalam';
import ServicesMalayalam from '@/pages/malayalam/ServicesMalayalam';
import ContactMalayalam from '@/pages/malayalam/ContactMalayalam';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ComponentQueueProvider } from '@/components/mobile/ComponentQueueProvider';
import { NotificationProvider } from '@/components/mobile/NotificationProvider';
import ErrorBoundary from '@/components/ErrorBoundary';
import TrustNudgeManaged from '@/components/mobile/TrustNudgeManaged';
import RealTimeActivityManaged from '@/components/mobile/RealTimeActivityManaged';
import LimitedOfferModalManaged from '@/components/mobile/LimitedOfferModalManaged';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime)
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ComponentQueueProvider>
            <NotificationProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/ceramic-coating" element={<CeramicCoating />} />
                  <Route path="/services/express-wash" element={<ExpressWash />} />
                  <Route path="/services/engine-bay-cleaning" element={<EngineBayCleaning />} />
                  <Route path="/ceramic-coating-palakkad" element={<CeramicCoatingPalakkad />} />
                  <Route path="/ceramic-coating-shoranur" element={<CeramicCoatingShoranur />} />
                  <Route path="/car-care-tips" element={<CarCareTips />} />
                  <Route path="/car-care-tips/ceramic-coating-kerala-climate" element={<CeramicCoatingKeralaClimate />} />
                  <Route path="/car-care-tips/car-wash-kerala-monsoon" element={<CarWashKeralaMonsoon />} />
                  <Route path="/car-care-tips/ceramic-coating-mistakes" element={<CeramicCoatingMistakes />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/blog/ceramic-coating-ottapalam-car-protection" element={<CeramicCoatingOttapalam />} />
                  <Route path="/blog/ceramic-coating-monsoon-protection-kerala" element={<CeramicCoatingMonsoonProtection />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/pricing" element={<Pricing />} />
                  
                  {/* New Location Pages */}
                  <Route path="/car-detailing-shoranur" element={<CarDetailingShoranur />} />
                  <Route path="/car-wash-pattambi" element={<CarWashPattambi />} />
                  <Route path="/paint-protection-perinthalmanna" element={<PaintProtectionPerinthalmanna />} />
                  <Route path="/interior-cleaning-mannarkkad" element={<InteriorCleaningMannarkkad />} />
                  <Route path="/ceramic-coating-thrissur" element={<CeramicCoatingThrissur />} />
                  <Route path="/car-detailing-cherpulassery" element={<CarDetailingCherpulassery />} />
                  
                  {/* Malayalam Pages */}
                  <Route path="/ml/ceramic-coating-ottapalam" element={<CeramicCoatingOttapalamMl />} />
                  <Route path="/ml/car-wash-palakkad" element={<CarWashPalakkadMl />} />
                  <Route path="/ml/interior-cleaning-shoranur" element={<InteriorCleaningShoranurMl />} />
                  <Route path="/ml/monsoon-car-care-kerala" element={<MonsoonCarCareKeralaMl />} />
                  <Route path="/ml/ceramic-coating-price" element={<CeramicCoatingPriceMl />} />
                  <Route path="/ml/about" element={<AboutMalayalam />} />
                  <Route path="/ml/services" element={<ServicesMalayalam />} />
                  <Route path="/ml/contact" element={<ContactMalayalam />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
                
                {/* Mobile Enhancement Components */}
                <TrustNudgeManaged />
                <RealTimeActivityManaged />
                <LimitedOfferModalManaged />
              </Router>
            </NotificationProvider>
          </ComponentQueueProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
