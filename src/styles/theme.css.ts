import { createThemeContract, createTheme } from "@vanilla-extract/css";

const colors = {
      gray100: {
        $type: "color",
        $value: {
          colorSpace: "srgb",
          alpha: 1,
          hex: "#111111" // blueish 0a0a0f
        },
      },
      gray200: {
        $type: "color",
        $value: {
          colorSpace: "srgb",
          alpha: 1,
          hex: "#333333"
        },
  },
      gray300: {
        $type: "color",
        $value: {
          colorSpace: "srgb",
          components: [0.3, 0.3, 0.3],
          alpha: 1,
          hex: "#555555"
        },
      },
      gray900: {
        $type: "color",
        $value: {
          colorSpace: "srgb",
          alpha: 1,
          hex: "#DBDBDB"
        },
  },
      gray1000: {
        $type: "color",
        $value: {
          colorSpace: "srgb",
          alpha: 1,
          hex: "#FAFAFA"
        },
      },
      accentDark: {
        $type: "color",
        $value: {
          colorSpace: "srgb",
          alpha: 1,
          hex: "#003F57"
        },
  },
      accentLight: {
        $type: "color",
        $value: {
          colorSpace: "srgb",
          alpha: 1,
          hex: "#D7EDF5"
        },
      },
      accent: {
        $type: "color",
        $value: {
          colorSpace: "srgb",
          alpha: 1,
          hex: "#00aeef"
        },
  },
      white: {
        $type: "color",
        $value: {
          colorSpace: "srgb",
          alpha: 1,
          hex: "#FFFFFF"
        },
      },
    }
// Theme contract - defines the shape of all theme variables
export const vars = createThemeContract({
  color: {
    accent: null,
    bgPrimary: null,
    bgSecondary: null,
    bgCard: null,
    bgCardHover: null,
    bgCardFrosted: null,
    textPrimary: null,
    textSecondary: null,
    textOnAccent: null,
    textAccentDark: null,
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
  gap: {
    section: null,
    sectionSm: null,
    sectionLg: null,
    element: null,
    elementSm: null,
  },
  layout: {
    headerHeight: null,
    contentMaxWidth: null,
    mobileContentMaxWidth: null,
    sectionPaddingX: null,
    sectionPaddingXMd: null,
    sectionPaddingXLg: null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
    full: null,
    "2xl": null,
    "3xl": null,
    "4xl": null,
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
    accent: colors.accent.$value.hex,
    bgPrimary: colors.gray100.$value.hex,
    bgSecondary: "#12121a",
    bgCard: "#16161f",
    bgCardHover: "#1a1a25",
    bgCardFrosted: "rgba(22, 22, 31, 0.8)",
    textPrimary: colors.white.$value.hex,
    textSecondary: "#a1a1aa",
    textOnAccent: colors.white.$value.hex,
    textAccentDark: colors.accentDark.$value.hex,
    textMuted: "#71717a",
    border: "#27272a",
    borderLight: "#3f3f46",
  },
  gradient: {
    hero: "linear-gradient(353deg,#00aeef 70%, #00131A 95%)",
    card: "linear-gradient(135deg, rgba(14, 165, 233, 0.03) 0%, transparent 50%)",
    glow: "radial-gradient(circle at center, rgba(0, 174, 239, 0.5), transparent 70%)",
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
  gap: {
    section: "6rem",
    sectionSm: "2rem",
    sectionLg: "8rem",
    element: "3rem",
    elementSm: "0.5rem",
  },
  layout: {
    headerHeight: "64px",
    contentMaxWidth: "72rem",
    mobileContentMaxWidth: "90vw",
    sectionPaddingX: "1.5rem",
    sectionPaddingXMd: "2rem",
    sectionPaddingXLg: "4rem",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
    "2xl": "24px",
    "3xl": "32px",
    "4xl": "40px",
  },
  shadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.3)",
    md: "0 4px 6px rgba(0, 0, 0, 0.4)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.5)",
    glow: "0 0 30px 8px rgba(0, 174, 239, 0.6)",
  },
});

// Light theme
export const lightTheme = createTheme(vars, {
  color: {
    accent: colors.accent.$value.hex,
    bgPrimary: colors.white.$value.hex,
    bgSecondary: colors.gray900.$value.hex,
    bgCard: colors.white.$value.hex,
    bgCardHover: colors.gray1000.$value.hex,
    bgCardFrosted: "rgba(255, 255, 255, 0.8)",
    textPrimary: colors.gray100.$value.hex,
    textSecondary: colors.gray300.$value.hex,
    textOnAccent: colors.white.$value.hex,
    textAccentDark: colors.accentDark.$value.hex,
    textMuted: colors.gray900.$value.hex,
    border: colors.gray900.$value.hex,
    borderLight: colors.gray1000.$value.hex,
  },
  gradient: {
    hero: "linear-gradient(360deg,#00aeef 60%, #002533 98%)",
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
  gap: {
    section: "6rem",
    sectionSm: "2rem",
    sectionLg: "8rem",
    element: "3rem",
    elementSm: "0.5rem",
  },
  layout: {
    headerHeight: "64px",
    contentMaxWidth: "80vw",
    mobileContentMaxWidth: "90vw",
    sectionPaddingX: "1.5rem",
    sectionPaddingXMd: "2rem",
    sectionPaddingXLg: "4rem",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "24px",
    "3xl": "32px",
    "4xl": "40px",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    glow: "0 0 25px 6px rgba(0, 174, 239, 0.5)",
  },
});
