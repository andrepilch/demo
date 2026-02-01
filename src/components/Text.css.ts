import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/styles'

// ============================================
// Base Text Styles
// ============================================

const baseText = style({
  margin: 0,
  padding: 0,
})

// ============================================
// Heading Variants (3 levels)
// ============================================

export const headingBase = style([
  baseText,
  {
    fontWeight: '700',
    lineHeight: 1.1,
  },
])

// H1 - Display/Hero headings
export const heading1 = style([
  headingBase,
  {
    fontSize: '4rem',
    '@media': {
      'screen and (min-width: 768px)': {
        fontSize: '4rem',
      },
      'screen and (min-width: 1024px)': {
        fontSize: '5rem',
      },
    },
  },
])

// H2 - Section headings
export const heading2 = style([
  headingBase,
  {
    fontSize: '1.875rem',
    lineHeight: 1.2,
    '@media': {
      'screen and (min-width: 768px)': {
        fontSize: '2.25rem',
      },
    },
  },
])

// H3 - Card/subsection headings
export const heading3 = style([
  headingBase,
  {
    fontSize: '1.25rem',
    fontWeight: '600',
    lineHeight: 1.3,
  },
])

// ============================================
// Body Text Variants (3 levels)
// ============================================

const bodyBase = style([
  baseText,
  {
    lineHeight: 1.6,
  },
])

// Large body text - subtitles, lead paragraphs
export const bodyLarge = style([
  bodyBase,
  {
    fontSize: '1.125rem',
    '@media': {
      'screen and (min-width: 768px)': {
        fontSize: '1.25rem',
      },
    },
  },
])

// Default body text
export const body = style([
  bodyBase,
  {
    fontSize: '1rem',
  },
])

// Small body text - labels, captions
export const bodySmall = style([
  bodyBase,
  {
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
])

// ============================================
// Special Text Variants
// ============================================

// Eyebrow - labels/category text
export const eyebrow = style([
  baseText,
  {
    fontSize: '0.875rem',
    fontWeight: '500',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    lineHeight: 1.4,
  },
])

// Stat number - large display numbers
export const statNumber = style([
  baseText,
  {
    fontSize: '3rem',
    fontWeight: '700',
    lineHeight: 1,
    '@media': {
      'screen and (min-width: 768px)': {
        fontSize: '3.75rem',
      },
    },
  },
])

// Ribbon number - medium display numbers
export const ribbonNumber = style([
  baseText,
  {
    fontSize: '1.875rem',
    fontWeight: '700',
    lineHeight: 1,
    '@media': {
      'screen and (min-width: 768px)': {
        fontSize: '2.25rem',
      },
    },
  },
])

// ============================================
// Color Variants
// ============================================

export const colorVariants = styleVariants({
  primary: { color: vars.color.textPrimary },
  secondary: { color: vars.color.textSecondary },
  muted: { color: vars.color.textMuted },
  accent: { color: vars.color.accent },
  onAccent: { color: vars.color.textOnAccent },
  inherit: { color: 'inherit' },
})

// ============================================
// Weight Variants
// ============================================

export const weightVariants = styleVariants({
  normal: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
})

// ============================================
// Alignment Variants
// ============================================

export const alignVariants = styleVariants({
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
})

// ============================================
// Special Effects
// ============================================

export const accentGradient = style({
  background: vars.color.accent,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
})
