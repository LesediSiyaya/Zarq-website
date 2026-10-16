// Per-page search metadata. Used by useSEO in the browser and by the build-time
// prerender, so every page ships with its own title and description in plain HTML.

export interface PageMeta {
  path: string;
  name: string; // short name, used in breadcrumbs
  title: string; // " | ZARQ" is appended unless the title already contains "ZARQ"
  description: string;
  indexable?: boolean;
  parent?: string; // path of the parent page, for breadcrumbs
}

export const pages: PageMeta[] = [
  {
    path: '/',
    name: 'Home',
    title: 'Web Design & Youth Tech Programmes in Matatiele',
    description:
      'ZARQ builds websites, apps and digital solutions for businesses, and runs practical tech programmes for young people. Based in Matatiele, working nationwide.',
  },
  {
    path: '/about',
    name: 'About',
    title: 'About ZARQ: Mission, Impact & Founder Lesedi Siyaya',
    description:
      'ZARQ is a youth technology and digital opportunity company in Matatiele, Eastern Cape, founded by Lesedi Siyaya. Our story, mission, impact model and goals.',
  },
  {
    path: '/programmes',
    name: 'Programmes',
    title: 'Coding, AI & STEM Classes for Youth in Matatiele',
    description:
      'Practical coding, robotics, AI, web development and digital skills for young people in Matatiele and online, through ZARQ Academy, learner tracks, Labs and ZARQ Hub.',
  },
  {
    path: '/digital',
    name: 'ZARQ Digital',
    title: 'Web Design, Apps & CIPC Registration in Matatiele',
    description:
      'Websites from R1,500, apps, branding, AI, CIPC company registration and domains. Transparent pricing, delivered online across South Africa from Matatiele.',
  },
  {
    path: '/digital/websites',
    name: 'Website design',
    parent: '/digital',
    title: 'Website Design in Matatiele & Online | ZARQ Digital',
    description:
      'Professional, mobile-friendly websites for businesses, schools and organisations, from R1,500. Based in Matatiele, Eastern Cape, working online nationwide.',
  },
  {
    path: '/digital/cipc-registration',
    name: 'CIPC registration',
    parent: '/digital',
    title: 'CIPC Company Registration Help, from R480',
    description:
      'Register your Pty Ltd or NPC with CIPC without the hassle. Name reservation, registration and SARS tax number support, done online from Matatiele.',
  },
  {
    path: '/programmes/coding-classes',
    name: 'Coding classes',
    parent: '/programmes',
    title: 'Free Coding Classes for Kids & Youth in Matatiele',
    description:
      'Free coding, robotics, AI and web development classes for young people aged 5 and up, in Matatiele and online. Devices and kits provided. Register your interest.',
  },
  {
    path: '/programmes/digital-kindness',
    name: 'Digital Kindness',
    parent: '/programmes',
    title: 'Digital Kindness: Online Safety & Responsible AI for Youth',
    description:
      'Part of every ZARQ class: kindness online, digital wellbeing, responsible AI, online safety and using technology for good. Free for learners in Matatiele and online.',
  },
  {
    path: '/partners',
    name: 'Partner with ZARQ',
    title: 'Partner With Us: Sponsor Youth Tech Skills',
    description:
      'Sponsor devices, connectivity or a full cohort for young people in Matatiele, Eastern Cape. Partnership options, in-kind support and quarterly impact reports.',
  },
  {
    path: '/get-involved',
    name: 'Get Involved',
    title: 'Get Involved: Learn, Mentor, Partner or Support',
    description:
      'Join a ZARQ programme, partner as a school or organisation, mentor young people, sponsor our work or hire ZARQ Digital for your next project.',
  },
  {
    path: '/contact',
    name: 'Contact',
    title: 'Contact Us: Matatiele, Eastern Cape',
    description:
      'Get a quote, join a programme or start a partnership. Email admin@zarq.co.za, call or WhatsApp 073 028 6401. Based in Matatiele, working online.',
  },
  {
    path: '/faq',
    name: 'FAQ',
    title: 'FAQ: Services, Programmes & Partnerships',
    description:
      'Answers to common questions about ZARQ Digital services and pricing, ZARQ programmes for young people, partnerships and how to get in touch.',
  },
  {
    path: '/terms',
    name: 'Terms of Service',
    title: 'Terms of Service',
    description: 'The terms for ZARQ Digital services: quotes, payments, timelines, revisions, ownership, cancellations and support.',
  },
  {
    path: '/privacy',
    name: 'Privacy Policy',
    title: 'Privacy Policy',
    description: 'How ZARQ collects, uses and protects your personal information, in line with POPIA.',
  },
  {
    path: '/404',
    name: 'Page not found',
    title: 'Page not found',
    description: 'The page you are looking for does not exist. Return to the ZARQ homepage.',
    indexable: false,
  },
];

export const pageMeta = (path: string): PageMeta => pages.find((p) => p.path === path) ?? pages[pages.length - 1];

// Append the brand unless the title already names it, so results never read "ZARQ | ... | ZARQ".
export const fullTitle = (meta: PageMeta) => (/\bZARQ\b/.test(meta.title) ? meta.title : `${meta.title} | ZARQ`);
