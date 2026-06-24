import type { CaseStudyHeroData } from './types'
import { CaseStudyRecognitionBadge } from './CaseStudyRecognitionBadge'
import * as styles from './case-study.css'

function buildHeroBackground(data: CaseStudyHeroData): string {
  if (data.backgroundStyle) return data.backgroundStyle
  const accent = data.accentColor ?? '#380BBB'
  const image = data.heroImage ?? ''
  if (image) {
    return `linear-gradient(135deg, ${accent}e6 0%, ${accent}99 50%, ${accent}80 100%), url("${image}")`
  }
  return `linear-gradient(135deg, ${accent}e6 0%, ${accent}99 100%)`
}

export interface CaseStudyHeroProps {
  data: CaseStudyHeroData
}

export function CaseStudyHero({ data }: CaseStudyHeroProps) {
  const background = buildHeroBackground(data)

  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: background }}
    >
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeadline}>
            {data.recognition && (
              <CaseStudyRecognitionBadge recognition={data.recognition} />
            )}
            <p className={styles.heroEyebrow}>{data.eyebrow}</p>
            <h1 className={styles.heroTitle}>{data.title}</h1>
          </div>
          <p className={styles.heroDescription}>{data.description}</p>
          <a
            href={data.ctaUrl}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.heroButton}
          >
            {data.ctaLabel}
            <svg
              className={styles.iconSm}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
