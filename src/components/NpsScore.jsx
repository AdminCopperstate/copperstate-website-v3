import { useEffect, useRef, useState } from 'react';

const BREAKDOWN = [
  { label: 'Promoters', sub: '(rated 9\u201310)', value: '100%' },
  { label: 'Passives', sub: '(rated 7\u20138)', value: '0%' },
  { label: 'Detractors', sub: '(rated 0\u20136)', value: '0%' },
];

const R = 80;
const CIRC = 2 * Math.PI * R;

export default function NpsScore() {
  const gaugeRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = gaugeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-ink py-20 md:py-28 border-t border-ink-line">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[auto_1fr] gap-14 items-center">
        {/* Gauge */}
        <div ref={gaugeRef} className="relative w-[220px] h-[220px] mx-auto shrink-0">
          <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
            <circle cx="100" cy="100" r={R} fill="none" stroke="#3a352c" strokeWidth="14" />
            <circle
              cx="100"
              cy="100"
              r={R}
              fill="none"
              stroke="#e17a1f"
              strokeWidth="14"
              strokeDasharray={CIRC}
              strokeDashoffset={visible ? 0 : CIRC}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`nps-pop font-display text-copper-light text-5xl leading-none ${visible ? 'play' : ''}`}>
              100
            </span>
            <span className="mt-2 text-graphite text-[10.5px] tracking-[0.1em] uppercase">
              NPS
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Client Satisfaction
            </span>
          </div>
          <h2 className="text-cream text-4xl md:text-5xl leading-[1.02] max-w-xl">
            100% Of Surveyed Clients Would Recommend Copperstate
          </h2>
          <p className="mt-5 text-graphite text-[15px] leading-relaxed normal-case max-w-lg">
            We track customer satisfaction with the Net Promoter Score (NPS) — the industry
            standard for measuring how likely customers are to recommend a company. Right now,
            100% of our respondents are Promoters, with zero Passives or Detractors.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-px bg-ink-line/40 border border-ink-line/40 max-w-lg">
            {BREAKDOWN.map((item) => (
              <div key={item.label} className="bg-ink-soft px-4 py-5 text-center">
                <div className="font-display text-copper-light text-2xl md:text-3xl leading-none">
                  {item.value}
                </div>
                <div className="mt-2 text-cream text-[11px] font-semibold uppercase tracking-[0.06em]">
                  {item.label}
                </div>
                <div className="text-graphite text-[10.5px] normal-case mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
