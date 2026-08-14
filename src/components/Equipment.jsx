import { Link } from 'react-router-dom';
import equipmentCategories from '../data/equipmentCategories';

export default function Equipment() {
  return (
    <section id="equipment" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-copper" />
          <span className="text-copper-dark text-[12px] font-bold tracking-[0.18em] uppercase">
            Equipment We Serve
          </span>
        </div>
        <h2 className="text-ink text-4xl md:text-5xl leading-[1.02] max-w-2xl">
          Main Categories
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-line/20">
          {equipmentCategories.map((cat) => (
            <Link
              to={`/equipment/${cat.slug}`}
              key={cat.num}
              className={`p-6 pb-8 flex flex-col min-h-[220px] group hover:bg-ink-soft transition-colors ${
                cat.featured ? 'bg-ink-soft border-b-2 border-b-copper' : 'bg-ink'
              }`}
            >
              <span className="text-copper-light font-display text-sm">{cat.num}</span>
              <h3 className="mt-6 font-display text-cream text-xl leading-tight group-hover:text-copper-light transition-colors">
                {cat.title}
              </h3>
              <p className="mt-3 text-graphite text-[13.5px] leading-relaxed normal-case flex-1">
                {cat.summary}
              </p>
              <span className="mt-4 text-copper-light text-[11px] font-bold uppercase tracking-[0.08em]">
                View Details &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
