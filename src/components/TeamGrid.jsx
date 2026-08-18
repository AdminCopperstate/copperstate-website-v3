import { useState } from 'react';
import { IconUser } from './Icons';
import team from '../data/team';

function TeamPhoto({ src, name }) {
  const [broken, setBroken] = useState(false);

  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-ink-line/10">
      {!broken && (
        <img
          src={src}
          alt={name}
          onError={() => setBroken(true)}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      )}
      {broken && (
        <div className="absolute inset-0 flex items-center justify-center border border-ink-line/40">
          <IconUser className="text-ink-line" width={40} height={40} />
        </div>
      )}
    </div>
  );
}

export default function TeamGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {team.map((member, i) => (
        <div key={i} className="bg-ink-soft border border-ink-line">
          <TeamPhoto src={member.photo} name={member.name} />
          <div className="p-5">
            <h3 className="font-display text-cream text-base leading-tight">{member.name}</h3>
            <p className="mt-1 text-copper-light text-[12px] font-semibold uppercase tracking-[0.04em]">
              {member.title}
            </p>
            <p className="mt-2.5 text-graphite text-[13px] leading-relaxed normal-case">
              {member.bio}
            </p>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="mt-3 inline-block text-copper-light text-[12px] font-semibold normal-case hover:text-cream transition"
              >
                {member.email}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
