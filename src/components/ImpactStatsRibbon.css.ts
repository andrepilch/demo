import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles";

const scrollLeft = keyframes({
  "0%": { transform: "translateX(0)" },
  "100%": { transform: "translateX(-50%)" },
});

export const ribbonSection = style({
  position: "relative",
  pointerEvents: "none",
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
  paddingTop: "8rem",
  paddingBottom: "4rem",
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
  color: vars.color.textMuted,
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "2.25rem",
    },
  },
});

export const ribbonLabel = style({
  color: vars.color.textMuted,
  whiteSpace: "nowrap",
});
