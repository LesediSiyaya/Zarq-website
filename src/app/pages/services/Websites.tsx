import { useSEO } from '../../components/useSEO';
import { PageHeader, Section, SectionHeading, Eyebrow, CTABand, ButtonLink } from '../../components/zarq/ui';
import { Packages, CheckList, Steps, FAQSection } from '../../components/zarq/landing';
import { websitesFaq, websiteIncludes } from '../../components/zarq/content';

const quote = '/contact?interest=digital';

const audiences = [
  'Small businesses and entrepreneurs',
  'Schools and educational organisations',
  'NGOs and community organisations',
  'Professionals who need a credible online presence',
];

const steps = [
  { step: 'Conversation', text: 'Tell us about your business, your customers and what the website needs to do.' },
  { step: 'Scope & quote', text: 'You get a written quote with what’s included and when. Quotes are valid for 30 days.' },
  { step: 'Design & build', text: 'We design and build your site, checking in with you along the way.' },
  { step: 'Launch & support', text: 'We go live, hand over and support you for 14 days after launch.' },
];

const timelines = [
  { label: 'Starter', time: '5–7 working days' },
  { label: 'Standard', time: '2–3 weeks' },
  { label: 'Premium', time: '4–8 weeks' },
];

export default function Websites() {
  useSEO('/digital/websites');

  return (
    <div>
      <PageHeader
        eyebrow="Zarq Digital · Website design"
        title="Website design in Matatiele, and anywhere online."
        intro="We design and build clear, fast, mobile-friendly websites that help people find you, trust you and get in touch. We’re based in Matatiele, Eastern Cape, and work with clients across South Africa online."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink to={quote}>Get a quote</ButtonLink>
          <ButtonLink to="#packages" variant="secondary">See packages</ButtonLink>
        </div>
      </PageHeader>

      <Section id="who">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <SectionHeading
            className="!mb-0"
            eyebrow="Who it’s for"
            title="A website that works as hard as you do."
            intro="Whether you’re launching a business, growing a school or running a community organisation, your website is often the first impression people get."
          />
          <ul className="divide-y divide-gray-200 border-y border-gray-200">
            {audiences.map((a) => <li key={a} className="py-4 text-lg">{a}</li>)}
          </ul>
        </div>
      </Section>

      <Section tone="paper" id="packages">
        <SectionHeading eyebrow="Packages" title="Simple, transparent pricing." intro="Pick the package that fits, or ask for a custom quote for larger projects." />
        <Packages service="Website design & development" note="Prices exclude VAT. Domain and hosting are billed separately at cost." />
      </Section>

      <Section id="included">
        <SectionHeading eyebrow="What’s included" title="Every website includes." />
        <CheckList items={websiteIncludes} />
      </Section>

      <Section tone="paper" id="process">
        <SectionHeading eyebrow="How it works" title="From first call to launch." />
        <Steps steps={steps} />
        <div className="mt-8 rounded-2xl bg-white border border-gray-200 p-6 sm:p-8">
          <p className="font-spec text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">Typical timelines, once we have your deposit and content</p>
          <dl className="grid sm:grid-cols-3 gap-4">
            {timelines.map(({ label, time }) => (
              <div key={label}>
                <dt className="text-sm text-gray-500">{label}</dt>
                <dd className="font-brand text-3xl">{time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="blush" id="example">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16">
          <Eyebrow>Built by Zarq</Eyebrow>
          <div>
            <h2 className="text-3xl sm:text-4xl leading-tight mb-5">You’re looking at our work.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              This website was designed, built and optimised for search by Zarq Digital. It’s fast, works on any device and is readable by Google and AI assistants, which is the same standard we bring to every client site.
            </p>
          </div>
        </div>
      </Section>

      <FAQSection items={websitesFaq} />

      <CTABand
        eyebrow="Website design"
        title="Ready for a website that works for your business?"
        intro="Tell us what you need. We’ll come back to you with a clear scope and quote."
        primary={{ to: quote, label: 'Get a quote' }}
        secondary={{ to: '/digital', label: 'All Zarq Digital services' }}
      />
    </div>
  );
}
