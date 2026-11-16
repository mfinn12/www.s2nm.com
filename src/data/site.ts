// Site-wide content. Edit these values to update the site.
// Text comes from the legacy signal | noise marketing site and Word docs in backup/.

export const site = {
  name: 'signal | noise marketing',
  legalName: 'signal | noise marketing, LLC',
  title: 'signal | noise marketing – B2B tech marketing advisor',
  description:
    'signal | noise marketing provides B2B marketing advisory services to growing technology companies.',
  headline: 'More signal, less noise',
  // Contact form posts here. Check that this endpoint still works before launch.
  formAction: 'https://formspree.io/info@s2nm.com',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Expertise', href: '/expertise/' },
  { label: 'Activities', href: '/activities/' },
  { label: 'Portfolio', href: '/portfolio/' },
];

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/signal-noise-marketing/' },
  { label: 'X / Twitter', href: 'https://twitter.com/s2nm' },
  { label: 'Facebook', href: 'https://www.facebook.com/Signal-noise-marketing-1869149773178436/' },
];

export const clients = [
  {
    name: 'FoundationDB',
    logo: '/images/client-foundationdb.png',
    text: 'NoSQL database with ACID compliance.',
    note: 'Acquired by Apple',
  },
  {
    name: 'Wholesale Applications Community',
    logo: '/images/client-wac.png',
    text: 'App store founded by global mobile carriers.',
    note: 'Acquired by Apigee',
  },
  {
    name: 'MarkUP',
    logo: '/images/client-markup.png',
    text: 'Digital marketing platform experts.',
  },
];

export const principal = {
  name: 'Michael Finn',
  role: 'Principal',
  photo: '/images/michael-finn.jpg',
  employers: ['Arena', 'MicroStrategy', 'Microsoft'],
};

export const expertise = [
  {
    area: 'Marketing Strategy',
    items: ['Audience targeting and segmentation', 'Personas', 'Positioning'],
  },
  {
    area: 'Product',
    items: ['Value proposition', 'Pricing', 'Messaging', 'Competitive differentiation'],
  },
  {
    area: 'Demand Generation',
    items: ['List building', 'Drive new prospect meetings', 'Nurturing'],
  },
  {
    area: 'Marketing Operations',
    items: ['People', 'Process', 'Technology'],
  },
  {
    area: 'Enablement',
    items: ['Sales collateral repository', 'Sales training materials', 'FAQ and objection handling'],
  },
  {
    area: 'Communications',
    items: ['Brand', 'Creative'],
    note: "While I wouldn't hire me for purely creative reasons, I do have relationships with outstanding designers and writers that I work with on a freelance basis.",
  },
];

export const funnelStages = ['Awareness', 'Consideration', 'Purchase', 'Adoption'] as const;

// One row per activity group; each cell lists the activities for that funnel stage.
export const activities: { group: string; stages: string[][] }[] = [
  {
    group: 'Thought Leadership',
    stages: [
      ['Public relations', 'Influencers', 'Event speaking', 'Analyst reports', 'Content + social'],
      ['Analyst reviews', 'Product reviews', 'Webinars'],
      [],
      [],
    ],
  },
  {
    group: 'Demand Generation',
    stages: [
      ['Account-based marketing', 'Paid search', 'Paid social'],
      ['List building', 'Lead nurturing'],
      [],
      ['Onboarding'],
    ],
  },
  {
    group: 'Brand',
    stages: [
      ['Display ads', 'Paid video', 'Contributed articles'],
      ['Website', 'Case studies', 'Testimonial videos', 'Educational videos'],
      ['ROI', 'Deployment guide', '“How To” guides', 'Best practices'],
      ['Training materials', '“Quick Start” guide', 'Client newsletter'],
    ],
  },
  {
    group: 'Field / Channel',
    stages: [
      ['Partners', 'Prospecting', 'Memberships'],
      ['Sales presentations', 'Sales training'],
      [],
      [],
    ],
  },
];

export const strategy = 'Go-to-market planning, goal setting, forecasting';

export const metrics = [
  ['Impressions', 'Mentions', 'Opens', 'Awareness'],
  ['Clicks', 'Visits', 'Engagement', 'Inquiries'],
  ['MQL', 'SAL', 'SQL'],
  ['Usage', 'NSAT', 'Renewal'],
];

export const portfolio = [
  'Brand',
  'Campaigns',
  'Content',
  'Demand',
  'Enablement',
  'Product',
  'Strategy',
  'Thought Leadership',
  'Website',
];
