export default function ServiceMap() {
  return (
    <section className="bg-ink py-20 md:py-28 border-t border-ink-line">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-copper" />
          <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
            Nationwide Reach
          </span>
        </div>
        <h2 className="text-cream text-4xl md:text-5xl leading-[1.02] max-w-2xl">
          Wherever The Plant Is, We Can Get There.
        </h2>
        <p className="mt-5 text-graphite text-[15px] leading-relaxed normal-case max-w-2xl">
          We&rsquo;ve mapped every water and wastewater facility in the country, so wherever
          your equipment is, our crews already know how to get there fast.
        </p>

        <div className="mt-12">
          <img
            src="/service-map.png"
            alt="Map of water and wastewater treatment plants across the United States"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
