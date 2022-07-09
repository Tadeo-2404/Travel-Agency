/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.pug',
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '767px'},
        'md': {'min': '768px', 'max': '991px'},
        'lg': {'min': '992px', 'max': '1199px'},
        'xl': {'min': '1200px'},
      },
      backgroundImage: {
        'hero': "url('/imgSimp/header.webp')",
      }
    },
  },
  plugins: [],
}
