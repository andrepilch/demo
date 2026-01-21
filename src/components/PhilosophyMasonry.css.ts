import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles";

// ============================================
// Masonry Grid Container
// ============================================

export const masonryGrid = style({
  columnCount: 1,
  columnGap: "1.25rem",
  "@media": {
    "screen and (min-width: 640px)": {
      columnCount: 2,
    },
    "screen and (min-width: 1024px)": {
      columnCount: 3,
    },
  },
});

// ============================================
// Philosophy Card
// ============================================

const cardFadeIn = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(12px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const philosophyCard = style({
  breakInside: "avoid",
  marginBottom: "1.25rem",
  padding: "1.5rem",
  background: vars.color.bgCard,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  animation: `${cardFadeIn} 0.5s ease-out backwards`,
  position: "relative",
  overflow: "hidden",
  ":hover": {
    background: vars.color.bgCardHover,
    borderColor: vars.color.borderLight,
    transform: "translateY(-3px)",
    boxShadow: `0 8px 24px rgba(0, 0, 0, 0.15)`,
  },
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "3px",
    height: "100%",
    background: vars.color.accent,
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  selectors: {
    "&:hover::before": {
      opacity: 1,
    },
  },
});

// Animation delay variants for staggered appearance
export const cardDelay1 = style({ animationDelay: "0.05s" });
export const cardDelay2 = style({ animationDelay: "0.1s" });
export const cardDelay3 = style({ animationDelay: "0.15s" });
export const cardDelay4 = style({ animationDelay: "0.2s" });
export const cardDelay5 = style({ animationDelay: "0.25s" });
export const cardDelay6 = style({ animationDelay: "0.3s" });
export const cardDelay7 = style({ animationDelay: "0.35s" });
export const cardDelay8 = style({ animationDelay: "0.4s" });

export const cardDelays = [
  cardDelay1,
  cardDelay2,
  cardDelay3,
  cardDelay4,
  cardDelay5,
  cardDelay6,
  cardDelay7,
  cardDelay8,
];

// ============================================
// Card Content
// ============================================

export const cardContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

export const cardTitle = style({
  fontSize: "1.125rem",
  fontWeight: 600,
  color: vars.color.textPrimary,
  lineHeight: 1.3,
  letterSpacing: "-0.01em",
});

export const cardDescription = style({
  fontSize: "0.9375rem",
  color: vars.color.textSecondary,
  lineHeight: 1.6,
});

// ============================================
// Quote styling for longer philosophies
// ============================================

export const cardQuote = style({
  position: "relative",
  paddingLeft: "1rem",
  marginTop: "0.5rem",
  borderLeft: `2px solid ${vars.color.accent}`,
  fontStyle: "italic",
  fontSize: "0.875rem",
  color: vars.color.textMuted,
  lineHeight: 1.5,
});

export const quoteAttribution = style({
  marginTop: "0.5rem",
  fontSize: "0.8125rem",
  color: vars.color.accent,
  fontStyle: "normal",
  fontWeight: 500,
});

// ============================================
// Category Tag
// ============================================

export const categoryTag = style({
  display: "inline-block",
  fontSize: "0.6875rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: vars.color.accent,
  marginBottom: "0.25rem",
});
