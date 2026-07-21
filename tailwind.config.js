/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.tsx',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6A1A',
          50: '#FFEDEA',
          100: '#FFDAD4',
          300: '#FF9477',
          500: '#D75600',
          light: '#FFA23E',
        },
        secondary: {
          DEFAULT: '#8C8377',
          light: '#E8DECF',
        },
        ink: {
          DEFAULT: '#211B14',
          2: '#8C8377',
          3: '#5f574e',
          dark: '#f2ece2',
          'dark-2': '#9c9286',
          'dark-3': '#c6bbab',
        },
        muted: { DEFAULT: '#a89e90', dark: '#7e7568' },
        chev: { DEFAULT: '#c2b8a8', dark: '#665e50' },
        surface: {
          page1: '#FBF3E9', // backgorund
          page2: '#E8DECF',
          app: '#FAF7F1',
          card: '#FFFFFF',
          'page1-dark': '#241a10',
          'page2-dark': '#0c0907',
          'app-dark': '#16120e',
          'card-dark': '#221c16',
        },
        frame: { DEFAULT: '#E6DFD4', dark: '#2a251e' },
        badge: { DEFAULT: 'rgba(0,0,0,.05)', dark: 'rgba(255,255,255,.08)' },
        border: { DEFAULT: 'rgba(0,0,0,.1)', dark: 'rgba(255,255,255,.13)' },
        line: { DEFAULT: 'rgba(0,0,0,.06)', dark: 'rgba(255,255,255,.07)' },
      },
    },
  },
  plugins: [],
};
