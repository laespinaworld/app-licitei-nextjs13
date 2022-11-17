/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      'primary': '#0B5B75',
      'primary_click': '#144963',
      'primary_hover': '#2E7E99',
      'secundary': '#00B29D',
      'secundary_hover': '#20D6C1',
      'secundary_click': '#00A390',
      'action': '#FF7630',
      'action-click': '#E56C2E',
      'action-hover': '#FF8C51',
      'auxiliar-green': '#4DC082',
      'auxiliar-red': '#E45D55',
      'auxiliar-yellow': '#F6D14C',
      'neutras-black': '#304347',
      'neutras-black_1': '#576F74',
      'neutras-gray': '#92AAAE',
      'neutras-gray_1': '#E6EFEF',
      'neutras-light': '#F7FCFC',
      'neutras-white': '#FFFFFF',
    }
  },
  plugins: [],
}