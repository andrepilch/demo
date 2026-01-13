import { style } from "@vanilla-extract/css";
import { vars } from "@/styles";

export const section = style({
  position: "relative",
  zIndex: 10,
  paddingTop: "6rem",
  paddingBottom: "6rem",
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

export const sectionHeader = style({
  textAlign: "center",
  marginBottom: "4rem",
});

export const eyebrow = style({
  color: vars.color.accent,
  fontSize: "0.875rem",
  fontWeight: "500",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  marginBottom: "1rem",
});

export const sectionTitle = style({
  fontSize: "1.875rem",
  fontWeight: "700",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "2.25rem",
    },
  },
});

export const gridThree = style({
  display: "grid",
  gap: "2rem",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
});

export const statCard = style({
  position: "relative",
  padding: "2rem",
  background: vars.color.bgCard,
  borderRadius: vars.radius.lg,
  overflow: "hidden",
  textAlign: "center",
  "::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: vars.radius.lg,
    padding: "1px",
    background:
      "linear-gradient(135deg, rgba(14, 165, 233, 0.4), transparent 50%)",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
    WebkitMaskComposite: "xor",
    pointerEvents: "none",
  },
});

export const statValue = style({
  fontSize: "3rem",
  fontWeight: "700",
  background: `linear-gradient(135deg, ${vars.color.accentLight}, ${vars.color.accent})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  marginBottom: "0.75rem",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "3.75rem",
    },
  },
});

export const statLabel = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  marginBottom: "0.5rem",
  color: vars.color.textSecondary,
});

export const statDescription = style({
  color: vars.color.textMuted,
});
