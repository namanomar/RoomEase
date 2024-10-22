import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffa733',
        secondary: '#9B7EBD',
        tertiary: {
          light: '#181C14',
          dark: '#3C3D37',
        },
        blackAccent:{
          light:"#000000",
          dark:"#ffffff"
        },
        
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
