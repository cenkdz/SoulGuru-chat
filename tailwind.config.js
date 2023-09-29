/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#70CFFF",
          "secondary": "#3A3A3A",
          "accent": "#3A3A3A",
          "neutral": "#3A3A3A",
          "base-100": "#70CFFF",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}


