const PHOTOS = [
  { src: '/why-us/clarifier-drive-install.jpg', alt: 'Copperstate crew rigging a clarifier drive into place' },
  { src: '/why-us/riser-installation.jpg', alt: 'Copperstate crew installing a riser on a ladder' },
];

export default function SalesTeamPhoto() {
  return (
    <section className="bg-ink py-14 md:py-20 border-t border-ink-line">
      <div className="max-w-3xl mx-auto px-5 md:px-8 grid sm:grid-cols-2 gap-5">
        {PHOTOS.map((photo) => (
          <div key={photo.src} className="relative aspect-[4/3] overflow-hidden border border-ink-line">
            <img
              src={photo.src}
              alt={photo.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
