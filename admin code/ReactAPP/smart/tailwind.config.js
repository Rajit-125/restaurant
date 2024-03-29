/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'JUICE': "url('/assets/JUICE.jpg')",
        'PROFILE': "url('/assets/QR-CODE.jpg')",
      },
    },
  },
  plugins: [],
}

