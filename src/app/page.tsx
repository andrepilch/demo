import {
  DiagonalBackground,
  HeroSection,
  ImpactStatsRibbon,
  BigNumbers,
  FeaturedCaseStudies,
  CTASection,
  BridgeAdvantage,
  CraftFocus,
} from '@/components'
import * as styles from './page.css'

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero wrapper - provides relative container for diagonal background */}
      <div className={styles.heroWrapper}>
        <DiagonalBackground />
        <HeroSection />
        <BigNumbers />
      </div>
      <ImpactStatsRibbon />
      <div className={styles.sectionsWrapper}>
        <FeaturedCaseStudies />
        <BridgeAdvantage />
        <CraftFocus />
        <CTASection />
      </div>
    </div>
  )
}
