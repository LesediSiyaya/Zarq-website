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
    title: 'Web Design, Digital Services & Youth Tech Programmes | Matatiele',
    description:
      'Zarq builds websites, apps and digital solutions for businesses and organisations, and runs practical technology programmes for young people. Based in Matatiele, Eastern Cape; working online nationwide.',
  },
  {
    path: '/about',
    name: 'About',
    title: 'About Zarq | Mission, Impact & Founder Lesedi Siyaya',
    description:
      'Zarq is a youth technology and digital opportunity company in Matatiele, Eastern Cape, founded by Lesedi Siyaya. Our story, mission, impact model and goals.',
  },
  {
    path: '/programmes',
    name: 'Programmes',
    title: 'Youth Tech Programmes: Coding, AI & STEM in Matatiele',
    description:
      'Zarq Academy, Juniors, Youth, Future, Robotics & STEM, Labs and Zarq Hub: practical coding, AI and digital skills for young people, in Matatiele and online.',
  },
  {
    path: '/digital',
    name: 'Zarq Digital',
    title: 'Zarq Digital | Web Design, Apps & CIPC Registration',
    description:
      'Websites from R1,500, apps, UI/UX, branding, AI, automation, IT, cybersecurity, CIPC business registration and domains. Transparent pricing; delivered online across South Africa.',
  },
  {
    path: '/partners',
    name: 'Partner with Zarq',
    title: 'Partner with Zarq | Sponsor Youth Tech Skills in Matatiele',
    description:
      'Sponsor devices, connectivity or a full cohort for young people in Matatiele, Eastern Cape. Indicative costs, quarterly impact reporting and partnership options.',
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
