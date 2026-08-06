import { style, keyframes } from '@vanilla-extract/css'
import { buttonBase, sizeVariants } from './Button.css'
import { vars } from '@/styles'

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
  marginTop: '1.5rem',
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out forwards`,
  animationDelay: '0.2s',
})

export const heroOutlinedButton = style([
  buttonBase,
  sizeVariants.md,
  {
    background: 'transparent',
    border: `1px solid ${vars.color.textOnAccent}`,
    color: vars.color.textOnAccent,
    ':hover': {
      transform: 'scale(1.04)',
      boxShadow: vars.shadow.glow,
      color: vars.color.textOnAccent,
      borderColor: vars.color.textOnAccent,
    },
  },
])

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
