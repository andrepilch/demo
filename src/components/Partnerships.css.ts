import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
  gap: '1rem',
  maxWidth: '48rem',
})

export const partnerCard = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.75rem',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  minHeight: '5rem',
  transition: 'all 0.2s ease',
  ':hover': {
    background: vars.color.bgCardHover,
    borderColor: vars.color.borderLight,
  },
})

export const partnerLogo = style({
  width: '100px',
  height: '40px',
  objectFit: 'contain',
})

export const partnerName = style({
  fontSize: '1rem',
  fontWeight: '600',
  color: vars.color.textPrimary,
})
