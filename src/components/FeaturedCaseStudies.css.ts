import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

export const caseStudyCard = style({
  display: 'grid',
  gap: '1.5rem',
  padding: '1rem',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius['xl'],
  transition: 'all 0.3s ease',
  ':hover': {
    background: vars.gradient.card,
    transform: 'translateY(-2px) scale(1.01)',
  },
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: '2fr 1fr',
      gap: '2.5rem',
      padding: '1rem',
      borderRadius: vars.radius['4xl'],
    },
  },
})

export const caseStudyImage = style({
  position: 'relative',
  aspectRatio: '3 / 2',
  borderRadius: vars.radius['md'],
  overflow: 'hidden',
  background: vars.color.bgSecondary,
  '@media': {
    'screen and (min-width: 768px)': {
      borderRadius: vars.radius['2xl'],
    },
  },
})

export const caseStudyImageInner = style({
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
  selectors: {
    [`${caseStudyCard}:hover &`]: {
      transform: 'scale(1.05)',
    },
  },
})

export const caseStudyContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '4rem',
})

export const caseStudyTitleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  justifyContent: 'center',
})

export const caseStudyTitle = style({
  transition: 'color 0.2s ease',
  selectors: {
    [`${caseStudyCard}:hover &`]: {
      color: vars.color.textAccentDark,
    },
  },
})

export const caseStudyOutcome = style({
  color: vars.color.textPrimary,
  fontWeight: '600',
})

export const caseStudyDescription = style({
  color: vars.color.textSecondary,
})

// Mini Stats within case study card
export const caseStudyStats = style({
  display: 'flex',
  gap: '1.5rem',
})

export const caseStudyStat = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
})

export const caseStudyStatValue = style({
  fontSize: '1.25rem',
  fontWeight: '700',
  color: vars.color.textSecondary,
  lineHeight: 1.2,
})

export const caseStudyStatLabel = style({
  fontSize: '0.75rem',
  color: vars.color.textSecondary,
  textTransform: 'uppercase',
  letterSpacing: '0.025em',
})

export const tagList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
})

export const tag = style({
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

export const otherProductsSection = style({
  columnCount: 1,
  columnGap: '2rem',
  '@media': {
    'screen and (min-width: 768px)': {
      columnCount: 2,
    },
  },
})

export const otherProductItem = style({
  breakInside: 'avoid',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginBottom: '2rem',
  ':last-child': {
    marginBottom: 0,
  },
})
