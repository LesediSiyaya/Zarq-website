import { useSEO } from '../components/useSEO';
import Journey from '../components/zarq/Journey';
import { PageHeader, Section, SectionHeading, Eyebrow, CTABand } from '../components/zarq/ui';
import { founder, vision, mission, problemPoints, flywheel, yearOneTargets } from '../components/zarq/content';

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
        intro="Zarq is a youth technology and digital opportunity company based in Matatiele, Eastern Cape. We combine commercial technology services with practical youth programmes, and each one makes the other stronger."
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
          title="More than a programme. A pathway."
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

      {/* Impact (formerly its own page; /impact redirects here) */}
      <Section tone="paper" id="impact">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <SectionHeading
            className="!mb-0"
            eyebrow="Our impact"
            title="Measured by what young people go on to do."
            intro="Using technology isn't the same as having access to opportunity. Young people in underserved communities often miss out on the tools, skills and networks that turn digital ability into income and careers."
          />
          <div>
            <p className="font-spec text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">What's often out of reach</p>
            <ul className="divide-y divide-gray-200 border-y border-gray-200">
              {problemPoints.map((p) => (
                <li key={p} className="py-4 text-lg">{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* How Zarq sustains itself */}
      <Section tone="ink" id="model">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Eyebrow dark>How Zarq sustains itself</Eyebrow>
            <h2 className="text-4xl sm:text-5xl leading-[1.05] mb-5">Commercial work and impact, by design.</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Zarq is a hybrid social-impact and commercial technology company. Commercial services earn revenue. Funding and partnerships make youth programmes accessible.
            </p>
            <p className="text-gray-400 leading-relaxed">
              As capability and impact grow, so do Zarq's reputation and partnerships, which brings in more customers and support.
            </p>
          </div>
          <ol className="space-y-px rounded-2xl overflow-hidden bg-white/10">
            {flywheel.map((item, i) => (
              <li key={item} className="bg-gray-950 flex items-center gap-4 p-4 sm:p-5">
                <span className="font-spec text-xs text-gray-500 w-6">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-gray-100">{item}</span>
              </li>
            ))}
            <li className="bg-[#ffc8dd] text-gray-950 p-4 sm:p-5 font-spec text-xs uppercase tracking-[0.14em]">
              ↻ and the cycle continues
            </li>
          </ol>
        </div>
      </Section>

      {/* Goals */}
      <Section id="goals">
        <SectionHeading
          eyebrow="Our goals"
          title="What we're working towards."
          intro="Our goals for the first year of Zarq programmes."
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {yearOneTargets.map(({ value, label }) => (
            <div key={label} className="rounded-2xl border border-gray-200 p-5 sm:p-6">
              <p className="font-brand text-4xl sm:text-5xl leading-none mb-2">{value}</p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-500">We report on progress openly with our partners.</p>
      </Section>

      {/* Rooted in Matatiele */}
      <Section tone="blush" id="matatiele">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16">
          <Eyebrow>Where we work</Eyebrow>
          <div>
            <h2 className="text-3xl sm:text-4xl leading-tight mb-5">Rooted in Matatiele, working everywhere.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Matatiele is home. It's where our programmes are based and where Zarq Hub is coming, giving young people a dedicated place to access technology and learn. Zarq Digital works with clients online across South Africa, and our model is designed to grow into other communities through partnerships.
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
        intro="There's a place at Zarq for young people, schools, mentors, partners and clients."
        primary={{ to: '/get-involved', label: 'Get involved' }}
        secondary={{ to: '/contact', label: 'Start a conversation' }}
      />
    </div>
  );
}
