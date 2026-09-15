/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: {
          DEFAULT: '#38A9E8',
          50: '#F0F9FE',
          100: '#EAF6FD',
          200: '#D4ECFB',
          300: '#AEDCF7',
          400: '#7EC9F1',
          500: '#38A9E8',
          600: '#2D8FCB',
          700: '#2574A4',
          800: '#1F5E86',
          900: '#1B4D6E',
        },
        navy: {
          DEFAULT: '#0B2239',
          50: '#E8EDF2',
          100: '#D1DBE5',
          200: '#A3B7CA',
          300: '#7593AF',
          400: '#476F94',
          500: '#194B79',
          600: '#133A5F',
          700: '#0E2C4A',
          800: '#0B2239',
          900: '#081A2C',
        },
        cream: '#F7F8F6',
        'light-blue': '#EAF6FD',
        ink: {
          DEFAULT: '#17212B',
          muted: '#5D6873',
        },
        border: {
          DEFAULT: '#DDE4E9',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      spacing: {
        section: '5rem',
        'section-sm': '3.5rem',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        card: '0 1px 3px rgba(11, 34, 57, 0.06), 0 1px 2px rgba(11, 34, 57, 0.04)',
        'card-hover': '0 8px 24px rgba(11, 34, 57, 0.10), 0 2px 8px rgba(11, 34, 57, 0.06)',
        nav: '0 1px 0 0 rgba(11, 34, 57, 0.06)',
      },
      transitionDuration: {
        200: '200ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
