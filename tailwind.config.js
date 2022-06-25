/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#200518',
        secondary: '#EEF1F6',
        tertiary: '#0e1133',

        primaryLight: '#fa8473',
        lightBlue: '#E1F6FE',
        lightPink: '#FDEEDC',
        lightGreen: '#E1FDE2',
      },
      // screens: {
      //   lg: { max: '1800px' },
      //   md: { max: '990px' },
      //   sm: { max: '600px' },
      //   xs: { max: '400px' },
      //   minmd: '1700px',
      //   minlg: '2100px',
      // },
    },
  },
  plugins: [],
};
