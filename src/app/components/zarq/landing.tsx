import { Check } from 'lucide-react';
import { Section, SectionHeading } from './ui';
import { FAQAccordion, type FAQItem } from './FAQAccordion';
import { pricing, pricingNote } from './content';

// Building blocks shared by the local service landing pages.

export function Packages({ service, note }: { service: string; note?: string }) {
  const tiers = pricing.find((p) => p.service === service)?.tiers ?? [];
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4">
        {tiers.map(({ tier, price, was, desc }, i) => (
          <div key={tier} className={`rounded-2xl p-6 sm:p-8 ${i === 1 ? 'bg-gray-950 text-white' : 'bg-white border border-gray-200'}`}>
            <p className={`font-spec text-xs uppercase tracking-[0.18em] mb-6 ${i === 1 ? 'text-gray-400' : 'text-gray-500'}`}>{tier}</p>
            <p className="font-brand text-5xl leading-none mb-1">{price}</p>
            <p className={`text-sm line-through mb-5 ${i === 1 ? 'text-gray-500' : 'text-gray-400'}`}>{was}</p>
            <p className={i === 1 ? 'text-gray-200' : 'text-gray-700'}>{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="inline-flex px-3 py-1.5 rounded-full bg-[#ffc8dd] text-sm font-medium">{pricingNote}</span>
        {note && <span className="text-sm text-gray-500">{note}</span>}
      </div>
    </>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-gray-700 leading-relaxed">
          <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-950" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Steps({ steps }: { steps: { step: string; text: string }[] }) {
  return (
    <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map(({ step, text }, i) => (
        <li key={step} className="rounded-2xl bg-white border border-gray-200 p-6">
          <span className="inline-flex w-10 h-10 rounded-lg items-center justify-center font-spec text-xs bg-stone-50 border border-gray-200 mb-6">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="text-xl mb-2">{step}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
        </li>
      ))}
    </ol>
  );
}

export function FAQSection({ items, title = 'Questions, answered.' }: { items: FAQItem[]; title?: string }) {
  return (
    <Section id="faq">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
        <SectionHeading className="!mb-0" eyebrow="FAQ" title={title} />
        <div className="border-t border-gray-200">
          {items.map((item) => <FAQAccordion key={item.question} item={item} />)}
        </div>
      </div>
    </Section>
  );
}
