/** @type {import('tailwindcss').Config} */

const colors = require('./src/infrastructure/themes/colors');

module.exports = {
  content: [
    './App.{tsx,jsx}',
    './src/*.{tsx,jsx}',
    './src/components/*.{tsx,jsx}',
    './src/features/**/**/*.{tsx,jsx}',
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
