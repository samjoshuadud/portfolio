/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeInSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in forwards',
        slideUp: 'slideUp 0.8s ease-out forwards',
        gradient: 'gradient 6s ease infinite',
        'achievement': 'achievement 0.3s ease-out',
        fadeInSlideUp: 'fadeInSlideUp 0.7s ease-out forwards',

      },
      backgroundSize: {
        '200%': '200%',
      },
      dropShadow: {
        'glow': '0 0 3px rgba(46, 165, 102, 0.7)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}