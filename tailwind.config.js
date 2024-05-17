/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
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
