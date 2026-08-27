import StoryCarousel from './StoryCarousel';

const POINTS = [
  {
    title: 'Specialists, Not Generalists',
    description:
      "Wastewater treatment services isn't just part of what we do, it's our expertise. We understand the equipment, the challenges, and what it takes to keep critical infrastructure operating reliably.",
  },
  {
    title: 'Self-Performing Field Crews',
    description:
      'The people you hire are the people who do the work. Our crews take ownership from mobilization to final commissioning, ensuring accountability, consistency, and quality on every project.',
  },
  {
    title: 'Trusted Nationwide',
    description:
      "We've earned our reputation by delivering dependable craftsmanship, clear communication, and lasting results wherever our clients need us.",
  },
  {
    title: 'Quality Without Compromise',
    description:
      "Every repair, installation, and restoration is backed by rigorous quality control, testing, and commissioning because we believe the job isn't finished until it's done right.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-ink py-20 md:py-28 border-t border-ink-line">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[minmax(0,1fr)_1.4fr] gap-14">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Why Copperstate
            </span>
          </div>
          <h2 className="text-cream text-4xl md:text-5xl leading-[1.02]">
            Our Story
          </h2>
          <p className="mt-5 text-graphite text-[15px] leading-relaxed normal-case max-w-sm">
            Copperstate started with a father, a son, a truck, and a dream. Today,
            we&rsquo;ve grown into a trusted partner for wastewater facilities across the
            country, but one thing hasn&rsquo;t changed: relationships come first. By
            delivering quality work, standing behind every project, and treating every
            client like a long-term partner, we&rsquo;ve built a company founded on trust.
            That&rsquo;s how we got here, and it&rsquo;s how we&rsquo;ll continue to grow.
          </p>

          <div className="mt-8">
            <StoryCarousel />
          </div>
        </div>

        <div>
          <div className="mb-8 pb-8 border-b border-ink-line">
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              The Copperstate Difference
            </span>
            <p className="mt-2.5 text-cream text-[16px] leading-relaxed normal-case">
              Relationships built in the field. Trust earned on every job.
            </p>
          </div>

          <div className="divide-y divide-ink-line">
            {POINTS.map((point) => (
              <div key={point.title} className="py-6 first:pt-0">
                <h3 className="font-display text-cream text-lg tracking-tight">{point.title}</h3>
                <p className="mt-2 text-graphite text-[14px] leading-relaxed normal-case max-w-2xl">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
