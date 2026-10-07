// Single source for Zarq facts and copy used across pages.
// Everything here traces back to the Zarq Website Design & Content Master Brief.
// When evidence becomes available, update statuses here rather than in page files.

export type Status = 'current' | 'developing' | 'planned' | 'target';

export const contact = {
  email: 'admin.zarq@gmail.com',
  phoneDisplay: '073 028 6401',
  phoneHref: 'tel:+27730286401',
  whatsapp: 'https://wa.me/27730286401',
  instagramHandle: '@zarq_sa',
  instagramUrl: 'https://www.instagram.com/zarq_sa',
  addressLines: ['ERF 547 Maluti Township', 'Matatiele, 4740', 'Eastern Cape, South Africa'],
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
  delivery: 'Zarq Digital services can be delivered online. Some Zarq classes are planned to be held online.',
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
    summary: 'Practical skills, projects and mentorship for young people. The focus of the first structured programme.',
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
    summary: 'A planned physical access point in Matatiele for devices, connectivity, learning, mentorship, workshops and project development.',
  },
];

export const digitalServices = [
  { title: 'Websites', text: 'Clear, fast websites that help people find and trust you.' },
  { title: 'App development', text: 'Web and mobile applications built around how your users work.' },
  { title: 'UI/UX design', text: 'Interfaces and user journeys that are simple to use.' },
  { title: 'Branding', text: 'Visual identity that makes your organisation recognisable.' },
  { title: 'AI implementation', text: 'Practical ways to put AI tools to work in your organisation.' },
  { title: 'Automation', text: 'Fewer repetitive tasks through connected tools and workflows.' },
  { title: 'IT services', text: 'Setup, support and guidance for everyday technology.' },
  { title: 'Cybersecurity', text: 'Awareness training and consulting to help you work more safely.' },
  { title: 'Digital strategy', text: 'Working out where technology can help you operate and grow.' },
  { title: 'Business registration (CIPC)', text: 'From name reservation to your registration certificate and tax number.' },
  { title: 'Domain registration & setup', text: 'Your domain, DNS and professional email, connected and ready to use.' },
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

export const yearOneTargets = [
  { value: '30–50', label: 'young people reached' },
  { value: '20–40', label: 'structured programme completions' },
  { value: '15+', label: 'technology projects' },
  { value: '20+', label: 'mentorship sessions' },
  { value: '4+', label: 'community workshops' },
  { value: '5–10', label: 'devices made available' },
  { value: '2–3', label: 'school or community partnerships' },
  { value: '20+', label: 'young people with career or industry exposure' },
  { value: '2–5', label: 'initial paid or part-time opportunities, where viable' },
];

export const yearOnePlan = [
  { phase: 'Foundation', months: 'Months 1–3', text: 'Formalise operations, develop curriculum, set up systems, secure priority equipment, develop partnerships and begin finding commercial clients.' },
  { phase: 'Pilot', months: 'Months 4–6', text: 'Launch the first structured youth programme, provide mentorship, build practical projects and take on early commercial clients.' },
  { phase: 'Validate', months: 'Months 7–9', text: 'Improve the programme, develop the second cohort, strengthen partnerships and grow Zarq Digital.' },
  { phase: 'Scale readiness', months: 'Months 10–12', text: 'Measure outcomes, strengthen opportunity pathways, review financial performance and prepare a Year 2 expansion plan.' },
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
