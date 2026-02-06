import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const timelineContainer = style({
  maxWidth: '48rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexDirection: 'column',
})

export const timelineItem = style({
  position: 'relative',
  paddingLeft: '2rem',
  paddingBottom: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  '::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '8px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: vars.color.accent,
  },
  '::after': {
    content: '""',
    position: 'absolute',
    left: '4px',
    top: '22px',
    width: '2px',
    height: 'calc(100% - 10px)',
    background: vars.color.border,
  },
  selectors: {
    '&:last-child::after': {
      display: 'none',
    },
  },
})

export const timelinePeriod = style({
  color: vars.color.accent,
  fontSize: '0.875rem',
  fontWeight: '500',
})

export const timelineRole = style({
  fontSize: '1.25rem',
  fontWeight: '700',
})

export const timelineCompany = style({
  color: vars.color.textSecondary,
})

export const timelineLocation = style({
  color: vars.color.textMuted,
  fontSize: '0.875rem',
})

export const timelineHighlights = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const timelineHighlight = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.5rem',
  color: vars.color.textSecondary,
})

export const timelineCheckIcon = style({
  width: '20px',
  height: '20px',
  color: vars.color.accent,
  flexShrink: 0,
  marginTop: '2px',
})
