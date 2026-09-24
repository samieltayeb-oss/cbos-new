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
        // Flat utility colors for comprehensive institutional coverage
        'cbos-green': {
          DEFAULT: '#075A3A',
          950: '#032A1E',
          900: '#033E2D',
          850: '#054C36',
          800: '#075A3A',
          700: '#096E47',
          600: '#0B8255',
          500: '#109966',
          300: '#8ACFB1',
          200: '#C2E2D3',
          100: '#DCEFE6',
          50: '#EBF6F0',
          dark: '#033E2D',
          light: '#0A734B',
          subtle: '#0F8B5C',
        },
        'cbos-gold': {
          DEFAULT: '#B99553',
          700: '#8C6E33',
          600: '#A58242',
          500: '#B99553',
          400: '#CBB075',
          300: '#DDC99B',
          200: '#EADFC1',
          100: '#F5EEDF',
          50: '#FAF6EE',
          light: '#D4AF37',
          hover: '#A58242',
          subtle: 'rgba(185, 149, 83, 0.15)',
        },
        'cbos-ink': {
          DEFAULT: '#101713',
          base: '#10231C',
          dark: '#0A1813',
          muted: '#44534D',
          subtle: '#62736C',
          surface: '#151E19',
          card: '#1C2822',
          border: '#273830',
        },
        'cbos-ivory': {
          DEFAULT: '#F6F4EE',
          dark: '#ECE8DF',
          light: '#FAF9F6',
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
          base: '#10231C',
          muted: '#44534D',
          light: '#62736C',
          subtle: '#808E88',
        },
        // Nested legacy object for backwards compatibility
        cbos: {
          green: {
            DEFAULT: '#075A3A',
            950: '#032A1E',
            dark: '#033E2D',
            light: '#0A734B',
            subtle: '#0F8B5C',
          },
          ink: {
            DEFAULT: '#101713',
            base: '#10231C',
            muted: '#44534D',
            surface: '#151E19',
            card: '#1C2822',
            border: '#273830',
          },
          ivory: {
            DEFAULT: '#F6F4EE',
            dark: '#ECE8DF',
            light: '#FAF9F6',
          },
          gold: {
            DEFAULT: '#B99553',
            light: '#D4AF37',
            hover: '#A58242',
            subtle: 'rgba(185, 149, 83, 0.15)',
          },
          stone: {
            DEFAULT: '#D8D4C8',
            dark: '#A8A294',
          },
          sage: {
            DEFAULT: '#DCE7DF',
            light: '#EBF1EC',
            dark: '#B8CEC0',
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
        mono: ['var(--font-mono)', 'Consolas', 'Courier New', 'monospace'],
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
