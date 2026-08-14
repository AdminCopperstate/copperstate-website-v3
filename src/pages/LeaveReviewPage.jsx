import ReviewForm from '../components/ReviewForm';
import ContactCTA from '../components/ContactCTA';

export default function LeaveReviewPage() {
  return (
    <>
      <section className="bg-ink py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="text-copper-light text-[12px] font-bold tracking-[0.18em] uppercase">
              Share Your Experience
            </span>
          </div>
          <h1 className="text-cream text-4xl md:text-5xl leading-[1.02] max-w-2xl">
            Leave A Review
          </h1>
          <p className="mt-5 text-graphite text-[15px] leading-relaxed normal-case max-w-xl">
            Worked with Copperstate? We&rsquo;d love to hear about it. Your review will be
            reviewed by our team before it&rsquo;s added to the site.
          </p>

          <div className="mt-12">
            <ReviewForm />
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
