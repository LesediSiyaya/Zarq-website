import { useSEO } from '../components/useSEO';
import Journey from '../components/zarq/Journey';
import { PageHeader, Section, SectionHeading, StatusBadge, CTABand, Eyebrow } from '../components/zarq/ui';
import { journey, problemPoints, flywheel, yearOneTargets, yearOnePlan } from '../components/zarq/content';

export default function Impact() {
  useSEO('/impact');

  return (
    <div>
      <PageHeader
        eyebrow="Impact"
        title="Measured by what young people go on to do."
        intro="Zarq is early-stage. This page sets out the problem, how the model is meant to work, and the targets we'll hold ourselves to. Verified results will be added as they come in."
      />

      {/* Problem */}
      <Section id="problem">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <SectionHeading
            className="!mb-0"
            eyebrow="The problem"
            title="Using technology isn't the same as having access to opportunity."
            intro="Young people in underserved communities can face limited access to the tools, skills and networks that turn digital ability into economic participation."
          />
          <ul className="divide-y divide-gray-200 border-y border-gray-200">
            {problemPoints.map((p) => (
              <li key={p} className="py-4 text-lg">{p}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Impact model */}
      <Section tone="paper" id="model">
        <SectionHeading
          eyebrow="Impact model"
          title="A pathway, not a one-off workshop."
          intro="Each stage builds on the last, moving young people from access towards real opportunity."
        />
        <Journey steps={journey} />
      </Section>

      {/* Flywheel */}
      <Section tone="ink" id="flywheel">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Eyebrow dark>How Zarq sustains itself</Eyebrow>
            <h2 className="text-4xl sm:text-5xl leading-[1.05] mb-5">Commercial work and impact, by design.</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Zarq is a hybrid social-impact and commercial technology enterprise. Commercial services earn revenue. Funding and partnerships make youth programmes accessible.
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

      {/* Targets */}
      <Section id="targets">
        <SectionHeading
          eyebrow="Year 1 targets"
          title="What we're aiming for in Year 1."
          intro="These are proposed targets, not achievements. We'll report against them openly."
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {yearOneTargets.map(({ value, label }) => (
            <div key={label} className="rounded-2xl border border-gray-200 p-5 sm:p-6">
              <StatusBadge status="target" className="mb-5" />
              <p className="font-brand text-4xl sm:text-5xl leading-none mb-2">{value}</p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Year 1 plan */}
      <Section tone="paper" id="plan">
        <SectionHeading eyebrow="Year 1 plan" title="Four phases to a proven model." />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {yearOnePlan.map(({ phase, months, text }, i) => (
            <li key={phase} className="rounded-2xl bg-white border border-gray-200 p-6">
              <p className="font-spec text-xs text-gray-400 mb-6">Phase {i + 1} · {months}</p>
              <h3 className="text-2xl mb-3">{phase}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Evidence */}
      <Section id="evidence">
        <div className="rounded-2xl border border-dashed border-gray-300 p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <StatusBadge status="planned" className="mb-6" />
          <h2 className="text-3xl sm:text-4xl leading-tight mb-4">Stories and results, as they happen.</h2>
          <p className="text-gray-600 leading-relaxed">
            When the first cohort completes and projects are built, this is where we'll share verified outcomes, project work and stories from the young people involved.
          </p>
        </div>
      </Section>

      <CTABand
        eyebrow="Support Zarq"
        title="Help us reach these targets."
        intro="Partners, funders and supporters make accessible youth programmes possible."
        primary={{ to: '/get-involved#partners', label: 'Partner with us' }}
        secondary={{ to: '/digital', label: 'Work with Zarq Digital' }}
      />
    </div>
  );
}
