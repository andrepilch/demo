import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

// CTA Section - full-width brand block
export const ctaWrapper = style({
  width: '100vw',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
  minHeight: '70vh',
  background: vars.color.textAccentDark,
  color: vars.color.textOnAccent,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.gap.section} ${vars.gap.sectionSm}`,
  '@media': {
    'screen and (min-width: 768px)': {
      padding: `${vars.gap.section} ${vars.gap.section}`,
    },
  },
})

export const ctaInner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.gap.element,
  textAlign: 'center',
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
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  // background: vars.color.bgPrimary,
  color: vars.color.textOnAccent,
  transition: 'all 0.3s ease',
  ':hover': {
    color: vars.color.accent,
    transform: 'translateY(-2px)',
  },
})

export const socialIcon = style({
  width: '40px',
  height: '40px',
})
