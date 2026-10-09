// Per-page search metadata. Used by useSEO in the browser and by the build-time
// prerender, so every page ships with its own title and description in plain HTML.

export interface PageMeta {
  path: string;
  name: string; // short name, used in breadcrumbs
  title: string; // " | Zarq" is appended unless the title already contains "Zarq"
  description: string;
  indexable?: boolean;
}

export const pages: PageMeta[] = [
  {
    path: '/',
    name: 'Home',
    title: 'Web Design & Youth Tech Programmes in Matatiele',
    description:
      'Zarq builds websites, apps and digital solutions for businesses, and runs practical tech programmes for young people. Based in Matatiele, working nationwide.',
  },
  {
    path: '/about',
    name: 'About',
    title: 'About Zarq: Mission, Impact & Founder Lesedi Siyaya',
    description:
      'Zarq is a youth technology and digital opportunity company in Matatiele, Eastern Cape, founded by Lesedi Siyaya. Our story, mission, impact model and goals.',
  },
  {
    path: '/programmes',
    name: 'Programmes',
    title: 'Coding, AI & STEM Classes for Youth in Matatiele',
    description:
      'Practical coding, AI, web development and digital skills for young people in Matatiele and online, through Zarq Academy, learner tracks, Labs and Zarq Hub.',
  },
  {
    path: '/digital',
    name: 'Zarq Digital',
    title: 'Web Design, Apps & CIPC Registration in Matatiele',
    description:
      'Websites from R1,500, apps, branding, AI, CIPC company registration and domains. Transparent pricing, delivered online across South Africa from Matatiele.',
  },
  {
    path: '/partners',
    name: 'Partner with Zarq',
    title: 'Partner With Us: Sponsor Youth Tech Skills',
    description:
      'Sponsor devices, connectivity or a full cohort for young people in Matatiele, Eastern Cape. Partnership options, in-kind support and quarterly impact reports.',
  },
  {
    path: '/get-involved',
    name: 'Get Involved',
    title: 'Get Involved: Learn, Mentor, Partner or Support',
    description:
      'Join a Zarq programme, partner as a school or organisation, mentor young people, sponsor our work or hire Zarq Digital for your next project.',
  },
  {
    path: '/contact',
    name: 'Contact',
    title: 'Contact Us: Matatiele, Eastern Cape',
    description:
      'Get a quote, join a programme or start a partnership. Email admin.zarq@gmail.com, call or WhatsApp 073 028 6401. Based in Matatiele, working online.',
  },
  {
    path: '/faq',
    name: 'FAQ',
    title: 'FAQ: Services, Programmes & Partnerships',
    description:
      'Answers to common questions about Zarq Digital services and pricing, Zarq programmes for young people, partnerships and how to get in touch.',
  },
  {
    path: '/privacy',
    name: 'Privacy Policy',
    title: 'Privacy Policy',
    description: 'How Zarq collects, uses and protects your personal information, in line with POPIA.',
  },
  {
    path: '/404',
    name: 'Page not found',
    title: 'Page not found',
    description: 'The page you are looking for does not exist. Return to the Zarq homepage.',
    indexable: false,
  },
];

export const pageMeta = (path: string): PageMeta => pages.find((p) => p.path === path) ?? pages[pages.length - 1];

// Append the brand unless the title already names it, so results never read "Zarq | ... | Zarq".
export const fullTitle = (meta: PageMeta) => (/\bZarq\b/.test(meta.title) ? meta.title : `${meta.title} | Zarq`);
