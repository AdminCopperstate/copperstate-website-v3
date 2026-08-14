/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#17140f',
          soft: '#211d17',
          line: '#3a352c',
        },
        cream: {
          DEFAULT: '#f2ede3',
          dim: '#e7e0d2',
        },
        copper: {
          light: '#f5a339',
          DEFAULT: '#e17a1f',
          dark: '#b85412',
        },
        graphite: '#8a8477',
        slate: '#5c574c',
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'copper-grad': 'linear-gradient(135deg, #f5a339 0%, #e17a1f 55%, #b85412 100%)',
        'hero-glow': 'radial-gradient(ellipse 900px 600px at 15% 20%, rgba(225,122,31,0.16), transparent 60%)',
      },
    },
  },
  plugins: [],
}
