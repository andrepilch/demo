import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

// Case study accent – used for hero flood and project-specific accents
const caseStudyAccent = '#FF8000'

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
  backgroundImage: `linear-gradient(135deg, ${caseStudyAccent}e6 0%, ${caseStudyAccent}99 50%, ${caseStudyAccent}80 100%), url("/images/projects/proview/proview_cover.jpg")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: vars.color.textOnAccent,
  overflow: 'hidden',
})
