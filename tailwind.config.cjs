/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-text': 'hsl(0, 0%, 100%)',
      'dark-elements': 'hsl(209, 23%, 22%)',
      'dark-background': 'hsl(207, 26%, 17%)',
      'light-text': 'hsl(200, 15%, 8%)',
      'light-elements': 'hsl(0, 0%, 100%)',
      'light-background': 'hsl(0, 0%, 98%)',
      'light-input': 'hsl(0, 0%, 52%)'
    },
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif']
    },
    extend: {
      aspectRatio: {
        '3/2': '3 / 2'
      }
    },
  },
  plugins: [],
}

