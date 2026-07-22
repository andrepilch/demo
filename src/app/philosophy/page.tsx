import * as styles from './page.css'
import { brandBlock, brandBlockInner } from '@/components/Section.css'
import {
  ProductPhilosophy,
  CTASection,
  H2,
} from '@/components'

export default function Philosophy() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <ProductPhilosophy />
        <section className={brandBlock}>
          <div className={brandBlockInner}>
            <H2>
              A strong product saves time, adds value, competes well, and
              provides a good experience start to finish.
            </H2>
          </div>
        </section>
      </div>
      <CTASection />
    </>
  )
}
