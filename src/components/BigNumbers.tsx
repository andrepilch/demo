import {
  Section,
  SectionContent,
  SectionHeader,
  Grid,
  Eyebrow,
  // H2,
  StatNumber,
  H3,
  Body,
  SectionGap,
} from '@/components'
import * as styles from './BigNumbers.css'

const bigNumbers = [
  {
    value: '26%',
    label: 'AOV Increase',
    description: 'vs. alternative solutions',
  },
  {
    value: '1.44x',
    label: 'YoY Growth',
    description: 'vs. alternative solutions',
  },
  {
    value: '9+Yrs',
    label: 'Sustained product growth',
    description: 'continuing to scale',
  },
  // {
  //   value: '9min',
  //   label: 'Average session',
  //   description: 'beating competitors',
  // },
]

export function BigNumbers() {
  return (
    <Section gap={SectionGap.lg}>
      <div className={styles.whiteWrapper}>
        <SectionContent>
          <SectionHeader align='left'>
            {/* <Eyebrow>Impact By The Numbers</Eyebrow> */}
            <Eyebrow>Designing for Business Outcomes</Eyebrow>
          </SectionHeader>
          <Grid cols={3}>
            {bigNumbers.map((stat, i) => (
              <div key={i} className={styles.statCard}>
                <StatNumber gradient='accent'>{stat.value}</StatNumber>
                <span className={styles.statDetailsContainer}>
                  <H3 color='primary'>{stat.label}</H3>
                  <Body color='secondary'>{stat.description}</Body>
                </span>
              </div>
            ))}
          </Grid>
        </SectionContent>
      </div>
    </Section>
  )
}
