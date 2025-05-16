/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#f5f5f5',   // white
        secondary: '#4d5454',   // grey
        tertiary: '#34d2e0',
        accent: '#229799',        
        background: '#1a1917',  // black    
      },
    },
  },
  plugins: [],
}
