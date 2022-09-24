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
      }
    },
  },
  plugins: [],
}
