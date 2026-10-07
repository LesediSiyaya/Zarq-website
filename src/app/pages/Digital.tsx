import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '../components/useSEO';
import { PageHeader, Section, SectionHeading, StatusBadge, CTABand, ButtonLink, Eyebrow } from '../components/zarq/ui';
import { digitalServices, digitalAudiences, founder, pricing, pricingNote } from '../components/zarq/content';

const process = [
  { step: 'Conversation', text: 'Tell us what you need and what you’re trying to achieve.' },
  { step: 'Scope', text: 'We agree on what will be delivered, by when, and at what cost.' },
  { step: 'Design & build', text: 'We design, build and check in with you as the work takes shape.' },
  { step: 'Launch & support', text: 'We hand over, launch and help you get the most out of it.' },
];

export default function Digital() {
  useSEO('/digital');

  return (
    <div>
      <PageHeader
        eyebrow="Zarq Digital"
        title="Practical technology for businesses and organisations."
        intro="Zarq Digital is the commercial technology arm of Zarq. We design and build digital solutions, and the work helps sustain Zarq’s youth programmes."
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <ButtonLink to="/contact?interest=digital">Work with Zarq</ButtonLink>
          <span className="inline-flex items-center gap-2 text-sm text-gray-600">
            <StatusBadge status="current" /> Taking enquiries now
          </span>
          <span className="text-sm text-gray-600">Based in Matatiele, Eastern Cape · Services delivered online</span>
        </div>
      </PageHeader>

      {/* Services */}
      <Section id="services">
        <SectionHeading eyebrow="Services" title="What we do." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
          {digitalServices.map(({ title, text }, i) => (
            <div key={title} className="bg-white p-6 sm:p-8">
              <p className="font-spec text-xs text-gray-400 mb-6">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="text-2xl mb-2">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
          <Link to="/contact?interest=digital" className="group bg-gray-950 text-white p-6 sm:p-8 flex flex-col justify-between hover:bg-gray-800 transition-colors">
            <p className="font-spec text-xs text-gray-400 mb-6">?</p>
            <div>
              <h3 className="text-2xl mb-2">Not sure what you need?</h3>
              <p className="text-gray-300 leading-relaxed flex items-center gap-2">
                Start a conversation <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </p>
            </div>
          </Link>
        </div>
      </Section>

      {/* Pricing */}
      <Section tone="paper" id="pricing">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
          <SectionHeading
            className="!mb-0"
            eyebrow="Pricing"
            title="Transparent pricing."
            intro="Introductory rates to help you get started."
          />
          <span className="self-start md:self-auto inline-flex px-3 py-1.5 rounded-full bg-[#ffc8dd] text-sm font-medium">{pricingNote}</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pricing.map(({ service, tiers }) => (
            <div key={service} className="rounded-2xl bg-white border border-gray-200 p-5 sm:p-6">
              <h3 className="text-xl mb-4">{service}</h3>
              <ul className="divide-y divide-gray-100">
                {tiers.map(({ tier, price, was, desc }) => (
                  <li key={tier} className="py-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium">{tier}</p>
                      <p className="text-xs text-gray-500">{desc}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-semibold">{price}</p>
                      <p className="text-xs text-gray-400 line-through">{was}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-500">All prices exclude VAT. Custom quotes available for larger projects.</p>
      </Section>

      {/* Who it helps */}
      <Section id="who">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <SectionHeading
            className="!mb-0"
            eyebrow="Who it helps"
            title="Built for organisations that need technology to work."
            intro="Accessible, practical technology services for organisations of different sizes, including those doing community work. We're based in Matatiele, Eastern Cape, and work with clients online."
          />
          <ul className="divide-y divide-gray-200 border-y border-gray-200">
            {digitalAudiences.map((a) => (
              <li key={a} className="py-4 text-lg">{a}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Process */}
      <Section tone="paper" id="process">
        <SectionHeading eyebrow="How we work" title="A clear process, from first call to launch." />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {process.map(({ step, text }, i) => (
            <li key={step} className="rounded-2xl border border-gray-200 p-6">
              <span className="inline-flex w-10 h-10 rounded-lg items-center justify-center font-spec text-xs bg-white border border-gray-200 mb-6">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl mb-2">{step}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Why Zarq Digital */}
      <Section tone="blush">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow>Technical capability</Eyebrow>
            <h3 className="text-3xl leading-tight mb-4">Built on real experience.</h3>
            <p className="text-gray-700 leading-relaxed">
              Zarq Digital is led by founder {founder.name}, who holds a BSc in Information Technology with a foundation in programming and mathematics, and has practical experience across websites, applications, UI/UX, digital products and AI-related work.
            </p>
          </div>
          <div>
            <Eyebrow>Work with purpose</Eyebrow>
            <h3 className="text-3xl leading-tight mb-4">Your project supports young people.</h3>
            <p className="text-gray-700 leading-relaxed">
              Revenue from Zarq Digital helps fund the infrastructure behind Zarq’s youth programmes, from devices and connectivity to learning and mentorship.
            </p>
          </div>
        </div>
      </Section>

      <CTABand
        eyebrow="Work with Zarq"
        title="Have a project in mind?"
        intro="Tell us about it. We’ll get back to you to talk through what you need."
        primary={{ to: '/contact?interest=digital', label: 'Start a conversation' }}
        secondary={{ to: '/impact', label: 'See how Zarq works' }}
      />
    </div>
  );
}
