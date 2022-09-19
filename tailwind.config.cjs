/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      rubik: ["'Rubik', sans-serif"],
    },
    colors: {
      veryDarkGray: "hsl(0, 0%, 17%)",
      darkGray: "hsl(0, 0%, 59%)",
    },
    extend: {},
  },
  plugins: [],
}
