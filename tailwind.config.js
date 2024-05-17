/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
<<<<<<< HEAD
      keyframes: {
        slideUp: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        slideUp: 'slideUp 5s ease-out', 
      },
    },
  },
  plugins: [],
};


=======
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
    function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none', 
          '-ms-overflow-style': 'none', 
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none'
        }
      }, ['responsive', 'hover']);
    }
  ],
};
>>>>>>> be3bc3a8fe14f46ab621c622c5e8260fa96748c5
