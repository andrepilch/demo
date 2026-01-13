import { style } from "@vanilla-extract/css";
import { vars } from "@/styles";

export const toggleButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: "1000px",
  background: "transparent",
  // border: `1px solid ${vars.color.border}`,
  color: vars.color.textSecondary,
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    borderColor: vars.color.accent,
    color: vars.color.accent,
    background: vars.color.bgSecondary,
  },
});

export const icon = style({
  width: "20px",
  height: "20px",
});
