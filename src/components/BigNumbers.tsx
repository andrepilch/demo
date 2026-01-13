import * as styles from "./BigNumbers.css";

const bigNumbers = [
  {
    value: "26%",
    label: "AOV Increase",
    description: "vs. alternative solutions",
  },
  {
    value: "1.84x",
    label: "YoY Growth",
    description: "vs. alternative solutions",
  },
  {
    value: "2hrs",
    label: "Weekly Time Saved",
    description: "By eliminating manual tasks",
  },
];

export function BigNumbers() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Impact By The Numbers</p>
          <h2 className={styles.sectionTitle}>
            Designing for Business Outcomes
          </h2>
        </div>

        <div className={styles.gridThree}>
          {bigNumbers.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <p className={styles.statDescription}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
