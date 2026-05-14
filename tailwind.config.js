/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#171717', muted: '#525252', faint: '#a3a3a3' },
        warm: { 50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4' },
        fire: { DEFAULT: '#ea580c', 50: '#fff7ed', 100: '#ffedd5', 600: '#c2410c' },
        electric: { DEFAULT: '#facc15' },
        ocean: { DEFAULT: '#0d9488', 600: '#0f766e' },
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      fontSize: {
        hero: ['clamp(3rem,7vw,5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '800' }],
        'hero-sub': ['clamp(1rem,1.5vw,1.2rem)', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        section: ['clamp(2rem,4vw,3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        lead: ['1.125rem', { lineHeight: '1.75' }],
      },
      backgroundImage: { 'dots-light': 'radial-gradient(circle,rgba(0,0,0,0.04) 1px,transparent 1px)' },
      backgroundSize: { dots: '20px 20px' },
      spacing: { 18: '4.5rem', 22: '5.5rem', 30: '7.5rem' },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(32px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
