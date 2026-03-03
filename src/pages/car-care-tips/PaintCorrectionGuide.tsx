import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import EnhancedCTA from '@/components/enhanced/EnhancedCTA';
import { setPageMetadata } from '@/utils/seoHelper';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const PaintCorrectionGuide = () => {
  useEffect(() => {
    setPageMetadata(
      'Paint Correction Guide: Remove Scratches & Swirl Marks from Your Car in Kerala | XERA Auto Detailing Kerala',
      'What is paint correction? How to remove scratches, swirl marks and oxidation from cars in Kerala. Complete guide from XERA Ottapalam's professional polishing team.',
      'https://xeradetailing.in/car-care-tips/paint-correction-guide',
      '/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png',
      ['paint correction kerala','scratch removal car ottapalam','swirl mark removal car','paint correction guide','machine polishing car kerala','paint correction cost kerala']
    );
    trackEvent('view_blog_post', { post: 'paint-correction-guide' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Paint Correction Guide: Remove Scratches & Swirl Marks from Your Car in Kerala | XERA Auto Detailing Kerala</title>
        <meta name="description" content="What is paint correction? How to remove scratches, swirl marks and oxidation from cars in Kerala. Complete guide from XERA Ottapalam's professional polishing team." />
        <link rel="canonical" href="https://xeradetailing.in/car-care-tips/paint-correction-guide" />
        <meta property="og:title" content="Paint Correction Guide: Remove Scratches & Swirl Marks from Your Car in Kerala | XERA" />
        <meta property="og:description" content="What is paint correction? How to remove scratches, swirl marks and oxidation from cars in Kerala. Complete guide from XERA Ottapalam's professional polishing team." />
        <meta property="og:url" content="https://xeradetailing.in/car-care-tips/paint-correction-guide" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Article',
          headline: 'Paint Correction Guide: Remove Scratches & Swirl Marks from Your Car in Kerala',
          author: { '@type': 'Organization', name: 'XERA Auto Detailing' },
          publisher: { '@type': 'Organization', name: 'XERA Auto Detailing', logo: { '@type': 'ImageObject', url: 'https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png' } },
          datePublished: '2025-03-03', dateModified: '2025-03-03',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://xeradetailing.in/car-care-tips/paint-correction-guide' },
        })}</script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Car Care Tips', href: '/car-care-tips' }, { label: 'Paint Correction Guide: Remove Scratches & Swirl Marks from Your Car in Kerala', href: '' }]} />

      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-black to-xera-darkgray">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm font-semibold mb-4">Car Care Guide</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Paint Correction Guide: Remove Scratches & Swirl Marks from Your Car in Kerala</h1>
            <p className="text-white/70 text-lg">Paint correction is the professional process of removing surface defects from your car's paint — scratches, swirl marks, oxidation, water spots and buffer trails. If your car's paint looks dull, scratched or has a cobweb pattern in bright sunlight, it needs paint correction before any coating is applied.</p>
          </div>
        </section>

        <article className="py-12 bg-black">
          <div className="container mx-auto px-4 max-w-3xl">

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">What Causes Paint Defects in Kerala?</h2>
              <p className="text-white/70 leading-relaxed">Swirl marks are the most common defect and are almost entirely caused by improper washing — using dirty cloths, single-bucket washing technique, or high-pressure brushes at automatic car washes. In Kerala, dust-laden dry-season air gets trapped between wash mitts and paint, acting like sandpaper. Scratches come from narrow Kerala roads, garage doors, parking lots and keying. Oxidation appears as a chalky, dull surface and results from prolonged UV exposure without protection — common on cars parked outdoors in Palakkad's intense summer heat.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Single Stage vs Multi Stage Paint Correction</h2>
              <p className="text-white/70 leading-relaxed">Single stage correction (₹2,999 at XERA) uses one cut polish to remove light-to-medium defects. It removes 60–70% of swirl marks and light scratches. Suitable for cars in reasonably good condition. Two stage correction (₹5,999) uses a heavy compound followed by a finishing polish. Removes 90%+ of defects including moderate scratches. This is XERA's most popular option. Multi stage correction (₹9,999) is for severe paint defects, includes wet sanding, and is typically reserved for pre-ceramic prep on luxury vehicles.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Why Paint Correction Before Ceramic Coating is Essential</h2>
              <p className="text-white/70 leading-relaxed">Ceramic coating locks in whatever surface it is applied to. If you coat over swirl marks and scratches, they become permanent and cannot be corrected without removing the coating. This is the most common and costly mistake car owners make — rushing to coat without correcting first. At XERA, we never apply ceramic coating over uncorrected paint without explicitly discussing it with you first. Our standard ceramic packages include at minimum a single-stage polish.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Book Paint Correction in Ottapalam</h2>
              <p className="text-white/70 leading-relaxed">https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27d%20like%20paint%20correction%20for%20my%20car</p>
            </section>

            <div className="bg-xera-darkgray rounded-xl p-8 text-center border border-white/5 mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Protect Your Car?</h2>
              <p className="text-white/70 mb-6">Book your service at XERA Ottapalam — free inspection, transparent pricing, expert advice.</p>
              <EnhancedCTA text="" href="" variant="primary" shimmerEffect={true} trackingLabel="paint-correction-guide_bottom_cta" />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/services/ceramic-coating" className="text-xera-red text-sm hover:underline">Ceramic Coating →</Link>
              <Link to="/services/graphene-coating" className="text-xera-red text-sm hover:underline">Graphene Coating →</Link>
              <Link to="/car-care-tips" className="text-xera-red text-sm hover:underline">More Car Care Tips →</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PaintCorrectionGuide;
