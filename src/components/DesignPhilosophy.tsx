import Link from 'next/link'
import {
  Section,
  Container,
  SectionContent,
  SectionHeader,
  Grid,
} from './Section'
import { Eyebrow, H2, Body } from './Text'
import { Card } from './Card'
import { iconMd } from './Button'
import * as styles from './DesignPhilosophy.css'

const frameworks = [
  {
    name: 'The Bridge Framework',
    tagline: 'Design + Engineering Synchronization',
    description:
      'My proprietary approach to product design that ensures solutions are innovative yet buildable. By speaking both design and code, I eliminate the translation gap that slows teams down.',
    icon: (
      <svg
        className={iconMd}
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
        />
      </svg>
    ),
  },
  {
    name: 'Radical Simplification',
    tagline: 'Complex Tools, Intuitive Experiences',
    description:
      "Turning professional-grade tools into experiences that drive AOV. The web editor's 26% increase came from removing barriers, not adding features.",
    icon: (
      <svg
        className={iconMd}
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z'
        />
      </svg>
    ),
  },
  {
    name: 'Data-Informed Design',
    tagline: 'Quantitative What, Qualitative Why',
    description:
      "Using A/B testing and dashboards to identify opportunities, then user interviews to understand motivations. Data informs decisions—it doesn't make them.",
    icon: (
      <svg
        className={iconMd}
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        />
      </svg>
    ),
  },
]

export function DesignPhilosophy() {
  return (
    <Section>
      <Container>
        <SectionContent>
          <SectionHeader>
            <Eyebrow>How I Work</Eyebrow>
            <H2>My Design Philosophy</H2>
            <Body color='secondary'>
              I look for ways to differentiate products in favor of users to
              achieve growth in competitive markets. A strong product saves
              time, adds value, and competes well. Here's the framework that
              guides my approach.
            </Body>
          </SectionHeader>

          <Grid cols={3}>
            {frameworks.map((framework, i) => (
              <Card
                key={i}
                icon={framework.icon}
                title={framework.name}
                tagline={framework.tagline}
                description={framework.description}
              />
            ))}
          </Grid>

          <div style={{ textAlign: 'center' }}>
            <Link href='/about#philosophy' className={styles.linkAccent}>
              Read my full Design Philosophy →
            </Link>
          </div>
        </SectionContent>
      </Container>
    </Section>
  )
}
