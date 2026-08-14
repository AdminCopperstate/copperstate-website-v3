import { Link } from 'react-router-dom';
import { IconGearSun, IconMedal, IconUsers, IconClipboardCheck } from '../components/Icons';
import ApplicationForm from '../components/ApplicationForm';
import ContactCTA from '../components/ContactCTA';
import jobs from '../data/jobs';

const apprenticeJob = jobs.find((j) => j.slug === 'millwright-apprentice');

const PROGRAM_POINTS = [
  {
    icon: IconGearSun,
    title: 'Hands-On Training',
    description: 'Learn directly in the field — real equipment, real jobs, real mentorship from day one.',
  },
  {
    icon: IconUsers,
    title: 'Paired With Skilled Tradesmen',
    description: 'Every apprentice works alongside experienced technicians who teach the craft the right way.',
  },
  {
    icon: IconClipboardCheck,
    title: 'Structured Growth Path',
    description: 'Clear milestones from apprentice to journeyman to skilled tradesman, with pay that grows with you.',
  },
  {
    icon: IconMedal,
    title: 'Baseline Requirements',
    description: 'You need to have a valid driver\u2019s license, reliable transportation, and the ability to pass a background and drug screening.',
  },
];

export default function ApprenticeProgramPage() {
  return (
    <>
      <section className="bg-ink py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Link
            to="/careers"
            className="text-copper-light text-[12px] font-bold tracking-[0.1em] uppercase hover:text-cream transition"
          >
            &larr; Back to Careers
          </Link>

          <div className="flex items-center gap-3 mt-6 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Apprentice Program
            </span>
          </div>
          <h1 className="text-cream text-4xl md:text-5xl leading-[1.02] max-w-2xl">
            Learn The Trade. Build Your Career.
          </h1>
          <p className="mt-5 text-graphite text-[15px] leading-relaxed normal-case max-w-xl">
            Copperstate&rsquo;s Apprentice Program is how we grow our own skilled tradesmen —
            training motivated people in the field, not just the classroom. If you&rsquo;re
            willing to work hard and learn a real trade, we&rsquo;ll teach you everything else.
          </p>

          <p className="mt-5 text-copper-light text-lg leading-relaxed normal-case">
            We&rsquo;re proud to be partnered with{' '}
            <a
              href="https://www.nccer.org/craft-catalog/millwright/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cream transition"
            >
              NCCER
            </a>
            , the nationally accredited curriculum for the industrial trades. That means our
            apprentices aren&rsquo;t just learning on the job — they&rsquo;re working toward
            real, portable Millwright credentials recognized across the industry.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 gap-px bg-ink-line/40 border border-ink-line/40">
            {PROGRAM_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="bg-ink-soft p-7">
                  <Icon className="text-copper-light mb-5" />
                  <h3 className="font-display text-cream text-base leading-tight">{point.title}</h3>
                  <p className="mt-2.5 text-graphite text-[13.5px] leading-relaxed normal-case">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-14">
            <a
              href="https://www.nccer.org/craft-catalog/millwright/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-cream text-xl hover:text-copper-light transition inline-block"
            >
              NCCER Millwright Curriculum
            </a>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((level) => (
                <div key={level} className="aspect-[3/4] overflow-hidden border border-ink-line">
                  <img
                    src={`/nccer/millwright-level-${level}.png`}
                    alt={`NCCER Millwright Level ${level} Textbook`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {apprenticeJob && (
            <div className="mt-14 bg-ink-soft border border-ink-line p-8 md:p-10">
              <h2 className="font-display text-cream text-2xl">Minimum Requirements</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {apprenticeJob.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-graphite text-[13.5px] leading-relaxed normal-case">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/careers/jobs/millwright-apprentice"
                className="inline-flex items-center mt-6 text-copper-light text-[12px] font-bold uppercase tracking-[0.08em] hover:text-cream transition"
              >
                View Full Job Posting &rarr;
              </Link>
            </div>
          )}

          <ApplicationForm jobTitle="Apprentice Program" />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
