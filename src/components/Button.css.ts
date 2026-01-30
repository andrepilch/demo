import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/styles";

// ============================================
// Base Button Styles
// ============================================

export const buttonBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  borderRadius: vars.radius.full,
  fontWeight: "500",
  transition: "all 0.3s ease",
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
});

// ============================================
// Size Variants
// ============================================

export const sizeVariants = styleVariants({
  sm: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    fontSize: "0.875rem",
  },
  md: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontSize: "1.125rem",
  },
});

// ============================================
// Variant Styles
// ============================================

// Primary - solid accent background
export const primary = style([
  buttonBase,
  {
    background: vars.color.accent,
    color: vars.color.textOnAccent,
    ":hover": {
      // transform: "translateY(-4px)",
      transform: "scale(1.04)",
      boxShadow: vars.shadow.glow,
      color: vars.color.textOnAccent,
    },
  },
]);

// Secondary - transparent with border
export const secondary = style([
  buttonBase,
  {
    background: "transparent",
    border: `1px solid ${vars.color.borderLight}`,
    color: vars.color.textPrimary,
    ":hover": {
      borderColor: vars.color.accent,
      color: vars.color.accent,
    },
  },
]);

// Outlined - subtle background (for dark backgrounds)
export const outlined = style([
  buttonBase,
  {
    background: vars.color.bgSecondary,
    color: vars.color.textPrimary,
    ":hover": {
      background: vars.color.bgCardHover,
      transform: "translateY(-1px)",
      boxShadow: vars.shadow.glow,
    },
  },
]);

// ============================================
// Button Group
// ============================================

export const buttonGroup = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
});

// Centered button group (for CTA sections)
export const buttonGroupCenter = style([
  buttonGroup,
  {
    justifyContent: "center",
  },
]);

// ============================================
// Icon Sizes (for buttons with icons)
// ============================================

export const iconSm = style({
  width: "16px",
  height: "16px",
});

export const iconMd = style({
  width: "20px",
  height: "20px",
});
