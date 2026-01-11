/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#008',
        'gray-secondary': '#f1f3f6',
      },
    },
  },
  plugins: [],
};
