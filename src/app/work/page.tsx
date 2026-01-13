import * as styles from "./page.css";

export default function Work() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Work</h1>
          <p className={styles.pageDescription}>
            Selected projects and case studies.
          </p>
        </div>
      </div>
    </div>
  );
}
