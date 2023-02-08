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
      backgroundImage:{
        "contactBannerImg" : "url('/Assets/Images/contactBanner.jpg')"
      },
      transitionDuration:{
        "400" : "400ms",
      },
      colors:{
        /* Primary Color Shades Used */
        "primary-light" : "#FDE68A" /*for amber-200 in tailwind css */ ,
        "primary-medium" : "#FBBF24" /*for amber-400 in tailwind css */ ,
        "primary-dark" : "#F59E0B" /*for amber-500 in tailwind css */ ,

        /* Secondary Color Shades Used */
        "secondary-light" : "#FBCFE8" /*for pink-200 in tailwind css */ ,
        "secondary-medium" : "#F472B6" /*for pink-400 in tailwind css */ ,
        "secondary-dark" : "#EC4899" /*for pink-500 in tailwind css */ ,
      }
    }
  },
  plugins:
      [
        require('@tailwindcss/line-clamp'),
        require('@headlessui/tailwindcss'),
        require('@tailwindcss/forms')
      ],
}