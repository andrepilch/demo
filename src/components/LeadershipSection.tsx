import { Section, SectionGap, H2, Body, SectionHeader } from '@/components'
import * as styles from './LeadershipSection.css'

// Achievement card data
const achievements = [
  {
    highlight: 'Strategic Infrastructure',
    text: 'Established the first design system at whcc which boosted efficiency and added consistency',
  },
  {
    highlight: 'Intellectual Property',
    text: 'Pioneered the first VR experience for Thomson Reuters that resulted in secured patents',
  },
  {
    highlight: 'Cross-Functional Collaboration',
    text: 'Led the effort to create design and team principles through cross-team workshops, and to align product strategy and vision with business goals',
  },
  {
    highlight: 'Communication',
    text: 'Encouraged a culture of communication with business leadership, and a framework for regular team check-ins',
  },
  {
    highlight: 'Cultural Transformation',
    text: 'Initiated the organization’s user research and analytics practices, opened avenues of communication with other branches for feedback, and created environement for building rapport with teammates',
  },
  {
    highlight: 'Leadership thinking',
    text: 'Co-workers trust my continual business-minded perspective and balance with user-centric design',
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
