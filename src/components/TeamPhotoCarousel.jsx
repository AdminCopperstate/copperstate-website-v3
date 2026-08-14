import { useState, useEffect, useCallback } from 'react';
import { IconGearSun, IconChevronLeft, IconChevronRight } from './Icons';
import teamPhotos from '../data/teamPhotos';

const AUTO_CYCLE_MS = 5000;

export default function TeamPhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [broken, setBroken] = useState({});
  const count = teamPhotos.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(next, AUTO_CYCLE_MS);
    return () => clearInterval(timer);
  }, [next, count, index]);

  if (!count) return null;

  const photo = teamPhotos[index];
  const isBroken = broken[index];

  return (
    <div>
      <h2 className="font-display text-cream text-2xl mb-5">Copperstate Machine and Industrial</h2>

      <div className="relative aspect-[16/7] bg-ink-soft border border-ink-line overflow-hidden">
        {!isBroken && (
          <img
            src={photo.src}
            alt={photo.caption}
            onError={() => setBroken((b) => ({ ...b, [index]: true }))}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {isBroken && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <IconGearSun className="text-ink-line" width={36} height={36} />
            <span className="text-graphite text-[12px] tracking-[0.08em] uppercase">
              Team Photo Coming Soon
            </span>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-5 pt-10 pb-4 flex items-end justify-between">
          <span className="text-cream text-[13px] font-semibold normal-case">{photo.caption}</span>

          {count > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="p-2 border border-ink-line/60 bg-ink/60 hover:border-copper hover:text-copper-light transition text-cream"
              >
                <IconChevronLeft width={16} height={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next photo"
                className="p-2 border border-ink-line/60 bg-ink/60 hover:border-copper hover:text-copper-light transition text-cream"
              >
                <IconChevronRight width={16} height={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {count > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {teamPhotos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to team photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-copper' : 'w-1.5 bg-ink-line/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
