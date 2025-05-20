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
      screens: {
        'xs': '320px',
        // => @media (min-width: 320px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1440px',
        // => @media (min-width: 1440px) { ... }

        '3xl': '1600px',
        // => @media (min-width: 1600px) { ... }

        '4xl': '1800px',
        // => @media (min-width: 1800px) { ... }
      }
    },
  },
  plugins: [],
};
