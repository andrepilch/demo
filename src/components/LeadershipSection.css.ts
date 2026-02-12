import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

// Individual achievement card (masonry: avoid break inside columns)
export const achievementCard = style({
  breakInside: 'avoid',
  marginBottom: '1.25rem',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.875rem',
  padding: '1.25rem 1.5rem',
  background: 'rgba(255, 255, 255, 0.03)',
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
})

// Card text
export const cardText = style({
  fontSize: '1rem',
  lineHeight: 1.5,
  color: vars.color.textSecondary,
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '1rem',
    },
  },
})

// Bold highlight within card text
export const highlight = style({
  fontWeight: 600,
  color: vars.color.textPrimary,
})
