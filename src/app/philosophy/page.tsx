import * as styles from './page.css'
import { ProductPhilosophy, CTASection } from '@/components'

export default function Philosophy() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <ProductPhilosophy />
      </div>
      <CTASection />
    </>
  )
}
