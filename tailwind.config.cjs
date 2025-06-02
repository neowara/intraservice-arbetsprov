const { colors } = require('./src/theme/colors');
const { fonts } = require('./src/theme/fonts');
const { borderRadius } = require('./src/theme/borderRadius');
const { shadows } = require('./src/theme/shadows');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/client/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        intraservice: colors,
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
    },
  },
  plugins: [],
}
