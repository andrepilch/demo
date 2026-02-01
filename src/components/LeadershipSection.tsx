import { Section, SectionGap, H2, Body } from '@/components'
import * as styles from './LeadershipSection.css'

// Diamond sparkle icon component
function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
      <path d='M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z' />
    </svg>
  )
}

// Achievement card data
const achievements = [
  {
    highlight: 'Strategic Infrastructure & Design Systems',
    text: 'Established the first design system at whcc which boosted efficiency and added consistency',
  },
  {
    highlight: 'Global Innovation & Intellectual Property',
    text: 'Pioneered the first VR experience for Thomson Reuters that resulted in secured patents',
  },
  {
    highlight: 'Cultural Transformation & Data-Informed Leadership',
    text: 'Initiated the organization’s user research and analytics practices',
  },
  {
    highlight: 'Leadership & Cross-Functional Collaboration',
    text: 'Led the effort to create design and team principles, and to align product strategy and vision with business goals',
  },
]

export function LeadershipSection() {
  return (
    <Section gap={SectionGap.md}>
      <div className={styles.headerWrapper}>
        <H2>Leadership</H2>
        <Body className={styles.subtitle}>
          Leading through strategic infrastructure, global innovation, and
          cultural transformation that drives organizational impact.
        </Body>
      </div>
      <div className={styles.cardsGrid}>
        {achievements.map((achievement, index) => (
          <div key={index} className={styles.achievementCard}>
            <DiamondIcon className={styles.diamondIcon} />
            <p className={styles.cardText}>
              <span className={styles.highlight}>{achievement.highlight}</span>
              <br />
              {achievement.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
