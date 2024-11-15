/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#FFCC21",
          400: '#FF963C',
          500: '#EA6C00'
        },
        secondary: {
          300: '#8FE9D0'
        },
        dark: {
          600: '#2E2E2E',
          500: '#414141',
          400:'#777777'
        },
        light: '#FFFFFF'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)',
      },
    },
  },
  plugins: [],
};
