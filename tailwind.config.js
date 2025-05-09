/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./components/**/*.{html,js}"], // Adjust based on your project structure
  theme: {
    extend: {
      fontFamily: {
        PlainLight: ['PlainLight', 'sans-serif'],
        PlainRegular: ['PlainRegular', 'sans-serif'],
        LatoLight: ['LatoLight', 'sans-serif'],
        LatoRegular: ['LatoRegular', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
