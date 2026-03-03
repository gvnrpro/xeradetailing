import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, Clock } from 'lucide-react';
import EnhancedCTA from '../enhanced/EnhancedCTA';
import { trackEvent } from '../tracking/AnalyticsProvider';
import { useComponentQueue } from './ComponentQueueProvider';

// ─── Constants ───────────────────────────────────────────────────────────────

const STORAGE_KEY_DISMISSED   = 'xera_unified_offer_dismissed';
const STORAGE_KEY_SHOW_COUNT  = 'xera_offer_show_count';
const MAX_SHOW_COUNT          = 3;       // Never show more than 3 times total
const SCROLL_THRESHOLD        = 0.35;    // Show after 35% page scroll
const MODAL_DURATION_MS       = 20_000; // Auto-dismiss after 20s
const ANIMATION_DURATION_MS   = 320;    // Exit animation length

// ─── Suppression helpers ─────────────────────────────────────────────────────

function shouldSuppressOffer(): boolean {
  try {
    // Already dismissed today
    const dismissedDate = localStorage.getItem(STORAGE_KEY_DISMISSED);
    if (dismissedDate === new Date().toDateString()) return true;

    // Shown too many times total
    const count = parseInt(localStorage.getItem(STORAGE_KEY_SHOW_COUNT) ?? '0', 10);
    if (count >= MAX_SHOW_COUNT) return true;
  } catch {
    // localStorage unavailable (SSR / private mode) — show anyway
  }
  return false;
}

function recordOfferShown(): void {
  try {
    const count = parseInt(localStorage.getItem(STORAGE_KEY_SHOW_COUNT) ?? '0', 10);
    localStorage.setItem(STORAGE_KEY_SHOW_COUNT, String(count + 1));
  } catch { /* ignore */ }
}

function recordOfferDismissed(): void {
  try {
    localStorage.setItem(STORAGE_KEY_DISMISSED, new Date().toDateString());
  } catch { /* ignore */ }
}

// ─── Modal content ────────────────────────────────────────────────────────────

interface LimitedOfferModalContentProps {
  onDismiss?: () => void;
}

const LimitedOfferModalContent = ({ onDismiss }: LimitedOfferModalContentProps) => {
  // Animate in on mount, animate out before calling onDismiss
  const [phase, setPhase] = useState<'entering' | 'visible' | 'exiting'>('entering');
  const autoTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(Math.round(MODAL_DURATION_MS / 1000));

  // Trigger dismiss with exit animation
  const dismiss = useCallback(() => {
    if (phase === 'exiting') return; // already leaving
    if (autoTimer.current)   clearTimeout(autoTimer.current);
    if (countdownRef.current) clearInterval(countdownRef.current);
    setPhase('exiting');
    setTimeout(() => onDismiss?.(), ANIMATION_DURATION_MS);
  }, [phase, onDismiss]);

  // Entrance animation
  useEffect(() => {
    const raf = requestAnimationFrame(() => setPhase('visible'));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Auto-dismiss countdown
  useEffect(() => {
    autoTimer.current = setTimeout(dismiss, MODAL_DURATION_MS);

    countdownRef.current = setInterval(() => {
      setSecondsLeft(s => Math.max(0, s - 1));
    }, 1000);

    return () => {
      if (autoTimer.current)    clearTimeout(autoTimer.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally only on mount

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') dismiss(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [dismiss]);

  const handleOfferClick = () => {
    trackEvent('limited_offer_clicked');
    dismiss();
  };

  const handleXClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    trackEvent('limited_offer_dismissed');
    dismiss();
  };

  // Progress bar width (100% → 0%)
  const progressPct = (secondsLeft / (MODAL_DURATION_MS / 1000)) * 100;

  // Transition classes per phase
  const phaseClasses: Record<typeof phase, string> = {
    entering: 'translate-y-6 opacity-0 scale-95',
    visible:  'translate-y-0 opacity-100 scale-100',
    exiting:  'translate-y-6 opacity-0 scale-95',
  };

  return (
    /*
     * Backdrop — click outside to dismiss.
     * Uses pointer-events so it doesn't block page scroll.
     */
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-end justify-center
                 pb-4 sm:pb-6 px-3 sm:px-4 pointer-events-none"
      role="dialog"
      aria-modal="true"
      aria-label="Limited time offer"
    >
      {/* Card wrapper — pointer-events re-enabled only here */}
      <div
        className={[
          'pointer-events-auto w-full max-w-sm sm:max-w-md',
          'transition-all ease-out',
          phaseClasses[phase],
        ].join(' ')}
        style={{ transitionDuration: `${ANIMATION_DURATION_MS}ms` }}
      >
        {/* Outer gradient border */}
        <div className="bg-gradient-to-r from-red-700 via-xera-red to-red-600 p-[2px] rounded-2xl shadow-2xl shadow-black/60">
          {/* Inner card */}
          <div className="bg-xera-darkgray rounded-2xl overflow-hidden relative">

            {/* Progress bar — shrinks as timer counts down */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-xera-red to-red-400 transition-all duration-1000 ease-linear"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            <div className="p-4 sm:p-5 pt-5">
              {/* Header row */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  {/* Pulsing dot */}
                  <span className="relative flex h-2.5 w-2.5 mt-0.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-xera-red opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-xera-red" />
                  </span>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-xera-red">
                    Limited Offer
                  </span>
                </div>

                {/* Close button */}
                <button
                  onClick={handleXClick}
                  className="text-white/40 hover:text-white transition-colors rounded-lg p-1
                             hover:bg-white/10 active:bg-white/20 -mr-1 -mt-1"
                  aria-label="Close offer"
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Offer text */}
              <div className="mb-4">
                <h3 className="font-bold text-xl sm:text-2xl leading-tight mb-1 text-white">
                  ₹500 OFF Ceramic Coating
                </h3>
                <p className="text-white/60 text-sm leading-snug">
                  Book today and lock in the discount — mention this offer when booking.
                </p>
              </div>

              {/* CTA */}
              <EnhancedCTA
                text="Book on WhatsApp Now"
                href="https://wa.me/917559999366?text=Hi%20XERA%2C%20I%E2%80%99d%20like%20to%20book%20ceramic%20coating%20with%20the%20%E2%82%B9500%20discount%20offer."
                variant="primary"
                shimmerEffect={true}
                className="w-full text-sm sm:text-base py-2.5 sm:py-3 rounded-xl"
                onClick={handleOfferClick}
                trackingLabel="limited_time_offer_whatsapp"
              />

              {/* Footer */}
              <div className="flex items-center justify-between mt-3">
                <p className="text-white/30 text-[11px]">
                  * Valid for limited time only
                </p>
                <div className="flex items-center gap-1 text-white/30">
                  <Clock className="h-3 w-3" />
                  <span className="text-[11px] tabular-nums">
                    {secondsLeft}s
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Manager (handles when to show) ──────────────────────────────────────────

const LimitedOfferModalManaged = () => {
  const { addComponent, removeComponent } = useComponentQueue();
  const [componentId]  = useState(() => `limited-offer-${Date.now()}`);
  const hasRegistered  = useRef(false); // guard against React Strict Mode double-fire

  const handleDismiss = useCallback(() => {
    removeComponent(componentId);
    recordOfferDismissed();
  }, [componentId, removeComponent]);

  useEffect(() => {
    if (shouldSuppressOffer()) return;
    if (hasRegistered.current)  return;

    const showModal = () => {
      if (hasRegistered.current) return;
      hasRegistered.current = true;

      recordOfferShown();
      trackEvent('limited_offer_shown');

      addComponent({
        id: componentId,
        component: LimitedOfferModalContent,
        props: { onDismiss: handleDismiss },
        priority: 'medium',
        position: 'bottom',
        duration: MODAL_DURATION_MS,
        collision_detection: true,
      });
    };

    // Scroll-triggered: show after user has scrolled 35% of the page.
    // Falls back to a 12s timer if the user doesn't scroll (e.g. short pages).
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;
    let shown = false;

    const onScroll = () => {
      if (shown) return;
      const scrolled =
        window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      if (scrolled >= SCROLL_THRESHOLD) {
        shown = true;
        if (fallbackTimer) clearTimeout(fallbackTimer);
        window.removeEventListener('scroll', onScroll);
        showModal();
      }
    };

    fallbackTimer = setTimeout(() => {
      if (!shown) {
        shown = true;
        window.removeEventListener('scroll', onScroll);
        showModal();
      }
    }, 12_000);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      if (fallbackTimer) clearTimeout(fallbackTimer);
      window.removeEventListener('scroll', onScroll);
      // Only remove from queue if we actually registered it
      if (hasRegistered.current) removeComponent(componentId);
    };
  }, [addComponent, removeComponent, componentId, handleDismiss]);

  return null;
};

export default LimitedOfferModalManaged;
