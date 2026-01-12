import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles";

// Keyframes
const twinkle = keyframes({
  "0%, 100%": { opacity: "0.3" },
  "50%": { opacity: "0.8" },
});

const shoot = keyframes({
  "0%": {
    transform: "translateX(-100%) translateY(-100%) rotate(-45deg)",
    opacity: "0",
  },
  "5%": { opacity: "1" },
  "15%": { opacity: "0" },
  "100%": {
    transform: "translateX(100vw) translateY(100vh) rotate(-45deg)",
    opacity: "0",
  },
});

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
});

// Star Field
export const starField = style({
  position: "absolute",
  inset: 0,
  overflow: "hidden",
  pointerEvents: "none",
});

export const star = style({
  position: "absolute",
  width: "2px",
  height: "2px",
  background: "white",
  borderRadius: "50%",
  opacity: 0.3,
  animation: `${twinkle} 3s ease-in-out infinite`,
});

export const shootingStar = style({
  position: "absolute",
  width: "100px",
  height: "1px",
  background: "linear-gradient(90deg, rgba(14, 165, 233, 0.8), transparent)",
  animation: `${shoot} 4s ease-out infinite`,
  opacity: 0,
});

// Hero Gradient
export const heroGradient = style({
  position: "absolute",
  inset: 0,
  background: vars.gradient.hero,
  pointerEvents: "none",
});

// Hero Section
export const heroSection = style({
  position: "relative",
  zIndex: 10,
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingTop: "5rem",
  paddingBottom: "5rem",
});

export const container = style({
  maxWidth: "72rem",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  "@media": {
    "screen and (min-width: 768px)": {
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
  },
});

export const heroContent = style({
  maxWidth: "56rem",
});

// Text Styles
export const eyebrow = style({
  color: vars.color.accent,
  fontSize: "0.875rem",
  fontWeight: "500",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  marginBottom: "1rem",
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out forwards`,
});

export const heroTitle = style({
  fontSize: "2.25rem",
  fontWeight: "700",
  lineHeight: 1.1,
  marginBottom: "1.5rem",
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
  background: `linear-gradient(135deg, ${vars.color.accentLight}, ${vars.color.accent})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

export const heroSubtitle = style({
  fontSize: "1.25rem",
  color: vars.color.textSecondary,
  marginBottom: "2.5rem",
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
    background: vars.color.accentLight,
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
  paddingTop: "2rem",
  paddingBottom: "2rem",
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

// Content Sections
export const section = style({
  position: "relative",
  zIndex: 10,
  paddingTop: "6rem",
  paddingBottom: "6rem",
});

export const sectionHeader = style({
  textAlign: "center",
  marginBottom: "4rem",
});

export const sectionHeaderFlex = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginBottom: "4rem",
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

// Section Divider
export const sectionDivider = style({
  position: "relative",
  zIndex: 10,
  width: "100%",
  height: "1px",
  background: `linear-gradient(90deg, transparent, ${vars.color.border}, transparent)`,
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
  "::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: vars.radius.lg,
    padding: "1px",
    background: "linear-gradient(135deg, rgba(14, 165, 233, 0.4), transparent 50%)",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
    WebkitMaskComposite: "xor",
    pointerEvents: "none",
  },
});

export const statValue = style({
  fontSize: "3rem",
  fontWeight: "700",
  background: `linear-gradient(135deg, ${vars.color.accentLight}, ${vars.color.accent})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  marginBottom: "0.75rem",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "3.75rem",
    },
  },
});

export const statLabel = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  marginBottom: "0.5rem",
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
});

export const caseStudyTitle = style({
  fontSize: "1.5rem",
  fontWeight: "700",
  marginBottom: "0.75rem",
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
  marginBottom: "0.75rem",
});

export const caseStudyDescription = style({
  color: vars.color.textSecondary,
  marginBottom: "1rem",
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
  color: vars.color.accentLight,
});

// Framework Card
export const frameworkCard = style({
  position: "relative",
  padding: "2rem",
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  overflow: "hidden",
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
  marginBottom: "1rem",
});

export const frameworkName = style({
  fontSize: "1.25rem",
  fontWeight: "700",
  marginBottom: "0.25rem",
});

export const frameworkTagline = style({
  color: vars.color.accent,
  fontSize: "0.875rem",
  marginBottom: "0.75rem",
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
});

export const codeHeader = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginBottom: "1rem",
});

export const codeDot = style({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
});

export const codeDotRed = style([codeDot, { background: "rgba(239, 68, 68, 0.8)" }]);
export const codeDotYellow = style([codeDot, { background: "rgba(234, 179, 8, 0.8)" }]);
export const codeDotGreen = style([codeDot, { background: "rgba(34, 197, 94, 0.8)" }]);

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
  marginBottom: "1rem",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "2.25rem",
    },
  },
});

export const ctaDescription = style({
  position: "relative",
  color: vars.color.textSecondary,
  marginBottom: "2rem",
  maxWidth: "36rem",
  marginLeft: "auto",
  marginRight: "auto",
});

export const ctaButtonsWrapper = style({
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
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
