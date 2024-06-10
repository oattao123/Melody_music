import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      colors: {
        customColor1: '#7469B6',
        customColor2: '#FFE6E6',
        customColor3: '#AD88C6',
        customColor4: '#E1AFD1',
      },
    },
  },
  plugins: [],

  
};
export default config;

