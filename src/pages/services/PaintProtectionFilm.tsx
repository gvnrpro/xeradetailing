import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import EnhancedCTA from '@/components/enhanced/EnhancedCTA';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import { Phone, Check, Clock, Shield, Eye, RefreshCw } from 'lucide-react';

const packages = [
  {
    name: 'PPF Partial',
    price: '₹15,999',
    duration: '1 day',
    features: [
      'Front hood (partial)',
      'Door edge guards',
      'Side mirror covers',
      'Bumper strip protection',
      'Self-healing film',
      '5-year warranty',
    ],
  },
  {
    name: 'PPF Full Front',
    price: '₹29,999',
    duration: '1–2 days',
    popular: true,
    features: [
      'Full hood protection',
      'Full front bumper',
      'Both front fenders',
      'Headlight protection',
      'Side mirrors',
      'Self-healing technology',
      '7-year warranty',
    ],
  },
  {
    name: 'PPF Full Body',
    price: 'From ₹59,999',
    duration: '3–4 days',
    features: [
      'Complete car coverage',
      'All panels front to rear',
      'Roof protection',
      'Door sills included',
      'Invisible finish option',
      'Self-healing + gloss boost',
      '10-year warranty',
    ],
  },
];

const PaintProtectionFilm = () => {
  return (
    <>
      <Helmet>
        <title>Paint Protection Film (PPF) Ottapalam Kerala | XERA Auto Detailing</title>
        <meta
          name="description"
          content="Professional PPF (Paint Protection Film) installation in Ottapalam, Kerala. Self-healing invisible film protects against stone chips, scratches & UV. 5–10 year warranty. Book XERA today!"
        />
        <link rel="canonical" href="https://xeradetailing.in/services/paint-protection-film" />
        <meta property="og:title" content="PPF Paint Protection Film Ottapalam | XERA Detailing Kerala" />
        <meta property="og:description" content="Invisible self-healing Paint Protection Film in Ottapalam. Protect against stone chips, scratches and Kerala road damage. 10-year warranty available." />
        <meta property="og:url" content="https://xeradetailing.in/services/paint-protection-film" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Paint Protection Film',
          name: 'PPF Paint Protection Film Installation in Ottapalam',
          description: 'Professional self-healing Paint Protection Film installation. Protects car paint from stone chips, scratches, road debris and UV damage with 5–10 year warranty.',
          provider: {
            '@type': 'LocalBusiness',
            name: 'XERA Car Wash & Auto Detailing',
            address: { '@type': 'PostalAddress', streetAddress: 'Opp. NSS College, Palappuram', addressLocality: 'Ottapalam', addressRegion: 'Kerala', postalCode: '679103', addressCountry: 'IN' },
            telephone: '+917559999366',
          },
          areaServed: ['Ottapalam', 'Palakkad', 'Shoranur', 'Pattambi', 'Perinthalmanna'],
          offers: { '@type': 'Offer', price: '15999', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'What is PPF and do I need it in Kerala?', acceptedAnswer: { '@type': 'Answer', text: 'PPF (Paint Protection Film) is a thick, self-healing polyurethane film applied to your car\'s paint. In Kerala, it\'s especially valuable because of stone chips on NH highways, road debris in monsoon season, and branches from Kerala\'s dense vegetation that can scratch lower panels.' } },
            { '@type': 'Question', name: 'Can PPF be applied over ceramic coating?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — the best setup is PPF first (high-impact areas), then ceramic or graphene coating over the PPF and remaining panels. This gives maximum protection.' } },
            { '@type': 'Question', name: 'Is PPF visible on the car?', acceptedAnswer: { '@type': 'Answer', text: 'High-quality PPF is virtually invisible. We use optically clear film that maintains your car\'s original colour and finish. There is also a gloss-boost option that enhances shine.' } },
          ],
        })}</script>
      </Helmet>

      <Navbar />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Paint Protection Film', href: '' }]} />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-xera-darkgray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm mb-4 font-semibold">Ultimate Physical Protection</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Paint Protection Film (PPF) in Ottapalam</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              The strongest physical barrier for your car's paint. Self-healing PPF absorbs stone chips, scratches, and road debris before they ever reach your paintwork — invisible protection with up to 10 years warranty.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <EnhancedCTA
                text="Get PPF Quote on WhatsApp"
                href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27m%20interested%20in%20PPF%20for%20my%20car"
                variant="primary"
                shimmerEffect={true}
                className="px-8 py-4 text-lg"
                trackingLabel="ppf_hero_cta"
              />
              <a href="tel:+917559999366" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/5 transition-colors">
                <Phone className="w-5 h-5" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why PPF */}
      <section className="py-16 bg-xera-darkgray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why PPF is Essential in Kerala</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: 'Stone Chip Protection', desc: 'Kerala\'s highways and narrow roads throw up constant stone chips. PPF physically absorbs the impact so your paint doesn\'t.' },
              { icon: RefreshCw, title: 'Self-Healing Technology', desc: 'Light scratches disappear with heat — from the sun or warm water. Your car looks perfect even after minor contact.' },
              { icon: Eye, title: 'Invisible Finish', desc: 'Optically clear film maintains your original paint appearance. Nobody knows it\'s there except you.' },
              { icon: Clock, title: '10-Year Warranty', desc: 'The longest protection warranty available. PPF outlasts any coating solution, making it the best long-term investment.' },
              { icon: Check, title: 'Preserves Resale Value', desc: 'A car with PPF-protected paint in showroom condition commands a significant premium at resale — especially with Kerala\'s active used-car market.' },
              { icon: Shield, title: 'UV & Stain Resistance', desc: 'PPF blocks UV rays and resists chemical stains from bird droppings, tree sap, and fuel spills — all common in Kerala.' },
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
          <h2 className="text-3xl font-bold text-white text-center mb-4">PPF Packages & Pricing</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">All packages use premium self-healing polyurethane film. Prices vary by vehicle size — contact us for an exact quote for your car.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-xl p-6 border relative ${pkg.popular ? 'border-xera-red bg-xera-red/5' : 'border-white/10 bg-xera-darkgray'}`}>
                {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-xera-red text-white text-xs px-4 py-1 rounded-full font-semibold">Most Popular</span>}
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-xera-red mb-1">{pkg.price}</p>
                <p className="text-white/50 text-sm flex items-center gap-1 mb-6"><Clock className="w-4 h-4" /> {pkg.duration}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/80 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%27d%20like%20a%20quote%20for%20PPF" className={`block text-center py-3 rounded-lg font-semibold transition-colors ${pkg.popular ? 'bg-xera-red text-white hover:bg-red-700' : 'border border-xera-red text-xera-red hover:bg-xera-red hover:text-white'}`}>
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-xera-darkgray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Combine PPF With</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services/ceramic-coating" className="bg-black border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Ceramic Coating</Link>
            <Link to="/services/graphene-coating" className="bg-black border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Graphene Coating</Link>
            <Link to="/services/paint-correction" className="bg-black border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Paint Correction</Link>
            <Link to="/car-care-tips/ppf-vs-ceramic-coating" className="bg-black border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">PPF vs Ceramic Guide</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default PaintProtectionFilm;
