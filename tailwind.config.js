/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profile': 'url("./images/profile.jpg")',
        'desk': 'url("./images/desk.png")',
        'emoji': 'url("./images/emoji.png")',
        'zacktech': 'url("./images/project1.png")',
        'twitter-clone': 'url("./images/project2.png")',
        'transcendence': 'url("./images/project4.png")',
        'soliswap': 'url("./images/soliswap.png")',
        'javamedia': 'url("./images/javamedia.png")',
        'transcendence': 'url("./images/transcendence.png")',
      }
    },
    colors: {
      dark_grey: '#2d2e32',
      light_grey: '#767676',
      v_light_grey: '#F8F8F8',
      black: '#000000',
      white: '#FFFFFF',
      blue: '#147efb',
      grey_bg: '#f9f9f9',
    },
    fontFamily: {
      'h1': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}
