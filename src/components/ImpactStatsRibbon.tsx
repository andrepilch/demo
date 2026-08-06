import {
  getReactEngineeringYears,
  getYearsOfExperience,
} from '@/lib/experience'
import * as styles from './ImpactStatsRibbon.css'

export function ImpactStatsRibbon() {
  const designYears = getYearsOfExperience()
  const reactYears = getReactEngineeringYears()

  const impactStats = [
    { value: `${designYears}+`, label: 'Years Design Experience' },
    { value: `${reactYears}+`, label: 'Years React Engineering' },
    { value: '19', label: 'Products Shipped' },
    { value: '1', label: 'Design Patent' },
    { value: '7', label: 'Platforms designed for' },
    { value: '4', label: 'Design Systems Engineered' },
    { value: '9', label: 'Years longest active product' },
  ]

  return (
    <section className={styles.ribbonSection}>
      <div className={styles.ribbonWrapper}>
        <div className={styles.ribbonTrack}>
          {[...impactStats, ...impactStats].map((stat, i) => (
            <div key={i} className={styles.ribbonItem}>
              <span className={styles.ribbonValue}>{stat.value}</span>
              <span className={styles.ribbonLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
