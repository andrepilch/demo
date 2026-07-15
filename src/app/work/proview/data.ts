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
  // {
  //   value: '5k',
  //   label: 'Monthly Users',
  //   description: 'Across platforms',
  // },
  {
    value: '5 continents',
    label: 'Worldwide BU Stakeholders',
    description: 'Across languages',
  },
]

const projectMeta = {
  role: ['Product Designer', 'Mobile UI/UX Designer'],
  platforms: ['Android tablet', 'iPad', 'Desktop Web'],
  devices: ['Android tablet', 'iPad', 'Desktop', 'Web'],
  tech: ['Native Android and iOS apps', 'Web app'],
  year: '2014–2016',
  status: 'Sold',
  targetAudience: [
    'Legal Professionals',
    'Researchers',
    'Law Students',
    'Accountants',
  ],
}

export const heroData: CaseStudyHeroData = {
  eyebrow: 'ProView Case Study',
  title: 'Powering Up Professional Research',
  description:
    'Proview from Thomson Reuters was an e-reader application for large volume law and accounting titles with complex search capabilities.',
  accentColor: '#FF8000',
  heroImage: '/images/projects/proview/proview_cover.jpg',
}

export const overviewData: CaseStudyOverviewData = {
  eyebrow: 'Overview',
  title: 'The Project',
  description: `Designed to help professionals get the most out of their technical library. The challenge of ProView was to transform static legal texts into a dynamic research environment.
Legal professionals often need to navigate massive volumes, find specific sections quickly, and cross-reference authorities. ProView reduces the cognitive load of physical library management by offering powerful search across an entire eBook library and interactive tools that mirror and enhance traditional research habits.`,
  projectMeta,
}

export const problemSection: CaseStudySectionData = {
  eyebrow: 'The Challenge',
  title: 'Building on a Shipped Product',
  description:
    'ProView already served lawyers and accountants on web and iOS. The next step was expanding the platform set and keeping improvements moving without breaking established research habits.',
}

export const painPoints: CardItem[] = [
  {
    title: 'Platform Gap',
    description:
      'Android was not yet part of the shipping set — professionals on Android tablets lacked a native home for their libraries.',
  },
  {
    title: 'Search Inefficiency',
    description:
      'Finding specific terms across multiple physical books is slow and memory-dependent.',
  },
  {
    title: 'Evolving a Live Product',
    description:
      'Improvements had to deepen complex search and annotation tools without disrupting users already relying on ProView day to day.',
  },
]

export const strategySection: CaseStudySectionData = {
  eyebrow: 'Strategic Thinking',
  title: 'Product Strategy',
  description:
    'Grow the platform footprint on Android, while steadily advancing the capabilities professionals already trusted on web and iOS.',
}

export const strategyOutcomes: CaseStudyStrategyOutcome[] = [
  {
    principle: 'Work should never be redundant',
    outcome: 'Automatic note transfer between editions',
  },
  {
    principle: 'One research workflow everywhere',
    outcome: 'Search within an eBook or across a whole library',
  },
  {
    principle: 'Improve without reset',
    outcome: 'Evolve annotations, search, and navigation',
  },
]

export const designProcessSection: CaseStudySectionData = {
  eyebrow: 'Process',
  title: 'Design & Delivery',
}

export const designProcessImages: CaseStudyGalleryImage[] = []

export const designProcessSteps: CardItem[] = [
  'Ramping into a live product: learning ProView’s research patterns and constraints after ship',
  'Android platform design: adapting the reading and library experience for Android tablets',
  'Cross-platform features: designing capabilities that could ship on Android, iOS, and web together',
  'Iterative delivery: refining search, annotations, and navigation with feedback from a global professional audience',
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

export const featureNavigationSearch: CaseStudyFeatureHighlightData = {
  eyebrow: 'Creating Value',
  title: 'Advanced Navigation & Search',
  description: `Professional research demands speed and precision across massive volumes. ProView brings print-like navigation forward with digital tools built for deep search.`,
  bullets: [
    'Scrub bar navigation to jump quickly between sections within a volume',
    'Boolean search within an eBook or across a whole library using professional connectors',
    'Table of Contents drill-down to find specific sections without endless scrolling',
  ],
  imageSrc: '/images/projects/proview/proview_search.png',
  imageAlt: 'Advanced navigation and search in ProView',
  imagePosition: 'left',
}

export const finalDesignsSection: CaseStudySectionData = {
  eyebrow: 'Final Designs',
  title: 'The Full Vision',
  description:
    'Through ongoing improvements and the addition of Android, ProView became a multi-platform e-reader for large-volume law and accounting titles across tablet and desktop.',
}

export const finalDesignsVideo = {
  videoSrc: '/images/projects/proview/proview_library.mp4',
  posterSrc: '/images/projects/proview/proview_library.png',
  alt: 'ProView library — titles organized for professional research',
}

/** Screenshots under the shipped-product video; empty = video only */
export const finalDesignsImages: CaseStudyGalleryImage[] = []

export const resultsData: CaseStudyResultsData = {
  eyebrow: 'Impact',
  description: `Expanding to Android and continuing to improve web and iOS gave professionals more ways to work from their libraries wherever they were. ProView remained a primary revenue generator for the Advanced Innovation team at Thomson Reuters.`,
  results: proviewResults,
}

export const conclusionSection: CaseStudySectionData = {
  eyebrow: 'Conclusion',
  title: 'Professional Tools for High-Stakes Environments',
  description: `Joining after ship meant the work was less about inventing ProView from scratch and more about expanding and refining it.`,
}

export const conclusionBenefits: CardItem[] = [
  'Android platform design that extended ProView to a new device class',
  'Continued feature delivery across web and iOS alongside Android',
  'Improvements to search, annotations, and navigation on a live product',
].map((title) => ({ title }))
