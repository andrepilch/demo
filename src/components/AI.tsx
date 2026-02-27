import * as styles from './Section.css'
import { H2 } from './Text'

// ALTERNATIVE: AI accelerates the build. It never defines the vision.

export function AI() {
  return (
    <section className={styles.brandBlock}>
      <div className={styles.brandBlockInner}>
        <H2>
          I use AI to help build the right products. <br />I do not use AI to
          tell me what that product should be.
        </H2>
      </div>
    </section>
  )
}
