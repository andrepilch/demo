import type { CaseStudySectionData, CaseStudyStrategyOutcome } from './types'
import { CaseStudySection } from './CaseStudySection'
import * as styles from './case-study.css'

export interface CaseStudyStrategyGoalsProps {
  section: CaseStudySectionData
  items: CaseStudyStrategyOutcome[]
}

export function CaseStudyStrategyGoals({
  section,
  items,
}: CaseStudyStrategyGoalsProps) {
  return (
    <CaseStudySection data={section}>
      <div className={styles.goalsGrid}>
        {items.map((item, i) => (
          <div key={i} className={styles.goalCard}>
            <div className={styles.goalBlock}>
              <span className={styles.goalLabel}>Principle</span>
              <span className={styles.goalPrincipleText}>{item.principle}</span>
            </div>
            <span className={styles.goalArrow} aria-hidden>↓</span>
            <div className={styles.goalBlock}>
              <span className={styles.goalLabel}>Outcome</span>
              <span className={styles.goalOutcomeText}>{item.outcome}</span>
            </div>
          </div>
        ))}
      </div>
    </CaseStudySection>
  )
}
