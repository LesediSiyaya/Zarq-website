// Single source for Zarq facts and copy used across pages.
// Everything here traces back to the Zarq Website Design & Content Master Brief.
// Statuses are not shown as labels on the site; they keep availability wording accurate
// (page copy, structured data and llms.txt). Update them here when a programme launches.

export type Status = 'current' | 'developing' | 'planned' | 'target';

export const contact = {
  email: 'admin.zarq@gmail.com',
  phoneDisplay: '073 028 6401',
  phoneHref: 'tel:+27730286401',
  whatsapp: 'https://wa.me/27730286401',
  instagramHandle: '@zarq_sa',
  instagramUrl: 'https://www.instagram.com/zarq_sa',
  // Area only: no street address is published until Zarq has a business premises.
  addressLines: ['Maluti, Matatiele', 'Eastern Cape, South Africa'],
};

export const founder = {
  name: 'Lesedi Siyaya',
  role: 'Founder, Zarq',
};

export const coreMessage =
  'Zarq helps underserved young people move from digital exclusion to economic participation by giving them access to technology, practical skills, projects, mentorship and opportunity pathways.';

export const vision =
  "A future where a young person's location or access to technology does not determine their ability to participate in the digital economy.";

export const mission =
  'To give young people, especially those from underserved communities, access to digital tools, practical technology education, mentorship and opportunities to build solutions that shape their futures.';

export const location = {
  base: 'Matatiele, Eastern Cape, South Africa',
  delivery: 'Zarq Digital works with clients online across South Africa. Zarq programmes are delivered in Matatiele and online.',
};

export const journey = [
  { step: 'Access', text: 'Devices, connectivity and a place to learn.' },
  { step: 'Learn', text: 'Practical digital, AI and technology skills.' },
  { step: 'Build', text: 'Real projects that become a portfolio.' },
  { step: 'Innovate', text: 'Solving problems that matter locally.' },
  { step: 'Opportunity', text: 'Education, work and entrepreneurship.' },
];

export const problemPoints = [
  'Computers and reliable connectivity',
  'Practical digital skills',
  'AI and emerging-technology exposure',
  'Mentors and professional networks',
  'Project opportunities',
  'Knowledge of technology careers',
];

export interface Programme {
  id: string;
  name: string;
  status: Status;
  summary: string;
  points?: string[];
}

export const academy: Programme = {
  id: 'academy',
  name: 'Zarq Academy',
  status: 'developing',
  summary: 'The learning core of Zarq: structured, practical technology education.',
  points: [
    'Digital literacy',
    'AI literacy',
    'Coding',
    'App & web development',
    'UI/UX',
    'Cybersecurity awareness',
    'Digital productivity',
    'Entrepreneurship',
  ],
};

export const tracks: Programme[] = [
  {
    id: 'juniors',
    name: 'Zarq Juniors',
    status: 'planned',
    summary: 'Early exposure to digital skills and STEM for younger learners.',
  },
  {
    id: 'youth',
    name: 'Zarq Youth',
    status: 'developing',
    summary: 'Practical skills, projects and mentorship for young people. Registrations of interest are open.',
  },
  {
    id: 'future',
    name: 'Zarq Future',
    status: 'planned',
    summary: 'Career exposure, entrepreneurship and pathways into education, employment and digital work.',
  },
];

export const ecosystem: Programme[] = [
  {
    id: 'robotics',
    name: 'Zarq Robotics & STEM',
    status: 'planned',
    summary: 'Robotics, STEM challenges, creative technology and problem-solving for younger learners.',
  },
  {
    id: 'labs',
    name: 'Zarq Labs',
    status: 'planned',
    summary: 'Practical project-building, community problem-solving, portfolios and innovation.',
  },
  {
    id: 'hub',
    name: 'Zarq Hub',
    status: 'planned',
    summary: 'A dedicated technology space coming to Matatiele, with devices, connectivity, workshops, mentorship and room to build.',
  },
];

export const digitalServices = [
  { title: 'Websites', from: 'From R1,500', text: 'Clear, fast websites that help people find and trust you.' },
  { title: 'App development', from: 'Quoted per project', text: 'Web and mobile applications built around how your users work.' },
  { title: 'UI/UX design', from: 'From R900', text: 'Interfaces and user journeys that are simple to use.' },
  { title: 'Branding', from: 'From R900', text: 'Visual identity that makes your organisation recognisable.' },
  { title: 'AI implementation', from: 'From R1,200', text: 'Practical ways to put AI tools to work in your organisation.' },
  { title: 'Automation', from: 'From R1,200', text: 'Fewer repetitive tasks through connected tools and workflows.' },
  { title: 'IT services', from: 'Quoted per project', text: 'Setup, support and guidance for everyday technology.' },
  { title: 'Cybersecurity', from: 'From R300', text: 'Awareness training and consulting to help you work more safely.' },
  { title: 'Digital strategy', from: 'From R600', text: 'Working out where technology can help you operate and grow.' },
  { title: 'Business registration (CIPC)', from: 'From R480', text: 'From name reservation to your registration certificate and tax number.' },
  { title: 'Domain registration & setup', from: 'From R300', text: 'Your domain, DNS and professional email, connected and ready to use.' },
];

// Zarq Digital pricing, carried over unchanged from the previous site.
export const pricingNote = 'Launch special: 40% off all services';

export const pricing = [
  { service: 'Website design & development', tiers: [
    { tier: 'Starter', price: 'R1,500', was: 'R2,500', desc: 'Landing page, mobile-friendly' },
    { tier: 'Standard', price: 'R3,000', was: 'R5,000', desc: 'Multi-page site + contact form' },
    { tier: 'Premium', price: 'R6,000', was: 'R10,000', desc: 'Full web app + SEO optimised' },
  ] },
  { service: 'UI/UX design', tiers: [
    { tier: 'Starter', price: 'R900', was: 'R1,500', desc: 'Wireframes + basic mockup' },
    { tier: 'Standard', price: 'R2,100', was: 'R3,500', desc: 'Full prototype + user testing' },
    { tier: 'Premium', price: 'R4,200', was: 'R7,000', desc: 'End-to-end UX with iterations' },
  ] },
  { service: 'Branding', tiers: [
    { tier: 'Starter', price: 'R900', was: 'R1,500', desc: 'Logo + colour palette' },
    { tier: 'Standard', price: 'R1,800', was: 'R3,000', desc: 'Full identity + brand guide' },
    { tier: 'Premium', price: 'R3,600', was: 'R6,000', desc: 'Complete brand system' },
  ] },
  { service: 'Cybersecurity', tiers: [
    { tier: 'Per session', price: 'R300', was: 'R500', desc: 'Awareness training session' },
    { tier: 'Standard', price: 'R720', was: 'R1,200', desc: 'Risk assessment + report' },
    { tier: 'Premium', price: 'R1,500', was: 'R2,500', desc: 'Full consultation + ongoing support' },
  ] },
  { service: 'AI & automation', tiers: [
    { tier: 'Starter', price: 'R1,200', was: 'R2,000', desc: 'Process audit + recommendations' },
    { tier: 'Standard', price: 'R3,000', was: 'R5,000', desc: 'Custom automation solution' },
    { tier: 'Premium', price: 'R6,000', was: 'R10,000', desc: 'Full AI integration + training' },
  ] },
  { service: 'Digital strategy', tiers: [
    { tier: 'Starter', price: 'R600', was: 'R1,000', desc: 'Digital presence audit' },
    { tier: 'Standard', price: 'R1,500', was: 'R2,500', desc: 'Strategy roadmap + content plan' },
    { tier: 'Premium', price: 'R3,000', was: 'R5,000', desc: 'Full strategy + implementation' },
  ] },
  { service: 'Business registration (CIPC)', tiers: [
    { tier: 'Starter', price: 'R480', was: 'R800', desc: 'Name reservation + CIPC guidance' },
    { tier: 'Standard', price: 'R900', was: 'R1,500', desc: 'Full PTY Ltd / NPC registration' },
    { tier: 'Premium', price: 'R1,800', was: 'R3,000', desc: 'Registration + SARS + compliance' },
  ] },
  { service: 'Domain registration', tiers: [
    { tier: 'Starter', price: 'R300', was: 'R500', desc: 'Domain registration + basic DNS' },
    { tier: 'Standard', price: 'R600', was: 'R1,000', desc: 'Domain + DNS + professional email' },
    { tier: 'Premium', price: 'R1,200', was: 'R2,000', desc: 'Full setup + hosting connection' },
  ] },
];

export const digitalAudiences = [
  'SMEs and entrepreneurs',
  'Schools and educational organisations',
  'NGOs and community organisations',
  'Corporates and CSI/ESG programmes',
  'Foundations and development organisations',
  'Any organisation that needs accessible technology services',
];

export const flywheel = [
  'Zarq Digital earns revenue',
  'Revenue and partnerships fund infrastructure',
  'Infrastructure powers youth programmes',
  'Young people become technology creators',
  'Projects and portfolios open opportunities',
  'Employment and entrepreneurship follow',
  'A stronger network and reputation bring more customers and partners',
];

// Shown on About as "Our goals" for the first year of programmes.
export const yearOneTargets = [
  { value: '30–50', label: 'young people reached' },
  { value: '20–40', label: 'programme completions' },
  { value: '15+', label: 'technology projects' },
  { value: '20+', label: 'mentorship sessions' },
  { value: '4+', label: 'community workshops' },
  { value: '5–10', label: 'devices made available' },
  { value: '2–3', label: 'school or community partnerships' },
  { value: '20+', label: 'young people with career or industry exposure' },
  { value: '2–5', label: 'paid or part-time opportunities' },
];


// Zarq Digital client FAQ: standard South African small-business terms, approved by Zarq.
export const digitalFaq = [
  {
    question: 'How much does a project cost?',
    answer: 'Our packages and prices are listed above. For anything larger or different, we’ll send a written quote after a short conversation. Quotes are valid for 30 days.',
  },
  {
    question: 'How do payments work?',
    answer: 'A 50% deposit confirms your booking and lets us start. The balance is due on completion, before handover or going live. Smaller services under R1,000 are paid upfront. We accept EFT, and we issue an invoice for every payment.',
  },
  {
    question: 'How long will it take?',
    answer: 'Once we’ve received your deposit and content, a Starter website takes 5–7 working days, a Standard website 2–3 weeks and a Premium website or web app 4–8 weeks. Branding takes 1–2 weeks, and domain and email setup 1–2 working days. CIPC registration depends on CIPC processing times, usually 1–3 weeks.',
  },
  {
    question: 'What do you need from me?',
    answer: 'Your logo (if you have one), text, photos and any examples you like. Not sure? We can help with content and branding too.',
  },
  {
    question: 'How many revisions are included?',
    answer: 'Two rounds of revisions are included in every package. Extra changes or new features are quoted separately.',
  },
  {
    question: 'Do I own my website?',
    answer: 'Yes. Once the final payment is made, the website, design files and content are yours.',
  },
  {
    question: 'Are hosting and domain fees included?',
    answer: 'Domain registration and hosting are billed separately at cost and renew annually. We’ll explain the options before you commit.',
  },
  {
    question: 'What happens after launch?',
    answer: 'You get 14 days of free support for fixes and small adjustments. After that, we offer support and maintenance on request.',
  },
  {
    question: 'Do you work with clients outside Matatiele?',
    answer: 'Yes. All Zarq Digital services are delivered online, so we can work with you anywhere in South Africa.',
  },
];

// Contact form interest options. `value` is what the enquiry email receives.
export const interestGroups = [
  {
    label: 'Programmes',
    options: [
      { key: 'youth', value: 'Joining a programme (youth)' },
      { key: 'parent', value: 'Parent or guardian enquiry' },
    ],
  },
  {
    label: 'Get involved',
    options: [
      { key: 'school', value: 'School partnership' },
      { key: 'mentor', value: 'Becoming a mentor' },
      { key: 'partner', value: 'Partnership (CSI, NGO, foundation)' },
      { key: 'support', value: 'Supporting or sponsoring Zarq' },
    ],
  },
  {
    label: 'Zarq Digital',
    options: [{ key: 'digital', value: 'Zarq Digital project' }],
  },
  {
    label: 'Other',
    options: [{ key: 'other', value: 'General enquiry' }],
  },
];
