import { Section, SectionGap, Container, SectionContent } from './Section'
import * as styles from './Process.css'

export function Process() {
  return (
    <Section gap={SectionGap.lg} id="process">
      <Container>
        <SectionContent>
          <h2 className={styles.title}>Process</h2>
          <p className={styles.placeholder}>
            Process section — content coming soon.
          </p>
        </SectionContent>
      </Container>
    </Section>
  )
}
