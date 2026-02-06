import { style } from '@vanilla-extract/css'
import { vars } from './theme.css'

// ============================================
// Headings
// ============================================

export const h1 = style({
  fontSize: '2.25rem',
  fontWeight: '700',
  lineHeight: '1.2',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '3rem',
    },
    'screen and (min-width: 1024px)': {
      fontSize: '3.75rem',
    },
  },
})

export const h2 = style({
  fontSize: '1.875rem',
  fontWeight: '700',
  lineHeight: '1.3',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '2.25rem',
    },
  },
})

export const h3 = style({
  fontSize: '1.25rem',
  fontWeight: '700',
  lineHeight: '1.4',
})

export const h4 = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  lineHeight: '1.4',
})

// ============================================
// Body Text
// ============================================

export const textXl = style({
  fontSize: '1.25rem',
  lineHeight: '1.6',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
})

export const textLg = style({
  fontSize: '1.125rem',
  lineHeight: '1.6',
})

export const textBase = style({
  fontSize: '1rem',
  lineHeight: '1.6',
})

export const textSm = style({
  fontSize: '0.875rem',
  lineHeight: '1.5',
})

export const textXs = style({
  fontSize: '0.75rem',
  lineHeight: '1.4',
})

// ============================================
// Font Weights
// ============================================

export const fontNormal = style({ fontWeight: '400' })
export const fontMedium = style({ fontWeight: '500' })
export const fontSemibold = style({ fontWeight: '600' })
export const fontBold = style({ fontWeight: '700' })

// ============================================
// Text Alignment
// ============================================

export const textLeft = style({ textAlign: 'left' })
export const textCenter = style({ textAlign: 'center' })
export const textRight = style({ textAlign: 'right' })

// ============================================
// Text Transform
// ============================================

export const uppercase = style({
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
})

export const capitalize = style({ textTransform: 'capitalize' })

// ============================================
// Text Decoration
// ============================================

export const noWrap = style({ whiteSpace: 'nowrap' })

// ============================================
// Eyebrow Text
// ============================================

export const eyebrow = style({
  color: vars.color.accent,
  fontSize: '0.875rem',
  fontWeight: '500',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  marginBottom: vars.space.md,
})
