import { useSEO } from '../../components/useSEO';
import { PageHeader, Section, SectionHeading, CTABand, ButtonLink } from '../../components/zarq/ui';
import { Packages, CheckList, Steps, FAQSection } from '../../components/zarq/landing';
import { cipcFaq, cipcNeeds } from '../../components/zarq/content';

const quote = '/contact?interest=digital';

const steps = [
  { step: 'Tell us about your business', text: 'Company type, directors and your name ideas.' },
  { step: 'Name reservation', text: 'We submit up to four name options to CIPC, in order of preference.' },
  { step: 'Registration', text: 'We file your registration and you receive your registration certificate.' },
  { step: 'Next steps', text: 'Help with your SARS tax number, bank account and compliance (Premium).' },
];

const types = [
  { title: 'Pty Ltd (private company)', text: 'For businesses that trade and make a profit for their owners. The most common choice for new businesses.' },
  { title: 'NPC (non-profit company)', text: 'For organisations with a social or community purpose. To issue tax-deductible receipts, an NPC also needs PBO approval from SARS. We’ll explain the options; for tax advice, speak to an accountant.' },
];

export default function CipcRegistration() {
  useSEO('/digital/cipc-registration');

  return (
    <div>
      <PageHeader
        eyebrow="Zarq Digital · Business registration"
        title="Register your company with CIPC, the easy way."
        intro="Starting a business or a non-profit? We handle the CIPC paperwork with you, from reserving your name to receiving your registration certificate, so you can focus on getting started. Everything is done online, wherever you are in South Africa."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink to={quote}>Get started</ButtonLink>
          <ButtonLink to="#packages" variant="secondary">See packages</ButtonLink>
        </div>
      </PageHeader>

      <Section tone="paper" id="packages">
        <SectionHeading eyebrow="Packages" title="Clear prices, no surprises." intro="CIPC’s standard filing fees are included in our package prices." />
        <Packages service="Business registration (CIPC)" note="Prices exclude VAT." />
      </Section>

      <Section id="needs">
        <SectionHeading eyebrow="What you’ll need" title="Have these ready." intro="That’s all it takes to get started. We’ll guide you through the rest." />
        <CheckList items={cipcNeeds} />
      </Section>

      <Section tone="paper" id="process">
        <SectionHeading eyebrow="How it works" title="Four steps to registered." intro="Timelines depend on CIPC processing, usually 1–3 weeks." />
        <Steps steps={steps} />
      </Section>

      <Section id="types">
        <SectionHeading eyebrow="Pty Ltd or NPC?" title="Choosing the right company type." />
        <div className="grid md:grid-cols-2 gap-4">
          {types.map(({ title, text }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 sm:p-8">
              <h3 className="text-2xl mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <FAQSection items={cipcFaq} />

      <CTABand
        eyebrow="Business registration"
        title="Ready to make it official?"
        intro="Tell us about your business and we’ll get your registration started."
        primary={{ to: quote, label: 'Get started' }}
        secondary={{ to: '/digital', label: 'All Zarq Digital services' }}
      />
    </div>
  );
}
