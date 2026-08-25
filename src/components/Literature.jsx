import { IconDocument } from './Icons';

const FLYERS = [
  { title: 'Belt-to-Direct-Drive Conversion', file: '/flyers/belt-drive-to-direct-drive.pdf' },
  { title: 'Clarifier Line Card', file: '/flyers/clarifier.pdf' },
  { title: 'Hydrotech Disc Filter', file: '/flyers/hydrotech-disc-filter.pdf' },
];

export default function Literature() {
  return (
    <div>
      <h2 className="font-display text-cream text-2xl">Literature</h2>
      <p className="mt-2 text-graphite text-[14px] leading-relaxed normal-case max-w-lg">
        Product line cards and capability sheets — opens as a PDF in a new tab.
      </p>

      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        {FLYERS.map((flyer) => (
          <a
            key={flyer.file}
            href={flyer.file}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink-soft border border-ink-line p-5 flex flex-col items-start gap-3 hover:border-copper transition group"
          >
            <IconDocument className="text-copper-light" width={26} height={26} />
            <span className="text-cream text-[14px] font-semibold leading-snug normal-case">
              {flyer.title}
            </span>
            <span className="text-graphite text-[11px] font-bold uppercase tracking-[0.06em] group-hover:text-copper-light transition">
              View PDF &rarr;
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
