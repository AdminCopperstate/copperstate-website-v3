const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconGearSun(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4.5" />
      {[...Array(8)].map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 12 + Math.cos(angle) * 7.2;
        const y1 = 12 + Math.sin(angle) * 7.2;
        const x2 = 12 + Math.cos(angle) * 10;
        const y2 = 12 + Math.sin(angle) * 10;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </svg>
  );
}

export function IconDriveLink(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="7" cy="17" r="3" />
      <circle cx="17" cy="7" r="3" />
      <line x1="9.1" y1="14.9" x2="14.9" y2="9.1" />
    </svg>
  );
}

export function IconCase(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="8" width="17" height="11" rx="1.5" />
      <path d="M8.5 8V6.5A1.5 1.5 0 0 1 10 5h4a1.5 1.5 0 0 1 1.5 1.5V8" />
      <line x1="3.5" y1="13" x2="20.5" y2="13" />
    </svg>
  );
}

export function IconStar(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5l2.5 5.4 5.9.7-4.4 4.1 1.2 5.9-5.2-2.9-5.2 2.9 1.2-5.9-4.4-4.1 5.9-.7z" />
    </svg>
  );
}

export function IconRenovate(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="9" width="16" height="11" rx="1" />
      <path d="M8 9V6a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function IconSupply(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

export function IconPhone(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 4.5h3l1.4 4-2 1.4a11 11 0 0 0 5.2 5.2l1.4-2 4 1.4v3a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 5 5.6a1.5 1.5 0 0 1 1.5-1.1z" />
    </svg>
  );
}

export function IconMail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4 6.5l8 6.5 8-6.5" />
    </svg>
  );
}

export function IconShield(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5l7 2.6v5.4c0 5-3 8.4-7 9.7-4-1.3-7-4.7-7-9.7V6.1z" />
      <path d="M8.8 12.2l2.2 2.2 4.2-4.4" />
    </svg>
  );
}

export function IconHandshake(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 12.5l4-3.2a2 2 0 0 1 2.5 0l1.7 1.4" />
      <path d="M21.5 12.5l-4-3.2a2 2 0 0 0-2.5 0l-4 3.2 2.3 2a1.7 1.7 0 0 0 2.3-.1" />
      <path d="M9.5 13.9l2.3 2a1.7 1.7 0 0 0 2.3-.1" />
      <path d="M6.5 9.3L4 11.4v3.4l3 2.6" />
      <path d="M17.5 9.3L20 11.4v3.4l-3 2.6" />
    </svg>
  );
}

export function IconCompass(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15 9l-2 5-4 1 2-5z" />
    </svg>
  );
}

export function IconMedal(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="14" r="5.5" />
      <path d="M9.5 9.2L7 3.5h3l2 4.3 2-4.3h3l-2.5 5.7" />
      <path d="M10.3 13.8l1.4 1.4 2.4-2.6" />
    </svg>
  );
}

export function IconUsers(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="8.5" cy="8.5" r="2.8" />
      <path d="M3.2 19c.6-3 2.6-4.8 5.3-4.8s4.7 1.8 5.3 4.8" />
      <circle cx="16.8" cy="9.2" r="2.3" />
      <path d="M14.8 14.6c2.2.2 4 1.8 4.5 4.4" />
    </svg>
  );
}

export function IconStarFill(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} {...props}>
      <path d="M12 2.5l3.09 6.26 6.91.7-5 4.87 1.18 6.87L12 17.77l-6.18 3.43L7 14.33l-5-4.87 6.91-.7z" />
    </svg>
  );
}

export function IconQuote(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={32} height={32} {...props}>
      <path d="M9.5 6.5C6 7.5 4 10 4 13.5c0 2.8 1.7 4.8 4 4.8 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.1-3-2.8-3-.2 0-.4 0-.6.1.2-1.8 1.6-3.2 3.3-3.8z" />
      <path d="M18.2 6.5c-3.5 1-5.5 3.5-5.5 7 0 2.8 1.7 4.8 4 4.8 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.1-3-2.8-3-.2 0-.4 0-.6.1.2-1.8 1.6-3.2 3.3-3.8z" />
    </svg>
  );
}

export function IconChevronLeft(props) {
  return (
    <svg {...base} {...props}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function IconChevronRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function IconClipboardCheck(props) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="4.5" width="14" height="16" rx="1.5" />
      <path d="M9 4.5V3.8A1.3 1.3 0 0 1 10.3 2.5h3.4A1.3 1.3 0 0 1 15 3.8v.7" />
      <path d="M8.5 13l2 2 4.5-4.8" />
    </svg>
  );
}

export function IconTriangle(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4l8.5 15H3.5z" />
    </svg>
  );
}

export function IconBuilding(props) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3.5" width="9" height="17" />
      <rect x="14" y="9" width="5" height="11.5" />
      <line x1="7.5" y1="7" x2="7.5" y2="7.01" />
      <line x1="11.5" y1="7" x2="11.5" y2="7.01" />
      <line x1="7.5" y1="11" x2="7.5" y2="11.01" />
      <line x1="11.5" y1="11" x2="11.5" y2="11.01" />
      <line x1="7.5" y1="15" x2="7.5" y2="15.01" />
      <line x1="11.5" y1="15" x2="11.5" y2="15.01" />
    </svg>
  );
}

export function IconUser(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8.2" r="3.5" />
      <path d="M5 20c.8-4 3.4-6.2 7-6.2s6.2 2.2 7 6.2" />
    </svg>
  );
}

export function IconPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s6.5-5.9 6.5-11a6.5 6.5 0 0 0-13 0C5.5 15.1 12 21 12 21z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}
