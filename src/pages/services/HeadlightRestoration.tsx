import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Phone, Check, Clock, Sun, Eye } from 'lucide-react';

const HeadlightRestoration = () => {
  return (
    <>
      <Helmet>
        <title>Headlight Restoration Ottapalam | UV Damage Repair ₹999 | XERA</title>
        <meta name="description" content="Professional headlight restoration in Ottapalam. Fix yellowed, foggy, hazy headlights. UV damage repair & clarity restoration. From ₹999. Quick 1-2 hour service." />
        <link rel="canonical" href="https://xeradetailing.lovable.app/services/headlight-restoration" />
      </Helmet>

      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-xera-darkgray">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm mb-4">Quick Service</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Headlight Restoration</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">Restore clarity to foggy, yellowed headlights. Improve visibility & safety.</p>
          <a href="tel:+917559999366" className="bg-xera-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors">
            <Phone className="w-5 h-5" /> Book Now - From ₹999
          </a>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 bg-xera-darkgray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Before & After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden">
              <img src="/assets/headlight-before.jpg" alt="Foggy yellowed headlight before restoration" className="w-full h-64 object-cover" loading="lazy" />
              <p className="bg-black/80 text-white/70 text-center py-2 text-sm">Before - Foggy & yellowed</p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="/assets/headlight-after.jpg" alt="Crystal clear headlight after XERA restoration" className="w-full h-64 object-cover" loading="lazy" />
              <p className="bg-xera-red text-white text-center py-2 text-sm">After - Crystal clear</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 border border-white/10 bg-xera-darkgray">
              <h3 className="text-xl font-bold text-white mb-2">Standard Restoration</h3>
              <p className="text-3xl font-bold text-xera-red mb-1">₹999</p>
              <p className="text-white/50 text-sm flex items-center gap-1 mb-6"><Clock className="w-4 h-4" /> 1 hour</p>
              <ul className="space-y-3 mb-6">
                {["Wet sanding (multi-grit)", "Machine polishing", "UV sealant application", "Both headlights included"].map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-white/80 text-sm"><Check className="w-4 h-4 text-green-400 flex-shrink-0" /> {f}</li>
                ))}
              </ul>
              <a href="tel:+917559999366" className="block text-center py-3 rounded-lg border border-xera-red text-xera-red hover:bg-xera-red hover:text-white font-semibold transition-colors">Book Now</a>
            </div>
            <div className="rounded-xl p-6 border border-xera-red bg-xera-red/5 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-xera-red text-white text-xs px-3 py-1 rounded-full">Best Value</span>
              <h3 className="text-xl font-bold text-white mb-2">Premium Restoration</h3>
              <p className="text-3xl font-bold text-xera-red mb-1">₹1,999</p>
              <p className="text-white/50 text-sm flex items-center gap-1 mb-6"><Clock className="w-4 h-4" /> 1.5-2 hours</p>
              <ul className="space-y-3 mb-6">
                {["Everything in Standard", "Ceramic coating on lenses", "Long-lasting UV protection", "Tail lights included", "6-month warranty"].map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-white/80 text-sm"><Check className="w-4 h-4 text-green-400 flex-shrink-0" /> {f}</li>
                ))}
              </ul>
              <a href="tel:+917559999366" className="block text-center py-3 rounded-lg bg-xera-red text-white hover:bg-red-700 font-semibold transition-colors">Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 bg-xera-darkgray">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Restore Your Headlights?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Eye, title: "Better Night Visibility", desc: "Foggy headlights reduce light output by up to 80%. Restoration brings back full brightness." },
              { icon: Sun, title: "UV Damage Protection", desc: "Kerala's intense sun causes yellowing. Our UV sealant prevents future damage." },
              { icon: Check, title: "Pass Fitness Test", desc: "Clear headlights are required for vehicle fitness certification." },
              { icon: Clock, title: "Quick & Affordable", desc: "Done in 1-2 hours. Much cheaper than headlight replacement (₹5,000-15,000)." },
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

      {/* Related */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services/paint-correction" className="bg-xera-darkgray border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Paint Correction</Link>
            <Link to="/services/ceramic-coating" className="bg-xera-darkgray border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Ceramic Coating</Link>
            <Link to="/services/express-wash" className="bg-xera-darkgray border border-white/10 text-white px-6 py-3 rounded-lg hover:border-xera-red transition-colors">Express Wash</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default HeadlightRestoration;
