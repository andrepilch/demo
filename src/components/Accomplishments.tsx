import { Section, SectionGap, Container } from './Section'
import * as styles from './Accomplishments.css'

const accomplishments = [
  'Design Patent (US & Switzerland)',
  'Published app to Play Store and App Store',
]

export function Accomplishments() {
  return (
    <Section gap={SectionGap.lg} id="accomplishments">
      <Container>
        <div className={styles.section}>
          <div className={styles.banner}>
            <span className={styles.pill}>Accomplishments</span>
          </div>
          <div className={styles.content}>
            <ul className={styles.list}>
              {accomplishments.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
