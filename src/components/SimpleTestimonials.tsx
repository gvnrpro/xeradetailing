import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Menon",
    location: "Ottapalam",
    rating: 5,
    text: "Best ceramic coating service in Palakkad district! My car still looks brand new after 8 months. Highly recommended for anyone looking for premium car care.",
    service: "Ceramic Coating"
  },
  {
    name: "Priya Krishnan",
    location: "Shoranur",
    rating: 5,
    text: "The interior detailing was exceptional. They removed stains I thought were permanent. Very professional team and reasonable pricing.",
    service: "Interior Detailing"
  },
  {
    name: "Arun Kumar",
    location: "Pattambi",
    rating: 5,
    text: "I've tried many car wash services, but XERA is on another level. The attention to detail and quality of products they use is unmatched.",
    service: "Express Wash"
  },
  {
    name: "Suresh Nair",
    location: "Perinthalmanna",
    rating: 5,
    text: "Got paint correction done for my 5-year-old car. It looks better than when I bought it! Worth every rupee spent.",
    service: "Paint Correction"
  }
];

const SimpleTestimonials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-xera-red">Customers</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what car owners across Kerala say about our services.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.9/5</span>
            <span className="text-muted-foreground">based on 100+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-xera-red/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-xera-red/10 flex items-center justify-center flex-shrink-0">
                  <Quote className="w-5 h-5 text-xera-red" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <span className="text-xs bg-xera-red/10 text-xera-red px-2 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://share.google/lvFNI6D3uS5HLSRrA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            See All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default SimpleTestimonials;
