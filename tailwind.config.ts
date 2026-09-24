import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Official CBOS Color System (from http://127.0.0.1:8080/ NIPS Core Platform)
        'cbos-blue': {
          DEFAULT: '#2F88C2',         /* CBOS Official Cerulean Top Bar */
          hover: '#2574A8',
          dark: '#1F6B9C',
          light: '#5CA5D4',
        },
        'cbos-navyDark': '#0B1A2D',   /* Deep sovereign dark background */
        'cbos-navy': '#11253E',       /* Surface background */
        'cbos-card': '#162D4C',       /* Card background */
        'cbos-cardHover': '#1B375C',
        'cbos-border': '#22446D',     /* Institutional border */
        'cbos-borderLight': '#2D588C',
        'cbos-slate': '#8F9CAE',      /* Muted metadata slate */
        'cbos-gold': {
          DEFAULT: '#C58F2B',         /* CBOS Official Banknote Gold */
          700: '#8E713A',
          600: '#B27F25',
          500: '#C58F2B',
          400: '#D4A038',
          300: '#DFAC46',
          200: '#EADFC1',
          100: '#F5EEDF',
          50: '#FAF6EE',
          light: '#DFAC46',
          hover: '#B27F25',
          subtle: 'rgba(197, 143, 43, 0.15)',
        },
        'cbos-green': {
          DEFAULT: '#3DA66E',         /* CBOS Official Green (Active/Settled) */
          950: '#0B1A2D',             /* Deep Sovereign Navy */
          900: '#11253E',             /* Navy Surface */
          850: '#142945',
          800: '#162D4C',             /* Navy Card */
          700: '#22446D',             /* Navy Border */
          600: '#2E8055',
          500: '#3DA66E',
          300: '#7DC89F',
          200: '#B5E2CA',
          100: '#DCF2E5',
          50: '#F0FAF4',
          dark: '#2E8055',
          light: '#4DB97F',
          subtle: '#62C993',
        },
        'cbos-red': {
          DEFAULT: '#E95B4D',         /* CBOS Official Red (Alerts) */
          dark: '#C83F32',
          light: '#F08277',
        },
        'cbos-ink': {
          DEFAULT: '#0B1A2D',
          base: '#0B1A2D',
          dark: '#071321',
          muted: '#8F9CAE',
          subtle: '#61748D',
          surface: '#11253E',
          card: '#162D4C',
          border: '#22446D',
        },
        'cbos-ivory': {
          DEFAULT: '#FAF9F6',
          dark: '#ECE8DF',
          light: '#FFFFFF',
        },
        sand: {
          50: '#FAF9F6',
          100: '#F6F4EE',
          200: '#ECE8DF',
          300: '#D8D4C8',
          400: '#B8B2A4',
          500: '#948E80',
          600: '#736D61',
          700: '#524E45',
          800: '#36332C',
          900: '#1F1D19',
        },
        ink: {
          base: '#0B1A2D',
          muted: '#8F9CAE',
          light: '#61748D',
          subtle: '#808E88',
        },
        // Nested cbos object matching 8080 directly
        cbos: {
          blue: '#2F88C2',
          blueHover: '#2574A8',
          navyDark: '#0B1A2D',
          navy: '#11253E',
          card: '#162D4C',
          cardHover: '#1B375C',
          border: '#22446D',
          borderLight: '#2D588C',
          gold: '#C58F2B',
          goldLight: '#DFAC46',
          goldHover: '#B27F25',
          green: '#3DA66E',
          greenDark: '#2E8055',
          red: '#E95B4D',
          slate: '#8F9CAE',
          ink: {
            DEFAULT: '#0B1A2D',
            base: '#0B1A2D',
            muted: '#8F9CAE',
            surface: '#11253E',
            card: '#162D4C',
            border: '#22446D',
          },
          ivory: {
            DEFAULT: '#FAF9F6',
            dark: '#ECE8DF',
            light: '#FFFFFF',
          },
          stone: {
            DEFAULT: '#D8D4C8',
            dark: '#A8A294',
          },
          alert: {
            red: '#E95B4D',
            green: '#2E8055',
            amber: '#D97706',
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-tajawal)', 'var(--font-cairo)', 'var(--font-inter)', 'Segoe UI', 'Tahoma', 'sans-serif'],
        display: ['var(--font-cairo)', 'var(--font-tajawal)', 'sans-serif'],
        cairo: ['var(--font-cairo)', 'sans-serif'],
        tajawal: ['var(--font-tajawal)', 'sans-serif'],
        arabic: ['var(--font-tajawal)', 'var(--font-cairo)', 'sans-serif'],
        latin: ['var(--font-inter)', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['var(--font-mono)', 'var(--font-tajawal)', 'Consolas', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 4.5vw, 4.75rem)', { lineHeight: '1.15', fontWeight: '800' }],
        'display': ['clamp(2.25rem, 3.5vw, 3.5rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h1': ['clamp(1.85rem, 2.5vw, 2.75rem)', { lineHeight: '1.25', fontWeight: '700' }],
        'h2': ['clamp(1.5rem, 2vw, 2.125rem)', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['clamp(1.25rem, 1.5vw, 1.625rem)', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.8', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.8', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['0.8125rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      boxShadow: {
        'cbos-card': '0 4px 20px -2px rgba(16, 23, 19, 0.08)',
        'cbos-elevation': '0 12px 32px -4px rgba(16, 23, 19, 0.12)',
        'cbos-gold': '0 0 25px rgba(185, 149, 83, 0.2)',
      }
    },
  },
  plugins: [],
};

export default config;
