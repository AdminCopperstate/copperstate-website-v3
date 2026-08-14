import { IconGearSun, IconDriveLink, IconCase, IconStar, IconShield, IconClipboardCheck } from './Icons';

const SERVICES = [
  {
    icon: IconGearSun,
    title: 'Inspection',
    description:
      'Thorough mechanical evaluation of rotating equipment, drives, structural steel, and process systems — with written findings and a clear repair plan.',
    tags: ['Drive Audit', 'Structural Review', 'Condition Report'],
  },
  {
    icon: IconDriveLink,
    title: 'Repairs',
    description:
      'Turnkey replacement. Full retrofit. Everything in between. We repair it right, start to finish.',
    tags: ['Turnkey', 'Retrofit', 'Fabrication', 'Engineered Solutions', 'Rebuild'],
  },
  {
    icon: IconCase,
    title: 'Installs',
    description:
      "We don't cut corners on installs. Our team has top-tier experience with skilled tradesmen.",
    tags: ['Installation', 'Quality Control', 'Safety'],
    featured: true,
  },
  {
    icon: IconStar,
    title: 'Preventative Maintenance',
    description:
      'Proactive service and detailed status reports that extend equipment life and prevent costly surprises.',
    tags: ['Proactive Service', 'Status Reports', 'Longevity'],
  },
  {
    icon: IconShield,
    title: 'Warranties',
    description:
      "We believe in our work. We stand by our team. That's why we back it with a warranty.",
    tags: ['Integrity', 'Craftsmanship', 'Relationships Matter'],
  },
  {
    icon: IconClipboardCheck,
    title: 'Quality Assurance',
    description:
      'Strong relationships are built on trust. That\u2019s why we document every job, with written findings and sign-offs. You will always know your facility is performing at its peak.',
    tags: ['Peak Performance', 'Precision', 'Reliability'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-copper" />
          <span className="text-copper-dark text-[12px] font-bold tracking-[0.18em] uppercase">
            What We Do
          </span>
        </div>
        <h2 className="text-ink text-4xl md:text-5xl leading-[1.02] max-w-2xl">
          Full-Scope Mechanical Services
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-line/20 border border-ink-line/20">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`bg-cream p-7 flex flex-col ${
                  service.featured ? 'border-t-2 border-t-copper' : ''
                }`}
              >
                <Icon className="text-copper mb-5" />
                <h3 className="font-display text-ink text-lg leading-tight mb-2.5">
                  {service.title}
                </h3>
                <p className="text-slate text-[14px] leading-relaxed normal-case flex-1">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10.5px] font-semibold tracking-[0.04em] uppercase text-slate bg-ink-line/10 border border-ink-line/20 px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
