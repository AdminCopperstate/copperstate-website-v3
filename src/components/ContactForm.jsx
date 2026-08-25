import { useState } from 'react';

export const CONTACT_WEB3FORMS_ACCESS_KEY = '860e5070-679b-4604-9836-904d379187c8';
export const CONTACT_EMAIL = 'admin@copperstatemachine.com';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const keyConfigured = CONTACT_WEB3FORMS_ACCESS_KEY !== 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!keyConfigured) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    const formData = new FormData();
    formData.append('access_key', CONTACT_WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `Website Contact Form - ${name}`);
    formData.append('from_name', name);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-ink-soft border border-ink-line p-8 md:p-10 text-center">
        <h2 className="font-display text-cream text-2xl">Message Sent</h2>
        <p className="mt-2 text-graphite text-[14px] leading-relaxed normal-case max-w-md mx-auto">
          Thanks, {name || 'there'} — your message has been sent to our team. We&rsquo;ll be
          in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-ink-soft border border-ink-line p-8 md:p-10">
      <h2 className="font-display text-cream text-2xl">Send Us A Message</h2>
      <p className="mt-2 text-graphite text-[14px] leading-relaxed normal-case max-w-lg">
        Tell us what you&rsquo;re working with — this goes straight to our team.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4 max-w-2xl">
        <input
          type="text"
          required
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-ink border border-ink-line px-4 py-3 text-cream text-[14px] placeholder:text-graphite focus:outline-none focus:border-copper"
        />
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-ink border border-ink-line px-4 py-3 text-cream text-[14px] placeholder:text-graphite focus:outline-none focus:border-copper"
        />
        <input
          type="tel"
          placeholder="Phone (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-ink border border-ink-line px-4 py-3 text-cream text-[14px] placeholder:text-graphite focus:outline-none focus:border-copper sm:col-span-2"
        />
        <textarea
          required
          placeholder="What can we help you with?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="bg-ink border border-ink-line px-4 py-3 text-cream text-[14px] placeholder:text-graphite focus:outline-none focus:border-copper sm:col-span-2 resize-none"
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3.5 bg-copper-grad text-ink text-[13px] font-bold tracking-[0.08em] uppercase hover:brightness-110 transition disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
      </form>

      {status === 'error' && (
        <p className="mt-4 text-copper-light text-[12.5px] normal-case">
          {keyConfigured
            ? `Something went wrong sending your message. Please try again, or email us directly at ${CONTACT_EMAIL}.`
            : 'Form isn’t connected yet — an access key still needs to be added in the code (see comment above CONTACT_WEB3FORMS_ACCESS_KEY in ContactForm.jsx).'}
        </p>
      )}
    </div>
  );
}
