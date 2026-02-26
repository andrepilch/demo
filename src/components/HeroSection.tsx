import { H1, LinkButton, ButtonGroup, Section } from '@/components'
import * as styles from './HeroSection.css'

export function HeroSection() {
  return (
    <Section className={styles.heroSection}>
      {/* Headline */}
      <H1 color='onAccent' className={styles.heroTitle}>
        I strategically design & build innovative web & mobile products
        {/* <span className={styles.interjection}> and sometimes build</span>{' '} */}
        {/* innovative web products */}
        <br />
        <span className={styles.interjection}>
          with great taste & intuition 😉
        </span>{' '}
      </H1>
      {/* CTA Buttons */}
      <ButtonGroup className={styles.ctaButtons}>
        <LinkButton
          href='/about'
          variant='primary'
          style={{ marginTop: '1.5rem' }}
        >
          About Me
        </LinkButton>
      </ButtonGroup>
    </Section>
  )
}
