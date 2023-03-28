/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jura: ["Jura", "sans-serif"],
        Playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
