const flowbite = require('flowbite/plugin');

module.exports = {
  purge: [['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']],
  darkMode: false,
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
    borderRadius: {
      '4xl': '2rem',
    }
  },
  variants: {},
  plugins: [flowbite],
}

