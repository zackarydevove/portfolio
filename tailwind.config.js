/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profile': 'url("./images/profile.jpg")',
        'desk': 'url("./images/desk.png")',
        'emoji': 'url("./images/emoji.png")',
        'project1': 'url("./images/project1.png")',
        'project2': 'url("./images/project2.png")',
        'project3': 'url("./images/project3.png")',
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
