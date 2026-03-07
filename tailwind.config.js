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
        },
        coral: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12'
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a'
        },
        violet: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95'
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
        glow: '0 0 40px rgba(245, 69, 114, 0.15)',
        glowTeal: '0 0 40px rgba(20, 184, 166, 0.12)'
      }
    },
  },
  plugins: [],
};
