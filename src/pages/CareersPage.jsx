import { Link } from 'react-router-dom';
import { IconHandshake, IconStar, IconCompass } from '../components/Icons';
import jobs from '../data/jobs';
import ContactCTA from '../components/ContactCTA';

const HIGHLIGHTS = [
  {
    icon: IconHandshake,
    title: 'Ownership Culture',
    description: 'Every tradesman takes ownership of the job. Real accountability required.',
  },
  {
    icon: IconStar,
    title: 'Real Craftsmanship',
    description: 'Work that matters, built to spec, with a team that takes pride in doing it right the first time.',
  },
  {
    icon: IconCompass,
    title: 'Room to Grow',
    description: 'From apprentice to skilled tradesman — we invest in developing talent from the ground up.',
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-ink py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Join The Team
            </span>
          </div>
          <h1 className="text-cream text-4xl md:text-5xl leading-[1.02] max-w-2xl">
            Careers at Copperstate
          </h1>
          <p className="mt-5 text-graphite text-[15px] leading-relaxed normal-case max-w-xl">
            Copperstate started with a father, a son, a truck, and a dream. Today we&rsquo;re
            growing our team of skilled tradesmen and field professionals who take pride in
            doing the job right — and want to build a career doing it.
          </p>

          <div className="mt-14 grid sm:grid-cols-3 gap-px bg-ink-line/40 border border-ink-line/40">
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-ink-soft p-7">
                  <Icon className="text-copper-light mb-5" />
                  <h3 className="font-display text-cream text-base leading-tight">{item.title}</h3>
                  <p className="mt-2.5 text-graphite text-[13.5px] leading-relaxed normal-case">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Open Positions
            </span>
          </div>

          <div className="grid gap-px bg-ink-line/40 border border-ink-line/40">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                to={`/careers/jobs/${job.slug}`}
                className="bg-ink-soft p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-ink transition-colors group"
              >
                <div>
                  <h3 className="font-display text-cream text-lg leading-tight group-hover:text-copper-light transition-colors">
                    {job.title}
                  </h3>
                  <p className="mt-1.5 text-copper-light text-[13px] font-semibold normal-case">
                    {job.pay}
                  </p>
                  <p className="mt-2 text-graphite text-[13.5px] leading-relaxed normal-case max-w-xl">
                    {job.summary}
                  </p>
                </div>
                <span className="shrink-0 text-copper-light text-[12px] font-bold uppercase tracking-[0.08em] whitespace-nowrap">
                  View Details &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 bg-ink-soft border border-ink-line p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display text-cream text-2xl">Apprentice Program</h2>
              <p className="mt-2 text-graphite text-[14px] leading-relaxed normal-case max-w-md">
                New to the trade? Our Apprentice Program trains you hands-on in the field.
                Strong willingness to learn required.
              </p>
            </div>
            <Link
              to="/careers/apprentice-program"
              className="inline-flex items-center px-6 py-3.5 bg-copper-grad text-ink text-[13px] font-bold tracking-[0.08em] uppercase hover:brightness-110 transition shrink-0"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
