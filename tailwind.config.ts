import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        heading: ['Mackinac', 'sans-serif'],
      },
      colors: {
        dark: '#2A2D32',
        main: '#048C8C',
        secondary: '#FFB480',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
