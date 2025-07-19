/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px'
        }
      },
      colors: {
        white: '#fff',
        black: '#000',
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

