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
        WarningColorKeyFrames: {
          '0% , 100%' : { color: 'rgb(255,0,0)' },
          '50%' : { color: 'rgb(0,0,255)' },
        },
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
        'TextWarningColor': 'WarningColorKeyFrames 0.4s  infinite',
        'Image-Rotation': 'RotateCompanyIcons 30s linear infinite',
        'Border-Rotation': 'RotateBorder 30s linear infinite'
      },

      backgroundImage:{
        "aboutUsBannerImg" : "url('/Assets/Images/aboutUsBanner.jpg')",
        "contactUsBannerImg" : "url('/Assets/Images/contactUsBanner.jpg')",
        "reviewBannerImg" : "url('/Assets/Images/reviewBanner.jpg')",
        "blogBannerImg" : "url('/Assets/Images/blogBanner.jpg')",
        "singleBlogBannerImg" : "url('/Assets/Images/singleBlogBanner.jpg')"
      },

      transitionDuration:{
        "400" : "400ms",
      },

      colors:{

        /* Card Color */
        "card-color" : "#f5f5fa" /* this colour "rose-50" is in tailwind css predefined Color palette reference (https://tailwindcss.com/docs/background-color#class-reference) */ ,

        /* Primary Color Shades Used */
        "primary-light" : "#FDE68A" /* this colour "amber-200" is in tailwind css predefined Color palette reference (https://tailwindcss.com/docs/background-color#class-reference) */ ,
        "primary-medium" : "#FBBF24" /* this colour "amber-400" is in tailwind css predefined Color palette reference (https://tailwindcss.com/docs/background-color#class-reference) */ ,
        "primary-dark" : "#F59E0B" /* this colour "amber-500" is in tailwind css predefined Color palette reference (https://tailwindcss.com/docs/background-color#class-reference) */ ,

        /* Secondary Color Shades Used */
        "secondary-light" : "#FBCFE8" /* this colour "pink-200" is in tailwind css predefined Color palette reference (https://tailwindcss.com/docs/background-color#class-reference) */ ,
        "secondary-medium" : "#F472B6" /* this colour "pink-400" is in tailwind css predefined Color palette reference (https://tailwindcss.com/docs/background-color#class-reference) */ ,
        "secondary-dark" : "#EC4899" /* this colour "pink-500" is in tailwind css predefined Color palette reference (https://tailwindcss.com/docs/background-color#class-reference) */ ,
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      }
    }
  },
  plugins:
      [
        require('autoprefixer'),
        require('@tailwindcss/line-clamp'),
        require('@headlessui/tailwindcss'),
        require('@tailwindcss/forms')
      ],
}