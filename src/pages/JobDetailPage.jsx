import { Link, useParams, Navigate } from 'react-router-dom';
import jobs from '../data/jobs';
import ApplicationForm from '../components/ApplicationForm';
import ContactCTA from '../components/ContactCTA';

function ListBlock({ title, items }) {
  if (!items?.length) return null;
  return (
    <div className="py-6 border-t border-ink-line first:border-t-0 first:pt-0">
      <h2 className="font-display text-cream text-lg tracking-tight">{title}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-graphite text-[14px] leading-relaxed normal-case">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function JobDetailPage() {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);

  if (!job) return <Navigate to="/careers" replace />;

  return (
    <>
      <section className="bg-ink py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Link
            to="/careers"
            className="text-copper-light text-[12px] font-bold tracking-[0.1em] uppercase hover:text-cream transition"
          >
            &larr; Back to Careers
          </Link>

          <div className="flex items-center gap-3 mt-6 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Open Position
            </span>
          </div>
          <h1 className="text-cream text-3xl md:text-5xl leading-[1.05] max-w-2xl">
            {job.title}
          </h1>
          <p className="mt-4 text-copper-light text-[15px] font-semibold normal-case">
            {job.pay}
          </p>
          <p className="mt-5 text-graphite text-[15px] leading-relaxed normal-case">
            {job.intro}
          </p>

          <div className="mt-12">
            <ListBlock title="Essential Duties" items={job.duties} />
            <ListBlock title="Team Lead Duties" items={job.teamLeadDuties} />
            <ListBlock title="Senior Field Leader Duties" items={job.sflDuties} />
            <ListBlock title="Requirements" items={job.requirements} />
            <ListBlock title="Physical Environment" items={job.physicalEnvironment} />
            <ListBlock title="Schedule" items={job.schedule} />
            <ListBlock title="Work Location" items={job.workLocation} />
            <ListBlock title="Education (Preferred)" items={job.education} />
            <ListBlock title="Preferred" items={job.preferred} />
          </div>

          <ApplicationForm jobTitle={job.title} />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
