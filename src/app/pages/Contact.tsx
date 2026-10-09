import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { useSEO } from '../components/useSEO';
import { PageHeader, Section, Eyebrow } from '../components/zarq/ui';
import { contact, interestGroups } from '../components/zarq/content';

const allInterests = interestGroups.flatMap((g) => g.options);

// Web3Forms delivers each enquiry to admin.zarq@gmail.com. The access key is public by design:
// it only allows sending submissions to that inbox.
const WEB3FORMS_ACCESS_KEY = 'd217695d-772d-4c9d-8e01-72119cb30bb5';

const fieldClass =
  'w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-base focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-[#ffc8dd] disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselected = allInterests.find((o) => o.key === searchParams.get('interest'))?.value ?? '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: preselected,
    message: '',
  });
  // Keep the selection in sync when a CTA links here while Contact is already open.
  useEffect(() => {
    if (preselected) setFormData((f) => ({ ...f, interest: preselected }));
  }, [preselected]);
  // Honeypot: hidden from people, so only spam bots fill it in.
  const [botcheck, setBotcheck] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `${formData.interest} – ${formData.name}`,
          from_name: 'Zarq website',
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not given',
          interest: formData.interest,
          message: formData.message || '(No message)',
          botcheck,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you. We’ve received your message and will be in touch.',
        });
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Sorry, your message could not be sent. Please try again, or email us directly.',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit form. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useSEO('/contact');

  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Start a conversation."
        intro="Whether you want to join, partner, support or work with Zarq, choose what your message is about so it reaches the right place."
      />

      <Section>
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-start">
          {/* Form */}
          <div className="rounded-2xl border border-gray-200 p-6 sm:p-8">
            {submitStatus && (
              <div
                role="status"
                className={`mb-6 p-4 rounded-xl text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                checked={botcheck}
                onChange={(e) => setBotcheck(e.target.checked)}
              />
              <div>
                <label htmlFor="interest" className="block mb-2 text-sm font-medium">What is this about? *</label>
                <select
                  id="interest"
                  required
                  disabled={isSubmitting}
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className={fieldClass}
                >
                  <option value="">Select an option</option>
                  {interestGroups.map((group) => (
                    <optgroup key={group.label} label={group.label}>
                      {group.options.map((o) => (
                        <option key={o.key} value={o.value}>{o.value}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Full name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    disabled={isSubmitting}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={fieldClass}
                    placeholder="+27"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email *</label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className={`${fieldClass} resize-y`}
                  placeholder="Tell us a little about yourself or what you need."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gray-950 hover:bg-gray-800 text-white font-medium transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>
              <p className="text-xs text-gray-500">
                We use your details only to respond to your enquiry. See our <a href="/privacy" className="underline">Privacy Policy</a>.
              </p>
            </form>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <Eyebrow>Direct contact</Eyebrow>
              <ul className="space-y-4">
                <li>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:underline underline-offset-4">
                    <Mail className="w-5 h-5 text-gray-500" aria-hidden="true" /> {contact.email}
                  </a>
                </li>
                <li>
                  <a href={contact.phoneHref} className="flex items-center gap-3 hover:underline underline-offset-4">
                    <Phone className="w-5 h-5 text-gray-500" aria-hidden="true" /> {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline underline-offset-4">
                    <Instagram className="w-5 h-5 text-gray-500" aria-hidden="true" /> {contact.instagramHandle}
                  </a>
                </li>
                <li>
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-medium transition-colors">
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-stone-50 border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-gray-500" aria-hidden="true" />
                <Eyebrow className="">Rooted in Matatiele</Eyebrow>
              </div>
              <address className="not-italic text-gray-700 leading-relaxed mb-4">
                {contact.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
              </address>
              <p className="text-sm text-gray-500 leading-relaxed">
                Zarq Digital works with clients online, wherever they are. Zarq Hub is coming to Matatiele, so for in-person meetings please get in touch first.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
