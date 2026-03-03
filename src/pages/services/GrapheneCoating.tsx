import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import EnhancedCTA from '@/components/enhanced/EnhancedCTA';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import { Phone, Check, Clock, Shield, Zap, Droplets, Sun, Star } from 'lucide-react';

const packages = [
  {
    name: 'Graphene Standard',
    price: '₹9,999',
    duration: '1 day',
    features: [
      'Single-layer graphene coating',
      'Paint decontamination',
      'Machine polish prep',
      'Hydrophobic protection',
      '3+ year warranty',
      'Maintenance guide included',
    ],
  },
  {
    name: 'Graphene Pro',
    price: '₹14,999',
    duration: '1–2 days',
    popular: true,
    features: [
      'Dual-layer graphene coating',
      'Full paint correction (single stage)',
      'Clay bar decontamination',
      'Anti-static properties',
      'Heat dissipation technology',
      '5+ year warranty',
      'Free first maintenance wash',
    ],
  },
  {
    name: 'Graphene Elite',
    price: '₹19,999',
    duration: '2 days',
    features: [
      'Triple-layer graphene system',
      'Multi-stage paint correction',
      'Interior graphene treatment',
      'Wheel & glass coating',
      'Anti-static + heat dissipation',
      '7+ year warranty',
      'Annual maintenance included',
    ],
  },
];

const GrapheneCoating = () => {
  return (
    <>
      <Helmet>
        <title>Graphene Coating Ottapalam | Superior Car Protection | XERA Detailing Kerala</title>
        <meta
          name="description"
          content="Professional graphene coating in Ottapalam, Kerala. Next-generation car protection — anti-static, heat-dissipating, 7+ year warranty. Better than ceramic coating. Book XERA today!"
        />
        <link rel="canonical" href="https://xeradetailing.in/services/graphene-coating" />
        <meta property="og:title" content="Graphene Coating Ottapalam | XERA Auto Detailing Kerala" />
        <meta property="og:description" content="Superior graphene coating with anti-static, heat dissipation and 7+ year protection. Kerala's most advanced car coating at XERA Ottapalam." />
        <meta property="og:url" content="https://xeradetailing.in/services/graphene-coating" />
        <meta property="og:image" content="https://xeradetailing.in/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Graphene Coating',
          name: 'Professional Graphene Coating in Ottapalam',
          description: 'Next-generation graphene-based car coating with anti-static properties, heat dissipation and 7+ year protection warranty.',
          provider: {
            '@type': 'LocalBusiness',
            name: 'XERA Car Wash & Auto Detailing',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Opp. NSS College, Palappuram',
              addressLocality: 'Ottapalam',
              addressRegion: 'Kerala',
              postalCode: '679103',
              addressCountry: 'IN',
            },
            telephone: '+917559999366',
          },
          areaServed: ['Ottapalam', 'Palakkad', 'Shoranur', 'Pattambi', 'Perinthalmanna', 'Thrissur'],
          offers: { '@type': 'Offer', price: '9999', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Is graphene coating better than ceramic coating?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, graphene coating is the next evolution after ceramic coating. It offers superior heat dissipation (keeping your car cooler in Kerala\'s sun), anti-static properties that repel dust, better water contact angle, and typically lasts longer.' } },
            { '@type': 'Question', name: 'How long does graphene coating last in Kerala?', acceptedAnswer: { '@type': 'Answer', text: 'Our graphene coating lasts 3–7+ years depending on the package chosen. Kerala\'s monsoons and heat are actually where graphene outperforms ceramic — the heat dissipation prevents the coating from degrading faster in high temperatures.' } },
            { '@type': 'Question', name: 'What is the price of graphene coating in Ottapalam?', acceptedAnswer: { '@type': 'Answer', text: 'Graphene coating at XERA Ottapalam starts from ₹9,999 for the Standard package and goes up to ₹19,999 for our Elite multi-layer system with 7+ year warranty.' } },
          ],
        })}</script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Graphene Coating', href: '' }]} />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-xera-darkgray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm mb-4 font-semibold">
              Next-Gen Protection
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Graphene Coating in Ottapalam
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              The latest evolution in car paint protection. Graphene coating outperforms ceramic
              coating with superior heat dissipation, anti-static dust repulsion, and up to 7+
              years of warranty — ideal for Kerala's climate.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <EnhancedCTA
                text="Book Graphene Coating"
                href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27m%20interested%20in%20Graphene%20Coating%20for%20my%20car"
                variant="primary"
                shimmerEffect={true}
                className="px-8 py-4 text-lg"
                trackingLabel="graphene_hero_cta"
              />
              <a href="tel:+917559999366" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/5 transition-colors">
                <Phone className="w-5 h-5" /> Call for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Graphene vs Ceramic comparison */}
      <section className="py-16 bg-xera-darkgray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Why Graphene Beats Ceramic Coating
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Graphene's unique molecular structure gives it properties that ceramic simply cannot match — especially important in Kerala's intense heat and monsoon conditions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Sun, title: 'Heat Dissipation', desc: 'Graphene conducts and dissipates heat 200x better than ceramic, keeping your paint cooler in Palakkad\'s intense summer heat. This prevents coating degradation and paint burn.' },
              { icon: Zap, title: 'Anti-Static Dust Repulsion', desc: 'The unique electrical conductivity of graphene creates a static-repelling surface. Your car actively repels dust and pollen — a major advantage in Kerala\'s dusty dry season.' },
              { icon: Droplets, title: 'Superior Hydrophobics', desc: 'Water contact angle exceeds 110° — higher than ceramic. Water and mud roll off faster and more completely, keeping your car cleaner for longer during monsoon season.' },
              { icon: Shield, title: 'Harder Surface', desc: 'Graphene creates a crystalline structure harder than 9H ceramic, providing greater resistance to light scratches, swirl marks, and micro-abrasions from Kerala\'s dusty roads.' },
              { icon: Star, title: 'Longer Warranty', desc: 'Our graphene packages carry 3–7+ year warranties, outlasting most ceramic options. The superior durability makes it a better long-term investment for your car.' },
              { icon: Clock, title: 'Faster Cure Time', desc: 'Graphene fully cures faster than ceramic, meaning your car is back on the road sooner. Less downtime, same exceptional results.' },
            ].map((item, i) => (
              <div key={i} className="bg-black/30 rounded-xl p-6 border border-white/5 hover:border-xera-red/30 transition-colors">
                <item.icon className="w-8 h-8 text-xera-red mb-3" />
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Graphene Coating Packages</h2>
          <p className="text-white/60 text-center mb-12">Transparent pricing, no hidden costs. All packages include warranty.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-xl p-6 border relative ${pkg.popular ? 'border-xera-red bg-xera-red/5' : 'border-white/10 bg-xera-darkgray'}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-xera-red text-white text-xs px-4 py-1 rounded-full font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-xera-red mb-1">{pkg.price}</p>
                <p className="text-white/50 text-sm flex items-center gap-1 mb-6">
                  <Clock className="w-4 h-4" /> {pkg.duration}
                </p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/80 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27d%20like%20to%20book%20Graphene%20Coating"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${pkg.popular ? 'bg-xera-red text-white hover:bg-red-700' : 'border border-xera-red text-xera-red hover:bg-xera-red hover:text-white'}`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-xera-darkgray">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Our Graphene Coating Process</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Paint Thickness Measurement', desc: 'We measure paint depth at 20+ points to understand your car\'s condition before touching it.' },
              { step: '2', title: 'Full Decontamination Wash', desc: 'pH-neutral foam wash, iron fallout removal, and clay bar treatment to eliminate all surface contamination.' },
              { step: '3', title: 'Paint Correction (Package-dependent)', desc: 'Machine polishing removes swirl marks and light scratches so the graphene bonds to a perfect surface.' },
              { step: '4', title: 'Panel Wipe & IPA Prep', desc: 'Isopropyl alcohol wipe-down removes all polish residue and oils — critical for proper graphene adhesion.' },
              { step: '5', title: 'Graphene Coating Application', desc: 'Graphene panels are applied in a controlled environment, section by section, with precise levelling technique.' },
              { step: '6', title: 'IR Curing & Inspection', desc: 'Infrared curing accelerates the bonding process. Final inspection under a panel light ensures zero high spots.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-black/30 rounded-xl p-5 border border-white/5">
                <span className="w-10 h-10 bg-xera-red rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Graphene Coating — FAQs</h2>
          <div className="space-y-4">
            {[
              { q: 'Is graphene coating worth the extra cost over ceramic?', a: 'Absolutely, especially in Kerala\'s climate. The heat dissipation alone is a game-changer in Palakkad\'s summers. The longer warranty also means you\'re paying less per year of protection.' },
              { q: 'Can I get graphene coating on a new car?', a: 'New cars are ideal candidates. We recommend graphene coating within the first month of ownership before any scratches or contamination occur.' },
              { q: 'How do I maintain graphene coating?', a: 'Use a pH-neutral car shampoo for regular washing. Avoid automatic car washes with brushes. A maintenance spray every 6 months extends the life significantly. We provide a full aftercare kit.' },
              { q: 'Do you offer graphene coating for bikes?', a: 'Yes! Graphene coating for motorcycles and scooters is available starting at ₹4,999. Kerala\'s bike market is large and the protection is especially valuable for bikes parked outdoors.' },
            ].map((item, i) => (
              <div key={i} className="bg-xera-darkgray rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-xera-darkgray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services/ceramic-coating" className="bg-black border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Ceramic Coating</Link>
            <Link to="/services/paint-protection-film" className="bg-black border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Paint Protection Film</Link>
            <Link to="/services/paint-correction" className="bg-black border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Paint Correction</Link>
            <Link to="/car-care-tips/graphene-vs-ceramic-coating" className="bg-black border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Graphene vs Ceramic Guide</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default GrapheneCoating;
