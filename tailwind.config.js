/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/index.html"],
  theme: {
    screens: {
      sm: "390px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "4rem",
        lg: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [],
};

