const { colors } = require("./src/theme/colors.js");
const { fonts } = require("./src/theme/fonts.js");
const { borderRadius } = require("./src/theme/borderRadius.js");
const { shadows } = require("./src/theme/shadows.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/client/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    colors: {
      ...colors,
    },
    fontFamily: {
      ...fonts,
    },
    borderRadius: {
      ...borderRadius,
    },
    boxShadow: {
      ...shadows,
    },
    extend: {},
  },
  plugins: [],
};
