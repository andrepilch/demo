'use client'

import Link from 'next/link'
import { HERO_COPY } from './eternity-tokens'
import { HeroStage } from './HeroStage'
import * as styles from './eternity-hero.css'

/**
 * Eternity portfolio cover — HeroStage ported from andrepilch/eternity
 * `src/app/about/hero/HeroStage.tsx` (extracted from about.eternitybible.app).
 */
export function EternityPortfolioCover({
  caseStudyHref = '/work/eternity-bible',
}: {
  caseStudyHref?: string
}) {
  return (
    <HeroStage>
        <div data-hero-content className={styles.copyPanel}>
          <h2 className={styles.tagline}>{HERO_COPY.tagline}</h2>
          <p className={styles.subtitle}>{HERO_COPY.subtitle}</p>
          <div className={styles.ctaRow}>
            <Link href={caseStudyHref} className={styles.ctaLink}>
              {HERO_COPY.cta}
            </Link>
          </div>
        </div>
    </HeroStage>
  )
}
