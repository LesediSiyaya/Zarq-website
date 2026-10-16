import { Check } from 'lucide-react';
import { useSEO } from '../../components/useSEO';
import { Section, SectionHeading, Eyebrow, CTABand, ButtonLink, Card, Container } from '../../components/zarq/ui';
import { FAQSection } from '../../components/zarq/landing';
import { digitalKindness, digitalKindnessFaq } from '../../components/zarq/content';

const join = '/contact?interest=youth';

export default function DigitalKindness() {
  useSEO('/programmes/digital-kindness');
  const { themes, byTrack, now, next } = digitalKindness;

  return (
    <div>
      {/* Hero: same blush treatment as the coding classes page, with a "pause before you post" chat */}
      <section className="relative overflow-hidden bg-[#fff1f6] border-b border-[#ffe0ec]">
        <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-[#e7c6ff]/45" aria-hidden="true" />
        <div className="absolute -left-20 -bottom-28 w-64 h-64 rounded-full bg-[#ffc8dd]/70" aria-hidden="true" />
        <Container className="relative pt-14 pb-16 sm:pt-24 sm:pb-24">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div>
              <Eyebrow>ZARQ Academy · Digital Kindness</Eyebrow>
              <h1 className="text-5xl sm:text-7xl leading-[0.95] text-gray-950 mb-7">
                Smart with tech.
                <br />
                <span className="font-brand italic">Kind</span> with people.
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl mb-9">
                Knowing how to use technology is only half of it. The other half is how we treat people when we use it. Digital Kindness brings empathy, online safety, wellbeing and responsible AI into every ZARQ class.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <ButtonLink to="#themes">What learners practise</ButtonLink>
                <ButtonLink to="#parents" variant="secondary">For parents</ButtonLink>
              </div>
            </div>
            <div className="relative max-w-sm w-full mx-auto lg:mx-0" aria-hidden="true">
              <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-[0_20px_40px_-18px_rgba(3,7,18,0.35)] rotate-2">
                <p className="font-spec text-xs uppercase tracking-[0.14em] text-gray-400 mb-4">Group chat · Grade 7</p>
                <div className="space-y-3">
                  <p className="w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-stone-100 px-4 py-2.5 text-gray-400 line-through decoration-gray-400">
                    lol who even invited you
                  </p>
                  <p className="w-fit max-w-[85%] ml-auto rounded-2xl rounded-br-md bg-gray-950 text-white px-4 py-2.5">
                    Hey, want to join our group for the project? 🙂
                  </p>
                </div>
              </div>
              <span className="absolute -bottom-6 -left-3 sm:-left-6 rounded-full bg-[#ffc8dd] border-2 border-gray-950 px-5 py-2.5 font-brand italic text-xl -rotate-6">
                pause before you post
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Why */}
      <Section id="why">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16">
          <Eyebrow>Why it matters</Eyebrow>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <p className="text-2xl sm:text-3xl font-brand text-gray-950 leading-snug">
              Digital skills alone aren’t enough. Young people also need to know how what they do online affects other people.
            </p>
            <p>
              Many young people meet group chats, social media and AI tools early, often before anyone talks to them about what happens on the other side of the screen. Digital Kindness gives them the habits to stay safe, treat people well, look after their wellbeing and use technology to make a positive difference in their communities.
            </p>
          </div>
        </div>
      </Section>

      {/* Themes */}
      <Section tone="paper" id="themes">
        <SectionHeading
          eyebrow="Five themes"
          title="What learners practise."
          intro="Each theme comes with small, practical skills that learners try for themselves in class."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {themes.map((t, i) => (
            <div key={t.id} id={t.id} className="scroll-mt-24">
              <Card className="h-full flex flex-col">
                <p className="font-spec text-xs text-gray-400 mb-5">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="text-2xl mb-2">{t.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{t.text}</p>
                <p className="font-spec text-xs uppercase tracking-[0.14em] text-gray-500 mb-3">Learners practise</p>
                <ul className="space-y-2">
                  {t.practise.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-gray-700 leading-relaxed">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-950" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
          <div className="rounded-2xl bg-gray-950 text-white p-6 sm:p-7 flex flex-col">
            <p className="font-spec text-xs text-gray-500 mb-5">+</p>
            <h3 className="text-2xl mb-2">Not a separate subject</h3>
            <p className="text-gray-300 leading-relaxed mb-6 flex-1">
              Every theme is taught inside coding, AI and robotics lessons. Build a website, and you learn about privacy. Use AI, and you learn to check its answers.
            </p>
            <ButtonLink to="/programmes/coding-classes" variant="light">Free coding classes</ButtonLink>
          </div>
        </div>
      </Section>

      {/* By track */}
      <Section id="ages">
        <SectionHeading eyebrow="At every age" title="Grows with the learner." />
        <div className="grid md:grid-cols-3 gap-4">
          {byTrack.map(({ track, text }) => (
            <Card key={track}>
              <h3 className="text-2xl mb-3">{track}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Where it stands: what is in place now, and what ZARQ aims to add */}
      <Section tone="ink" id="progress">
        <SectionHeading
          dark
          eyebrow="Where it stands"
          title="Built in from the start."
          intro="Digital Kindness is part of ZARQ Academy from the first classes. Here’s what is in place and what we aim to add with partners."
        />
        <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {[
            { label: 'Now', items: now },
            { label: 'Next, with partners', items: next },
          ].map(({ label, items }) => (
            <div key={label} className="bg-gray-950 p-6 sm:p-8">
              <p className="font-spec text-xs uppercase tracking-[0.18em] text-gray-400 mb-5">{label}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-100 leading-relaxed">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#ffc8dd]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink to="/partners" variant="light">Partner with ZARQ</ButtonLink>
        </div>
      </Section>

      {/* Parents */}
      <Section tone="blush" id="parents">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16">
          <Eyebrow>For parents and guardians</Eyebrow>
          <div>
            <h2 className="text-3xl sm:text-4xl leading-tight mb-5">Supportive, practical and age-appropriate.</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                We teach healthy habits, safety skills and where to find help. We’ll share what each age group covers before classes start, so you can keep the conversation going at home.
              </p>
              <p>
                We’re educators, not counsellors. If a young person needs support, we encourage them to talk to a parent, guardian or teacher. Childline South Africa is free on <a href="tel:116" className="underline underline-offset-2">116</a>.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <FAQSection items={digitalKindnessFaq} />

      <CTABand
        eyebrow="Join ZARQ"
        title="Smart with tech. Kind with people."
        intro="Register your interest in ZARQ’s free classes, or help us bring Digital Kindness to more schools and families."
        primary={{ to: join, label: 'Register your interest' }}
        secondary={{ to: '/get-involved', label: 'Get involved' }}
      />
    </div>
  );
}
