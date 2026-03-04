import * as styles from './ImpactStatsRibbon.css'

const impactStats = [
  { value: '14+', label: 'Years Experience' },
  { value: '5+', label: 'Years React Engineering' },
  { value: '18', label: 'Products Shipped' },
  { value: '1', label: 'Design Patent' },
  { value: '7', label: 'Platforms designed for' },
  { value: '4', label: 'Design Systems Engineered' },
  { value: '9', label: 'Years longest active product' },
]

export function ImpactStatsRibbon() {
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
