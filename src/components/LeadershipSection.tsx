import { Section, SectionGap, H2, Body, SectionHeader } from '@/components'
import { PhilosophyMasonry, type PhilosophyItem } from './PhilosophyMasonry'

// Achievement card data (mapped to PhilosophyItem for consistent card styling)
const achievements: PhilosophyItem[] = [
  {
    title: 'Strategic Infrastructure',
    description:
      'Established the first design system at whcc which boosted efficiency and added consistency',
  },
  {
    title: 'Intellectual Property',
    description:
      'Pioneered the first VR experience for Thomson Reuters that resulted in secured patents',
  },
  {
    title: 'Cultural Transformation',
    description:
      "Initiated the organization's user research and analytics practices, opened avenues of communication with other branches for feedback, and created environement for building rapport with teammates",
  },
  {
    title: 'Cross-Functional Collaboration',
    description:
      'Led the effort to create design and team principles through cross-team workshops, and to align product strategy and vision with business goals',
  },
  {
    title: 'Communication',
    description:
      'Encouraged a culture of communication with business leadership, and a framework for regular team check-ins',
  },
  {
    title: 'Leadership thinking',
    description:
      'Co-workers trust my continual business-minded perspective and balance with user-centric design',
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
      <PhilosophyMasonry items={achievements} />
    </Section>
  )
}
