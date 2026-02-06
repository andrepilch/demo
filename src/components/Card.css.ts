import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

// Shared card style matching process/framework cards: accent bar, bg, border
export const card = style({
  position: 'relative',
  padding: '2rem',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  transition: 'all 0.3s ease',
  ':hover': {
    background: vars.color.bgCardHover,
    borderColor: vars.color.borderLight,
    transform: 'translateY(-2px)',
  },
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: `linear-gradient(90deg, ${vars.color.accent}, transparent)`,
  },
})

export const cardWithIconRow = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
})

export const cardIcon = style({
  color: vars.color.accent,
  flexShrink: 0,
  marginTop: '0.25rem',
})

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  flex: 1,
  minWidth: 0,
})

export const cardTitle = style({
  fontSize: '1.25rem',
  fontWeight: '700',
})

export const cardTagline = style({
  color: vars.color.accent,
  fontSize: '0.875rem',
})

export const cardDescription = style({
  color: vars.color.textSecondary,
})
