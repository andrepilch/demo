import * as styles from "./ImpactStatsRibbon.css";

const impactStats = [
  { value: "14", label: "Years Experience" },
  { value: "5", label: "Years React/TS" },
  { value: "18", label: "Released Products" },
  { value: "2", label: "Patents (US/CH)" },
];

export function ImpactStatsRibbon() {
  return (
    <section className={styles.ribbonSection}>
      <div className={styles.ribbonWrapper}>
        <div className={styles.ribbonTrack}>
          {[...impactStats, ...impactStats].map((stat, i) => (
            <div key={i} className={styles.ribbonItem}>
              <span className={styles.ribbonValue}>{stat.value}</span>
              <span className={styles.ribbonLabel}>{stat.label}</span>
              <span className={styles.ribbonDot}>•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
