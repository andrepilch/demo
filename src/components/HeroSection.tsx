import Link from 'next/link'
import { H1, Body, LinkButton, ButtonGroup, Section } from '@/components'
import { getYearsOfExperience } from '@/lib/experience'
import * as styles from './HeroSection.css'

export function HeroSection() {
  const years = getYearsOfExperience()

  return (
    <Section className={styles.heroSection}>
      {/* Headline */}
      <H1 color='onAccent' className={styles.heroTitle}>
        I design & build innovative web products
        <span className={styles.interjection}>
          with great taste & intuition 😉
        </span>{' '}
      </H1>
      {/* Intro */}
      <div className={styles.heroIntro}>
        <Body>
          Classically trained with a 5-year BFA in Graphic Design, I’ve spent
          over {years} years building digital products from scratch and leading
          major platform redesigns. My work spans native mobile, responsive web,
          3D modeling, and interactive prototyping.
        </Body>
        <Body>
          In recent years, I’ve expanded into frontend engineering—writing
          production React code and shipping full-stack applications to
          production (including my recently launched Bible app, Eternity, now
          live on iOS and Android).
        </Body>
        <Body>
          I bring visions to reality by bridging design and code, establishing
          systems, leading research, and doing whatever it takes to ship
          exceptional software.
        </Body>
      </div>
      {/* CTA Buttons */}
      <ButtonGroup className={styles.ctaButtons}>
        <LinkButton href='/about' variant='primary'>
          About Me
        </LinkButton>
        <Link href='/philosophy' className={styles.heroOutlinedButton}>
          Philosophy
        </Link>
      </ButtonGroup>
    </Section>
  )
}
