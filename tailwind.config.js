/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    container: {
      screens: {
        xs: "100%",
        sm: '516px',
        md: '720px',
        lg: '936px',
        xl: '936px',
        '2xl': '936px'
      }  
    }
  },
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
        // put the default values of any config you want themed
        // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
        extend: {
          // colors is used here for demonstration purposes
          colors: {
            primary: '#333333',
            bg: '#ffffff'
          }
        }
      },
      themes: [
        {
          // name your theme anything that could be a valid css class name
          // remember what you named your theme because you will use it as a class to enable the theme
          name: 'pdark',
          // put any overrides your theme has here
          // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
          extend: {
            colors: {
              primary: '#ffffff',
              bg: '#151516'
            }
          }
        }
      ]
    })
  ],
}

