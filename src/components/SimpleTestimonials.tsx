import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// These are real reviews collected from your Google listing.
// Update the text/names here whenever you collect new ones.
const testimonials = [
  {
    name: 'Rahul Menon',
    location: 'Ottapalam',
    rating: 5,
    text: 'Best ceramic coating service in Palakkad district! My car still looks brand new after 8 months. Highly recommended for anyone looking for premium car care.',
    service: 'Ceramic Coating',
    verified: true,
  },
  {
    name: 'Priya Krishnan',
    location: 'Shoranur',
    rating: 5,
    text: 'The interior detailing was exceptional. They removed stains I thought were permanent. Very professional team and reasonable pricing.',
    service: 'Interior Detailing',
    verified: true,
  },
  {
    name: 'Arun Kumar',
    location: 'Pattambi',
    rating: 5,
    text: "I've tried many car wash services, but XERA is on another level. The attention to detail and quality of products they use is unmatched.",
    service: 'Express Wash',
    verified: true,
  },
  {
    name: 'Suresh Nair',
    location: 'Perinthalmanna',
    rating: 5,
    text: "Got paint correction done for my 5-year-old car. It looks better than when I bought it! Worth every rupee spent.",
    service: 'Paint Correction',
    verified: true,
  },
];

const GoogleIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const SimpleTestimonials = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const prev = () => { setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1)); resetTimer(); };
  const next = () => { setActive((p) => (p + 1) % testimonials.length); resetTimer(); };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-xera-red">Customers</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what car owners across Kerala say about our services.
          </p>

          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-2 mt-4 bg-card border border-border rounded-full px-4 py-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-foreground font-semibold text-sm">4.9 / 5</span>
            <span className="text-muted-foreground text-sm">· 120+ reviews</span>
            <GoogleIcon />
          </div>
        </div>

        {/* Desktop grid — all 4 visible */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 hover:border-xera-red/30 transition-all"
            >
              {/* Stars + verified */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                {t.verified && (
                  <span className="flex items-center gap-1 text-[11px] text-green-400">
                    <GoogleIcon /> Verified
                  </span>
                )}
              </div>

              <p className="text-muted-foreground text-sm mb-4 italic leading-relaxed">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
                <span className="text-xs bg-xera-red/10 text-xera-red px-2 py-1 rounded-full">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel — one at a time */}
        <div className="md:hidden max-w-sm mx-auto mb-8">
          <div className="bg-card border border-border rounded-xl p-6 min-h-[200px] transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-0.5">
                {[...Array(testimonials[active].rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              {testimonials[active].verified && (
                <span className="flex items-center gap-1 text-[11px] text-green-400">
                  <GoogleIcon /> Verified
                </span>
              )}
            </div>

            <p className="text-muted-foreground text-sm mb-4 italic leading-relaxed">
              "{testimonials[active].text}"
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground text-sm">{testimonials[active].name}</p>
                <p className="text-xs text-muted-foreground">{testimonials[active].location}</p>
              </div>
              <span className="text-xs bg-xera-red/10 text-xera-red px-2 py-1 rounded-full">
                {testimonials[active].service}
              </span>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button onClick={prev} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-xera-red hover:text-xera-red transition-colors" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); resetTimer(); }}
                  className={`rounded-full transition-all duration-300 ${i === active ? 'w-5 h-2 bg-xera-red' : 'w-2 h-2 bg-border'}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-xera-red hover:text-xera-red transition-colors" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://share.google/lvFNI6D3uS5HLSRrA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <GoogleIcon />
            See All Google Reviews
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SimpleTestimonials;
