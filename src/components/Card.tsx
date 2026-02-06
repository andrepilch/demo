import type { ReactNode } from 'react'
import * as styles from './Card.css'

export interface CardProps {
  /** Optional icon (e.g. SVG) - when set, title/description are shown in a row with the icon */
  icon?: ReactNode
  title: string
  /** Optional tagline (accent color) - used for framework-style cards */
  tagline?: string
  description?: string
  /** Optional class for the root card element */
  className?: string
}

export function Card({ icon, title, tagline, description, className }: CardProps) {
  const content = (
    <>
      <h3 className={styles.cardTitle}>{title}</h3>
      {tagline != null && <p className={styles.cardTagline}>{tagline}</p>}
      {description != null && <p className={styles.cardDescription}>{description}</p>}
    </>
  )

  const rootClass = [styles.card, className].filter(Boolean).join(' ')

  if (icon != null) {
    return (
      <div className={rootClass}>
        <div className={styles.cardWithIconRow}>
          <div className={styles.cardIcon}>{icon}</div>
          <div className={styles.cardContent}>{content}</div>
        </div>
      </div>
    )
  }

  return (
    <div className={rootClass}>
      <div className={styles.cardContent}>{content}</div>
    </div>
  )
}
