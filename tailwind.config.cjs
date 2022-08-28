/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "ig-brand": {
          DEFAULT: "#3294F8",
        },
        "ig-input": {
          DEFAULT: "#040F1A",
        },
        "ig-background": {
          DEFAULT: "#071422",
        },
        "ig-profile": {
          DEFAULT: "#0B1B2B",
        },
        "ig-post": {
          DEFAULT: "#112131",
        },
        "ig-border": {
          DEFAULT: "#1C2F41",
        },
        "ig-label": {
          DEFAULT: "#3A536B",
        },
        "ig-span": {
          DEFAULT: "#7B96B2",
        },
        "ig-text": {
          DEFAULT: "#AFC2D4",
        },
        "ig-subtitle": {
          DEFAULT: "#C4D4E3",
        },
        "ig-title": {
          DEFAULT: "#E7EDF4",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
