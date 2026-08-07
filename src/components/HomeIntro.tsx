import Link from 'next/link'
import type { CSSProperties } from 'react'
import { Section, SectionGap, Body } from '@/components'
import { getYearsOfExperience } from '@/lib/experience'
import { vars } from '@/styles'

const introStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '42rem',
  color: vars.color.textPrimary,
}

const aboutLinkStyle: CSSProperties = {
  alignSelf: 'flex-start',
  marginTop: '0.25rem',
  color: vars.color.accent,
  fontSize: '0.875rem',
}

export function HomeIntro() {
  const years = getYearsOfExperience()

  return (
    <Section gap={SectionGap.md}>
      <div style={introStyle}>
        <Body>
          Classically trained with a 5-year BFA in Graphic Design, I’ve spent
          over {years} years designing digital products from scratch or working
          on major platform redesigns. My work spans native mobile, responsive
          web, 3D modeling, and interactive prototyping.
        </Body>
        <Body>
          In recent years, I’ve expanded into frontend engineering. Writing
          production React code and even shipping a full-stack application to
          production (my recently launched Bible app, Eternity, now live on iOS
          and Android).
        </Body>
        <Body>
          I bring visions to reality by bridging design and code, establishing
          systems, leading research, and doing whatever it takes to ship
          exceptional software.
        </Body>
        <Link href='/about' style={aboutLinkStyle}>
          Learn more about me
        </Link>
      </div>
    </Section>
  )
}
