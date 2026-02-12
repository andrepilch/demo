import * as styles from './page.css'
import { brandBlock, brandBlockInner } from '@/components/Section.css'
import {
  Bio,
  ProductPhilosophy,
  CraftFocus,
  SkillsMatrix,
  PassionAreas,
  Partnerships,
  // AdviceTopics,
  Process,
  SideProjects,
  CTASection,
  ImpactStatsRibbon,
  H2,
  AI,
} from '@/components'

export default function About() {
  return (
    <div className={styles.pageWrapper}>
      <Bio />
      <ImpactStatsRibbon />
      <section className={brandBlock}>
        <div className={brandBlockInner}>
          <H2>
            A strong product saves time, adds value, competes well, and provides
            a good experience start to finish.
          </H2>
        </div>
      </section>
      <PassionAreas />
      <CraftFocus />
      <ProductPhilosophy />
      <Partnerships />
      <Process />
      <AI />
      <SideProjects />
      <SkillsMatrix />
      {/* <AdviceTopics /> */}
      <CTASection />
    </div>
  )
}
