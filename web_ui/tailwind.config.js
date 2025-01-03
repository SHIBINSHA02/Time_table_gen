/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradientStart1: '#FDC8C4',
        gradientEnd1: '#E79FA0',
        gradientStart2: '#CAEBE4',
        gradientEnd2: '#AFD8D2',
      },
      backgroundImage: {
        'gradient-to-l': 'linear-gradient(to left, #FDC8C4, #E79FA0)',
        'gradient-to-r': 'linear-gradient(to right, #CAEBE4, #AFD8D2)',
      },
    },
  },
  plugins: [],
};
