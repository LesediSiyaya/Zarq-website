import { Link } from 'react-router';
import { ArrowRight, GraduationCap, Handshake, Briefcase, School } from 'lucide-react';
import { useSEO } from '../components/useSEO';
import Journey from '../components/zarq/Journey';
import {
  Section, SectionHeading, Container, Eyebrow, ButtonLink, TextLink, StatusBadge, StatusLegend, Card,
} from '../components/zarq/ui';
import { academy, ecosystem, tracks, journey, problemPoints, digitalServices, yearOneTargets, founder } from '../components/zarq/content';

const audiencePaths = [
  { icon: GraduationCap, who: 'Young people & families', action: 'Explore Programmes', to: '/programmes' },
  { icon: School, who: 'Schools', action: 'Partner with Zarq', to: '/get-involved#schools' },
  { icon: Handshake, who: 'Funders & partners', action: 'Support Zarq', to: '/get-involved#partners' },
  { icon: Briefcase, who: 'Businesses & organisations', action: 'Work with Zarq', to: '/digital' },
];

export default function Home() {
  useSEO('/');

  const programmes = [academy, ...tracks.filter((t) => t.id === 'youth'), ...ecosystem];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-50 border-b border-gray-200">
        <div className="zq-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
        <Container className="relative pt-16 pb-14 sm:pt-28 sm:pb-20">
          <Eyebrow>Youth technology enterprise · Matatiele, Eastern Cape</Eyebrow>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-gray-950 max-w-5xl mb-7">
            From digital exclusion to economic participation.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mb-9">
            Zarq gives underserved young people access to technology, practical skills, real projects, mentorship and pathways to opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-14 sm:mb-20">
            <ButtonLink to="/programmes">Explore Programmes</ButtonLink>
            <ButtonLink to="/digital" variant="secondary">Work with Zarq</ButtonLink>
          </div>
          <Journey steps={journey} />
        </Container>
      </section>

      {/* What Zarq is */}
      <Section>
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16">
          <Eyebrow>What Zarq is</Eyebrow>
          <div>
            <h2 className="text-3xl sm:text-4xl leading-tight mb-6">
              A youth technology and digital opportunity enterprise, rooted in Matatiele.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-5">
              Zarq is not just a coding school, a training centre or a digital agency. It connects all three: community access, practical technology education, project-based learning, mentorship and commercial technology services.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The aim is simple. Help young people move beyond using technology to creating with it, and then use those skills to reach real economic opportunity.
            </p>
            <TextLink to="/about">About Zarq</TextLink>
          </div>
        </div>
      </Section>

      {/* The problem */}
      <Section tone="ink">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Eyebrow dark>The problem</Eyebrow>
            <h2 className="text-4xl sm:text-5xl leading-[1.05] mb-6">It's bigger than device access.</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              A young person can use a phone every day and still have little chance to learn how technology is built, develop a portfolio, meet mentors or turn digital skills into income.
            </p>
            <p className="text-gray-400 leading-relaxed">
              In underserved communities, the gap between potential and opportunity is often a gap in access.
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

      {/* Ecosystem / programmes */}
      <Section tone="paper">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
          <SectionHeading
            className="!mb-0"
            eyebrow="The Zarq ecosystem"
            title="One pathway, built in stages."
            intro="Zarq is being built as an ecosystem, not a single programme. Here's what's in development and what's planned."
          />
          <TextLink to="/programmes">All programmes</TextLink>
        </div>
        <div className="mb-8"><StatusLegend /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {programmes.map((p) => (
            <Link key={p.id} to={`/programmes#${p.id}`} className="group">
              <Card className="h-full flex flex-col transition-colors group-hover:border-gray-950">
                <StatusBadge status={p.status} className="self-start mb-6" />
                <h3 className="text-2xl mb-2">{p.name}</h3>
                <p className="text-gray-600 leading-relaxed flex-1">{p.summary}</p>
                <ArrowRight className="w-4 h-4 mt-6 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Zarq Digital */}
      <Section>
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Eyebrow className="">Zarq Digital</Eyebrow>
              <StatusBadge status="current" />
            </div>
            <h2 className="text-4xl sm:text-5xl leading-[1.05] mb-5">Technology services that also fund opportunity.</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Zarq Digital is the commercial arm of Zarq. It builds websites, apps and digital solutions for businesses and organisations. The revenue it earns helps make youth programmes sustainable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <ButtonLink to="/digital">Work with Zarq</ButtonLink>
              <ButtonLink to="/contact?interest=digital" variant="secondary">Start a conversation</ButtonLink>
            </div>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
            {digitalServices.map(({ title }) => (
              <li key={title} className="bg-white p-4 sm:p-5 text-sm sm:text-base font-medium">{title}</li>
            ))}
            <li className="bg-gray-950">
              <Link to="/digital#pricing" className="flex h-full items-center justify-between gap-2 p-4 sm:p-5 text-sm sm:text-base font-medium text-white hover:bg-gray-800 transition-colors">
                Services & pricing <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </Section>

      {/* Impact */}
      <Section tone="blush">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeading
            className="!mb-0"
            eyebrow="Impact"
            title="Clear targets. Honest reporting."
            intro="These are Zarq's proposed Year 1 targets, not results. We'll publish verified outcomes as evidence becomes available."
          />
          <TextLink to="/impact">Our impact model</TextLink>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {yearOneTargets.slice(0, 4).map(({ value, label }) => (
            <div key={label} className="rounded-2xl bg-white p-5 sm:p-6 border border-white">
              <StatusBadge status="target" className="mb-5" />
              <p className="font-brand text-4xl sm:text-5xl leading-none mb-2">{value}</p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Founder */}
      <Section>
        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center max-w-5xl">
          <img
            src="/founder.jpg"
            alt={`${founder.name}, founder of Zarq`}
            loading="lazy"
            decoding="async"
            className="w-48 h-48 sm:w-64 sm:h-64 object-cover object-top rounded-2xl"
          />
          <div>
            <Eyebrow>Why Zarq</Eyebrow>
            <h2 className="text-3xl sm:text-4xl leading-tight mb-5">Built by someone who understands both the technology and the access gap.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Zarq was founded by {founder.name}, who holds a BSc in Information Technology and has hands-on experience building websites, applications, digital products and AI-related work.
            </p>
            <p className="font-medium">{founder.name}</p>
            <p className="text-sm text-gray-500 mb-6">{founder.role}</p>
            <TextLink to="/about#founder">Read the story</TextLink>
          </div>
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
