/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "bg-video-bk": "url('https://github.com/ValenteJoao/Portfolio/blob/main/src/assets/bg-site-black.gif?raw=true')",
      },
      colors: {
        "primary": "#9758ED",
      },
    },
  },
  plugins: [],
}