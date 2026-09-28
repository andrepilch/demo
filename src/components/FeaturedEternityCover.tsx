'use client'

import dynamic from 'next/dynamic'
import * as styles from './FeaturedEternityCover.css'

const EternityPortfolioCover = dynamic(
  () =>
    import('./eternity-hero/EternityPortfolioCover').then(
      (mod) => mod.EternityPortfolioCover
    ),
  {
    ssr: false,
    loading: () => <div className={styles.loadingShell} aria-hidden />,
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
