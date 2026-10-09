import { useSEO } from '../components/useSEO';
import {
  PageHeader, Section, SectionHeading, Card, CTABand, ButtonLink,
} from '../components/zarq/ui';
import { academy, tracks, ecosystem } from '../components/zarq/content';

export default function Programmes() {
  useSEO('/programmes');

  return (
    <div>
      <PageHeader
        eyebrow="Programmes"
        title="Learn it. Build it. Use it."
        intro="Zarq programmes take young people from first access to real projects and opportunity. Learning is practical and project-based, delivered in Matatiele and online."
      />

      {/* Academy */}
      <Section id="academy">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl leading-[1.05] mb-5">{academy.name}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-5">{academy.summary}</p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Learners don't just use technology, they create with it, building projects that grow into a portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <ButtonLink to="/contact?interest=youth">Register your interest</ButtonLink>
              <ButtonLink to="/programmes/coding-classes" variant="secondary">Free coding classes</ButtonLink>
            </div>
          </div>
          <div>
            <p className="font-spec text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">Learning areas</p>
            <ul className="grid grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
              {academy.points!.map((point) => (
                <li key={point} className="bg-white p-4 sm:p-5 font-medium">{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Learner tracks */}
      <Section tone="paper" id="tracks">
        <SectionHeading
          eyebrow="Learner tracks"
          title="A track for each stage."
          intro="Zarq Academy is organised around where a young person is starting from and where they want to go next."
        />
        <div className="grid md:grid-cols-3 gap-4">
          {tracks.map((t) => (
            <div key={t.id} id={t.id} className="scroll-mt-24">
              <Card className="h-full">
                <h3 className="text-2xl mb-3">{t.name}</h3>
                <p className="text-gray-600 leading-relaxed">{t.summary}</p>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Wider ecosystem */}
      <Section id="ecosystem">
        <SectionHeading
          eyebrow="Beyond the classroom"
          title="Where learning turns into building."
          intro="Zarq extends learning into hands-on STEM, real project work and a dedicated place to learn."
        />
        <div className="space-y-4">
          {ecosystem.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className="scroll-mt-24 grid md:grid-cols-[0.9fr_1.1fr] gap-4 md:gap-10 items-start md:items-center rounded-2xl border border-gray-200 p-6 sm:p-8"
            >
              <h3 className="text-2xl sm:text-3xl">{p.name}</h3>
              <p className="text-gray-600 leading-relaxed">{p.summary}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand
        eyebrow="Join Zarq"
        title="Start your Zarq journey."
        intro="Register your interest and we'll be in touch with programme dates and details. Parents and guardians are welcome to enquire too."
        primary={{ to: '/contact?interest=youth', label: 'Register your interest' }}
        secondary={{ to: '/get-involved', label: 'Other ways to get involved' }}
      />
    </div>
  );
}
