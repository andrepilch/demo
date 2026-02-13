import Image from 'next/image'
import { Section, SectionGap } from '@/components/Section'
import { H3 } from '@/components/Text'
import type { CaseStudyFeatureHighlightData } from './types'
import * as styles from './case-study.css'

export interface CaseStudyFeatureHighlightProps {
  data: CaseStudyFeatureHighlightData
}

function CheckIcon() {
  return (
    <svg
      className={styles.featureCheckIcon}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

export function CaseStudyFeatureHighlight({ data }: CaseStudyFeatureHighlightProps) {
  const imageBlock = (
    <div className={styles.imageWrapper}>
      <Image
        src={data.imageSrc}
        alt={data.imageAlt}
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  )

  const contentBlock = (
    <div className={styles.featureContent}>
      <p className={styles.eyebrow}>{data.eyebrow}</p>
      <H3 className={styles.featureTitle}>{data.title}</H3>
      <p className={styles.featureDescription}>{data.description}</p>
      <ul className={styles.featureList}>
        {data.bullets.map((bullet, i) => (
          <li key={i} className={styles.featureListItem}>
            <CheckIcon />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <Section gap={SectionGap.lg}>
      <div className={styles.featureSection}>
        {data.imagePosition === 'left' ? (
          <>
            {imageBlock}
            {contentBlock}
          </>
        ) : (
          <>
            {contentBlock}
            {imageBlock}
          </>
        )}
      </div>
    </Section>
  )
}
