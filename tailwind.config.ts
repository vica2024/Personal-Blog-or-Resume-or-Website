import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '1xl': '1.25rem',
      },
      fontFamily: {
        custom: ['ca-co'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
export default config;
