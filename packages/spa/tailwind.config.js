/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": "{ margin-left: 0 }",
          "100%": "{ margin-left: calc(100% - 120px) }",
        },
      },
      animation: {
        slide: "slide 1s linear infinite;",
      },
    },
  },
  plugins: [],
};
