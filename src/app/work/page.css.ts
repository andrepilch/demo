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
