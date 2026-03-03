import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import Services from '@/pages/Services';
import CeramicCoating from '@/pages/services/CeramicCoating';
import ExpressWash from '@/pages/services/ExpressWash';
import EngineBayCleaning from '@/pages/services/EngineBayCleaning';
import InteriorDetailing from '@/pages/services/InteriorDetailing';
import PaintCorrection from '@/pages/services/PaintCorrection';
import HeadlightRestoration from '@/pages/services/HeadlightRestoration';
import UnderbodyCoating from '@/pages/services/UnderbodyCoating';

/* ================= NEW SERVICE IMPORTS ================= */
import GrapheneCoating from '@/pages/services/GrapheneCoating';
import PaintProtectionFilm from '@/pages/services/PaintProtectionFilm';

/* ================= EXISTING LOCATION IMPORTS ================= */
import CeramicCoatingPalakkad from '@/pages/locations/CeramicCoatingPalakkad';
import CeramicCoatingShoranur from '@/pages/locations/CeramicCoatingShoranur';
import CarDetailingShoranur from '@/pages/locations/CarDetailingShoranur';
import CarWashPattambi from '@/pages/locations/CarWashPattambi';
import PaintProtectionPerinthalmanna from '@/pages/locations/PaintProtectionPerinthalmanna';
import InteriorCleaningMannarkkad from '@/pages/locations/InteriorCleaningMannarkkad';
import CeramicCoatingThrissur from '@/pages/locations/CeramicCoatingThrissur';
import CarDetailingCherpulassery from '@/pages/locations/CarDetailingCherpulassery';

/* ================= NEW LOCATION IMPORTS ================= */
import CarDetailingOttapalam from '@/pages/locations/CarDetailingOttapalam';
import CeramicCoatingOttapalam from '@/pages/locations/CeramicCoatingOttapalam';
import CarWashOttapalam from '@/pages/locations/CarWashOttapalam';
import GrapheneCoatingOttapalam from '@/pages/locations/GrapheneCoatingOttapalam';
import PPFCoatingOttapalam from '@/pages/locations/PPFCoatingOttapalam';
import BikeDetailingOttapalam from '@/pages/locations/BikeDetailingOttapalam';
import CarDetailingPalakkad from '@/pages/locations/CarDetailingPalakkad';
import CarWashShoranur from '@/pages/locations/CarWashShoranur';
import CeramicCoatingPattambi from '@/pages/locations/CeramicCoatingPattambi';
import CarDetailingPerinthalmanna from '@/pages/locations/CarDetailingPerinthalmanna';
import CeramicCoatingMannarkkad from '@/pages/locations/CeramicCoatingMannarkkad';
import CarDetailingThrissur from '@/pages/locations/CarDetailingThrissur';
import CeramicCoatingCherpulassery from '@/pages/locations/CeramicCoatingCherpulassery';
import CeramicCoatingKoduvayur from '@/pages/locations/CeramicCoatingKoduvayur';
import CarDetailingKongad from '@/pages/locations/CarDetailingKongad';
import CeramicCoatingShornur from '@/pages/locations/CeramicCoatingShornur';

/* ================= EXISTING CAR CARE TIPS ================= */
import CarCareTips from '@/pages/CarCareTips';
import CeramicCoatingKeralaClimate from '@/pages/car-care-tips/CeramicCoatingKeralaClimate';
import CarWashKeralaMonsoon from '@/pages/car-care-tips/CarWashKeralaMonsoon';
import CeramicCoatingMistakes from '@/pages/car-care-tips/CeramicCoatingMistakes';

/* ================= NEW CAR CARE TIPS ================= */
import GrapheneVsCeramicCoating from '@/pages/car-care-tips/GrapheneVsCeramicCoating';
import PPFVsCeramicCoating from '@/pages/car-care-tips/PPFVsCeramicCoating';
import HowLongCeramicCoatingLasts from '@/pages/car-care-tips/HowLongCeramicCoatingLasts';
import CeramicCoatingPriceKerala from '@/pages/car-care-tips/CeramicCoatingPriceKerala';
import CarCareKeralaMonoson from '@/pages/car-care-tips/CarCareKeralaMonoson';
import PaintCorrectionGuide from '@/pages/car-care-tips/PaintCorrectionGuide';

/* ================= EXISTING BLOG ================= */
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import CeramicCoatingOttapalamBlog from '@/pages/blog/CeramicCoatingOttapalam';
import CeramicCoatingMonsoonProtection from '@/pages/blog/CeramicCoatingMonsoonProtection';

/* ================= NEW BLOG IMPORTS ================= */
import WhyCeramicCoatingWorthItKerala from '@/pages/blog/WhyCeramicCoatingWorthItKerala';
import BestCarDetailingOttapalam from '@/pages/blog/BestCarDetailingOttapalam';
import GrapheneCoatingKeralaGuide from '@/pages/blog/GrapheneCoatingKeralaGuide';
import PaintCorrectionBeforeCeramicCoating from '@/pages/blog/PaintCorrectionBeforeCeramicCoating';

/* ================= EXISTING PAGES ================= */
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import FAQ from '@/pages/FAQ';
import Pricing from '@/pages/Pricing';

/* ================= MALAYALAM IMPORTS ================= */
import CeramicCoatingOttapalamMl from '@/pages/malayalam/CeramicCoatingOttapalam';
import CarWashPalakkadMl from '@/pages/malayalam/CarWashPalakkad';
import InteriorCleaningShoranurMl from '@/pages/malayalam/InteriorCleaningShoranur';
import MonsoonCarCareKeralaMl from '@/pages/malayalam/MonsoonCarCareKerala';
import CeramicCoatingPriceMl from '@/pages/malayalam/CeramicCoatingPrice';
import AboutMalayalam from '@/pages/malayalam/AboutMalayalam';
import ServicesMalayalam from '@/pages/malayalam/ServicesMalayalam';
import ContactMalayalam from '@/pages/malayalam/ContactMalayalam';
import IndexMalayalam from '@/pages/malayalam/IndexMalayalam';

/* ================= NEW MALAYALAM ================= */
import GrapheneCoatingOttapalamMl from '@/pages/malayalam/GrapheneCoatingOttapalam';
import PPFCoatingOttapalamMl from '@/pages/malayalam/PPFCoatingOttapalam';
import CarDetailingGuideKerala from '@/pages/malayalam/CarDetailingGuideKerala';

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
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
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

                  {/* SERVICES */}
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/ceramic-coating" element={<CeramicCoating />} />
                  <Route path="/services/express-wash" element={<ExpressWash />} />
                  <Route path="/services/engine-bay-cleaning" element={<EngineBayCleaning />} />
                  <Route path="/services/interior-detailing" element={<InteriorDetailing />} />
                  <Route path="/services/paint-correction" element={<PaintCorrection />} />
                  <Route path="/services/headlight-restoration" element={<HeadlightRestoration />} />
                  <Route path="/services/underbody-coating" element={<UnderbodyCoating />} />
                  <Route path="/services/graphene-coating" element={<GrapheneCoating />} />
                  <Route path="/services/paint-protection-film" element={<PaintProtectionFilm />} />

                  {/* LOCATION PAGES */}
                  <Route path="/ceramic-coating-palakkad" element={<CeramicCoatingPalakkad />} />
                  <Route path="/ceramic-coating-shoranur" element={<CeramicCoatingShoranur />} />
                  <Route path="/car-detailing-ottapalam" element={<CarDetailingOttapalam />} />
                  <Route path="/ceramic-coating-ottapalam" element={<CeramicCoatingOttapalam />} />
                  <Route path="/car-wash-ottapalam" element={<CarWashOttapalam />} />
                  <Route path="/graphene-coating-ottapalam" element={<GrapheneCoatingOttapalam />} />
                  <Route path="/ppf-coating-ottapalam" element={<PPFCoatingOttapalam />} />
                  <Route path="/bike-detailing-ottapalam" element={<BikeDetailingOttapalam />} />
                  <Route path="/car-detailing-palakkad" element={<CarDetailingPalakkad />} />
                  <Route path="/car-wash-shoranur" element={<CarWashShoranur />} />
                  <Route path="/ceramic-coating-pattambi" element={<CeramicCoatingPattambi />} />
                  <Route path="/car-detailing-perinthalmanna" element={<CarDetailingPerinthalmanna />} />
                  <Route path="/ceramic-coating-mannarkkad" element={<CeramicCoatingMannarkkad />} />
                  <Route path="/car-detailing-thrissur" element={<CarDetailingThrissur />} />
                  <Route path="/ceramic-coating-cherpulassery" element={<CeramicCoatingCherpulassery />} />
                  <Route path="/ceramic-coating-koduvayur" element={<CeramicCoatingKoduvayur />} />
                  <Route path="/car-detailing-kongad" element={<CarDetailingKongad />} />
                  <Route path="/ceramic-coating-shornur" element={<CeramicCoatingShornur />} />

                  {/* CAR CARE TIPS */}
                  <Route path="/car-care-tips" element={<CarCareTips />} />
                  <Route path="/car-care-tips/ceramic-coating-kerala-climate" element={<CeramicCoatingKeralaClimate />} />
                  <Route path="/car-care-tips/car-wash-kerala-monsoon" element={<CarWashKeralaMonsoon />} />
                  <Route path="/car-care-tips/ceramic-coating-mistakes" element={<CeramicCoatingMistakes />} />
                  <Route path="/car-care-tips/graphene-vs-ceramic-coating" element={<GrapheneVsCeramicCoating />} />
                  <Route path="/car-care-tips/ppf-vs-ceramic-coating" element={<PPFVsCeramicCoating />} />
                  <Route path="/car-care-tips/how-long-does-ceramic-coating-last" element={<HowLongCeramicCoatingLasts />} />
                  <Route path="/car-care-tips/ceramic-coating-price-kerala" element={<CeramicCoatingPriceKerala />} />
                  <Route path="/car-care-tips/car-care-kerala-monsoon" element={<CarCareKeralaMonoson />} />
                  <Route path="/car-care-tips/paint-correction-guide" element={<PaintCorrectionGuide />} />

                  {/* BLOG */}
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/blog/ceramic-coating-ottapalam-car-protection" element={<CeramicCoatingOttapalamBlog />} />
                  <Route path="/blog/ceramic-coating-monsoon-protection-kerala" element={<CeramicCoatingMonsoonProtection />} />
                  <Route path="/blog/why-ceramic-coating-worth-it-kerala" element={<WhyCeramicCoatingWorthItKerala />} />
                  <Route path="/blog/best-car-detailing-ottapalam" element={<BestCarDetailingOttapalam />} />
                  <Route path="/blog/graphene-coating-kerala-guide" element={<GrapheneCoatingKeralaGuide />} />
                  <Route path="/blog/paint-correction-before-ceramic-coating" element={<PaintCorrectionBeforeCeramicCoating />} />

                  {/* MALAYALAM */}
                  <Route path="/ml" element={<IndexMalayalam />} />
                  <Route path="/ml/graphene-coating-ottapalam" element={<GrapheneCoatingOttapalamMl />} />
                  <Route path="/ml/ppf-coating-ottapalam" element={<PPFCoatingOttapalamMl />} />
                  <Route path="/ml/car-detailing-guide-kerala" element={<CarDetailingGuideKerala />} />
                  <Route path="/ml/about" element={<AboutMalayalam />} />
                  <Route path="/ml/services" element={<ServicesMalayalam />} />
                  <Route path="/ml/contact" element={<ContactMalayalam />} />

                  {/* OTHER */}
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/pricing" element={<Pricing />} />

                  <Route path="*" element={<NotFound />} />

                </Routes>

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
