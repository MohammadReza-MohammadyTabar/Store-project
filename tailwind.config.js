/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tw-elements/dist/plugin"),
    require("tailwind-scrollbar"),
  ],
  daisyui: {
    themes: ["garden", "dark"],
  },
};
