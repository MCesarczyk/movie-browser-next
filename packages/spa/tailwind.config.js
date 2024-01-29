/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { marginLeft: 0 },
          "100%": { marginLeft: 'calc(100% - 120px)' },
        },
      },
      animation: {
        slide: "slide 1s ease-out infinite;",
      },
    },
  },
  plugins: [],
};
