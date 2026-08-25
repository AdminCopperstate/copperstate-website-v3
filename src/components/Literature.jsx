const FLYERS = [
  {
    title: 'Belt-to-Direct-Drive Conversion',
    file: '/flyers/belt-drive-to-direct-drive.pdf',
    cover: '/flyers/belt-drive-to-direct-drive-cover.jpg',
  },
  {
    title: 'Clarifier Line Card',
    file: '/flyers/clarifier.pdf',
    cover: '/flyers/clarifier-cover.jpg',
  },
  {
    title: 'Hydrotech Disc Filter',
    file: '/flyers/hydrotech-disc-filter.pdf',
    cover: '/flyers/hydrotech-disc-filter-cover.jpg',
  },
];

export default function Literature() {
  return (
    <div>
      <h2 className="font-display text-cream text-2xl">Company Flyers</h2>
      <p className="mt-2 text-graphite text-[14px] leading-relaxed normal-case max-w-lg">
        Product line cards and capability sheets &mdash; opens as a PDF in a new tab.
      </p>

      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        {FLYERS.map((flyer) => (
          <a
            key={flyer.file}
            href={flyer.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-ink-soft border border-ink-line overflow-hidden hover:border-copper transition"
          >
            <div className="relative aspect-[8.5/11] overflow-hidden bg-ink">
              <img
                src={flyer.cover}
                alt={flyer.title}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition"
              />
            </div>
            <div className="p-4 flex items-center justify-between gap-3">
              <span className="text-cream text-[13.5px] font-semibold leading-snug normal-case">
                {flyer.title}
              </span>
              <span className="shrink-0 text-graphite text-[11px] font-bold uppercase tracking-[0.06em] group-hover:text-copper-light transition">
                View &rarr;
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
