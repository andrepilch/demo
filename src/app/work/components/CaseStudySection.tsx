import type { CaseStudySectionData } from './types'
import * as styles from './case-study.css'

export interface CaseStudySectionProps {
  /** Section header (eyebrow, title, optional description) */
  data: CaseStudySectionData
  /** Section content (e.g. grids, paragraphs, custom blocks). Omit for header-only sections. */
  children?: React.ReactNode
  /** Optional extra class for the section element */
  className?: string
}

export function CaseStudySection({
  data,
  children,
  className,
}: CaseStudySectionProps) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(' ')}>
      <div className={styles.container}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h2 className={styles.sectionTitle}>{data.title}</h2>
            {data.description != null && data.description !== '' && (
              <p className={styles.sectionDescription}>{data.description}</p>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}
