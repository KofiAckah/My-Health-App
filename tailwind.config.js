/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./Screen/**/*.{js,jsx,ts,tsx}",
    "./Screen/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#191512",
          200: "#f46e0b",
          300: "#7e7e7e",
          400: "#262626",
          500: "#011627",
        },
      },
    },
  },
  plugins: [],
};
