import { style } from "@vanilla-extract/css";
import { vars } from "@/styles";

// Page Layout
export const pageWrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.section,
  paddingTop: vars.gap.section,
  paddingBottom: vars.gap.section,
});

// Container
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

// Sections
export const section = style({});

export const sectionSmall = style({});

// Container with gap for section content layout
export const sectionContent = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.sectionSm,
});

// Hero Grid
export const heroGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "2.5rem",
  alignItems: "flex-start",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "280px 1fr",
      gap: "4rem",
    },
  },
});

// Avatar
export const avatarWrapper = style({
  position: "relative",
  width: "100%",
  maxWidth: "280px",
  marginLeft: "auto",
  marginRight: "auto",
  "@media": {
    "screen and (min-width: 768px)": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
});

export const avatarContainer = style({
  position: "relative",
  aspectRatio: "1 / 1",
  width: "100%",
  borderRadius: vars.radius.xl,
  overflow: "hidden",
});

export const avatarDecoration = style({
  position: "absolute",
  bottom: "-1rem",
  right: "-1rem",
  width: "100%",
  height: "100%",
  border: `2px solid ${vars.color.accent}`,
  borderRadius: vars.radius.xl,
  zIndex: -1,
});

// Bio Content
export const bioContent = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.element,
});

export const eyebrow = style({
  color: vars.color.accent,
  fontSize: "0.875rem",
  fontWeight: "500",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
});

export const pageTitle = style({
  fontSize: "2.25rem",
  fontWeight: "700",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "3rem",
    },
  },
});

export const bioText = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  fontSize: "1.125rem",
  color: vars.color.textSecondary,
  lineHeight: 1.7,
});

export const bioHighlight = style({
  color: vars.color.textPrimary,
  fontWeight: "500",
});

// Stats Row
export const statsRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5rem",
  paddingTop: "2rem",
  borderTop: `1px solid ${vars.color.border}`,
});

export const statItem = style({});

export const statValue = style({
  fontSize: "1.5rem",
  fontWeight: "700",
  color: vars.color.accent,
});

export const statLabel = style({
  fontSize: "0.875rem",
  color: vars.color.textMuted,
});

// Section Headers
export const sectionHeader = style({
  maxWidth: "48rem",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.elementSm,
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
});

// Card Grid
export const gridTwo = style({
  display: "grid",
  gap: "2rem",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

export const gridThree = style({
  display: "grid",
  gap: "2rem",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
});

// Card Styles
export const card = style({
  padding: "2rem",
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  transition: "all 0.3s ease",
  ":hover": {
    background: vars.color.bgCardHover,
    borderColor: vars.color.borderLight,
    transform: "translateY(-2px)",
  },
});

export const cardIcon = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "1rem",
});

export const cardIconWrapper = style({
  color: vars.color.accent,
  marginTop: "0.25rem",
  flexShrink: 0,
});

export const cardContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const cardTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
});

export const cardDescription = style({
  color: vars.color.textSecondary,
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

export const frameworkTitle = style({
  fontSize: "1.25rem",
  fontWeight: "700",
});

export const frameworkDescription = style({
  color: vars.color.textSecondary,
});

// Skills
export const skillsCard = style({
  padding: "1.5rem",
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.elementSm,
});

export const skillsCategory = style({
  fontSize: "1.125rem",
  fontWeight: "600",
  color: vars.color.accent,
});

export const skillsList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
});

export const skillBadge = style({
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

// Project Card
export const projectCard = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.elementSm,
  padding: "2rem",
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  transition: "all 0.3s ease",
  ":hover": {
    background: vars.color.bgCardHover,
    borderColor: vars.color.borderLight,
    transform: "translateY(-2px)",
  },
});

export const projectHeader = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "1rem",
});

export const projectTitle = style({
  fontSize: "1.5rem",
  fontWeight: "700",
  transition: "color 0.2s ease",
  selectors: {
    [`${projectCard}:hover &`]: {
      color: vars.color.accent,
    },
  },
});

export const projectStatus = style({
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  borderRadius: "9999px",
  fontSize: "0.75rem",
  fontWeight: "500",
  background: "rgba(34, 197, 94, 0.1)",
  color: "rgb(74, 222, 128)",
  border: "1px solid rgba(34, 197, 94, 0.2)",
});

export const projectDescription = style({
  color: vars.color.textSecondary,
});

export const projectLink = style({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
  color: vars.color.accent,
  fontSize: "0.875rem",
});

export const projectLinkIcon = style({
  width: "16px",
  height: "16px",
  transition: "transform 0.2s ease",
  selectors: {
    [`${projectCard}:hover &`]: {
      transform: "translateX(4px)",
    },
  },
});

// Timeline
export const timelineContainer = style({
  maxWidth: "48rem",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexDirection: "column",
});

export const timelineItem = style({
  position: "relative",
  paddingLeft: "2rem",
  paddingBottom: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  "::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: "8px",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: vars.color.accent,
  },
  "::after": {
    content: '""',
    position: "absolute",
    left: "4px",
    top: "22px",
    width: "2px",
    height: "calc(100% - 10px)",
    background: vars.color.border,
  },
  selectors: {
    "&:last-child::after": {
      display: "none",
    },
  },
});

export const timelinePeriod = style({
  color: vars.color.accent,
  fontSize: "0.875rem",
  fontWeight: "500",
});

export const timelineRole = style({
  fontSize: "1.25rem",
  fontWeight: "700",
});

export const timelineCompany = style({
  color: vars.color.textSecondary,
});

export const timelineLocation = style({
  color: vars.color.textMuted,
  fontSize: "0.875rem",
});

export const timelineHighlights = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const timelineHighlight = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "0.5rem",
  color: vars.color.textSecondary,
});

export const timelineCheckIcon = style({
  width: "20px",
  height: "20px",
  color: vars.color.accent,
  flexShrink: 0,
  marginTop: "2px",
});

// Icon
export const iconSm = style({
  width: "16px",
  height: "16px",
});

export const iconMd = style({
  width: "24px",
  height: "24px",
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

export const ctaDescription = style({
  position: "relative",
  color: vars.color.textSecondary,
  maxWidth: "36rem",
  marginLeft: "auto",
  marginRight: "auto",
});

export const ctaButtons = style({
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
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

// Max width wrapper
export const maxW2xl = style({
  maxWidth: "42rem",
  marginLeft: "auto",
  marginRight: "auto",
});
