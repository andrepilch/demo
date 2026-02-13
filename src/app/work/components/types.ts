// ============================================
// Case Study – Shared types for work/case study pages
// ============================================

export interface CaseStudyProjectMeta {
  role: string[]
  platforms: string[]
  devices: string[]
  tech: string[]
  year: string
  status: string
  /** Target audience segments (e.g. Churchgoers, Bilinguals). Optional. */
  targetAudience?: string[]
}

export interface CaseStudyStrategyOutcome {
  principle: string
  outcome: string
}

export interface CaseStudyPrinciple {
  title: string
  description: string
}

export interface CaseStudyResult {
  value: string
  label: string
  description: string
}

export interface CaseStudyFeatureItem {
  title: string
  description?: string
  bullets?: string[]
}

export interface CaseStudyHeroData {
  eyebrow: string
  title: string
  description: string
  ctaLabel: string
  ctaUrl: string
  /** CSS background (e.g. gradient + image). Optional; component may use accentColor. */
  backgroundStyle?: string
  /** Accent color for hero (e.g. #380BBB). Used if backgroundStyle not provided. */
  accentColor?: string
  /** Optional hero background image path */
  heroImage?: string
}

export interface CaseStudyOverviewData {
  eyebrow: string
  title: string
  description: string
  projectMeta: CaseStudyProjectMeta
}

export interface CaseStudySectionData {
  eyebrow: string
  title: string
  description?: string
}

export interface CaseStudyFeatureHighlightData {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  imageSrc: string
  imageAlt: string
  /** 'left' | 'right' – image position */
  imagePosition: 'left' | 'right'
}

export interface CaseStudyGalleryImage {
  src: string
  alt: string
}

export interface CaseStudyResultsData {
  eyebrow: string
  title: string
  description: string
  results: CaseStudyResult[]
}
