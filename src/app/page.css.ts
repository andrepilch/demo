import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles";

// Keyframes
const scrollLeft = keyframes({
  "0%": { transform: "translateX(0)" },
  "100%": { transform: "translateX(-50%)" },
});

const fadeInUp = keyframes({
  from: {
    opacity: "0",
    transform: "translateY(20px)",
  },
  to: {
    opacity: "1",
    transform: "translateY(0)",
  },
});

// Page Layout
export const pageWrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
});

export const heroWrapper = style({
  position: "relative",
  marginTop: `calc(-1 * ${vars.layout.headerHeight})`,
  paddingTop: vars.layout.headerHeight,
});

// Hero Section
export const heroSection = style({
  position: "relative",
  zIndex: 10,
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const container = style({
  maxWidth: vars.layout.contentMaxWidth,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: vars.layout.sectionPaddingX,
  paddingRight: vars.layout.sectionPaddingX,
  "@media": {
    "screen and (min-width: 768px)": {
      paddingLeft: vars.layout.sectionPaddingXMd,
      paddingRight: vars.layout.sectionPaddingXMd,
    },
  },
});

export const heroContent = style({
  maxWidth: "56rem",
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.element,
});

// Text Styles
export const eyebrow = style({
  color: "#ffffff",
  fontSize: "0.875rem",
  fontWeight: "500",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out forwards`,
});

export const heroTitle = style({
  fontSize: "2.25rem",
  fontWeight: "700",
  lineHeight: 1.1,
  color: "#ffffff",
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out forwards`,
  animationDelay: "0.1s",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "3rem",
    },
    "screen and (min-width: 1024px)": {
      fontSize: "3.75rem",
    },
  },
});

export const accentGradient = style({
  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), #ffffff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

export const heroSubtitle = style({
  fontSize: "1.25rem",
  color: "rgba(255, 255, 255, 0.85)",
  maxWidth: "42rem",
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out forwards`,
  animationDelay: "0.2s",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "1.5rem",
    },
  },
});

export const ctaButtons = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out forwards`,
  animationDelay: "0.3s",
});

export const btnPrimary = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  borderRadius: "9999px",
  fontWeight: "500",
  transition: "all 0.3s ease",
  background: vars.color.accent,
  color: vars.color.bgPrimary,
  ":hover": {
    background: vars.color.accent,
    transform: "translateY(-1px)",
    boxShadow: vars.shadow.glow,
  },
});

export const btnSecondary = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  borderRadius: "9999px",
  fontWeight: "500",
  transition: "all 0.3s ease",
  background: "transparent",
  border: `1px solid ${vars.color.borderLight}`,
  color: vars.color.textPrimary,
  ":hover": {
    borderColor: vars.color.accent,
    color: vars.color.accent,
  },
});

export const iconSm = style({
  width: "16px",
  height: "16px",
});

export const iconMd = style({
  width: "32px",
  height: "32px",
});

// Impact Stats Ribbon
export const ribbonSection = style({
  position: "relative",
  zIndex: 10,
  borderTop: `1px solid ${vars.color.border}`,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const ribbonWrapper = style({
  overflow: "hidden",
});

export const ribbonTrack = style({
  display: "flex",
  animation: `${scrollLeft} 20s linear infinite`,
});

export const ribbonItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  whiteSpace: "nowrap",
  "@media": {
    "screen and (min-width: 768px)": {
      paddingLeft: "3rem",
      paddingRight: "3rem",
    },
  },
});

export const ribbonValue = style({
  fontSize: "1.875rem",
  fontWeight: "700",
  color: vars.color.accent,
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "2.25rem",
    },
  },
});

export const ribbonLabel = style({
  color: vars.color.textSecondary,
});

export const ribbonDot = style({
  color: vars.color.borderLight,
  marginLeft: "1rem",
  marginRight: "1rem",
});

// Content Sections - wrapper for all sections to use gap
export const sectionsWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.section,
  paddingTop: vars.gap.section,
  paddingBottom: vars.gap.section,
});

export const section = style({
  position: "relative",
  zIndex: 10,
});

// Container with gap for section content layout
export const sectionContent = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.sectionSm,
});

export const sectionHeader = style({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.elementSm,
});

export const sectionHeaderFlex = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.elementSm,
  "@media": {
    "screen and (min-width: 768px)": {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
  },
});

export const sectionTitle = style({
  fontSize: "1.875rem",
  fontWeight: "700",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "2.25rem",
    },
  },
});

export const sectionDescription = style({
  color: vars.color.textSecondary,
  maxWidth: "42rem",
  marginLeft: "auto",
  marginRight: "auto",
});

export const viewAllLink = style({
  position: "relative",
  color: vars.color.textSecondary,
  transition: "color 0.2s ease",
  ":hover": {
    color: vars.color.textPrimary,
  },
  "::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: "-2px",
    width: 0,
    height: "2px",
    background: vars.color.accent,
    transition: "width 0.3s ease",
  },
  selectors: {
    "&:hover::after": {
      width: "100%",
    },
  },
});

// Grid layouts
export const gridThree = style({
  display: "grid",
  gap: "2rem",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
});

export const gridTwo = style({
  display: "grid",
  gap: "3rem",
  alignItems: "center",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

// Stat Card
export const statCard = style({
  position: "relative",
  padding: "2rem",
  background: vars.color.bgCard,
  borderRadius: vars.radius.lg,
  overflow: "hidden",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  "::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: vars.radius.lg,
    padding: "1px",
    background:
      "linear-gradient(135deg, rgba(14, 165, 233, 0.4), transparent 50%)",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
    WebkitMaskComposite: "xor",
    pointerEvents: "none",
  },
});

export const statValue = style({
  fontSize: "3rem",
  fontWeight: "700",
  background: vars.color.accent,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "3.75rem",
    },
  },
});

export const statLabel = style({
  fontSize: "1.25rem",
  fontWeight: "600",
});

export const statDescription = style({
  color: vars.color.textMuted,
});

// Case Study Card
export const caseStudyGrid = style({
  display: "grid",
  gap: "2rem",
});

export const caseStudyCard = style({
  display: "grid",
  gap: "1.5rem",
  padding: "1.5rem",
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  transition: "all 0.3s ease",
  ":hover": {
    background: vars.color.bgCardHover,
    borderColor: vars.color.borderLight,
    transform: "translateY(-2px)",
  },
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "1fr 2fr",
      gap: "2.5rem",
      padding: "2rem",
    },
  },
});

export const caseStudyImage = style({
  position: "relative",
  aspectRatio: "4 / 3",
  borderRadius: vars.radius.lg,
  overflow: "hidden",
  background: vars.color.bgSecondary,
});

export const caseStudyImageInner = style({
  objectFit: "cover",
  transition: "transform 0.5s ease",
  selectors: {
    [`${caseStudyCard}:hover &`]: {
      transform: "scale(1.05)",
    },
  },
});

export const caseStudyContent = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.75rem",
});

export const caseStudyTitle = style({
  fontSize: "1.5rem",
  fontWeight: "700",
  transition: "color 0.2s ease",
  selectors: {
    [`${caseStudyCard}:hover &`]: {
      color: vars.color.accent,
    },
  },
});

export const caseStudyOutcome = style({
  color: vars.color.accent,
  fontWeight: "500",
});

export const caseStudyDescription = style({
  color: vars.color.textSecondary,
});

// Mini Stats within case study card
export const caseStudyStats = style({
  display: "flex",
  gap: "1.5rem",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  marginTop: "0.25rem",
  borderTop: `1px solid ${vars.color.border}`,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const caseStudyStat = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.125rem",
});

export const caseStudyStatValue = style({
  fontSize: "1.25rem",
  fontWeight: "700",
  color: vars.color.accent,
  lineHeight: 1.2,
});

export const caseStudyStatLabel = style({
  fontSize: "0.75rem",
  color: vars.color.textMuted,
  textTransform: "uppercase",
  letterSpacing: "0.025em",
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
});

export const tag = style({
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  paddingTop: "0.375rem",
  paddingBottom: "0.375rem",
  borderRadius: "9999px",
  fontSize: "0.875rem",
  background: "rgba(14, 165, 233, 0.1)",
  border: "1px solid rgba(14, 165, 233, 0.2)",
  color: vars.color.accent,
});

// Framework Card
export const frameworkCard = style({
  position: "relative",
  padding: "2rem",
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: `linear-gradient(90deg, ${vars.color.accent}, transparent)`,
  },
});

export const frameworkIcon = style({
  color: vars.color.accent,
});

export const frameworkName = style({
  fontSize: "1.25rem",
  fontWeight: "700",
});

export const frameworkTagline = style({
  color: vars.color.accent,
  fontSize: "0.875rem",
});

export const frameworkDescription = style({
  color: vars.color.textSecondary,
});

// Code Snippet Card
export const codeCard = style({
  padding: "1.5rem",
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  fontFamily: vars.font.mono,
  fontSize: "0.875rem",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.elementSm,
});

export const codeHeader = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const codeDot = style({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
});

export const codeDotRed = style([
  codeDot,
  { background: "rgba(239, 68, 68, 0.8)" },
]);
export const codeDotYellow = style([
  codeDot,
  { background: "rgba(234, 179, 8, 0.8)" },
]);
export const codeDotGreen = style([
  codeDot,
  { background: "rgba(34, 197, 94, 0.8)" },
]);

export const codeFilename = style({
  marginLeft: "0.5rem",
  color: vars.color.textMuted,
});

export const codeContent = style({
  color: vars.color.textSecondary,
  overflowX: "auto",
});

// CTA Section
export const ctaCard = style({
  position: "relative",
  padding: "2.5rem",
  textAlign: "center",
  overflow: "hidden",
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.gap.element,
  "@media": {
    "screen and (min-width: 768px)": {
      padding: "4rem",
    },
  },
});

export const ctaGradient = style({
  position: "absolute",
  inset: 0,
  background: `linear-gradient(to bottom right, ${vars.color.accent}15, transparent)`,
  pointerEvents: "none",
});

export const ctaTitle = style({
  position: "relative",
  fontSize: "1.875rem",
  fontWeight: "700",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "2.25rem",
    },
  },
});

export const ctaButtonsWrapper = style({
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
});

// Social Links for CTA section
export const socialLinks = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
});

export const socialLink = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  background: vars.color.bgSecondary,
  border: `1px solid ${vars.color.border}`,
  color: vars.color.textMuted,
  transition: "all 0.3s ease",
  ":hover": {
    color: vars.color.accent,
    borderColor: vars.color.accent,
    transform: "translateY(-2px)",
  },
});

export const socialIcon = style({
  width: "24px",
  height: "24px",
});

// Text utilities
export const textAccent = style({
  color: vars.color.accent,
});

export const textSecondary = style({
  color: vars.color.textSecondary,
});

export const textMuted = style({
  color: vars.color.textMuted,
});

export const textPrimary = style({
  color: vars.color.textPrimary,
});

export const fontMedium = style({
  fontWeight: "500",
});

export const linkAccent = style({
  color: vars.color.accent,
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: "-2px",
    width: 0,
    height: "2px",
    background: vars.color.accent,
    transition: "width 0.3s ease",
  },
  selectors: {
    "&:hover::after": {
      width: "100%",
    },
  },
});

export const spaceY4 = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});
