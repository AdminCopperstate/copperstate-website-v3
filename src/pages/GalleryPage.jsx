import { useState } from 'react';
import Gallery from '../components/Gallery';
import ProjectsGallery from '../components/ProjectsGallery';
import TeamGrid from '../components/TeamGrid';
import TeamPhotoCarousel from '../components/TeamPhotoCarousel';
import ContactCTA from '../components/ContactCTA';

const TABS = [
  { key: 'gallery', label: 'Photo Gallery' },
  { key: 'projects', label: 'Featured Projects' },
  { key: 'team', label: 'Meet The Team' },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('gallery');

  return (
    <>
      <section className="bg-ink py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Our Work
            </span>
          </div>
          <h1 className="text-cream text-4xl md:text-5xl leading-[1.02] max-w-2xl">
            Gallery
          </h1>
          <p className="mt-5 text-graphite text-[15px] leading-relaxed normal-case max-w-xl">
            A look at real jobs, real crews, and the real equipment we work on — from
            teardown to commissioning.
          </p>

          <div className="mt-10 flex flex-wrap gap-2 border-b border-ink-line pb-0">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-3 text-[13px] font-bold uppercase tracking-[0.06em] transition-colors border-b-2 -mb-px ${
                  activeTab === tab.key
                    ? 'text-copper-light border-copper'
                    : 'text-graphite border-transparent hover:text-cream'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-12">
            {activeTab === 'gallery' && <Gallery />}
            {activeTab === 'projects' && <ProjectsGallery />}
            {activeTab === 'team' && (
              <div className="space-y-14">
                <TeamGrid />
                <TeamPhotoCarousel />
              </div>
            )}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
