import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles";

const fadeInUp = keyframes({
  from: {
    opacity: "0",
    transform: "translateY(20px)",
  },
  to: {
    opacity: "1",
    transform: "translateY(0)",
  },
});

export const heroSection = style({
  position: "relative",
  zIndex: 10,
  minHeight: "50vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
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

export const heroContent = style({
  maxWidth: "56rem",
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.element,
});

export const eyebrow = style({
  color: vars.color.textOnAccent,
  fontSize: "1rem",
  fontWeight: "500",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out forwards`,
});

export const heroTitle = style({
  fontSize: "2.25rem",
  fontWeight: "700",
  lineHeight: 1.1,
  color: "#ffffff",
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out forwards`,
  animationDelay: "0.1s",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "3rem",
    },
    "screen and (min-width: 1024px)": {
      fontSize: "3.75rem",
    },
  },
});

export const heroSubtitle = style({
  fontSize: "1.25rem",
  color: "rgba(255, 255, 255, 0.85)",
  maxWidth: "42rem",
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out forwards`,
  animationDelay: "0.2s",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "1.5rem",
    },
  },
});

export const ctaButtons = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out forwards`,
  animationDelay: "0.3s",
});

export const btnPrimary = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  borderRadius: "9999px",
  fontWeight: "500",
  transition: "all 0.3s ease",
  background: vars.color.bgSecondary,
  color: vars.color.textPrimary,
  ":hover": {
    background: vars.color.bgCardHover,
    transform: "translateY(-1px)",
    boxShadow: vars.shadow.glow,
  },
});

export const iconSm = style({
  width: "16px",
  height: "16px",
});
