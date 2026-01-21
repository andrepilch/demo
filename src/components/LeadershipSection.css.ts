import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles";

// Shooting star animation
const shootingStar = keyframes({
  "0%": {
    transform: "translateX(0) translateY(0)",
    opacity: 1,
  },
  "70%": {
    opacity: 1,
  },
  "100%": {
    transform: "translateX(-300px) translateY(300px)",
    opacity: 0,
  },
});

const twinkle = keyframes({
  "0%, 100%": {
    opacity: 0.3,
  },
  "50%": {
    opacity: 0.8,
  },
});

// Section wrapper with starfield background
export const leadershipWrapper = style({
  position: "relative",
  padding: "4rem 0",
  overflow: "hidden",
});

// Large rounded container
export const outerCard = style({
  position: "relative",
  background: vars.color.bgCard,
  borderRadius: "2rem",
  padding: "3rem 2rem",
  overflow: "hidden",
  "@media": {
    "screen and (min-width: 768px)": {
      padding: "4rem 3rem",
      borderRadius: "2.5rem",
    },
  },
});

// Starfield background
export const starfield = style({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  overflow: "hidden",
});

// Individual star
export const star = style({
  position: "absolute",
  width: "2px",
  height: "2px",
  background: "rgba(255, 255, 255, 0.6)",
  borderRadius: "50%",
  animation: `${twinkle} 3s ease-in-out infinite`,
});

// Shooting star
export const shootingStarLine = style({
  position: "absolute",
  width: "80px",
  height: "1px",
  background: `linear-gradient(90deg, rgba(255,255,255,0.8), transparent)`,
  animation: `${shootingStar} 3s ease-in-out infinite`,
});

// Content wrapper (above starfield)
export const contentWrapper = style({
  position: "relative",
  zIndex: 1,
});

// Header styles
export const headerWrapper = style({
  textAlign: "center",
  marginBottom: "2.5rem",
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
