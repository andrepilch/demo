import { style } from "@vanilla-extract/css";
import { vars } from "@/styles";

export const header = style({
  position: "sticky",
  top: 0,
  zIndex: 50,
  backdropFilter: "blur(12px)",
  backgroundColor: `color-mix(in srgb, ${vars.color.bgPrimary} 80%, transparent)`,
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

export const nav = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "64px",
});

export const logoLink = style({
  display: "flex",
  alignItems: "center",
});

export const logo = style({
  height: "28px",
  width: "auto",
  color: vars.color.textPrimary,
  transition: "color 0.2s ease",
  selectors: {
    [`${logoLink}:hover &`]: {
      color: vars.color.accent,
    },
  },
});

export const desktopNav = style({
  display: "none",
  alignItems: "center",
  gap: "2rem",
  "@media": {
    "screen and (min-width: 768px)": {
      display: "flex",
    },
  },
});

export const navLink = style({
  position: "relative",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  color: vars.color.textSecondary,
  transition: "color 0.2s ease",
  ":hover": {
    color: vars.color.textPrimary,
  },
});

export const navLinkActive = style({
  color: vars.color.accent,
});

export const navLinkIndicator = style({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "2px",
  backgroundColor: vars.color.accent,
});

export const desktopCta = style({
  display: "none",
  alignItems: "center",
  gap: "0.75rem",
  "@media": {
    "screen and (min-width: 768px)": {
      display: "flex",
    },
  },
});

export const ctaButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  fontSize: "0.875rem",
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

export const mobileMenuButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem",
  color: vars.color.textSecondary,
  transition: "color 0.2s ease",
  "@media": {
    "screen and (min-width: 768px)": {
      display: "none",
    },
  },
  ":hover": {
    color: vars.color.textPrimary,
  },
});

export const mobileMenu = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.elementSm,
  paddingTop: "1rem",
  paddingBottom: "1rem",
  borderTop: `1px solid ${vars.color.border}`,
  "@media": {
    "screen and (min-width: 768px)": {
      display: "none",
    },
  },
});

export const mobileNavList = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const mobileNavLink = style({
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  color: vars.color.textSecondary,
  transition: "color 0.2s ease",
  ":hover": {
    color: vars.color.textPrimary,
  },
});

export const mobileNavLinkActive = style({
  color: vars.color.accent,
});

export const mobileCta = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
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
  textAlign: "center",
  ":hover": {
    background: vars.color.accent,
  },
});

export const icon = style({
  width: "24px",
  height: "24px",
});
