/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      keyframes: {
        move_up: {
          'from': { transform: 'translateY(20px)' },
          'to': { transform: 'translateY(0)' },
        },
        move_down: {
          'from': { top :'-1rem' },
          'to': { top: '2rem' },
        },
  
  },
    animation: {
      move_up: 'move_up 0.4s ease-in-out',
      move_down:'move_down 0.4s ease-in-out',
    }

  },
},
  plugins: [],
}

