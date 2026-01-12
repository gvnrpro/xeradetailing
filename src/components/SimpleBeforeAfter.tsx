import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: "Ceramic Coating",
    before: "/assets/ceramic-before.jpg",
    after: "/assets/ceramic-after.jpg",
    description: "9H ceramic protection for lasting shine"
  },
  {
    title: "Interior Cleaning",
    before: "/assets/interior-before.jpg",
    after: "/assets/interior-after.jpg",
    description: "Deep clean for a fresh interior"
  },
  {
    title: "Paint Correction",
    before: "/assets/paint-correction-before.jpg",
    after: "/assets/paint-correction-after.jpg",
    description: "Remove scratches and swirl marks"
  },
  {
    title: "Express Wash",
    before: "/assets/express-wash-before.jpg",
    after: "/assets/express-wash-after.jpg",
    description: "Quick professional exterior wash"
  }
];

const fallbackImage = "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png";

const SimpleBeforeAfter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    setShowAfter(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    setShowAfter(false);
  };

  const currentService = services[activeIndex];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See the <span className="text-xera-red">Transformation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from our professional auto detailing services in Ottapalam, Kerala
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setShowAfter(false);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeIndex === index
                    ? 'bg-xera-red text-white'
                    : 'bg-card border border-border text-muted-foreground hover:border-xera-red/50'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Image Display */}
          <div className="relative bg-card border border-border rounded-xl overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={showAfter ? currentService.after : currentService.before}
                alt={`${currentService.title} ${showAfter ? 'after' : 'before'} detailing at XERA Ottapalam`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallbackImage;
                }}
              />
              
              {/* Before/After Labels */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  showAfter ? 'bg-xera-red text-white' : 'bg-black/70 text-white'
                }`}>
                  {showAfter ? 'AFTER' : 'BEFORE'}
                </span>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Next service"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Toggle Button */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">{currentService.title}</h3>
              <p className="text-muted-foreground mb-4">{currentService.description}</p>
              <Button
                onClick={() => setShowAfter(!showAfter)}
                className="bg-xera-red hover:bg-xera-red/90 text-white"
              >
                {showAfter ? 'View Before' : 'View After'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleBeforeAfter;
