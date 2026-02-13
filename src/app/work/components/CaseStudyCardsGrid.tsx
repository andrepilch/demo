import { masonryGrid } from '@/components/PhilosophyMasonry.css'
import * as styles from './case-study.css'
import { H3, StatNumber, Body } from '@/components/Text'

export interface CardItem {
  title: string
  description?: string
  /** When set, show a number prefix (e.g. step 1, 2, 3) */
  number?: number
}

export interface CaseStudyCardsGridProps {
  items: CardItem[]
}

/** Renders only the cards grid (no section wrapper). Use inside CaseStudySection when you need custom layout (e.g. grid + image). */
export function CaseStudyCardsGrid({ items }: CaseStudyCardsGridProps) {
  return (
    <div className={masonryGrid}>
      {items.map((item, i) => (
        <div key={i} className={styles.problemCard}>
          {item.number != null && (
            <StatNumber className={styles.problemNumber}>{item.number}</StatNumber>
          )}
          <H3 className={styles.problemTitle}>{item.title}</H3>
          {item.description != null && item.description !== '' && (
            <Body className={styles.problemDescription}>{item.description}</Body>
          )}
        </div>
      ))}
    </div>
  )
}
