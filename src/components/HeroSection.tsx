import Link from 'next/link'
import { H1, LinkButton, ButtonGroup, Section } from '@/components'
import { buttonBase, sizeVariants } from './Button.css'
import { vars } from '@/styles'

const heroStyles = `
@keyframes heroSectionFadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.heroSection-root {
  min-height: 75vh;
}

.heroSection-title {
  opacity: 0;
  animation: heroSectionFadeInUp 0.6s ease-out forwards;
  animation-delay: 0.1s;
}

.heroSection-ctas {
  margin-top: 1.5rem;
  opacity: 0;
  animation: heroSectionFadeInUp 0.6s ease-out forwards;
  animation-delay: 0.2s;
}

.heroSection-outlined {
  background: transparent;
  border: 1px solid ${vars.color.textOnAccent};
  color: ${vars.color.textOnAccent};
}

.heroSection-outlined:hover {
  transform: scale(1.04);
  box-shadow: ${vars.shadow.glow};
  color: ${vars.color.textOnAccent};
  border-color: ${vars.color.textOnAccent};
}

.heroSection-interjection {
  font-family: var(--font-cursive), cursive;
  font-size: 0.35em;
  font-weight: 400;
  opacity: 1;
  line-height: 1;
  display: inline-block;
  transform: translate(0.4em, -0.5em) rotate(-2deg);
  margin-left: 0.1em;
  margin-right: 0.1em;
  white-space: nowrap;
}
`

export function HeroSection() {
  return (
    <>
      <style>{heroStyles}</style>
      <Section className='heroSection-root'>
        {/* Headline */}
        <H1 color='onAccent' className='heroSection-title'>
          I design & build innovative web products
          <span className='heroSection-interjection'>
            with great taste & intuition 😉
          </span>{' '}
        </H1>
        {/* CTA Buttons */}
        <ButtonGroup className='heroSection-ctas'>
          <LinkButton href='/about' variant='primary'>
            About Me
          </LinkButton>
          <Link
            href='/philosophy'
            className={`${buttonBase} ${sizeVariants.md} heroSection-outlined`}
          >
            Philosophy
          </Link>
        </ButtonGroup>
      </Section>
    </>
  )
}
