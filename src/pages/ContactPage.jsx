import ContactCTA from '../components/ContactCTA';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <ContactCTA />
      <section className="bg-ink py-20 md:py-28 border-t border-ink-line">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
