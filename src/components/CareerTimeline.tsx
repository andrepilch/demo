import {
  Section,
  Container,
  SectionContent,
  SectionHeader,
} from './Section'
import { Eyebrow, H2 } from './Text'
import * as styles from './CareerTimeline.css'

const careerTimeline = [
  {
    period: '2020 – Present',
    role: 'Senior Product Designer & Frontend Engineer',
    company: 'WHCC (White House Custom Colour)',
    location: 'Remote / Wisconsin, USA',
    highlights: [
      'Lead end-to-end product design for digital print editors serving 1.3M+ annual users',
      "Established the company's first comprehensive Design System",
      'Increased web editor AOV by 26% through radical simplification',
      'Directly code React components to ensure design fidelity',
    ],
  },
  {
    period: '2017 – 2020',
    role: 'Senior UX Designer',
    company: 'Thomson Reuters',
    location: 'Eagan, Minnesota, USA',
    highlights: [
      'Secured 2 international patents (US/CH) for VR document interaction',
      'Led UX strategy for professional legal and tax platforms',
      'Pioneered immersive document workflows for complex data',
    ],
  },
  {
    period: '2014 – 2017',
    role: 'UX/UI Designer',
    company: 'Various Agencies',
    location: 'Minnesota, USA',
    highlights: [
      'Delivered impactful designs across web, mobile, and print',
      'Built strong foundation in UX/UI and visual design',
      'Collaborated with cross-functional teams on client projects',
    ],
  },
  {
    period: '2009 – 2014',
    role: 'Junior Designer → Designer',
    company: 'Creative Agencies',
    location: 'France → USA',
    highlights: [
      'Began career in creative and digital agencies',
      'Refined skills across a variety of media',
      'Transitioned from print to digital-first design',
    ],
  },
]

export function CareerTimeline() {
  return (
    <Section id="experience">
      <Container>
        <SectionContent>
          <SectionHeader>
            <Eyebrow>Experience</Eyebrow>
            <H2>Career Timeline</H2>
          </SectionHeader>

          <div className={styles.timelineContainer}>
            {careerTimeline.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelinePeriod}>{item.period}</div>
                <h3 className={styles.timelineRole}>{item.role}</h3>
                <p className={styles.timelineCompany}>{item.company}</p>
                <p className={styles.timelineLocation}>{item.location}</p>
                <div className={styles.timelineHighlights}>
                  {item.highlights.map((highlight, j) => (
                    <div key={j} className={styles.timelineHighlight}>
                      <svg
                        className={styles.timelineCheckIcon}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionContent>
      </Container>
    </Section>
  )
}
