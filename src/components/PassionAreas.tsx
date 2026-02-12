'use client'

import { useState } from 'react'
import { Section, SectionGap, SectionContent, SectionHeader } from './Section'
import * as styles from './PassionAreas.css'
import { H2, Body } from './Text'
import { SecondaryButton } from './Button'
import { SkillsMatrix } from './SkillsMatrix'

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
      'Leading Design of Ambiguous Projects',
      'Strategic Design',
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
  const [expanded, setExpanded] = useState(false)

  return (
    <Section gap={SectionGap.lg} id="passion-areas">
      <SectionHeader>
        <H2>Passion Areas</H2>
        <Body color="secondary">
          I'm passionate about creating products that are not only functional
          but also provide a good experience start to finish.
        </Body>
      </SectionHeader>
        <SectionContent>
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
        <SecondaryButton onClick={() => setExpanded((e) => !e)}>
          {expanded ? 'Show less' : 'See All Skills'}
        </SecondaryButton>
        <SkillsMatrix expanded={expanded} />
    </Section>
  )
}
