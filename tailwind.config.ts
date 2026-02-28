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
        // Luxury real estate palette
        cream: {
          DEFAULT: "#F8F5F0",
          50: "#FDFCFB",
          100: "#F8F5F0",
          200: "#EDE7DC",
          300: "#DDD3C3",
        },
        forest: {
          DEFAULT: "#1C2B1E",
          50: "#f3f5f3",
          100: "#d6ddd7",
          200: "#adb9af",
          300: "#7d9180",
          400: "#4d6450",
          500: "#2e4a31",
          600: "#1C2B1E",
          700: "#172418",
          800: "#111c12",
          900: "#0c140d",
        },
        gold: {
          DEFAULT: "#C9A84C",
          50: "#fdf8ec",
          100: "#f7eccc",
          200: "#efd898",
          300: "#e3bf5c",
          400: "#C9A84C",
          500: "#b8933a",
          600: "#9a7a2e",
          700: "#7c6226",
          800: "#634e1e",
          900: "#4d3c17",
        },
        sage: {
          DEFAULT: "#8A9E8C",
          50: "#f4f6f4",
          100: "#e3e8e3",
          200: "#c6d1c7",
          300: "#a3b5a4",
          400: "#8A9E8C",
          500: "#6e8470",
          600: "#586a5a",
          700: "#46544a",
          800: "#39443c",
          900: "#2e372f",
        },
        // Keep pine for article link colors
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
      },
      fontFamily: {
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        cormorant: ["'Cormorant Garamond'", "Georgia", "serif"],
        "dm-sans": ["'DM Sans'", "system-ui", "sans-serif"],
        playfair: ["'Playfair Display'", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out",
        "slide-up": "slideUp 0.7s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
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
            "--tw-prose-body": "#2C2C2C",
            "--tw-prose-headings": "#1C2B1E",
            "--tw-prose-links": "#276b50",
            "--tw-prose-bold": "#1C2B1E",
            "--tw-prose-quotes": "#2C2C2C",
            "--tw-prose-quote-borders": "#C9A84C",
            color: "#2C2C2C",
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
            h1: { color: "#1C2B1E", fontWeight: "600" },
            h2: { color: "#1C2B1E", fontWeight: "600", marginTop: "2.5em" },
            h3: { color: "#1C2B1E", fontWeight: "600" },
            strong: { color: "#1C2B1E", fontWeight: "600" },
            blockquote: {
              borderLeftColor: "#C9A84C",
              color: "#2C2C2C",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
