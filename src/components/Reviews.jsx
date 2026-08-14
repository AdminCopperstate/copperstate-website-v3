import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import reviewsRaw from '../data/reviews.txt?raw';
import { IconStarFill, IconQuote, IconChevronLeft, IconChevronRight } from './Icons';

const AUTO_CYCLE_MS = 6000;

function parseReviews(raw) {
  return raw
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => {
      const parts = line.split('|').map((p) => p.trim());
      const [name, ratingStr, text, date] = parts;
      const rating = Math.min(5, Math.max(1, parseInt(ratingStr, 10) || 5));
      return { name, rating, text, date };
    })
    .filter((r) => r.name && r.text);
}

const reviews = parseReviews(reviewsRaw);

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const count = reviews.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(next, AUTO_CYCLE_MS);
    return () => clearInterval(timer);
  }, [next, count, index]);

  if (!count) return null;

  const review = reviews[index];

  return (
    <section className="bg-cream py-20 md:py-28 border-t border-ink-line/10">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-copper" />
          <span className="text-copper-dark text-[12px] font-bold tracking-[0.18em] uppercase">
            What Customers Say
          </span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <h2 className="text-ink text-4xl md:text-5xl leading-[1.02] max-w-xl">
            Reviews
          </h2>
          <Link
            to="/leave-a-review"
            className="inline-flex items-center px-5 py-2.5 border border-ink-line/40 text-ink-line text-[12px] font-bold tracking-[0.06em] uppercase hover:border-copper hover:text-copper-dark transition"
          >
            Leave A Review
          </Link>
        </div>

        <div className="relative bg-ink text-cream px-8 md:px-14 py-12 md:py-14">
          <IconQuote className="text-copper/30 mb-6" />

          <div className="flex gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <IconStarFill
                key={i}
                className={i < review.rating ? 'text-copper-light' : 'text-ink-line'}
              />
            ))}
          </div>

          <p className="text-lg md:text-xl leading-relaxed normal-case font-body min-h-[96px] md:min-h-[80px]">
            &ldquo;{review.text}&rdquo;
          </p>

          <div className="mt-8 flex items-center justify-between">
            <div>
              <div className="font-display text-cream text-base tracking-tight">
                {review.name}
              </div>
              <div className="text-graphite text-[12.5px] normal-case mt-0.5">
                {review.date} &middot; Google Review
              </div>
            </div>

            {count > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  className="p-2 border border-ink-line hover:border-copper hover:text-copper-light transition"
                >
                  <IconChevronLeft width={18} height={18} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next review"
                  className="p-2 border border-ink-line hover:border-copper hover:text-copper-light transition"
                >
                  <IconChevronRight width={18} height={18} />
                </button>
              </div>
            )}
          </div>
        </div>

        {count > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-copper' : 'w-1.5 bg-ink-line/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
