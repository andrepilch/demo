import { createThemeContract, createTheme } from "@vanilla-extract/css";

// Theme contract - defines the shape of all theme variables
export const vars = createThemeContract({
  color: {
    accent: null,
    accentLight: null,
    accentDark: null,
    bgPrimary: null,
    bgSecondary: null,
    bgCard: null,
    bgCardHover: null,
    textPrimary: null,
    textSecondary: null,
    textMuted: null,
    border: null,
    borderLight: null,
  },
  gradient: {
    hero: null,
    card: null,
    glow: null,
  },
  font: {
    sans: null,
    mono: null,
  },
  space: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    "2xl": null,
    "3xl": null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
    full: null,
  },
  shadow: {
    sm: null,
    md: null,
    lg: null,
    glow: null,
  },
});

// Dark theme (default)
export const darkTheme = createTheme(vars, {
  color: {
    accent: "#00aeef",
    accentLight: "#38bdf8",
    accentDark: "#0284c7",
    bgPrimary: "#0a0a0f",
    bgSecondary: "#12121a",
    bgCard: "#16161f",
    bgCardHover: "#1a1a25",
    textPrimary: "#f5f5f7",
    textSecondary: "#a1a1aa",
    textMuted: "#71717a",
    border: "#27272a",
    borderLight: "#3f3f46",
  },
  gradient: {
    hero: "linear-gradient(to top, #00AEEF 0%, #002533 88%)",
    card: "linear-gradient(135deg, rgba(14, 165, 233, 0.03) 0%, transparent 50%)",
    glow: "radial-gradient(circle at center, rgba(14, 165, 233, 0.2), transparent 70%)",
  },
  font: {
    sans: "var(--font-sans)",
    mono: "var(--font-mono)",
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.3)",
    md: "0 4px 6px rgba(0, 0, 0, 0.4)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.5)",
    glow: "0 4px 20px rgba(14, 165, 233, 0.4)",
  },
});

// Light theme
export const lightTheme = createTheme(vars, {
  color: {
    accent: "#00aeef",
    accentLight: "#0ea5e9",
    accentDark: "#002533",
    bgPrimary: "#ffffff",
    bgSecondary: "#f5f5f5",
    bgCard: "#ffffff",
    bgCardHover: "#f8f9fa",
    textPrimary: "#18181b",
    textSecondary: "#52525b",
    textMuted: "#a1a1aa",
    border: "#e4e4e7",
    borderLight: "#d4d4d8",
  },
  gradient: {
    hero: "linear-gradient(350deg,#00AEEF 70%, #002533 95%)",
    // hero: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(2, 132, 199, 0.1), transparent)',
    card: "linear-gradient(135deg, rgba(2, 132, 199, 0.03) 0%, transparent 50%)",
    glow: "radial-gradient(circle at center, rgba(2, 132, 199, 0.15), transparent 70%)",
  },
  font: {
    sans: "var(--font-sans)",
    mono: "var(--font-mono)",
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    glow: "0 4px 20px rgba(2, 132, 199, 0.3)",
  },
});
