import { useSEO } from '../../components/useSEO';
import { PageHeader, Section, SectionHeading, Eyebrow, CTABand, ButtonLink, Card } from '../../components/zarq/ui';
import { FAQSection } from '../../components/zarq/landing';
import { academy, tracks, codingFaq } from '../../components/zarq/content';

const join = '/contact?interest=youth';

const howItWorks = [
  { title: 'Free for learners', text: 'Classes cost nothing to attend.' },
  { title: 'Ages 5 and up', text: 'Grouped by age and experience, from first steps to career-ready skills.' },
  { title: 'Hands-on', text: 'Every module ends with a project learners can show.' },
  { title: 'Mentored', text: 'Guidance from people working in technology.' },
  { title: 'Devices provided', text: 'Learners are welcome to bring their own laptop too.' },
  { title: 'Matatiele & online', text: 'Learn in person in Matatiele, or join online.' },
];

export default function CodingClasses() {
  useSEO('/programmes/coding-classes');

  return (
    <div>
      <PageHeader
        eyebrow="Zarq Academy · Youth programmes"
        title="Coding and digital skills classes for young people in Matatiele."
        intro="Zarq classes teach practical technology skills (coding, AI, web development and more) through real projects and mentorship, so young people can create with technology, not just use it."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink to={join}>Register your interest</ButtonLink>
          <ButtonLink to="#parents" variant="secondary">For parents</ButtonLink>
        </div>
      </PageHeader>

      <Section id="learn">
        <SectionHeading eyebrow="What learners will learn" title="Skills for the digital economy." />
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
          {academy.points!.map((point) => (
            <li key={point} className="bg-white p-5 font-medium">{point}</li>
          ))}
        </ul>
      </Section>

      <Section tone="paper" id="how">
        <SectionHeading eyebrow="How classes work" title="Free, practical and hands-on." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {howItWorks.map(({ title, text }) => (
            <Card key={title}>
              <h3 className="text-2xl mb-2">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="tracks">
        <SectionHeading eyebrow="Learner tracks" title="A track for each stage." />
        <div className="grid md:grid-cols-3 gap-4">
          {tracks.map((t) => (
            <Card key={t.id}>
              <h3 className="text-2xl mb-3">{t.name}</h3>
              <p className="text-gray-600 leading-relaxed">{t.summary}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="blush" id="parents">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16">
          <Eyebrow>For parents and guardians</Eyebrow>
          <div>
            <h2 className="text-3xl sm:text-4xl leading-tight mb-5">You’ll know exactly what to expect.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We’ll share programme dates, times and requirements before anything starts. Parents and guardians are welcome to register on a young person’s behalf and to ask us anything.
            </p>
          </div>
        </div>
      </Section>

      <FAQSection items={codingFaq} />

      <CTABand
        eyebrow="Join Zarq"
        title="Start your Zarq journey."
        intro="Register your interest and we’ll be in touch with programme dates and details."
        primary={{ to: join, label: 'Register your interest' }}
        secondary={{ to: '/programmes', label: 'All programmes' }}
      />
    </div>
  );
}
