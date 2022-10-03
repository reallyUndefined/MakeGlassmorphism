/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        darkGray: "#191919",
        navyBlue: "#2D4263",
        kindaRed: "#C84B31",
        beige: "#ECDBBA",
      },
    },
  },
  plugins: [],
};
