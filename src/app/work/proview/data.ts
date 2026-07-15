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
export const proviewResults: CaseStudyResult[] = [
  {
    value: 'Offline',
    label: 'Accessibility',
    description: 'Uninterrupted workflow without connectivity',
  },
  {
    value: 'Persistent',
    label: 'Annotations',
    description: 'Notes and highlights that survive edition updates',
  },
  {
    value: 'Integrated',
    label: 'Authority',
    description: 'Seamless WestlawNext connectivity',
  },
]

const projectMeta = {
  role: [
    'Product Designer',
    'UX Strategy',
    'Design System Management',
    'Feature Prioritization',
  ],
  platforms: ['Tablet (iPad/Android)', 'Desktop', 'Laptop'],
  devices: ['iPad', 'Android tablet', 'Desktop', 'Laptop'],
  tech: [
    'ProView App Ecosystem',
    'OnePass Authentication',
    'WestlawNext Integration',
    'KeyCite Citation Service',
  ],
  year: '2017–2020',
  status: 'Live',
  targetAudience: ['Legal Professionals', 'Researchers', 'Law Students'],
}

export const heroData: CaseStudyHeroData = {
  eyebrow: 'ProView Case Study',
  title: 'Powering Up Professional Research',
  description:
    'Full-stack interactive eBook platform designed for high-stakes legal and professional environments.',
  ctaLabel: 'Visit ProView',
  ctaUrl: 'https://www.thomsonreuters.com/en/products/proview',
  accentColor: '#FF8000',
  heroImage: '/images/projects/proview/proview_cover.jpg',
}

export const overviewData: CaseStudyOverviewData = {
  eyebrow: 'Overview',
  title: 'The Project',
  description: `Designed to help professionals get the most out of their technical library. The challenge of ProView was to transform static legal texts into a dynamic research environment.
Legal professionals often need to navigate massive volumes, find specific sections quickly, and cross-reference authorities. ProView reduces the cognitive load of physical library management by offering powerful search across an entire eBook library and interactive tools that mirror—and then enhance—traditional research habits.`,
  projectMeta,
}

export const problemSection: CaseStudySectionData = {
  eyebrow: 'The Challenge',
  title: 'Problem Identification',
  description:
    'Professional research has traditionally been tied to physical desks and heavy print volumes.',
}

export const painPoints: CardItem[] = [
  {
    title: 'Annotation Loss',
    description:
      'Handwritten notes in print volumes are lost when a new edition is released.',
  },
  {
    title: 'Search Inefficiency',
    description:
      'Finding specific terms across multiple physical books is slow and memory-dependent.',
  },
  {
    title: 'Connectivity Barriers',
    description:
      'Many digital tools fail in courtroom or transit environments without stable internet.',
  },
  {
    title: 'Authority Verification',
    description:
      'Manually checking if a statute is still "good law" is time-consuming and prone to error.',
  },
]

export const strategySection: CaseStudySectionData = {
  eyebrow: 'Strategic Thinking',
  title: 'Product Strategy',
  description:
    'A professional-grade strategy focused on accuracy, persistence, and mobility.',
}

export const strategyOutcomes: CaseStudyStrategyOutcome[] = [
  {
    principle: 'Work should never be redundant',
    outcome: 'Automatic note transfer between editions',
  },
  {
    principle: 'Accuracy is non-negotiable',
    outcome: 'Integrated KeyCite and WestlawNext links',
  },
  {
    principle: 'Context is king',
    outcome: 'Search within eBooks without leaving the current page',
  },
  {
    principle: 'Minimize friction',
    outcome:
      'One-tap navigation via Table of Contents and "Recently Read" jump lists',
  },
]

export const designProcessSection: CaseStudySectionData = {
  eyebrow: 'Process',
  title: 'Design & Delivery',
}

export const designProcessImages: CaseStudyGalleryImage[] = []

export const designProcessSteps: CardItem[] = [
  'Understand User Mobility: Analyzing where and how lawyers work',
  'Information Architecture: Organizing vast libraries for quick sorting by title, publisher, or jurisdiction',
  'Iterative UI Design: Creating a clean reading view that prioritizes content while keeping tools accessible via a single tap',
  'Integration Testing: Ensuring seamless handoffs between ProView and WestlawNext',
  'Offline Capability: Developing a robust download system for anywhere access',
].map((title, i) => ({ title, number: i + 1 }))

export const solutionSection: CaseStudySectionData = {
  eyebrow: 'Solution',
  title: 'Creating Value through Precision',
}

export const featureNotesThatNeverFade: CaseStudyFeatureHighlightData = {
  eyebrow: 'Creating Value',
  title: 'Notes That Never Fade',
  description: `Users can add color-coded notes and highlights anywhere. These are automatically transferred to new editions, creating a permanent, evolving knowledge base for the professional.`,
  bullets: [
    'Color-coded notes and highlights anywhere in a title',
    'Automatic transfer of annotations to new editions',
    'A permanent, evolving knowledge base for the professional',
  ],
  imageSrc: '/images/projects/proview/proview_notes.jpg',
  imageAlt: 'Color-coded notes and highlights in ProView',
  imagePosition: 'right',
}

export const featureAuthorityIntegration: CaseStudyFeatureHighlightData = {
  eyebrow: 'Creating Value',
  title: 'Seamless Authority Integration',
  description: `ProView allows users to ensure accuracy with links to controlling authority. Tapping a linked statute or case connects the user directly to WestlawNext, bridging the gap between an eBook and a live legal database.`,
  bullets: [
    'Direct links to controlling authority',
    'One tap from statute or case into WestlawNext',
    'Bridges eBook research with live legal databases',
  ],
  imageSrc: '/images/projects/proview/proview_authority.jpg',
  imageAlt: 'WestlawNext authority links in ProView',
  imagePosition: 'left',
}

export const featureNavigationSearch: CaseStudyFeatureHighlightData = {
  eyebrow: 'Creating Value',
  title: 'Advanced Navigation & Search',
  description: `Professional research demands speed and precision across massive volumes. ProView brings print-like navigation forward with digital tools built for deep search.`,
  bullets: [
    'Scrub bar navigation to jump quickly between sections within a volume',
    'Boolean search within an eBook or across a whole library using professional connectors',
    'Table of Contents drill-down to find specific sections without endless scrolling',
  ],
  imageSrc: '/images/projects/proview/proview_search.jpg',
  imageAlt: 'Advanced navigation and search in ProView',
  imagePosition: 'right',
}

export const featureReadingExperience: CaseStudyFeatureHighlightData = {
  eyebrow: 'Creating Value',
  title: 'Customized Reading Experience',
  description: `To reduce eye strain during long research sessions, users can set preferences for text size, line spacing, font, and color schemes.`,
  bullets: [
    'Adjustable text size and line spacing',
    'Font and color scheme preferences',
    'Built for long-form professional research sessions',
  ],
  imageSrc: '/images/projects/proview/proview_reading.jpg',
  imageAlt: 'Customizable reading preferences in ProView',
  imagePosition: 'left',
}

export const finalDesignsSection: CaseStudySectionData = {
  eyebrow: 'Final Designs',
  title: 'The Shipped Product',
  description:
    'ProView shipped across tablet and desktop platforms as Thomson Reuters’ e-reader for large-volume law and accounting titles.',
}

export const finalDesignsImages: CaseStudyGalleryImage[] = [
  {
    src: '/images/projects/proview/proview_home.jpg',
    alt: 'ProView library — titles organized for professional research',
  },
  {
    src: '/images/projects/proview/proview_read.jpg',
    alt: 'ProView reading view — clean, focused research experience',
  },
]

export const resultsData: CaseStudyResultsData = {
  eyebrow: 'Impact',
  description: `ProView provides professionals with the freedom and flexibility to work wherever and whenever they want. By enabling offline access, users can continue their research regardless of internet connectivity. A core "game-changer" feature is the automatic transfer of notes and highlights to new editions, ensuring that a user's intellectual work is never lost when content is updated. Integration with WestlawNext® and KeyCite® ensures that accuracy is maintained through direct links to controlling authority.`,
  results: proviewResults,
}

export const conclusionSection: CaseStudySectionData = {
  eyebrow: 'Conclusion',
  title: 'Professional Tools for High-Stakes Environments',
  description: `ProView demonstrates that digital eBooks can surpass print by offering persistence and connectivity. By prioritizing the user’s intellectual investment (notes) and the need for authoritative accuracy, ProView has become an essential tool for the modern legal workflow.`,
}

export const conclusionBenefits: CardItem[] = [
  'Offline Accessibility for uninterrupted workflow',
  'Persistent Annotations that survive edition updates',
  'Integrated Authority via seamless WestlawNext connectivity',
].map((title) => ({ title }))
