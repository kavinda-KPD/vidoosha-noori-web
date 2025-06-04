/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary green theme - fresh and organic
        organic: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        // Natural green variations
        nature: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        // Keep jaggery brown for accents
        jaggery: {
          50: "#fdf7ed",
          100: "#f5eed6",
          200: "#e9dcac",
          300: "#dcc177",
          400: "#d19c4a",
          500: "#c77d2e",
          600: "#b86124",
          700: "#984620",
          800: "#7c3720",
          900: "#652e1e",
        },
        // Earthy tones for text and accents
        earth: {
          50: "#f8f6f1",
          100: "#edebe1",
          200: "#ddd7c5",
          300: "#c7bda0",
          400: "#b3a17e",
          500: "#a08968",
          600: "#92785c",
          700: "#79654e",
          800: "#625344",
          900: "#504439",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
