/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azulClaro': '#73B4FE',
        'celeste': '#87C8FF',
        'rojoClaro': '#FE7773',
        'negro': '#1E2235',
        'toNegro': '#251E35',
        'gris': '#424867'
      },
      screens: {
        'm2xl': { 'raw': '(max-width: 1535px)' },
        'mxl': { 'raw': '(max-width: 1279px)' },
        'mlg': { 'raw': '(max-width: 1023px)' },
        'mmd': { 'raw': '(max-width: 767px)' },
        'msm': { 'raw': '(max-width: 639px)' },
      }
    },
  },
  plugins: [],
}
