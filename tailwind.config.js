/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "0 2px 4px rgba(0, 0, 0, 0.1)",
        "custom-medium": "0 4px 10px rgba(0, 0, 0, 0.25)",
        "custom-dark": "0 8px 16px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
