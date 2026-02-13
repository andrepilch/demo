import type { CaseStudyResultsData } from './types'
import { CaseStudySection } from './CaseStudySection'
import * as styles from './case-study.css'

export interface CaseStudyResultsProps {
  data: CaseStudyResultsData
}

export function CaseStudyResults({ data }: CaseStudyResultsProps) {
  const { eyebrow, title, description, results } = data
  return (
    <CaseStudySection
      data={{ eyebrow, title, description }}
    >
      <div className={styles.resultsGrid}>
        {results.map((result, i) => (
          <div key={i} className={styles.resultCard}>
            <span className={styles.resultValue}>{result.value}</span>
            <span className={styles.resultLabel}>{result.label}</span>
            <span className={styles.resultDescription}>
              {result.description}
            </span>
          </div>
        ))}
      </div>
    </CaseStudySection>
  )
}
