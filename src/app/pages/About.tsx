import { useSEO } from '../components/useSEO';
import Journey from '../components/zarq/Journey';
import { PageHeader, Section, SectionHeading, Eyebrow, CTABand } from '../components/zarq/ui';
import { founder, vision, mission } from '../components/zarq/content';

const approach = [
  { step: 'Learn', text: 'Practical, project-based technology education.' },
  { step: 'Build', text: 'Real projects, not just exercises.' },
  { step: 'Demonstrate', text: 'Portfolios that show what young people can do.' },
  { step: 'Connect', text: 'Mentors, networks and industry exposure.' },
  { step: 'Earn', text: 'Work, income and entrepreneurship.' },
];

const combines = [
  'Community access',
  'Practical technology education',
  'Project-based learning',
  'Mentorship',
  'Entrepreneurship',
  'Commercial technology services',
  'Career and opportunity pathways',
];

export default function About() {
  useSEO('/about');

  return (
    <div>
      <PageHeader
        eyebrow="About Zarq"
        title="Building a pathway from digital exclusion to economic participation."
        intro="Zarq is an early-stage youth technology and digital opportunity enterprise, rooted in Matatiele in the Eastern Cape."
      />

      {/* Story */}
      <Section id="story">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16">
          <Eyebrow>Our story</Eyebrow>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <p className="text-2xl sm:text-3xl font-brand text-gray-950 leading-snug">
              There is a gap between what young people are capable of and their access to technology, mentorship and opportunity.
            </p>
            <p>
              In underserved communities, that gap shows up as more than missing devices. It's limited connectivity, little exposure to AI and emerging technology, few mentors, and limited chances to build real projects or learn what a technology career looks like.
            </p>
            <p>
              Zarq exists to close that gap. It combines access, learning, practical creation and opportunity, so young people can move from consuming technology to creating with it.
            </p>
          </div>
        </div>
      </Section>

      {/* Vision & mission */}
      <Section tone="ink" id="vision">
        <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
          <div className="bg-gray-950 p-8 sm:p-10">
            <Eyebrow dark>Vision</Eyebrow>
            <p className="text-2xl sm:text-3xl font-brand leading-snug">
              {vision}
            </p>
          </div>
          <div className="bg-gray-950 p-8 sm:p-10">
            <Eyebrow dark>Mission</Eyebrow>
            <p className="text-2xl sm:text-3xl font-brand leading-snug">
              {mission}
            </p>
          </div>
        </div>
      </Section>

      {/* Approach */}
      <Section id="approach">
        <SectionHeading
          eyebrow="Our approach"
          title="Not another coding school, NGO or agency."
          intro="What makes Zarq different is the connection between each stage: learning leads to building, building leads to proof, and proof leads to opportunity."
        />
        <div className="mb-14"><Journey steps={approach} /></div>
        <div className="rounded-2xl bg-stone-50 border border-gray-200 p-6 sm:p-8">
          <p className="font-spec text-xs uppercase tracking-[0.18em] text-gray-500 mb-5">Zarq combines</p>
          <ul className="flex flex-wrap gap-2">
            {combines.map((c) => (
              <li key={c} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm">{c}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Why Matatiele */}
      <Section tone="blush" id="matatiele">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16">
          <Eyebrow>Why Matatiele</Eyebrow>
          <div>
            <h2 className="text-3xl sm:text-4xl leading-tight mb-5">Start where the need is. Prove it. Then grow.</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Zarq is rooted in Matatiele, Eastern Cape. It's where the model will start, be measured and be improved, beginning with a planned Zarq Hub that gives young people a physical place to access technology and learn.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Once the model is proven, the plan is to build partnerships and adapt it for other underserved communities.
            </p>
          </div>
        </div>
      </Section>

      {/* Founder */}
      <Section id="founder">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
          <div>
            <Eyebrow>Founder</Eyebrow>
            <h2 className="text-4xl sm:text-5xl leading-[1.05] mb-2">{founder.name}</h2>
            <p className="text-gray-500 mb-8">{founder.role}</p>
            <ul className="border-t border-gray-200 divide-y divide-gray-200">
              {['BSc Information Technology', 'Business analysis', 'Programming & mathematics foundation', 'Websites, apps & UI/UX', 'Digital products & AI-related work'].map((c) => (
                <li key={c} className="py-3 text-sm text-gray-700">{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                With a BSc in Information Technology and a foundation in programming and mathematics, she brings business analysis experience, translating business needs into practical technology solutions. Her work also spans websites, applications, UI/UX, digital products, AI-related work, innovation programmes and professional technology environments.
              </p>
              <p>
                She understands how technology is built, and is just as focused on how people get access to it and benefit from it. Zarq brings those two things together: technical capability and a clear understanding of the access problem.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTABand
        eyebrow="Get involved"
        title="Help build what comes next."
        intro="Zarq is being built seriously and honestly, one stage at a time. There's a place for young people, schools, mentors, partners and clients."
        primary={{ to: '/get-involved', label: 'Get involved' }}
        secondary={{ to: '/contact', label: 'Start a conversation' }}
      />
    </div>
  );
}
