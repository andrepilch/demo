import { style } from "@vanilla-extract/css";
import { vars } from "@/styles";

export const footer = style({
  borderTop: `1px solid ${vars.color.border}`,
  marginTop: "auto",
});

export const container = style({
  maxWidth: vars.layout.contentMaxWidth,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: vars.layout.sectionPaddingX,
  paddingRight: vars.layout.sectionPaddingX,
  paddingTop: vars.gap.sectionSm,
  paddingBottom: vars.gap.sectionSm,
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.sectionSm,
  "@media": {
    "screen and (min-width: 768px)": {
      paddingLeft: vars.layout.sectionPaddingXMd,
      paddingRight: vars.layout.sectionPaddingXMd,
    },
  },
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "3rem",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
});

export const brandSection = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.elementSm,
});

export const brandHeader = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
});

export const logoBox = style({
  width: "40px",
  height: "40px",
  borderRadius: "8px",
  backgroundColor: vars.color.accent,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.bgPrimary,
  fontWeight: "700",
  fontSize: "1.125rem",
});

export const logoText = style({
  fontWeight: "600",
  fontSize: "1.125rem",
});

export const brandDescription = style({
  color: vars.color.textSecondary,
  lineHeight: 1.6,
});

export const socialLinks = style({
  display: "flex",
  gap: "1rem",
});

export const socialLink = style({
  color: vars.color.textMuted,
  transition: "color 0.2s ease",
  ":hover": {
    color: vars.color.accent,
  },
});

export const socialIcon = style({
  width: "20px",
  height: "20px",
});

export const linksSection = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.elementSm,
});

export const sectionTitle = style({
  fontWeight: "600",
});

export const navList = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

export const navLink = style({
  color: vars.color.textSecondary,
  transition: "color 0.2s ease",
  ":hover": {
    color: vars.color.textPrimary,
  },
});

export const contactSection = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.elementSm,
});

export const contactText = style({
  color: vars.color.textSecondary,
  lineHeight: 1.6,
});

export const ctaButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  fontSize: "0.875rem",
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

export const ctaIcon = style({
  width: "16px",
  height: "16px",
});

export const bottomBar = style({
  paddingTop: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",
});

export const copyright = style({
  color: vars.color.textMuted,
  fontSize: "0.875rem",
});

export const madeWith = style({
  color: vars.color.textMuted,
  fontSize: "0.875rem",
});
