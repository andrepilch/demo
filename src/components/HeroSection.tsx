import { H1, LinkButton, ButtonGroup, Section } from '@/components'
import * as styles from './HeroSection.css'

export function HeroSection() {
  return (
    <Section className={styles.heroSection}>
      {/* Headline */}
      <H1 color='onAccent' className={styles.heroTitle}>
        I strategically design
        <span className={styles.interjection}> and sometimes build</span>{' '}
        innovative mobile & web products
      </H1>
      {/* CTA Buttons */}
      <ButtonGroup className={styles.ctaButtons}>
        <LinkButton
          href='/about'
          variant='primary'
          style={{
            transform: 'rotate(-4deg)',
            position: 'relative',
            left: '65%',
          }}
        >
          About Me
        </LinkButton>
      </ButtonGroup>
    </Section>
  )
}
