import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Phone, Check, Clock, Shield, CloudRain, Droplets } from 'lucide-react';

const UnderbodyCoating = () => {
  return (
    <>
      <Helmet>
        <title>Underbody Coating Ottapalam | Rust Protection Kerala Monsoon ₹2,999 | XERA</title>
        <meta name="description" content="Professional underbody anti-rust coating in Ottapalam. Essential for Kerala monsoon. Protect from rust, corrosion & stone chips. From ₹2,999. Book now!" />
        <link rel="canonical" href="https://xeradetailing.lovable.app/services/underbody-coating" />
      </Helmet>

      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-xera-darkgray">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm mb-4">Monsoon Essential</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Underbody Coating</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">Anti-rust protection critical for Kerala's humid climate & heavy monsoons</p>
          <a href="tel:+917559999366" className="bg-xera-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors">
            <Phone className="w-5 h-5" /> Book Now - From ₹2,999
          </a>
        </div>
      </section>

      {/* Why Kerala Needs This */}
      <section className="py-16 bg-xera-darkgray">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Why Kerala Cars Need Underbody Coating</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">Kerala receives 3,000mm+ rainfall annually. Waterlogged roads, salt-laden coastal air, and high humidity accelerate underbody rust.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: CloudRain, title: "Heavy Monsoons", desc: "6 months of rain. Water seeps into every crevice of your car's underbody." },
              { icon: Droplets, title: "High Humidity", desc: "80-90% humidity year-round accelerates rust and corrosion on exposed metal." },
              { icon: Shield, title: "Road Conditions", desc: "Potholes, gravel roads and water logging cause stone chips and expose bare metal." },
            ].map((item, i) => (
              <div key={i} className="bg-black/30 rounded-xl p-6 border border-white/5 text-center">
                <item.icon className="w-10 h-10 text-xera-red mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Underbody Coating Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 border border-white/10 bg-xera-darkgray">
              <h3 className="text-xl font-bold text-white mb-2">Standard Coating</h3>
              <p className="text-3xl font-bold text-xera-red mb-1">₹2,999</p>
              <p className="text-white/50 text-sm flex items-center gap-1 mb-6"><Clock className="w-4 h-4" /> 3-4 hours</p>
              <ul className="space-y-3 mb-6">
                {["Pressure wash & degreasing", "Rubberized undercoating", "Wheel arch protection", "1-year warranty"].map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-white/80 text-sm"><Check className="w-4 h-4 text-green-400 flex-shrink-0" /> {f}</li>
                ))}
              </ul>
              <a href="tel:+917559999366" className="block text-center py-3 rounded-lg border border-xera-red text-xera-red hover:bg-xera-red hover:text-white font-semibold transition-colors">Book Now</a>
            </div>
            <div className="rounded-xl p-6 border border-xera-red bg-xera-red/5 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-xera-red text-white text-xs px-3 py-1 rounded-full">Recommended</span>
              <h3 className="text-xl font-bold text-white mb-2">Premium Anti-Rust</h3>
              <p className="text-3xl font-bold text-xera-red mb-1">₹5,999</p>
              <p className="text-white/50 text-sm flex items-center gap-1 mb-6"><Clock className="w-4 h-4" /> 5-6 hours</p>
              <ul className="space-y-3 mb-6">
                {["Everything in Standard", "Wax-based rust inhibitor", "Cavity wax injection", "Fuel line protection", "Exhaust heat shield", "3-year warranty"].map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-white/80 text-sm"><Check className="w-4 h-4 text-green-400 flex-shrink-0" /> {f}</li>
                ))}
              </ul>
              <a href="tel:+917559999366" className="block text-center py-3 rounded-lg bg-xera-red text-white hover:bg-red-700 font-semibold transition-colors">Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="py-16 bg-gradient-to-r from-xera-red/20 to-transparent">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">⛈️ Best Time: Before Monsoon!</h2>
          <p className="text-white/70 text-lg mb-8">
            Get your underbody coated in March-May before the Kerala monsoon starts in June. 
            Prevention is 10x cheaper than rust repair.
          </p>
          <a href="tel:+917559999366" className="bg-xera-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-colors">
            <Phone className="w-5 h-5" /> Book Pre-Monsoon Coating
          </a>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services/ceramic-coating" className="bg-xera-darkgray border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Ceramic Coating</Link>
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

export default UnderbodyCoating;
