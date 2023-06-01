/** @type {import('tailwindcss').Config} */

const colors = require('./src/infrastructure/themes/colors');

module.exports = {
  content: ['./App.tsx'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
