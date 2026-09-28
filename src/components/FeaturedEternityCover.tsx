'use client'

import dynamic from 'next/dynamic'
import * as styles from './FeaturedCaseStudies.css'

const EternityPortfolioCover = dynamic(
  () =>
    import('./eternity-hero/EternityPortfolioCover').then(
      (mod) => mod.EternityPortfolioCover
    ),
  {
    ssr: true,
    loading: () => <div className={styles.eternityCover} aria-hidden />,
  }
)

/** Client island for the interactive Eternity HeroStage portfolio cover. */
export function FeaturedEternityCover() {
  return (
    <div className={styles.eternityCover}>
      <EternityPortfolioCover caseStudyHref='/work/eternity-bible' />
    </div>
  )
}
