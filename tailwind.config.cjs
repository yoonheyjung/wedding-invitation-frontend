const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      padding: "0rem",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        pingSlow: "pingSlow 1s cubic-bezier(0, 0.5, 0.2, 2) infinite",
      },
      keyframes: {
        pingSlow: {
          "50%, 100%": {
            transform: "scale(2)",
            opacity: 0.5,
          },
        },
      },
      colors: {
        beige: "#FBF0EA",
        borderPink: "#FF9999",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  backgroundImage: {
    logo: "url('./assets/logo1.PNG')",
  },
};
