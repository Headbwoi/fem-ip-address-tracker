/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      rubik: ["'Rubik', sans-serif"],
    },
    colors: {
      veryDarkGray: "hsl(0, 0%, 17%)",
      darkGray: "hsl(0, 0%, 59%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
}
