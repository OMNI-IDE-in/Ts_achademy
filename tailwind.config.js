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
          950: '#090E1A',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          DEFAULT: '#0F172A',
        },
        deepBlue: {
          900: '#1E3A8A',
          800: '#1E40AF',
          600: '#2563EB',
          500: '#3B82F6',
          400: '#60A5FA',
          DEFAULT: '#1E3A8A',
        },
        gold: {
          400: '#D4A017',
          500: '#B8860B',
          600: '#9A7109',
          700: '#785707',
          DEFAULT: '#B8860B',
        },
        academicGold: '#B8860B',
        offWhite: '#FAFAF8',
        lightGray: '#F3F4F6',
        borderGray: '#E5E7EB',
        bgLight: '#FAFAF8',
        cardBg: '#FFFFFF',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
