/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/client/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        intraservice: {
          yellow: '#FFD600',
          black: '#222222',
          gray: '#E5E5E5',
        },
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      borderRadius: {
        intraservice: '0.5rem',
      },
      boxShadow: {
        intraservice: '0 2px 8px 0 rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
