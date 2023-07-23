/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green": "#53b570",
        "red": "#de4e4e",
    }
    },
  },
  plugins: [],
}

