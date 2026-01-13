import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles";

const diagonalMorph = keyframes({
  "0%, 100%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 30%, 0% 50%)",
  },
  "25%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 42%, 0% 44%)",
  },
  "50%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 35%)",
  },
  "75%": {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 38%, 0% 48%)",
  },
});

export const diagonalShape = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "250%",
  pointerEvents: "none",
  clipPath: "polygon(0% 0%, 100% 0%, 100% 25%, 0% 50%)",
  animation: `${diagonalMorph} 100s ease-in-out infinite`,
  background: vars.gradient.hero,
});
