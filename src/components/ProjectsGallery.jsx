import { useState } from 'react';
import { IconGearSun } from './Icons';
import projects from '../data/projects';

function ProjectPhoto({ src, title }) {
  const [broken, setBroken] = useState(false);

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-ink-line/10">
      {!broken && (
        <img
          src={src}
          alt={title}
          onError={() => setBroken(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {broken && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-ink-line/40">
          <IconGearSun className="text-ink-line" width={28} height={28} />
          <span className="text-graphite text-[10px] tracking-[0.08em] uppercase text-center px-3">
            Photo Coming Soon
          </span>
        </div>
      )}
    </div>
  );
}

export default function ProjectsGallery() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <div key={i} className="bg-ink-soft border border-ink-line">
          <ProjectPhoto src={project.photo} title={project.title} />
          <div className="p-6">
            <span className="text-copper-light text-[11px] font-bold uppercase tracking-[0.08em]">
              {project.category}
            </span>
            <h3 className="mt-2 font-display text-cream text-lg leading-tight">{project.title}</h3>
            <p className="mt-1 text-graphite text-[12.5px] normal-case">{project.location}</p>
            <p className="mt-3 text-graphite text-[13.5px] leading-relaxed normal-case">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
