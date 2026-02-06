import { Eyebrow, H1, Section, SectionHeader } from '@/components'
import * as styles from '../../page.css'

export default function WallDesignerPage() {
    return (
    <div className={styles.pageWrapper} style={{ paddingTop: '200px' }}>
            <Section>
                <SectionHeader>
                    <Eyebrow>Case Study Coming Soon</Eyebrow>
                    <H1>Wall Designer</H1>
                </SectionHeader>
        </Section>
    </div>
  )
}