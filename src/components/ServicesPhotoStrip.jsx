const PHOTOS = [
  { src: '/services/crane-lift.jpg', alt: 'Crane lifting a rotor assembly into an oxidation ditch' },
  { src: '/services/chain-drive.jpg', alt: 'Technician servicing a chain and sprocket drive' },
];

export default function ServicesPhotoStrip() {
  return (
    <div className="grid sm:grid-cols-2 gap-px bg-ink-line/40 border-t border-ink-line">
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
