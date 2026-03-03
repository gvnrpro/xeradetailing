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
import { Check, X, ArrowRight } from 'lucide-react';

const tableRows = [
  { feature: 'Hardness', ceramic: '9H', graphene: '10H+', winner: 'graphene' },
  { feature: 'Heat Dissipation', ceramic: 'Moderate', graphene: 'Excellent (200× better)', winner: 'graphene' },
  { feature: 'Anti-Static (Dust Repulsion)', ceramic: 'None', graphene: 'Yes — active repulsion', winner: 'graphene' },
  { feature: 'Water Beading', ceramic: 'Very good', graphene: 'Superior (110°+ contact angle)', winner: 'graphene' },
  { feature: 'UV Protection', ceramic: 'Excellent', graphene: 'Excellent', winner: 'tie' },
  { feature: 'Scratch Resistance', ceramic: 'Good', graphene: 'Better', winner: 'graphene' },
  { feature: 'Typical Warranty', ceramic: '3–5 years', graphene: '5–7+ years', winner: 'graphene' },
  { feature: 'Starting Price (Kerala)', ceramic: '₹7,999', graphene: '₹9,999', winner: 'ceramic' },
  { feature: 'Best for Budget Cars', ceramic: 'Yes', graphene: 'Not essential', winner: 'ceramic' },
  { feature: 'Best for Luxury / New Cars', ceramic: 'Good', graphene: 'Ideal', winner: 'graphene' },
];

const GrapheneVsCeramicCoating = () => {
  useEffect(() => {
    setPageMetadata(
      'Graphene vs Ceramic Coating: Which is Better for Kerala Cars? | XERA',
      'Complete comparison of graphene vs ceramic coating for Kerala cars. Heat, monsoon, dust — which coating wins? Expert advice from XERA Ottapalam.',
      'https://xeradetailing.in/car-care-tips/graphene-vs-ceramic-coating',
      '/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png',
      ['graphene vs ceramic coating', 'graphene coating vs ceramic kerala', 'which coating is better kerala', 'graphene coating kerala', 'ceramic coating comparison', 'best car coating ottapalam']
    );
    trackEvent('view_blog_post', { post: 'graphene-vs-ceramic-coating' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Graphene vs Ceramic Coating: Which is Better for Kerala Cars? | XERA</title>
        <meta name="description" content="Complete comparison of graphene vs ceramic coating for Kerala cars. Heat, monsoon, dust — which coating wins? Expert advice from XERA Ottapalam." />
        <link rel="canonical" href="https://xeradetailing.in/car-care-tips/graphene-vs-ceramic-coating" />
        <meta property="og:title" content="Graphene vs Ceramic Coating — Kerala Car Owner's Guide | XERA" />
        <meta property="og:description" content="Graphene vs ceramic coating — complete comparison for Kerala's climate. Expert comparison from XERA, Ottapalam's #1 detailing studio." />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Article',
          headline: 'Graphene vs Ceramic Coating: Which is Better for Kerala Cars?',
          author: { '@type': 'Organization', name: 'XERA Auto Detailing' },
          publisher: { '@type': 'Organization', name: 'XERA Auto Detailing', logo: { '@type': 'ImageObject', url: 'https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png' } },
          datePublished: '2025-03-03', dateModified: '2025-03-03',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://xeradetailing.in/car-care-tips/graphene-vs-ceramic-coating' },
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Is graphene coating better than ceramic coating?', acceptedAnswer: { '@type': 'Answer', text: 'Graphene coating is generally superior to ceramic coating in heat dissipation, anti-static properties, water beading and longevity. However, ceramic coating is still excellent value for budget-conscious owners or older vehicles.' } },
            { '@type': 'Question', name: 'Which coating is better for Kerala climate?', acceptedAnswer: { '@type': 'Answer', text: 'Graphene coating is better suited for Kerala\'s climate. Its superior heat dissipation combats Palakkad Gap\'s intense heat, anti-static properties repel monsoon dust, and better water beading manages heavy rainfall effectively.' } },
            { '@type': 'Question', name: 'How much more expensive is graphene vs ceramic in Kerala?', acceptedAnswer: { '@type': 'Answer', text: 'At XERA Ottapalam, graphene coating starts at ₹9,999 vs ₹7,999 for ceramic — a difference of ₹2,000. Given graphene\'s longer warranty and better performance, it offers better value per year of protection.' } },
          ],
        })}</script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Car Care Tips', href: '/car-care-tips' }, { label: 'Graphene vs Ceramic', href: '' }]} />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-black to-xera-darkgray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm font-semibold mb-4">Expert Comparison</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Graphene vs Ceramic Coating: Which is Better for Kerala Cars?</h1>
              <p className="text-white/70 text-lg">A complete, honest comparison from XERA — Ottapalam's most experienced coating studio.</p>
            </div>
          </div>
        </section>

        <article className="py-12 bg-black">
          <div className="container mx-auto px-4 max-w-4xl">

            {/* Quick Answer */}
            <div className="bg-xera-red/10 border border-xera-red/30 rounded-xl p-6 mb-12">
              <h2 className="text-white font-bold text-xl mb-2">Quick Answer</h2>
              <p className="text-white/80">For Kerala's climate — <strong className="text-xera-red">graphene coating is better if your budget allows</strong>. Its heat dissipation directly addresses Palakkad's extreme heat, and its anti-static properties are valuable during Kerala's dusty dry season. Ceramic coating remains an excellent choice for owners on a tighter budget or for older vehicles.</p>
            </div>

            {/* Comparison Table */}
            <h2 className="text-3xl font-bold text-white mb-6">Full Comparison: Graphene vs Ceramic</h2>
            <div className="overflow-x-auto mb-12 rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-xera-darkgray border-b border-white/10">
                    <th className="text-left text-white/80 p-4 font-semibold">Feature</th>
                    <th className="text-center text-blue-400 p-4 font-semibold">Ceramic Coating</th>
                    <th className="text-center text-xera-red p-4 font-semibold">Graphene Coating</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-black/20' : 'bg-black/40'}`}>
                      <td className="p-4 text-white/80 font-medium">{row.feature}</td>
                      <td className={`p-4 text-center ${row.winner === 'ceramic' ? 'text-green-400 font-semibold' : 'text-white/60'}`}>{row.ceramic}</td>
                      <td className={`p-4 text-center ${row.winner === 'graphene' ? 'text-green-400 font-semibold' : row.winner === 'tie' ? 'text-white/60' : 'text-white/60'}`}>{row.graphene}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Why it matters in Kerala */}
            <h2 className="text-3xl font-bold text-white mb-6">Why Kerala's Climate Makes This Choice Important</h2>
            <div className="space-y-6 mb-12">
              {[
                { title: 'The Palakkad Gap Heat Problem', body: 'Ottapalam and surrounding areas sit in or near the Palakkad Gap — a geographical valley that funnels hot, dry air from Tamil Nadu. Summer temperatures regularly exceed 40°C. Standard ceramic coating absorbs this heat and can degrade faster. Graphene\'s thermal conductivity dissipates heat across the panel, protecting both the coating and the paint underneath.' },
                { title: 'Kerala\'s Monsoon Dust Cycle', body: 'Kerala\'s weather alternates between intense dry heat (Nov–May) and heavy monsoon rains (Jun–Oct). During dry months, dust and pollen settle heavily on cars. Ceramic coating has no defence against this. Graphene\'s electrical conductivity creates a weak static-repelling field that actively pushes dust away — meaning your car stays cleaner between washes.' },
                { title: 'Monsoon Rain Performance', body: 'Both coatings perform well in rain, but graphene\'s higher water contact angle (110°+) means water beads and rolls off faster and more completely. During Kerala\'s monsoon when you may drive in heavy rain daily, this difference is noticeable — less spray on windows, less mud splatter sticking, fewer water spots.' },
              ].map((item, i) => (
                <div key={i} className="bg-xera-darkgray rounded-xl p-6 border border-white/5">
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Who should choose which */}
            <h2 className="text-3xl font-bold text-white mb-6">Which Should You Choose?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-950/30 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-blue-400 font-bold text-lg mb-4">Choose Ceramic Coating if…</h3>
                <ul className="space-y-2">
                  {['Your car is 5+ years old', 'Budget is under ₹9,000', 'Hatchback or entry-level sedan', 'You want great protection at a lower price', 'Car is stored in a covered garage'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm"><Check className="w-4 h-4 text-blue-400 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-blue-500/20">
                  <p className="text-blue-400 font-semibold">From ₹7,999 · 3–5 Year Warranty</p>
                </div>
              </div>
              <div className="bg-xera-red/10 border border-xera-red/30 rounded-xl p-6">
                <h3 className="text-xera-red font-bold text-lg mb-4">Choose Graphene Coating if…</h3>
                <ul className="space-y-2">
                  {['New or nearly new car', 'SUV, premium or luxury vehicle', 'Car parked outdoors in the sun', 'You want maximum protection & longevity', 'Long-term investment mindset'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm"><Check className="w-4 h-4 text-xera-red flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-xera-red/20">
                  <p className="text-xera-red font-semibold">From ₹9,999 · 5–7+ Year Warranty</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-xera-darkgray rounded-xl p-8 text-center border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Not Sure Which to Choose?</h2>
              <p className="text-white/70 mb-6">Our experts at XERA Ottapalam will inspect your car and recommend the right coating for your vehicle, budget and usage. Free inspection, no pressure.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <EnhancedCTA text="Get Free Expert Advice on WhatsApp" href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27d%20like%20advice%20on%20graphene%20vs%20ceramic%20coating%20for%20my%20car" variant="primary" shimmerEffect={true} trackingLabel="graphene_vs_ceramic_cta" />
              </div>
            </div>

            {/* Related */}
            <div className="mt-10">
              <p className="text-white/60 mb-4">Related articles:</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/car-care-tips/ppf-vs-ceramic-coating" className="text-xera-red hover:underline text-sm">PPF vs Ceramic Coating →</Link>
                <Link to="/car-care-tips/how-long-does-ceramic-coating-last" className="text-xera-red hover:underline text-sm">How Long Does Ceramic Coating Last? →</Link>
                <Link to="/services/graphene-coating" className="text-xera-red hover:underline text-sm">Book Graphene Coating →</Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GrapheneVsCeramicCoating;
