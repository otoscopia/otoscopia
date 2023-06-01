/** @type {import('tailwindcss').Config} */

const colors = require('./src/infrastructure/themes/colors');

module.exports = {
  content: [
    './App.tsx',
    './src/components/*.jsx',
    './src/features/**/**/*.jsx',
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
