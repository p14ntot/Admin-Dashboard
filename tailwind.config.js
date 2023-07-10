/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        fontRaleway:['Raleway'],
      },

      colors: {
        myblue: ['#0832DE'],
        grayOfMenu:['#F1F1F1'],
        blackOfMenu:['#343434'],
        hoverSubMenu:['#CED6F8'],
      },

      letterSpacing: {
        '0.9': '0.9px',
      },

      height:{
        '712px':'712px',
        '899px':'899px',
      },

      width:{
        '135px':'135px',
      }
    },
  },
  plugins: [],
}

