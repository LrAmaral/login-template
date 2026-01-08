/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFA500',
        secondary: '#ffd73d',
        'gray-secondary': '#f1f3f6',
      },
    },
  },
  plugins: [],
};
