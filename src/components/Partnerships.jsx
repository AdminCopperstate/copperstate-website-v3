import { IconSupply, IconCase, IconUsers, IconPin } from './Icons';

const PARTNERS = [
  {
    icon: IconSupply,
    title: 'OEM Manufacturers',
    description:
      'Direct experience across major equipment brands — troubleshooting, rebuilds, and installs that hold up to factory spec.',
  },
  {
    icon: IconCase,
    title: 'Parts & Equipment Vendors',
    description:
      'Working supply relationships that keep replacement parts and new equipment moving without delay on a tight schedule.',
  },
  {
    icon: IconUsers,
    title: 'Municipal Management Companies',
    description:
      'Embedded field support for the third-party operators who run water and wastewater plants on behalf of cities and counties.',
  },
  {
    icon: IconPin,
    title: 'Municipalities',
    description:
      'Direct contracts with city and county utility and public works departments — bid work, task orders, and emergency response.',
  },
];

export default function Partnerships() {
  return (
    <section className="bg-cream py-20 md:py-28 border-t border-ink-line/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-copper" />
          <span className="text-copper-dark text-[12px] font-bold tracking-[0.18em] uppercase">
            Who We Work With
          </span>
        </div>
        <h2 className="text-ink text-4xl md:text-5xl leading-[1.02] max-w-2xl">
          Trusted Across The Whole Chain
        </h2>
        <p className="mt-5 text-slate text-[15px] leading-relaxed normal-case max-w-xl">
          Water and wastewater equipment work rarely involves just one party. We&rsquo;ve built
          working relationships up and down the chain — from the manufacturer&rsquo;s spec sheet
          to the utility director&rsquo;s desk.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-line/20 border border-ink-line/20">
          {PARTNERS.map((partner) => {
            const Icon = partner.icon;
            return (
              <div key={partner.title} className="bg-cream p-7 flex flex-col">
                <Icon className="text-copper mb-5" />
                <h3 className="font-display text-ink text-base leading-tight">{partner.title}</h3>
                <p className="mt-2.5 text-slate text-[13.5px] leading-relaxed normal-case flex-1">
                  {partner.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
