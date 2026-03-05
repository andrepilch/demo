import { style, keyframes } from '@vanilla-extract/css'

const fadeInUp = keyframes({
  from: {
    opacity: '0',
    transform: 'translateY(20px)',
  },
  to: {
    opacity: '1',
    transform: 'translateY(0)',
  },
})

export const heroSection = style({
  minHeight: '75vh',
})

export const heroTitle = style({
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out forwards`,
  animationDelay: '0.1s',
})

export const ctaButtons = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out forwards`,
  animationDelay: '0.3s',
})

export const interjection = style({
  fontFamily: 'var(--font-cursive), cursive',
  fontSize: '0.35em',
  fontWeight: '400',
  opacity: 1,
  lineHeight: 1,
  display: 'inline-block',
  transform: 'translate(0.4em,-0.5em) rotate(-2deg)',
  marginLeft: '0.1em',
  marginRight: '0.1em',
  whiteSpace: 'nowrap',
})
