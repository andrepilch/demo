import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

// CTA Section
export const ctaCard = style({
  position: 'relative',
  padding: '2.5rem',
  textAlign: 'center',
  overflow: 'hidden',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.gap.element,
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '4rem',
    },
  },
})

export const ctaGradient = style({
  position: 'absolute',
  inset: 0,
  background: vars.gradient.card,
  pointerEvents: 'none',
})

export const ctaTitle = style({
  position: 'relative',
  fontSize: '1.875rem',
  fontWeight: '700',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '2.25rem',
    },
  },
})

// Social Links for CTA section
export const socialLinks = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  gap: '1.5rem',
})

export const socialLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  background: vars.color.bgPrimary,
  // border: `1px solid ${vars.color.border}`,
  color: vars.color.textSecondary,
  transition: 'all 0.3s ease',
  ':hover': {
    color: vars.color.accent,
    // borderColor: vars.color.accent,
    transform: 'translateY(-2px)',
  },
})

export const socialIcon = style({
  width: '24px',
  height: '24px',
})
