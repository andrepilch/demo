import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const segmentedControl = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 0,
  padding: '4px',
  borderRadius: vars.radius.full,
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  position: 'relative',
})

export const segment = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: vars.radius.full,
  background: 'transparent',
  border: 'none',
  color: vars.color.textSecondary,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  position: 'relative',
  zIndex: 1,
  ':hover': {
    color: vars.color.textPrimary,
    background: vars.color.bgCardHover,
  },
})

export const active = style({
  background: vars.color.bgPrimary,
  color: vars.color.textPrimary,
  boxShadow: vars.shadow.sm,
})

export const icon = style({
  width: '18px',
  height: '18px',
})
