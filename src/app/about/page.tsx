import * as styles from './page.css'
import {
  Bio,
  ProductPhilosophy,
  SkillsMatrix,
  PassionAreas,
  Partnerships,
  Accomplishments,
  AdviceTopics,
  Process,
  SideProjects,
  CTASection,
  ImpactStatsRibbon,
  H2,
  Section,
} from '@/components'

export default function About() {
  return (
    <div className={styles.pageWrapper}>
      <Bio />
      <ImpactStatsRibbon />
      <Section
        style={{ paddingTop: '20vh', paddingBottom: '20vh', color: '#00aeef' }}
      >
        <H2>
          A strong product saves time, adds value, competes well, and provides a
          good experience start to finish.
        </H2>
      </Section>
      <PassionAreas />
      <ProductPhilosophy />
      <Partnerships />
      <Accomplishments />
      <AdviceTopics />
      <Process />
      <SkillsMatrix />
      <SideProjects />
      <CTASection />
    </div>
  )
}
