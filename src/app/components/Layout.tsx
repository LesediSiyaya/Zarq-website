import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X, Instagram, ChevronUp } from 'lucide-react';
import { contact, coreMessage } from './zarq/content';
import { sendToInbox } from './zarq/web3forms';

const navLinks = [
  { path: '/digital', label: 'Zarq Digital' },
  { path: '/programmes', label: 'Programmes' },
  { path: '/about', label: 'About' },
  { path: '/get-involved', label: 'Get Involved' },
];

const quoteLink = '/contact?interest=digital';

const footerGroups = [
  {
    title: 'Zarq Digital',
    links: [
      { to: '/digital#services', label: 'Services' },
      { to: '/digital#pricing', label: 'Pricing' },
      { to: '/digital#process', label: 'How we work' },
      { to: '/digital#client-faq', label: 'Client FAQ' },
      { to: quoteLink, label: 'Get a quote' },
    ],
  },
  {
    title: 'Programmes',
    links: [
      { to: '/programmes#academy', label: 'Zarq Academy' },
      { to: '/programmes#tracks', label: 'Juniors, Youth & Future' },
      { to: '/programmes#robotics', label: 'Robotics & STEM' },
      { to: '/programmes#labs', label: 'Zarq Labs' },
      { to: '/programmes#hub', label: 'Zarq Hub' },
    ],
  },
  {
    title: 'Zarq',
    links: [
      { to: '/about', label: 'About' },
      { to: '/about#impact', label: 'Our impact' },
      { to: '/get-involved', label: 'Get Involved' },
      { to: '/faq', label: 'FAQ' },
      { to: '/contact', label: 'Contact' },
    ],
  },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterState, setNewsletterState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  // Honeypot: hidden from people, so only spam bots fill it in.
  const [newsletterBot, setNewsletterBot] = useState(false);
  const [showConsent, setShowConsent] = useState(() => {
    try { return !localStorage.getItem('lesedi_popia_consent'); } catch { return true; }
  });
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  // Scroll to the anchor when a link targets one, otherwise start each page at the top.
  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50);
      return () => window.clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterState('sending');
    try {
      const sent = await sendToInbox({
        subject: `Updates sign-up – ${newsletterEmail}`,
        replyto: newsletterEmail,
        email: newsletterEmail,
        request: 'Please add me to the Zarq updates list.',
        page: location.pathname,
        botcheck: newsletterBot,
      });
      setNewsletterState(sent ? 'done' : 'error');
      if (sent) setNewsletterEmail('');
    } catch {
      setNewsletterState('error');
    }
  };

  const acceptConsent = () => {
    try { localStorage.setItem('lesedi_popia_consent', '1'); } catch {}
    setShowConsent(false);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const isActive = (path: string) => location.pathname.startsWith(path);

  const whatsappIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  const floatingBottom = showConsent ? 'bottom-28 sm:bottom-20' : 'bottom-6';

  return (
    <div className="min-h-screen bg-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:bg-white focus:rounded-lg focus:shadow">
        Skip to content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50" aria-label="Main">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-brand text-3xl tracking-tight text-gray-950 hover:opacity-70 transition-opacity" aria-label="Zarq home">
              ZARQ
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  aria-current={isActive(path) ? 'page' : undefined}
                  className={`relative text-sm transition-colors hover:text-gray-950 ${isActive(path) ? 'text-gray-950 font-medium' : 'text-gray-600'}`}
                >
                  {label}
                  {isActive(path) && <span className="absolute -bottom-[22px] left-0 w-full h-0.5 bg-[#ffc8dd]" aria-hidden="true" />}
                </Link>
              ))}
              <Link
                to={quoteLink}
                className="px-5 py-2 bg-gray-950 hover:bg-gray-800 text-white text-sm font-medium rounded-full transition-colors"
              >
                Get a quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -mr-2 touch-manipulation"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-3 border-t border-gray-100 space-y-1">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`block px-3 py-3 rounded-lg text-lg touch-manipulation ${
                    isActive(path) ? 'bg-stone-100 font-medium' : 'hover:bg-stone-50'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link to={quoteLink} className="block mt-2 px-3 py-3 rounded-lg bg-gray-950 text-white text-center font-medium">
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main" className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr] mb-12">
            <div>
              <Link to="/" className="font-brand text-4xl tracking-tight">ZARQ</Link>
              <p className="text-gray-600 text-sm leading-relaxed mt-4 max-w-sm">{coreMessage}</p>
              <div className="mt-6 space-y-2 text-sm">
                <a href={`mailto:${contact.email}`} className="block text-gray-700 hover:text-gray-950">{contact.email}</a>
                <a href={contact.phoneHref} className="block text-gray-700 hover:text-gray-950">{contact.phoneDisplay}</a>
                <p className="text-gray-500">Matatiele, Eastern Cape, South Africa</p>
                <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-950">
                  <Instagram className="w-4 h-4" aria-hidden="true" /> {contact.instagramHandle}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {footerGroups.map((g) => (
                <div key={g.title}>
                  <p className="font-spec text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">{g.title}</p>
                  <ul className="space-y-2.5 text-sm">
                    {g.links.map((l) => (
                      <li key={l.to}>
                        <Link to={l.to} className="text-gray-700 hover:text-gray-950 hover:underline underline-offset-4">{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Updates signup */}
          <div className="rounded-2xl bg-stone-50 border border-gray-200 p-6 flex flex-col md:flex-row md:items-center gap-5 mb-10">
            <div className="flex-1">
              <p className="font-medium mb-1">Stay in the loop</p>
              <p className="text-sm text-gray-600">Occasional updates on services, offers, programmes and partnerships.</p>
            </div>
            {newsletterState === 'done' ? (
              <p className="text-sm font-medium" role="status">✓ Thanks, you’re on the list.</p>
            ) : (
              <div className="w-full md:w-auto">
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  checked={newsletterBot}
                  onChange={(e) => setNewsletterBot(e.target.checked)}
                />
                <label htmlFor="updates-email" className="sr-only">Email address</label>
                <input
                  id="updates-email"
                  type="email"
                  required
                  placeholder="Your email address"
                  value={newsletterEmail}
                  disabled={newsletterState === 'sending'}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 md:w-64 px-4 py-2.5 rounded-full bg-white text-sm border border-gray-300 focus:outline-none focus:border-gray-950"
                />
                <button
                  type="submit"
                  disabled={newsletterState === 'sending'}
                  className="px-5 py-2.5 bg-gray-950 hover:bg-gray-800 text-white text-sm font-medium rounded-full transition-colors flex-shrink-0 disabled:bg-gray-400"
                >
                  {newsletterState === 'sending' ? 'Sending…' : 'Subscribe'}
                </button>
              </form>
              {newsletterState === 'error' && (
                <p className="mt-2 text-sm text-red-700 md:max-w-sm" role="status">
                  Sorry, that didn’t go through. Please try again or email {contact.email}.
                </p>
              )}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Zarq. Rooted in Matatiele.</p>
            <Link to="/privacy" className="hover:text-gray-950">Privacy Policy</Link>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button — collapsed by default, tap to expand */}
      <div className={`fixed ${floatingBottom} right-4 sm:right-6 z-40 flex flex-col items-end gap-2 transition-all duration-300`}>
        {whatsappOpen && (
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-4 py-3 rounded-full shadow-lg transition-colors"
          >
            {whatsappIcon}
            <span>Chat on WhatsApp</span>
          </a>
        )}
        <button
          onClick={() => setWhatsappOpen(!whatsappOpen)}
          className="flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-lg transition-colors"
          aria-label={whatsappOpen ? 'Close WhatsApp option' : 'Open WhatsApp option'}
          aria-expanded={whatsappOpen}
        >
          {whatsappOpen ? <X className="w-5 h-5" /> : whatsappIcon}
        </button>
      </div>

      {/* POPIA Consent Banner — dismissible */}
      {showConsent && (
        <div className="fixed bottom-0 inset-x-0 z-50 bg-gray-950 text-white px-4 py-4 sm:py-3" role="region" aria-label="Privacy notice">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
            <p className="text-xs sm:text-sm text-gray-300 flex-1 leading-relaxed">
              We collect information you submit through our forms to respond to your enquiry, in line with South Africa's{' '}
              <span className="font-medium text-white">POPIA</span>. By continuing, you acknowledge our{' '}
              <Link to="/privacy" className="underline hover:text-white">Privacy Policy</Link>.
            </p>
            <button
              onClick={acceptConsent}
              className="px-5 py-2 bg-white hover:bg-gray-100 text-gray-950 text-xs sm:text-sm font-medium rounded-full transition-colors flex-shrink-0"
            >
              I understand
            </button>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed ${floatingBottom} left-4 sm:left-6 z-40 w-11 h-11 bg-white border border-gray-300 hover:border-gray-950 text-gray-950 rounded-full shadow-sm flex items-center justify-center transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
}
