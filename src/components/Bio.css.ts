import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

// Hero Grid
export const heroGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '3.5rem',
  alignItems: 'flex-start',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: '280px 1fr',
      gap: '2rem',
    },
  },
})

// Avatar
export const avatarWrapper = style({
  position: 'relative',
  width: '100%',
  maxWidth: '240px',
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media': {
    'screen and (min-width: 768px)': {
      marginLeft: 0,
      marginRight: 0,
    },
  },
})

export const avatarContainer = style({
  position: 'relative',
  aspectRatio: '1 / 1',
  width: '100%',
  borderRadius: vars.radius.full,
  overflow: 'hidden',
})

export const avatarDecoration = style({
  position: 'absolute',
  bottom: '-1rem',
  right: '-1rem',
  width: '100%',
  height: '100%',
  scale: '1.04',
  border: `2px solid ${vars.color.accent}`,
  borderRadius: vars.radius.full,
  zIndex: -1,
})

// Bio Content
export const bioContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
})

export const eyebrow = style({
  color: vars.color.accent,
  fontSize: '0.875rem',
  fontWeight: '500',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
})

export const pageTitle = style({
  fontSize: '2.25rem',
  fontWeight: '700',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '3rem',
    },
  },
})

export const resumeLinkWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '1.5rem',
})

export const resumeLink = style({
  color: vars.color.accent,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.35rem',
})

export const resumeLinkIcon = style({
  width: '0.875rem',
  height: '0.875rem',
  flexShrink: 0,
  color: vars.color.accent,
  transition: 'all 0.3s ease',
  ':hover': {
    color: vars.color.textSecondary,
  },
})

export const resumeLinkContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.15rem',
})
export const socialLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '0.875rem',
  height: '0.875rem',
  borderRadius: '50%',
  color: vars.color.textSecondary,
  transition: 'all 0.3s ease',
  ':hover': {
    color: vars.color.accent,
    transform: 'translateY(-2px)',
  },
})
