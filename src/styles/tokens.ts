// src/styles/tokens.ts

export const tokens = {
  colors: {
    charcoal: {
      50: "#f6f6f6",
      100: "#e7e7e7",
      800: "#2a2a2a",
      900: "#1a1a1a",
      950: "#0d0d0d", // Base background
    },
    walnut: {
      500: "#5c4033",
      900: "#2b1d16",
    },
    cream: {
      500: "#f5f2eb", // Base foreground
    },
    bronze: {
      400: "#d6985a",
      500: "#cd7f32", // Accent
    },
  },
  spacing: {
    "2xs": "0.25rem", // 4px
    xs: "0.5rem",     // 8px
    sm: "1rem",       // 16px
    md: "1.5rem",     // 24px
    lg: "2rem",       // 32px
    xl: "3rem",       // 48px
    "2xl": "4.5rem",  // 72px
    "3xl": "6rem",    // 96px
    "4xl": "8rem",    // 128px
    section: "10rem", // 160px
  },
  radius: {
    soft: "0.5rem",
    pill: "9999px",
  },
  shadows: {
    luxury: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
    "3xl": "1920px",
  },
  containers: {
    base: "1200px",
    wide: "1600px",
  }
};
