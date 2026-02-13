import type { CaseStudyResultsData } from './types'
import * as styles from './case-study.css'

export interface CaseStudyResultsProps {
  data: CaseStudyResultsData
}

export function CaseStudyResults({ data }: CaseStudyResultsProps) {
  return (
    <section className={styles.resultsSection}>
      <div className={styles.container}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h2 className={styles.sectionTitle}>{data.title}</h2>
            <p className={styles.sectionDescription}>{data.description}</p>
          </div>
          <div className={styles.resultsGrid}>
            {data.results.map((result, i) => (
              <div key={i} className={styles.resultCard}>
                <span className={styles.resultValue}>{result.value}</span>
                <span className={styles.resultLabel}>{result.label}</span>
                <span className={styles.resultDescription}>
                  {result.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
