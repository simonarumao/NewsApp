/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTeal: '#017E7E',
        lightTeal: '#EDFFFF',
        hovercolor: '#045D5D',
        
      },
    },
  },
  plugins: [],
}