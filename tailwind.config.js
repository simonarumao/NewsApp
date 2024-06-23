/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTeal: '#006D66',
        lightTeal:'#ECFDFC'
      },
    },
  },
  plugins: [],
}