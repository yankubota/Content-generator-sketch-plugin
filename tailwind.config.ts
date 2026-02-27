import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#FFFFFF',
        accent: '#2F6BFF',
        muted: {
          100: '#f5f5f5',
          200: '#e7e7e7',
          400: '#9a9a9a',
          700: '#424242'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif']
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem'
      },
      boxShadow: {
        soft: '0 6px 20px -12px rgba(17,17,17,0.25)'
      }
    }
  },
  plugins: []
};

export default config;
