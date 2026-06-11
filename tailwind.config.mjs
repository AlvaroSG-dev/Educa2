/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        verde: '#8fbc4e',
        'verde-claro': '#a8c96e',
        'verde-oscuro': '#5a8a1f',
        'verde-bg': '#e8f5d0',
        burdeos: '#b03030',
        morado: '#7b3f9e',
        gris: '#2d3748',
        'gris-claro': '#718096',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(5deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-3deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(8deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
