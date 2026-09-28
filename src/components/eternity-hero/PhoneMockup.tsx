'use client'

import { forwardRef, type RefObject } from 'react'
import {
  ETERNITY_BRAND,
  ETERNITY_BRAND_FADED,
  ETERNITY_BRAND_SECONDARY,
  PHONE_HEIGHT,
  PHONE_WIDTH,
} from './eternity-tokens'
import { MyBiblesScreen } from './MyBiblesScreen'
import * as styles from './eternity-hero.css'

export const PhoneMockup = forwardRef<
  HTMLDivElement,
  { screenScrollRef: RefObject<HTMLDivElement | null> }
>(function PhoneMockup({ screenScrollRef }, frameRef) {
  return (
    <div className={styles.phoneFrame} ref={frameRef}>
      <div className={styles.phoneBezel} />
      <div className={styles.phoneScreen}>
        <MyBiblesScreen ref={screenScrollRef} />
      </div>
      <svg
        className={styles.phoneTrimSvg}
        viewBox={`0 0 ${PHONE_WIDTH} ${PHONE_HEIGHT}`}
        preserveAspectRatio='none'
        aria-hidden
      >
        <defs>
          <linearGradient
            id='hero-phone-trim'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='100%'
          >
            <stop offset='0%' stopColor={ETERNITY_BRAND_SECONDARY} />
            <stop offset='46%' stopColor={ETERNITY_BRAND_FADED} />
            <stop offset='100%' stopColor={ETERNITY_BRAND} />
          </linearGradient>
        </defs>
        <rect
          x={1.5}
          y={1.5}
          width={387}
          height={841}
          rx={53.5}
          ry={53.5}
          fill='none'
          stroke='url(#hero-phone-trim)'
          strokeWidth={3}
          opacity={0.9}
        />
      </svg>
      <div className={styles.phoneNotch} />
    </div>
  )
})
