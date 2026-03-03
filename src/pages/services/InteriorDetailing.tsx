import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Phone, Check, Clock, Shield, Sparkles } from 'lucide-react';

const packages = [
  { name: "Express Interior", price: "₹1,999", duration: "1-2 hours", features: ["Vacuuming & dusting", "Dashboard wipe", "Glass cleaning", "Air freshener"] },
  { name: "Deep Interior", price: "₹3,499", duration: "3-4 hours", popular: true, features: ["Full vacuum & shampoo", "Leather conditioning", "Dashboard deep clean", "Carpet extraction", "Odor removal", "Glass polish"] },
  { name: "Premium Interior", price: "₹4,999", duration: "5-6 hours", features: ["Everything in Deep", "Headliner cleaning", "Steam sanitization", "UV protection coating", "Fabric protection", "Engine bay wipe"] },
];

const InteriorDetailing = () => {
  return (
    <>
      <Helmet>
        <title>Interior Detailing Ottapalam | Car Interior Cleaning from ₹1,999 | XERA</title>
        <meta name="description" content="Professional car interior detailing in Ottapalam. Deep cleaning, leather conditioning, odor removal, steam sanitization. Starting ₹1,999. Book now!" />
        <link rel="canonical" href="https://xeradetailing.lovable.app/services/interior-detailing" />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-xera-darkgray">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm mb-4">Professional Service</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Interior Detailing</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">Complete interior deep cleaning, sanitization & restoration for your car</p>
          <a href="tel:+917559999366" className="bg-xera-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors">
            <Phone className="w-5 h-5" /> Book Now
          </a>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 bg-xera-darkgray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Before & After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden">
              <img src="/assets/interior-before.jpg" alt="Car interior before detailing - dirty seats and dashboard" className="w-full h-64 object-cover" loading="lazy" />
              <p className="bg-black/80 text-white/70 text-center py-2 text-sm">Before</p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/assets/interior-after.jpg" alt="Car interior after XERA detailing - clean restored seats" className="w-full h-64 object-cover" loading="lazy" />
              <p className="bg-xera-red text-white text-center py-2 text-sm">After</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Interior Detailing Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-xl p-6 border ${pkg.popular ? 'border-xera-red bg-xera-red/5' : 'border-white/10 bg-xera-darkgray'} relative`}>
                {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-xera-red text-white text-xs px-3 py-1 rounded-full">Most Popular</span>}
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
                <a href="tel:+917559999366" className={`block text-center py-3 rounded-lg font-semibold transition-colors ${pkg.popular ? 'bg-xera-red text-white hover:bg-red-700' : 'border border-xera-red text-xera-red hover:bg-xera-red hover:text-white'}`}>
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Interior Detailing */}
      <section className="py-16 bg-xera-darkgray">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Professional Interior Detailing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: "Health & Hygiene", desc: "Remove bacteria, allergens and dust mites from seats, carpets and AC vents." },
              { icon: Sparkles, title: "Restore Original Look", desc: "Bring back the showroom feel with deep cleaning and conditioning." },
              { icon: Clock, title: "Increase Resale Value", desc: "A well-maintained interior significantly boosts your car's resale value." },
              { icon: Check, title: "Odor Elimination", desc: "Professional ozone treatment removes stubborn smells from food, smoke and pets." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-black/30 rounded-xl p-5 border border-white/5">
                <item.icon className="w-8 h-8 text-xera-red flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services/ceramic-coating" className="bg-xera-darkgray border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Ceramic Coating</Link>
            <Link to="/services/express-wash" className="bg-xera-darkgray border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Express Wash</Link>
            <Link to="/services/engine-bay-cleaning" className="bg-xera-darkgray border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Engine Bay Cleaning</Link>
            <Link to="/services/paint-correction" className="bg-xera-darkgray border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Paint Correction</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default InteriorDetailing;
