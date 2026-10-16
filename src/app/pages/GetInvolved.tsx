import { GraduationCap, School, UserRound, Handshake, HeartHandshake, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useSEO } from '../components/useSEO';
import { PageHeader, Section, ButtonLink } from '../components/zarq/ui';

interface Path {
  id: string;
  icon: LucideIcon;
  who: string;
  title: string;
  text: string;
  how: string[];
  cta: { label: string; to: string };
}

const paths: Path[] = [
  {
    id: 'youth',
    icon: GraduationCap,
    who: 'Young people & families',
    title: 'Join ZARQ',
    text: 'Register your interest in ZARQ’s free programmes. We’ll be in touch with programme dates and details.',
    how: ['Learn practical digital and AI skills', 'Build real projects', 'Get mentorship and career exposure'],
    cta: { label: 'Join ZARQ', to: '/contact?interest=youth' },
  },
  {
    id: 'schools',
    icon: School,
    who: 'Schools & educational organisations',
    title: 'Partner as a school',
    text: 'Work with ZARQ to bring practical technology learning, workshops and STEM exposure to your learners.',
    how: ['Learner programmes and workshops', 'Digital and AI literacy', 'Robotics & STEM', 'Digital Kindness and online safety'],
    cta: { label: 'Partner as a school', to: '/contact?interest=school' },
  },
  {
    id: 'mentors',
    icon: UserRound,
    who: 'Technology professionals',
    title: 'Become a mentor',
    text: 'Share your experience with young people who are learning to build with technology.',
    how: ['Mentorship sessions', 'Project feedback', 'Career and industry insight', 'Modelling responsible technology use'],
    cta: { label: 'Become a mentor', to: '/contact?interest=mentor' },
  },
  {
    id: 'partners',
    icon: Handshake,
    who: 'Corporates, CSI/ESG, NGOs & foundations',
    title: 'Partner with us',
    text: 'Help build a measurable pathway from digital exclusion to economic participation, in Matatiele and beyond.',
    how: ['Programme partnerships', 'CSI and ESG alignment', 'Shared, transparent reporting'],
    cta: { label: 'Partner with us', to: '/partners' },
  },
  {
    id: 'supporters',
    icon: HeartHandshake,
    who: 'Sponsors & supporters',
    title: 'Support ZARQ',
    text: 'Support the equipment, connectivity and resources that make accessible youth programmes possible.',
    how: ['Devices and equipment', 'Connectivity and resources', 'Programme funding'],
    cta: { label: 'Ways to support', to: '/partners#support' },
  },
  {
    id: 'business',
    icon: Briefcase,
    who: 'Businesses & organisations',
    title: 'Work with ZARQ',
    text: 'Hire ZARQ Digital for websites, apps, AI, automation and more. Your project helps sustain youth programmes.',
    how: ['Websites and apps', 'AI and automation', 'IT, cybersecurity and strategy'],
    cta: { label: 'Work with ZARQ', to: '/digital' },
  },
];

export default function GetInvolved() {
  useSEO('/get-involved');

  return (
    <div>
      <PageHeader
        eyebrow="Get involved"
        title="There’s a place for you at ZARQ."
        intro="Learners, schools, mentors, partners, sponsors and clients all play a part in what ZARQ does. Find your way in."
      >
        <nav aria-label="Jump to" className="flex flex-wrap gap-2">
          {paths.map(({ id, title }) => (
            <a key={id} href={`#${id}`} className="px-4 py-2 rounded-full border border-gray-300 bg-white text-sm hover:border-gray-950 transition-colors">
              {title}
            </a>
          ))}
        </nav>
      </PageHeader>

      <Section>
        <div className="grid md:grid-cols-2 gap-4">
          {paths.map(({ id, icon: Icon, who, title, text, how, cta }) => (
            <article key={id} id={id} className="scroll-mt-24 rounded-2xl border border-gray-200 p-6 sm:p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-lg bg-[#fff1f6] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-950" aria-hidden="true" />
                </span>
                <p className="text-sm text-gray-500">{who}</p>
              </div>
              <h2 className="text-3xl mb-3">{title}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{text}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {how.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-gray-700">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ffc8dd] flex-shrink-0" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
              <div><ButtonLink to={cta.to} variant="secondary">{cta.label}</ButtonLink></div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
