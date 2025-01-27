/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        b: {
          100: '#E6E7E8',
          200: '#B6B7BC',
          500: '#5C5F6A',
          600: '#474B57',
          800: '#202533',
          900: '#0E1422',
        },
        w: {
          100: '#F6F6F6',
          200: '#E9E9EB',
          900: '#FFFFFF',
        },
        blue: {
          400: '#A3BEF8',
        },
        yellow: {
          400: '#FFD58A',
        },
        green: {
          400: '#83B18B',
        },
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
    },
  },
  plugins: [],
};
