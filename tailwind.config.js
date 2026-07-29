/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        brandBlue: {
          900: '#1E3A8A',
          800: '#1E40AF',
          600: '#2563EB',
          500: '#3B82F6',
          400: '#60A5FA',
        },
        orangeCTA: {
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
        bgLight: '#F8FAFC',
        cardBg: '#FFFFFF',
      },
      fontFamily: {
        heading: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
