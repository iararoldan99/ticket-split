/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          text: '#070d01',
          background: '#f7fef0',
          primary: '#B9FF66',
          secondary: '#81b5f3',
          accent: '#7b5af0',
        },
        dark: {
          primary: '#71db14',
          secondary: '#0c3f7e',
          accent: '#2f0fa3',
        },
      },
      
    },
  }, 
  plugins: [],
}