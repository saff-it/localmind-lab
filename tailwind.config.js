/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./home/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
      colors: {
        // Override Relume tokens → dark theme
        background: {
          DEFAULT: "#0c0c0d",
          primary: "#0c0c0d",
          secondary: "#161617",
          tertiary: "#1e1e20",
          alternative: "#f0f0f2",
        },
        "neutral-white": "#161617",
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          primary: "rgba(255,255,255,0.08)",
          secondary: "rgba(255,255,255,0.15)",
          alternative: "#6B4EFF",
        },
        text: {
          DEFAULT: "#f0f0f2",
          primary: "#f0f0f2",
          secondary: "#8c8c96",
          alternative: "#f0f0f2",
        },
        link: {
          DEFAULT: "#f0f0f2",
          primary: "#f0f0f2",
          secondary: "#8c8c96",
          alternative: "#6B4EFF",
        },
        // Custom LocalMind accent
        accent: {
          DEFAULT: "#6B4EFF",
          hover: "#8B72FF",
          glow: "rgba(107,78,255,0.15)",
        },
      },
    },
  },
};
