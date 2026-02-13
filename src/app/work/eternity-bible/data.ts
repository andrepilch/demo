import type {
  CaseStudyHeroData,
  CaseStudyOverviewData,
  CaseStudySectionData,
  CaseStudyStrategyOutcome,
  CaseStudyResult,
  CaseStudyFeatureHighlightData,
  CaseStudyGalleryImage,
  CaseStudyResultsData,
} from '@/app/work/components'
import type { CardItem } from '@/app/work/components'

// Re-export for FeaturedCaseStudies
export const eternityResults: CaseStudyResult[] = [
  { value: '5★', label: 'Rated', description: 'App Store rating' },
  { value: '95%', label: 'Engagement', description: 'With core feature' },
]

const projectMeta = {
  role: [
    'Solo Designer',
    'Solo and Lead Developer',
    'Product Owner',
    'Design system',
    'Project manager',
  ],
  platforms: ['iOS', 'Android', 'Mobile Web', 'Desktop Web'],
  devices: ['iPhone', 'iPad', 'Android phone', 'Android tablet', 'Web'],
  tech: [
    'ReactJS',
    'TypeScript',
    'PigmentCSS',
    'NextJS',
    'Cursor AI',
    'Vercel',
    'Github',
    'TWA',
  ],
  year: '2025–Present',
  status: 'Live',
}

export const heroData: CaseStudyHeroData = {
  eyebrow: 'Eterntiy Bible App Case Study',
  title: 'Challenging the Norms in a Saturated Market',
  description:
    'Full-stack React/NextJS application built and shipped solo to app stores in under 1 year',
  ctaLabel: 'Visit Eternity Bible',
  ctaUrl: 'https://eternitybible.app',
  accentColor: '#380BBB',
  heroImage: '/images/projects/eternity/eternity_read.jpg',
}

export const overviewData: CaseStudyOverviewData = {
  eyebrow: 'Overview',
  title: 'The Project',
  description: `Designed to help you open the Bible more often. The challenge of Eternity Bible was to rethink the status quo of digital Bibles from the perspective of the user.
The people using Bible apps tend to follow the same patterns as well like attending church, reading several translations or sometimes even languages in different settings and groups.
 
The reality is that most people don't open the Bible on their phone because of the cognitive load of finding your spot and navigating the app. 
Eternity Bible lets you create Bibles for every context and resume reading
exactly where you left off in each Bible instantly. You can save
settings and a translation for each Bible.`,
  projectMeta,
}

export const problemSection: CaseStudySectionData = {
  eyebrow: 'The Challenge',
  title: 'Problem Identification',
  description:
    'Digital Bibles are designed around print expectations, not around human lives today. Particularly the churched.',
}

export const painPoints: CardItem[] = [
  'Only one translation available',
  'Has ads or sponsorships and promotional materials',
  'Single language eliminates bilinguals',
  'Hard and slow to navigate the Bible',
  'Takes longer to find your spot in digital Bible than it does on paper, why?!',
  'Too many features you never actually use on your phone',
  'High cognitive load',
  'Too many taps, 3-4 to get back to bookmark or history in other Bible',
  'Thinking and memory involved to find your spot means app left unopened',
  'Contains false teaching',
  'Costs money',
  'Poor formatting',
  'Full of distractions drawing you away from the Bible',
  'Too many settings',
  'Not curated',
].map((title) => ({ title }))

export const strategySection: CaseStudySectionData = {
  eyebrow: 'Strategy',
  title: 'Strategy & Goals',
  description: `**Challenger** — We're aiming to position our product as more exciting than others available in the market based on features, design, and efficiency.`,
}

export const strategyOutcomes: CaseStudyStrategyOutcome[] = [
  {
    principle: "Everything must be better in the user's mind",
    outcome: 'Clients use and want to share',
  },
  {
    principle: 'No one should feel like they need to know more',
    outcome: 'Users are comfortable',
  },
  {
    principle:
      'No one should feel like our first user, things should work as expected',
    outcome: 'Trust is built',
  },
  {
    principle: 'Save user time',
    outcome:
      'Adds value; better tools take less time to use. Tools that save time add value.',
  },
  {
    principle: 'Minimize effort',
    outcome: 'Easier to be in the app, and most importantly, in the Bible',
  },
]

export const audienceSection: CaseStudySectionData = {
  eyebrow: 'Audience',
  title: 'Target Audience',
}

export const audienceCards: CardItem[] = [
  {
    title: 'Do you wish it could be easier to use your Bible on your phone?',
  },
  {
    title:
      'Do you avoid opening the Bible on your phone because it takes too long to find your spot?',
  },
]

export const whatItIsntSection: CaseStudySectionData = {
  eyebrow: 'Focus',
  title: "What It Isn't",
  description:
    "The aim isn't to create another ecosystem or publishing platform for our own or someone else's content.",
}

export const principlesSection: CaseStudySectionData = {
  eyebrow: 'Foundation',
  title: 'Product Principles',
}

export const productPrinciples: CardItem[] = [
  { title: 'UX is primary', description: 'Everything must be better' },
  {
    title: 'Designed for the user',
    description: 'Takes you into the Bible, not out of it',
  },
  {
    title: 'Content first',
    description: 'The app does not make itself noticed',
  },
]

export const designProcessSection: CaseStudySectionData = {
  eyebrow: 'Methods',
  title: 'Design Methods',
}

export const designProcessSteps: CardItem[] = [
  'Understand problems',
  'Competitive analysis',
  'Ideation',
  'Wireframes',
  'Interviews with target audience to discuss solutions',
  'Design',
  'Develop',
  'Release incrementally',
  'Invite users to test along the way',
  'React to feedback quickly',
  'Release & Test with closed testing group',
  'Iterate on design and features',
  'Release to app stores',
  'Continue evolving features',
].map((title, i) => ({ title, number: i + 1 }))

export const solutionSection: CaseStudySectionData = {
  eyebrow: 'Solution',
  title: 'Solution',
}

export const featureMultipleBibles: CaseStudyFeatureHighlightData = {
  eyebrow: 'Creating Value',
  title: 'Make a Bible for Every Context',
  description: `Eternity Bible lets you create Bibles for every context and resume reading exactly where you left off in each Bible instantly. You can save settings and translation for each Bible.`,
  bullets: [
    'Create unlimited personal Bibles for different purposes',
    'Resume reading exactly where you left off instantly',
    'Save settings and translation for each Bible',
    'Pick up where you left off on any device',
  ],
  imageSrc: '/images/projects/eternity/eternity_hand.jpg',
  imageAlt: 'My Bibles screen showing multiple Bible cards',
  imagePosition: 'right',
}

export const featureSearchByMeaning: CaseStudyFeatureHighlightData = {
  eyebrow: 'Challenging Competition',
  title: 'Powerful Search by Meaning',
  description: `Eternity's vector search feature helps you discover Scripture based on what you're looking for, not just exact word matches.`,
  bullets: [
    'Search by meaning, not just keywords',
    'Quicker to find a verse than traditional search',
  ],
  imageSrc: '/images/projects/eternity/eternity_search.jpg',
  imageAlt: 'Search by meaning interface',
  imagePosition: 'right',
}

export const featureOneTapAccess: CaseStudyFeatureHighlightData = {
  eyebrow: 'Enhancing Brand Experience',
  title: 'Quick Access to Your Chapter',
  description: `Eternity Bible lets you quickly access your chapter with a unique navigation tray.`,
  bullets: [
    'Quick access to your chapter by tapping the chapter number in the navigation tray',
    'This UI pattern turns 4 taps into 2 taps without losing context',
    'Light cognitive load for an action that is repeated often',
  ],
  imageSrc: '/images/projects/eternity/eternity_tray.jpg',
  imageAlt: 'Simple navigation interface',
  imagePosition: 'left',
}

export const featureMultipleLanguages: CaseStudyFeatureHighlightData = {
  eyebrow: 'Creating Visibility',
  title: 'Multiple Languages',
  description: `Eternity Bible supports multiple languages, so you can read the Bible in your native language.`,
  bullets: [
    'Support for multiple languages',
    'Read the Bible in your native language without all the taps to switch back to your churched language',
  ],
  imageSrc: '/images/projects/eternity/eternity_multilingual.jpg',
  imageAlt: 'Multiple languages interface',
  imagePosition: 'left',
}

export const finalDesignsSection: CaseStudySectionData = {
  eyebrow: 'Final Designs',
  title: 'The Shipped Product',
  description:
    'The final designs shipped to the App Store and Google Play and available across devices on the web.',
}

export const finalDesignsImages: CaseStudyGalleryImage[] = [
  {
    src: '/images/projects/eternity/eternity_home.jpg',
    alt: 'My Bibles - Multiple Bible cards for different contexts',
  },
  {
    src: '/images/projects/eternity/eternity_read.jpg',
    alt: 'Reading view - Clean, focused reading experience',
  },
]

export const resultsData: CaseStudyResultsData = {
  eyebrow: 'Impact',
  title: 'Project Results',
  description: `Eternity Bible is receiving overwhelmingly positive feedback for its core, innovative feature: the ability to set up multiple, personalized Bibles for different purposes (e.g., personal devotion, family study, Sunday service). Users describe this as a "fantastic" and "game changer" feature that simplifies navigation and allows them to instantly pick up right where they left off in any context.`,
  results: eternityResults,
}

export const conclusionSection: CaseStudySectionData = {
  eyebrow: 'Conclusion',
  title: 'Challenging the Norms',
  description: `The app takes full advantage of digital capabilities to create a better alternative to print.`,
}

export const digitalBibleBenefits: CardItem[] = [
  'Can read in the dark',
  'Can hold with children in your arms',
  'Always in your pocket',
  'Adapts to your setting',
  'Remembers for you',
  'Many Bibles without the weight',
  'Quicker to find a verse',
].map((title) => ({ title }))
