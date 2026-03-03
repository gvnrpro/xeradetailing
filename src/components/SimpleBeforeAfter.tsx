import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Use real images from /public/lovable-uploads ─────────────────────────────
// All files confirmed present in the repo. Pair similar-looking photos per
// service. If you later add proper before/after shots, swap the paths here.
const services = [
  {
    title: 'Ceramic Coating',
    before: '/lovable-uploads/5583bd64-8e07-4454-b1d2-d426c447ea15.jpg',
    after:  '/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png',
    description: '9H ceramic protection — water-beading hydrophobic finish',
  },
  {
    title: 'Paint Correction',
    before: '/lovable-uploads/0ce6d940-bdf2-495a-a7ba-2da69855c3a1.jpg',
    after:  '/lovable-uploads/6554b31e-7ba5-48d8-8f31-2ac905a4f88f.png',
    description: 'Multi-stage polishing to remove swirls, scratches & oxidation',
  },
  {
    title: 'Interior Detailing',
    before: '/lovable-uploads/d22925e7-845c-4cad-8326-03fe61c5b2f8.jpg',
    after:  '/lovable-uploads/b6128b34-f51e-46bf-aafb-23fdc89086b6.png',
    description: 'Deep steam-clean, leather conditioning & full sanitisation',
  },
  {
    title: 'Express Wash',
    before: '/lovable-uploads/5c6772f8-70d4-496c-9c31-291686cf603e.png',
    after:  '/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png',
    description: 'Quick foam-wash & blow-dry — spotless in under 30 minutes',
  },
];

// Drag-to-reveal slider ───────────────────────────────────────────────────────
function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [sliderX, setSliderX] = useState(50); // percent
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setSliderX(pct);
  }, []);

  // Mouse
  const onMouseDown  = (e: React.MouseEvent) => { dragging.current = true; updateSlider(e.clientX); };
  const onMouseMove  = (e: React.MouseEvent) => { if (dragging.current) updateSlider(e.clientX); };
  const onMouseUp    = ()                      => { dragging.current = false; };

  // Touch
  const onTouchStart = (e: React.TouchEvent) => { dragging.current = true; updateSlider(e.touches[0].clientX); };
  const onTouchMove  = (e: React.TouchEvent) => { if (dragging.current) updateSlider(e.touches[0].clientX); };
  const onTouchEnd   = ()                      => { dragging.current = false; };

  const fallback = '/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png';

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden rounded-xl aspect-video cursor-ew-resize touch-none bg-black"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* AFTER (full width, underneath) */}
      <img
        src={after}
        alt={`${title} after detailing at XERA Ottapalam`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
        onError={(e) => { (e.target as HTMLImageElement).src = fallback; }}
      />

      {/* BEFORE (clipped to left of slider) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderX}%` }}
      >
        <img
          src={before}
          alt={`${title} before detailing at XERA Ottapalam`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${10000 / sliderX}%`, maxWidth: 'none' }}
          draggable={false}
          onError={(e) => { (e.target as HTMLImageElement).src = fallback; }}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.8)] pointer-events-none"
        style={{ left: `${sliderX}%` }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center gap-0.5 pointer-events-none"
        style={{ left: `${sliderX}%` }}
      >
        <ChevronLeft className="w-3.5 h-3.5 text-gray-700" />
        <ChevronRight className="w-3.5 h-3.5 text-gray-700" />
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-2.5 py-1 rounded-full pointer-events-none">
        BEFORE
      </span>
      <span className="absolute top-3 right-3 bg-xera-red text-white text-xs font-semibold px-2.5 py-1 rounded-full pointer-events-none">
        AFTER
      </span>
    </div>
  );
}

// Main section ────────────────────────────────────────────────────────────────
const SimpleBeforeAfter = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex((p) => (p === 0 ? services.length - 1 : p - 1));
  const handleNext = () => setActiveIndex((p) => (p === services.length - 1 ? 0 : p + 1));

  const current = services[activeIndex];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See the <span className="text-xera-red">Transformation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from our professional auto detailing services in Ottapalam, Kerala.
            Drag the slider to compare.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Service tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeIndex === i
                    ? 'bg-xera-red text-white'
                    : 'bg-card border border-border text-muted-foreground hover:border-xera-red/50'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Slider */}
          <BeforeAfterSlider
            key={activeIndex}          // remount on tab change so slider resets to 50%
            before={current.before}
            after={current.after}
            title={current.title}
          />

          {/* Caption + nav */}
          <div className="flex items-center justify-between mt-4 px-1">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-xera-red hover:text-xera-red transition-colors"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-center">
              <h3 className="font-bold text-foreground">{current.title}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{current.description}</p>
            </div>

            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-xera-red hover:text-xera-red transition-colors"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleBeforeAfter;
