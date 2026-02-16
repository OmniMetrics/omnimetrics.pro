/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // legacy keys (existing code might reference these)
        primary: '#0B1220',
        secondary: '#76cdf2',
        accent: '#1b79f2',

        // OmniMetrics palette
        om: {
          bg: '#050B14',
          surface: '#0B1220',
          surface2: '#0F1B2D',
          surface3: '#13243A',
          border: '#1B2B47',
          text: '#EAF2FF',
          muted: '#A7B6D1',
          cyan: '#76CDF2',
          blue: '#1B79F2',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(118,205,242,0.20), 0 0 25px rgba(27,121,242,0.20)',
        soft: '0 10px 30px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(60% 60% at 50% 0%, rgba(118,205,242,0.20) 0%, rgba(27,121,242,0.12) 30%, rgba(5,11,20,0) 70%)',
        'surface-grid':
          'linear-gradient(to right, rgba(27,43,71,0.20) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,43,71,0.20) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
    },
  },
  plugins: [],
}
