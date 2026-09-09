import * as styles from './page.css'
import {
  Bio,
  PassionAreas,
  Partnerships,
  SideProjects,
  CTASection,
  LeadershipSection,
  ImpactStatsRibbon,
} from '@/components'

export default function About() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <Bio />
        <ImpactStatsRibbon />
        <PassionAreas />
        <Partnerships />
        <LeadershipSection />
        <SideProjects />
      </div>
      <CTASection />
    </>
  )
}
