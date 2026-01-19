import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/styles";

// ============================================
// Page Wrappers
// ============================================

// Standard page wrapper with section spacing
export const pageWrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.section,
  paddingTop: vars.gap.section,
  paddingBottom: vars.gap.section,
});

// Sections wrapper for grouping multiple sections
export const sectionsWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.section,
  paddingTop: vars.gap.section,
  paddingBottom: vars.gap.section,
});

// ============================================
// Section
// ============================================

// Base section - just positioning context
export const section = style({
  position: "relative",
  zIndex: 10,
});

// ============================================
// Container
// ============================================

// Centered content container with responsive padding
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

// Container with larger padding (for hero sections within gradient backgrounds)
export const containerLarge = style({
  maxWidth: vars.layout.contentMaxWidth,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: vars.layout.sectionPaddingXLg,
  paddingRight: vars.layout.sectionPaddingXLg,
});

// ============================================
// Section Content
// ============================================

// Flex column layout for section internals
export const sectionContent = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.sectionSm,
});

// ============================================
// Section Header Variants
// ============================================

// Base header styles
const sectionHeaderBase = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.elementSm,
});

// Centered header (default for most sections)
export const sectionHeader = style([
  sectionHeaderBase,
  {
    textAlign: "center",
  },
]);

// Left-aligned header
export const sectionHeaderLeft = style([
  sectionHeaderBase,
  {
    textAlign: "left",
  },
]);

// Flexible header - row on desktop with space-between
export const sectionHeaderFlex = style([
  sectionHeaderBase,
  {
    "@media": {
      "screen and (min-width: 768px)": {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
      },
    },
  },
]);

// ============================================
// Grid Layouts
// ============================================

const gridBase = style({
  display: "grid",
  gap: "2rem",
});

export const gridTwo = style([
  gridBase,
  {
    "@media": {
      "screen and (min-width: 768px)": {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
    },
  },
]);

export const gridThree = style([
  gridBase,
  {
    "@media": {
      "screen and (min-width: 768px)": {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
    },
  },
]);

// ============================================
// Gap Variants (for customizing sectionContent)
// ============================================

export const gapVariants = styleVariants({
  sm: { gap: vars.gap.elementSm },
  md: { gap: vars.gap.element },
  lg: { gap: vars.gap.sectionSm },
  xl: { gap: vars.gap.section },
});
