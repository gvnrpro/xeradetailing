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

const CarCareKeralaMonoson = () => {
  useEffect(() => {
    setPageMetadata(
      'Complete Car Care Guide for Kerala Monsoon Season 2025 | XERA Auto Detailing Kerala',
      'How to protect your car during Kerala's monsoon season. Pre-monsoon checklist, during-monsoon tips, post-monsoon care. Expert advice from XERA Ottapalam.',
      'https://xeradetailing.in/car-care-tips/car-care-kerala-monsoon',
      '/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png',
      ['car care kerala monsoon','monsoon car care tips kerala','car maintenance rainy season kerala','protect car monsoon kerala','car washing monsoon kerala']
    );
    trackEvent('view_blog_post', { post: 'car-care-kerala-monsoon' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Complete Car Care Guide for Kerala Monsoon Season 2025 | XERA Auto Detailing Kerala</title>
        <meta name="description" content="How to protect your car during Kerala's monsoon season. Pre-monsoon checklist, during-monsoon tips, post-monsoon care. Expert advice from XERA Ottapalam." />
        <link rel="canonical" href="https://xeradetailing.in/car-care-tips/car-care-kerala-monsoon" />
        <meta property="og:title" content="Complete Car Care Guide for Kerala Monsoon Season 2025 | XERA" />
        <meta property="og:description" content="How to protect your car during Kerala's monsoon season. Pre-monsoon checklist, during-monsoon tips, post-monsoon care. Expert advice from XERA Ottapalam." />
        <meta property="og:url" content="https://xeradetailing.in/car-care-tips/car-care-kerala-monsoon" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Article',
          headline: 'Complete Car Care Guide for Kerala Monsoon Season 2025',
          author: { '@type': 'Organization', name: 'XERA Auto Detailing' },
          publisher: { '@type': 'Organization', name: 'XERA Auto Detailing', logo: { '@type': 'ImageObject', url: 'https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png' } },
          datePublished: '2025-03-03', dateModified: '2025-03-03',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://xeradetailing.in/car-care-tips/car-care-kerala-monsoon' },
        })}</script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Car Care Tips', href: '/car-care-tips' }, { label: 'Complete Car Care Guide for Kerala Monsoon Season 2025', href: '' }]} />

      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-black to-xera-darkgray">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm font-semibold mb-4">Car Care Guide</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Complete Car Care Guide for Kerala Monsoon Season 2025</h1>
            <p className="text-white/70 text-lg">Kerala's monsoon season (June–October) is one of the most challenging periods for car maintenance. Heavy rainfall, flooding, humidity and mud create conditions that can cause serious long-term damage if your car is not properly protected.</p>
          </div>
        </section>

        <article className="py-12 bg-black">
          <div className="container mx-auto px-4 max-w-3xl">

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Pre-Monsoon Preparation (May–June)</h2>
              <p className="text-white/70 leading-relaxed">The best time to protect your car is before the monsoon hits. Start with a thorough ceramic or graphene coating if not done recently — this creates a waterproof barrier that prevents acid rain from etching your paint. Check and replace windscreen wipers — Kerala's heavy rainfall makes good wipers essential for safety. Clean and drain all rubber seals around doors and windows to prevent water ingress. Apply underbody coating or anti-rust treatment to protect against standing water and mud exposure. Check all drainage channels in the doors and bonnet — blocked drains allow water to pool internally, causing rust from the inside.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">During Monsoon: Daily Care Tips</h2>
              <p className="text-white/70 leading-relaxed">Wash your car after heavy rain, not just before it. Rainwater carries atmospheric pollutants that become mildly acidic as they dry on your paint. Never let dried rainwater remain on your car for more than 24 hours in Kerala's heat. Park under cover whenever possible — UV rays during monsoon breaks between showers cause accelerated damage. Check and clear leaves, debris and mud from under the wipers and bonnet edges — these trap moisture and accelerate rust at panel junctions. If your car is flooded — even partially — have the brakes, wheel bearings and electronics inspected immediately.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Post-Monsoon Deep Clean (October–November)</h2>
              <p className="text-white/70 leading-relaxed">After monsoon season, your car needs a thorough decontamination. Months of rain, mud and organic matter build up in panel gaps, underbody channels and door seals. XERA's post-monsoon detailing package covers: full exterior decontamination wash, clay bar treatment to remove embedded contaminants, underbody pressure wash and re-treatment, interior deep clean to address mold and musty odors from humidity, and a maintenance coat of ceramic to refresh hydrophobics ahead of the dry season.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Signs Your Car Needs Attention After Monsoon</h2>
              <p className="text-white/70 leading-relaxed">Warning signs to watch for: musty smell inside the car (moisture-related mold in carpets or AC), paint surface feels rough or gritty even after washing (contamination embedded in paint), water spots that do not wash off (mineral deposits from dried rainwater), visible rust spots on door edges or underbody, wipers leaving smear lines. XERA offers a free monsoon damage inspection — bring your car in after the rains and we will tell you exactly what needs attention.</p>
            </section>

            <div className="bg-xera-darkgray rounded-xl p-8 text-center border border-white/5 mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Protect Your Car?</h2>
              <p className="text-white/70 mb-6">Book your service at XERA Ottapalam — free inspection, transparent pricing, expert advice.</p>
              <EnhancedCTA text="Book Post-Monsoon Detailing Package" href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27d%20like%20a%20post-monsoon%20detailing%20for%20my%20car" variant="primary" shimmerEffect={true} trackingLabel="car-care-kerala-monsoon_bottom_cta" />
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

export default CarCareKeralaMonoson;
