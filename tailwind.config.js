/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#378ce7',
        secondary: '#a3ffb4',
        tertiary: '#d3d3d3',
        cream: '#fff8e1',
        sky: '#87ceeb',
        forest: '#228b22',
        royalblue: '#4169e1',
        smoke: '#f5f5f5',
        silver: '#c0c0c0',
        berkeley: '#003366',
      },
      fontFamily: {
        base: ['Spectral', 'serif'],
      },
    },
  },
  plugins: [],
};
