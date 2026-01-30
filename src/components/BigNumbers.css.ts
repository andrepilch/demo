import { style } from "@vanilla-extract/css";
import { vars } from "@/styles";

export const whiteWrapper = style({
  borderRadius: vars.radius["4xl"],
  padding: "2rem",
  boxShadow: vars.shadow.lg,
  background: vars.color.bgCardFrosted,
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
});

export const statCard = style({
  position: "relative",
  padding: "1rem",
  background: vars.color.bgCardFrosted,
  borderRadius: vars.radius.lg,
  overflow: "hidden",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  "::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: vars.radius.lg,
    padding: "1px",
    background: "linear-gradient(135deg,#00aeef 40%, transparent 50%)",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
    WebkitMaskComposite: "xor",
    pointerEvents: "none",
  },
});

export const statDetailsContainer = style({
  display: "flex",
  flexDirection: "column",
});