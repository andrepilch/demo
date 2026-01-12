import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles";

const diagonalMorph = keyframes({
  "0%, 100%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 25%, 0% 55%)",
  },
  "25%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 0% 45%)",
  },
  "50%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 60%, 0% 30%)",
  },
  "75%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 45%, 0% 42%)",
  },
});

export const diagonalBackground = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "2000px",
  pointerEvents: "none",
  zIndex: 1,
  overflow: "visible",
});

export const diagonalShape = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "2000px",
  background: vars.color.accent,
  clipPath: "polygon(0% 0%, 100% 0%, 100% 25%, 0% 50%)",
  animation: `${diagonalMorph} 100s ease-in-out infinite`,
});
