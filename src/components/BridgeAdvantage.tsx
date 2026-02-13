import {
  Section,
  SectionContent,
  SectionHeader,
  Grid,
} from './Section'
import { H2, Body } from './Text'
import { Card } from './Card'
import { iconMd } from './Button'

const bridgeCards = [
  {
    title: 'Prototyping in Real Code',
    description:
      'I can prototype in code, not just Figma. This means real interactions, real state, real feedback—faster.',
    icon: (
      <svg
        className={iconMd}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Better Collaboration',
    description:
      "Speaking both design and engineering languages means I'm a natural bridge between teams, reducing friction and misunderstandings.",
    icon: (
      <svg
        className={iconMd}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: 'No Translation Loss',
    description:
      'When I design a component, I know exactly how it will be built. No "that\'s not technically possible" surprises during handoff.',
    icon: (
      <svg
        className={iconMd}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Design System Ownership',
    description:
      'I can own the design system from Figma tokens to React components, ensuring consistency across the entire product.',
    icon: (
      <svg
        className={iconMd}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
]

export function BridgeAdvantage() {
  return (
    <Section id="bridge">
        <SectionContent>
          <SectionHeader>
            {/* <Eyebrow>The Bridge Advantage</Eyebrow> */}
          {/* <H2>Design-to-Code: Why It Matters</H2> */}
          <H2>Advantages of working at the intersection of design and code</H2>
            <Body color="secondary">
              My 5 years of React/TypeScript experience isn't just a bonus—it's
              a fundamental part of how I design better products.
            </Body>
          </SectionHeader>
          <Grid cols={2} gap="tight">
            {bridgeCards.map((item, i) => (
              <Card
                key={i}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </Grid>
        </SectionContent>
    </Section>
  )
}
