import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

// Project Card
export const projectCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.gap.elementSm,
  padding: '2rem',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  transition: 'all 0.3s ease',
  ':hover': {
    background: vars.color.bgCardHover,
    borderColor: vars.color.borderLight,
    transform: 'translateY(-2px)',
  },
})

export const projectHeader = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '1rem',
})

export const projectTitle = style({
  fontSize: '1.5rem',
  fontWeight: '700',
  transition: 'color 0.2s ease',
  selectors: {
    [`${projectCard}:hover &`]: {
      color: vars.color.accent,
    },
  },
})

export const projectStatus = style({
  paddingLeft: '0.75rem',
  paddingRight: '0.75rem',
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
  borderRadius: '9999px',
  fontSize: '0.75rem',
  fontWeight: '500',
  background: 'rgba(34, 197, 94, 0.1)',
  color: 'rgb(74, 222, 128)',
  border: '1px solid rgba(34, 197, 94, 0.2)',
})

export const projectDescription = style({
  color: vars.color.textSecondary,
})

export const projectLink = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  color: vars.color.accent,
  fontSize: '0.875rem',
})

export const projectLinkIcon = style({
  width: '16px',
  height: '16px',
  transition: 'transform 0.2s ease',
  selectors: {
    [`${projectCard}:hover &`]: {
      transform: 'translateX(4px)',
    },
  },
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
  borderRadius: '9999px',
  fontSize: '0.875rem',
  background: 'rgba(14, 165, 233, 0.1)',
  border: '1px solid rgba(14, 165, 233, 0.2)',
  color: vars.color.accent,
})

// Max width wrapper
export const maxW2xl = style({
  maxWidth: '42rem',
  marginLeft: 'auto',
  marginRight: 'auto',
})
