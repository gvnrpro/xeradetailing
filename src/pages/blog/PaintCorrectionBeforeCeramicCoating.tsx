import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import EnhancedCTA from '@/components/enhanced/EnhancedCTA';
import { setPageMetadata } from '@/utils/seoHelper';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';
import { Calendar, Tag } from 'lucide-react';

const PaintCorrectionBeforeCeramicCoating = () => {
  useEffect(() => {
    setPageMetadata(
      'Why Paint Correction Must Come Before Ceramic Coating (And What Happens If It Doesn't) | XERA Auto Detailing Kerala',
      'Why every car needs paint correction before ceramic coating. What happens if you skip it? The mistake that costs thousands to fix. Guide from XERA Ottapalam.',
      'https://xeradetailing.in/blog/paint-correction-before-ceramic-coating',
      '/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png',
      ['paint correction before ceramic coating','do you need paint correction before ceramic coating','ceramic coating without paint correction mistake','paint prep ceramic coating kerala']
    );
    trackEvent('view_blog_post', { post: 'paint-correction-before-ceramic-coating' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Why Paint Correction Must Come Before Ceramic Coating (And What Happens If It Doesn't) | XERA Auto Detailing Kerala</title>
        <meta name="description" content="Why every car needs paint correction before ceramic coating. What happens if you skip it? The mistake that costs thousands to fix. Guide from XERA Ottapalam." />
        <link rel="canonical" href="https://xeradetailing.in/blog/paint-correction-before-ceramic-coating" />
        <meta property="og:title" content="Why Paint Correction Must Come Before Ceramic Coating (And What Happens If It Doesn't)" />
        <meta property="og:description" content="Why every car needs paint correction before ceramic coating. What happens if you skip it? The mistake that costs thousands to fix. Guide from XERA Ottapalam." />
        <meta property="og:url" content="https://xeradetailing.in/blog/paint-correction-before-ceramic-coating" />
        <meta property="og:image" content="https://xeradetailing.in/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org', '@type': 'BlogPosting',
          headline: 'Why Paint Correction Must Come Before Ceramic Coating (And What Happens If It Doesn't)',
          image: 'https://xeradetailing.in/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png',
          author: { '@type': 'Organization', name: 'XERA Auto Detailing' },
          publisher: { '@type': 'Organization', name: 'XERA Auto Detailing', logo: { '@type': 'ImageObject', url: 'https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png' } },
          datePublished: '2025-03-03', dateModified: '2025-03-03',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://xeradetailing.in/blog/paint-correction-before-ceramic-coating' },
        })}</script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Why Paint Correction Must Come Before Ceramic Coating (And What Happens If It Doesn't)', href: '' }]} />

      <main className="flex-grow">
        <section className="py-16 bg-xera-darkgray">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link to="/blog" className="text-xera-red hover:underline text-sm mb-6 inline-block">← Back to Blog</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Paint Correction Must Come Before Ceramic Coating (And What Happens If It Doesn't)</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> March 2025</span>
              <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> Car Care · Kerala</span>
            </div>
          </div>
        </section>

        <article className="py-12 bg-black">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-white/80 text-lg leading-relaxed mb-10">The most expensive mistake in car detailing is applying ceramic coating over imperfect paint without correction first. We see cars at XERA that have been coated elsewhere — beautiful looking but with swirl marks, scratches and haze locked permanently under the coating. Here is exactly why paint correction first is not optional.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">What Ceramic Coating Actually Does to Your Paint Surface</h2>
              <p className="text-white/70 leading-relaxed">Ceramic coating creates a hard, glass-like film that bonds permanently to your paint surface. It does not fill scratches or cover defects — it amplifies them. Ceramic is optically transparent and extremely glossy. This transparency and gloss means any imperfection in the surface below becomes more visible, not less. A swirl mark that was barely noticeable on dull paint becomes clearly visible under a high-gloss ceramic finish. Once ceramic is applied over imperfect paint, the only solution is to chemically strip the entire coating, perform the paint correction that should have happened first, and reapply from scratch — a costly process that doubles the total investment.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">What Paint Correction Actually Removes</h2>
              <p className="text-white/70 leading-relaxed">Paint correction physically removes a microscopic layer of clear coat to level the surface and eliminate defects. Swirl marks — circular scratches caused by improper washing — are the most common defect on Kerala cars because of widespread use of dirty cloths and brush-type car washes. Light scratches from car park doors, narrow roads and vegetation contact are extremely common in Kerala's urban and semi-urban areas. Oxidation appears as a chalky, hazy appearance on cars that have been exposed to Palakkad's intense sun without UV protection for extended periods. Water spots and mineral deposits from Kerala's hard water and acid rain leave permanent white marks on unprotected paint.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">How to Know If Your Car Needs Paint Correction</h2>
              <p className="text-white/70 leading-relaxed">The simplest test: shine a torch or flashlight across your car's bonnet and doors in a darkened garage or at night. If you see a cobweb-like pattern of circular marks, those are swirl marks requiring at minimum single-stage correction. If you see deep scratches that reflect light differently at different angles, two-stage correction is needed. XERA offers a free paint inspection before any coating job. We use a calibrated panel light to show you exactly what is in your paint and quote you precisely for what is needed — with no obligation to book. Our recommendation: never let any studio apply ceramic coating without first showing you the paint condition under professional lighting.</p>
            </section>

            <div className="bg-xera-darkgray rounded-xl p-8 text-center mt-12 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Get Expert Car Care in Ottapalam</h2>
              <p className="text-white/70 mb-6">XERA Auto Detailing — Kerala's most trusted ceramic coating and auto detailing studio.</p>
              <EnhancedCTA text="Book on WhatsApp" href="https://wa.me/917559999366" variant="primary" shimmerEffect={true} trackingLabel="paint-correction-before-ceramic-coating_cta" />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/car-care-tips" className="text-xera-red text-sm hover:underline">More Car Care Tips →</Link>
              <Link to="/services/ceramic-coating" className="text-xera-red text-sm hover:underline">Ceramic Coating →</Link>
              <Link to="/blog" className="text-xera-red text-sm hover:underline">All Blog Posts →</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PaintCorrectionBeforeCeramicCoating;
