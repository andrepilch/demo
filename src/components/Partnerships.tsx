import { Section, SectionGap, Container, SectionContent } from './Section'
import * as styles from './Partnerships.css'

const partners = ['Samsung', 'Adobe', 'Thomson Reuters']

export function Partnerships() {
  return (
    <Section gap={SectionGap.lg} id="partnerships">
      <Container>
        <SectionContent>
          <div className={styles.section}>
            <div className={styles.header}>
              <h2 className={styles.title}>Partnerships I&apos;ve worked with</h2>
              <div className={styles.intro}>
                <p className={styles.description}>
                  I&apos;ve collaborated with partnerships to create unique
                  products and integration.
                </p>
              </div>
            </div>
            <div className={styles.grid}>
              {partners.map((name, i) => (
                <div key={i} className={styles.partnerCard}>
                  <span className={styles.partnerName}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionContent>
      </Container>
    </Section>
  )
}
