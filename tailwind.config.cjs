/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '/.index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        'verde-segundario': '#68DA3E',
        'azul-senior': '#759EFF',
        'verde-terciario': '#00C6AB'
      }
    },
  },
  plugins: [],
}
