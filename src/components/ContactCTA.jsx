import { IconPhone, IconMail, IconPin } from './Icons';

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-copper-grad py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <h2 className="text-ink text-4xl md:text-5xl leading-[1.02] max-w-xl">
          Let&rsquo;s Talk
          <br />
          <span className="text-ink/60">About Your</span>
          <br />
          Equipment.
        </h2>

        <ul className="space-y-3 shrink-0">
          <li className="flex items-center gap-2.5 text-ink font-semibold text-[15px] normal-case">
            <IconPhone width={18} height={18} strokeWidth={2} />
            (555) 123-4567
          </li>
          <li className="flex items-center gap-2.5 text-ink font-semibold text-[15px] normal-case">
            <IconMail width={18} height={18} strokeWidth={2} />
            info@copperstatemachine.com
          </li>
          <li className="flex items-center gap-2.5 text-ink font-semibold text-[15px] normal-case">
            <IconPin width={18} height={18} strokeWidth={2} />
            Queen Creek, AZ
          </li>
        </ul>
      </div>
    </section>
  );
}
