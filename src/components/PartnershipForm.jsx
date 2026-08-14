import { useState } from 'react';

// This needs its OWN Web3Forms access key (separate from the careers/resume one),
// created with Kyle.Flannery@copperstatemachine.com as the verified destination email.
// Go to https://web3forms.com, sign up (or add a form) using his email, then paste
// the key it gives you below. Until then, submissions won't actually send.
export const PARTNERSHIPS_WEB3FORMS_ACCESS_KEY = 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE';
export const PARTNERSHIPS_EMAIL = 'Kyle.Flannery@copperstatemachine.com';

const PARTNER_TYPES = [
  'OEM',
  'Municipality & Utility',
  'Consulting Engineering Firm',
  'General Contractor',
  'Facility Management Team',
  'Other',
];

export default function PartnershipForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [partnerType, setPartnerType] = useState(PARTNER_TYPES[0]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const keyConfigured = PARTNERSHIPS_WEB3FORMS_ACCESS_KEY !== 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!keyConfigured) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    const formData = new FormData();
    formData.append('access_key', PARTNERSHIPS_WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `Partnership Inquiry - ${company || name}`);
    formData.append('from_name', name);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('company', company);
    formData.append('partner_type', partnerType);
    formData.append(
      'message',
      `Partner Type: ${partnerType}\nCompany: ${company}\n\n${message}`
    );

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
        setCompany('');
        setPartnerType(PARTNER_TYPES[0]);
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
          Thanks, {name || 'there'} — your message has been sent to our partnerships team.
          We&rsquo;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-ink-soft border border-ink-line p-8 md:p-10">
      <h2 className="font-display text-cream text-2xl">Start The Conversation</h2>
      <p className="mt-2 text-graphite text-[14px] leading-relaxed normal-case max-w-lg">
        Tell us a bit about your organization and what you&rsquo;re looking for — this goes
        straight to our partnerships team.
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
          type="text"
          required
          placeholder="Company / Organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="bg-ink border border-ink-line px-4 py-3 text-cream text-[14px] placeholder:text-graphite focus:outline-none focus:border-copper sm:col-span-2"
        />
        <select
          value={partnerType}
          onChange={(e) => setPartnerType(e.target.value)}
          className="bg-ink border border-ink-line px-4 py-3 text-cream text-[14px] focus:outline-none focus:border-copper sm:col-span-2"
        >
          {PARTNER_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <textarea
          placeholder="Tell us about your organization and what you're looking for..."
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
          {status === 'sending' ? 'Sending…' : 'Start The Conversation'}
        </button>
      </form>

      {status === 'error' && (
        <p className="mt-4 text-copper-light text-[12.5px] normal-case">
          {keyConfigured
            ? `Something went wrong sending your message. Please try again, or email us directly at ${PARTNERSHIPS_EMAIL}.`
            : 'Form isn\u2019t connected yet \u2014 an access key still needs to be added in the code (see comment above PARTNERSHIPS_WEB3FORMS_ACCESS_KEY in PartnershipForm.jsx).'}
        </p>
      )}
    </div>
  );
}
