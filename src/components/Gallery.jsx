import { useState } from 'react';
import { IconGearSun } from './Icons';

const CATEGORIES = [
  'All',
  'Clarifiers',
  'Blowers',
  'Oxidation Ditches',
  'Disc Filters',
  'DAFs',
  'Mixers',
  'Weirs',
  'Baffles',
  'Fabrication',
  'Field Crew',
];

// Once you have real photos, drop them into the /public/gallery/ folder
// and update the `src` path below to match the filename, e.g. '/gallery/clarifier-rebuild.jpg'.
// Until a real photo exists at that path, the tile shows a placeholder automatically.
const PHOTOS = [
  { src: '/gallery/photo-1.jpg', caption: 'Clarifier Drive Rebuild', category: 'Clarifiers' },
  { src: '/gallery/photo-2.jpg', caption: 'Blower Removal & Install', category: 'Blowers' },
  { src: '/gallery/photo-3.jpg', caption: 'In-House Fabrication', category: 'Fabrication' },
  { src: '/gallery/photo-4.jpg', caption: 'Field Crew On-Site', category: 'Field Crew' },
  { src: '/gallery/photo-5.jpg', caption: 'Oxidation Ditch Renovation', category: 'Oxidation Ditches' },
  { src: '/gallery/photo-6.jpg', caption: 'Weir Gate Calibration', category: 'Weirs' },
  { src: '/gallery/photo-7.jpg', caption: 'Foundation & Anchor Repair', category: 'Fabrication' },
  { src: '/gallery/photo-8.jpg', caption: 'Completed Installation', category: 'Field Crew' },
  { src: '/gallery/photo-9.jpg', caption: 'Drive Inspection & Assessment', category: 'Oxidation Ditches' },
  { src: '/gallery/photo-10.jpg', caption: 'Disc Filter Service', category: 'Disc Filters' },
  { src: '/gallery/photo-11.jpg', caption: 'Rigging & Alignment', category: 'Blowers' },
  { src: '/gallery/photo-12.jpg', caption: 'Preventative Maintenance', category: 'Field Crew' },
  { src: '/gallery/photo-13.jpg', caption: 'Mixer Seal Replacement', category: 'Mixers' },
  { src: '/gallery/photo-14.jpg', caption: 'Sluice Gate Installation', category: 'Baffles' },
  { src: '/gallery/photo-15.jpg', caption: 'New Equipment Supply', category: 'Blowers' },
  { src: '/gallery/photo-16.jpg', caption: 'Sandblast & Recoat', category: 'Fabrication' },
  { src: '/gallery/photo-17.jpg', caption: 'Belt-to-Direct-Drive Conversion', category: 'Blowers' },
  { src: '/gallery/photo-18.jpg', caption: 'Queen Creek Fabrication Shop', category: 'Fabrication' },
  { src: '/gallery/photo-19.jpg', caption: 'Emergency Call-Out Response', category: 'Field Crew' },
];

function GalleryTile({ src, caption }) {
  const [broken, setBroken] = useState(false);

  return (
    <div className="relative aspect-square overflow-hidden bg-ink-soft group">
      {!broken && (
        <img
          src={src}
          alt={caption}
          onError={() => setBroken(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {broken && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-ink-line/60">
          <IconGearSun className="text-ink-line" width={28} height={28} />
          <span className="text-graphite text-[10px] tracking-[0.08em] uppercase text-center px-3">
            Photo Coming Soon
          </span>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-3 pt-8 pb-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-cream text-[12px] font-semibold normal-case">{caption}</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All' ? PHOTOS : PHOTOS.filter((p) => p.category === activeFilter);

  return (
    <div>
      <div className="mb-8 max-w-xs">
        <label className="block text-copper-light text-[11px] font-bold uppercase tracking-[0.08em] mb-2">
          Filter By Category
        </label>
        <div className="relative">
          <select
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            className="w-full bg-ink-soft border border-ink-line px-4 py-3 pr-10 text-cream text-[13px] font-semibold uppercase tracking-[0.04em] focus:outline-none focus:border-copper appearance-none cursor-pointer"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-copper-light"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-graphite text-[14px] normal-case">No photos in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((photo, i) => (
            <GalleryTile key={i} src={photo.src} caption={photo.caption} />
          ))}
        </div>
      )}
    </div>
  );
}
