import * as styles from './page.css'
import { Section } from '@/components'

const BRANDING_LOGOS = [
  'arkitekt_bw.svg',
  'bekaWealth_bw.svg',
  'brandhoot_bw.svg',
  'campDesCimes_bw.svg',
  'emilypilch_bw.svg',
  'eternity_bw.svg',
  'harrisRidge_bw.svg',
  'hopeCrossings_bw.svg',
  'leftover_bw.svg',
  'monotone_bw.svg',
  'nativ3_bw.svg',
  'ridesynth_bw.svg',
  'sandhill_bw.svg',
  'serqa_bw.svg',
  'steadfastProject_bw.svg',
  'studio53_bw.svg',
  'tamco_bw.svg',
  'tipping_point_bw.svg',
] as const

export default function BrandingPage() {
  return (
    <Section>
        {BRANDING_LOGOS.map((filename) => (
          <div key={filename} className={styles.logoItem}>
            <img
              src={`/branding/${filename}`}
              alt=""
              loading="lazy"
              className={styles.logoImg}
            />
          </div>
        ))}
    </Section>
  )
}
