import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#121212',
        secondary: '#303030',
        tertiary: '#4D4D4D',
        blue_primary: '#0053A0',
        blue_secondary: '#2870B3',
        blue_tertiary: '#508DC6',
        red_primary: '#A11722',
        red_secondary: '#AB3D46',
        red_tertiary: '#BF656C',
        text_primary: '#FFFFFF',
        text_secondary: '#EDEDED',
        text_tertiary: '#E7E7E7',
      },
    },
  },
  plugins: [],
};
export default config;
