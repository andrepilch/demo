import { style } from "@vanilla-extract/css";
import { vars } from "@/styles";

export const section = style({
  position: "relative",
  zIndex: 10,
});

// Container with gap for section content layout
export const sectionContent = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.sectionSm,
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
  display: "flex",
  flexDirection: "column",
  gap: vars.gap.elementSm,
});

export const eyebrow = style({
  color: vars.color.accent,
  fontSize: "0.875rem",
  fontWeight: "500",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
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
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
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
  background: vars.color.accent,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "3.75rem",
    },
  },
});

export const statLabel = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: vars.color.textSecondary,
});

export const statDescription = style({
  color: vars.color.textMuted,
});
