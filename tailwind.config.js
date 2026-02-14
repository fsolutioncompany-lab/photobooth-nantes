/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f3',
          100: '#ffe0e5',
          200: '#ffc7d0',
          300: '#ffa3b3',
          400: '#ff7089',
          500: '#f93d68',
          600: '#e71d55',
          700: '#c21145',
          800: '#a11241',
          900: '#89133e',
        },
        accent: {
          50: '#fffbeb',
          100: '#fff3c6',
          200: '#ffe588',
          300: '#ffd14a',
          400: '#ffbe20',
          500: '#f99d07',
          600: '#dd7602',
          700: '#b75206',
          800: '#943f0c',
          900: '#7a340d',
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
