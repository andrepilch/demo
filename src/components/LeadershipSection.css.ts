import { style } from "@vanilla-extract/css";
import { vars } from "@/styles";

// Header styles
export const headerWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  justifyContent: "center",
});

export const subtitle = style({
  color: vars.color.textSecondary,
  marginTop: "0.75rem",
  fontSize: "1rem",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "1.125rem",
    },
  },
});

// Achievement cards grid
export const cardsGrid = style({
  display: "grid",
  gap: "1rem",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "1.25rem",
    },
  },
});

// Individual achievement card
export const achievementCard = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "0.875rem",
  padding: "1.25rem 1.5rem",
  background: "rgba(255, 255, 255, 0.03)",
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  transition: "all 0.3s ease",
  ":hover": {
    background: "rgba(255, 255, 255, 0.05)",
    borderColor: vars.color.borderLight,
  },
});

// Diamond icon
export const diamondIcon = style({
  flexShrink: 0,
  width: "20px",
  height: "20px",
  marginTop: "2px",
  color: vars.color.accent,
});

// Card text
export const cardText = style({
  fontSize: "0.9375rem",
  lineHeight: 1.5,
  color: vars.color.textSecondary,
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "1rem",
    },
  },
});

// Bold highlight within card text
export const highlight = style({
  fontWeight: 600,
  color: vars.color.textPrimary,
});
