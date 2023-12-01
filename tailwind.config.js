/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'audiowide': ['Audiowide', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

