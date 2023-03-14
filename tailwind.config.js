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

      screens: {
        'smd': '700px',
        '3xl' : '1540px'
      },

      keyframes: {
        RotateCompanyIcons: {
          '0%': { transform: 'rotate(0deg)' },
          '12%': { transform: 'rotate(45deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '37%': { transform: 'rotate(135deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '62%': { transform: 'rotate(225deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '87%': { transform: 'rotate(315deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        RotateBorder: {
          '0%': { transform: 'rotate(360deg)' },
          '12%': { transform: 'rotate(315deg)' },
          '25%': { transform: 'rotate(270deg)' },
          '37%': { transform: 'rotate(225deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '62%': { transform: 'rotate(135deg)' },
          '75%': { transform: 'rotate(90deg)' },
          '87%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        'Image-Rotation': 'RotateCompanyIcons 30s linear infinite',
        'Border-Rotation': 'RotateBorder 30s linear infinite'
      },

      backgroundImage:{
        "contactBannerImg" : "url('/Assets/Images/contactBanner.jpg')",
        "reviewBannerImg" : "url('/Assets/Images/reviewBanner.jpg')",
        "blogBannerImg" : "url('/Assets/Images/blogBanner.jpg')",
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