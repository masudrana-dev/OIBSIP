/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'contianer': '1344px'
      },
      fontFamily: {
        "edu": "Edu VIC WA NT Beginner"
      }
    },
  },
  plugins: [],
}
