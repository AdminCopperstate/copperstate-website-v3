import { useState, useEffect, useCallback } from 'react';
import { IconChevronLeft, IconChevronRight } from './Icons';
import storyPhotos from '../data/storyPhotos';

const AUTO_CYCLE_MS = 5000;

export default function StoryCarousel() {
  const [index, setIndex] = useState(0);
  const count = storyPhotos.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(next, AUTO_CYCLE_MS);
    return () => clearInterval(timer);
  }, [next, count, index]);

  if (!count) return null;

  const photo = storyPhotos[index];

  return (
    <div className="border border-ink-line overflow-hidden">
      <div className="relative aspect-[4/3] bg-ink-soft overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {storyPhotos.map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt={p.caption}
              className="w-full h-full shrink-0 object-cover"
            />
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-4 pt-8 pb-3 flex items-end justify-between">
          <span className="text-cream text-[12.5px] font-semibold normal-case">{photo.caption}</span>

          {count > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="p-1.5 border border-ink-line/60 bg-ink/60 hover:border-copper hover:text-copper-light transition text-cream"
              >
                <IconChevronLeft width={14} height={14} />
              </button>
              <button
                onClick={next}
                aria-label="Next photo"
                className="p-1.5 border border-ink-line/60 bg-ink/60 hover:border-copper hover:text-copper-light transition text-cream"
              >
                <IconChevronRight width={14} height={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
