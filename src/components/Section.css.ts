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

// Base section style - combines positioning, centering, and maxWidth
const sectionBase = style({
  position: "relative",
  zIndex: 10,
  width: "100%",
  margin: "0 auto",
  maxWidth: vars.layout.mobileContentMaxWidth,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "@media": {
    "screen and (min-width: 768px)": {
      maxWidth: vars.layout.contentMaxWidth,
      padding: `0 ${vars.gap.section}`,
    },
  },
});

// Gap variants for section spacing
export const sectionGapVariants = styleVariants({
  none: [sectionBase, { gap: "0" }],
  sm: [sectionBase, { gap: vars.gap.elementSm }],
  md: [sectionBase, { gap: vars.gap.sectionSm }],
  lg: [sectionBase, { gap: vars.gap.element }],
  xl: [sectionBase, { gap: vars.gap.section }],
});

// ============================================
// Container (kept for backward compatibility, uses same base)
// ============================================

export const container = sectionBase;
export const containerLarge = sectionBase;

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
  md: { gap: vars.gap.sectionSm },
  lg: { gap: vars.gap.element },
  xl: { gap: vars.gap.section },
});
