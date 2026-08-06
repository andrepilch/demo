import {
  DiagonalBackground,
  HeroSection,
  // ImpactStatsRibbon,
  BigNumbers,
  HomeIntro,
  FeaturedCaseStudies,
  CTASection,
  CraftFocus,
} from '@/components'
import * as styles from './page.css'

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero wrapper - provides relative container for diagonal background */}
      <div className={styles.heroWrapper}>
        <DiagonalBackground />
        <div className={styles.heroContent}>
          <HeroSection />
          <BigNumbers />
        </div>
      </div>
      {/* <ImpactStatsRibbon /> */}
      <div className={styles.sectionsWrapper}>
        <HomeIntro />
        <FeaturedCaseStudies />
        <CraftFocus />
      </div>
      <CTASection />
    </div>
  )
}
