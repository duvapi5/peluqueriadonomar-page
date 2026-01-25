import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores principales
        'dark': '#0b0b0b',
        'dark-lighter': '#111111',
        'dark-border': '#222222',
        'cream': '#f2e7d5',
        'cream-dark': '#e6d5bd',
        'red-barber': '#b31217',
        'red-hover': '#8d0e12',
        'gray-barber': '#9aa0a6',
        // Azul para el BarberPole
        'blue-barber': '#1e3a8a',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
