import { useEffect, useRef, useState, type TransitionEvent } from 'react';
import reviewFrame from '../../assets/reviewFrame.png';
import star from '../../assets/star.png';
import arrowRight from '../../assets/arrowRight.png';

interface Testimonial {
  quote: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'Really fun way to unwind after work. I love how easy it is to jump in and play different games anytime.',
    name: 'Emily R.',
  },
  {
    quote: 'Great variety of games and smooth experience. Feels like there’s always something new to try.',
    name: 'Jason M.',
  },
  {
    quote: 'Modern and well made.',
    name: 'Ethan L.',
  },
  {
    quote: 'Customer support answered fast and actually solved my issue. Didn’t expect that level of care.',
    name: 'Priya S.',
  },
  {
    quote: 'Clean interface, no annoying popups. Just games and rewards, exactly what I wanted.',
    name: 'Marcus T.',
  },
];

// Tripled so there's always real content to slide into in either direction —
// the active index silently re-centers back into the middle copy once a
// transition finishes, giving the appearance of an endless loop.
const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];

// Sized as a % of the card's own width (not fixed px) so they scale down
// with the card on mobile instead of overflowing the shrunk ribbon.
const starSizes = [
  { width: '4.67%', aspectRatio: '5 / 4' },
  { width: '3.74%', aspectRatio: '1 / 1' },
  { width: '6.54%', aspectRatio: '1 / 1' },
  { width: '3.74%', aspectRatio: '1 / 1' },
  { width: '4.67%', aspectRatio: '5 / 4' },
];

type Side = 'active' | 'left' | 'right';

// Left card: dark at its outer (left) edge, easing to light toward the
// active card. Right card: mirrored, dark at its outer (right) edge.
const overlayGradient: Record<Side, string> = {
  active: 'none',
  left: 'linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.1))',
  right: 'linear-gradient(to left, rgba(0,0,0,0.75), rgba(0,0,0,0.1))',
};

function ReviewCard({ quote, name, side }: Testimonial & { side: Side }) {
  const active = side === 'active';
  return (
    <div
      className={`relative aspect-[910/533] w-full transition-transform duration-300 ${active ? 'z-10 scale-[1.1]' : 'z-0 scale-100'}`}
    >
      <img src={reviewFrame} alt="" className="absolute inset-0 h-full w-full" aria-hidden="true" />

      <div className="absolute inset-x-0 top-1 flex items-center justify-center gap-1" aria-hidden="true">
        {starSizes.map((size, i) => (
          <img key={i} src={star} alt="" style={size} />
        ))}
      </div>

      <div className="absolute inset-x-0 top-[26%] bottom-[10%] flex flex-col items-center justify-center gap-2 px-[12%] text-center sm:gap-3">
        <p className="font-poppins text-xs leading-snug text-white/85 sm:text-sm">{quote}</p>
        <p className="font-stolzl text-xs font-bold text-white sm:text-sm">{name}</p>
      </div>

      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: active ? 0 : 1,
          background: overlayGradient[side],
          WebkitMaskImage: `url(${reviewFrame})`,
          maskImage: `url(${reviewFrame})`,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
        }}
        aria-hidden="true"
      />
    </div>
  );
}

// Wide enough that the active card's scale(1.1) pop (up to ~21px of visual
// overflow per side at the 428px desktop card width) still leaves a real gap
// next to its neighbors, instead of nearly touching them.
const GAP = 40;
const PAD_X = 32;
// On mobile only one card is "in view", but the clip buffer is wider than
// GAP so a sliver of each neighboring card still peeks in on both sides
// (buffer beyond GAP = visible peek width, ~12px here).
const PAD_X_MOBILE = 52;

export default function Testimonials() {
  const count = testimonials.length;
  const [activeIndex, setActiveIndex] = useState(count + 1);
  const [instant, setInstant] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [offset, setOffset] = useState(0);
  const [trackWidth, setTrackWidth] = useState<number>();

  useEffect(() => {
    const updateCardsPerView = () => setCardsPerView(window.innerWidth < 640 ? 1 : 3);
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  useEffect(() => {
    const recalc = () => {
      const card = cardRef.current;
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const padX = cardsPerView === 1 ? PAD_X_MOBILE : PAD_X;
      const maxStart = Math.max(loopedTestimonials.length - cardsPerView, 0);
      const start = Math.min(Math.max(activeIndex - Math.floor(cardsPerView / 2), 0), maxStart);
      setOffset(-start * (cardWidth + GAP));
      setTrackWidth(cardsPerView * cardWidth + (cardsPerView - 1) * GAP + padX * 2);
    };

    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [activeIndex, cardsPerView]);

  useEffect(() => {
    if (!instant) return;
    const id = requestAnimationFrame(() => setInstant(false));
    return () => cancelAnimationFrame(id);
  }, [instant]);

  const showPrev = () => setActiveIndex((i) => i - 1);
  const showNext = () => setActiveIndex((i) => i + 1);
  const padX = cardsPerView === 1 ? PAD_X_MOBILE : PAD_X;

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    // Each card also transitions its own scale/opacity; ignore those bubbled
    // events and react only to the track's own transform transition.
    if (event.target !== event.currentTarget) return;
    if (activeIndex < count) {
      setInstant(true);
      setActiveIndex((i) => i + count);
    } else if (activeIndex >= count * 2) {
      setInstant(true);
      setActiveIndex((i) => i - count);
    }
  };

  return (
    <section className="mx-auto w-full px-5 py-10 sm:px-12 sm:py-14 lg:py-16">
      <h2 className="text-center font-burbank text-2xl font-bold uppercase text-white sm:text-3xl">Testimonials</h2>

      <div
        className="relative mx-auto mt-8 overflow-hidden py-5"
        style={{
          width: trackWidth ? `${trackWidth}px` : '100%',
          paddingLeft: padX,
          paddingRight: padX,
        }}
      >
        <div
          className={`flex ${instant ? '' : 'transition-transform duration-500 ease-out'}`}
          style={{ transform: `translateX(${offset}px)`, gap: `${GAP}px` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {loopedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              ref={index === 0 ? cardRef : undefined}
              className="w-[clamp(200px,62vw,260px)] flex-none sm:w-[clamp(240px,22.2917vw,428px)]"
            >
              <ReviewCard
                {...testimonial}
                side={index === activeIndex ? 'active' : index < activeIndex ? 'left' : 'right'}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={showPrev}
          aria-label="Previous testimonial"
          className="h-10 w-10 -scale-x-100 transition-transform hover:scale-110 hover:-scale-x-110"
        >
          <img src={arrowRight} alt="" className="h-full w-full" />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next testimonial"
          className="h-10 w-10 transition-transform hover:scale-110"
        >
          <img src={arrowRight} alt="" className="h-full w-full" />
        </button>
      </div>
    </section>
  );
}
