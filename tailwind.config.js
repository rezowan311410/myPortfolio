/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1140px',
      },
      fontFamily: {
          mont: ['Montserrat', 'sans-serif'],
      },
      fontFamily:{
       pop: ['Poppins', 'sans-serif']
      }, 
      colors: {
        bg_color: '#f5f5f5',
      },
      boxShadow: {
        boxS: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
