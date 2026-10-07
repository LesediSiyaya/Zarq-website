// Per-page search metadata. Used by useSEO in the browser and by the build-time
// prerender, so every page ships with its own title and description in plain HTML.

export interface PageMeta {
  path: string;
  name: string; // short name, used in breadcrumbs
  title: string; // " | Zarq" is appended
  description: string;
  indexable?: boolean;
}

export const pages: PageMeta[] = [
  {
    path: '/',
    name: 'Home',
    title: 'Youth Technology Enterprise in Matatiele, Eastern Cape',
    description:
      'Zarq helps underserved young people move from digital exclusion to economic participation through access to technology, practical skills, projects, mentorship and opportunity pathways.',
  },
  {
    path: '/about',
    name: 'About',
    title: 'About Zarq | Story, Mission & Founder Lesedi Siyaya',
    description:
      'Zarq is an early-stage youth technology and digital opportunity enterprise rooted in Matatiele, Eastern Cape, founded by Lesedi Siyaya.',
  },
  {
    path: '/programmes',
    name: 'Programmes',
    title: 'Youth Tech Programmes: Coding, AI & STEM in Matatiele',
    description:
      'Zarq Academy, Juniors, Youth, Future, Robotics & STEM, Labs and the planned Zarq Hub: practical coding, AI and digital skills for young people in Matatiele, with some classes planned online.',
  },
  {
    path: '/digital',
    name: 'Zarq Digital',
    title: 'Zarq Digital | Web Design, Apps & CIPC Registration',
    description:
      'Websites, apps, UI/UX, branding, AI, automation, IT, cybersecurity, CIPC business registration and domains. Based in Matatiele, Eastern Cape; services delivered online.',
  },
  {
    path: '/impact',
    name: 'Impact',
    title: 'Impact | Model, Year 1 Targets & Plan',
    description:
      'How Zarq plans to create impact: the problem it addresses, its hybrid impact model, proposed Year 1 targets and the plan to measure results honestly.',
  },
  {
    path: '/get-involved',
    name: 'Get Involved',
    title: 'Get Involved | Join, Partner, Mentor or Support',
    description:
      'Join Zarq as a young person, partner as a school or organisation, become a mentor, support Zarq or work with Zarq Digital.',
  },
  {
    path: '/contact',
    name: 'Contact',
    title: 'Contact Zarq | Matatiele, Eastern Cape',
    description:
      'Contact Zarq to join a programme, partner, mentor, support Zarq or start a Zarq Digital project. Email admin.zarq@gmail.com or call 073 028 6401.',
  },
  {
    path: '/faq',
    name: 'FAQ',
    title: 'FAQ | Programmes, Services & Getting Involved',
    description: 'Answers to common questions about Zarq, its programmes, Zarq Digital services and how to get involved.',
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

export const fullTitle = (meta: PageMeta) => `${meta.title} | Zarq`;
