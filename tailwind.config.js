/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors:{
        /* Primary Color Shades Used */
        "primary-light" : "#FDE68A" /*for amber-200 */ ,
        "primary-medium" : "#FBBF24" /*for amber-400 */ ,
        "primary-dark" : "#F59E0B" /*for amber-500 */ ,

        /* Secondary Color Shades Used */
        "secondary-light" : "#FBCFE8" /*for pink-200 */ ,
        "secondary-medium" : "#F472B6" /*for pink-400 */ ,
        "secondary-dark" : "#EC4899" /*for pink-500 */ ,
      }
    }
  },
  plugins: [ require('@tailwindcss/line-clamp') ],
}