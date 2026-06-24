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
// Hero Section (accent/background passed via inline or class)
// ============================================

export const heroSection = style({
  position: 'relative',
  paddingTop: '8rem',
  paddingBottom: '4rem',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: vars.color.textOnAccent,
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
  gap: vars.gap.elementMd,
  maxWidth: '48rem',
})

export const heroBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  alignSelf: 'flex-start',
  marginTop: '0.25rem',
  marginBottom: '0.25rem',
  paddingLeft: '0.875rem',
  paddingRight: '0.875rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  borderRadius: '9999px',
  fontSize: '0.8125rem',
  fontWeight: '600',
  letterSpacing: '0.02em',
  color: vars.color.textOnAccent,
  background: 'rgba(255, 255, 255, 0.15)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  ':hover': {
    background: 'rgba(255, 255, 255, 0.25)',
    transform: 'translateY(-1px)',
  },
})

export const heroBadgeIcon = style({
  width: '16px',
  height: '16px',
  flexShrink: 0,
})

export const heroHeadline = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.gap.elementSm,
  marginTop: vars.space.xl,
})

export const heroEyebrow = style({
  color: vars.color.textOnAccent,
  fontSize: '0.875rem',
  fontWeight: '500',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
})

export const heroTitle = style({
  fontSize: '2.5rem',
  fontWeight: '700',
  color: 'inherit',
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
  color: 'inherit',
  opacity: 0.95,
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
  background: vars.color.textOnAccent,
  border: 'none',
  color: vars.color.textAccentDark,
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
  gap: vars.gap.elementMd,
})

export const sectionHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.gap.elementSm,
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
// Process steps (numbered cards grid)
// ============================================

export const processStepsList = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'grid',
  gap: '1.5rem',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})

export const processStepItem = style({
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

export const processStepNumber = style({
  fontSize: '2.5rem',
  fontWeight: '700',
  color: vars.color.accent,
  opacity: 0.35,
  lineHeight: 1,
})

export const processStepTitle = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  color: vars.color.textPrimary,
  lineHeight: 1.4,
})

export const processStepDescription = style({
  color: vars.color.textSecondary,
  fontSize: '0.9375rem',
  lineHeight: 1.6,
})

export const processImageCard = style({
  position: 'relative',
  aspectRatio: '16 / 10',
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  '@media': {
    'screen and (min-width: 768px)': {
      gridColumn: 'span 2',
    },
  },
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
  marginBottom: '1.25rem',
  breakInside: 'avoid',
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
  alignItems: 'stretch',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})

export const goalCard = style({
  position: 'relative',
  padding: '2rem',
  minHeight: '16rem',
  height: '100%',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'space-between',
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

export const goalBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
})

export const goalLabel = style({
  fontSize: '0.75rem',
  fontWeight: '600',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: vars.color.textSecondary,
})

export const goalPrincipleText = style({
  fontSize: '1.125rem',
  fontWeight: '500',
  color: vars.color.textSecondary,
  lineHeight: 1.4,
})

export const goalArrow = style({
  alignSelf: 'center',
  fontSize: '1.5rem',
  color: vars.color.accent,
  lineHeight: 1,
})

export const goalOutcomeText = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  color: vars.color.accent,
  lineHeight: 1.4,
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

export const imageWrapper = style({
  position: 'relative',
  aspectRatio: '16 / 10',
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
// Lightbox
// ============================================

export const lightboxOverlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 2000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  cursor: 'pointer',
})

export const lightboxImageWrapper = style({
  position: 'relative',
  width: 'fit-content',
  height: 'fit-content',
  maxWidth: '90vw',
  maxHeight: '90vh',
  cursor: 'default',
})

export const imageWrapperClickable = style({
  cursor: 'pointer',
})

// ============================================
// Results / Stats
// ============================================
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
  position: 'relative',
  padding: '2rem',
  marginBottom: '1.25rem',
  breakInside: 'avoid',
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
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
  color: vars.color.textSecondary,
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
// Icon Styles
// ============================================

export const iconSm = style({
  width: '16px',
  height: '16px',
})
