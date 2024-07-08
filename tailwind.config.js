/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pt-serif': ['"PT Serif"', 'serif'],
      },
      backgroundImage: {
        'bgForm': "url('/calculator/bgForm.png')",
      }
    },
  },
  plugins: [],
};
