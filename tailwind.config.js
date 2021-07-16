module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
       bms:{
            50: '#edf1fc',
            100: '#d3d4e1',
            200: '#b6b8c9',
            300: '#989bb2',
            400: '#7c7f9b',
            500: '#636582',
            600: '#4c4f66',
            700: 'rgb(51,53,69)',
            800: '#21222e',
            900: '#0a0a16',
          },
      red:{
          100: '#F84464',
      },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
