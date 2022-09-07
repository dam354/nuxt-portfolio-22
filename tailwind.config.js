/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        teko: ["Teko", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
