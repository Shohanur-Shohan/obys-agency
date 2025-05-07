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
      keyframes: {
        changeFont: {
          '0%': {
            fontFamily: 'LatoLight',
            WebkitTextStroke: '1px #fff',
            color: '#fff',
            fontWeight: '300',
          },
          '100%': {
            fontFamily: 'PlainRegular',
            WebkitTextStroke: '1px #fff',
            color: 'transparent',
            fontWeight: '300',
          },
        },
      },
      animation: {
        changeFont: 'changeFont 1.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
