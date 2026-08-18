import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-ink-line/15 py-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Copperstate Machine & Industrial Service" className="h-7 w-auto" />
        <p className="text-slate text-[12px] normal-case">
          &copy; {new Date().getFullYear()} Copperstate Machine &amp; Industrial Service, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
