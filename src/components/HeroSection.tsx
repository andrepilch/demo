import Link from 'next/link'
import { H1, LinkButton, ButtonGroup, Section } from '@/components'
import * as styles from './HeroSection.css'

export function HeroSection() {
  return (
    <Section className={styles.heroSection}>
      {/* Headline */}
      <H1 color='onAccent' className={styles.heroTitle}>
        I design & build innovative web products
        <span className={styles.interjection}>
          with great taste & intuition 😉
        </span>{' '}
      </H1>
      {/* CTA Buttons */}
      <ButtonGroup className={styles.ctaButtons}>
        <LinkButton href='/about' variant='primary'>
          About Me
        </LinkButton>
        <Link
          href='/philosophy'
          className={styles.heroOutlinedButton}
        >
          Philosophy
        </Link>
      </ButtonGroup>
    </Section>
  )
}
