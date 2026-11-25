import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F0",
        "cream-dark": "#F0E8D8",
        brown: {
          DEFAULT: "#8B5E3C",
          dark: "#5C3D2E",
          light: "#C9956A",
        },
        caramel: "#D4894A",
        "warm-white": "#FFFDF9",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      animation: {
        "fadeInUp": "fadeInUp 0.6s ease-out forwards",
        "fadeIn": "fadeIn 0.4s ease-out forwards",
        "slideInRight": "slideInRight 0.4s ease-out forwards",
        "pulse-soft": "pulse-soft 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideInRight: {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
