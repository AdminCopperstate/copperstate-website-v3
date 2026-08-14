import { useState, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Equipment', to: '/equipment' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'Strategic Partners', to: '/partners' },
];

const CAREERS_SUBMENU = [
  { label: 'Apprentice Program', to: '/careers/apprentice-program' },
];

function navLinkClass({ isActive }) {
  return `text-[13px] tracking-[0.12em] uppercase transition-colors ${
    isActive ? 'text-copper-dark' : 'text-slate hover:text-ink'
  }`;
}

function NavDropdown({ label, basePath, items }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const location = useLocation();
  const isActive = location.pathname.startsWith(basePath);

  const show = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <Link
        to={basePath}
        className={`flex items-center gap-1.5 text-[13px] tracking-[0.12em] uppercase transition-colors ${
          isActive ? 'text-copper-dark' : 'text-slate hover:text-ink'
        }`}
        onClick={() => setOpen(false)}
      >
        {label}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {open && (
        <div className="absolute top-full left-0 pt-3 min-w-[220px] max-h-[70vh]">
          <div className="bg-cream border border-ink-line/15 shadow-lg max-h-[60vh] overflow-y-auto">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-[12.5px] tracking-[0.06em] uppercase text-slate hover:text-ink hover:bg-ink/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileDropdown({ label, basePath, items, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          to={basePath}
          onClick={onNavigate}
          className="text-[13px] tracking-[0.12em] uppercase text-slate hover:text-ink"
        >
          {label}
        </Link>
        <button
          aria-label={`Toggle ${label} submenu`}
          onClick={() => setOpen((v) => !v)}
          className="text-slate p-1"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className={`transition-transform ${open ? 'rotate-180' : ''}`}
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="mt-3 pl-4 flex flex-col gap-3">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onNavigate}
              className="text-[12.5px] tracking-[0.06em] uppercase text-slate hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-ink-line/15">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="Copperstate Machine & Industrial Service" className="h-14 md:h-16 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
          <NavDropdown label="Careers" basePath="/careers" items={CAREERS_SUBMENU} />
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2.5 bg-copper-grad text-ink text-[13px] font-bold tracking-[0.08em] uppercase hover:brightness-110 transition"
          >
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-ink p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-line/15 bg-cream px-5 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              {link.label}
            </NavLink>
          ))}

          <MobileDropdown
            label="Careers"
            basePath="/careers"
            items={CAREERS_SUBMENU}
            onNavigate={() => setOpen(false)}
          />

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-5 py-3 bg-copper-grad text-ink text-[13px] font-bold tracking-[0.08em] uppercase"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
