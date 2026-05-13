/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          50:  '#18181b',
          100: '#27272a',
          200: '#3f3f46',
        },
        accent: {
          DEFAULT: '#ff6b35',
          50:  '#fff3ed',
          100: '#ffe5d5',
          200: '#ffc7aa',
          300: '#ff9f74',
          400: '#ff7b4d',
          500: '#ff6b35',
          600: '#ed4f1c',
          700: '#c73b13',
          800: '#9e3117',
          900: '#802c18',
        },
        cyan: {
          DEFAULT: '#06d6a0',
          light: '#5aecc9',
        },
        electric: {
          DEFAULT: '#ffe66d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.92', letterSpacing: '-0.04em', fontWeight: '800' }],
        'hero-sub': ['clamp(1rem, 2vw, 1.25rem)', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'section': ['clamp(2.2rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'mega': ['clamp(6rem, 15vw, 14rem)', { lineHeight: '0.85', letterSpacing: '-0.06em', fontWeight: '900' }],
      },
      backgroundImage: {
        'grid-dots': 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'diagonal-stripes': 'repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)',
      },
      backgroundSize: {
        'dots': '24px 24px',
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'fade': 'fade 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        scroll: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        fade: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: { '0%': { opacity: 0, transform: 'translateY(40px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        slideInRight: { '0%': { opacity: 0, transform: 'translateX(60px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
      },
    },
  },
  plugins: [],
}
