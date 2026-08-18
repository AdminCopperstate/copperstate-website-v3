import { Link, useParams, Navigate } from 'react-router-dom';
import equipmentCategories from '../data/equipmentCategories';
import ContactCTA from '../components/ContactCTA';

export default function EquipmentDetailPage() {
  const { slug } = useParams();
  const item = equipmentCategories.find((c) => c.slug === slug);

  if (!item) return <Navigate to="/equipment" replace />;

  return (
    <>
      <section className="bg-ink py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Link
            to="/equipment"
            className="text-copper-light text-[12px] font-bold tracking-[0.1em] uppercase hover:text-cream transition"
          >
            &larr; Back to Equipment
          </Link>

          <div className="flex items-center gap-3 mt-6 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Equipment We Serve
            </span>
          </div>
          <h1 className="text-cream text-3xl md:text-5xl leading-[1.05] max-w-2xl">
            {item.title}
          </h1>
          <p className="mt-5 text-graphite text-[15px] leading-relaxed normal-case max-w-xl">
            {item.description}
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-3">
            {item.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 bg-ink-soft border border-ink-line p-5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                <span className="text-cream text-[14px] leading-relaxed normal-case">{h}</span>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-ink-soft border border-ink-line p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display text-cream text-2xl">Need this serviced?</h2>
              <p className="mt-2 text-graphite text-[14px] leading-relaxed normal-case max-w-md">
                Reach out and let us know what you&rsquo;re working with — we&rsquo;ll take it
                from there.
              </p>
            </div>
            <a
              href={`mailto:donny.oakes@copperstatemachine.com?subject=${encodeURIComponent(`Service Request: ${item.title}`)}`}
              className="inline-flex items-center px-6 py-3.5 bg-copper-grad text-ink text-[13px] font-bold tracking-[0.08em] uppercase hover:brightness-110 transition shrink-0"
            >
              Request Service
            </a>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
