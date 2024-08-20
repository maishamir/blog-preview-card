/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#F4D04E',
        'gray': {
          950: '#111111',
          500: '#6B6B6B'
        }
      },
      fontFamily: {
        'fig': ['Figtree', 'sans-serif']
      },
    },
  },
  plugins: [],
}

