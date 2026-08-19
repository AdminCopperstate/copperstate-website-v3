import { useEffect, useRef, useState } from 'react';
import { IconShield, IconHandshake, IconStar, IconMedal, IconUsers, IconCompass } from './Icons';

const VALUES = [
  {
    icon: IconHandshake,
    title: 'Ownership',
    tagline: 'Own the job and the outcome.',
    description: "We take full responsibility for the work, the result, and the customer's experience. No excuses. No blame. We finish what we start and leave things better than we found them.",
  },
  {
    icon: IconStar,
    title: 'Craftsmanship',
    tagline: 'Do it right the first time. Every time.',
    description: 'Skill, precision, and attention to detail define our work. We take pride in solving problems the right way and delivering quality that lasts.',
  },
  {
    icon: IconMedal,
    title: 'Integrity',
    tagline: 'Honor your word. Always.',
    description: 'We do what we say and stand behind our work. Honesty, humility, and accountability build the trust our customers and teammates rely on.',
  },
  {
    icon: IconUsers,
    title: 'Relationships Matter',
    tagline: 'We are stronger together.',
    description: 'Great work is built on strong relationships. We respect our teammates, serve our customers well, and support one another to succeed as a team.',
  },
  {
    icon: IconCompass,
    title: 'Relentless Improvement',
    tagline: 'Get better every day. Develop your strengths.',
    description: 'Great craftsmen never stop learning. We grow our talents, knowledge, and skill so we can continually improve our work and ourselves.',
  },
];

export default function CoreValues() {
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-ink py-20 md:py-28 border-t border-ink-line">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-copper" />
          <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
            What We Stand On
          </span>
        </div>
        <h2 className="text-cream text-4xl md:text-5xl leading-[1.02] max-w-2xl">
          Core Values
        </h2>

        <div
          ref={gridRef}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ink-line/40 border border-ink-line/40"
        >
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`bg-ink-soft p-7 flex flex-col card-drop ${visible ? 'play' : ''}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <Icon className="text-copper-light mb-5" />
                <h3 className="font-display text-cream text-base leading-tight">{value.title}</h3>
                <p className="mt-1.5 text-copper-light text-[12.5px] italic normal-case">
                  {value.tagline}
                </p>
                <p className="mt-2.5 text-graphite text-[13.5px] leading-relaxed normal-case">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
