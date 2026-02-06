import { Section, SectionGap, SectionHeader, Grid } from './Section'
import { Eyebrow, H2, Body } from './Text'
import * as styles from './AboutDesignPhilosophy.css'
import { iconMd } from './Button'

interface PhilosophyPrinciple {
  title: string
  description: string
  icon: React.ReactNode
}

// Philosophy Principles (compact grid)
const philosophyPrinciples: PhilosophyPrinciple[] = [
  {
    title: 'Data-Informed, Not Data-Driven',
    description:
      "I use A/B testing and quantitative dashboards to find the what, and user interviews to find the why. Data informs my decisions—it doesn't make them for me.",
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
  {
    title: 'Technical Feasibility by Design',
    description:
      'Because I code, I design solutions that are innovative but buildable. Every concept I create considers state management, component architecture, and engineering constraints.',
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
          d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
        />
      </svg>
    ),
  },
  {
    title: 'Radical Simplification',
    description:
      'Turning complex professional tools into intuitive experiences that drive business outcomes. The best interface is one that feels invisible—yet powerful.',
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
    title: 'Design for Business Outcomes',
    description:
      'Beautiful interfaces are table stakes. I design for metrics that matter: conversion rates, AOV, retention, and long-term product sustainability.',
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
          d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
        />
      </svg>
    ),
  },
]

export function AboutDesignPhilosophy() {
  return (
    <Section gap={SectionGap.lg} id='philosophy'>
      <SectionHeader>
        <Eyebrow>How I Work</Eyebrow>
        <H2>My Design Philosophy</H2>
        <Body color='secondary'>
          I don't make the same thing everyone else is already making.
        </Body>
      </SectionHeader>

      <Grid cols={2}>
        {philosophyPrinciples.map((principle, i) => (
          <div key={i} className={styles.frameworkCard}>
            <div className={styles.frameworkIcon}>{principle.icon}</div>
            <h3 className={styles.frameworkTitle}>{principle.title}</h3>
            <p className={styles.frameworkDescription}>
              {principle.description}
            </p>
          </div>
        ))}
      </Grid>
    </Section>
  )
}
