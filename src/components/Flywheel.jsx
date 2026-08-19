import { useEffect, useRef, useState } from 'react';

const STAGES = [
  {
    num: '01',
    title: 'Inspect & Diagnose',
    description: 'Boots-on-the-ground assessment, written findings, and a clear repair plan.',
  },
  {
    num: '02',
    title: 'Repair & Rebuild',
    description: 'Efficient self-performing team that gets the job done right the first time.',
  },
  {
    num: '03',
    title: 'Install & Commission',
    description: 'Equipment installed, tested, commissioned, and verified for peak performance.',
  },
  {
    num: '04',
    title: 'Trust & Assurance',
    description: 'Reliable, high-quality service backed by warranties.',
  },
];

// Positions around a circle, starting at top (12 o'clock), clockwise.
const angles = [-90, 0, 90, 180];
const R = 168;
const CENTER = 200;

function pointOn(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER + R * Math.cos(rad),
    y: CENTER + R * Math.sin(rad),
  };
}

export default function Flywheel() {
  const diagramRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = diagramRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-cream py-20 md:py-28 border-t border-ink-line/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-copper" />
          <span className="text-copper-dark text-[12px] font-bold tracking-[0.18em] uppercase">
            How We Work
          </span>
        </div>
        <h2 className="text-ink text-4xl md:text-5xl leading-[1.02] max-w-2xl">
          Every Job Builds The Next
        </h2>
        <p className="mt-5 text-slate text-[15px] leading-relaxed normal-case max-w-xl">
          At Copperstate, we&rsquo;re in the business of building lasting relationships. We take
          pride in delivering exceptional craftsmanship, honest communication, and dependable
          service on every project. When you work with us, you&rsquo;re not just another job, you
          become part of the Copperstate family. That&rsquo;s why our clients come back and
          confidently refer us to others.
        </p>

        <div className="mt-16 grid lg:grid-cols-[440px_1fr] gap-12 items-center">
          {/* Diagram */}
          <div ref={diagramRef} className="relative mx-auto w-full max-w-[440px] aspect-square">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle
                cx={CENTER}
                cy={CENTER}
                r={R}
                fill="none"
                stroke="#3a352c"
                strokeOpacity="0.15"
                strokeWidth="1.5"
                strokeDasharray="2 8"
                strokeLinecap="round"
              />
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M1 1l7 4-7 4z" fill="#e17a1f" />
                </marker>
              </defs>
              {angles.map((a, i) => {
                const start = pointOn(a + 18);
                const end = pointOn(a + 90 - 18);
                const large = 0;
                return (
                  <path
                    key={i}
                    className="flow-arrow"
                    d={`M ${start.x} ${start.y} A ${R} ${R} 0 ${large} 1 ${end.x} ${end.y}`}
                    fill="none"
                    stroke="#e17a1f"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                    opacity="0.85"
                  />
                );
              })}
              <g className={`hub-fade ${visible ? 'play' : ''}`} style={{ animationDelay: '500ms' }}>
                <circle cx={CENTER} cy={CENTER} r="72" fill="#17140f" />
                <text
                  x={CENTER}
                  y={CENTER - 8}
                  textAnchor="middle"
                  className="fill-cream"
                  style={{ font: '700 14px "Anton", sans-serif', textTransform: 'uppercase', letterSpacing: '0.03em' }}
                >
                  Trust &amp;
                </text>
                <text
                  x={CENTER}
                  y={CENTER + 14}
                  textAnchor="middle"
                  className="fill-copper-light"
                  style={{ font: '700 14px "Anton", sans-serif', textTransform: 'uppercase', letterSpacing: '0.03em' }}
                >
                  Repeat
                </text>
              </g>

              {angles.map((a, i) => {
                const p = pointOn(a);
                return (
                  <g
                    key={i}
                    className={`node-pop ${visible ? 'play' : ''}`}
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <circle cx={p.x} cy={p.y} r="26" fill="#f2ede3" stroke="#e17a1f" strokeWidth="2" />
                    <text
                      x={p.x}
                      y={p.y + 6}
                      textAnchor="middle"
                      className="fill-[#b85412]"
                      style={{ font: '700 16px "Anton", sans-serif' }}
                    >
                      {STAGES[i].num}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Stage list */}
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {STAGES.map((stage) => (
              <li key={stage.num} className="flex gap-4">
                <span className="font-display text-copper text-xl shrink-0 leading-none pt-0.5">
                  {stage.num}
                </span>
                <div>
                  <h3 className="font-display text-ink text-base leading-tight">{stage.title}</h3>
                  <p className="mt-1.5 text-slate text-[13.5px] leading-relaxed normal-case">
                    {stage.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
