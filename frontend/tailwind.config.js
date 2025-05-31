/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#f5f5f5',   // white
        // secondary: '#262525',   // grey
        secondary: '#211f1e',   // grey
        tertiary: '#34d2e0',  // light blue
        accent: '#229799',    // dark blue
        background: '#000000',  // black    
        // background: '#1a1917',  // black    
      },
    },
  },
  plugins: [],
}
