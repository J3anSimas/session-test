/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      white: '#fff',
      'gray-900': '#222222',
      'gray-500': '#2d2d2d',
      'gray-300': '#464646',
      'gray-100': '#dbdbdb',

      'blue-700': '#0A4A77',
      'blue-500': '#2C87C7',
      'blue-300': '#78A5C5',

      'red-500': '#C72C2C'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    fontSize: {
      sm: '0.75rem',
      md: '0.875rem',
      lg: '1rem',
      xl: '1.125rem',
      '2xl': '1.25rem',
      '3xl': '2rem'
    }
  },
  plugins: []
}
