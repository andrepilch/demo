import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

// Skills
export const skillsCard = style({
  padding: '1.5rem',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.gap.elementSm,
})

export const skillsCategory = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  color: vars.color.accent,
})

export const skillsList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
})

export const skillBadge = style({
  paddingLeft: '0.75rem',
  paddingRight: '0.75rem',
  paddingTop: '0.375rem',
  paddingBottom: '0.375rem',
  borderRadius: vars.radius.md,
  fontSize: '0.875rem',
  background: vars.color.bgSecondary,
  border: `1px solid ${vars.color.border}`,
  color: vars.color.textSecondary,
})

// Accordion
export const accordionHeaderRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: '1rem',
})

export const accordionContent = style({
  overflow: 'hidden',
})

export const skillsSectionNoPadding = style({
  padding: 0,
})
