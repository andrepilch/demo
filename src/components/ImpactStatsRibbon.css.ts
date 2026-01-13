import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles";

const scrollLeft = keyframes({
  "0%": { transform: "translateX(0)" },
  "100%": { transform: "translateX(-50%)" },
});

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
