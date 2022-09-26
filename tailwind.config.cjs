/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors
      colors: {
        primary: {
          DEFAULT :"#1DB954",
        },
      },
      // animation
      animation: {
        slideup: 'slideup 1s ease-in-out',
        slidedown: 'slidedown 1s ease-in-out',
        slideleft: 'slideleft 1s ease-in-out',
        slideright: 'slideright 1s ease-in-out',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade 2.2s ease-in-out',
      },
      keyframes: {
        slideup: {
          from: {opacity: 0, transform: 'translateY(25%)'},
          to: {opacity: 1, transform: 'none'},
        },
        slidedown: {
          from: {opacity: 1, transform: 'translateY(-25%)'},
          to: {opacity: 0, transform: 'none'},
        },
        slideleft: {
          from: {opacity: 0, transform: 'translateX(-20%)'},
          to: {opacity: 1, transform: 'translateX(0)'},
        },
        slideright: {
          from: {opacity: 0, transform: 'translateX(20%)'},
          to: {opacity: 1, transform: 'translateX(0)'},
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        slowfade: {
          from: {opacity: 0},
          to: {opacity: 1},
        },
      },
    },
  },
  plugins: [],
}
