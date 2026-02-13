import type { CaseStudyOverviewData } from './types'
import { CaseStudySection } from './CaseStudySection'
import * as styles from './case-study.css'

export interface CaseStudyOverviewProps {
  data: CaseStudyOverviewData
}

export function CaseStudyOverview({ data }: CaseStudyOverviewProps) {
  const { projectMeta } = data

  return (
    <CaseStudySection
      data={{
        eyebrow: data.eyebrow,
        title: data.title,
        description: data.description,
      }}
    >
      <div className={styles.overviewGrid}>
        <div className={styles.overviewItem}>
          <p className={styles.overviewLabel}>My Role</p>
          <ul className={styles.overviewList}>
            {projectMeta.role.map((item, i) => (
              <li key={i} className={styles.overviewValue}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.overviewItem}>
          <p className={styles.overviewLabel}>Platforms</p>
          <ul className={styles.overviewList}>
            {projectMeta.platforms.map((item, i) => (
              <li key={i} className={styles.overviewValue}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.overviewItem}>
          <p className={styles.overviewLabel}>Devices</p>
          <ul className={styles.overviewList}>
            {projectMeta.devices.map((item, i) => (
              <li key={i} className={styles.overviewValue}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.overviewItem}>
          <p className={styles.overviewLabel}>Tech</p>
          <ul className={styles.overviewList}>
            {projectMeta.tech.map((item, i) => (
              <li key={i} className={styles.overviewValue}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.overviewItem}>
          <p className={styles.overviewLabel}>Timeline</p>
          <ul className={styles.overviewList}>
            <li className={styles.overviewValue}>{projectMeta.year}</li>
            <li className={styles.overviewValue}>{projectMeta.status}</li>
          </ul>
        </div>
        {projectMeta.targetAudience != null && projectMeta.targetAudience.length > 0 && (
          <div className={styles.overviewItem}>
            <p className={styles.overviewLabel}>Target Audience</p>
            <ul className={styles.overviewList}>
              {projectMeta.targetAudience.map((item, i) => (
                <li key={i} className={styles.overviewValue}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </CaseStudySection>
  )
}
