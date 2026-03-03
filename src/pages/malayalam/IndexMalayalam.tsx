import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { VoiceSearchFAQ } from '@/components/seo/VoiceSearchFAQ';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Phone, Shield, Droplets, Star, Car, Sparkles } from 'lucide-react';

const malayalamFAQs = [
  {
    question: "എന്റെ കാറിന് ceramic coating ചെയ്യാൻ എത്ര രൂപ ചിലവാകും?",
    answer: "XERA Auto Detailing-ൽ ceramic coating ₹7,999 മുതൽ ₹24,999 വരെ ലഭ്യമാണ്. കാറിന്റെ വലിപ്പവും coating-ന്റെ ഗ്രേഡും അനുസരിച്ച് വില മാറും. ഞങ്ങൾ premium graphene ceramic coatings ഉപയോഗിക്കുന്നു.",
    keywords: ["ceramic coating price kerala", "ceramic coating cost ottapalam"],
    language: "ml" as const
  },
  {
    question: "Ottapalam-ൽ best car wash ഏതാണ്?",
    answer: "XERA Auto Detailing ആണ് Ottapalam-ലെ best car wash & detailing studio. NSS College-ന് എതിർവശം, Palappuram-ൽ സ്ഥിതി ചെയ്യുന്നു. Express wash, interior detailing, ceramic coating എന്നിവ ലഭ്യമാണ്.",
    keywords: ["best car wash ottapalam", "car wash near me palakkad"],
    language: "ml" as const
  },
  {
    question: "Ceramic coating എത്ര നാൾ നിലനിൽക്കും?",
    answer: "XERA-യിൽ ഉപയോഗിക്കുന്ന premium ceramic coating 3-5 വർഷം വരെ നിലനിൽക്കും. ശരിയായ maintenance ചെയ്താൽ കൂടുതൽ കാലം protection ലഭിക്കും.",
    keywords: ["ceramic coating durability", "how long ceramic coating lasts"],
    language: "ml" as const
  },
  {
    question: "മഴക്കാലത്ത് car wash ചെയ്യാമോ?",
    answer: "തീർച്ചയായും! മഴക്കാലത്ത് regular washing വളരെ പ്രധാനമാണ്. മഴവെള്ളത്തിലെ acid, mud, dirt എന്നിവ paint-നെ damage ചെയ്യും. XERA-യിൽ monsoon special wash packages ലഭ്യമാണ്.",
    keywords: ["car wash monsoon kerala", "rain car care tips"],
    language: "ml" as const
  },
  {
    question: "Interior cleaning-ന് എത്ര സമയം എടുക്കും?",
    answer: "Full interior detailing-ന് 3-5 മണിക്കൂർ എടുക്കും. Dashboard, seats, carpet, headliner എന്നിവ deep clean ചെയ്യുന്നു. Express interior clean 1-2 മണിക്കൂർ കൊണ്ട് ചെയ്യാം.",
    keywords: ["interior cleaning time", "car interior detailing ottapalam"],
    language: "ml" as const
  }
];

const services = [
  { icon: Shield, title: "സെറാമിക് കോട്ടിംഗ്", titleEn: "Ceramic Coating", desc: "3-5 വർഷം paint protection", price: "₹7,999 മുതൽ", link: "/ml/ceramic-coating-ottapalam" },
  { icon: Droplets, title: "എക്സ്പ്രസ് വാഷ്", titleEn: "Express Wash", desc: "30 മിനിറ്റിൽ premium wash", price: "₹499 മുതൽ", link: "/services/express-wash" },
  { icon: Car, title: "ഇന്റീരിയർ ഡീറ്റെയ്‌ലിംഗ്", titleEn: "Interior Detailing", desc: "Deep cleaning & sanitization", price: "₹1,999 മുതൽ", link: "/ml/interior-cleaning-shoranur" },
  { icon: Sparkles, title: "പെയിന്റ് കറക്ഷൻ", titleEn: "Paint Correction", desc: "Scratch & swirl mark removal", price: "₹2,999 മുതൽ", link: "/services/paint-correction" },
];

const testimonials = [
  { name: "Arun Kumar", location: "Ottapalam", text: "XERA-യിൽ ceramic coating ചെയ്തത് best decision ആയിരുന്നു. ഇപ്പോൾ 1 വർഷമായി, car ഇപ്പോഴും showroom finish-ൽ ആണ്!", rating: 5 },
  { name: "Rajesh Nair", location: "Shoranur", text: "Interior detailing service excellent ആയിരുന്നു. Car completely new ആയി! Staff വളരെ professional ആണ്.", rating: 5 },
  { name: "Suresh Menon", location: "Palakkad", text: "Best car wash in the area. Price-ും quality-ും compare ചെയ്താൽ XERA ആണ് best. Highly recommended!", rating: 5 },
];

const IndexMalayalam = () => {
  return (
    <>
      <Helmet>
        <title>XERA Auto Detailing Ottapalam | Best Car Wash & Ceramic Coating Kerala</title>
        <meta name="description" content="Ottapalam-ലെ best car detailing studio. Ceramic coating, interior detailing, express wash services. ₹499 മുതൽ. NSS College-ന് എതിർവശം, Palappuram." />
        <link rel="canonical" href="https://xeradetailing.lovable.app/ml" />
        <link rel="alternate" hrefLang="en" href="https://xeradetailing.lovable.app/" />
        <link rel="alternate" hrefLang="ml" href="https://xeradetailing.lovable.app/ml" />
        <meta property="og:locale" content="ml_IN" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-black via-xera-darkgray to-black pt-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-xera-red/20 text-xera-red px-4 py-1 rounded-full text-sm font-medium mb-4">
            🏆 Ottapalam-ലെ #1 Car Detailing Studio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            നിങ്ങളുടെ <span className="text-xera-red">കാറിന്</span> Premium<br />
            Detailing & Protection
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Ceramic Coating | Interior Detailing | Express Wash | Paint Correction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917559999366" className="bg-xera-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              ഇപ്പോൾ വിളിക്കൂ
            </a>
            <a href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%20need%20car%20detailing%20service" target="_blank" rel="noopener noreferrer" className="border-2 border-green-500 text-green-400 hover:bg-green-500/20 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              WhatsApp Message
            </a>
          </div>
          <p className="text-white/50 text-sm mt-4">📍 Opp. NSS College, Palappuram, Ottapalam</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-xera-darkgray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">ഞങ്ങളുടെ സേവനങ്ങൾ</h2>
          <p className="text-white/60 text-center mb-12">Our Services</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link key={i} to={service.link} className="bg-black/50 border border-white/10 rounded-xl p-6 hover:border-xera-red/50 transition-all group">
                <service.icon className="w-10 h-10 text-xera-red mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-1">{service.title}</h3>
                <p className="text-white/50 text-sm mb-1">{service.titleEn}</p>
                <p className="text-white/70 text-sm mb-3">{service.desc}</p>
                <span className="text-xera-red font-semibold">{service.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Customer Reviews</h2>
          <p className="text-white/60 text-center mb-12">ഞങ്ങളുടെ ഉപഭോക്താക്കൾ പറയുന്നത്</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-xera-darkgray border border-white/10 rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 text-sm mb-4">"{t.text}"</p>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-white/50 text-xs">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Search FAQ */}
      <section className="py-16 bg-xera-darkgray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">ചോദ്യങ്ങളും ഉത്തരങ്ങളും</h2>
          <p className="text-white/60 text-center mb-12">Frequently Asked Questions</p>
          <VoiceSearchFAQ queries={malayalamFAQs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-xera-red to-red-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">ഇന്ന് തന്നെ Book ചെയ്യൂ!</h2>
          <p className="text-white/90 mb-8 text-lg">Free inspection & consultation. Call now!</p>
          <a href="tel:+917559999366" className="bg-white text-xera-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2">
            <Phone className="w-5 h-5" />
            +91 75599 99366
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default IndexMalayalam;
