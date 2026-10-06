import { useSEO } from '../components/useSEO';
import {
  PageHeader, Section, SectionHeading, StatusBadge, StatusLegend, Card, CTABand, ButtonLink,
} from '../components/zarq/ui';
import { academy, tracks, ecosystem } from '../components/zarq/content';

export default function Programmes() {
  useSEO({
    title: 'Programmes',
    description: 'Zarq Academy, Zarq Juniors, Zarq Youth, Zarq Future, Zarq Robotics & STEM, Zarq Labs and the planned Zarq Hub: practical technology learning for young people in Matatiele.',
    path: '/programmes',
  });

  return (
    <div>
      <PageHeader
        eyebrow="Programmes"
        title="Learn it. Build it. Use it."
        intro="Zarq programmes take young people from first access to real projects and opportunity. Zarq is early-stage, so each programme below is clearly marked as developing or planned."
      >
        <StatusLegend />
      </PageHeader>

      {/* Academy */}
      <Section id="academy">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div>
            <StatusBadge status={academy.status} className="mb-5" />
            <h2 className="text-4xl sm:text-5xl leading-[1.05] mb-5">{academy.name}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-5">{academy.summary}</p>
            <p className="text-gray-600 leading-relaxed mb-8">
              The curriculum is being developed now, ahead of Zarq's first structured youth programme. Learning is practical and project-based: the goal is to create with technology, not just use it.
            </p>
            <ButtonLink to="/contact?interest=youth">Join Zarq</ButtonLink>
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
                <StatusBadge status={t.status} className="mb-6" />
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
          intro="These planned initiatives extend the Zarq pathway into hands-on STEM, real project work and a physical place to learn."
        />
        <div className="space-y-4">
          {ecosystem.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className="scroll-mt-24 grid md:grid-cols-[0.9fr_1.1fr_auto] gap-4 md:gap-10 items-start md:items-center rounded-2xl border border-gray-200 p-6 sm:p-8"
            >
              <h3 className="text-2xl sm:text-3xl">{p.name}</h3>
              <p className="text-gray-600 leading-relaxed">{p.summary}</p>
              <StatusBadge status={p.status} className="md:justify-self-end" />
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-500 max-w-2xl">
          Zarq Hub does not exist as a physical centre yet. It's part of the plan for Matatiele, and we'll share updates as it develops.
        </p>
      </Section>

      <CTABand
        eyebrow="Join Zarq"
        title="Be part of the first cohort."
        intro="Register your interest and we'll be in touch as the first structured programme launches. Parents and guardians are welcome to enquire too."
        primary={{ to: '/contact?interest=youth', label: 'Join Zarq' }}
        secondary={{ to: '/get-involved', label: 'Other ways to get involved' }}
      />
    </div>
  );
}
