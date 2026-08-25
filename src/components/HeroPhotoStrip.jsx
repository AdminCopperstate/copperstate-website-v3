const PHOTOS = [
  { src: '/gallery/photo-1.jpg', alt: 'Clarifier drive removal and installation' },
  { src: '/gallery/photo-9.jpg', alt: 'Drive inspection and assessment' },
];

export default function HeroPhotoStrip() {
  return (
    <div className="grid sm:grid-cols-2 gap-px bg-ink-line/40">
      {PHOTOS.map((photo) => (
        <div key={photo.src} className="relative aspect-[16/10] overflow-hidden bg-ink-soft">
          <img
            src={photo.src}
            alt={photo.alt}
            className="ken-burns absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
