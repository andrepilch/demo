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
  minHeight: "75vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: vars.layout.contentMaxWidth,
  paddingLeft: vars.layout.sectionPaddingX,
  paddingRight: vars.layout.sectionPaddingX,
  marginLeft: "auto",
  marginRight: "auto",
  "@media": {
    "screen and (min-width: 768px)": {
      paddingLeft: vars.layout.sectionPaddingXLg,
      paddingRight: vars.layout.sectionPaddingXLg,
    },
  },
});

export const heroContent = style({
  maxWidth: "56rem",
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.element,
});

export const heroTitle = style({
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out forwards`,
  animationDelay: "0.1s",
});

export const ctaButtons = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out forwards`,
  animationDelay: "0.3s",
});

export const interjection = style({
  fontFamily: "var(--font-cursive), cursive",
  fontSize: "0.6em",
  fontWeight: "400",
  opacity: 0.85,
  display: "inline-block",
  transform: "rotate(-2deg)",
  marginLeft: "0.1em",
  marginRight: "0.1em",
  whiteSpace: "nowrap",
});
