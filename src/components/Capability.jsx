const BULLETS = [
  'Quick emergency response and mobilization times',
  'Expert installation, repair, maintenance, and mechanical restoration',
  'Equipment expertise',
  'Precision quality control, testing, and commissioning',
  'Complete project documentation and as-built reporting',
  'Safety-focused field technicians',
  'Maximize equipment life',
  'Committed to minimizing downtime and restoring peak performance',
];

const STATS = [
  { value: '100%', label: 'Of Clients Have Been Promoters' },
  { value: 'USA', label: 'Serving Our Country Nationwide' },
  { value: '24 Hour', label: 'We Respond To Emergency Calls Same Day' },
  { value: '100%', label: 'Commitment To Safety' },
];

export default function Capability() {
  return (
    <section className="bg-ink py-20 md:py-28 border-t border-ink-line">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Our Reach
            </span>
          </div>
          <h2 className="text-cream text-4xl md:text-5xl leading-[1.02]">
            Nationwide Field Capability
          </h2>
          <p className="mt-5 text-graphite text-[15px] leading-relaxed normal-case max-w-md">
            From emergency repairs to complete mechanical restorations, Copperstate delivers
            expert field services that keep wastewater treatment facilities operating safely,
            efficiently, and at peak performance. Our experienced crews mobilize nationwide,
            providing reliable solutions for municipal, and industrial facilities.
          </p>
          <ul className="mt-7 space-y-3">
            {BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-cream/90 text-[14px] normal-case">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-px bg-ink-line/40 border border-ink-line/40">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-ink-soft p-7">
              <div className="text-copper-light font-display text-4xl md:text-[42px] leading-none">
                {stat.value}
              </div>
              <div className="mt-2.5 text-graphite text-[11px] tracking-[0.08em] uppercase normal-case leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
