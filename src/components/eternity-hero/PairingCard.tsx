'use client'

import type { CSSProperties } from 'react'
import type { Pairing } from './eternity-tokens'
import * as styles from './eternity-hero.css'

function fadeColor(hex: string, alpha = 0.1): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

export function PairingCard({ pairing }: { pairing: Pairing }) {
  return (
    <div
      className={styles.pairingCard}
      style={
        {
          '--pairing-card-color': pairing.color,
          backgroundColor: fadeColor(pairing.color, 0.1),
        } as CSSProperties
      }
    >
      <div className={styles.pairingName}>{pairing.name}</div>
      <div className={styles.pairingMeta}>
        <span>
          {pairing.bookId} {pairing.chapter}:{pairing.verse}
        </span>
        <span>{pairing.translationLabel}</span>
      </div>
      <div className={styles.pairingFooter}>
        <span style={{ color: pairing.color }}>{pairing.demoDate}</span>
      </div>
    </div>
  )
}
