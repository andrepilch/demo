import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

// Framework Card
export const frameworkCard = style({
  position: 'relative',
  padding: '2rem',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
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

export const frameworkIcon = style({
  color: vars.color.accent,
})

export const frameworkTitle = style({
  fontSize: '1.25rem',
  fontWeight: '700',
})

export const frameworkDescription = style({
  color: vars.color.textSecondary,
})
