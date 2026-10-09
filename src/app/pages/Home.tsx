import { Link } from 'react-router';
import { ArrowRight, GraduationCap, Handshake, Briefcase, School } from 'lucide-react';
import { useSEO } from '../components/useSEO';
import Journey from '../components/zarq/Journey';
import {
  Section, SectionHeading, Container, Eyebrow, ButtonLink, TextLink, Card,
} from '../components/zarq/ui';
import { academy, ecosystem, tracks, journey, problemPoints, digitalServices, pricingNote } from '../components/zarq/content';

const audiencePaths = [
  { icon: GraduationCap, who: 'Young people & families', action: 'Explore Programmes', to: '/programmes' },
  { icon: School, who: 'Schools', action: 'Partner with Zarq', to: '/get-involved#schools' },
  { icon: Handshake, who: 'Funders & partners', action: 'Support Zarq', to: '/get-involved#partners' },
  { icon: Briefcase, who: 'Businesses & organisations', action: 'Work with Zarq', to: '/digital' },
];

const offers = [
  {
    who: 'For businesses & organisations',
    name: 'Zarq Digital',
    text: 'Websites, apps, UI/UX, branding, AI and automation, IT and cybersecurity, digital strategy, plus CIPC business registration and domain setup. Delivered online, anywhere in South Africa.',
    link: { to: '/digital', label: 'See services & pricing' },
    dark: true,
  },
  {
    who: 'For young people',
    name: 'Zarq programmes',
    text: 'Practical digital, AI and technology skills, real projects and mentorship, through Zarq Academy and our learner tracks.',
    link: { to: '/programmes', label: 'Explore programmes' },
    dark: false,
  },
];

const reasons = [
  { title: 'Practical and affordable.', text: 'Clear scopes, transparent prices and solutions you can actually use and maintain.' },
  { title: 'Qualified and hands-on.', text: 'Led by a BSc Information Technology graduate with business analysis experience, so we understand the business problem as well as the technology.' },
  { title: 'Purpose built in.', text: 'Revenue from every Zarq Digital project helps fund devices, connectivity, learning and mentorship for young people.' },
];

const process = [
  { step: 'Conversation', text: 'Tell us what you need and what you’re trying to achieve.' },
  { step: 'Scope', text: 'We agree on what will be delivered, by when, and at what cost.' },
  { step: 'Design & build', text: 'We design, build and check in with you as the work takes shape.' },
  { step: 'Launch & support', text: 'We hand over, launch and help you get the most out of it.' },
];

export default function Home() {
  useSEO('/');

  const labs = ecosystem.find((p) => p.id === 'labs')!;
  const programmes = [academy, ...tracks.filter((t) => t.id === 'youth'), labs];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-50 border-b border-gray-200">
        <div className="zq-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
        <Container className="relative pt-16 pb-14 sm:pt-28 sm:pb-20">
          <Eyebrow>Technology services · Youth programmes · Matatiele, Eastern Cape</Eyebrow>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-gray-950 max-w-5xl mb-7">
            From digital exclusion to economic participation.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mb-9">
            Zarq is a technology company with a clear purpose. We build websites, apps and digital solutions for businesses and organisations, and we use that work to give young people access to technology, practical skills and real opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-14 sm:mb-20">
            <ButtonLink to="/contact?interest=digital">Get a quote</ButtonLink>
            <ButtonLink to="/programmes" variant="secondary">Explore programmes</ButtonLink>
          </div>
          <Journey steps={journey} />
        </Container>
      </section>

      {/* What we do */}
      <Section>
        <SectionHeading eyebrow="What we do" title="Two sides of one company." />
        <div className="grid md:grid-cols-2 gap-4">
          {offers.map(({ who, name, text, link, dark }) => (
            <Link
              key={name}
              to={link.to}
              className={`group rounded-2xl p-7 sm:p-10 flex flex-col transition-colors ${
                dark ? 'bg-gray-950 text-white hover:bg-gray-800' : 'bg-[#fff1f6] text-gray-950 border border-[#ffe0ec] hover:border-gray-950'
              }`}
            >
              <p className={`font-spec text-xs uppercase tracking-[0.18em] mb-8 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{who}</p>
              <h3 className="text-4xl sm:text-5xl leading-[1.05] mb-4">{name}</h3>
              <p className={`leading-relaxed mb-8 flex-1 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>{text}</p>
              <span className="inline-flex items-center gap-2 font-medium">
                {link.label} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Zarq Digital */}
      <Section tone="paper">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          <div>
            <Eyebrow>Zarq Digital</Eyebrow>
            <h2 className="text-4xl sm:text-5xl leading-[1.05] mb-5">Technology that works for your business.</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              From your first website to automating the work that slows you down, we design, build and support practical technology at prices that make sense for small businesses, schools and organisations.
            </p>
            <p className="inline-flex px-3 py-1.5 rounded-full bg-[#ffc8dd] text-sm font-medium mb-3">{pricingNote}</p>
            <p className="text-sm text-gray-500 mb-8">Prices exclude VAT.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <ButtonLink to="/contact?interest=digital">Get a quote</ButtonLink>
              <ButtonLink to="/digital#pricing" variant="secondary">View pricing</ButtonLink>
            </div>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
            {digitalServices.map(({ title, from }) => (
              <li key={title} className="bg-white p-4 sm:p-5">
                <p className="text-sm sm:text-base font-medium mb-1">{title}</p>
                <p className="text-xs sm:text-sm text-gray-500">{from}</p>
              </li>
            ))}
            <li className="bg-gray-950">
              <Link to="/digital#pricing" className="flex h-full items-center justify-between gap-2 p-4 sm:p-5 text-sm sm:text-base font-medium text-white hover:bg-gray-800 transition-colors">
                Full pricing <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </Section>

      {/* Why Zarq */}
      <Section>
        <SectionHeading eyebrow="Why Zarq" title="Work that pays it forward." />
        <div className="grid md:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
          {reasons.map(({ title, text }, i) => (
            <div key={title} className="bg-white p-6 sm:p-8">
              <p className="font-spec text-xs text-gray-400 mb-6">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="text-2xl mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section tone="paper">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
          <SectionHeading className="!mb-0" eyebrow="How we work" title="From first call to launch." />
          <TextLink to="/digital#process">More about our process</TextLink>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {process.map(({ step, text }, i) => (
            <li key={step} className="rounded-2xl bg-white border border-gray-200 p-6">
              <span className="inline-flex w-10 h-10 rounded-lg items-center justify-center font-spec text-xs bg-stone-50 border border-gray-200 mb-6">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl mb-2">{step}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* The problem */}
      <Section tone="ink">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Eyebrow dark>Why it matters</Eyebrow>
            <h2 className="text-4xl sm:text-5xl leading-[1.05] mb-6">It's bigger than device access.</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A young person can use a phone every day and still have little chance to learn how technology is built, develop a portfolio, meet mentors or turn digital skills into income.
            </p>
          </div>
          <div>
            <p className="font-spec text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">What's often out of reach</p>
            <ul className="grid sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {problemPoints.map((point) => (
                <li key={point} className="bg-gray-950 p-5 text-gray-200">{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Programmes */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
          <SectionHeading
            className="!mb-0"
            eyebrow="Programmes"
            title="Learn it. Build it. Use it."
            intro="Zarq programmes take young people from first access to real projects and opportunity, in Matatiele and online."
          />
          <TextLink to="/programmes">All programmes</TextLink>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {programmes.map((p) => (
            <Link key={p.id} to={`/programmes#${p.id}`} className="group">
              <Card className="h-full flex flex-col transition-colors group-hover:border-gray-950">
                <h3 className="text-2xl mb-2">{p.name}</h3>
                <p className="text-gray-600 leading-relaxed flex-1">{p.summary}</p>
                <ArrowRight className="w-4 h-4 mt-6 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Audience pathways */}
      <Section tone="ink">
        <SectionHeading
          dark
          eyebrow="What you can do next"
          title="Find your way into Zarq."
          intro="Whether you want to learn, partner, support or build something, there's a clear next step."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiencePaths.map(({ icon: Icon, who, action, to }) => (
            <Link key={who} to={to} className="group rounded-2xl border border-white/15 p-6 hover:border-white transition-colors">
              <Icon className="w-6 h-6 text-[#ffc8dd] mb-8" aria-hidden="true" />
              <p className="text-sm text-gray-400 mb-1">{who}</p>
              <p className="text-xl font-medium flex items-center gap-2">
                {action}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
