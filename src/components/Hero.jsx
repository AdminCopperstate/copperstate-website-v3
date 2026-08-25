import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-end overflow-hidden bg-ink">
      <img
        src="/gallery/photo-11.jpg"
        alt="Field crew rigging equipment on-site"
        className="absolute inset-0 w-full h-full object-cover object-[50%_35%] opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />

      <div className="relative w-full px-5 md:px-8 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Queen Creek, AZ &middot; Nationwide Reach
            </span>
          </div>

          <h1 className="text-[13vw] leading-[0.92] md:text-[64px] lg:text-[92px] md:leading-[0.92] text-cream max-w-4xl">
            Where Service Becomes <span className="text-copper-light">Partnership.</span>
          </h1>

          <p className="mt-7 max-w-lg text-cream-dim text-[16px] leading-relaxed font-body normal-case">
            Wastewater treatment equipment repair, maintenance, and mechanical restoration
            &mdash; self-performed by crews who show up and finish what they start.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="mailto:donny.oakes@copperstatemachine.com?subject=Service%20Request"
              className="inline-flex items-center px-6 py-3.5 bg-copper-grad text-ink text-[13px] font-bold tracking-[0.08em] uppercase hover:brightness-110 transition"
            >
              Request Service
            </a>
            <Link
              to="/gallery"
              className="inline-flex items-center px-6 py-3.5 border border-cream/40 text-cream text-[13px] font-bold tracking-[0.08em] uppercase hover:border-copper hover:text-copper-light transition"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
