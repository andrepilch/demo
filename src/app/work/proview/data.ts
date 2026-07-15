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
    value: '5k',
    label: 'Monthly Users',
    description: 'Across platforms',
  },
  {
    value: '5 continents',
    label: 'Worldwide BU Såtakeholders',
    description: 'Across languages',
  },
]

const projectMeta = {
  role: ['Product Designer', 'Mobile UI/UX Designer'],
  platforms: ['Tablet (iPad/Android)', 'Desktop Web'],
  devices: ['iPad', 'Android tablet', 'Desktop', 'Web'],
  tech: ['Native iOS and Android apps', 'Web app'],
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
    'Proview from Thomson Reuters is an e-reader application for large volume law and accounting titles with complex deep search capabilities.',
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
  // {
  //   principle: 'Accuracy is non-negotiable',
  //   outcome: 'Integrated search capabilities',
  // },
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
    'ProView shipped across tablet and desktop platforms as Thomson Reuters’ e-reader for large-volume law and accounting titles.',
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
  description: `ProView provides professionals with the freedom and flexibility to work wherever and whenever they want. The product was a primary revenue generator for the Advanced Innovation team at Thomson Reuters.`,
  results: proviewResults,
}

export const conclusionSection: CaseStudySectionData = {
  eyebrow: 'Conclusion',
  title: 'Professional Tools for High-Stakes Environments',
  description: `ProView demonstrates that digital eBooks can surpass print by offering persistence and connectivity.`,
}

export const conclusionBenefits: CardItem[] = [
  'Offline Accessibility for uninterrupted workflow',
  'Persistent Annotations that survive edition updates',
  'Multiple search capabilities to find authoritative content',
].map((title) => ({ title }))
