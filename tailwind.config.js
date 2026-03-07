/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f6f7',
          100: '#ededf0',
          200: '#d7d7de',
          300: '#b7b7c4',
          400: '#8f8fa2',
          500: '#6f6f84',
          600: '#58586c',
          700: '#464657',
          800: '#2c2c39',
          900: '#1b1b24'
        },
        blush: {
          50: '#fff2f5',
          100: '#ffe3ea',
          200: '#ffc7d4',
          300: '#ff9db3',
          400: '#ff6b8b',
          500: '#f64572',
          600: '#d92659',
          700: '#b01c47',
          800: '#8f1a3f',
          900: '#781a3b'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
};
