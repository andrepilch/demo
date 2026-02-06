import { Section, SectionGap, H2, Body, SectionHeader } from '@/components'
import * as styles from './LeadershipSection.css'

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
      <SectionHeader>
        <H2>Leadership</H2>
        <Body color="secondary">
          Leading through strategic infrastructure, global innovation, and
          cultural transformation that drives organizational impact.
        </Body>
      </SectionHeader>
      <div className={styles.cardsGrid}>
        {achievements.map((achievement, index) => (
          <div key={index} className={styles.achievementCard}>
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
