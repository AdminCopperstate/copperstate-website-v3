import { Link } from 'react-router-dom';
import { IconCase, IconShield, IconTriangle, IconBuilding, IconUser } from '../components/Icons';
import PartnershipForm from '../components/PartnershipForm';

const PARTNER_TYPES = [
  {
    icon: IconCase,
    title: 'OEMs',
    description: 'Extend your service reach nationally without building a regional team from scratch.',
  },
  {
    icon: IconShield,
    title: 'Municipalities & Utilities',
    description: 'A pre-qualified, responsive mechanical partner for emergency and planned work.',
  },
  {
    icon: IconTriangle,
    title: 'Consulting Engineering Firms',
    description: 'A contractor you can confidently spec into the bid, backed by real field experience.',
  },
  {
    icon: IconBuilding,
    title: 'General Contractors',
    description: 'Mechanical subcontractor capability for wastewater-specific scopes, done right the first time.',
  },
  {
    icon: IconUser,
    title: 'Facility Management Teams',
    description: 'One accountable team for inspections, PM, and emergency response — instead of managing multiple vendors.',
  },
];

const OUTCOMES = [
  { value: '$15M+', label: 'Service revenue generated over a 5-year OEM partnership' },
  { value: '$32M+', label: 'Parts sales driven through the same partnership' },
  { value: '2,000+', label: 'Facilities serviced nationwide' },
  { value: '300%', label: 'Growth in aftermarket product lines for a long-term OEM partner' },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink bg-hero-glow py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Strategic Partnerships
            </span>
          </div>
          <h1 className="text-cream text-4xl md:text-6xl leading-[1.0]">
            Partner With
            <br />
            <span className="text-copper-light">Copperstate.</span>
          </h1>
          <p className="mt-6 text-graphite text-[15px] leading-relaxed normal-case max-w-xl">
            Field service, rebuild capability, project-scale fabrication, and sales as a
            service — built to make your organization&rsquo;s job easier.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#start-conversation"
              className="inline-flex items-center px-6 py-3.5 bg-copper-grad text-ink text-[13px] font-bold tracking-[0.08em] uppercase hover:brightness-110 transition"
            >
              Start A Conversation
            </a>
            <a
              href="#who-we-partner-with"
              className="inline-flex items-center px-6 py-3.5 border border-ink-line text-cream text-[13px] font-bold tracking-[0.08em] uppercase hover:border-copper hover:text-copper-light transition"
            >
              Who We Partner With
            </a>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-dark text-[12px] font-bold tracking-[0.18em] uppercase">
              Why It Matters
            </span>
          </div>
          <h2 className="text-ink text-4xl md:text-5xl leading-[1.02]">
            One Partner You Can Rely On
          </h2>
          <p className="mt-5 text-slate text-[15px] leading-relaxed normal-case max-w-2xl">
            Wastewater infrastructure is aging faster than most organizations can keep up
            with on their own. Whether you manufacture the equipment, design the plant,
            manage the facility, or run the municipality, the same problem shows up: finding
            a mechanical partner who&rsquo;s actually good at this, shows up when they say
            they will, and doesn&rsquo;t need to be managed like a liability. That&rsquo;s
            what we built.
          </p>
        </div>
      </section>

      {/* Who we partner with */}
      <section id="who-we-partner-with" className="bg-ink py-20 md:py-28 border-t border-ink-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Who We Partner With
            </span>
          </div>
          <h2 className="text-cream text-4xl md:text-5xl leading-[1.02] max-w-2xl">
            Five Kinds Of Partners, One Standard
          </h2>

          <div className="mt-14 grid sm:grid-cols-2 gap-px bg-ink-line/40 border border-ink-line/40">
            {PARTNER_TYPES.map((partner) => {
              const Icon = partner.icon;
              return (
                <div key={partner.title} className="bg-ink-soft p-7">
                  <Icon className="text-copper-light mb-5" />
                  <h3 className="font-display text-cream text-lg leading-tight">{partner.title}</h3>
                  <p className="mt-2.5 text-graphite text-[13.5px] leading-relaxed normal-case">
                    {partner.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof it works */}
      <section className="bg-ink py-20 md:py-28 border-t border-ink-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Proof It Works
            </span>
          </div>
          <h2 className="text-cream text-4xl md:text-5xl leading-[1.02] max-w-2xl">
            Real Outcomes, Verified Results
          </h2>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-line/40 border border-ink-line/40">
            {OUTCOMES.map((item) => (
              <div key={item.label} className="bg-ink-soft p-7">
                <div className="text-copper-light font-display text-4xl leading-none">
                  {item.value}
                </div>
                <p className="mt-3 text-graphite text-[13px] leading-relaxed normal-case">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-dark text-[12px] font-bold tracking-[0.18em] uppercase">
              What Makes Us Different
            </span>
          </div>
          <h2 className="text-ink text-4xl md:text-5xl leading-[1.02]">
            The Technicians, Not A Call Center
          </h2>
          <p className="mt-5 text-slate text-[15px] leading-relaxed normal-case max-w-2xl">
            We don&rsquo;t dispatch subs — our own certified industrial mechanics perform
            every project. Full documentation, no surprises, no change orders. Whether
            you&rsquo;re an OEM extending your reach, a municipality that needs a partner it
            can trust, or a firm looking for a mechanical subcontractor who won&rsquo;t make
            a mess of the job — this is how we&rsquo;ve built every relationship we have.
          </p>
        </div>
      </section>

      {/* Let's talk teaser band */}
      <section className="bg-copper-grad py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="text-ink text-4xl md:text-5xl leading-[1.02] max-w-xl">
            Let&rsquo;s Talk
            <br />
            <span className="text-ink/60">About</span>
            <br />
            Partnering.
          </h2>
          <a
            href="#start-conversation"
            className="inline-flex items-center px-6 py-3.5 bg-ink text-cream text-[13px] font-bold tracking-[0.08em] uppercase hover:brightness-110 transition shrink-0"
          >
            Start The Conversation
          </a>
        </div>
      </section>

      {/* Actual form */}
      <section id="start-conversation" className="bg-ink py-20 md:py-28 border-t border-ink-line">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <PartnershipForm />
        </div>
      </section>
    </>
  );
}
