import * as styles from './page.css'
import { brandBlock, brandBlockInner } from '@/components/Section.css'
import {
  Bio,
  ProductPhilosophy,
  PassionAreas,
  Partnerships,
  Process,
  SideProjects,
  CTASection,
  LeadershipSection,
  ImpactStatsRibbon,
  H2,
  AI,
} from '@/components'

export default function About() {
  return (
    <div className={styles.pageWrapper}>
      <Bio />
      <ImpactStatsRibbon />
      <PassionAreas />
      <Partnerships />
      <LeadershipSection />

      <section className={brandBlock}>
        <div className={brandBlockInner}>
          <H2>
            A strong product saves time, adds value, competes well, and provides
            a good experience start to finish.
          </H2>
        </div>
      </section>
      <ProductPhilosophy />
      <Process />
      <AI />
      <SideProjects />
      <CTASection />
    </div>
  )
}
