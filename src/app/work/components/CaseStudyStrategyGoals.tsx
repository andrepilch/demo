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
            <div className={styles.goalTransform}>
              <span className={styles.goalFrom}>{item.principle}</span>
              <span className={styles.goalArrow}>→</span>
              <span className={styles.goalTo}>{item.outcome}</span>
            </div>
          </div>
        ))}
      </div>
    </CaseStudySection>
  )
}
