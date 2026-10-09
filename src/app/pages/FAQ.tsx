import { useSEO } from '../components/useSEO';
import { PageHeader, Section, CTABand } from '../components/zarq/ui';
import { FAQAccordion, type FAQItem } from '../components/zarq/FAQAccordion';

export const faqGroups: { title: string; items: FAQItem[] }[] = [
  {
    title: 'About Zarq',
    items: [
      {
        question: 'What is Zarq?',
        answer:
          'Zarq is a youth technology and digital opportunity company based in Matatiele, Eastern Cape. Zarq Digital provides technology services to businesses and organisations, and Zarq programmes give young people access to technology, practical skills, projects, mentorship and opportunity.',
      },
      {
        question: 'What can I sign up for?',
        answer:
          'Businesses can work with Zarq Digital today. Young people and parents can register their interest in Zarq programmes. Schools, mentors and partners can get in touch through Get Involved.',
      },
      {
        question: 'Where is Zarq based, and do you work online?',
        answer:
          'Zarq is based in Matatiele, Eastern Cape, South Africa. Zarq Digital works with clients online, so you don’t need to be in Matatiele to work with us. Zarq programmes are delivered in Matatiele and online.',
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
          'Register your interest through the contact form and choose “Joining a programme”. We’ll be in touch with programme dates and details. Parents and guardians are welcome to enquire on behalf of a young person.',
      },
      {
        question: 'Is there a Zarq centre I can visit?',
        answer:
          'Zarq Hub, a dedicated technology space in Matatiele, is coming. Until it opens, please get in touch before visiting, and we’ll arrange to meet.',
      },
    ],
  },
  {
    title: 'Zarq Digital',
    items: [
      {
        question: 'What does Zarq Digital do?',
        answer:
          'Websites, app development, UI/UX design, branding, AI implementation, automation, IT services, cybersecurity awareness and consulting, digital strategy, business registration (CIPC) and domain registration. Packages, pricing and a client FAQ (payments, timelines, revisions) are on the Zarq Digital page.',
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
          'Yes. Our goals are on the About page, and we report on progress openly with our partners.',
      },
    ],
  },
];

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
