import { useSEO } from '../../components/useSEO';
import { Section, SectionHeading, Eyebrow, CTABand, ButtonLink, Card, Container } from '../../components/zarq/ui';
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

// Example projects, matched to the Academy learning areas (web development, AI literacy, app development).
const makes = [
  { icon: '{ }', title: 'Your first website', text: 'Design and publish a real site about something you love.', style: 'bg-[#ffc8dd] text-gray-950', iconStyle: 'bg-white', rotate: 'md:-rotate-1' },
  { icon: '✦', title: 'Understand AI', text: 'Learn what AI is, how it works and how to use it well and safely.', style: 'bg-gray-950 text-white', iconStyle: 'bg-[#ffc8dd] text-gray-950', rotate: 'md:rotate-1' },
  { icon: '▶', title: 'Apps and projects', text: 'Turn your ideas into apps and projects you can show your family and friends.', style: 'bg-[#e7c6ff] text-gray-950', iconStyle: 'bg-white', rotate: 'md:-rotate-[0.5deg]' },
];

export default function CodingClasses() {
  useSEO('/programmes/coding-classes');

  return (
    <div>
      {/* Youth-friendly hero: warmer colours, a sticker and a taped photo, same fonts as the rest of the site */}
      <section className="relative overflow-hidden bg-[#fff1f6] border-b border-[#ffe0ec]">
        <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-[#e7c6ff]/45" aria-hidden="true" />
        <div className="absolute -left-20 -bottom-28 w-64 h-64 rounded-full bg-[#ffc8dd]/70" aria-hidden="true" />
        <Container className="relative pt-14 pb-16 sm:pt-24 sm:pb-24">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 items-center">
            <div>
              <Eyebrow>ZARQ Academy · Free coding classes</Eyebrow>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-gray-950 mb-7">
                Code it.{' '}
                <span className="relative inline-block font-brand italic">
                  Create it.
                  <svg className="absolute left-0 -bottom-1.5 w-full h-4" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M2 12 C 40 2, 70 20, 110 10 S 180 2, 220 12 S 280 18, 298 8" fill="none" stroke="#030712" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
                <br />
                Show the world.
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl mb-9">
                Free coding and digital skills classes for young people in Matatiele and online. Build real projects, learn from mentors, and have fun doing it.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <ButtonLink to={join}>Register your interest</ButtonLink>
                <ButtonLink to="#parents" variant="secondary">For parents</ButtonLink>
              </div>
            </div>
            <div className="relative h-[340px] sm:h-[380px] max-w-sm w-full mx-auto lg:mx-0" aria-hidden="true">
              <div className="absolute left-2 top-0 z-10 w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-[#ffc8dd] border-2 border-gray-950 flex flex-col items-center justify-center -rotate-12">
                <span className="font-brand text-5xl leading-none">Free</span>
                <span className="font-spec text-xs uppercase tracking-[0.14em] mt-1.5">Ages 5 and up</span>
              </div>
              <figure className="absolute right-0 bottom-0 w-72 sm:w-80 bg-white p-3 pb-12 rotate-3 shadow-[0_20px_40px_-18px_rgba(3,7,18,0.35)]">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#e7c6ff]/90 -rotate-3" />
                <img src="/media/stock/breadboard.jpg" alt="" loading="lazy" className="w-full h-48 sm:h-52 object-cover" />
                <figcaption className="absolute bottom-3 inset-x-0 text-center font-brand italic text-xl">build real things</figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* What you'll make */}
      <Section id="make">
        <SectionHeading eyebrow="What you’ll make" title="Not just lessons. Projects." />
        <div className="grid md:grid-cols-3 gap-5">
          {makes.map(({ icon, title, text, style, iconStyle, rotate }) => (
            <div key={title} className={`rounded-3xl p-7 ${style} ${rotate}`}>
              <span className={`inline-flex w-14 h-14 rounded-2xl items-center justify-center font-brand text-3xl mb-6 ${iconStyle}`} aria-hidden="true">{icon}</span>
              <h3 className="text-3xl mb-2">{title}</h3>
              <p className="leading-relaxed opacity-80">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper" id="learn">
        <SectionHeading eyebrow="What learners will learn" title="Skills for the digital economy." />
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
          {academy.points!.map((point) => (
            <li key={point} className="bg-white p-5 font-medium">{point}</li>
          ))}
        </ul>
      </Section>

      <Section id="how">
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

      <Section tone="paper" id="tracks">
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
        eyebrow="Join ZARQ"
        title="Start your ZARQ journey."
        intro="Register your interest and we’ll be in touch with programme dates and details."
        primary={{ to: join, label: 'Register your interest' }}
        secondary={{ to: '/programmes', label: 'All programmes' }}
      />
    </div>
  );
}
