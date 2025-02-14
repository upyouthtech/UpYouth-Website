import type { Config } from 'tailwindcss'

export default <Partial<Config>>({
  theme: {
    extend: {
      colors: {
        'blue-blur': '#48A6FF'
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.button-fill': {
          position: 'relative',
          overflow: 'hidden',
          color: 'black',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-100%',
            width: '100%',
            height: '100%',
            backgroundColor: '#1d4ed8', 
            zIndex: '0',
            transition: 'all 0.5s ease-out',
          },
          '&:hover::before': {
            left: '0',
          },
          '&:hover': {
            color: 'white',
          },
          '> *': {
            position: 'relative',
            zIndex: '1',
          },
        }
      });
    },
  ],
})