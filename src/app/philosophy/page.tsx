import * as styles from './page.css'
import { ProductPhilosophy, CTASection, AI, Process } from '@/components'

export default function Philosophy() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <ProductPhilosophy />
        <AI />
        <Process />
      </div>
      <CTASection />
    </>
  )
}
