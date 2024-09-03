/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "bg-video": "url('./src/assets/bg-site.gif')",
        "bg-video-bk": "url('./src/assets/bg-site-black.gif')",
      }
    },
  },
  plugins: [],
}