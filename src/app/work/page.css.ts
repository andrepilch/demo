import { style } from "@vanilla-extract/css";
import { vars } from "@/styles";

export const pageWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.sectionSm,
  paddingTop: vars.gap.section,
  paddingBottom: vars.gap.section,
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

export const pageTitle = style({
  fontSize: "2.25rem",
  fontWeight: "700",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "3rem",
    },
  },
});

// Page header with flex gap
export const pageHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.elementSm,
});

export const pageDescription = style({
  fontSize: "1.125rem",
  color: vars.color.textSecondary,
});
