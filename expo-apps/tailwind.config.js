/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FE8C00",
        white: {
          DEFAULT: "#FFFFFF",
          100: "#FAFAFA",
        },
        grey: {
          100: "#878787",
        },
        dark: {
          100: "#181C2E",
        },
        error: "#F14141",
        success: "#2F9865",
      },
      fontFamily: {
        quicksand: ["Quicksand-Regular", "sans-serif"],
        bold: ["Quicksand-Bold", "sans-serif"],
        semibold: ["Quicksand-SemiBold", "sans-serif"],
        light: ["Quicksand-Light", "sans-serif"],
        medium: ["Quicksand-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
