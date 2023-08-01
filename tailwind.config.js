/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Gothic: ['Sawarabi Gothic, sans-serif'],
        Serif: ['PT Serif, serif']
      },

    },

  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}

