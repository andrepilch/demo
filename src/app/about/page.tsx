import * as styles from './page.css'
import {
  Bio,
  PassionAreas,
  Partnerships,
  Process,
  SideProjects,
  CTASection,
  LeadershipSection,
  ImpactStatsRibbon,
  AI,
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
        <AI />
        <Process />
        <SideProjects />
      </div>
      <CTASection />
    </>
  )
}
