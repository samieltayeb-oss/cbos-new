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
        cbos: {
          green: {
            DEFAULT: '#075A3A',    /* Deep Sudan Green */
            dark: '#033E2D',       /* Dark Institutional Green */
            light: '#0A734B',
            subtle: '#0F8B5C',
          },
          ink: {
            DEFAULT: '#101713',     /* Ink / Near Black */
            surface: '#151E19',
            card: '#1C2822',
            border: '#273830',
          },
          ivory: {
            DEFAULT: '#F6F4EE',    /* Warm Ivory */
            dark: '#ECE8DF',
            light: '#FAF9F6',
          },
          gold: {
            DEFAULT: '#B99553',    /* Muted Sudan Gold */
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
        sans: ['var(--font-cairo)', 'var(--font-ibm-arabic)', 'var(--font-inter)', 'Segoe UI', 'Tahoma', 'sans-serif'],
        display: ['var(--font-cairo)', 'var(--font-tajawal)', 'sans-serif'],
        mono: ['var(--font-mono)', 'Consolas', 'Courier New', 'monospace'],
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
