import {
  Section,
  SectionContent,
  SectionHeader,
  Grid,
} from './Section'
import { H2, Body } from './Text'
import { Card } from './Card'
import { iconMd } from './Button'

const steps = [
  {
    name: 'Discover',
    tagline: 'Research & observation',
    description:
      "Explore the problem space broadly through research, user interviews, and observation to understand the user's needs and pain points.",
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
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
    ),
  },
  {
    name: 'Define',
    tagline: 'Pinpoint the problem',
    description:
      'Analyze insights from the Discover phase to pinpoint and clearly define the core problem to be solved.',
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
          d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        />
      </svg>
    ),
  },
  {
    name: 'Develop',
    tagline: 'Ideate & explore',
    description:
      'Listen to others and brainstorm and generate multiple potential solutions for the defined problem, exploring various ideas.',
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
          d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
        />
      </svg>
    ),
  },
  {
    name: 'Deliver',
    tagline: 'Test & ship',
    description:
      'Test, refine, and narrow down the best solutions to create a final, feasible, and user-approved product.',
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
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  },
]

export function Process() {
  return (
    <Section>
      <SectionContent>
          <SectionHeader>
            <H2>Process</H2>
            <Body color='secondary'>
              I look for ways to differentiate products in favor of users to
              achieve growth in competitive markets.
              <br /><br />
              <b>I speed up this process by using AI to assist
              discovery and prototyping, and by building intuition through
              continuous learning about users.</b>
          </Body>
          </SectionHeader>

          <Grid cols={2}>
            {steps.map((step, i) => (
              <Card
                key={i}
                icon={step.icon}
                title={step.name}
                tagline={step.tagline}
                description={step.description}
              />
            ))}
        </Grid>
        </SectionContent>
    </Section>
  )
}
