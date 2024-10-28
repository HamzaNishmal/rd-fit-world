import type { Config } from "tailwindcss";

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
        primary: '#FFD700', 
        secondary: '#222222', 
        lightBg: '#FAF9F6',
        darkBg: '#000000',
        darkText: '#f5f5f5',
        lightText: '#222222',
      },
      transitionProperty: {
        theme: 'background-color, color, border-color',
      },
      boxShadow: {
        'hero': '0px 4px 15px rgba(0, 0, 0, 0.3)', 
      },
    },
  },
  plugins: [],
};

export default config;
