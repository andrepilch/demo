'use client'

import { forwardRef } from 'react'
import { DEMO_PAIRINGS } from './eternity-tokens'
import { PairingCard } from './PairingCard'
import * as styles from './eternity-hero.css'

export const MyBiblesScreen = forwardRef<HTMLDivElement>(
  function MyBiblesScreen(_, ref) {
    const [first, ...rest] = DEMO_PAIRINGS
    const col1 = [first, ...rest.filter((_, i) => i % 2 === 1)]
    const col2 = rest.filter((_, i) => i % 2 === 0)

    return (
      <div className={styles.myBiblesRoot}>
        <div ref={ref} className={styles.myBiblesScroll}>
          <div className={styles.myBiblesHeader}>My Bibles</div>
          <div className={styles.pairingGrid}>
            <div className={styles.pairingColumn}>
              {col1.map((pairing) => (
                <PairingCard key={pairing.id} pairing={pairing} />
              ))}
            </div>
            <div className={styles.pairingColumn}>
              <div className={styles.addCard}>+ Add Bible</div>
              {col2.map((pairing) => (
                <PairingCard key={pairing.id} pairing={pairing} />
              ))}
            </div>
          </div>
        </div>
        <nav className={styles.tabBar} aria-label='Main navigation'>
          {['Bibles', 'Read', 'Notes', 'Search'].map((label, i) => (
            <div
              key={label}
              className={`${styles.tabItem} ${i === 0 ? styles.tabItemActive : ''}`}
            >
              <span aria-hidden>{['▦', '▤', '▥', '⌕'][i]}</span>
              <span>{label}</span>
            </div>
          ))}
        </nav>
      </div>
    )
  }
)
