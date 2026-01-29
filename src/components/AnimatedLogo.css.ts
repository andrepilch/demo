import { style, keyframes } from "@vanilla-extract/css";

// Logo text shimmer animation
const logoShimmer = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(10px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

// Gradient flow animation for the triangle
const gradientFlow = keyframes({
  "0%": {
    stopColor: "#00aeef",
  },
  "33%": {
    stopColor: "#00d4ff",
  },
  "66%": {
    stopColor: "#0099dd",
  },
  "100%": {
    stopColor: "#00aeef",
  },
});


// Outline drawing animation
const drawOutline = keyframes({
  "0%": {
    strokeDashoffset: 500,
  },
  "100%": {
    strokeDashoffset: 0,
  },
});

export const logoContainer = style({
  position: "relative",
  width: "190px",
  height: "121px",
  display: "block",
});

export const triangleSvg = style({
  position: "absolute",
  top: "8px",
  left: "8px",
  width: "100%",
  height: "100%",
  overflow: "visible",
  filter: "drop-shadow(0 0 6px rgba(0, 174, 239, 0.3))",
  transition: "filter 0.8s ease",
  transformOrigin: "top left",
  ":hover": {
    filter: "drop-shadow(0 0 12px rgba(0, 174, 239, 0.5))",
  },
});

export const trianglePath = style({
  transition: "d 4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s ease-out",
});

// Triangle outline that draws on load
export const triangleOutline = style({
  fill: "none",
  stroke: "#00aeef",
  strokeWidth: 2,
  strokeDasharray: 500,
  strokeDashoffset: 500,
  filter: "drop-shadow(0 0 4px rgba(0, 174, 239, 0.8))",
  animation: `${drawOutline} 1.2s ease-out forwards`,
  transition: "d 4s cubic-bezier(0.4, 0, 0.2, 1)",
});

// After outline is drawn, keep it visible
export const outlineDrawn = style({
  strokeDashoffset: 0,
});

export const gradientStop1 = style({
  animation: `${gradientFlow} 4s ease-in-out infinite`,
});

export const gradientStop2 = style({
  animation: `${gradientFlow} 4s ease-in-out infinite 1.3s`,
});

export const gradientStop3 = style({
  animation: `${gradientFlow} 4s ease-in-out infinite 2.6s`,
});

export const logoText = style({
  position: "absolute",
  top: "8px",
  left: "8px",
  width: "100%",
  height: "100%",
  color: "#ffffff",
  opacity: 0,
  animation: `${logoShimmer} 0.6s ease-out 0.8s forwards`,
  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
  transition: "filter 0.3s ease",
  ":hover": {
    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))",
  },
});

// Edge glow effect
export const edgeGlow = style({
  position: "absolute",
  top: "8px",
  left: "8px",
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  opacity: 0,
  transition: "opacity 0.4s ease",
  selectors: {
    [`${logoContainer}:hover &`]: {
      opacity: 1,
    },
  },
});

const edgeTrace = keyframes({
  "0%": {
    strokeDashoffset: 400,
  },
  "100%": {
    strokeDashoffset: 0,
  },
});

export const edgePath = style({
  stroke: "rgba(0, 174, 239, 0.8)",
  strokeWidth: 2,
  fill: "none",
  strokeDasharray: 400,
  strokeDashoffset: 400,
  filter: "drop-shadow(0 0 4px rgba(0, 174, 239, 1))",
  transition: "d 4s cubic-bezier(0.4, 0, 0.2, 1)",
  selectors: {
    [`${logoContainer}:hover &`]: {
      animation: `${edgeTrace} 1s ease-out forwards`,
    },
  },
});

// Growing animation for the triangle path
const triangleGrowPath = keyframes({
  "0%": {
    opacity: 0,
    transform: "scale(0)",
  },
  "100%": {
    opacity: 1,
    transform: "scale(1)",
  },
});

export const triangleGrowAnimation = style({
  animation: `${triangleGrowPath} 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
  transformOrigin: "top left",
});

// Hypotenuse glow line
const hypotenuseGlow = keyframes({
  "0%": {
    strokeDashoffset: 300,
    opacity: 0,
  },
  "50%": {
    opacity: 1,
  },
  "100%": {
    strokeDashoffset: 0,
    opacity: 0.6,
  },
});

export const hypotenuseLine = style({
  stroke: "rgba(255, 255, 255, 0.6)",
  strokeWidth: 1.5,
  fill: "none",
  strokeDasharray: 300,
  strokeDashoffset: 300,
  filter: "drop-shadow(0 0 3px rgba(255, 255, 255, 0.8))",
  transition: "d 4s cubic-bezier(0.4, 0, 0.2, 1)",
  selectors: {
    [`${logoContainer}:hover &`]: {
      animation: `${hypotenuseGlow} 1.2s ease-out forwards`,
    },
  },
});

