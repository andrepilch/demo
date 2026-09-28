import { CraftFocus } from '@/components/CraftFocus'
import { CTASection } from '@/components/CTASection'
import { DiagonalBackground } from '@/components/DiagonalBackground'
import { FeaturedCaseStudies } from '@/components/FeaturedCaseStudies'
import { FeaturedEternityCover } from '@/components/FeaturedEternityCover'
import { HeroSection } from '@/components/HeroSection'
import { HomeIntro } from '@/components/HomeIntro'
import * as styles from './page.css'

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero wrapper - provides relative container for diagonal background */}
      <div className={styles.heroWrapper}>
        <DiagonalBackground />
        <div className={styles.heroContent}>
          <HeroSection />
        </div>
      </div>
      <div className={styles.sectionsWrapper}>
        <HomeIntro />
        <FeaturedCaseStudies eternityCover={<FeaturedEternityCover />} />
        <CraftFocus />
      </div>
      <CTASection />
    </div>
  )
}
