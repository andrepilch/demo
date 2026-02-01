import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

// ============================================
// Page Layout
// ============================================

export const pageWrapper = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.gap.section,
  paddingBottom: vars.gap.section,
})

// ============================================
// Hero Section
// ============================================

export const heroSection = style({
  position: 'relative',
  paddingTop: '8rem',
  paddingBottom: '4rem',
  background: vars.color.bgSecondary,
  borderBottom: `1px solid ${vars.color.border}`,
  overflow: 'hidden',
})

export const heroContainer = style({
  maxWidth: vars.layout.contentMaxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: vars.layout.sectionPaddingX,
  paddingRight: vars.layout.sectionPaddingX,
  '@media': {
    'screen and (min-width: 768px)': {
      paddingLeft: vars.layout.sectionPaddingXMd,
      paddingRight: vars.layout.sectionPaddingXMd,
    },
  },
})

export const heroContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.gap.element,
  maxWidth: '48rem',
})

export const heroEyebrow = style({
  color: vars.color.accent,
  fontSize: '0.875rem',
  fontWeight: '500',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
})

export const heroTitle = style({
  fontSize: '2.5rem',
  fontWeight: '700',
  color: vars.color.textPrimary,
  lineHeight: 1.1,
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '3.5rem',
    },
    'screen and (min-width: 1024px)': {
      fontSize: '4rem',
    },
  },
})

export const heroDescription = style({
  fontSize: '1.25rem',
  color: vars.color.textSecondary,
  lineHeight: 1.6,
  maxWidth: '36rem',
})

export const heroButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '0.875rem',
  paddingBottom: '0.875rem',
  borderRadius: '9999px',
  fontWeight: '500',
  background: vars.color.accent,
  border: 'none',
  color: vars.color.textOnAccent,
  transition: 'all 0.3s ease',
  width: 'fit-content',
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: vars.shadow.glow,
  },
})

// ============================================
// Container
// ============================================

export const container = style({
  maxWidth: vars.layout.contentMaxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: vars.layout.sectionPaddingX,
  paddingRight: vars.layout.sectionPaddingX,
  '@media': {
    'screen and (min-width: 768px)': {
      paddingLeft: vars.layout.sectionPaddingXMd,
      paddingRight: vars.layout.sectionPaddingXMd,
    },
  },
})

// ============================================
// Section Styles
// ============================================

export const section = style({
  position: 'relative',
})

export const sectionContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.gap.sectionSm,
})

export const sectionHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.gap.elementSm,
  marginBottom: vars.gap.sectionSm,
})

export const sectionHeaderCentered = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.gap.elementSm,
  textAlign: 'center',
  marginBottom: vars.gap.sectionSm,
})

export const eyebrow = style({
  color: vars.color.accent,
  fontSize: '0.875rem',
  fontWeight: '500',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
})

export const sectionTitle = style({
  fontSize: '1.875rem',
  fontWeight: '700',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '2.25rem',
    },
  },
})

export const sectionDescription = style({
  color: vars.color.textSecondary,
  fontSize: '1.125rem',
  lineHeight: 1.7,
})

// ============================================
// Overview Grid (Meta info)
// ============================================

export const overviewGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '2rem',
  paddingTop: '2rem',
  borderTop: `1px solid ${vars.color.border}`,
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})

export const overviewItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const overviewLabel = style({
  color: vars.color.accent,
  fontSize: '0.875rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
})

export const overviewList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
})

export const overviewValue = style({
  color: vars.color.textSecondary,
  lineHeight: 1.6,
})

// ============================================
// Problem/Solution Cards
// ============================================

export const problemsGrid = style({
  display: 'grid',
  gap: '1.5rem',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})

export const problemCard = style({
  position: 'relative',
  padding: '2rem',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  transition: 'all 0.3s ease',
  ':hover': {
    borderColor: vars.color.borderLight,
    transform: 'translateY(-2px)',
  },
})

export const problemNumber = style({
  fontSize: '3rem',
  fontWeight: '700',
  color: vars.color.accent,
  opacity: 0.3,
  lineHeight: 1,
})

export const problemTitle = style({
  fontSize: '1.25rem',
  fontWeight: '600',
})

export const problemDescription = style({
  color: vars.color.textSecondary,
  lineHeight: 1.6,
})

// ============================================
// Goal Cards (Arrow transformation)
// ============================================

export const goalsGrid = style({
  display: 'grid',
  gap: '1.5rem',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})

export const goalCard = style({
  position: 'relative',
  padding: '2rem',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
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

export const goalTransform = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  fontSize: '1.125rem',
  fontWeight: '600',
})

export const goalFrom = style({
  color: vars.color.textMuted,
  textDecoration: 'line-through',
})

export const goalArrow = style({
  color: vars.color.accent,
})

export const goalTo = style({
  color: vars.color.accent,
})

export const goalDescription = style({
  color: vars.color.textSecondary,
  lineHeight: 1.6,
})

// ============================================
// Image Gallery
// ============================================

export const imageGrid = style({
  display: 'grid',
  gap: '1.5rem',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
})

export const imageGridThree = style({
  display: 'grid',
  gap: '1.5rem',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})

export const imagePlaceholder = style({
  position: 'relative',
  aspectRatio: '16 / 10',
  background: vars.color.bgCard,
  border: `1px dashed ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.textMuted,
  fontSize: '0.875rem',
  overflow: 'hidden',
})

export const imageWrapper = style({
  position: 'relative',
  aspectRatio: '16 / 10',
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
})

export const imageWrapperPortrait = style({
  position: 'relative',
  aspectRatio: '9 / 16',
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
})

export const imageFull = style({
  position: 'relative',
  aspectRatio: '16 / 9',
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
})

export const imageCaption = style({
  marginTop: '0.75rem',
  color: vars.color.textMuted,
  fontSize: '0.875rem',
  textAlign: 'center',
})

// ============================================
// Results / Stats
// ============================================

export const resultsSection = style({
  position: 'relative',
  padding: '4rem 0',
  background: vars.color.bgCard,
  borderTop: `1px solid ${vars.color.border}`,
  borderBottom: `1px solid ${vars.color.border}`,
})

export const resultsGrid = style({
  display: 'grid',
  gap: '2rem',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})

export const resultCard = style({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const resultValue = style({
  fontSize: '3.5rem',
  fontWeight: '700',
  background: `linear-gradient(135deg, ${vars.color.accent}, #00d4ff)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  lineHeight: 1.1,
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '4.5rem',
    },
  },
})

export const resultLabel = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  color: vars.color.textPrimary,
})

export const resultDescription = style({
  color: vars.color.textMuted,
  fontSize: '0.875rem',
})

// ============================================
// Feature Highlight
// ============================================

export const featureSection = style({
  display: 'grid',
  gap: '3rem',
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
    },
  },
})

export const featureContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const featureTitle = style({
  fontSize: '1.5rem',
  fontWeight: '700',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '2rem',
    },
  },
})

export const featureDescription = style({
  color: vars.color.textSecondary,
  fontSize: '1.125rem',
  lineHeight: 1.7,
})

export const featureList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  marginTop: '1rem',
})

export const featureListItem = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.75rem',
  color: vars.color.textSecondary,
})

export const featureCheckIcon = style({
  width: '20px',
  height: '20px',
  color: vars.color.accent,
  flexShrink: 0,
  marginTop: '2px',
})

// ============================================
// CTA Section
// ============================================

export const ctaSection = style({
  position: 'relative',
})

export const ctaCard = style({
  position: 'relative',
  padding: '3rem 2rem',
  textAlign: 'center',
  overflow: 'hidden',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.gap.element,
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '4rem',
    },
  },
})

export const ctaGradient = style({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to bottom right, ${vars.color.accent}15, transparent)`,
  pointerEvents: 'none',
})

export const ctaTitle = style({
  position: 'relative',
  fontSize: '1.875rem',
  fontWeight: '700',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '2.25rem',
    },
  },
})

export const ctaDescription = style({
  position: 'relative',
  color: vars.color.textSecondary,
  maxWidth: '36rem',
})

export const ctaButtons = style({
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1rem',
})

export const btnPrimary = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '0.875rem',
  paddingBottom: '0.875rem',
  borderRadius: '9999px',
  fontWeight: '500',
  background: vars.color.accent,
  color: vars.color.bgPrimary,
  transition: 'all 0.3s ease',
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: vars.shadow.glow,
  },
})

export const btnSecondary = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '0.875rem',
  paddingBottom: '0.875rem',
  borderRadius: '9999px',
  fontWeight: '500',
  background: 'transparent',
  border: `1px solid ${vars.color.borderLight}`,
  color: vars.color.textPrimary,
  transition: 'all 0.3s ease',
  ':hover': {
    borderColor: vars.color.accent,
    color: vars.color.accent,
  },
})

// ============================================
// Video Container
// ============================================

export const videoWrapper = style({
  position: 'relative',
  aspectRatio: '16 / 9',
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
})

export const video = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

// ============================================
// Icon Styles
// ============================================

export const iconSm = style({
  width: '16px',
  height: '16px',
})

export const iconMd = style({
  width: '24px',
  height: '24px',
})
