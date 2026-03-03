import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Phone, Check, Clock, Shield } from 'lucide-react';

const packages = [
  { name: "Single Stage", price: "₹2,999", duration: "3-4 hours", features: ["Light scratch removal", "Machine polishing", "Gloss enhancement", "Hand wax finish"] },
  { name: "Two Stage", price: "₹5,999", duration: "6-8 hours", popular: true, features: ["Deep scratch removal", "Swirl mark correction", "Compound + polish", "Paint sealant", "Mirror-like finish"] },
  { name: "Multi Stage", price: "₹9,999", duration: "1-2 days", features: ["Everything in Two Stage", "Heavy defect removal", "Wet sanding if needed", "Ceramic coating prep", "Paint depth measurement", "3-step correction"] },
];

const PaintCorrection = () => {
  return (
    <>
      <Helmet>
        <title>Paint Correction Ottapalam | Scratch & Swirl Removal from ₹2,999 | XERA</title>
        <meta name="description" content="Professional paint correction in Ottapalam, Kerala. Remove scratches, swirl marks & oxidation. Machine polishing by experts. Starting ₹2,999. Book now!" />
        <link rel="canonical" href="https://xeradetailing.lovable.app/services/paint-correction" />
      </Helmet>

      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-xera-darkgray">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm mb-4">Expert Service</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Paint Correction</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">Remove scratches, swirl marks & oxidation. Restore your car's showroom finish.</p>
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
              <img src="/assets/paint-correction-before.jpg" alt="Car paint with scratches and swirl marks before correction" className="w-full h-64 object-cover" loading="lazy" />
              <p className="bg-black/80 text-white/70 text-center py-2 text-sm">Before - Swirl marks visible</p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/assets/paint-correction-after.jpg" alt="Flawless car paint after XERA paint correction" className="w-full h-64 object-cover" loading="lazy" />
              <p className="bg-xera-red text-white text-center py-2 text-sm">After - Mirror finish</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Paint Correction Packages</h2>
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

      {/* Process */}
      <section className="py-16 bg-xera-darkgray">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Paint Correction Process</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Paint Inspection", desc: "We measure paint thickness and identify all defects using professional lighting." },
              { step: "2", title: "Decontamination", desc: "Clay bar treatment and iron fallout removal to prepare the surface." },
              { step: "3", title: "Machine Compounding", desc: "Heavy-cut compound removes deeper scratches and defects." },
              { step: "4", title: "Machine Polishing", desc: "Fine polish restores clarity and creates a mirror-like finish." },
              { step: "5", title: "Protection", desc: "Sealant or ceramic coating locks in the corrected finish for long-lasting results." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-black/30 rounded-xl p-5 border border-white/5">
                <span className="w-10 h-10 bg-xera-red rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">{item.step}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services/ceramic-coating" className="bg-xera-darkgray border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Ceramic Coating</Link>
            <Link to="/services/interior-detailing" className="bg-xera-darkgray border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Interior Detailing</Link>
            <Link to="/services/headlight-restoration" className="bg-xera-darkgray border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Headlight Restoration</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default PaintCorrection;
