import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Basecamp brand palette - premium outdoorsy aesthetic
        pine: {
          50: "#f0f7f4",
          100: "#d9ede3",
          200: "#b6dbc9",
          300: "#86c1a6",
          400: "#57a280",
          500: "#378565",
          600: "#276b50",
          700: "#205642",
          800: "#1c4536",
          900: "#19392e",
          950: "#0c201a",
        },
        slate: {
          850: "#1a2332",
        },
        ridge: {
          50: "#faf8f5",
          100: "#f2ece3",
          200: "#e4d7c5",
          300: "#d3bda0",
          400: "#c09e79",
          500: "#b3875d",
          600: "#a67451",
          700: "#8a5d44",
          800: "#714d3c",
          900: "#5c4133",
          950: "#31201a",
        },
        summit: {
          50: "#f0f5ff",
          100: "#e0eaff",
          200: "#c7d8fe",
          300: "#a4bdfc",
          400: "#7f97f8",
          500: "#6172f1",
          600: "#4a4de5",
          700: "#3d3dca",
          800: "#3435a3",
          900: "#303381",
          950: "#1d1e4b",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Outfit'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--tw-slate-900, #0f172a)",
            "--tw-prose-headings": "var(--tw-slate-950, #020617)",
            "--tw-prose-links": "#276b50",
            "--tw-prose-bold": "var(--tw-slate-950, #020617)",
            "--tw-prose-quotes": "var(--tw-slate-700, #334155)",
            "--tw-prose-quote-borders": "#378565",
            color: "#0f172a",
            a: {
              color: "#276b50",
              fontWeight: "500",
              textDecoration: "underline",
              textDecorationColor: "rgba(39, 107, 80, 0.3)",
              textUnderlineOffset: "2px",
              "&:hover": {
                color: "#205642",
                textDecorationColor: "#205642",
              },
            },
            h1: {
              color: "#020617",
              fontWeight: "700",
            },
            h2: {
              color: "#020617",
              fontWeight: "700",
              marginTop: "2.5em",
            },
            h3: {
              color: "#020617",
              fontWeight: "700",
            },
            strong: {
              color: "#020617",
              fontWeight: "600",
            },
            blockquote: {
              borderLeftColor: "#378565",
              color: "#334155",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
