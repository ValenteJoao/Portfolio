/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "bg-video": "url('https://github.com/ValenteJoao/Portfolio/blob/main/src/assets/bg-site-black.gif?raw=true')",
        "bg-video-bk": "url('./src/assets/bg-site-black.gif')",
      }
    },
  },
  plugins: [],
}