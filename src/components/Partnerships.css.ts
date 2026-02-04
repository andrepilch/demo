import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.gap.elementSm,
  maxWidth: '48rem',
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: '3rem',
    },
  },
})

export const title = style({
  fontSize: '1.875rem',
  fontWeight: '700',
  color: vars.color.textPrimary,
  margin: 0,
  flexShrink: 0,
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '2.25rem',
      minWidth: '12rem',
    },
  },
})

export const intro = style({
  flex: 1,
})

export const description = style({
  fontSize: '1rem',
  color: vars.color.textSecondary,
  lineHeight: 1.7,
  margin: 0,
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
  gap: '1rem',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '1.25rem',
    },
  },
})

export const partnerCard = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.25rem 1rem',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  minHeight: '4rem',
  transition: 'all 0.2s ease',
  ':hover': {
    background: vars.color.bgCardHover,
    borderColor: vars.color.borderLight,
  },
})

export const partnerName = style({
  fontSize: '0.9375rem',
  fontWeight: '600',
  color: vars.color.textPrimary,
  textAlign: 'center',
  margin: 0,
})
