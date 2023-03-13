/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.75rem',
      base: ['15px', {
        lineHeight: '25px',
        letterSpacing: '0',
        fontWeight: 400,
      }],
      xl: ['12px', {
        lineHeight: '16px',
        letterSpacing: '2px',
        fontWeight: 700
      }],
      '2xl': ['18px', {
        lineHeight: '25px',
        letterSpacing: '0',
        fontWeight: 700
      }],
      '3xl': ['24px', {
        lineHeight: '25px',
        letterSpacing: '0',
        fontWeight: 700
      }],
      '4xl': ['32px', {
        lineHeight: '40px',
        letterSpacing: '3.33px',
        fontWeight: 700
      }],
      '5xl': ['40px', {
        lineHeight: '48px',
        letterSpacing: '4.17px',
        fontWeight: 700
      }]
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        lightGrey: "#DFDFDF"
      },
      maxWidth: {
        'desktop': 1440,
      },
      minWidth:{
        'cardDesktop': 360
      },
      height: {
        'cardFocus': 470
      }
    },
  },
  plugins: [],
}
