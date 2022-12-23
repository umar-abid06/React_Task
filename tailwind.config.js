/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      main: "#9BFF00",
      logout: "#050505",
      grayish: "#1D1D1D",
    },
  },
  plugins: [],
};
