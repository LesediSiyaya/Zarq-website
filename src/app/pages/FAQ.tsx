import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useSEO } from '../components/useSEO';
import { PageHeader, Section, CTABand } from '../components/zarq/ui';

interface FAQItem {
  question: string;
  answer: string;
}

export const faqGroups: { title: string; items: FAQItem[] }[] = [
  {
    title: 'About Zarq',
    items: [
      {
        question: 'What is Zarq?',
        answer:
          'Zarq is an early-stage youth technology and digital opportunity enterprise rooted in Matatiele, Eastern Cape. It helps underserved young people move from digital exclusion to economic participation through access to technology, practical skills, projects, mentorship and opportunity pathways.',
      },
      {
        question: 'Is Zarq up and running?',
        answer:
          'Zarq is in development. Zarq Digital is taking enquiries now. The youth programmes are being developed, starting with a first structured programme, and initiatives such as Zarq Hub, Zarq Labs and Zarq Robotics & STEM are planned. Each programme on this site is clearly marked as current, developing or planned.',
      },
      {
        question: 'Where is Zarq based, and do you work online?',
        answer:
          'Zarq is based in Matatiele, Eastern Cape, South Africa. Zarq Digital services can be delivered online, so you don’t need to be in Matatiele to work with us. Some Zarq classes are also planned to be held online.',
      },
      {
        question: 'How is Zarq funded?',
        answer:
          'Zarq is a hybrid social-impact and commercial enterprise. Zarq Digital earns revenue from technology services, and funding and partnerships help make youth programmes accessible.',
      },
    ],
  },
  {
    title: 'Programmes',
    items: [
      {
        question: 'Who are the programmes for?',
        answer:
          'Young people in underserved communities, especially those with limited access to devices, connectivity and technology opportunities. That includes younger learners who need early exposure to digital skills and STEM, and young people interested in technology careers, entrepreneurship and digital work.',
      },
      {
        question: 'How do I join?',
        answer:
          'Register your interest through the contact form and choose “Joining a programme”. We’ll be in touch as the first structured programme opens. Parents and guardians are welcome to enquire on behalf of a young person.',
      },
      {
        question: 'Is there a Zarq centre I can visit?',
        answer:
          'Not yet. Zarq Hub, a physical access point in Matatiele for devices, connectivity, learning and mentorship, is planned. We’ll share updates as it develops.',
      },
    ],
  },
  {
    title: 'Zarq Digital',
    items: [
      {
        question: 'What does Zarq Digital do?',
        answer:
          'Websites, app development, UI/UX design, branding, AI implementation, automation, IT services, cybersecurity awareness and consulting, digital strategy, business registration (CIPC) and domain registration. Pricing is listed on the Zarq Digital page.',
      },
      {
        question: 'How do I get started on a project?',
        answer:
          'Send us a message through the contact form and choose “Zarq Digital project”, or reach out by email or WhatsApp. Tell us what you need and we’ll arrange a conversation.',
      },
    ],
  },
  {
    title: 'Getting involved',
    items: [
      {
        question: 'How can schools and organisations work with Zarq?',
        answer:
          'Schools, NGOs, corporates, CSI/ESG programmes and foundations can partner with Zarq on youth programmes and workshops. Visit Get Involved or contact us to start a conversation.',
      },
      {
        question: 'Can I become a mentor?',
        answer:
          'Yes. If you work in technology and want to support young people as they learn and build, choose “Becoming a mentor” on the contact form.',
      },
      {
        question: 'Will you share results?',
        answer:
          'Yes. Our Impact page lists proposed Year 1 targets. As programmes run, we’ll publish verified outcomes there, and we won’t present targets as achievements.',
      },
    ],
  },
];

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-gray-950 text-base sm:text-lg">{item.question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {/* Answers stay in the HTML (hidden when closed) so crawlers can read them. */}
      <p hidden={!open} className="pb-6 -mt-1 text-gray-600 leading-relaxed max-w-2xl">{item.answer}</p>
    </div>
  );
}

export default function FAQ() {
  useSEO('/faq');

  return (
    <div>
      <PageHeader eyebrow="FAQ" title="Questions, answered." intro="What people most often ask about Zarq, its programmes and Zarq Digital." />
      <Section>
        <div className="max-w-3xl space-y-14">
          {faqGroups.map((g) => (
            <div key={g.title}>
              <p className="font-spec text-xs uppercase tracking-[0.18em] text-gray-500 mb-2">{g.title}</p>
              <div className="border-t border-gray-200">
                {g.items.map((item) => <FAQAccordion key={item.question} item={item} />)}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CTABand
        eyebrow="Still curious?"
        title="Ask us directly."
        primary={{ to: '/contact', label: 'Start a conversation' }}
        secondary={{ to: '/get-involved', label: 'Get involved' }}
      />
    </div>
  );
}
