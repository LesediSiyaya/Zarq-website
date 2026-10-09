import { Download } from 'lucide-react';
import { useSEO } from '../components/useSEO';
import Journey from '../components/zarq/Journey';
import { PageHeader, Section, SectionHeading, Eyebrow, CTABand, ButtonLink } from '../components/zarq/ui';
import {
  founder, journey, flywheel, needStats, supportOptions, inKindOptions, partnerBenefits, reportingMetrics,
} from '../components/zarq/content';

const partnerLink = '/contact?interest=partner';
const packUrl = '/zarq-partner-pack.pdf';

function PackDownload({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={packUrl}
      download="Zarq_Partner_Pack_2026.pdf"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm sm:text-base transition-colors ${
        dark ? 'border border-white/30 text-white hover:border-white' : 'border border-gray-300 text-gray-950 hover:border-gray-950'
      }`}
    >
      <Download className="w-4 h-4" aria-hidden="true" /> Download the partner pack (PDF)
    </a>
  );
}

const whyZarq = [
  { title: 'Practical, not theoretical.', text: 'Young people learn by building real projects that grow into a portfolio they can show to employers and clients.' },
  { title: 'Rooted where the need is.', text: 'Zarq is based in Matatiele, so programmes are shaped by the community they serve.' },
  { title: 'Built to last.', text: 'Zarq Digital earns revenue from technology services, so programmes don’t depend on donations alone.' },
];

export default function Partners() {
  useSEO('/partners');

  return (
    <div>
      <PageHeader
        eyebrow="Partner with Zarq"
        title="Invest in young people’s digital futures."
        intro="Zarq gives young people in Matatiele access to technology, practical skills, real projects and mentorship. Partners help us reach more of them, faster, and see exactly what their support achieves."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <ButtonLink to={partnerLink}>Start a partnership conversation</ButtonLink>
          <PackDownload />
        </div>
      </PageHeader>

      {/* The need */}
      <Section id="need">
        <SectionHeading
          eyebrow="The need"
          title="Talent is everywhere. Access isn’t."
          intro="In the Eastern Cape, many young people grow up without a computer at home or reliable internet, and leave school into one of the toughest job markets in the country."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {needStats.map(({ value, label, source }) => (
            <div key={label} className="rounded-2xl border border-gray-200 p-6 flex flex-col">
              <p className="font-brand text-5xl leading-none mb-3">{value}</p>
              <p className="text-gray-700 leading-relaxed mb-6 flex-1">{label}</p>
              <p className="font-spec text-[11px] uppercase tracking-wider text-gray-400">{source}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Zarq */}
      <Section tone="paper" id="why">
        <SectionHeading
          eyebrow="Why Zarq"
          title="A pathway from access to opportunity."
          intro="Each stage builds on the last, so support doesn’t stop at a one-off workshop."
        />
        <div className="mb-12"><Journey steps={journey} /></div>
        <div className="grid md:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
          {whyZarq.map(({ title, text }, i) => (
            <div key={title} className="bg-white p-6 sm:p-8">
              <p className="font-spec text-xs text-gray-400 mb-6">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="text-2xl mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Concept video (AI-generated, clearly labelled as such) */}
      <Section id="vision">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
          <SectionHeading
            className="!mb-0"
            eyebrow="Our vision"
            title="What a Zarq class will look like."
            intro="Hands-on, project-based and mentored: young people building with real hardware and software, with support at their side."
          />
          <figure>
            <div className="relative rounded-2xl overflow-hidden bg-gray-950">
              <video
                src="/media/zarq-class-concept.mp4"
                poster="/media/zarq-class-concept.jpg"
                width={576}
                height={324}
                className="w-full aspect-video object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                aria-label="AI-generated concept video of young people building electronics projects with a mentor in a Zarq class"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 font-spec text-[11px] uppercase tracking-wider text-gray-950">
                Concept · AI-generated
              </span>
            </div>
            <figcaption className="mt-3 text-sm text-gray-500">
              An AI-generated illustration of our vision for Zarq classes. It is not a recording of a real class.
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* Ways to support */}
      <Section id="support">
        <SectionHeading
          eyebrow="Ways to support"
          title="What your support makes possible."
          intro="Choose a focus, or combine them. We’ll put together a clear plan and budget with you."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportOptions.map(({ title, text }, i) => (
            <div
              key={title}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col ${i === supportOptions.length - 1 ? 'bg-gray-950 text-white md:col-span-2' : 'border border-gray-200'}`}
            >
              <p className={`font-spec text-xs mb-6 ${i === supportOptions.length - 1 ? 'text-gray-500' : 'text-gray-400'}`}>{String(i + 1).padStart(2, '0')}</p>
              <h3 className="text-2xl mb-3">{title}</h3>
              <p className={`leading-relaxed ${i === supportOptions.length - 1 ? 'text-gray-300' : 'text-gray-600'}`}>{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-[#fff1f6] p-6 sm:p-8">
          <p className="font-spec text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">Support in kind</p>
          <ul className="flex flex-wrap gap-2">
            {inKindOptions.map((o) => (
              <li key={o} className="px-4 py-2 rounded-full bg-white border border-[#ffe0ec] text-sm">{o}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Model & accountability */}
      <Section tone="ink" id="accountability">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Eyebrow dark>Accountability</Eyebrow>
            <h2 className="text-4xl sm:text-5xl leading-[1.05] mb-5">Your support goes to programmes. We show you how.</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Partner funding is kept separate from Zarq Digital’s commercial income and used for the programme it was given for. Every quarter, partners receive a report against the measures below.
            </p>
            <p className="font-spec text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">What we report on</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {reportingMetrics.map((m) => (
                <li key={m} className="flex gap-3 text-gray-200">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ffc8dd] flex-shrink-0" aria-hidden="true" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-spec text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">How Zarq sustains itself</p>
            <ol className="space-y-px rounded-2xl overflow-hidden bg-white/10">
              {flywheel.map((item, i) => (
                <li key={item} className="bg-gray-950 flex items-center gap-4 p-4">
                  <span className="font-spec text-xs text-gray-500 w-6">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-gray-100">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* What partners receive */}
      <Section id="benefits">
        <SectionHeading eyebrow="What partners receive" title="A partnership, not a transaction." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {partnerBenefits.map(({ title, text }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Founder */}
      <Section tone="blush" id="founder">
        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-16 items-center">
          <img
            src="/founder-lesedi-smile.jpg"
            alt={founder.photoAlt}
            width={900}
            height={1352}
            loading="lazy"
            className="w-full max-w-sm rounded-2xl object-cover aspect-[4/5]"
          />
          <div>
            <Eyebrow>Meet the founder</Eyebrow>
            <h2 className="text-4xl sm:text-5xl leading-[1.05] mb-2">{founder.name}</h2>
            <p className="text-gray-600 mb-6">{founder.role}</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Lesedi holds a BSc in Information Technology and brings business analysis experience, translating business needs into practical technology solutions. Her work spans websites, applications, UI/UX, digital products and AI.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              She founded Zarq to give young people in her community the access, skills and opportunities that turn digital ability into a future.
            </p>
          </div>
        </div>
      </Section>

      {/* Partner pack */}
      <Section tone="paper" id="pack">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl leading-tight mb-3">Take it to your team.</h2>
            <p className="text-gray-600 leading-relaxed">Our six-page partner pack covers the need, our approach, ways to support, reporting and goals. Share it with your CSI, ESG or leadership team.</p>
          </div>
          <PackDownload />
        </div>
      </Section>

      <CTABand
        eyebrow="Partner with Zarq"
        title="Let’s build this together."
        intro="Tell us what matters to your organisation. We’ll come back with options, a budget and a clear plan for reporting."
        primary={{ to: partnerLink, label: 'Start a partnership conversation' }}
        secondary={{ to: '/about#impact', label: 'Our impact model' }}
      />
    </div>
  );
}
