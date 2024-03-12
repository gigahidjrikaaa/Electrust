import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      oxfordBlue: {
        DEFAULT: "#0B132B",
      },
      richBlack: {
        DEFAULT: "#1C2541",
      },
      yaleBlue: {
        DEFAULT: "#3A506B",
      },
      mikadoYellow: {
        DEFAULT: "#F4D35E",
      },
      gold: {
        DEFAULT: "#EE964B",
      },
    },
    fontFamily: {
      'russo-one': ['Russo One', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
