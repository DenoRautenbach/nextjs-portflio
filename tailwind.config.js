// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#CCD0CF',  // lightest
          100: '#9BA8AB',
          200: '#4A5C6A',
          300: '#253745',
          400: '#112120',
          500: '#06141B', // darkest / base
        },
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [],
};
