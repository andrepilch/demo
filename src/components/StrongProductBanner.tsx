import * as styles from './Section.css'
import { H2 } from './Text'

export function StrongProductBanner() {
  return (
    <section className={styles.brandBlock}>
      <div className={styles.brandBlockInner}>
        <H2>
          A strong product saves time, adds value, competes well, and provides a
          good experience start to finish.
        </H2>
      </div>
    </section>
  )
}
