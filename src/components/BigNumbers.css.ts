import { style } from "@vanilla-extract/css";
import { vars } from "@/styles";

// Only positioning context needed - Container handles maxWidth/padding
export const section = style({
  position: "relative",
  zIndex: 10,
});

export const whiteWrapper = style({
  background: "#ffffff",
  borderRadius: vars.radius.xl,
  padding: "3rem",
  boxShadow: vars.shadow.lg,
});

export const statCard = style({
  position: "relative",
  padding: "2rem",
  background: vars.color.bgCard,
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
    background: "linear-gradient(135deg,rgba(0, 37, 51, 0.4), transparent 50%)",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
    WebkitMaskComposite: "xor",
    pointerEvents: "none",
  },
});
