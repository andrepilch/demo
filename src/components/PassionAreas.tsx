import { Section, SectionGap, Container, SectionContent } from './Section'
import * as styles from './PassionAreas.css'

const passionAreas = [
  {
    title: 'Digital Design',
    items: [
      'Design systems',
      'Designing in Code',
      'Scalable design',
      'Responsive Web Design',
      'Mobile App Design',
      'Interaction Design',
      'Motion Design',
    ],
  },
  {
    title: 'Leadership',
    items: [
      'Design Team Standards',
      'Cross-Functional Collaboration',
      'Strategic Infrastructure',
      'Cultural Transformation',
      'Workshops',
      'Pioneering Innovation',
    ],
  },
  {
    title: 'User Experience',
    items: [
      'Research',
      'User Testing',
      'Prototyping',
      'Journey Mapping',
      'Problem finding',
      'Strategic Solutions',
      'Advocating for Users',
    ],
  },
]

export function PassionAreas() {
  return (
    <Section gap={SectionGap.lg} id="passion-areas">
      <Container>
        <SectionContent>
          <h2 className={styles.title}>Passion Areas</h2>
          <div className={styles.columns}>
            {passionAreas.map((area, i) => (
              <div key={i} className={styles.column}>
                <h3 className={styles.columnTitle}>{area.title}</h3>
                <ul className={styles.list}>
                  {area.items.map((item, j) => (
                    <li key={j} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionContent>
      </Container>
    </Section>
  )
}
