import { Eyebrow, H1, Section, SectionHeader } from '@/components'
import * as styles from '../../page.css'

export default function DesignerPage() {
  return (
    <div className={styles.pageWrapper} style={{ paddingTop: '200px' }}>
      <Section>
        <SectionHeader>
          <Eyebrow>Case Study Coming Soon</Eyebrow>
          <H1>WHCC Designer</H1>
        </SectionHeader>
      </Section>
    </div>
  )
}
