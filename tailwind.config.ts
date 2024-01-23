import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1280px", // => @media (min-width: 1280px) { ... }
      "2xl": "1536px", // => @media (min-width: 1536px) { ... }
      "3xl": "2500px", // => @media (min-width: 2500px) { ... }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        yellow: {
          100: "#F0F3BD",
        },
        gray: {
          1: "#F8F7F7",
          2: "#ECECEC",
          3: "#FEF6E9",
          4: "#EAE3D7",
          5: "#E6E6E6",
          6: "#D9D9D8",
          7: "#B8B8B7",
          8: "#5e5e5e",
          9: "#eeefeb",
        },
        blues: {
          1: "#9FAFC6",
          2: "#6C7C93",
          3: "#47566B",
          4: "#3A495F",
          5: "#2D3A4F",
          6: "#253246",
          7: "#1E2B3E",
          8: "#182435",
          9: "#141E2E",
          10: "#0077FF",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
