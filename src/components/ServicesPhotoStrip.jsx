import { useState, useEffect, useCallback } from 'react';

const PHOTOS = [
  { src: '/services/crane-lift.jpg', alt: 'Crane lifting a rotor assembly into an oxidation ditch' },
  { src: '/services/chain-drive.jpg', alt: 'Technician servicing a chain and sprocket drive' },
];

const AUTO_CYCLE_MS = 5000;

export default function ServicesPhotoStrip() {
  const [index, setIndex] = useState(0);
  const count = PHOTOS.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(next, AUTO_CYCLE_MS);
    return () => clearInterval(timer);
  }, [next, count]);

  return (
    <div className="max-w-3xl mx-auto py-10 border-t border-ink-line">
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft">
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {PHOTOS.map((photo) => (
            <div key={photo.src} className="relative w-full h-full shrink-0">
              <img src={photo.src} alt={photo.alt} className="absolute inset-0 w-full h-full object-contain" />
            </div>
          ))}
        </div>

        {count > 1 && (
          <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
            {PHOTOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-copper' : 'w-1.5 bg-cream/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
