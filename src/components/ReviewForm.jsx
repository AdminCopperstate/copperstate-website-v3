import { useState } from 'react';
import { WEB3FORMS_ACCESS_KEY, CAREERS_EMAIL } from './ApplicationForm';

const RATINGS = [5, 4, 3, 2, 1];

export default function ReviewForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(5);
  const [location, setLocation] = useState('');
  const [review, setReview] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const keyConfigured = WEB3FORMS_ACCESS_KEY !== 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!keyConfigured) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `New Website Review Submission - ${name}`);
    formData.append('from_name', name);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('rating', `${rating} stars`);
    formData.append('job_location', location);
    formData.append('review_text', review);
    formData.append(
      'message',
      `New review submitted for approval.\n\nName: ${name}\nRating: ${rating}/5\nLocation: ${location}\n\nReview:\n${review}\n\nIf approved, add this line to src/data/reviews.txt:\n${name} | ${rating} | ${review.replace(/\n/g, ' ')} | ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
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
        setRating(5);
        setLocation('');
        setReview('');
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
        <h2 className="font-display text-cream text-2xl">Thank You!</h2>
        <p className="mt-2 text-graphite text-[14px] leading-relaxed normal-case max-w-md mx-auto">
          Your review has been submitted. Our team will review it and add it to the site
          shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-ink-soft border border-ink-line p-8 md:p-10">
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        <input
          type="text"
          required
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-ink border border-ink-line px-4 py-3 text-cream text-[14px] placeholder:text-graphite focus:outline-none focus:border-copper"
        />
        <input
          type="email"
          placeholder="Email (optional, in case we follow up)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-ink border border-ink-line px-4 py-3 text-cream text-[14px] placeholder:text-graphite focus:outline-none focus:border-copper"
        />
        <input
          type="text"
          placeholder="Job Location (city, state)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-ink border border-ink-line px-4 py-3 text-cream text-[14px] placeholder:text-graphite focus:outline-none focus:border-copper sm:col-span-2"
        />

        <div className="sm:col-span-2">
          <label className="block text-copper-light text-[11px] font-bold uppercase tracking-[0.08em] mb-2">
            Rating
          </label>
          <div className="flex gap-2">
            {RATINGS.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRating(r)}
                className={`px-4 py-2 text-[13px] font-semibold border transition ${
                  rating === r
                    ? 'bg-copper-grad text-ink border-transparent'
                    : 'bg-ink text-graphite border-ink-line hover:text-cream hover:border-copper'
                }`}
              >
                {r} {'\u2605'}
              </button>
            ))}
          </div>
        </div>

        <textarea
          required
          placeholder="Tell us about your experience working with Copperstate..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={5}
          className="bg-ink border border-ink-line px-4 py-3 text-cream text-[14px] placeholder:text-graphite focus:outline-none focus:border-copper sm:col-span-2 resize-none"
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3.5 bg-copper-grad text-ink text-[13px] font-bold tracking-[0.08em] uppercase hover:brightness-110 transition disabled:opacity-60"
        >
          {status === 'sending' ? 'Submitting\u2026' : 'Submit Review'}
        </button>
      </form>

      {status === 'error' && (
        <p className="mt-4 text-copper-light text-[12.5px] normal-case">
          {keyConfigured
            ? `Something went wrong submitting your review. Please try again, or email us directly at ${CAREERS_EMAIL}.`
            : 'Form isn\u2019t connected yet \u2014 an access key still needs to be added in the code (see comment above WEB3FORMS_ACCESS_KEY in ApplicationForm.jsx).'}
        </p>
      )}
    </div>
  );
}
