import { Link } from 'react-router-dom';

const STATS = [
  { value: '#1', label: 'Water Restoration Specialists' },
  { value: 'USA', label: 'Serving All Over The Country' },
  { value: '100%', label: 'Dedicated To Client Satisfaction' },
];

export default function Hero() {
  return (
    <section id="top" className="relative bg-ink bg-hero-glow overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_auto] gap-12 items-end">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Wastewater Specialists
            </span>
          </div>

          <h1 className="text-[13vw] leading-[0.95] md:text-[64px] lg:text-[76px] md:leading-[0.95] text-cream">
            Where Service
            <br />
            Becomes
            <br />
            <span className="text-copper-light">Partnerships.</span>
            <br />
            Boots On The
            <br />
            Ground.
          </h1>

          <p className="mt-6 max-w-lg text-graphite text-[15px] leading-relaxed font-body normal-case">
            At Copperstate Machine &amp; Industrial Service, we pride ourselves on delivering
            the highest quality wastewater treatment equipment repair, maintenance,
            inspections, installations, and mechanical restoration. Our commitment to
            excellence keeps your facilities operating at peak performance nationwide.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3.5 bg-copper-grad text-ink text-[13px] font-bold tracking-[0.08em] uppercase hover:brightness-110 transition"
            >
              Request Service
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3.5 border border-ink-line text-cream text-[13px] font-bold tracking-[0.08em] uppercase hover:border-copper hover:text-copper-light transition"
            >
              What We Do
            </Link>
          </div>
        </div>

        <dl className="flex md:flex-col gap-6 md:gap-5 md:text-right shrink-0">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-copper-light font-display text-4xl md:text-5xl leading-none">
                {stat.value}
              </dd>
              <dd className="text-graphite text-[11px] tracking-[0.1em] uppercase mt-1.5 normal-case">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
